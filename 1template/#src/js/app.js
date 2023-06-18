import '../modules/jquery/functions.js';

import { device } from 'device.js';

import { units } from '../modules/cheg.units/functions.js';

import { scrollTo } from '../modules/cheg.scrollto/functions.js';
import { scrollLock } from '../modules/cheg.scrolllock/functions.js';

import { lazyLoad } from '../modules/cheg.lazyload/functions.js';

import { tabs } from '../modules/cheg.tabs/functions.js';
import { accordions } from '../modules/cheg.accordions/functions.js';
import { expand } from '../modules/cheg.expand/functions.js';

import { popups } from '../modules/cheg.popups/functions.js';

import { inputs } from '../modules/cheg.inputs/functions.js';
import { Selects } from '../modules/cheg.selects/functions.js';
import { forms } from '../modules/cheg.forms/functions.js';

import { menu } from '../modules/cheg.menu/functions.js';

import { loadFile } from '../modules/cheg.loadfile/functions.js';
import { waypoint } from '../modules/cheg.waypoint/functions.js';

import { scroll } from '../modules/cheg.lenis-scroll/functions.js';

/*
 * Cheg UI 4.0.0
*/
window.app = {
	settings: {
		winWidth: 0,
		winHeight: 0,

		sbWidth: 0,

		scrollOffset: function() {
			return $('.header').outerHeight();
		},
		scrollPos: 0,
		popupOpened: false,
		scrollLockPos: 0,

		animDuration: 400,

		appLoaded: false,

		menuOpened: false,
	},
	deviceIs: device,

	/*
	 * Checking if media query matches
	*/
	matches(query) {
		return window.matchMedia(`(${query})`).matches
	},

	/*
	 * Scroll to hash on page laod
	*/
	toHash() {
		if (window.location.hash) {
			app.scrollTo(window.location.hash, {
				offset: app.settings.scrollOffset()
			});

			window.location.hash = '';
		}
	},









	units,
	scrollTo,
	scrollLock,
	lazyLoad,
	tabs,
	accordions,
	expand,
	popups,
	inputs,
	Selects,
	forms,
	menu,
	loadFile,
	waypoint,
	scroll,

	/*
	* Init
	*/
	init() {
		// * Units
		app.units.all();
	
		// * Img lazy-load
		app.lazyLoad.init();
	
		// * Tabs
		$('.ui-tabs').not('.custom').each(function () {
			if (!$(this).data('tabsInit')) {
				app.tabs.init($(this));
			}
		});
		app.tabs.bind();
	
		// * Tabs
		$('.ui-tabs').not('.custom').each(function () {
			if (!$(this).data('tabsInit')) {
				app.tabs.init($(this));
			}
		});
		app.tabs.bind();
	
		// * Accordions
		$('.ui-accordion').not('.custom').each(function () {
			if (!$(this).data('accordionInit')) {
				app.accordions($(this));
			}
		});
	
		// * Expandable blocks
		$('.ui-expand').not('.custom').each(function () {
			if (!$(this).data('expandInit')) {
				app.expand($(this));
			}
		});
	
		// * Popups
		$('.popup').each(function () {
			if (!$(this).data('popupsInit')) {
				app.popups.init($(this));
			}
		});
		app.popups.bind();
	
		// * Inputs
		$('.ui-input').not('.custom').each(function () {
			if (!$(this).data('inputInit')) {
				app.inputs($(this));
			}
		});
	
		// * Selects
		$('.ui-select').not('.custom').each(function () {
			if (!$(this).data('selectInit')) {
				let sel = new app.Selects($(this));
				//sel.cl();
			}
		});
	
		// * Forms
		$('.ui-form').not('.custom').each(function () {
			if (!$(this).data('formInit')) {
				app.forms.init($(this));
			}
		});
	}
};

app.deviceIs.addClasses(document.documentElement);

(function () {
	app.deviceIs.touch ? $('html').addClass('touch') : $('html').addClass('no-touch');

	app.settings.winWidth = $(window).width();
	app.settings.winHeight = $(window).height();
	app.settings.scrollPos = $(window).scrollTop();

	// * Init
	app.init();

	//app.popups.open('request');

	// * Menu binds
	app.menu.bind();



	if (app.deviceIs.desktop) {
		$(window).on('resize', function () {
			app.units.all();
		});
	} else {

	}

	if (app.deviceIs.mobile || app.deviceIs.tablet) {
		$(window).on('orientationchange', function () {
			app.units.vh();
		}).on('resize', function () {
			app.units.mobile();
		});
	}

	$(window).on('resize', function () {
		app.settings.winWidth = $(window).width();
		app.settings.winHeight = $(window).height();
		app.settings.scrollPos = $(window).scrollTop();

		app.settings.menuOpened ? app.menu.close() : null;
	}).on('scroll', function () {
		app.settings.scrollPos = $(window).scrollTop();
	}).trigger('resize').trigger('scroll');

	// * Scroll to element
	$(document).on('click', 'a[href^="#"], [data-scrollto]', function (e) {
		e.preventDefault();
		let el = $(this).attr('href') || $(this).attr('data-scrollto');

		app.scrollTo(el, {
			offset: app.settings.scrollOffset()
		});
	});
})(jQuery);

$(window).on('load', function () {
	setTimeout(function () {
		// * hide preloader
		$('.preloader').fadeOut(1000, function () {
			$(this).remove();
		});
		$('.app').addClass('app--loaded');
		app.settings.appLoaded = true;
		$(window)
			.trigger('app.loaded')
			.trigger('scroll')
			.trigger('resize');
	}, 300);

	// * Lenis scroll
	if (window.Lenis && typeof window.Lenis == 'function' && !app.scroll.inited) {
		app.scroll.init();
	}

	// * Scroll to hash on page laod
	app.toHash();
});