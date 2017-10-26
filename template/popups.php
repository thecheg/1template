	<div class="popups-overlay"></div>
	<div class="popup popup--thx" id="thx">
		<div class="popup__content">
			<div class="popup__h1">Спасибо за&nbsp;заявку!</div>
			<div class="popup__h2">Наш менеджер свяжется с&nbsp;вами в&nbsp;ближайшее время</div>
			<div class="btn btn--1" onClick="popupClose();">Закрыть</div>
		</div>
	</div>
	<div class="popup" id="callback">
		<div class="popup__content">
			<div class="popup__h1">Заказать звонок</div>
			<div class="popup__h2">
				Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
			</div>
			<form class="form form--validate form--enter">
				<div class="form__field form__field--required" data-field-type="text">
					<label class="label label--input">
						<div class="placeholder placeholder--input">Ваше имя</div>
						<input type="text" name="name">
					</label>
				</div>
				<div class="form__field form__field--required" data-field-type="phone">
					<label class="label label--input">
						<div class="placeholder placeholder--input">Ваш телефон</div>
						<input type="text" name="phone">
					</label>
				</div>
				<div class="form__field form__field--btn">
					<div data-form-type="callback" data-thxpopup="thx" class="btn btn--1 btn--sendform btn--enter">Заказать звонок</div>
				</div>
			</form>
		</div>
	</div>
	<div class="popup" id="request">
		<div class="popup__content">
			<div class="popup__h1">Оставить заявку</div>
			<div class="popup__h2">
				Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
			</div>
			<form class="form form--validate form--enter">
				<div class="form__field form__field--required" data-field-type="text">
					<label class="label label--input">
						<div class="placeholder placeholder--input">Ваше имя</div>
						<input type="text" name="name">
					</label>
				</div>
				<div class="form__field form__field--required" data-field-type="phone">
					<label class="label label--input">
						<div class="placeholder placeholder--input">Ваш телефон</div>
						<input type="text" name="phone">
					</label>
				</div>
				<div class="form__field form__field--required" data-field-type="email">
					<label class="label label--input">
						<div class="placeholder placeholder--input">Ваш E-mail</div>
						<input type="text" name="email">
					</label>
				</div>
				<div class="form__field form__field--btn">
					<div data-form-type="request" data-thxpopup="thx" class="btn btn--1 btn--sendform btn--enter">Оставить заявку</div>
				</div>
			</form>
		</div>
	</div>
	<div class="popup" id="question">
		<div class="popup__content">
			<div class="popup__h1">Задать вопрос</div>
			<div class="popup__h2">
				Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
			</div>
			<form class="form form--validate form--enter">
				<div class="form__field form__field--required" data-field-type="text">
					<label class="label label--input">
						<div class="placeholder placeholder--input">Ваше имя</div>
						<input type="text" name="name">
					</label>
				</div>
				<div class="form__field form__field--required" data-field-type="phone">
					<label class="label label--input">
						<div class="placeholder placeholder--input">Ваш телефон</div>
						<input type="text" name="phone">
					</label>
				</div>
				<div class="form__field form__field--required" data-field-type="email">
					<label class="label label--input">
						<div class="placeholder placeholder--input">Ваш E-mail</div>
						<input type="text" name="email">
					</label>
				</div>
				<div class="form__field form__field--required" data-field-type="text">
					<label class="label label--input">
						<div class="placeholder placeholder--input">Ваш вопрос</div>
						<textarea name="question"></textarea>
					</label>
				</div>
				<div class="form__field form__field--btn">
					<div data-form-type="question" data-thxpopup="thx" class="btn btn--1 btn--sendform btn--enter">Задать вопрос</div>
				</div>
			</form>
		</div>
	</div>
	<div class="popup popup--video" id="video">
		<div class="popup__content popup__content--video">
			<div class="popup__video"></div>
		</div>
	</div>