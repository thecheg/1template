/*! Expandable blocks */
const expandInit = (ex) => {
	let exPrefix = 'ui-expand',
		hidd = ex.find('.' + exPrefix + '__hidden'),
		trig = ex.find('.' + exPrefix + '__trigger'),
		trigText = trig.find('.' + exPrefix + '__trigger-text'),
		closedText = trig.attr('data-closed-text'),
		openedText = trig.attr('data-opened-text');

	trigText.text(closedText);

	trig.on('click', function () {
		if (!ex.hasClass('active')) {
			ex.addClass('active');
			hidd.slideDown(400);
			trigText.text(openedText);
		} else {
			ex.removeClass('active');
			hidd.slideUp(400);
			trigText.text(closedText);
		}
	});

	ex.data('expandInit', true);
}