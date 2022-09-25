/*! Img lazy-load */
const lazyImg = () => {
	$('img[data-src]').each(function () {
		let img = $(this);
		img.attr('src', img.attr('data-src'));
		img.on('load', function () {
			img.removeAttr('data-src');
		});
	});
}
/*const lazyImg = {
	_this: this,
	define(el) {
		let observer = new window.IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				if (!el.data('loaded')) {
					this.show(el);
					console.log('enter')
					el.data('loaded', true);
				}
				return;
			}
		}, {
			root: null,
			threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
		})

		observer.observe(el.get(0));
	},
	show(el) {
		if (el.is('img')) {
			
		}
		if (el.is('picture')) {
			
		}
	},
	init() {
		for (var i=0;i<$('.lazyImg').length;i++) {
			this.define($('.lazyImg').eq(i))
		}
	}
}*/