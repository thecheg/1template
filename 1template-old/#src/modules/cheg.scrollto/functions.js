/*
 * Scroll to element
*/
app.scrollTo = (id, options) => {
	if ($(id).length) {
		options = $.extend({
			offset: 0,
			speed: 1000
		}, options);

		if (window.Lenis && typeof window.Lenis == 'function' && app.scroll.inited) {
			app.scroll.lenis.scrollTo(id, {
				offset: options.offset,
				duration: options.speed,
				lock: true
			});
		} else {
			let scrollPos = $(id).offset().top - options.offset;
	
			$('html, body').animate({
				scrollTop: scrollPos
			}, options.speed);
		}
	}
}