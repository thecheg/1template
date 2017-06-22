	<div class="popups">
		<div class="popup popup-thx" id="thx">
			<div class="popup_h1">Спасибо за&nbsp;заявку!</div>
			<div class="popup_h2">Наш менеджер свяжется с&nbsp;вами в&nbsp;ближайшее время</div>
			<div class="btn btn-1" onClick="popupClose();">Закрыть</div>
		</div>
		<div class="popup" id="callback">
			<div class="popup_h1">Заказать звонок</div>
			<div class="popup_h2">
				Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
			</div>
			<form class="form-validate form-enter">
				<div class="form_field form_field-required" data-field-type="text">
					<label class="label-input">
						<div class="placeholder">Ваше имя</div>
						<input type="text" name="name">
					</label>
				</div>
				<div class="form_field form_field-required" data-field-type="phone">
					<label class="label-input">
						<div class="placeholder">Ваш телефон</div>
						<input type="text" name="phone">
					</label>
				</div>
				<div data-form-type="callback" data-thxpopup="thx" class="btn btn-1 btn-sendform btn-enter">Заказать звонок</div>
			</form>
		</div>
		<div class="popup" id="request">
			<div class="popup_h1">Оставить заявку</div>
			<div class="popup_h2">
				Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
			</div>
			<form class="form-validate form-enter">
				<div class="form_field form_field-required" data-field-type="text">
					<label class="label-input">
						<div class="placeholder">Ваше имя</div>
						<input type="text" name="name">
					</label>
				</div>
				<div class="form_field form_field-required" data-field-type="phone">
					<label class="label-input">
						<div class="placeholder">Ваш телефон</div>
						<input type="text" name="phone">
					</label>
				</div>
				<div class="form_field form_field-required" data-field-type="email">
					<label class="label-input">
						<div class="placeholder">Ваш E-mail</div>
						<input type="text" name="email">
					</label>
				</div>
				<div data-form-type="request" data-thxpopup="thx" class="btn btn-1 btn-sendform btn-enter">Оставить заявку</div>
			</form>
		</div>
		<div class="popup" id="question">
			<div class="popup_h1">Задать вопрос</div>
			<div class="popup_h2">
				Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
			</div>
			<form class="form-validate form-enter">
				<div class="form_field form_field-required" data-field-type="text">
					<label class="label-input">
						<div class="placeholder">Ваше имя</div>
						<input type="text" name="name">
					</label>
				</div>
				<div class="form_field form_field-required" data-field-type="phone">
					<label class="label-input">
						<div class="placeholder">Ваш телефон</div>
						<input type="text" name="phone">
					</label>
				</div>
				<div class="form_field form_field-required" data-field-type="email">
					<label class="label-input">
						<div class="placeholder">Ваш E-mail</div>
						<input type="text" name="email">
					</label>
				</div>
				<div class="form_field form_field-required" data-field-type="text">
					<label class="label-input">
						<div class="placeholder">Ваш вопрос</div>
						<textarea name="question"></textarea>
					</label>
				</div>
				<div data-form-type="question" data-thxpopup="thx" class="btn btn-1 btn-sendform btn-enter">Задать вопрос</div>
			</form>
		</div>
		<div class="popup popup-video" id="video">
			<div class="pv_video"></div>
		</div>
	</div>