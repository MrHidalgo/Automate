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
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
  var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
  var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;


  $(btnName).on("click", function (e) {
    var _offset = 0;

    var linkHref = $(e.currentTarget).attr('href'),
        headerHeight = $(".header").outerHeight() || 0,
        topHeightOffset = $(linkHref).offset().top - headerHeight;

    if (linkHref === '#pickSearch') {
      _offset += 50;
    }

    $('body, html').animate({
      scrollTop: topHeightOffset - _offset
    }, animateSpeed);
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

    _tl.fromTo($('.supported__block-1'), 1.85, { y: 0 }, { y: 20, ease: Power1.linear }).fromTo($('.supported__block-2'), 1.75, { y: 0 }, { y: 20, ease: Power1.linear }, '-=1.85').fromTo($('.supported__block-3'), 1.65, { y: 0 }, { y: 20, ease: Power1.linear }, '-=1.75').fromTo($('.supported__block-4'), 1.55, { y: 0 }, { y: 20, ease: Power1.linear }, '-=1.65').fromTo($('.supported__block-5'), 1.95, { y: 0 }, { y: 20, ease: Power1.linear }, '-=1.55').fromTo($('.supported__block-6'), 2.05, { y: 0 }, { y: 20, ease: Power1.linear }, '-=1.95').fromTo($('.supported__block-7'), 1.75, { y: 0 }, { y: 20, ease: Power1.linear }, '-=2.05').fromTo($('.supported__block-8'), 1.65, { y: 0 }, { y: 20, ease: Power1.linear }, '-=1.75').fromTo($('.supported__block-9'), 1.75, { y: 0 }, { y: 20, ease: Power1.linear }, '-=1.65').fromTo($('.supported__block-10'), 1.95, { y: 0 }, { y: 20, ease: Power1.linear }, '-=1.75').fromTo($('.supported__block-11'), 1.85, { y: 0 }, { y: 20, ease: Power1.linear }, '-=1.95');
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

  var initStickyElem = function initStickyElem() {
    $("#dropdown-sticky").stick_in_parent({
      offset_top: 95
    });
    $('#recipeSticky').stick_in_parent({
      offset_top: 95
    });
  };

  var initSearchApp = function initSearchApp() {
    $('[search-app-js]').on('keyup', function (ev) {
      var _el = $(ev.currentTarget),
          _iconNode = _el.prev().find('.icon-font');

      if (_el.val().length > 0) {
        _iconNode.removeClass('icon-search').addClass('icon-close');
      } else {
        _iconNode.addClass('icon-search').removeClass('icon-close');
      }
    });

    $('.pick__form-icon .icon-font').on('click', function (ev) {
      if ($(ev.currentTarget).hasClass('icon-close')) {
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
  var initNative = function initNative() {
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