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
		let _arrEl = $('.supported__block');

		function getRandomInt(time) {
			return (time) ? time : 1.7 + Number(Math.random().toFixed(2));
		}

		for(let i = 0, j = 1; i < _arrEl.length; i++, j++) {
			new TimelineMax({repeat:-1, yoyo: true})
				.fromTo(
					$('.supported__block-' + j),
					getRandomInt(),
					{y:0},
					{y:30, ease: Power1.easeInOut}
					);
		}
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
		$('#search-app-js').on('keyup', (ev) => {
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
				$('#search-app-js').val('');

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
