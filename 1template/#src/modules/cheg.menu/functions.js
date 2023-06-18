/*
 * Menu
*/
export const menu = {
	// * Bind
	bind() {
		let _this = this;
		// * Click on burger
		$(document).on('click', '.menu-toggle', function () {
			!app.settings.menuOpened ? _this.open() : _this.close();
		});
	},

	// * Open menu
	open() {
		$('.app').addClass('app--menu');
		app.scrollLock();

		app.settings.menuOpened = true;
	},
	
	// * Close menu
	close() {
		$('.app').removeClass('app--menu');
		app.scrollLock('unlock');

		app.settings.menuOpened = false;
	}
}