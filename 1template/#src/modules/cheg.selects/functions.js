/*
 * Selects
*/
export class Selects {
	constructor(el, options) {
		let sel = el.find('select');

		this.isOpened = false;

		sel.addClass('ui-select__sel');

		this.el = el;
		this.sel = this.el.find('select');

		options = $.extend({
			type: sel.attr('multiple') ? 2 : 1,
			prefix: 'ui-select',
			placeholder: el.attr('data-placeholder') ? el.attr('data-placeholder') : null,
			defaultPlaceholder: 'Выбрать',
			classes: {
				head: `ui-select__head`,
				text: `ui-select__text`,
				arr: `ui-select__arr`,
				pop: `ui-select__pop`,
				list: `ui-select__list`,
				option: `ui-select__option`,
				optionText: `ui-select__option-text`,
				optionIcon: `ui-select__option-icon`,
			},
			tags: {
				list: 'ul',
				option: 'li'
			},
			search: false,

			onInit: function() {

			},
		}, el.attr('data-select') ? JSON.parse(el.attr('data-select')) : {});

		this.options = options;
		this.isChanged = false;
		this.isInitialized = false;

		let classes = this.options.classes;

		el.on('click', `.${classes.option}`, (e) => {
			this.select($(e.target).closest(`.${options.classes.option}`).attr('data-option'));
		});

		el.on('click', `.${classes.head}`, (e) => {
			if (!this.isOpened) {
				this.show();
			} else {
				this.hide();
			}
		});

		el.on('select', (i, id) => {
			this.select(id);
		});

		el.on('select.index', (i, ind) => {
			let id = this.sel.find('option').eq(ind).attr('data-option');
			this.select(id);
		});

		sel.on('change', () => this.highlight());

		$(document).on('click', (e) => {
			if (!$(e.target).closest(el).length) {
				this.hide();
			}
		});

		this.build();
		this.update();

		el.data('selectInit', true);
	}

	cl() {
		console.log(this);
	}

	build() {
		let classes = this.options.classes,
			tags = this.options.tags,
			head = $(`<div class="${classes.head}" />`),
			text = $(`<div class="${classes.text}" />`),
			arr = $(`<div class="${classes.arr}" />`),
			pop = $(`<div class="${classes.pop}" />`),
			list = $(`<${tags.list} class="${classes.list}" />`);

		pop.append(list);
		head.append(text, arr);
		this.el.append(head, pop);

		if (app.deviceIs.mobile) {
			head.css('pointer-events', 'none');
		}

		this.head = head;
		this.pop = pop;
		this.list = list;
	}

	buildList() {
		let classes = this.options.classes,
			tags = this.options.tags,
			opts = this.sel.find('option'),
			list = this.list,
			text = this.el.find(`.${classes.text}`),
			excl = {};

		this.opts = opts;

		this.list.html('');

		if (this.options.type == 1 && this.options.placeholder !== null) {
			excl = opts.first();
		}

		opts.not(excl).each(function(i) {
			let optO = $(this),
				optN = $(`<${tags.option} class="${classes.option}"><span class="${classes.optionIcon}"></span><span class="${classes.optionText}">${optO.text()}</span></${tags.option}>`);

			optO.attr('data-option', (i+1));

			[...optO.get(0).attributes].forEach(attr => {
				optN.get(0).setAttribute(attr.nodeName === "id" ? 'data-id' : attr.nodeName ,attr.nodeValue)
			});

			list.append(optN);
		});

		if (this.options.type == 1) {
			text.text(this.options.placeholder == null ? this.sel.find('option:selected').text() : this.options.placeholder);
		} else {
			text.text(this.options.placeholder == null ? this.options.defaultPlaceholder : this.options.placeholder);
		}
	}

	select(id) {
		let text = this.el.find(`.${this.options.prefix}__head-text`),
			olds = this.sel.find('option'),
			opt = this.sel.find(`option[data-option="${id}"]`);

		if (this.options.type == 1) {
			if (opt.prop('selected') == false) {
				olds.prop('selected', false);
				opt.prop('selected', true);
			}
		} else {
			if (opt.prop('selected') == true) {
				opt.prop('selected', false);
			} else {
				opt.prop('selected', true);
			}
		}

		this.highlight();

		text.removeClass('clear');
	}

	highlight(init) {
		let _this = this,
			olds = this.opts,
			classes = this.options.classes,
			news = this.el.find(`.${classes.option}`),
			text = this.el.find(`.${classes.text}`);

		news.removeClass('selected');
		
		olds.each(function() {
			if ($(this).prop('selected') == true) {
				_this.el.find(`.${classes.option}[data-option="${$(this).attr('data-option')}"]`).addClass('selected');
			}
		});

		if (this.isInitialized) {
			if (this.options.type == 1) {
				text.text(this.sel.find('option:selected').text());
			}
		} else {
			this.isInitialized = true;
		}
	}

	update() {
		this.isInitialized = false;
		
		this.buildList();
		this.highlight();
	}

	show() {
		this.el.addClass('opened');

		this.isOpened = true;
	}

	hide() {
		this.el.removeClass('opened');

		this.isOpened = false;
	}
}