'use strict';

//=include ../../node_modules/jquery/dist/jquery.js
//=include ../../node_modules/device.js/dist/device.umd.js

//=include ../modules/cheg.units/functions.js

//=include ../modules/cheg.scrollto/functions.js

//=include ../modules/cheg.tabs/functions.js
//=include ../modules/cheg.accordions/functions.js
//=include ../modules/cheg.expand/functions.js

//=include ../modules/cheg.inputs/functions.js
//=include ../modules/cheg.forms/functions.js

//=include ../modules/cheg.scrolllock/functions.js
//=include ../modules/cheg.popups/functions.js

//=include ../modules/cheg.lazyimg/functions.js

//=include ../modules/cheg.menu/functions.js

//=include ../modules/cheg.checkwebp/functions.js

let def = {
	winWidth: 0,
	winHeight: 0,

	sbWidth: 0,

	scrollOffset: 60,
	scrollPos: 0,
	popupOpened: false,
	scrollLockPos: 0,

	animDuration: 200,

	pageLoaded: false,

	formTitle: '',

	menuOpened: false,

	deviceIs: device.device
}

def.deviceIs.addClasses(document.documentElement);

(function () {
	if (def.deviceIs.touch) {
		$('html').addClass('touch');
	} else {
		$('html').addClass('no-touch');
	}

	def.winWidth = $(window).width();
	def.winHeight = $(window).height();
	def.scrollPos = $(window).scrollTop();

	// Main init
	init();

	//popup('request');

	// Click on burger
	$(document).on('click', '.menu-toggle', function () {
		if (!def.menuOpened) {
			menu.open();
		} else {
			menu.close();
		}
	});



	if (def.deviceIs.desktop) {
		$(window).on('resize', function () {
			units.all();
		});
	} else {

	}

	if (def.deviceIs.mobile || def.deviceIs.tablet) {
		$(window).on('orientationchange', function () {
			units.vh();
		}).on('resize', function () {
			units.mobile();
		});
	}

	$(window).on('resize', function () {
		def.winWidth = $(window).width();
		def.winHeight = $(window).height();
		def.scrollPos = $(window).scrollTop();

		if (def.menuOpened) {
			menu.close();
		}
	});
	$(window).on('scroll', function () {
		def.scrollPos = $(window).scrollTop();
	});

	$(window)
		.trigger('resize')
		.trigger('scroll');

	// Scroll to element
	$(document).on('click', 'a[href^="#"], .scrollTo', function (e) {
		e.preventDefault();
		let el = $(this).attr('href') || $(this).attr('data-scrollto-target');

		scrollTo(el, def.scrollOffset);
	});

	//=include ../modules/cheg.popups/init.js
})(jQuery);

$(window).on('load', function () {
	setTimeout(function () {
		// hide preloader
		$('.preloader').fadeOut(1000, function () {
			$(this).remove();
		});
		$('body').addClass('body--page-loaded');
		def.pageLoaded = true;
		$(window).trigger('scroll');
	}, 300);
});

/*! Init */
function init() {
	// Units
	units.all();

	// Img lazy-load
	lazyImg();

	// Tabs
	$('.ui-tabs').each(function () {
		if ($(this).data('tabsInit') !== true) {
			tabsInit($(this));
		}
	});

	// Accordions
	$('.ui-accordion').each(function () {
		if ($(this).data('accordionInit') !== true) {
			accordionInit($(this));
		}
	});

	// Popups
	$('.popup').each(function () {
		if ($(this).data('popupsInit') !== true) {
			popups.init($(this));
		}
	});

	// Inputs
	$('.ui-input').each(function () {
		if ($(this).data('inputInit') !== true) {
			inputInit($(this));
		}
	});

	// Forms
	$('.ui-form').each(function () {
		if ($(this).data('formInit') !== true) {
			formInit($(this));
		}
	});

	// Expandable blocks
	$('.ui-expand').each(function () {
		if ($(this).data('expandInit') !== true) {
			expandInit($(this));
		}
	});
}