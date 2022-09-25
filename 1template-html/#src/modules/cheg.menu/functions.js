/*! Mobile menu */
/*! Open menu */
const menu = {
	open() {
		$('body').addClass('body--menu-opened');
		scrollLock();

		def.menuOpened = true;
	},
	close() {
		$('body').removeClass('body--menu-opened');
		scrollLock('unlock');

		def.menuOpened = false;
	}
}