let build_folder = require('path').basename(__dirname);
let source_folder = '#src';

let fs = require('fs');
let pConfig;

let path = {
	build: {
		tpl: build_folder + '/template/',
		html: build_folder + '/',
		css: build_folder + '/css/',
		js: build_folder + '/js/',
		img: build_folder + '/images/',
		fonts: build_folder + '/fonts/',
		timestamp: build_folder + '/'
	},
	src: {
		html: [source_folder + '/**/*.{php,html,htaccess}', '!' + source_folder + '/**/_*.{php,html}'],
		css: source_folder + '/scss/style.scss',
		libs: source_folder + '/js/plugins.js',
		js: source_folder + '/js/scripts.js',
		imgMin: [
			source_folder + '/images/**/*.{jpg,png,svg,gif,ico,webp}',
			'!' + source_folder + '/images/favicon/*.*',
			'!' + source_folder + '/images/**/__*'
		],
		imgWebp: [
			source_folder + '/images/**/*.{jpg,png,gif}',
			'!' + source_folder + '/images/favicon/*.*',
			'!' + source_folder + '/images/**/__*'
		],
		imgCopy: [
			source_folder + '/images/**/__*'
		],
		fonts: source_folder + '/fonts/*.ttf',
		fav: source_folder + '/images/favicon/*',
		timestamp: source_folder + '/data/timestamp.txt'
	},
	watch: {
		html: source_folder + '/**/*.{php,html,htaccess}',
		css: source_folder + '/scss/**/*.scss',
		libs: source_folder + '/js/plugins.js',
		js: source_folder + '/js/scripts.js',
		img: source_folder + '/images/**/*.{jpg,png,svg,gif,ico,webp}',
		fav: source_folder + '/images/favicon/*'
	},
	clean: './' + build_folder + '/',
	copy: ''
}

let { src, dest } = require('gulp'),
	gulp = require('gulp'),
	browsersync = require('browser-sync').create(),
	fileinclude = require('gulp-file-include'),
	del = require('del'),
	scss = require('gulp-sass')(require('sass')),
	autoprefixer = require('gulp-autoprefixer'),
	group_media = require('gulp-group-css-media-queries'),
	clean_css = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify-es').default,
	imagemin = require('gulp-imagemin'),
	webphtml = require('gulp-webp-for-html'),
	webp = require('imagemin-webp'),
	webpcss = require('gulp-webpcss'),
	svgSprite = require('gulp-svg-sprite'),
	ttf2woff = require('gulp-ttf2woff'),
	ttf2woff2 = require('gulp-ttf2woff2'),
	fonter = require('gulp-fonter'),
	newer = require('gulp-newer'),
	replace = require('gulp-replace');

//let pConfig = require('./' + source_folder + '/data/config.json');

function browserSync(params) {
	browsersync.init({
		proxy: build_folder,
		notify: false
	});
}
function version() {
	fs.writeFile(path.src.timestamp, Date.now().toString(), cb);

	return src(path.src.timestamp);
}
function html() {
	let task = src(path.src.html, {dot: true});

	task.pipe(fileinclude())

	return task
		.pipe(webphtml(
			['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG', '.gif', '.GIF']
		))
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream());
}
function css() {
	return src(path.src.css)
		.pipe(
			scss({
					outputStyle: 'expanded'
				})
				.on('error', scss.logError)
		)
		.pipe(
			group_media()
		)
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 2 versions'],
				cascade: false
			})
		)
		.pipe(webpcss({
				webpClass: '._webp',
				noWebpClass: '._no-webp'
			}
		))
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: '.min.css'
			})
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream());
}
function libs() {
	return src(path.src.libs)
		.pipe(fileinclude())
		.pipe(dest(path.build.js))
		.pipe(
			uglify()
		)
		.pipe(
			rename({
				extname: '.min.js'
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}
function js() {
	return src(path.src.js)
		.pipe(fileinclude())
		.pipe(dest(path.build.js))
		.pipe(
			uglify({
				output:
					{
						comments: false
					}
				}
			)
		)
		.on('error', function (err) { console.log(err.toString()); this.emit('end'); })
		.pipe(
			rename({
				extname: '.min.js'
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}
function images() {
	src(path.src.imgCopy)
		.pipe(newer(path.build.img))
		.pipe(dest(path.build.img))

	src(path.src.imgWebp)
		.pipe(newer(path.build.img))
		.pipe(
			imagemin([
				webp({
					quality: 75
				})
			])
		)
		.pipe(
			rename({
				extname: '.webp'
			})
		)
		.pipe(dest(path.build.img))

	return src(path.src.imgMin)
		.pipe(newer(path.build.img))
		.pipe(
			imagemin([
				imagemin.gifsicle({
					interlaced: true
				}),
				imagemin.mozjpeg({
					quality: 75,
					progressive: true
				}),
				imagemin.optipng({
					optimizationLevel: 5
				}),
				imagemin.svgo({
					plugins: [
						{removeViewBox: true},
						{cleanupIDs: false},
					]
				})
			])
		)
		.pipe(dest(path.build.img));
}
function fonts() {
	src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts));
};
gulp.task('otf2ttf', function () {
	return src([source_folder + '/fonts/*.otf'])
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(dest(source_folder + '/fonts/'));
})
gulp.task('svgSprite', function () {
	return gulp.src([source_folder + '/iconsprite/*.svg'])
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../icons/icons.svg',  //sprite file name
					example: true
				}
			},
		}
		))
		.pipe(dest(path.build.img));
})
function fontsStyle(params) {
	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		});
	}
}
function fav() {
	return src(path.src.fav)
		.pipe(dest(path.build.img + 'favicon/'));
}
function cb() { }
function watchFiles(params) {
	gulp.watch([path.watch.html, source_folder + '/data/config.json'], html);
	gulp.watch([path.watch.libs],
		gulp.parallel(
			libs,
			version,
			html
		)
	);
	gulp.watch([path.watch.css],
		gulp.parallel(
			css,
			version,
			html
		)
	);
	gulp.watch([path.watch.js],
		gulp.parallel(
			js,
			version,
			html
		)
	);
	gulp.watch([path.watch.img], images);
	gulp.watch([path.watch.fav], fav);
}
function clean(params) {
	return del(path.clean);
}
let build = gulp.series(
	clean,
	version,
	gulp.parallel(
		libs,
		js,
		css,
		html,
		images,
		fonts,
		fav
	),
	fontsStyle
);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.libs = libs;
exports.js = js;
exports.css = css;
exports.html = html;
exports.fav = fav;
exports.version = fav;
exports.build = build;
exports.watch = watch;
exports.default = watch;
