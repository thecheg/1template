	<div class="popups-overlay"></div>
	<div class="popup popup--thx" id="thx">
		<div class="popup-wrapper">
			<div class="popup-content popup-content--thx">
				<div class="popup-inner">
					<div class="popup-title">
						<div class="popup-title__head">
							Спасибо за&nbsp;заявку!
						</div>
						<div class="popup-title__subtitle">
							Наш менеджер свяжется с&nbsp;вами в&nbsp;ближайшее время
						</div>
					</div>
					<div class="thx-btn">
						<button class="btn btn--1" onclick="popupClose();">
							Закрыть
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="popup popup--request" id="callback">
		<div class="popup-wrapper">
			<div class="popup-content popup-content--request">
				<div class="popup-inner">
					<div class="popup-title">
						<div class="popup-title__head">
							Заказать звонок
						</div>
						<div class="popup-title__subtitle">
							Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
						</div>
					</div>
					<div class="popup-form">
						<form class="form form--validate form--enter">
							<div class="form-field form-field--required" data-field-type="text">
								<label class="input">
									<span class="input-placeholder">Ваше имя</span>
									<input type="text" name="name" />
								</label>
							</div>
							<div class="form-field form-field--required" data-field-type="phone">
								<label class="input">
									<span class="input-placeholder">Ваш телефон</span>
									<input type="number" name="phone" />
								</label>
							</div>
							<div class="form-field form-field--btn">
								<button data-form-type="callback" data-thxpopup="thx" class="btn btn--1 btn--sendform btn--enter">
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
		<div class="popup-wrapper">
			<div class="popup-content popup-content--request">
				<div class="popup-inner">
					<div class="popup-title">
						<div class="popup-title__head">
							Оставить заявку
						</div>
						<div class="popup-title__subtitle">
							Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
						</div>
					</div>
					<div class="popup-form">
						<form class="form form--validate form--enter">
							<div class="form-field form-field--required" data-field-type="text">
								<label class="input">
									<span class="input-placeholder">Ваше имя</span>
									<input type="text" name="name" />
								</label>
							</div>
							<div class="form-field form-field--required" data-field-type="phone">
								<label class="input">
									<span class="input-placeholder">Ваш телефон</span>
									<input type="number" name="phone" />
								</label>
							</div>
							<div class="form-field form-field--required" data-field-type="email">
								<label class="input">
									<span class="input-placeholder">Ваш E-mail</span>
									<input type="text" name="email" />
								</label>
							</div>
							<div class="form-field form-field--btn">
								<button data-form-type="request" data-thxpopup="thx" class="btn btn--1 btn--sendform btn--enter">
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
		<div class="popup-wrapper">
			<div class="popup-content popup-content--request">
				<div class="popup-inner">
					<div class="popup-title">
						<div class="popup-title__head">
							Задать вопрос
						</div>
						<div class="popup-title__subtitle">
							Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время
						</div>
					</div>
					<div class="popup-form">
						<form class="form form--validate form--enter">
							<div class="form-field form-field--required" data-field-type="text">
								<label class="input">
									<span class="input-placeholder">Ваше имя</span>
									<input type="text" name="name" />
								</label>
							</div>
							<div class="form-field form-field--required" data-field-type="phone">
								<label class="input">
									<span class="input-placeholder">Ваш телефон</span>
									<input type="number" name="phone" />
								</label>
							</div>
							<div class="form-field form-field--required" data-field-type="email">
								<label class="input">
									<span class="input-placeholder">Ваш E-mail</span>
									<input type="text" name="email" />
								</label>
							</div>
							<div class="form-field form-field--required" data-field-type="text">
								<label class="input" />
									<span class="input-placeholder">Ваш вопрос</span>
									<textarea name="question"></textarea>
								</label>
							</div>
							<div class="form-field form-field--btn">
								<button data-form-type="question" data-thxpopup="thx" class="btn btn--1 btn--sendform btn--enter">
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
		<div class="popup-wrapper">
			<div class="popup-content popup-content--video">
				<div class="popup-video"></div>
			</div>
		</div>
	</div>
