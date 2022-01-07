/*! Popups */
/*! Open popup */
function popup(id, form, h1, h2, btn) {
	if ($('#' + id).length) {
		popupOpenedPos = $(window).scrollTop();

		$('.popups-overlay').addClass('active');

		$('body').addClass('body--popup-opened');
		scrollLock();

		$('.popup').removeClass('active');
		var popup = $('.popup#' + id);

		if (id == 'request') {
			var defH1 = 'Оставить заявку',
				defH2 = 'Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время',
				defBtn = 'Оставить заявку';

			if (h1) {
				popup.find('.popup__title-head').html(h1);
			} else {
				popup.find('.popup__title-head').html(defH1);
			}

			if (h2) {
				popup.find('.popup__title-subtitle').html(h2);
			} else {
				popup.find('.popup__title-subtitle').html(defH2);
			}

			if (btn) {
				popup.find('.ui-btn--sendform').html(btn);
			} else {
				popup.find('.ui-btn--sendform').html(defBtn);
			}

			if (form) {
				formTitle = form;
			}
		}

		popup.scrollTop(0).addClass('active');
		popupOpened = true;
	}
}

/*! Open video popup */
function videoPopup(id, videoUrl) {
	if ($('#' + id).length) {
		popupOpenedPos = $(window).scrollTop();

		$('.popups-overlay').addClass('active');

		$('body').addClass('body--popup-opened');
		scrollLock();

		$('.popup').removeClass('active');
		var popup = $('.popup#' + id);
		popup.find('.popup__video').html('<iframe src="' + videoUrl + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		popup.scrollTop(0).addClass('active');
		popupOpened = true;
	}
}

/*! Close popup */
function popupClose() {
	$('.popups-overlay').removeClass('active');
	$('.popup').removeClass('active');


	setTimeout(function () {
		scrollLock('unlock');
		$('body').removeClass('body--popup-opened');
	}, animDuration);

	if (deviceIs.ios) {
		$(window).scrollTop(popupOpenedPos);
	}
	$('.popup__video').html('');

	$('.popup .send-form').each(function () {
		clearForm($(this));
	});

	popupOpened = false;
}

/*! TY popup */
function thx(thx) {
	$('.popup').removeClass('active');
	if (!thx) {
		thx = 'thx';
	}
	popup(thx);

	$('.popup .send-form').each(function () {
		clearForm($(this));
	});
}

/*! Popups */
function popupsInit(popup) {
	popup.find('.popup__close-container')
		.prepend('<div class="cross-btn popup__close noselect" />');

	popup.data('init', true);
}