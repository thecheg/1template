/*! Define scrollbar width */
let scrollBarWidth = 0;
function scrollbarWidth() {
	let div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
	$('body').append(div);
	let w1 = $('div', div).innerWidth();
	div.css('overflow-y', 'scroll');
	let w2 = $('div', div).innerWidth();
	$(div).remove();

	let bodyHeight = parseInt($('.app').height());

	if (bodyHeight > def.winHeight) {
		scrollBarWidth = w1 - w2;
	} else {
		scrollBarWidth = 0;
	}

	document.documentElement.style.setProperty('--sbW', scrollBarWidth + 'px');
}