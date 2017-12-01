'use strict';
var winWidth,
	winHeight,
	scrollOffset,
	popuped = false,
	scrollPos = 0,
	animDuration = 400,
	offsetElem = $('header'),
	popupedPos,
	formTitle = '';
$(document).ready(function() {
	svg4everybody(); // поддержка SVG в старых браузерах
	//popup('request');
	$('.preloader').fadeOut(animDuration,function(){$(this).remove();}); // скрываем прелоадер
	$('a.fancybox').fancybox(); // галерея fancybox
	if (serviceName) {
		serviceName = serviceName+' – ';
	}
	winWidth = $(window).width();
	winHeight = $(window).height();
	scrollPos = $(window).scrollTop();
	scrollOffsetDefine();

	$('img[data-src]').each(function() {
		var img = $(this);
		img.attr('src',img.attr('data-src'));
		img.on('load', function() {
			img.removeAttr('data-src');
		});
	});

	

	$(window).on('resize',function() {
		winWidth = $(window).width();
		winHeight = $(window).height();
		scrollPos = $(window).scrollTop();
		scrollOffsetDefine();
	});
	$(window).on('scroll',function() {
		scrollPos = $(window).scrollTop();
		scrollOffsetDefine();
	});

	$(window).trigger('resize').trigger('scroll');

	function scrollOffsetDefine() {
		if (!offsetElem.hasClass('hidden')) {
			scrollOffset = offsetElem.outerHeight();
		} else if (offsetElem.hasClass('hidden')) {
			scrollOffset = 0;
		}
	}

	if (device.desktop()) {
		
	} else {
		var headScrolled = scrollPos;
		$(window).scroll(function() {
			hideShowHeader();
		});

		function hideShowHeader() {
			if (!$('body').hasClass('body--menu-opened')) {
				if (scrollPos > headScrolled) {
					offsetElem.addClass('hidden');
				} else if (scrollPos < headScrolled) {
					offsetElem.removeClass('hidden');
				}
			}
			headScrolled = scrollPos;
		}
	}

	// Добавляем текст ошибок для полей
	$('.form--validate').each(function() {
		var form = $(this);
		form.find('.form__field').each(function() {
			$(this).append('<div class="form-errors" />');
		});
		form.find('.form__field--required').find('.form-errors').append('<p class="form-errors__item form-errors__item-required">Обязательное поле</p>');
	});

	// Добавляем * для всех обязательных к заполнению полей
	$('.form--validate').find('.form__field--required').each(function() {
		$(this).find('.placeholder').append(' *');
	});

	// РАБОТА С ИНПУТАМИ

	// "Плавающий" placeholder
	$('.label--input').each(function() {
		var label = $(this);
		var input = $(this).find('input, textarea');
		var field = $(this).closest('.form__field');

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
				field.removeClass('form__field--error');
			}
		}).on('focusout',function() {
			label.removeClass('focused');
		});
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
	$('input.input-phone_number, .form-validate .form__field[data-field-type="phone"] input').on('input change paste keyup',function() {
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

	// КАСТОМНЫЕ СЕЛЕКТЫ
	$('.custom-select').each(function() {
		var oldSel = $(this);
		var defTitle = oldSel.attr('data-select-title');
		oldSel.wrap('<div class="select" />');
		var select = $(this).closest('.select');
		oldSel.css({
			'position':'absolute',
			'left':'0px',
			'top':'0px',
			'width':'100%',
			'height':'100%',
			'opacity':'0',
			'z-index':'-1'
		});
		if (device.desktop() === false) {
			oldSel.css({
				'z-index':'3'
			});
		}
		select.append('<div class="trigger">'+defTitle+'</div>').append('<ul class="options" />');
		var trigger = select.find('.trigger');
		var options = select.find('ul.options');
		if (device.desktop() === false) {
			options.css({
				'visibility':'hidden'
			});
		}
		var optionCount = 1;
		oldSel.find('option').each(function() {
			var attrs = '';
			var text = $(this).text();
			var value = $(this).val();
			$(this).attr('data-option',optionCount);
			$.map(this.attributes, function (attribute) {
				attrs = attrs+' ' + attribute.name + '="' + attribute.value + '"';
			});
			select.find('ul.options').append('<li data-value="'+value+'" '+attrs+'">'+text+'</li>');
			select.find('ul.options').find('li[data-value="'+value+'"]').removeAttr('value');
			optionCount++;
		});
		trigger.on('click touch',function() {
			var trigHeight = $(this).outerHeight();
			var selPos = select.offset().top;
			var optHeight = options.outerHeight();
			var pageHeight = $('.wrapper').outerHeight();
			if (!select.hasClass('active')) {
				if ((selPos + trigHeight + optHeight + 20) > ($(window).height() + $(window).scrollTop())) {
					select.addClass('overflowing');
				} else {
					select.removeClass('overflowing');
				}
				select.addClass('active');
			} else {
				select.removeClass('active');
			}
		});
		options.find('li').on('click',function() {
			if (!$(this).hasClass('selected')) {
				var option = $(this).attr('data-option');
				var text = $(this).text();

				trigger.text(text);

				select.addClass('filled');
				select.find('li').removeClass('selected');
				$(this).addClass('selected');
				select.removeClass('active');

				oldSel.find('option:selected').each(function(){
					this.selected = false;
				});
				oldSel.find('option[data-option="'+option+'"]').attr('selected','selected');

				select.addClass('chosen');
			}

			if (select.hasClass('with-input')) {
				select.find('input').val(text);
			}
		});
		oldSel.on('change',function() {
			var option = $(this).find('option:selected').attr('data-option');
			options.find('li[data-option="'+option+'"]').trigger('click');
		});
	});

	// Определяем, есть ли в url'e параметры для автоматического переключения табов/аккордионов (tab=*** или acc=***)
	var urlParams = document.location.href.split('?params!')[1] || '';
	var urlTabs = (urlParams.match(/tab=/g) || []).length;
	var urlAccs = (urlParams.match(/acc=/g) || []).length;

	// ТАБЫ
	if (urlTabs > 0) {
		var paramStrOrigin = urlParams;
		for (var i = 0; i < urlTabs; i++) {
			var target = getUrlParam(paramStrOrigin, 'tab=');
			var tab = $('ul.tabs').find('a[data-tab="'+target+'"]');
			tab.closest('ul.tabs').find('li').removeClass('active');
			tab.closest('li').addClass('active');
		}
	}
	$('.tab-content').hide();
	$('ul.tabs').each(function() {
		if ($(this).find('li.active').length < 1 || $(this).find('li.active').length > 1) {
			$(this).find('li').removeClass('active');
			$(this).find('li:first-child').addClass('active');
		}
		var activeTab = $(this).find('li.active');
		var activeTabContent = activeTab.find('a').attr('data-tab');
		$('.tab-content[data-tab="'+activeTabContent+'"]').show();
	});
	$('ul.tabs').find('a').on('click',function() {
		if (!$(this).closest('li').hasClass('active')) {
			var tab = $(this).attr('data-tab');

			$(this).closest('ul').find('li').removeClass('active');
			$(this).closest('li').addClass('active');

			$('.tab-content[data-tab="'+tab+'"]').parent().find('.tab-content').hide();
			$('.tab-content[data-tab="'+tab+'"]').fadeIn(animDuration);
		}
	});

	// АККОРДИОНЫ
	if (urlAccs > 0) {
		setTimeout(function() {
			var paramStrOrigin = urlParams;
			for (var i = 0; i < urlAccs; i++) {
				var target = getUrlParam(paramStrOrigin, 'acc=');
				var hasScroll = false;
				var scrollStart = target.indexOf('(scroll)');
				var accToScroll = 0;
				if (scrollStart != -1) {
					target = target.slice(0,scrollStart);
				}
				$('ul.accordion').find('li[data-acc="'+target+'"]').find('h6').trigger('click');
			}
		},200);
	}
	$('ul.accordion').not('.collapsed').each(function() {
		if ($(this).find('li.active').length < 1 || $(this).find('li.active').length > 1) {
			$(this).find('li').removeClass('active');
			$(this).find('li').first().addClass('active');
		}
	});
	$('ul.accordion').find('li').not('.active').each(function() {
		$(this).find('.panel').hide();
	});
	$('ul.accordion').find('li').find('h6').on('click',function() {
		var panel = $(this).closest('li');
		var panels = $(this).closest('ul').find('li');
		if (!panel.hasClass('active')) {

			$(this).closest('ul.accordion').find('.panel').hide();
			var panelPos = panel.offset().top - scrollOffset;
			$(this).closest('ul.accordion').find('li.active').find('.panel').show();
			setTimeout(function() {
				$('html, body').animate({scrollTop:panelPos},animDuration);

				panels.removeClass('active');
				panel.addClass('active');

				panels.find('.panel').slideUp(animDuration);
				panel.find('.panel').slideDown(animDuration);
			},1);
		}
		else {
			panel.removeClass('active');
			panels.find('.panel').slideUp(animDuration);
		}
	});
	$(document).mouseup(function (e){
		var div = $('.select.active, .dropdown.active');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});

	// разделение строки из url'a на параметры tab= и acc=
	function getUrlParam(paramStr, param) {
		var paramStart = paramStr.indexOf(param);
		paramStr = paramStr.slice(paramStart,paramStr.length);
		paramStart = paramStr.indexOf(param);
		var paramEnd = paramStr.indexOf('&');
		if (paramEnd < 0) {paramEnd = paramStr.length}
		var tabResult = paramStr.slice(paramStart+4,paramEnd);
		paramStrOrigin = paramStr.slice(paramEnd+1,paramStr.length);
		return tabResult;
	}

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
	$('.popup__content').each(function() {
		$(this).prepend('<div class="popup__close noselect" />');
	});
	$('.popup__close').on('click',function() {
		popupClose();
	});

	// Закрытие попапа при клике на фон
	$('.popup').on('click',function(e){
		if ($(e.target).closest('.popup__content').length) {} 
		else {
			popupClose();
			e.stopPropagation();
		}
	});

	// Закрытие попапа по нажатию на Esc
	$(document).keydown(function(e) {
		if (popuped = true) {
			if (e.which == 27) {
				popupClose();
			}
		}
	});

	// ОТПРАВКА ДАННЫХ ИЗ ФОРМЫ
	$('.btn--sendform').on('click',function() {
		var formBtn = $(this),
			form = $(this).closest('form'),
			valid = formValidator(form.get(0)),
			submit = $(this).attr('data-form-type');
		if (valid != false) {
			var formData = new FormData(form.get(0)),
				thxPopup = formBtn.attr('data-thxpopup') || 'thx';
			if (!formTitle) {
				formTitle = 'Заявка';
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
			form.find('.form__field-error').first().find('input, textarea').focus();
		}
	});

	// Scroll-навигация по странице
	function getTargetTop(elem){
		var scrollId = elem.attr('href');
		return $(scrollId).offset().top - scrollOffset;
	}
	$('a[href^="#"].navScroll').click(function(e) {
		var scrollTarget = getTargetTop($(this));
		$('html, body').animate({scrollTop:scrollTarget}, 500);
		e.preventDefault();
	});
	var scrollSections = $('a[href^="#"].navScroll');
	function checkSectionSelected(scrolledTo){
		var threshold = parseInt($(window).height() / 3);
		var i;
		for (i = 0; i < scrollSections.length; i++) {
			var scrollSection = $(scrollSections[i]);
			var scrollTarget = getTargetTop(scrollSection);
			if (scrolledTo > scrollTarget - threshold && scrolledTo < scrollTarget + threshold) {
				scrollSections.parent('li').removeClass('active');
				scrollSection.parent('li').addClass('active');
			} else {
				scrollSections.parent('li').removeClass('active');
			}
		};
	}
	checkSectionSelected($(window).scrollTop());
	$(window).scroll(function(e){
		checkSectionSelected($(window).scrollTop())
	});
});

// ПОПАПЫ
// Открытие попапа
function popup(id, form, h1, h2, btn) {
	popupedPos = $(window).scrollTop();
	$('body').addClass('body--popuped');
	$('.popups-overlay').fadeIn(animDuration);
	$('.popup').removeClass('active').fadeOut(animDuration);
	var popup = $('.popup#'+id);

	if (id == 'request') {
		var defH1 = 'Оставить заявку',
			defH2 = 'Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время',
			defBtn = 'Оставить заявку';
		if (h1) {popup.find('.popup__h1').html(h1);} else {popup.find('.popup__h1').html(defH1);}
		if (h2) {popup.find('.popup__h2').html(h2);} else {popup.find('.popup__h2').html(defH2);}
		if (btn) {popup.find('.btn').html(btn);} else {popup.find('.btn').html(defBtn);}
		if (form) {formTitle = form;}
	}
	popup.addClass('active').fadeIn(animDuration).scrollTop(0);
	popuped = true;
}
// Открытие попапа с видео
function videoPopup(id, videoUrl) {
	popupedPos = $(window).scrollTop();
	$('body').addClass('body--popuped');
	$('.popups-overlay').fadeIn(animDuration);
	$('.popup').removeClass('active').fadeOut(animDuration);
	var popup = $('.popup--video#'+id);
	popup.find('.popup_video').html('<iframe src="'+videoUrl+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	popup.addClass('active').fadeIn(animDuration).scrollTop(0);
	popuped = true;
}
// Закрытие попапа
function popupClose() {
	$('.popups-overlay').fadeOut(animDuration);
	$('.popup').removeClass('active').fadeOut(animDuration, function() {$('body').removeClass('body--popuped')});
	if (device.ios()) {
		$(window).scrollTop(popupedPos);
	}
	$('.popup_video').html('');
	$('.popup').find('.form__field').removeClass('form__field--error');
	$('.popup').find('.form__field').find('input, textarea').val('').trigger('change');
	popuped = false;
}

// Попап "Спасибо за заявку"
function thx(thx) {
	$('.popup').removeClass('active').fadeOut(animDuration);
	if (!thx) {
		thx = 'thx';
	}
	popup(thx);
	$('body').find('.form__field--error').removeClass('form__field--error');
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

	if ($form.find('.form__field--required').length) {
		$form.find('.form__field--required').each(function() {
			var errorClass = 'form__field--error';
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