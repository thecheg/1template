<div class="popups-overlay"></div>
	<div class="popup popup--thx" id="thx">
		<div class="popup__wrapper">
			<div class="popup__content popup__close-container popup__content--thx">
				<div class="popup__inner">
					<div class="popup__title">
						<div class="popup__title-head">
							Спасибо за&nbsp;заявку!
						</div>
						<div class="popup__title-subtitle">
							Наш менеджер свяжется с&nbsp;вами в&nbsp;ближайшее время
						</div>
					</div>
					<div class="popup__thx-btn">
						<button class="ui-btn ui-btn--1" onclick="popupClose();">
							Закрыть
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="popup popup--request" id="callback">
		<div class="popup__wrapper">
			<div class="popup__content popup__close-container popup__content--request">
				<div class="popup__inner">
					<div class="popup__title">
						<div class="popup__title-head">
							Заказать звонок
						</div>
						<div class="popup__title-subtitle">
							Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
						</div>
					</div>
					<div class="popup__form">
						<form class="form send-form" data-form-type="callback" data-thxpopup="thx">
							<div class="ui-form-field ui-form-field--required" data-field-type="text">
								<label class="ui-input">
									<span class="ui-input__placeholder">Ваше имя</span>
									<input type="text" name="name" />
								</label>
							</div>
							<div class="ui-form-field ui-form-field--required" data-field-type="phone">
								<label class="ui-input">
									<span class="ui-input__placeholder">Ваш телефон</span>
									<input type="number" name="phone" />
								</label>
							</div>
							<div class="ui-form-field ui-form-field--btn">
								<button class="ui-btn ui-btn--1">
									Заказать звонок
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="popup popup--request" id="request">
		<div class="popup__wrapper">
			<div class="popup__content popup__close-container popup__content--request">
				<div class="popup__inner">
					<div class="popup__title">
						<div class="popup__title-head">
							Оставить заявку
						</div>
						<div class="popup__title-subtitle">
							Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
						</div>
					</div>
					<div class="popup__form">
						<form class="form send-form" data-form-type="request" data-thxpopup="thx">
							<div class="ui-form-field ui-form-field--required" data-field-type="text">
								<label class="ui-input">
									<span class="ui-input__placeholder">Ваше имя</span>
									<input type="text" name="name" />
								</label>
							</div>
							<div class="ui-form-field ui-form-field--required" data-field-type="phone">
								<label class="ui-input">
									<span class="ui-input__placeholder">Ваш телефон</span>
									<input type="number" name="phone" />
								</label>
							</div>
							<div class="ui-form-field ui-form-field--required" data-field-type="email">
								<label class="ui-input">
									<span class="ui-input__placeholder">Ваш E-mail</span>
									<input type="text" name="email" />
								</label>
							</div>
							<div class="ui-form-field ui-form-field--btn">
								<button class="ui-btn ui-btn--1">
									Оставить заявку
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="popup popup--request" id="question">
		<div class="popup__wrapper">
			<div class="popup__content popup__close-container popup__content--request">
				<div class="popup__inner">
					<div class="popup__title">
						<div class="popup__title-head">
							Задать вопрос
						</div>
						<div class="popup__title-subtitle">
							Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
						</div>
					</div>
					<div class="popup-form">
						<form class="form send-form" data-form-type="question" data-thxpopup="thx">
							<div class="ui-form-field ui-form-field--required" data-field-type="text">
								<label class="ui-input">
									<span class="ui-input__placeholder">Ваше имя</span>
									<input type="text" name="name" />
								</label>
							</div>
							<div class="ui-form-field ui-form-field--required" data-field-type="phone">
								<label class="ui-input">
									<span class="ui-input__placeholder">Ваш телефон</span>
									<input type="number" name="phone" />
								</label>
							</div>
							<div class="ui-form-field ui-form-field--required" data-field-type="email">
								<label class="ui-input">
									<span class="ui-input__placeholder">Ваш E-mail</span>
									<input type="text" name="email" />
								</label>
							</div>
							<div class="ui-form-field ui-form-field--required" data-field-type="text">
								<label class="ui-input">
									<span class="ui-input__placeholder">Ваш вопрос</span>
									<textarea name="question"></textarea>
								</label>
							</div>
							<div class="ui-form-field ui-form-field--btn">
								<button class="ui-btn ui-btn--1">
									Задать вопрос
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="popup popup--video" id="video">
		<div class="popup__wrapper">
			<div class="popup__content popup__close-container popup__content--video">
				<div class="popup__video"></div>
			</div>
		</div>
	</div>
