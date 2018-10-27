'use strict';
var winHeight,
	scrollOffset = 60,
	popupOpened = false,
	popupOpenedPos = 0,
	scrollPos = 0,
	animDuration = 500,
	pageLoaded = false,
	formTitle = '';
$(document).ready(function() {
	var scrollSections = $('[data-scroll-section]');
	svg4everybody(); // поддержка SVG в старых браузерах
	//popup('request');
	if (serviceName) {
		serviceName = serviceName+' – ';
	}
	winHeight = $(window).height();
	scrollPos = $(window).scrollTop();

	$('img[data-src]').each(function() {
		var img = $(this);
		img.attr('src',img.attr('data-src'));
		img.on('load', function() {
			img.removeAttr('data-src');
		});
	});

	

	if (device.desktop()) {
		
	} else {
		
	}

	$(window).on('resize',function() {
		winHeight = $(window).height();
		scrollPos = $(window).scrollTop();

		scrollbarWidth();
		defineBarWidth();
		checkSectionSelected();
	});
	$(window).on('scroll',function() {
		scrollPos = $(window).scrollTop();
		checkSectionSelected();
	});

	$(window).trigger('resize').trigger('scroll');

	// Добавляем текст ошибок для полей
	$('.form--validate').each(function() {
		var form = $(this);
		form.find('.form-field').each(function() {
			$(this).append('<div class="form-errors" />');
		});
		form.find('.form-field--required').find('.form-errors').append('<p class="form-errors__item form-errors__item--required">Обязательное поле</p>');
	});

	// Добавляем * для всех обязательных к заполнению полей
	$('.form--validate').find('.form-field--required').each(function() {
		$(this).find('.input-placeholder').append(' *');
	});

	// РАБОТА С ИНПУТАМИ

	// "Плавающий" placeholder
	$('.input').each(function() {
		var label = $(this),
			input = $(this).find('input, textarea'),
			field = $(this).closest('.form-field');

		// фокус на инпуте/тексэйрии
		input.on('focus',function() {
			label.addClass('active focused');
		}).on('focusout blur change keyup input', function() {
			var value = $(this).val();
			if (value == '') {
				if (!input.is(':focus')) {
					label.removeClass('active');
				}
			} else {
				label.addClass('active');
				field.removeClass('form-field--error');
			}
		}).on('focusout',function() {
			label.removeClass('focused');
		});

		input.trigger('change');
	});

	// Отправка формы по нажатию на Enter (при фокусе на input или textarea)
	$('.form--enter').find('input').on('focus',function() {
		$(this).closest('.form--enter').addClass('focused');
	}).on('blur',function() {
		$(this).closest('.form--enter').removeClass('focused');
	});
	$('.form--enter').find('input').on('focus',function() {
		var form = $(this).closest('.form--enter');
		var btn = form.find('.btn--enter');
		$(document).keydown(function(e) {
			if (form.hasClass('focused')) {
				if (e.which == 13) {
					btn.trigger('click');
				}
			}
		});
	});

	// Ограничение длины ввода в поле type="number"
	$('input[type="number"]').on('input change paste keyup',function() {
		var max = parseInt($(this).attr('data-max'));
		var val = $(this).val();
		if (val.length > max) {
			$(this).val(val.slice(0,max));
		}
	});

	// Запрет ввода любых символов, кроме 0-9, (), -, +
	$('input.input-phone_number, .form-validate .form-field[data-field-type="phone"] input').on('input change paste keyup',function() {
		$(this).val(this.value.replace(/[^0-9\+ ()\-]/,''));
	});

	// Прокрутка к элементу
	$('.scrollTo').on('click',function(e) {
		e.preventDefault();
		var target = $(this).attr('data-scrollto');
		if (target) {
			var targetPos = $('[data-scrollto="'+target+'"]').not($(this)).offset().top - scrollOffset;
			$('html, body').animate({scrollTop:targetPos},500);
		}
	});

	// ТАБЫ
	$('.tab-content').hide();
	$('.tabs').each(function() {
		if ($(this).find('.tab.active').length < 1 || $(this).find('.tab.active').length > 1) {
			$(this).find('.tab').removeClass('active');
			$(this).find('.tab:first-child').addClass('active');
		}
		var activeTab = $(this).find('.tab.active');
		var activeTabContent = activeTab.find('a').attr('data-tab');
		$('.tab-content[data-tab="'+activeTabContent+'"]').show();
	});
	$('.tabs').find('.tab-link').on('click',function() {
		if (!$(this).closest('.tab').hasClass('active')) {
			var tab = $(this).attr('data-tab');

			$(this).closest('.tabs').find('.tab').removeClass('active');
			$(this).closest('.tab').addClass('active');

			$('.tab-content[data-tab="'+tab+'"]').parent().find('.tab-content').hide();
			$('.tab-content[data-tab="'+tab+'"]').fadeIn(animDuration);
		}
	});

	// АККОРДИОНЫ
	$('.accordion').each(function() {
		var acc = $(this),
			items = acc.find('.accordion-item'),
			triggers = acc.find('.accordion-trigger'),
			panels = acc.find('.accordion-panel'),
			initialized = false,
			collapsable = true,
			connected = false,
			itemF;

		// если запрещено закрывать все пункты
		if (acc.hasClass('not-collapsable')) {
			collapsable = false;
		}

		// если есть связанные блоки
		if (acc.attr('data-acc')) {
			connected = true;
		}

		// раскрываем изначальный активный пункт
		if (!acc.hasClass('collapsed')) {
			if (!acc.find('.accordion-item.active').length || acc.find('.accordion-item.active').length > 1) {
				itemF = items.first();
			} else {
				itemF = acc.find('.accordion-item.active');
			}

			itemAction(itemF, 'open');
		}

		// открытие/закрытие пункта
		function itemAction(item, action) {
			var slideSpeed = animDuration;

			if (!initialized) {
				slideSpeed = 0;
			}

			if (action == 'open') {
				if (initialized) {
					panels.hide();
					var itemPos = item.offset().top - scrollOffset - 30;
					acc.find('.accordion-item.active').find('.accordion-panel').show();
					setTimeout(function() {
						$('html, body').animate({scrollTop:itemPos},animDuration);
					},30);
				}

				setTimeout(function() {
					items.removeClass('active');
					item.addClass('active');

					panels.slideUp(slideSpeed);
					item.find('.accordion-panel').slideDown(slideSpeed);
				},30);

				if (connected) {
					var accID = acc.attr('data-acc'),
						itemID = item.attr('data-acc-item'),
						accCon = $('[data-acc-con="'+accID+'"]'),
						accConItems = accCon.find('[data-acc-con-item]');

					accConItems.removeClass('active');
					accCon.find('[data-acc-con-item="'+itemID+'"]').addClass('active');
				}
			} else {
				item.removeClass('active');
				panels.slideUp(slideSpeed);
			}

			if (!initialized) {
				initialized = true;
			}
		}

		// при клике на триггер
		triggers.on('click',function() {
			var item = $(this).closest('.accordion-item');

			if (!item.hasClass('active')) {
				itemAction(item, 'open');
			} else {
				if (collapsable) {
					itemAction(item, 'close');
				}
			}
		});
	});

	// Youtube fix
	$('iframe').each(function() {
		var ifr_source=$(this).attr('src');
		var wmode="wmode=transparent";
		if(ifr_source.indexOf('?')!=-1) {
			var getQString=ifr_source.split('?');
			var oldString=getQString[1];
			var newString=getQString[0];
			$(this).attr('src',newString+'?'+wmode+'&'+oldString)
		} else $(this).attr('src',ifr_source+'?'+wmode)
	});

	// Добавляем в попап кнопку закрытия
	$('.popup-content').each(function() {
		$(this).prepend('<div class="popup-close noselect" />');
	});
	$('.popup-close').on('click',function() {
		popupClose();
	});

	// Закрытие попапа при клике на фон
	$('.popup').on('click',function(e) {
		if (!$(e.target).closest('.popup-content').length) {
			popupClose();
			e.stopPropagation();
		} 
	});

	// Закрытие попапа по нажатию на Esc
	$(document).on('keypress',function(e) {
		if (popupOpened = true) {
			if (e.which == 27) {
				popupClose();
			}
		}
	});

	// ОТПРАВКА ДАННЫХ ИЗ ФОРМЫ
	$('.btn--sendform').on('click',function(e) {
		e.preventDefault();
		var formBtn = $(this),
			form = $(this).closest('form'),
			valid = formValidator(form.get(0)),
			submit = $(this).attr('data-form-type');
		if (valid != false) {
			var formData = new FormData(form.get(0)),
				thxPopup = formBtn.attr('data-thxpopup') || 'thx';
			if (formTitle) {
				formTitle = serviceName + formTitle;
			} else {
				formTitle = serviceName + 'Заявка';
			}
			formData.append('formTitle', formTitle);
			formData.append('submit', submit);
			$.ajax({
				type: 'POST',
				url: rootPath+'php/send.php',
				dataType: 'json',
				processData: false,
				contentType: false,
				data: formData,
				success: function() {
					thx(thxPopup);
					//метрики
					//setTimeout(function(){ga('send', 'event', ''+submit, ''+submit);}, 30);
					//setTimeout(function(){yaCounterXXXXXXXXX.reachGoal(''+submit);}, 30); // меняем XXXXXXXXX на номер счетчика
				},
				error: function() {
					console.log(data);
				}
			});
		} else {
			form.find('.form-field-error').first().find('input, textarea').focus();
		}
	});

	// Scroll-навигация по странице
	var navScrollScrolling = false;
	function getTargetTop(target) {
		return $('[data-scroll-section="'+target+'"]').first().offset().top - scrollOffset;
	}
	$('.nav-scroll[data-scroll-link]').on('click', function(e) {
		var target = $(this).attr('data-scroll-link'), scrollTarget = 0;
		if ($('[data-scroll-section="'+target+'"]').length) {
			$('.nav-scroll[data-scroll-link]').closest('li').removeClass('active');
			$('.nav-scroll[data-scroll-link="'+target+'"]').closest('li').addClass('active');
			navScrollScrolling = true;
			scrollTarget = getTargetTop(target);
			$('html, body').animate({scrollTop:scrollTarget}, 700, function() {
				navScrollScrolling = false;
			});
			$('body').removeClass('body--popuped body--menu-opened');
			//menuOpened = false;
		}
		e.preventDefault();
	});
	function checkSectionSelected() {
		var threshold = parseInt(winHeight * 0.3);

		if (!navScrollScrolling) {
			scrollSections.each(function(i) {
				var scrollSection = $(this),
					scrollName = scrollSection.attr('data-scroll-section'),
					scrollLink = $('[data-scroll-link="'+scrollName+'"].nav-scroll'),
					scrollSectionHeight = scrollSection.outerHeight(),
					scrollTarget = getTargetTop(scrollName);
					
				if (scrollPos > scrollTarget - threshold && scrollPos < scrollTarget + scrollSectionHeight - threshold) {
					scrollLink.parent('li').addClass('active');
				} else {
					scrollLink.parent('li').removeClass('active');
				}
			});
		}
	}
});
	
$(window).on('load',function() {
	setTimeout(function() {
		$('.preloader').fadeOut(1000,function(){$(this).remove();}); // скрываем прелоадер
		$('body').addClass('body--page-loaded');
		pageLoaded = true;
		$(window).trigger('scroll');
	},1000);
});

// Определенение ширины скроллбара браузера
var scrollBarWidth = 0;
function scrollbarWidth() { 
	var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
	$('body').append(div);
	var w1 = $('div', div).innerWidth();
	div.css('overflow-y', 'scroll');
	var w2 = $('div', div).innerWidth();
	$(div).remove();
	return (w1 - w2);
}

function defineBarWidth() {
	var bodyWidth = parseInt($('.page').width()),
		bodyHeight = parseInt($('.page').height());

	if (bodyHeight > winHeight) {
		scrollBarWidth = scrollbarWidth();
	} else {
		scrollBarWidth = 0;
	}
}

function scrollLock(el,type) {
	if (type == 'unlock') {
		el.removeClass('body--fixed')
			.css({
				'padding-right':''
			});
	} else {
		el.addClass('body--fixed')
			.css({
				'padding-right':scrollBarWidth
			});
	}
}

// ПОПАПЫ
// Открытие попапа
function popup(id, form, h1, h2, btn) {
	if ($('#'+id).length) {
		popupOpenedPos = $(window).scrollTop();

		$('.popups-overlay').addClass('active');

		$('body').addClass('body--popup-opened');
		scrollLock($('body'));

		$('.popup').removeClass('active');
		var popup = $('.popup#'+id);

		if (id == 'request') {
			var defH1 = 'Оставить заявку',
				defH2 = 'Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время',
				defBtn = 'Оставить заявку';

			if (h1) {
				popup.find('.popup-title__head').html(h1);
			} else {
				popup.find('.popup-title__head').html(defH1);
			}

			if (h2) {
				popup.find('.popup-title__subtitle').html(h2);
			} else {
				popup.find('.popup-title__subtitle').html(defH2);
			}

			if (btn) {
				popup.find('.btn').html(btn);
			} else {
				popup.find('.btn--sendform').html(defBtn);
			}

			if (form) {
				formTitle = form;
			}
		}

		popup.scrollTop(0).addClass('active');
		popupOpened = true;
	}
}
// Открытие попапа с видео
function videoPopup(id, videoUrl) {
	if ($('#'+id).length) {
		popupOpenedPos = $(window).scrollTop();

		$('.popups-overlay').addClass('active');

		$('body').addClass('body--popup-opened');
		scrollLock($('body'));

		$('.popup').removeClass('active');
		var popup = $('.popup--video#'+id);
		popup.find('.popup-video').html('<iframe src="'+videoUrl+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		popup.scrollTop(0).addClass('active');
		popupOpened = true;
	}
}
// Закрытие попапа
function popupClose() {
	$('.popups-overlay').removeClass('active');
	$('.popup').removeClass('active');

	$('body').removeClass('body--popup-opened');

	setTimeout(function() {
		scrollLock($('body'),'unlock');
	},animDuration);

	if (device.ios()) {
		$(window).scrollTop(popupOpenedPos);
	}
	$('.popup-video').html('');
	$('.popup').find('.form-field').removeClass('form-field--error');
	$('.popup').find('.form-field').find('input, textarea').val('').trigger('change');
	popupOpened = false;
}

// Попап "Спасибо за заявку"
function thx(thx) {
	$('.popup').removeClass('active');
	if (!thx) {
		thx = 'thx';
	}
	popup(thx);
	$('body').find('.form-field--error').removeClass('form-field--error');
	$('body').find('textarea, input').val('').trigger('change');
}

// Изменяем formTitle для формы
function changeFormTitle(form) {
	formTitle = form;
}

// Валидатор формы
function formValidator(form) {
	var $form = $(form);
	var valid = true;

	if ($form.find('.form-field--required').length) {
		$form.find('.form-field--required').each(function() {
			var errorClass = 'form-field--error';
			var type = $(this).attr('data-field-type');
			var val;
			if ($(this).find('input').length) {
				val = $(this).find('input').val();
			} else {
				val = $(this).find('textarea').val();
			}

			if (!val) {
				$(this).addClass(errorClass);
				$(this).find('.form-errors__item--type').remove();
				$(this).find('.form-errors__item--required').show();
				valid = false;
			} else {
				$(this).removeClass(errorClass);
				$(this).find('.form-errors__item--required').hide();

				if (type == 'email') {
					var errorText = 'Неверный формат e-mail';
					if(!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(val)) {
						$(this).find('.form-errors').append('<p class="form-errors__item--type">'+errorText+'</p>');
						$(this).addClass(errorClass);
						valid = false;
					} else {
						$(this).find('.form-errors_item--type').remove();
						$(this).removeClass(errorClass);
					}
				}

				if (type == 'phone') {
					var errorText = 'Неверный формат номера телефона';
					if(/[^0-9\+ ()\-]/.test(val)) {
						$(this).find('.form-errors').append('<p class="form-errors__item--type">'+errorText+'</p>');
						$(this).addClass(errorClass);
						valid = false;
					} else {
						$(this).find('.form-errors__item--type').remove();
						$(this).removeClass(errorClass);
					}
				}
			}
		});
	}

	if(valid != true) { return false; }
}