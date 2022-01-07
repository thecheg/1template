'use strict';

//=require ../../node_modules/jquery/dist/jquery.js
//=require ../../node_modules/device.js/dist/device.umd.js

//=require ../modules/cheg.tabs/functions.js
//=require ../modules/cheg.accordions/functions.js
//=require ../modules/cheg.inputs/functions.js
//=require ../modules/cheg.lazyimg/functions.js
//=require ../modules/cheg.collapse/functions.js
//=require ../modules/cheg.scrollbar/functions.js
//=require ../modules/cheg.scrolllock/functions.js
//=require ../modules/cheg.menu/functions.js
//=require ../modules/cheg.popups/functions.js
//=require ../modules/cheg.forms/functions.js
//=require ../modules/cheg.checkwebp/functions.js

let winHeight,
	scrollOffset = 60,
	popupOpened = false,
	popupOpenedPos = 0,
	scrollPos = 0,
	animDuration = 200,
	pageLoaded = false,
	formTitle = '',
	deviceIs = device.device;

deviceIs.addClasses(document.documentElement);

(function () {
	if ('ontouchstart' in document.documentElement) {
		$('html').addClass('touch');
	} else {
		$('html').addClass('no-touch');
	}

	winHeight = $(window).height();
	scrollPos = $(window).scrollTop();

	// Main init
	init();

	//popup('request');

	// Click on burger
	$(document).on('click', '.menu-toggle', function () {
		if (!menuOpened) {
			menuOpen();
		} else {
			menuClose();
		}
	});



	if (deviceIs.desktop) {
		
	} else {

	}


	$(window).on('resize', function () {
		winHeight = $(window).height();
		scrollPos = $(window).scrollTop();

		scrollbarWidth();
		vhFix();

		if (menuOpened) {
			menuClose();
		}
	});
	$(window).on('scroll', function () {
		scrollPos = $(window).scrollTop();
	});

	$(window).trigger('resize').trigger('scroll');

	// Reject input any symbol if not 0-9, (), -, +
	$(document).on('input change paste keyup', 'input.phone-number, .send-form .ui-form-field[data-field-type="phone"] input', function () {
		$(this).val(this.value.replace(/[^0-9\+ ()\-]/, ''));
	});

	// Scroll to element
	$(document).on('click', 'a[href*="#"]', function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		if ($(target).length) {
			var targetPos = $(target).offset().top - scrollOffset;
			$('html, body').animate({
				scrollTop: targetPos
			}, 500);
		}
	});

	//=require ../modules/cheg.popups/init.js
})(jQuery);

$(window).on('load', function () {
	setTimeout(function () {
		$('.preloader').fadeOut(1000, function () {
			$(this).remove();
		}); // скрываем прелоадер
		$('body').addClass('body--page-loaded');
		pageLoaded = true;
		$(window).trigger('scroll');
	}, 300);
});

/*! vh fix */
function vhFix() {
	$('body').append('<div class="vh-fix" style="position:fixed;width:1px;left:-9999px;top:0;bottom:0;pointer-events:none;opacity:0;visibility:hidden;" />');

	var vh = $('.vh-fix').height() * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');

	$('.vh-fix').remove();
}

/*! Init */
function init() {
	// lazy-загрузка изображений
	imgInit();

	// Tabs
	$('.ui-tabs').each(function () {
		if ($(this).data('init') !== true) {
			tabsInit($(this));
		}
	});

	// Accordions
	$('.ui-accordion').each(function () {
		if ($(this).data('init') !== true) {
			accordionInit($(this));
		}
	});

	// Popups
	$('.popup').each(function () {
		if ($(this).data('init') !== true) {
			popupsInit($(this));
		}
	});

	// Inputs
	$('.ui-input').each(function () {
		if ($(this).data('init') !== true) {
			inputInit($(this));
		}
	});

	// Forms
	$('.send-form').each(function () {
		if ($(this).data('init') !== true) {
			formInit($(this));
		}
	});

	// Collapsable blocks
	$('.ui-collapse').each(function () {
		if ($(this).data('init') !== true) {
			collapseInit($(this));
		}
	});
}