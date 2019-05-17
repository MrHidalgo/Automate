"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  /**
    * @description
   */
  btn.addEventListener("click", function (ev) {
    var elem = ev.currentTarget;

    elem.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-open");

    hideScrollContainer.forEach(function (val, idx) {
      val.classList.toggle("is-hideScroll");
    });
  });
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initStellar
 * @description Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element.
 *
 * Parallax Elements
 * - data-stellar-ratio="1"
 *
 * Parallax Backgrounds
 * - data-stellar-background-ratio="1"
 */
var initStellar = function initStellar() {
  if ($("[parallax-js]").length) {
    $(function () {
      $.stellar({
        // Set scrolling to be in either one or both directions
        horizontalScrolling: false,
        verticalScrolling: true,

        // Set the global alignment offsets
        horizontalOffset: 0,
        verticalOffset: 0,

        // Refreshes parallax content on window load and resize
        responsive: false,

        // Select which property is used to calculate scroll.
        // Choose 'scroll', 'position', 'margin' or 'transform',
        // or write your own 'scrollProperty' plugin.
        scrollProperty: 'scroll',

        // Select which property is used to position elements.
        // Choose between 'position' or 'transform',
        // or write your own 'positionProperty' plugin.
        positionProperty: 'position',

        // Enable or disable the two types of parallax
        parallaxBackgrounds: true,
        parallaxElements: true,

        // Hide parallax elements that move outside the viewport
        hideDistantElements: false,

        // Customise how elements are shown and hidden
        hideElement: function hideElement($elem) {
          $elem.hide();
        },
        showElement: function showElement($elem) {
          $elem.show();
        }
      });
    });
  }
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

  svg4everybody();
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  /**
    * @description
   */
  WebFont.load({
    google: {
      families: ['Lora:400,700', 'Open+Sans:300,400,500,600,700,800']
    }
  });

  /**
    * @description
   */
  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };
};

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
  var initFloatingSupportedBlock = function initFloatingSupportedBlock() {
    var _tl = new TimelineMax({ repeat: -1, yoyo: true });

    _tl.fromTo($('.supported__block-1'), 1.75, { y: 0 }, { y: 20, ease: Power1.easeInOut }).fromTo($('.supported__block-2'), 1.65, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.75').fromTo($('.supported__block-3'), 1.55, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.65').fromTo($('.supported__block-4'), 1.45, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.55').fromTo($('.supported__block-5'), 1.85, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.45').fromTo($('.supported__block-6'), 1.95, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.85').fromTo($('.supported__block-7'), 1.65, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.95').fromTo($('.supported__block-8'), 1.45, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.65').fromTo($('.supported__block-9'), 1.55, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.45').fromTo($('.supported__block-10'), 1.85, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.55').fromTo($('.supported__block-11'), 1.75, { y: 0 }, { y: 20, ease: Power1.easeInOut }, '-=1.85');
  };

  /**
   *
   */
  var initFilterBtn = function initFilterBtn() {
    $('.dropdown > a').on('click', function (ev) {
      if ($(window).width() < 768) {
        $(ev.currentTarget).closest('.dropdown').toggleClass('is-open');
      }
    });
    $('.dropdown-menu > a').on('click', function (ev) {
      if ($(window).width() < 768) {
        $(ev.currentTarget).closest('.dropdown').removeClass('is-open');
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
  var initNative = function initNative() {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // ==========================================

    // lib
    // ==========================================
    initHamburger();
    initStellar();

    // callback
    // ==========================================
    initFloatingSupportedBlock();
    initFilterBtn();
  };
  initNative();
})();