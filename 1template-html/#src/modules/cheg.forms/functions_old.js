/*! Send forms */
const formInit = (form) => {
	// add errors to fields
	form.find('.ui-form__field--required').each(function () {
		$(this).append('<div class="ui-errors"><p class="ui-errors__item ui-errors__item--required">Обязательное поле</p></div>');
	});

	// add * to required fields
	form.find('.ui-form__field--required').each(function () {
		$(this).find('.ui-input__placeholder').append(' *');
	});

	// check if is filled
	form.on('submit', function (e) {
		e.preventDefault();

		let formType = form.attr('data-form-type'),
			valid = formValidator(form);

		// if check passed
		if (valid) {
			let formData = new FormData(form.get(0)),
				thxPopup = form.attr('data-form-thxpopup') || 'thx';
			if (!def.formTitle || def.formTitle == '') {
				def.formTitle = 'Заявка';
			}
			formData.append('formTitle', def.formTitle);
			formData.append('formType', formType);
			$.ajax({
				type: 'POST',
				url: rootPath + 'php/send.php',
				dataType: 'json',
				processData: false,
				contentType: false,
				data: formData,
				success: function () {
					popups.thx(thxPopup);
					clearForm(form);
				},
				error: function (data) {
					console.log(data);
				}
			});
		}
		// if not passed
		else {
			form.find('.ui-form__field--error').first().find('input, textarea').focus();
		}
	});

	form.data('formInit', true);
}
/*! Clear form */
const clearForm = (form) => {
	form.find('.ui-form__field--error').removeClass('.ui-form__field--error');

	form.find('.ui-form__field').find('input, textarea').val('').trigger('change');
}

/*! Form validator */
const formValidator = (form) => {
	let errorClass = 'ui-form__field--error',
		errorText = '',
		valid = true;

	if (form.find('.ui-form__field--required').length) {
		form.find('.ui-form__field--required').each(function () {
			let field = $(this),
				fieldType = field.attr('data-field-type'),
				fieldVal;

			if (field.find('input').length) {
				fieldVal = field.find('input').val();
			} else {
				fieldVal = field.find('textarea').val();
			}

			field.find('.form-errors__item--type').remove();
			if (!fieldVal) {
				field.addClass(errorClass);
				field.find('.ui-errors__item--type').remove();
				field.find('.ui-errors__item--required').show();
				valid = false;
			} else {
				field.removeClass(errorClass);
				field.find('.ui-errors__item--required').hide();

				if (fieldType == 'email') {
					errorText = 'Некорректный e-mail';
					if (!/^([a-z0-9_\.-])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i.test(fieldVal)) {
						field.find('.ui-errors').append('<p class="ui-errors__item--type">' + errorText + '</p>');
						field.addClass(errorClass);
						valid = false;
					} else {
						field.find('.ui-errors__item--type').remove();
						field.removeClass(errorClass);
					}
				}

				if (fieldType == 'phone') {
					errorText = 'Некорректный номер телефона';
					if (/[^0-9\+ ()\-]/.test(fieldVal)) {
						$(this).find('.ui-errors').append('<p class="ui-errors__item--type">' + errorText + '</p>');
						field.addClass(errorClass);
						valid = false;
					} else {
						field.find('.ui-errors__item--type').remove();
						field.removeClass(errorClass);
					}
				}
			}
		});
	}

	return valid;
}