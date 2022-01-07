	// Open popup
	$(document).on('click', '[data-popup-open]', function () {
		popup($(this).attr('data-popup-open'));
	});

	// Close popup on clicking cross
	$(document).on('click', '.popup__close', function () {
		popupClose();
	});

	// Close popup on clicking outside popup
	$(document).on('click', '.popup', function (e) {
		if (!$(e.target).closest('.popup__content').length) {
			popupClose();
			e.stopPropagation();
		}
	});

	// Close popup with pressing ESC
	$(document).keyup(function (e) {
		if (e.key === 'Escape') {
			if (popupOpened) {
				popupClose();
			}
		}
	});