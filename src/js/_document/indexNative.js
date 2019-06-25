/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	/**
	 *
	 */
	const initFloatingSupportedBlock = () => {
		let _tl = new TimelineMax({repeat:-1, yoyo: true});

		_tl
			.fromTo($('.supported__block-1'), 1.85, {y:0}, {y:20, ease: Power1.linear})
			.fromTo($('.supported__block-2'), 1.75, {y:0}, {y:20, ease: Power1.linear}, '-=1.85')
			.fromTo($('.supported__block-3'), 1.65, {y:0}, {y:20, ease: Power1.linear}, '-=1.75')
			.fromTo($('.supported__block-4'), 1.55, {y:0}, {y:20, ease: Power1.linear}, '-=1.65')
			.fromTo($('.supported__block-5'), 1.95, {y:0}, {y:20, ease: Power1.linear}, '-=1.55')
			.fromTo($('.supported__block-6'), 2.05, {y:0}, {y:20, ease: Power1.linear}, '-=1.95')
			.fromTo($('.supported__block-7'), 1.75, {y:0}, {y:20, ease: Power1.linear}, '-=2.05')
			.fromTo($('.supported__block-8'), 1.65, {y:0}, {y:20, ease: Power1.linear}, '-=1.75')
			.fromTo($('.supported__block-9'), 1.75, {y:0}, {y:20, ease: Power1.linear}, '-=1.65')
			.fromTo($('.supported__block-10'), 1.95, {y:0}, {y:20, ease: Power1.linear}, '-=1.75')
			.fromTo($('.supported__block-11'), 1.85, {y:0}, {y:20, ease: Power1.linear}, '-=1.95');
	};


	/**
	 *
	 */
	const initFilterBtn = () => {
		$('.dropdown > a').on('click', (ev) => {
			if($(window).width() < 768) {
				$(ev.currentTarget).closest('.dropdown').toggleClass('is-open');
			}
		});
		$('.dropdown-menu > a').on('click', (ev) => {
			if($(window).width() < 768) {
				$(ev.currentTarget).closest('.dropdown').removeClass('is-open');
			}
		});
	};


	const initStickyElem = () => {
		$("#dropdown-sticky").stick_in_parent({
			offset_top: 95
		});
		$('#recipeSticky').stick_in_parent({
			offset_top: 95
		});
	};

	const initSearchApp = () => {
		$('[search-app-js]').on('keyup', (ev) => {
			const _el = $(ev.currentTarget),
				_iconNode = _el.prev().find('.icon-font');

			if(_el.val().length > 0) {
				_iconNode.removeClass('icon-search').addClass('icon-close');
			} else {
				_iconNode.addClass('icon-search').removeClass('icon-close');
			}
		});

		$('.pick__form-icon .icon-font').on('click', (ev) => {
			if($(ev.currentTarget).hasClass('icon-close')) {
				$('[search-app-js]').val('');

				$(ev.currentTarget).addClass('icon-search').removeClass('icon-close');
			}
		});
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initWebFontLoader();
		initPreventBehavior();
		initSvg4everybody();
		// ==========================================

		// lib
		initHamburger();
		initStellar();
		initSmoothScroll();
		// ==========================================

		// callback
		initFloatingSupportedBlock();
		initFilterBtn();
		initStickyElem();
		initSearchApp();
		// ==========================================
	};
	initNative();
})();
