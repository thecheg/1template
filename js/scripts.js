var winWidth,
	winHeight,
	scrollOffset,
	popuped = false,
	scrollPos = 0,
	animDuration = 400,
	offsetElem = $('header'),
	popupedPos;
$(document).ready(function() {
	//popup('request');
	$('.preloader').fadeOut(animDuration,function(){$(this).remove();});
	var formTitle = '';
	$('a.fancybox').fancybox();
	if (serviceName) {
		serviceName = serviceName+' – ';
	}
	var sendUrl = rootPath+'php/send.php';
	winWidth = $(window).width();
	winHeight = $(window).height();
	scrollPos = $(window).scrollTop();
	scrollOffsetDefine();
	$('.form_field[data-field-type="phone"]').find('input').inputmask('+7 999 999-99-99');
	popupState();

	$('img[data-src]').each(function() {
		var img = $(this);
		img.attr('src',img.attr('data-src'));
		img.on('load', function() {
			img.removeAttr('data-src');
		});
	});
	
	

	$(window).resize(function() {
		winWidth = $(window).width();
		winHeight = $(window).height();
		scrollPos = $(window).scrollTop();
		scrollOffsetDefine();

		popupState();
	});
	$(window).scroll(function() {
		scrollPos = $(window).scrollTop();
		scrollOffsetDefine();
	});

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
			if (!$('body').hasClass('menu-opened')) {
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
	$('form.form-validate').each(function() {
		var form = $(this);
		form.find('.form_field').each(function() {
			$(this).append('<div class="form_error" />');
		});
		form.find('.form_field.form_field-required').find('.form_error').append('<p>Обязательное поле</p>');
		form.find('.form_field[data-field-type="email"]').find('.form_error').append('<p>Некорректный e-mail</p>');
		form.find('.form_field[data-field-type="phone"]').find('.form_error').append('<p>Неверный формат номера телефона</p>');
	});

	// Добавляем * для всех обязательных к заполнению полей
	$('form.form-validate').find('.form_field-required').each(function() {
		$(this).find('.placeholder').append(' *');
	});

	// "Плавающий" placeholder
	$('label.label-input').each(function() {
		var label = $(this);
		var input = $(this).find('input, textarea');
		var field = $(this).closest('.form_field');

		// фокус на инпуте/тексэйрии
		input.on('focus active',function() {
			label.addClass('filled focus');
		});

		// изменение value или расфокус инпута/тексэйрии
		input.on('blur change keyup paste input', function() {
			var value = $(this).val();
			if (value == '') {
				if (!input.is(':focus')) {
					label.removeClass('filled');
				}
			} else {
				label.addClass('filled');
			}
		});

		// изменение инпута/тексэйрии
		input.on('change keyup paste input', function() {
			field.removeClass('form_field-error');
		});

		// расфокус инпута/тексэйрии
		input.on('blur',function() {
			label.removeClass('focus');
		});
	});

	// Отправка формы по нажатию на Enter (при фокусе на input или textarea)
	$('.form-enter').find('input, textarea').on('focus',function() {
		$(this).closest('form.form-enter').addClass('focused');
	}).on('blur',function() {
		$(this).closest('form.form-enter').removeClass('focused');
	});
	$('.form-enter').find('input, textarea').on('focus',function() {
		var form = $(this).closest('form.form-enter');
		var btn = form.find('.btn-enter');
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

	/* Youtube fix */
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

	// Прокрутка к элементу
	$('.scrollTo').on('click',function(e) {
		e.preventDefault();
		var target = $(this).attr('data-scrollto');
		if (target) {
			var targetPos = $('[data-scrollto="'+target+'"]').not($(this)).offset().top - scrollOffset;
			$('html, body').animate({scrollTop:targetPos},500);
			console.log(targetPos);
		}
	});

	// Кастомные селекты
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

	// Табы
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

	// Аккордионы
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

	// Добавляем в попап кнопку закрытия
	$('.popups').find('.popup').each(function() {
		$(this).prepend('<div class="popup_close noselect" />');
	});
	$('.popups').find('.popup_close').on('click',function() {
		popupClose();
	});

	// Закрытие попапа при клике на фон
	$('.popups').on('click',function(e){
		if ($(e.target).closest('.popup.active').length) {} 
		else {
			popupClose();
			e.stopPropagation();
		}
	});

	// Закрытие попапа по нажатию на Esc
	if (popuped = true) {
		$(document).keydown(function(e) {
			if (e.which == 27) {
				popupClose();
			}
		});
	}

	$('.btn-sendform').on('click',function() {
		$('body').find('form:not(this)').children('.form_field').removeClass('form_field-error');
		refUrl = '<br>'+refUrl.toString().replace(/&/g, '<br>');
		var valid = validateForm($(this).closest('form').get(0));
		if(valid != false)	{
			var $form = $(this).closest('form');
			var name = $('input[name="name"]', $form).val() || '';
			var phone = $('input[name="phone"]', $form).val() || '';
			var email = $('input[name="email"]', $form).val() || '';
			var question = $('textarea[name="question"]', $form).val() || '';
			var thxPopup = $('.btn-sendform', $form).attr('data-thxpopup') || 'thx';
			var sbt = $('.btn-sendform', $form).attr('data-form-type');
			var submit = $('.btn-sendform', $form).text();
			if (formTitle == '') {
				formTitle = 'Заявка';
			}
			$.ajax({
				type: 'POST',
				url: sendUrl,
				dataType: 'json',
				data: 'name='+name+'&phone='+phone+'&'+sbt+'='+submit+'&email='+email+'&question='+question+'&formTitle='+serviceName+formTitle+'&referrer='+referrer+'&utm='+refUrl+'&siteName='+siteName+'&emailsArr='+emailsArr
			}).always(function() {
					thx(thxPopup);
				//метрики
				//setTimeout(function(){ga('send', 'event', ''+sbt, ''+sbt);}, 30);
				//setTimeout(function(){yaCounterXXXXXXXXX.reachGoal(''+sbt);}, 30); // меняем XXXXXXXXX на номер счетчика
			});
		} else {
			$(this).closest('form.form-validate').find('.form_field.form_field-error').first().find('input, textarea').focus();
		}
	});

	// scroll-навигация по странице
	function getTargetTop(elem){
		var id = elem.attr('href');
		var offset = scrollOffset;
		return $(id).offset().top - offset;
	}
	$('a[href^="#"].navScroll').click(function(e) {
		var target = getTargetTop($(this));
		$('html, body').animate({scrollTop:target}, 500);
		e.preventDefault();
	});
	var sections = $('a[href^="#"].navScroll');
	function checkSectionSelected(scrolledTo){
		var threshold = parseInt($(window).height() / 3);
		var i;
		for (i = 0; i < sections.length; i++) {
			var section = $(sections[i]);
			var target = getTargetTop(section);
			if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
				sections.parent('li').removeClass('active');
				section.parent('li').addClass('active');
			} else {
				sections.parent('li').removeClass('active');
			}
		};
	}
	checkSectionSelected($(window).scrollTop());
	$(window).scroll(function(e){
		checkSectionSelected($(window).scrollTop())
	});
});

// Положение открытого попапа
function popupState() {
	var activePopup = $('.popup.active');
	var popupsHeight = $('.popups').height();
	var popupHeight = activePopup.outerHeight();
	var popupWidth = activePopup.outerWidth();
	var m_top = -popupHeight / 2 + 'px';
	var m_left = -popupWidth / 2 + 'px';

	if (popupHeight < popupsHeight) {
		activePopup.css({
			'position':'absolute',
			'left':'50%',
			'top':'50%',
			'margin-top':m_top,
			'margin-left':m_left
		});
	} else {
		activePopup.css({
			'position':'relative',
			'left':'auto',
			'top':'auto',
			'margin':'0 auto'
		});
	}
}

// Открытие попапа
function popup(id, form, h1, h2, btn) {
	popupedPos = $(window).scrollTop();
	$('body').addClass('fixed').css('top',-popupedPos);
	$('.popup').fadeOut(animDuration);
	$('.popup').removeClass('active');
	var popup = $('.popup#'+id);

	if (id == 'request') {
		var defH1 = 'Оставить заявку',
			defH2 = 'Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время',
			defBtn = 'Оставить заявку';
		if (h1) {popup.find('.popup_h1').html(h1);} else {popup.find('.popup_h1').html(defH1);}
		if (h2) {popup.find('.popup_h2').html(h2);} else {popup.find('.popup_h2').html(defH2);}
		if (btn) {popup.find('.btn').html(btn);} else {popup.find('.btn').html(defBtn);}
		if (form) {formTitle = form;}
	}

	$('.popups').fadeIn(animDuration);
	popup.addClass('active');
	popup.fadeIn(animDuration);
	popupState();
	popuped = true;
}

// Открытие попапа с видео
function videoPopup(id, embedCode) {
	popupedPos = $(window).scrollTop();
	$('body').addClass('fixed').css('top',-popupedPos);
	$('.popup').fadeOut(animDuration);
	$('.popup').removeClass('active');
	$('.popup.popup-video#'+id).find('.pv_video').html(embedCode);
	$('.popups').fadeIn(animDuration).scrollTop(0);
	$('.popup.popup-video#'+id).addClass('active');
	$('.popup.popup-video#'+id).fadeIn(animDuration);
	popupState();
	popuped = true;
}

// Закрытие попапа
function popupClose() {
	$('.popup').fadeOut(animDuration);
	$('.popup').removeClass('active');
	$('.popups').fadeOut(animDuration, function() {$('body').removeClass('fixed').css('top','auto').scrollTop(popupedPos);});
	$('.popup.popup-video').find('.pv_video').html('');
	$('body').find('.form_field').removeClass('form_field-error');
	popuped = false;
}

// Изменяем formTitle для формы
function changeFormTitle(form) {
	formTitle = form;
}

// Попап "Спасибо за заявку"
function thx(thx) {
	$('.popup').fadeOut(animDuration);
	$('.popup').removeClass('active');
	popup(thx);
	$('.popup').find('.form_field.form_field-error').removeClass('form_field-error');
	$('.popup').find('textarea, input').val('');
}

// Валидатор формы
function validateForm(form) {
	var $form = $(form);
	var valid = true;

	if ($form.find('.form_field.form_field-required').length) {
		$form.find('.form_field.form_field-required').each(function() {
			var errorClass = 'form_field-error';
			var type = $(this).attr('data-field-type');
			var val = $(this).find('input').val() || $(this).find('textarea').val();

			if (!val) {
				$(this).addClass(errorClass);
				valid = false;
			} else {
				$(this).removeClass(errorClass);
			}

			if (type == 'email') {
				if(!val) {
					$(this).addClass(errorClass);
					valid = false;
				} else if(!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(val)) {
					$(this).addClass(errorClass);
					valid = false;
				} else {
					$(this).removeClass(errorClass);
				}
			}

			if (type == 'phone') {
				if(/[^0-9\+ ()\-]/.test(val)) {
					$(this).addClass(errorClass);
					valid = false;
				} else {
					$(this).removeClass(errorClass);
				}
			}
		});
	}

	popupState();

	if(valid != true) { return false; }
}