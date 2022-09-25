/*! Scroll lock */
const scrollLock = (type) => {
	if (type == 'unlock') {
		if (def.deviceIs.ios) {
			$(window).scrollTop(def.scrollLockPos);
		}

		$('body').removeClass('body--fixed');
	} else {
		def.scrollLockPos = $(window).scrollTop();

		$('body').addClass('body--fixed');
	}
}