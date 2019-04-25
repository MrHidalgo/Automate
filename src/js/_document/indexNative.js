/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const initPricingTabs = () => {
		const _btns = document.getElementsByClassName('pricing__tabs');

		for(let _el of _btns) {
			_el.addEventListener("click", (ev) => {

				for(let _e of _btns) {
					_e.classList.remove('is-active');
				}

				ev.currentTarget.classList.add('is-active');
			})
		}
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
		// ==========================================

		// callback
		// ==========================================
		initPricingTabs();
	};
	initNative();
})();
