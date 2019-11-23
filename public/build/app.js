(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css"); // flag icon css


__webpack_require__(/*! flag-icon-css/css/flag-icon.css */ "./node_modules/flag-icon-css/css/flag-icon.css"); // fancybox


__webpack_require__(/*! @fancyapps/fancybox/dist/jquery.fancybox.css */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css");

__webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function (stuff) {}
  };

  // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  }

  // Check if fancyBox is already initialized
  // ========================================

  if ($.fn.fancybox) {
    console.info("fancyBox already initialized");

    return;
  }

  // Private default settings
  // ========================

  var defaults = {
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,

    // Enable infinite gallery navigation
    loop: false,

    // Horizontal space between slides
    gutter: 50,

    // Enable keyboard navigation
    keyboard: true,

    // Should allow caption to overlap the content
    preventCaptionOverlap: true,

    // Should display navigation arrows at the screen edges
    arrows: true,

    // Should display counter at the top left corner
    infobar: true,

    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",

    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",

    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      //"fullScreen",
      //"download",
      "thumbs",
      "close"
    ],

    // Detect "idle" time in seconds
    idleTime: 3,

    // Disable right-click and use simple image protection for images
    protect: false,

    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,

    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: false
    },

    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },

    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,

      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},

      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },

    // For HTML5 video only
    video: {
      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
        '<source src="{{src}}" type="{{format}}" />' +
        'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
        "</video>",
      format: "", // custom video format
      autoStart: true
    },

    // Default content type if cannot be detected automatically
    defaultType: "image",

    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",

    // Duration in ms for open/close animation
    animationDuration: 366,

    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",

    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",

    // Duration in ms for transition animation
    transitionDuration: 366,

    // Custom CSS class for slide element
    slideClass: "",

    // Custom CSS class for layout
    baseClass: "",

    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
      "</div>" +
      "</div>",

    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',

    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
        "</a>",

      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
        "</button>",

      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
        "</button>",

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
        "</button>",

      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
        "</button>"
    },

    // Container is injected into this element
    parentEl: "body",

    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,

    // Focus handling
    // ==============

    // Try to focus on the first focusable element after opening
    autoFocus: true,

    // Put focus back to active element after closing
    backFocus: true,

    // Do not let user to focus on element outside modal content
    trapFocus: true,

    // Module specific options
    // =======================

    fullScreen: {
      autoStart: false
    },

    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning
    },

    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,

    // Customize or add new media types
    // Example:
    /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
    media: {},

    slideShow: {
      autoStart: false,
      speed: 3000
    },

    thumbs: {
      autoStart: false, // Display thumbnails on opening
      hideOnClose: true, // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container", // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling
    },

    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",

    // Callbacks
    //==========

    // See Documentation/API/Events for more information
    // Example:
    /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

    onInit: $.noop, // When instance has been initialized

    beforeLoad: $.noop, // Before the content of a slide is being loaded
    afterLoad: $.noop, // When the content of a slide is done loading

    beforeShow: $.noop, // Before open animation starts
    afterShow: $.noop, // When content is done loading and animating

    beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop, // After instance has been closed

    onActivate: $.noop, // When instance is brought to front
    onDeactivate: $.noop, // When other instance has been activated

    // Interaction
    // ===========

    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing

    // Clicked on the content
    clickContent: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    },

    // Clicked on the slide
    clickSlide: "close",

    // Clicked on the background (backdrop) element;
    // if you have not changed the layout, then most likely you need to use `clickSlide` option
    clickOutside: "close",

    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,

    // Custom options when mobile device is detected
    // =============================================

    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function (current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function (current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },

    // Internationalization
    // ====================

    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  };

  // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);

  var called = 0;

  // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================
  var isQuery = function (obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================
  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  // Detect the supported transition-end event property name
  // =======================================================
  var transitionEnd = (function () {
    var el = document.createElement("fakeelement"),
      t;

    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return "transitionend";
  })();

  // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly
  // ================================================================================
  var forceRedraw = function ($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  // Exclude array (`buttons`) options from deep merging
  // ===================================================
  var mergeOpts = function (opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);

    $.each(opts2, function (key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });

    return rez;
  };

  // How much of an element is visible in viewport
  // =============================================

  var inViewport = function (elem) {
    var elemCenter, rez;

    if (!elem || elem.ownerDocument !== document) {
      return false;
    }

    $(".fancybox-container").css("pointer-events", "none");

    elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };

    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

    $(".fancybox-container").css("pointer-events", "");

    return rez;
  };

  // Class definition
  // ================

  var FancyBox = function (content, opts, index) {
    var self = this;

    self.opts = mergeOpts({
      index: index
    }, $.fancybox.defaults);

    if ($.isPlainObject(opts)) {
      self.opts = mergeOpts(self.opts, opts);
    }

    if ($.fancybox.isMobile) {
      self.opts = mergeOpts(self.opts, self.opts.mobile);
    }

    self.id = self.opts.id || ++called;

    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;

    self.prevPos = null;
    self.currPos = 0;

    self.firstRun = true;

    // All group items
    self.group = [];

    // Existing slides (for current, next and previous gallery items)
    self.slides = {};

    // Create group elements
    self.addContent(content);

    if (!self.group.length) {
      return;
    }

    self.init();
  };

  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================

    init: function () {
      var self = this,
        firstItem = self.group[self.currIndex],
        firstItemOpts = firstItem.opts,
        $container,
        buttonStr;

      if (firstItemOpts.closeExisting) {
        $.fancybox.close(true);
      }

      // Hide scrollbars
      // ===============

      $("body").addClass("fancybox-active");

      if (
        !$.fancybox.getInstance() &&
        firstItemOpts.hideScrollbar !== false &&
        !$.fancybox.isMobile &&
        document.body.scrollHeight > window.innerHeight
      ) {
        $("head").append(
          '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
          (window.innerWidth - document.documentElement.clientWidth) +
          "px;}</style>"
        );

        $("body").addClass("compensate-for-scrollbar");
      }

      // Build html markup and set references
      // ====================================

      // Build html code for buttons and insert into main template
      buttonStr = "";

      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      });

      // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete
      $container = $(
          self.translate(
            self,
            firstItemOpts.baseTpl
            .replace("{{buttons}}", buttonStr)
            .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
          )
        )
        .attr("id", "fancybox-container-" + self.id)
        .addClass(firstItemOpts.baseClass)
        .data("FancyBox", self)
        .appendTo(firstItemOpts.parentEl);

      // Create object holding references to jQuery wrapped nodes
      self.$refs = {
        container: $container
      };

      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
        self.$refs[item] = $container.find(".fancybox-" + item);
      });

      self.trigger("onInit");

      // Enable events, deactive previous instances
      self.activate();

      // Build slides, load and reveal content
      self.jumpTo(self.currIndex);
    },

    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================

    translate: function (obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },

    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================

    addContent: function (content) {
      var self = this,
        items = $.makeArray(content),
        thumbs;

      $.each(items, function (i, item) {
        var obj = {},
          opts = {},
          $item,
          type,
          found,
          src,
          srcParts;

        // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item);

          // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
          opts = $item.data() || {};
          opts = $.extend(true, {}, opts, opts.options);

          // Here we store clicked element
          opts.$orig = $item;

          obj.src = self.opts.src || opts.src || $item.attr("href");

          // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`
          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: "html",
            src: item + ""
          };
        }

        // Each gallery object has full collection of options
        obj.opts = $.extend(true, {}, self.opts, opts);

        // Do not merge buttons array
        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }

        if ($.fancybox.isMobile && obj.opts.mobile) {
          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
        }

        // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================

        type = obj.type || obj.opts.type;
        src = obj.src || "";

        if (!type && src) {
          if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
            type = "video";

            if (!obj.opts.video.format) {
              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "iframe";
            obj = $.extend(true, obj, {
              contentType: "pdf",
              opts: {
                iframe: {
                  preload: false
                }
              }
            });
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }

        if (type) {
          obj.type = type;
        } else {
          self.trigger("objectNeedsType", obj);
        }

        if (!obj.contentType) {
          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
        }

        // Step 3 - Some adjustments
        // =========================

        obj.index = self.group.length;

        if (obj.opts.smallBtn == "auto") {
          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
        }

        if (obj.opts.toolbar === "auto") {
          obj.opts.toolbar = !obj.opts.smallBtn;
        }

        // Find thumbnail image, check if exists and if is in the viewport
        obj.$thumb = obj.opts.$thumb || null;

        if (obj.opts.$trigger && obj.index === self.opts.index) {
          obj.$thumb = obj.opts.$trigger.find("img:first");

          if (obj.$thumb.length) {
            obj.opts.$orig = obj.opts.$trigger;
          }
        }

        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
          obj.$thumb = obj.opts.$orig.find("img:first");
        }

        if (obj.$thumb && !obj.$thumb.length) {
          obj.$thumb = null;
        }

        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

        // "caption" is a "special" option, it can be used to customize caption per gallery item
        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }

        if ($.type(self.opts.caption) === "function") {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        }

        // Make sure we have caption as a string or jQuery object
        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
        }

        // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"
        if (obj.type === "ajax") {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();

            obj.opts.filter = srcParts.shift();
          }
        }

        // Hide all buttons and disable interactivity for modal items
        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            trapFocus: true,
            // Remove buttons
            infobar: 0,
            toolbar: 0,

            smallBtn: 0,

            // Disable keyboard navigation
            keyboard: 0,

            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,

            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }

        // Step 4 - Add processed object to group
        // ======================================

        self.group.push(obj);
      });

      // Update controls if gallery is already opened
      if (Object.keys(self.slides).length) {
        self.updateControls();

        // Update thumbnails, if needed
        thumbs = self.Thumbs;

        if (thumbs && thumbs.isActive) {
          thumbs.create();

          thumbs.focus();
        }
      }
    },

    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detecting inactivity
    // ======================================

    addEvents: function () {
      var self = this;

      self.removeEvents();

      // Make navigation elements clickable
      // ==================================

      self.$refs.container
        .on("click.fb-close", "[data-fancybox-close]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.close(e);
        })
        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.previous();
        })
        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.next();
        })
        .on("click.fb", "[data-fancybox-zoom]", function (e) {
          // Click handler for zoom button
          self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        });

      // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }

          self.requestId = requestAFrame(function () {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }

          setTimeout(
            function () {
              self.$refs.stage.show();

              self.update(e);
            },
            $.fancybox.isMobile ? 600 : 250
          );
        }
      });

      $D.on("keydown.fb", function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null,
          current = instance.current,
          keycode = e.keyCode || e.which;

        // Trap keyboard focus inside of the modal
        // =======================================

        if (keycode == 9) {
          if (current.opts.trapFocus) {
            self.focus(e);
          }

          return;
        }

        // Enable keyboard navigation
        // ==========================

        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
          return;
        }

        // Backspace and Esc keys
        if (keycode === 8 || keycode === 27) {
          e.preventDefault();

          self.close(e);

          return;
        }

        // Left arrow and Up arrow
        if (keycode === 37 || keycode === 38) {
          e.preventDefault();

          self.previous();

          return;
        }

        // Righ arrow and Down arrow
        if (keycode === 39 || keycode === 40) {
          e.preventDefault();

          self.next();

          return;
        }

        self.trigger("afterKeydown", e, keycode);
      });

      // Hide controls after some inactivity period
      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;

        $D.on(
          "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
          function (e) {
            self.idleSecondsCounter = 0;

            if (self.isIdle) {
              self.showControls();
            }

            self.isIdle = false;
          }
        );

        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;

            self.hideControls();
          }
        }, 1000);
      }
    },

    // Remove events added by the core
    // ===============================

    removeEvents: function () {
      var self = this;

      $W.off("orientationchange.fb resize.fb");
      $D.off("keydown.fb .fb-idle");

      this.$refs.container.off(".fb-close .fb-prev .fb-next");

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);

        self.idleInterval = null;
      }
    },

    // Change to previous gallery item
    // ===============================

    previous: function (duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },

    // Change to next gallery item
    // ===========================

    next: function (duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },

    // Switch to selected gallery item
    // ===============================

    jumpTo: function (pos, duration) {
      var self = this,
        groupLen = self.group.length,
        firstRun,
        isMoved,
        loop,
        current,
        previous,
        slidePos,
        stagePos,
        prop,
        diff;

      if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
        return;
      }

      // Should loop?
      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      // Check if opening for the first time; this helps to speed things up
      firstRun = self.firstRun = !Object.keys(self.slides).length;

      // Create slides
      previous = self.current;

      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;

      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }

        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;

      self.trigger("beforeShow", firstRun);

      self.updateControls();

      // Validate duration length
      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }

      duration = parseInt(duration, 10);

      // Check if user has swiped the slides or if still animating
      isMoved = self.isMoved(current);

      // Make sure current slide is visible
      current.$slide.addClass("fancybox-slide--current");

      // Fresh start - reveal container, current slide and start loading content
      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css("transition-duration", duration + "ms");
        }

        self.$refs.container.addClass("fancybox-is-open").trigger("focus");

        // Attempt to load content into slide
        // This will later call `afterLoad` -> `revealContent`
        self.loadSlide(current);

        self.preload("image");

        return;
      }

      // Get actual slide/stage positions (before cleaning up)
      slidePos = $.fancybox.getTranslate(previous.$slide);
      stagePos = $.fancybox.getTranslate(self.$refs.stage);

      // Clean up all slides
      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide, true);
      });

      if (previous.pos !== current.pos) {
        previous.isComplete = false;
      }

      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

      // If slides are out of place, then animate them to correct position
      if (isMoved) {
        // Calculate horizontal swipe distance
        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

        $.each(self.slides, function (index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned
          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

          $.fancybox.setTranslate(slide.$slide, {
            top: 0,
            left: leftPos - stagePos.left + diff
          });

          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          }

          // Redraw to make sure that transition will start
          forceRedraw(slide.$slide);

          // Animate the slide
          $.fancybox.animate(
            slide.$slide, {
              top: 0,
              left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
            },
            duration,
            function () {
              slide.$slide
                .css({
                  transform: "",
                  opacity: ""
                })
                .removeClass("fancybox-slide--next fancybox-slide--previous");

              if (slide.pos === self.currPos) {
                self.complete();
              }
            }
          );
        });
      } else if (duration && current.opts.transitionEffect) {
        // Set transition effect for previously active slide
        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

        $.fancybox.animate(
          previous.$slide,
          prop,
          duration,
          function () {
            previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
          },
          false
        );
      }

      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload("image");
    },

    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================

    createSlide: function (pos) {
      var self = this,
        $slide,
        index;

      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });

        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },

    // Scale image to the actual size of the image;
    // x and y values should be relative to the slide
    // ==============================================

    scaleToActual: function (x, y, duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        canvasWidth = $.fancybox.getTranslate(current.$slide).width,
        canvasHeight = $.fancybox.getTranslate(current.$slide).height,
        newImgWidth = current.width,
        newImgHeight = current.height,
        imgPos,
        posX,
        posY,
        scaleX,
        scaleY;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;

      imgPos = $.fancybox.getTranslate($content);

      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;

      // Get center position for original image
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;

      // Make sure image does not move away from edges
      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);

      $.fancybox.animate(
        $content, {
          top: posY,
          left: posX,
          scaleX: scaleX,
          scaleY: scaleY
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );

      // Stop slideshow
      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },

    // Scale image to fit inside parent element
    // ========================================

    scaleToFit: function (duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        end;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      end = self.getFitPos(current);

      self.updateCursor(end.width, end.height);

      $.fancybox.animate(
        $content, {
          top: end.top,
          left: end.left,
          scaleX: end.width / $content.width(),
          scaleY: end.height / $content.height()
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );
    },

    // Calculate image size to fit inside viewport
    // ===========================================

    getFitPos: function (slide) {
      var self = this,
        $content = slide.$content,
        $slide = slide.$slide,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        maxWidth,
        maxHeight,
        minRatio,
        aspectRatio,
        rez = {};

      if (!slide.isLoaded || !$content || !$content.length) {
        return false;
      }

      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

      maxWidth -=
        parseFloat($slide.css("paddingLeft")) +
        parseFloat($slide.css("paddingRight")) +
        parseFloat($content.css("marginLeft")) +
        parseFloat($content.css("marginRight"));

      maxHeight -=
        parseFloat($slide.css("paddingTop")) +
        parseFloat($slide.css("paddingBottom")) +
        parseFloat($content.css("marginTop")) +
        parseFloat($content.css("marginBottom"));

      if (!width || !height) {
        width = maxWidth;
        height = maxHeight;
      }

      minRatio = Math.min(1, maxWidth / width, maxHeight / height);

      width = minRatio * width;
      height = minRatio * height;

      // Adjust width/height to precisely fit into container
      if (width > maxWidth - 0.5) {
        width = maxWidth;
      }

      if (height > maxHeight - 0.5) {
        height = maxHeight;
      }

      if (slide.type === "image") {
        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
      } else if (slide.contentType === "video") {
        // Force aspect ratio for the video
        // "I say the whole world must learn of our peaceful ways… by force!"
        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

        if (height > width / aspectRatio) {
          height = width / aspectRatio;
        } else if (width > height * aspectRatio) {
          width = height * aspectRatio;
        }
      }

      rez.width = width;
      rez.height = height;

      return rez;
    },

    // Update content size and position for all slides
    // ==============================================

    update: function (e) {
      var self = this;

      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide, e);
      });
    },

    // Update slide content position and size
    // ======================================

    updateSlide: function (slide, e) {
      var self = this,
        $content = slide && slide.$content,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        $slide = slide.$slide;

      // First, prevent caption overlap, if needed
      self.adjustCaption(slide);

      // Then resize content to fit inside the slide
      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
        $.fancybox.stop($content);

        $.fancybox.setTranslate($content, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.isAnimating = false;

          self.updateCursor();
        }
      }

      // Then some adjustments
      self.adjustLayout(slide);

      if ($slide.length) {
        $slide.trigger("refresh");

        if (slide.pos === self.currPos) {
          self.$refs.toolbar
            .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
            .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
        }
      }

      self.trigger("onUpdate", slide, e);
    },

    // Horizontally center slide
    // =========================

    centerSlide: function (duration) {
      var self = this,
        current = self.current,
        $slide = current.$slide;

      if (self.isClosing || !current) {
        return;
      }

      $slide.siblings().css({
        transform: "",
        opacity: ""
      });

      $slide
        .parent()
        .children()
        .removeClass("fancybox-slide--previous fancybox-slide--next");

      $.fancybox.animate(
        $slide, {
          top: 0,
          left: 0,
          opacity: 1
        },
        duration === undefined ? 0 : duration,
        function () {
          // Clean up
          $slide.css({
            transform: "",
            opacity: ""
          });

          if (!current.isComplete) {
            self.complete();
          }
        },
        false
      );
    },

    // Check if current slide is moved (swiped)
    // ========================================

    isMoved: function (slide) {
      var current = slide || this.current,
        slidePos,
        stagePos;

      if (!current) {
        return false;
      }

      stagePos = $.fancybox.getTranslate(this.$refs.stage);
      slidePos = $.fancybox.getTranslate(current.$slide);

      return (
        !current.$slide.hasClass("fancybox-animated") &&
        (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
      );
    },

    // Update cursor style depending if content can be zoomed
    // ======================================================

    updateCursor: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        $container = self.$refs.container,
        canPan,
        isZoomable;

      if (!current || self.isClosing || !self.Guestures) {
        return;
      }

      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

      canPan = self.canPan(nextWidth, nextHeight);

      isZoomable = canPan ? true : self.isZoomable();

      $container.toggleClass("fancybox-is-zoomable", isZoomable);

      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

      if (canPan) {
        $container.addClass("fancybox-can-pan");
      } else if (
        isZoomable &&
        (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
      ) {
        $container.addClass("fancybox-can-zoomIn");
      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
        $container.addClass("fancybox-can-swipe");
      }
    },

    // Check if current slide is zoomable
    // ==================================

    isZoomable: function () {
      var self = this,
        current = self.current,
        fitPos;

      // Assume that slide is zoomable if:
      //   - image is still loading
      //   - actual size of the image is smaller than available area
      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
        if (!current.isLoaded) {
          return true;
        }

        fitPos = self.getFitPos(current);

        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
          return true;
        }
      }

      return false;
    },

    // Check if current image dimensions are smaller than actual
    // =========================================================

    isScaledDown: function (nextWidth, nextHeight) {
      var self = this,
        rez = false,
        current = self.current,
        $content = current.$content;

      if (nextWidth !== undefined && nextHeight !== undefined) {
        rez = nextWidth < current.width && nextHeight < current.height;
      } else if ($content) {
        rez = $.fancybox.getTranslate($content);
        rez = rez.width < current.width && rez.height < current.height;
      }

      return rez;
    },

    // Check if image dimensions exceed parent element
    // ===============================================

    canPan: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        pos = null,
        rez = false;

      if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
        rez = self.getFitPos(current);

        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {
            width: nextWidth,
            height: nextHeight
          };
        } else if (current.isComplete) {
          pos = $.fancybox.getTranslate(current.$content);
        }

        if (pos && rez) {
          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
        }
      }

      return rez;
    },

    // Load content into the slide
    // ===========================

    loadSlide: function (slide) {
      var self = this,
        type,
        $slide,
        ajaxLoad;

      if (slide.isLoading || slide.isLoaded) {
        return;
      }

      slide.isLoading = true;

      if (self.trigger("beforeLoad", slide) === false) {
        slide.isLoading = false;

        return false;
      }

      type = slide.type;
      $slide = slide.$slide;

      $slide
        .off("refresh")
        .trigger("onReset")
        .addClass(slide.opts.slideClass);

      // Create content depending on the type
      switch (type) {
        case "image":
          self.setImage(slide);

          break;

        case "iframe":
          self.setIframe(slide);

          break;

        case "html":
          self.setContent(slide, slide.src || slide.content);

          break;

        case "video":
          self.setContent(
            slide,
            slide.opts.video.tpl
            .replace(/\{\{src\}\}/gi, slide.src)
            .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
            .replace("{{poster}}", slide.thumb || "")
          );

          break;

        case "inline":
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case "ajax":
          self.showLoading(slide);

          ajaxLoad = $.ajax(
            $.extend({}, slide.opts.ajax.settings, {
              url: slide.src,
              success: function (data, textStatus) {
                if (textStatus === "success") {
                  self.setContent(slide, data);
                }
              },
              error: function (jqXHR, textStatus) {
                if (jqXHR && textStatus !== "abort") {
                  self.setError(slide);
                }
              }
            })
          );

          $slide.one("onReset", function () {
            ajaxLoad.abort();
          });

          break;

        default:
          self.setError(slide);

          break;
      }

      return true;
    },

    // Use thumbnail image, if possible
    // ================================

    setImage: function (slide) {
      var self = this,
        ghost;

      // Check if need to show loading icon
      setTimeout(function () {
        var $img = slide.$image;

        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
          self.showLoading(slide);
        }
      }, 50);

      //Check if image has srcset
      self.checkSrcset(slide);

      // This will be wrapper containing both ghost and actual image
      slide.$content = $('<div class="fancybox-content"></div>')
        .addClass("fancybox-is-hidden")
        .appendTo(slide.$slide.addClass("fancybox-slide--image"));

      // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually
      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;

        ghost = document.createElement("img");

        ghost.onerror = function () {
          $(this).remove();

          slide.$ghost = null;
        };

        ghost.onload = function () {
          self.afterLoad(slide);
        };

        slide.$ghost = $(ghost)
          .addClass("fancybox-image")
          .appendTo(slide.$content)
          .attr("src", slide.thumb);
      }

      // Start loading actual image
      self.setBigImage(slide);
    },

    // Check if image has srcset and get the source
    // ============================================
    checkSrcset: function (slide) {
      var srcset = slide.opts.srcset || slide.opts.image.srcset,
        found,
        temp,
        pxRatio,
        windowWidth;

      // If we have "srcset", then we need to find first matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.
      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;

        temp = srcset.split(",").map(function (el) {
          var ret = {};

          el.trim()
            .split(/\s+/)
            .forEach(function (el, i) {
              var value = parseInt(el.substring(0, el.length - 1), 10);

              if (i === 0) {
                return (ret.url = el);
              }

              if (value) {
                ret.value = value;
                ret.postfix = el[el.length - 1];
              }
            });

          return ret;
        });

        // Sort by value
        temp.sort(function (a, b) {
          return a.value - b.value;
        });

        // Ok, now we have an array of all srcset values
        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
            found = el;
            break;
          }
        }

        // If not found, take the last one
        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url;

          // If we have default width/height values, we can calculate height for matching source
          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = (slide.width / slide.height) * found.value;
            slide.width = found.value;
          }

          slide.opts.srcset = srcset;
        }
      }
    },

    // Create full-size image
    // ======================

    setBigImage: function (slide) {
      var self = this,
        img = document.createElement("img"),
        $img = $(img);

      slide.$image = $img
        .one("error", function () {
          self.setError(slide);
        })
        .one("load", function () {
          var sizes;

          if (!slide.$ghost) {
            self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

            self.afterLoad(slide);
          }

          if (self.isClosing) {
            return;
          }

          if (slide.opts.srcset) {
            sizes = slide.opts.sizes;

            if (!sizes || sizes === "auto") {
              sizes =
                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                "vw";
            }

            $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
          }

          // Hide temporary image after some delay
          if (slide.$ghost) {
            setTimeout(function () {
              if (slide.$ghost && !self.isClosing) {
                slide.$ghost.hide();
              }
            }, Math.min(300, Math.max(1000, slide.height / 1600)));
          }

          self.hideLoading(slide);
        })
        .addClass("fancybox-image")
        .attr("src", slide.src)
        .appendTo(slide.$content);

      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
        $img.trigger("load");
      } else if (img.error) {
        $img.trigger("error");
      }
    },

    // Computes the slide size from image size and maxWidth/maxHeight
    // ==============================================================

    resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
      var maxWidth = parseInt(slide.opts.width, 10),
        maxHeight = parseInt(slide.opts.height, 10);

      // Sets the default values from the image
      slide.width = imgWidth;
      slide.height = imgHeight;

      if (maxWidth > 0) {
        slide.width = maxWidth;
        slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
      }

      if (maxHeight > 0) {
        slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
        slide.height = maxHeight;
      }
    },

    // Create iframe wrapper, iframe and bindings
    // ==========================================

    setIframe: function (slide) {
      var self = this,
        opts = slide.opts.iframe,
        $slide = slide.$slide,
        $iframe;

      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
        .css(opts.css)
        .appendTo($slide);

      $slide.addClass("fancybox-slide--" + slide.contentType);

      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
        .attr(opts.attr)
        .appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide);

        // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on("load.fb error.fb", function (e) {
          this.isReady = 1;

          slide.$slide.trigger("refresh");

          self.afterLoad(slide);
        });

        // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function () {
          var $content = slide.$content,
            frameWidth = opts.css.width,
            frameHeight = opts.css.height,
            $contents,
            $body;

          if ($iframe[0].isReady !== 1) {
            return;
          }

          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {}

          // Calculate content dimensions, if it is accessible
          if ($body && $body.length && $body.children().length) {
            // Avoid scrolling to top (if multiple instances)
            $slide.css("overflow", "visible");

            $content.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            });

            if (frameWidth === undefined) {
              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
            }

            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

            if (frameHeight === undefined) {
              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
            }

            $content.css("height", frameHeight ? frameHeight : "");

            $slide.css("overflow", "auto");
          }

          $content.removeClass("fancybox-is-hidden");
        });
      } else {
        self.afterLoad(slide);
      }

      $iframe.attr("src", slide.src);

      // Remove iframe if closing or changing gallery item
      $slide.one("onReset", function () {
        // This helps IE not to throw errors when closing
        try {
          $(this)
            .find("iframe")
            .hide()
            .unbind()
            .attr("src", "//about:blank");
        } catch (ignore) {}

        $(this)
          .off("refresh.fb")
          .empty();

        slide.isLoaded = false;
        slide.isRevealed = false;
      });
    },

    // Wrap and append content to the slide
    // ======================================

    setContent: function (slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);

      if (slide.$content) {
        $.fancybox.stop(slide.$content);
      }

      slide.$slide.empty();

      // If content is a jQuery object, then it will be moved to the slide.
      // The placeholder is created so we will know where to put it back.
      if (isQuery(content) && content.parent().length) {
        // Make sure content is not already moved to fancyBox
        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
          content.parents(".fancybox-slide").trigger("onReset");
        }

        // Create temporary element marking original place of the content
        slide.$placeholder = $("<div>")
          .hide()
          .insertAfter(content);

        // Make sure content is visible
        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === "string") {
          content = $("<div>")
            .append($.trim(content))
            .contents();
        }

        // If "filter" option is provided, then filter content
        if (slide.opts.filter) {
          content = $("<div>")
            .html(content)
            .find(slide.opts.filter);
        }
      }

      slide.$slide.one("onReset", function () {
        // Pause all html5 video/audio
        $(this)
          .find("video,audio")
          .trigger("pause");

        // Put content back
        if (slide.$placeholder) {
          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

          slide.$placeholder = null;
        }

        // Remove custom close button
        if (slide.$smallBtn) {
          slide.$smallBtn.remove();

          slide.$smallBtn = null;
        }

        // Remove content and mark slide as not loaded
        if (!slide.hasError) {
          $(this).empty();

          slide.isLoaded = false;
          slide.isRevealed = false;
        }
      });

      $(content).appendTo(slide.$slide);

      if ($(content).is("video,audio")) {
        $(content).addClass("fancybox-video");

        $(content).wrap("<div></div>");

        slide.contentType = "video";

        slide.opts.width = slide.opts.width || $(content).attr("width");
        slide.opts.height = slide.opts.height || $(content).attr("height");
      }

      slide.$content = slide.$slide
        .children()
        .filter("div,form,main,video,audio,article,.fancybox-content")
        .first();

      slide.$content.siblings().hide();

      // Re-check if there is a valid content
      // (in some cases, ajax response can contain various elements or plain text)
      if (!slide.$content.length) {
        slide.$content = slide.$slide
          .wrapInner("<div></div>")
          .children()
          .first();
      }

      slide.$content.addClass("fancybox-content");

      slide.$slide.addClass("fancybox-slide--" + slide.contentType);

      self.afterLoad(slide);
    },

    // Display error message
    // =====================

    setError: function (slide) {
      slide.hasError = true;

      slide.$slide
        .trigger("onReset")
        .removeClass("fancybox-slide--" + slide.contentType)
        .addClass("fancybox-slide--error");

      slide.contentType = "html";

      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

      if (slide.pos === this.currPos) {
        this.isAnimating = false;
      }
    },

    // Show loading icon inside the slide
    // ==================================

    showLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
          .appendTo(slide.$slide)
          .hide()
          .fadeIn("fast");
      }
    },

    // Remove loading icon from the slide
    // ==================================

    hideLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();

        delete slide.$spinner;
      }
    },

    // Adjustments after slide content has been loaded
    // ===============================================

    afterLoad: function (slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;

      self.trigger("afterLoad", slide);

      self.hideLoading(slide);

      // Add small close button
      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      }

      // Disable right click
      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        });

        // Add fake element on top of the image
        // This makes a bit harder for user to select image
        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.adjustCaption(slide);

      self.adjustLayout(slide);

      if (slide.pos === self.currPos) {
        self.updateCursor();
      }

      self.revealContent(slide);
    },

    // Prevent caption overlap,
    // fix css inconsistency across browsers
    // =====================================

    adjustCaption: function (slide) {
      var self = this,
        current = slide || self.current,
        caption = current.opts.caption,
        preventOverlap = current.opts.preventCaptionOverlap,
        $caption = self.$refs.caption,
        $clone,
        captionH = false;

      $caption.toggleClass("fancybox-caption--separate", preventOverlap);

      if (preventOverlap && caption && caption.length) {
        if (current.pos !== self.currPos) {
          $clone = $caption.clone().appendTo($caption.parent());

          $clone
            .children()
            .eq(0)
            .empty()
            .html(caption);

          captionH = $clone.outerHeight(true);

          $clone.empty().remove();
        } else if (self.$caption) {
          captionH = self.$caption.outerHeight(true);
        }

        current.$slide.css("padding-bottom", captionH || "");
      }
    },

    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
    // ====================================================================================

    adjustLayout: function (slide) {
      var self = this,
        current = slide || self.current,
        scrollHeight,
        marginBottom,
        inlinePadding,
        actualPadding;

      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
        current.$content.css("margin-bottom", "");

        // If we would always set margin-bottom for the content,
        // then it would potentially break vertical align
        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
          inlinePadding = current.$slide[0].style["padding-bottom"];
          actualPadding = current.$slide.css("padding-bottom");

          if (parseFloat(actualPadding) > 0) {
            scrollHeight = current.$slide[0].scrollHeight;

            current.$slide.css("padding-bottom", 0);

            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
              marginBottom = actualPadding;
            }

            current.$slide.css("padding-bottom", inlinePadding);
          }
        }

        current.$content.css("margin-bottom", marginBottom);
      }
    },

    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================

    revealContent: function (slide) {
      var self = this,
        $slide = slide.$slide,
        end = false,
        start = false,
        isMoved = self.isMoved(slide),
        isRevealed = slide.isRevealed,
        effect,
        effectClassName,
        duration,
        opacity;

      slide.isRevealed = true;

      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      }

      // Check if can zoom
      if (effect === "zoom") {
        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
          end = self.getFitPos(slide);
        } else {
          effect = "fade";
        }
      }

      // Zoom animation
      // ==============
      if (effect === "zoom") {
        self.isAnimating = true;

        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;

        // Check if we need to animate opacity
        opacity = slide.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }

        // Draw image at start position
        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

        forceRedraw(slide.$content);

        // Start animation
        $.fancybox.animate(slide.$content, end, duration, function () {
          self.isAnimating = false;

          self.complete();
        });

        return;
      }

      self.updateSlide(slide);

      // Simply show content if no effect
      // ================================
      if (!effect) {
        slide.$content.removeClass("fancybox-is-hidden");

        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
          slide.$content.hide().fadeIn("fast");
        }

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      }

      // Prepare for CSS transiton
      // =========================
      $.fancybox.stop($slide);

      //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

      slide.$content.removeClass("fancybox-is-hidden");

      // Force reflow
      forceRedraw($slide);

      if (slide.type !== "image") {
        slide.$content.hide().show(0);
      }

      $.fancybox.animate(
        $slide,
        "fancybox-slide--current",
        duration,
        function () {
          $slide.removeClass(effectClassName).css({
            transform: "",
            opacity: ""
          });

          if (slide.pos === self.currPos) {
            self.complete();
          }
        },
        true
      );
    },

    // Check if we can and have to zoom from thumbnail
    //================================================

    getThumbPos: function (slide) {
      var rez = false,
        $thumb = slide.$thumb,
        thumbPos,
        btw,
        brw,
        bbw,
        blw;

      if (!$thumb || !inViewport($thumb[0])) {
        return false;
      }

      thumbPos = $.fancybox.getTranslate($thumb);

      btw = parseFloat($thumb.css("border-top-width") || 0);
      brw = parseFloat($thumb.css("border-right-width") || 0);
      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
      blw = parseFloat($thumb.css("border-left-width") || 0);

      rez = {
        top: thumbPos.top + btw,
        left: thumbPos.left + blw,
        width: thumbPos.width - brw - blw,
        height: thumbPos.height - btw - bbw,
        scaleX: 1,
        scaleY: 1
      };

      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
    },

    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================

    complete: function () {
      var self = this,
        current = self.current,
        slides = {},
        $el;

      if (self.isMoved() || !current.isLoaded) {
        return;
      }

      if (!current.isComplete) {
        current.isComplete = true;

        current.$slide.siblings().trigger("onReset");

        self.preload("inline");

        // Trigger any CSS transiton inside the slide
        forceRedraw(current.$slide);

        current.$slide.addClass("fancybox-slide--complete");

        // Remove unnecessary slides
        $.each(self.slides, function (key, slide) {
          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
            slides[slide.pos] = slide;
          } else if (slide) {
            $.fancybox.stop(slide.$slide);

            slide.$slide.off().remove();
          }
        });

        self.slides = slides;
      }

      self.isAnimating = false;

      self.updateCursor();

      self.trigger("afterShow");

      // Autoplay first html5 video/audio
      if (!!current.opts.video.autoStart) {
        current.$slide
          .find("video,audio")
          .filter(":visible:first")
          .trigger("play")
          .one("ended", function () {
            if (Document.exitFullscreen) {
              Document.exitFullscreen();
            } else if (this.webkitExitFullscreen) {
              this.webkitExitFullscreen();
            }

            self.next();
          });
      }

      // Try to focus on the first focusable element
      if (current.opts.autoFocus && current.contentType === "html") {
        // Look for the first input with autofocus attribute
        $el = current.$content.find("input[autofocus]:enabled:visible:first");

        if ($el.length) {
          $el.trigger("focus");
        } else {
          self.focus(null, true);
        }
      }

      // Avoid jumping
      current.$slide.scrollTop(0).scrollLeft(0);
    },

    // Preload next and previous slides
    // ================================

    preload: function (type) {
      var self = this,
        prev,
        next;

      if (self.group.length < 2) {
        return;
      }

      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];

      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }

      if (next && next.type === type) {
        self.loadSlide(next);
      }
    },

    // Try to find and focus on the first focusable element
    // ====================================================

    focus: function (e, firstRun) {
      var self = this,
        focusableStr = [
          "a[href]",
          "area[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "button:not([disabled]):not([aria-hidden])",
          "iframe",
          "object",
          "embed",
          "video",
          "audio",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"])'
        ].join(","),
        focusableItems,
        focusedItemIndex;

      if (self.isClosing) {
        return;
      }

      if (e || !self.current || !self.current.isComplete) {
        // Focus on any element inside fancybox
        focusableItems = self.$refs.container.find("*:visible");
      } else {
        // Focus inside current slide
        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
      }

      focusableItems = focusableItems.filter(focusableStr).filter(function () {
        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
      });

      if (focusableItems.length) {
        focusedItemIndex = focusableItems.index(document.activeElement);

        if (e && e.shiftKey) {
          // Back tab
          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
            e.preventDefault();

            focusableItems.eq(focusableItems.length - 1).trigger("focus");
          }
        } else {
          // Outside or Forward tab
          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
            if (e) {
              e.preventDefault();
            }

            focusableItems.eq(0).trigger("focus");
          }
        }
      } else {
        self.$refs.container.trigger("focus");
      }
    },

    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================

    activate: function () {
      var self = this;

      // Deactivate all instances
      $(".fancybox-container").each(function () {
        var instance = $(this).data("FancyBox");

        // Skip self and closing instances
        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger("onDeactivate");

          instance.removeEvents();

          instance.isVisible = false;
        }
      });

      self.isVisible = true;

      if (self.current || self.isIdle) {
        self.update();

        self.updateControls();
      }

      self.trigger("onActivate");

      self.addEvents();
    },

    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================

    close: function (e, d) {
      var self = this,
        current = self.current,
        effect,
        duration,
        $content,
        domRect,
        opacity,
        start,
        end;

      var done = function () {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true;

      // If beforeClose callback prevents closing, make sure content is centered
      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;

        requestAFrame(function () {
          self.update();
        });

        return false;
      }

      // Remove all events
      // If there are multiple instances, they will be set again by "activate" method
      self.removeEvents();

      $content = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

      if (e !== true) {
        $.fancybox.stop(current.$slide);
      } else {
        effect = false;
      }

      // Remove other slides
      current.$slide
        .siblings()
        .trigger("onReset")
        .remove();

      // Trigger animations
      if (duration) {
        self.$refs.container
          .removeClass("fancybox-is-open")
          .addClass("fancybox-is-closing")
          .css("transition-duration", duration + "ms");
      }

      // Clean up
      self.hideLoading(current);

      self.hideControls(true);

      self.updateCursor();

      // Check if possible to zoom-out
      if (
        effect === "zoom" &&
        !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
      ) {
        effect = "fade";
      }

      if (effect === "zoom") {
        $.fancybox.stop($content);

        domRect = $.fancybox.getTranslate($content);

        start = {
          top: domRect.top,
          left: domRect.left,
          scaleX: domRect.width / end.width,
          scaleY: domRect.height / end.height,
          width: end.width,
          height: end.height
        };

        // Check if we need to animate opacity
        opacity = current.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        $.fancybox.setTranslate($content, start);

        forceRedraw($content);

        $.fancybox.animate($content, end, duration, done);

        return true;
      }

      if (effect && duration) {
        $.fancybox.animate(
          current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
          "fancybox-animated fancybox-fx-" + effect,
          duration,
          done
        );
      } else {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          done();
        }
      }

      return true;
    },

    // Final adjustments after removing the instance
    // =============================================

    cleanUp: function (e) {
      var self = this,
        instance,
        $focus = self.current.opts.$orig,
        x,
        y;

      self.current.$slide.trigger("onReset");

      self.$refs.container.empty().remove();

      self.trigger("afterClose", e);

      // Place back focus
      if (!!self.current.opts.backFocus) {
        if (!$focus || !$focus.length || !$focus.is(":visible")) {
          $focus = self.$trigger;
        }

        if ($focus && $focus.length) {
          x = window.scrollX;
          y = window.scrollY;

          $focus.trigger("focus");

          $("html, body")
            .scrollTop(y)
            .scrollLeft(x);
        }
      }

      self.current = null;

      // Check if there are other instances
      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $("body").removeClass("fancybox-active compensate-for-scrollbar");

        $("#fancybox-style-noscroll").remove();
      }
    },

    // Call callback and trigger an event
    // ==================================

    trigger: function (name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        obj = slide && slide.opts ? slide : self.current,
        rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === "afterClose" || !self.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self.$refs.container.trigger(name + ".fb", args);
      }
    },

    // Update infobar values, navigation button states and reveal caption
    // ==================================================================

    updateControls: function () {
      var self = this,
        current = self.current,
        index = current.index,
        $container = self.$refs.container,
        $caption = self.$refs.caption,
        caption = current.opts.caption;

      // Recalculate content dimensions
      current.$slide.trigger("refresh");

      // Set caption
      if (caption && caption.length) {
        self.$caption = $caption;

        $caption
          .children()
          .eq(0)
          .html(caption);
      } else {
        self.$caption = null;
      }

      if (!self.hasHiddenControls && !self.isIdle) {
        self.showControls();
      }

      // Update info and navigation elements
      $container.find("[data-fancybox-count]").html(self.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);

      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

      if (current.type === "image") {
        // Re-enable buttons; update download button source
        $container
          .find("[data-fancybox-zoom]")
          .show()
          .end()
          .find("[data-fancybox-download]")
          .attr("href", current.opts.image.src || current.src)
          .show();
      } else if (current.opts.toolbar) {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }

      // Make sure focus is not on disabled button/element
      if ($(document.activeElement).is(":hidden,[disabled]")) {
        self.$refs.container.trigger("focus");
      }
    },

    // Hide toolbar and caption
    // ========================

    hideControls: function (andCaption) {
      var self = this,
        arr = ["infobar", "toolbar", "nav"];

      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }

      this.$refs.container.removeClass(
        arr
        .map(function (i) {
          return "fancybox-show-" + i;
        })
        .join(" ")
      );

      this.hasHiddenControls = true;
    },

    showControls: function () {
      var self = this,
        opts = self.current ? self.current.opts : self.opts,
        $container = self.$refs.container;

      self.hasHiddenControls = false;
      self.idleSecondsCounter = 0;

      $container
        .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
        .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
        .toggleClass("fancybox-show-caption", !!self.$caption)
        .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
        .toggleClass("fancybox-is-modal", !!opts.modal);
    },

    // Toggle toolbar and caption
    // ==========================

    toggleControls: function () {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });

  $.fancybox = {
    version: "3.5.7",
    defaults: defaults,

    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================

    getInstance: function (command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
        args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },

    // Create new instance
    // ===================

    open: function (items, opts, index) {
      return new FancyBox(items, opts, index);
    },

    // Close current or all instances
    // ==============================

    close: function (all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close();

        // Try to find and close next instance
        if (all === true) {
          this.close(all);
        }
      }
    },

    // Close all instances and unbind all events
    // =========================================

    destroy: function () {
      this.close(true);

      $D.add("body").off("click.fb-start", "**");
    },

    // Try to detect mobile devices
    // ============================

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    // Detect if 'translate3d' support is available
    // ============================================

    use3d: (function () {
      var div = document.createElement("div");

      return (
        window.getComputedStyle &&
        window.getComputedStyle(div) &&
        window.getComputedStyle(div).getPropertyValue("transform") &&
        !(document.documentMode && document.documentMode < 11)
      );
    })(),

    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================

    getTranslate: function ($el) {
      var domRect;

      if (!$el || !$el.length) {
        return false;
      }

      domRect = $el[0].getBoundingClientRect();

      return {
        top: domRect.top || 0,
        left: domRect.left || 0,
        width: domRect.width,
        height: domRect.height,
        opacity: parseFloat($el.css("opacity"))
      };
    },

    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================

    setTranslate: function ($el, props) {
      var str = "",
        css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str =
          (props.left === undefined ? $el.position().left : props.left) +
          "px, " +
          (props.top === undefined ? $el.position().top : props.top) +
          "px";

        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
      } else if (props.scaleX !== undefined) {
        str += " scaleX(" + props.scaleX + ")";
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },

    // Simple CSS transition handler
    // =============================

    animate: function ($el, to, duration, callback, leaveAnimationName) {
      var self = this,
        from;

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      self.stop($el);

      from = self.getTranslate($el);

      $el.on(transitionEnd, function (e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }

        self.stop($el);

        if ($.isNumeric(duration)) {
          $el.css("transition-duration", "");
        }

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            self.setTranslate($el, {
              top: to.top,
              left: to.left,
              width: from.width * to.scaleX,
              height: from.height * to.scaleY,
              scaleX: 1,
              scaleY: 1
            });
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      }

      // Start animation by changing CSS properties or class name
      if ($.isPlainObject(to)) {
        if (to.scaleX !== undefined && to.scaleY !== undefined) {
          delete to.width;
          delete to.height;

          if ($el.parent().hasClass("fancybox-slide--image")) {
            $el.parent().addClass("fancybox-is-scaling");
          }
        }

        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      // Make sure that `transitionend` callback gets fired
      $el.data(
        "timer",
        setTimeout(function () {
          $el.trigger(transitionEnd);
        }, duration + 33)
      );
    },

    stop: function ($el, callCallback) {
      if ($el && $el.length) {
        clearTimeout($el.data("timer"));

        if (callCallback) {
          $el.trigger(transitionEnd);
        }

        $el.off(transitionEnd).css("transition-duration", "");

        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  };

  // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e, opts) {
    var items = [],
      index = 0,
      $target,
      value,
      instance;

    // Avoid opening multiple times
    if (e && e.isDefaultPrevented()) {
      return;
    }

    e.preventDefault();

    opts = opts || {};

    if (e && e.data) {
      opts = mergeOpts(e.data.options, opts);
    }

    $target = opts.$target || $(e.currentTarget).trigger("blur");
    instance = $.fancybox.getInstance();

    if (instance && instance.$trigger && instance.$trigger.is($target)) {
      return;
    }

    if (opts.selector) {
      items = $(opts.selector);
    } else {
      // Get all related items and find index for clicked one
      value = $target.attr("data-fancybox") || "";

      if (value) {
        items = e.data ? e.data.items : [];
        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      } else {
        items = [$target];
      }
    }

    index = $(items).index($target);

    // Sometimes current item can not be found
    if (index < 0) {
      index = 0;
    }

    instance = $.fancybox.open(items, opts, index);

    // Save last active element
    instance.$trigger = $target;
  }

  // Create a jQuery plugin
  // ======================

  $.fn.fancybox = function (options) {
    var selector;

    options = options || {};
    selector = options.selector || false;

    if (selector) {
      // Use body element instead of document so it executes first
      $("body")
        .off("click.fb-start", selector)
        .on("click.fb-start", selector, {
          options: options
        }, _run);
    } else {
      this.off("click.fb-start").on(
        "click.fb-start", {
          items: this,
          options: options
        },
        _run
      );
    }

    return this;
  };

  // Self initializing plugin for all elements having `data-fancybox` attribute
  // ==========================================================================

  $D.on("click.fb-start", "[data-fancybox]", _run);

  // Enable "trigger elements"
  // =========================

  $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
      .eq($(this).attr("data-fancybox-index") || 0)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });
  });

  // Track focus event for better accessibility styling
  // ==================================================
  (function () {
    var buttonStr = ".fancybox-button",
      focusStr = "fancybox-focus",
      $pressed = null;

    $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
      switch (e.type) {
        case "mousedown":
          $pressed = $(this);
          break;
        case "mouseup":
          $pressed = null;
          break;
        case "focusin":
          $(buttonStr).removeClass(focusStr);

          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
            $(this).addClass(focusStr);
          }
          break;
        case "focusout":
          $(buttonStr).removeClass(focusStr);
          break;
      }
    });
  })();
})(window, document, jQuery);
// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function ($) {
  "use strict";

  // Object containing properties for each media type
  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },

    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },

    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },

    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (rez) {
        return (
          "//maps.google." +
          rez[2] +
          "/?ll=" +
          (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
          "&output=" +
          (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        );
      }
    },

    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };

  // Formats matching url to final form
  var format = function (url, rez, params) {
    if (!url) {
      return;
    }

    params = params || "";

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace("$" + key, value || "");
    });

    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }

    return url;
  };

  $(document).on("objectNeedsType.fb", function (e, instance, item) {
    var url = item.src || "",
      type = false,
      media,
      thumb,
      rez,
      params,
      urlParams,
      paramObj,
      provider;

    media = $.extend(true, {}, defaults, item.opts.media);

    // Look for any matching media type
    $.each(media, function (providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);

      if (!rez) {
        return;
      }

      type = providerOpts.type;
      provider = providerName;
      paramObj = {};

      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];

        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }

        urlParams = urlParams.split("&");

        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);

          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }

      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

      url =
        $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

      thumb =
        $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

      if (providerName === "youtube") {
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
        });
      } else if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }

      return false;
    });

    // If it is found, then change content type and update the url

    if (type) {
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }

      if (type === "iframe") {
        item.opts = $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
      }

      $.extend(item, {
        type: type,
        src: url,
        origSrc: item.src,
        contentSource: provider,
        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
      });
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });

  // Load YouTube/Video API on request to detect when video finished playing
  var VideoAPILoader = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: false,
      loaded: false
    },

    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: false,
      loaded: false
    },

    load: function (vendor) {
      var _this = this,
        script;

      if (this[vendor].loaded) {
        setTimeout(function () {
          _this.done(vendor);
        });
        return;
      }

      if (this[vendor].loading) {
        return;
      }

      this[vendor].loading = true;

      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = this[vendor].src;

      if (vendor === "youtube") {
        window.onYouTubeIframeAPIReady = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      } else {
        script.onload = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      }

      document.body.appendChild(script);
    },
    done: function (vendor) {
      var instance, $el, player;

      if (vendor === "youtube") {
        delete window.onYouTubeIframeAPIReady;
      }

      instance = $.fancybox.getInstance();

      if (instance) {
        $el = instance.current.$content.find("iframe");

        if (vendor === "youtube" && YT !== undefined && YT) {
          player = new YT.Player($el.attr("id"), {
            events: {
              onStateChange: function (e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);

          player.on("ended", function () {
            instance.next();
          });
        }
      }
    }
  };

  $(document).on({
    "afterShow.fb": function (e, instance, current) {
      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
        VideoAPILoader.load(current.contentSource);
      }
    }
  });
})(jQuery);
// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  var getPointerXY = function (e) {
    var result = [];

    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function (point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function ($el) {
    if (
      $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
      $.isFunction($el.get(0).onclick) ||
      $el.data("selectable")
    ) {
      return true;
    }

    // Check for attributes like data-fancybox-next or data-fancybox-close
    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function (el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
      overflowX = window.getComputedStyle(el)["overflow-x"],
      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

    return vertical || horizontal;
  };

  var isScrollable = function ($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function (instance) {
    var self = this;

    self.instance = instance;

    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;

    self.destroy();

    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };

  Guestures.prototype.destroy = function () {
    var self = this;

    self.$container.off(".fb.touch");

    $(document).off(".fb.touch");

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;
    }
  };

  Guestures.prototype.ontouchstart = function (e) {
    var self = this,
      $target = $(e.target),
      instance = self.instance,
      current = instance.current,
      $slide = current.$slide,
      $content = current.$content,
      isTouchDevice = e.type == "touchstart";

    // Do not respond to both (touch and mouse) events
    if (isTouchDevice) {
      self.$container.off("mousedown.fb.touch");
    }

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Ignore taping on links, buttons, input elements
    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }
    // Ignore clicks on the scrollbar
    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Ignore clicks while zooming or closing
    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
      e.stopPropagation();
      e.preventDefault();

      return;
    }

    self.realPoints = self.startPoints = getPointerXY(e);

    if (!self.startPoints.length) {
      return;
    }

    // Allow other scripts to catch touch event if "touch" is set to false
    if (current.touch) {
      e.stopPropagation();
    }

    self.startEvent = e;

    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;

    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.canPan = instance.canPan();

    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;

    self.canvasWidth = Math.round($slide[0].clientWidth);
    self.canvasHeight = Math.round($slide[0].clientHeight);

    self.contentLastPos = null;
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
      top: 0,
      left: 0
    };
    self.sliderStartPos = $.fancybox.getTranslate($slide);

    // Since position will be absolute, but we need to make it relative to the stage
    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

    self.sliderStartPos.top -= self.stagePos.top;
    self.sliderStartPos.left -= self.stagePos.left;

    self.contentStartPos.top -= self.stagePos.top;
    self.contentStartPos.left -= self.stagePos.left;

    $(document)
      .off(".fb.touch")
      .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
      .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

    if ($.fancybox.isMobile) {
      document.addEventListener("scroll", self.onscroll, true);
    }

    // Skip if clicked outside the sliding area
    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is(".fancybox-image")) {
        e.preventDefault();
      }

      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
        return;
      }
    }

    self.isScrollable = isScrollable($target) || isScrollable($target.parent());

    // Check if element is scrollable and try to prevent default behavior (scrolling)
    if (!($.fancybox.isMobile && self.isScrollable)) {
      e.preventDefault();
    }

    // One finger or mouse click - swipe or pan an image
    if (self.startPoints.length === 1 || current.hasError) {
      if (self.canPan) {
        $.fancybox.stop(self.$content);

        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass("fancybox-is-grabbing");
    }

    // Two fingers - zoom image
    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;

      self.isZooming = true;

      $.fancybox.stop(self.$content);

      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.onscroll = function (e) {
    var self = this;

    self.isScrolling = true;

    document.removeEventListener("scroll", self.onscroll, true);
  };

  Guestures.prototype.ontouchmove = function (e) {
    var self = this;

    // Make sure user has not released over iframe or disabled element
    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
      self.ontouchend(e);
      return;
    }

    if (self.isScrolling) {
      self.canTap = false;
      return;
    }

    self.newPoints = getPointerXY(e);

    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
      return;
    }

    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

    self.distance = distance(self.newPoints[0], self.startPoints[0]);

    // Skip false ontouchmove events (Chrome)
    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function (e) {
    var self = this,
      instance = self.instance,
      swiping = self.isSwiping,
      left = self.sliderStartPos.left || 0,
      angle;

    // If direction is not yet determined
    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = "y";
        } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
          self.isSwiping = "x";
        } else {
          angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }

        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
          self.isScrolling = true;

          return;
        }

        instance.isDragging = self.isSwiping;

        // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
        self.startPoints = self.newPoints;

        $.each(instance.slides, function (index, slide) {
          var slidePos, stagePos;

          $.fancybox.stop(slide.$slide);

          slidePos = $.fancybox.getTranslate(slide.$slide);
          stagePos = $.fancybox.getTranslate(instance.$refs.stage);

          slide.$slide
            .css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            })
            .removeClass("fancybox-animated")
            .removeClass(function (index, className) {
              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });

          if (slide.pos === instance.current.pos) {
            self.sliderStartPos.top = slidePos.top - stagePos.top;
            self.sliderStartPos.left = slidePos.left - stagePos.left;
          }

          $.fancybox.setTranslate(slide.$slide, {
            top: slidePos.top - stagePos.top,
            left: slidePos.left - stagePos.left
          });
        });

        // Stop slideshow
        if (instance.SlideShow && instance.SlideShow.isActive) {
          instance.SlideShow.stop();
        }
      }

      return;
    }

    // Sticky edges
    if (swiping == "x") {
      if (
        self.distanceX > 0 &&
        (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
      ) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (
        self.distanceX < 0 &&
        (self.instance.group.length < 2 ||
          (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
      ) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }

    self.sliderLastPos = {
      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function (index, slide) {
          var pos = slide.pos - self.instance.currPos;

          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });

        self.$container.addClass("fancybox-is-sliding");
      }
    });
  };

  Guestures.prototype.onPan = function () {
    var self = this;

    // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }

    self.canTap = false;

    self.contentLastPos = self.limitMovement();

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  // Make panning sticky to the edges
  Guestures.prototype.limitMovement = function () {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    var distanceX = self.distanceX;
    var distanceY = self.distanceY;

    var contentStartPos = self.contentStartPos;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }

    newOffsetY = currentOffsetY + distanceY;

    // Slow down proportionally to traveled distance
    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

    //   ->
    if (distanceX > 0 && newOffsetX > minTranslateX) {
      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
    }

    //    <-
    if (distanceX < 0 && newOffsetX < maxTranslateX) {
      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
    }

    //   \/
    if (distanceY > 0 && newOffsetY > minTranslateY) {
      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
    }

    //   /\
    if (distanceY < 0 && newOffsetY < maxTranslateY) {
      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function () {
    var self = this;

    // Calculate current distance between points to get pinch ratio and new width and height
    var contentStartPos = self.contentStartPos;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);

    // This is the translation due to pinch-zooming
    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

    // Point between the two touches
    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

    // And this is the translation due to translation of the centerpoint
    // between the two fingers
    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

    // The new offset is the old/current one plus the total translation
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: pinchRatio,
      scaleY: pinchRatio
    };

    self.canTap = false;

    self.newWidth = newWidth;
    self.newHeight = newHeight;

    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function (e) {
    var self = this;

    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;

    self.endPoints = getPointerXY(e);
    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

    self.$container.removeClass("fancybox-is-grabbing");

    $(document).off(".fb.touch");

    document.removeEventListener("scroll", self.onscroll, true);

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;

    self.instance.isDragging = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 100;

    // Speed in px/ms
    self.velocityX = (self.distanceX / self.dMs) * 0.5;
    self.velocityY = (self.distanceY / self.dMs) * 0.5;

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }

    return;
  };

  Guestures.prototype.endSwiping = function (swiping, scrolling) {
    var self = this,
      ret = false,
      len = self.instance.group.length,
      distanceX = Math.abs(self.distanceX),
      canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
      speedX = 300;

    self.sliderLastPos = null;

    // Close if swiped vertically / navigate if horizontally
    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(
        self.instance.current.$slide, {
          top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
          opacity: 0
        },
        200
      );
      ret = self.instance.close(true, 250);
    } else if (canAdvance && self.distanceX > 0) {
      ret = self.instance.previous(speedX);
    } else if (canAdvance && self.distanceX < 0) {
      ret = self.instance.next(speedX);
    }

    if (ret === false && (swiping == "x" || swiping == "y")) {
      self.instance.centerSlide(200);
    }

    self.$container.removeClass("fancybox-is-sliding");
  };

  // Limit panning from edges
  // ========================
  Guestures.prototype.endPanning = function () {
    var self = this,
      newOffsetX,
      newOffsetY,
      newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.opts.momentum === false || self.dMs > 350) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;

    $.fancybox.animate(self.$content, newPos, 366);
  };

  Guestures.prototype.endZooming = function () {
    var self = this;

    var current = self.instance.current;

    var newOffsetX, newOffsetY, newPos, reset;

    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;

    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };

    // Reset scalex/scaleY values; this helps for perfomance and does not break animation
    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);

    var instance = self.instance;
    var current = instance.current;

    var endPoints = (e && getPointerXY(e)) || self.startPoints;

    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

    var where;

    var process = function (prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);

          break;

        case "toggleControls":
          instance.toggleControls();

          break;

        case "next":
          instance.next();

          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    };

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Skip if clicked on the scrollbar
    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Check where is clicked
    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (
      instance.current.$content &&
      instance.current.$content
      .find($target)
      .addBack()
      .filter($target).length
    ) {
      where = "Content";
    } else {
      return;
    }

    // Check if this is a double tap
    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null;

      // Skip if distance between taps is too big
      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      }

      // OK, now we assume that this is a double-tap
      process("dblclick" + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;

          if (!instance.isAnimating) {
            process("click" + where);
          }
        }, 500);
      } else {
        process("click" + where);
      }
    }

    return this;
  };

  $(document)
    .on("onActivate.fb", function (e, instance) {
      if (instance && !instance.Guestures) {
        instance.Guestures = new Guestures(instance);
      }
    })
    .on("beforeClose.fb", function (e, instance) {
      if (instance && instance.Guestures) {
        instance.Guestures.destroy();
      }
    });
})(window, document, jQuery);
// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
        "</button>"
    },
    slideShow: {
      autoStart: false,
      speed: 3000,
      progress: true
    }
  });

  var SlideShow = function (instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,

    init: function () {
      var self = this,
        instance = self.instance,
        opts = instance.group[instance.currIndex].opts.slideShow;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        self.toggle();
      });

      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },

    set: function (force) {
      var self = this,
        instance = self.instance,
        current = instance.current;

      // Check if reached last element
      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {
              scaleX: 1
            }, current.opts.slideShow.speed);
          }

          self.timer = setTimeout(function () {
            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
              instance.jumpTo(0);
            } else {
              instance.next();
            }
          }, current.opts.slideShow.speed);
        }
      } else {
        self.stop();
        instance.idleSecondsCounter = 0;
        instance.showControls();
      }
    },

    clear: function () {
      var self = this;

      clearTimeout(self.timer);

      self.timer = null;

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    start: function () {
      var self = this,
        current = self.instance.current;

      if (current) {
        self.$button
          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
          .removeClass("fancybox-button--play")
          .addClass("fancybox-button--pause");

        self.isActive = true;

        if (current.isComplete) {
          self.set(true);
        }

        self.instance.trigger("onSlideShowChange", true);
      }
    },

    stop: function () {
      var self = this,
        current = self.instance.current;

      self.clear();

      self.$button
        .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
        .removeClass("fancybox-button--pause")
        .addClass("fancybox-button--play");

      self.isActive = false;

      self.instance.trigger("onSlideShowChange", false);

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    toggle: function () {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },

    "beforeShow.fb": function (e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },

    "afterShow.fb": function (e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      // "P" or Spacebar
      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();

        SlideShow.toggle();
      }
    },

    "beforeClose.fb onDeactivate.fb": function (e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });

  // Page Visibility API to pause slideshow when window is not active
  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance(),
      SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function (document, $) {
  "use strict";

  // Collection of methods supported by user browser
  var fn = (function () {
    var fnMap = [
      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
      // new WebKit
      [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      // old WebKit (Safari 5.1)
      [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror"
      ],
      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];

    var ret = {};

    for (var i = 0; i < fnMap.length; i++) {
      var val = fnMap[i];

      if (val && val[1] in document) {
        for (var j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  })();

  if (fn) {
    var FullScreen = {
      request: function (elem) {
        elem = elem || document.documentElement;

        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        document[fn.exitFullscreen]();
      },
      toggle: function (elem) {
        elem = elem || document.documentElement;

        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function () {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
          "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });

    $(document).on(fn.fullscreenchange, function () {
      var isFullscreen = FullScreen.isFullscreen(),
        instance = $.fancybox.getInstance();

      if (instance) {
        // If image is zooming, then force to stop and reposition properly
        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
          instance.isAnimating = false;

          instance.update(true, true, 0);

          if (!instance.isComplete) {
            instance.complete();
          }
        }

        instance.trigger("onFullscreenChange", isFullscreen);

        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

        instance.$refs.toolbar
          .find("[data-fancybox-fullscreen]")
          .toggleClass("fancybox-button--fsenter", !isFullscreen)
          .toggleClass("fancybox-button--fsexit", isFullscreen);
      }
    });
  }

  $(document).on({
    "onInit.fb": function (e, instance) {
      var $container;

      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

        return;
      }

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;

        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          FullScreen.toggle();
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request();
        }

        // Expose API
        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();

        instance.FullScreen.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
        FullScreen.exit();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
    CLASS_ACTIVE = CLASS + "-active";

  // Make sure there are default values
  $.fancybox.defaults = $.extend(
    true, {
      btnTpl: {
        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
          "</button>"
      },
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      }
    },
    $.fancybox.defaults
  );

  var FancyThumbs = function (instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,

    init: function (instance) {
      var self = this,
        group = instance.group,
        enabled = 0;

      self.instance = instance;
      self.opts = group[instance.currIndex].opts.thumbs;

      instance.Thumbs = self;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

      // Enable thumbs if at least two group items have thumbnails
      for (var i = 0, len = group.length; i < len; i++) {
        if (group[i].thumb) {
          enabled++;
        }

        if (enabled > 1) {
          break;
        }
      }

      if (enabled > 1 && !!self.opts) {
        self.$button.removeAttr("style").on("click", function () {
          self.toggle();
        });

        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },

    create: function () {
      var self = this,
        instance = self.instance,
        parentEl = self.opts.parentEl,
        list = [],
        src;

      if (!self.$grid) {
        // Create main element
        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
          instance.$refs.container
          .find(parentEl)
          .addBack()
          .filter(parentEl)
        );

        // Add "click" event that performs gallery navigation
        self.$grid.on("click", "a", function () {
          instance.jumpTo($(this).attr("data-index"));
        });
      }

      // Build the list
      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }

      $.each(instance.group, function (i, item) {
        src = item.thumb;

        if (!src && item.type === "image") {
          src = item.src;
        }

        list.push(
          '<a href="javascript:;" tabindex="0" data-index="' +
          i +
          '"' +
          (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
          "></a>"
        );
      });

      self.$list[0].innerHTML = list.join("");

      if (self.opts.axis === "x") {
        // Set fixed width for list element to enable horizontal scrolling
        self.$list.width(
          parseInt(self.$grid.css("padding-right"), 10) +
          instance.group.length *
          self.$list
          .children()
          .eq(0)
          .outerWidth(true)
        );
      }
    },

    focus: function (duration) {
      var self = this,
        $list = self.$list,
        $grid = self.$grid,
        thumb,
        thumbPos;

      if (!self.instance.current) {
        return;
      }

      thumb = $list
        .children()
        .removeClass(CLASS_ACTIVE)
        .filter('[data-index="' + self.instance.current.index + '"]')
        .addClass(CLASS_ACTIVE);

      thumbPos = thumb.position();

      // Check if need to scroll to make current thumb visible
      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
        $list.stop().animate({
            scrollTop: $list.scrollTop() + thumbPos.top
          },
          duration
        );
      } else if (
        self.opts.axis === "x" &&
        (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
      ) {
        $list
          .parent()
          .stop()
          .animate({
              scrollLeft: thumbPos.left
            },
            duration
          );
      }
    },

    update: function () {
      var that = this;
      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

      if (that.isVisible) {
        if (!that.$grid) {
          that.create();
        }

        that.instance.trigger("onThumbsShow");

        that.focus(0);
      } else if (that.$grid) {
        that.instance.trigger("onThumbsHide");
      }

      // Update content position
      that.instance.update();
    },

    hide: function () {
      this.isVisible = false;
      this.update();
    },

    show: function () {
      this.isVisible = true;
      this.update();
    },

    toggle: function () {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },

    "beforeShow.fb": function (e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      // "G"
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();

        Thumbs.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, jQuery);
//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
        "</button>"
    },
    share: {
      url: function (instance, item) {
        return (
          (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
        );
      },
      tpl: '<div class="fancybox-share">' +
        "<h1>{{SHARE}}</h1>" +
        "<p>" +
        '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
        "<span>Facebook</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
        "<span>Twitter</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
        "<span>Pinterest</span>" +
        "</a>" +
        "</p>" +
        '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
        "</div>"
    }
  });

  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };

    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

  $(document).on("click", "[data-fancybox-share]", function () {
    var instance = $.fancybox.getInstance(),
      current = instance.current || null,
      url,
      tpl;

    if (!current) {
      return;
    }

    if ($.type(current.opts.share.url) === "function") {
      url = current.opts.share.url.apply(current, [instance, current]);
    }

    tpl = current.opts.share.tpl
      .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
      .replace(/\{\{url\}\}/g, encodeURIComponent(url))
      .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
      .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

    $.fancybox.open({
      src: instance.translate(instance, tpl),
      type: "html",
      opts: {
        touch: false,
        animationEffect: false,
        afterLoad: function (shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function () {
            shareInstance.close(null, 0);
          });

          // Opening links in a popup window
          shareCurrent.$content.find(".fancybox-share__button").click(function () {
            window.open(this.href, "Share", "width=550, height=450");
            return false;
          });
        },
        mobile: {
          autoFocus: false
        }
      }
    });
  });
})(document, jQuery);
// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  // Simple $.escapeSelector polyfill (for jQuery prior v3)
  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function (ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          }

          // Control characters and (dependent upon position) numbers get escaped as code points
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }

        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  }

  // Get info about gallery name and current index from url
  function parseUrl() {
    var hash = window.location.hash.substr(1),
      rez = hash.split("-"),
      index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
      gallery = rez.join("-");

    return {
      hash: hash,
      /* Index is starting from 1 */
      index: index < 1 ? 1 : index,
      gallery: gallery
    };
  }

  // Trigger click evnt on links to open new fancyBox instance
  function triggerFromUrl(url) {
    if (url.gallery !== "") {
      // If we can find element matching 'data-fancybox' atribute,
      // then triggering click event should start fancyBox
      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
        .eq(url.index - 1)
        .focus()
        .trigger("click.fb-start");
    }
  }

  // Get gallery name from current instance
  function getGalleryID(instance) {
    var opts, ret;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

    return ret === "" ? false : ret;
  }

  // Start when DOM becomes ready
  $(function () {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    }

    // Update hash when opening/closing fancyBox
    $(document).on({
      "onInit.fb": function (e, instance) {
        var url, gallery;

        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }

        url = parseUrl();
        gallery = getGalleryID(instance);

        // Make sure gallery start index matches index from hash
        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },

      "beforeShow.fb": function (e, instance, current, firstRun) {
        var gallery;

        if (!current || current.opts.hash === false) {
          return;
        }

        // Check if need to update window hash
        gallery = getGalleryID(instance);

        if (!gallery) {
          return;
        }

        // Variable containing last hash value set by fancyBox
        // It will be used to determine if fancyBox needs to close after hash change is detected
        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

        // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
        if (window.location.hash === "#" + instance.currentHash) {
          return;
        }

        if (firstRun && !instance.origHash) {
          instance.origHash = window.location.hash;
        }

        if (instance.hashTimer) {
          clearTimeout(instance.hashTimer);
        }

        // Update hash
        instance.hashTimer = setTimeout(function () {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"]({},
              document.title,
              window.location.pathname + window.location.search + "#" + instance.currentHash
            );

            if (firstRun) {
              instance.hasCreatedHistory = true;
            }
          } else {
            window.location.hash = instance.currentHash;
          }

          instance.hashTimer = null;
        }, 300);
      },

      "beforeClose.fb": function (e, instance, current) {
        if (!current || current.opts.hash === false) {
          return;
        }

        clearTimeout(instance.hashTimer);

        // Goto previous history entry
        if (instance.currentHash && instance.hasCreatedHistory) {
          window.history.back();
        } else if (instance.currentHash) {
          if ("replaceState" in window.history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
          } else {
            window.location.hash = instance.origHash;
          }
        }

        instance.currentHash = null;
      }
    });

    // Check if need to start/close after url has changed
    $(window).on("hashchange.fb", function () {
      var url = parseUrl(),
        fb = null;

      // Find last fancyBox instance that has "hash"
      $.each(
        $(".fancybox-container")
        .get()
        .reverse(),
        function (index, value) {
          var tmp = $(value).data("FancyBox");

          if (tmp && tmp.currentHash) {
            fb = tmp;
            return false;
          }
        }
      );

      if (fb) {
        // Now, compare hash values
        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
          fb.currentHash = null;

          fb.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    });

    // Check current hash and trigger click event on matching element to start fancyBox, if needed
    setTimeout(function () {
      if (!$.fancybox.getInstance()) {
        triggerFromUrl(parseUrl());
      }
    }, 50);
  });
})(window, document, jQuery);
// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var prevTime = new Date().getTime();

  $(document).on({
    "onInit.fb": function (e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var current = instance.current,
          currTime = new Date().getTime();

        if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;

        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, jQuery);

/***/ }),

/***/ "./node_modules/flag-icon-css/css/flag-icon.css":
/*!******************************************************!*\
  !*** ./node_modules/flag-icon-css/css/flag-icon.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/app.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3M/YzU1MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmFuY3lhcHBzL2ZhbmN5Ym94L2Rpc3QvanF1ZXJ5LmZhbmN5Ym94LmNzcz9hZGZiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmFuY3lhcHBzL2ZhbmN5Ym94L2Rpc3QvanF1ZXJ5LmZhbmN5Ym94LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGFnLWljb24tY3NzL2Nzcy9mbGFnLWljb24uY3NzP2ZhZDMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVAsQyxDQUNBOzs7QUFDQUEsbUJBQU8sQ0FBQyx1RkFBRCxDQUFQLEMsQ0FDQTs7O0FBQ0FBLG1CQUFPLENBQUMsaUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1RkFBRCxDQUFQLEMsQ0FFQTtBQUNBOzs7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksbURBQVosRTs7Ozs7Ozs7Ozs7QUNsQkEsdUM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVDQUF1QyxJQUFJLHVCQUF1QixJQUFJLDRFQUE0RTs7QUFFbEo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1RkFBdUYsUUFBUTtBQUMvRix3QkFBd0IsS0FBSyxVQUFVLFFBQVE7QUFDL0MsMEVBQTBFLEtBQUs7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLE9BQU87QUFDbkYsdUNBQXVDLFNBQVM7QUFDaEQsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCxPQUFPOztBQUV2RDtBQUNBLCtHQUErRyxVQUFVLG9CQUFvQjtBQUM3STtBQUNBOztBQUVBLCtGQUErRixNQUFNO0FBQ3JHO0FBQ0E7O0FBRUEsa0dBQWtHLE9BQU87QUFDekc7QUFDQTs7QUFFQTtBQUNBLDBHQUEwRyxNQUFNO0FBQ2hIO0FBQ0E7O0FBRUEsNEdBQTRHLE1BQU07QUFDbEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUhBQWlILE9BQU87QUFDeEg7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx3QkFBd0I7QUFDeEIsMkdBQTJHO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RjtBQUN6RjtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQyx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEIsRUFBRSxPQUFPLEVBQUU7QUFDdkM7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLG9DQUFvQzs7QUFFckU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLHFEQUFxRCxnQkFBZ0I7QUFDckU7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwrQ0FBK0MsR0FBRztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRSxLQUFLLEVBQUU7QUFDakMsd0JBQXdCLFFBQVE7QUFDaEMsd0JBQXdCLFFBQVE7QUFDaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzREFBc0QsS0FBSztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEVBQThFOztBQUU5RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrSUFBa0ksR0FBRztBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSSxTQUFTLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJLFNBQVMsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsc0JBQXNCO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQsT0FBTztBQUNyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0dBQW9HLFlBQVk7QUFDaEg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDOztBQUVBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnSEFBZ0gsYUFBYTtBQUM3SDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsUUFBUTtBQUMvRztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtHQUFrRyxPQUFPO0FBQ3pHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLDJIQUEySCxLQUFLO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLG1IQUFtSCxLQUFLLFFBQVEsT0FBTztBQUN2STtBQUNBO0FBQ0E7QUFDQSwrSEFBK0gsS0FBSyxlQUFlLE9BQU8sU0FBUyxPQUFPO0FBQzFLO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLFNBQVM7QUFDL0U7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsRUFBRSxPQUFPLEVBQUU7QUFDN0Isa0JBQWtCLEVBQUUsS0FBSyxFQUFFO0FBQzNCLGtCQUFrQixFQUFFLFNBQVMsRUFBRTtBQUMvQixrQkFBa0IsRUFBRSxPQUFPLEVBQUU7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDBDQUEwQztBQUMxQyxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSCxDQUFDLG9COzs7Ozs7Ozs7OztBQy8vS0QsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xuLy8gZmxhZyBpY29uIGNzc1xucmVxdWlyZSgnZmxhZy1pY29uLWNzcy9jc3MvZmxhZy1pY29uLmNzcycpO1xuLy8gZmFuY3lib3hcbnJlcXVpcmUoJ0BmYW5jeWFwcHMvZmFuY3lib3gvZGlzdC9qcXVlcnkuZmFuY3lib3guY3NzJyk7XG5yZXF1aXJlKCdAZmFuY3lhcHBzL2ZhbmN5Ym94Jyk7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cbi8vIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBmYW5jeUJveCB2My41Ljdcbi8vXG4vLyBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4vLyBvciBmYW5jeUJveCBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXG4vL1xuLy8gaHR0cDovL2ZhbmN5YXBwcy5jb20vZmFuY3lib3gvXG4vLyBDb3B5cmlnaHQgMjAxOSBmYW5jeUFwcHNcbi8vXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgd2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7XHJcbiAgICBpbmZvOiBmdW5jdGlvbiAoc3R1ZmYpIHt9XHJcbiAgfTtcclxuXHJcbiAgLy8gSWYgdGhlcmUncyBubyBqUXVlcnksIGZhbmN5Qm94IGNhbid0IHdvcmtcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBpZiAoISQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGZhbmN5Qm94IGlzIGFscmVhZHkgaW5pdGlhbGl6ZWRcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIGlmICgkLmZuLmZhbmN5Ym94KSB7XHJcbiAgICBjb25zb2xlLmluZm8oXCJmYW5jeUJveCBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFByaXZhdGUgZGVmYXVsdCBzZXR0aW5nc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAvLyBDbG9zZSBleGlzdGluZyBtb2RhbHNcclxuICAgIC8vIFNldCB0aGlzIHRvIGZhbHNlIGlmIHlvdSBkbyBub3QgbmVlZCB0byBzdGFjayBtdWx0aXBsZSBpbnN0YW5jZXNcclxuICAgIGNsb3NlRXhpc3Rpbmc6IGZhbHNlLFxyXG5cclxuICAgIC8vIEVuYWJsZSBpbmZpbml0ZSBnYWxsZXJ5IG5hdmlnYXRpb25cclxuICAgIGxvb3A6IGZhbHNlLFxyXG5cclxuICAgIC8vIEhvcml6b250YWwgc3BhY2UgYmV0d2VlbiBzbGlkZXNcclxuICAgIGd1dHRlcjogNTAsXHJcblxyXG4gICAgLy8gRW5hYmxlIGtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgIGtleWJvYXJkOiB0cnVlLFxyXG5cclxuICAgIC8vIFNob3VsZCBhbGxvdyBjYXB0aW9uIHRvIG92ZXJsYXAgdGhlIGNvbnRlbnRcclxuICAgIHByZXZlbnRDYXB0aW9uT3ZlcmxhcDogdHJ1ZSxcclxuXHJcbiAgICAvLyBTaG91bGQgZGlzcGxheSBuYXZpZ2F0aW9uIGFycm93cyBhdCB0aGUgc2NyZWVuIGVkZ2VzXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcblxyXG4gICAgLy8gU2hvdWxkIGRpc3BsYXkgY291bnRlciBhdCB0aGUgdG9wIGxlZnQgY29ybmVyXHJcbiAgICBpbmZvYmFyOiB0cnVlLFxyXG5cclxuICAgIC8vIFNob3VsZCBkaXNwbGF5IGNsb3NlIGJ1dHRvbiAodXNpbmcgYGJ0blRwbC5zbWFsbEJ0bmAgdGVtcGxhdGUpIG92ZXIgdGhlIGNvbnRlbnRcclxuICAgIC8vIENhbiBiZSB0cnVlLCBmYWxzZSwgXCJhdXRvXCJcclxuICAgIC8vIElmIFwiYXV0b1wiIC0gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGVuYWJsZWQgZm9yIFwiaHRtbFwiLCBcImlubGluZVwiIG9yIFwiYWpheFwiIGl0ZW1zXHJcbiAgICBzbWFsbEJ0bjogXCJhdXRvXCIsXHJcblxyXG4gICAgLy8gU2hvdWxkIGRpc3BsYXkgdG9vbGJhciAoYnV0dG9ucyBhdCB0aGUgdG9wKVxyXG4gICAgLy8gQ2FuIGJlIHRydWUsIGZhbHNlLCBcImF1dG9cIlxyXG4gICAgLy8gSWYgXCJhdXRvXCIgLSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgaGlkZGVuIGlmIFwic21hbGxCdG5cIiBpcyBlbmFibGVkXHJcbiAgICB0b29sYmFyOiBcImF1dG9cIixcclxuXHJcbiAgICAvLyBXaGF0IGJ1dHRvbnMgc2hvdWxkIGFwcGVhciBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lci5cclxuICAgIC8vIEJ1dHRvbnMgd2lsbCBiZSBjcmVhdGVkIHVzaW5nIHRlbXBsYXRlcyBmcm9tIGBidG5UcGxgIG9wdGlvblxyXG4gICAgLy8gYW5kIHRoZXkgd2lsbCBiZSBwbGFjZWQgaW50byB0b29sYmFyIChjbGFzcz1cImZhbmN5Ym94LXRvb2xiYXJcImAgZWxlbWVudClcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgXCJ6b29tXCIsXHJcbiAgICAgIC8vXCJzaGFyZVwiLFxyXG4gICAgICBcInNsaWRlU2hvd1wiLFxyXG4gICAgICAvL1wiZnVsbFNjcmVlblwiLFxyXG4gICAgICAvL1wiZG93bmxvYWRcIixcclxuICAgICAgXCJ0aHVtYnNcIixcclxuICAgICAgXCJjbG9zZVwiXHJcbiAgICBdLFxyXG5cclxuICAgIC8vIERldGVjdCBcImlkbGVcIiB0aW1lIGluIHNlY29uZHNcclxuICAgIGlkbGVUaW1lOiAzLFxyXG5cclxuICAgIC8vIERpc2FibGUgcmlnaHQtY2xpY2sgYW5kIHVzZSBzaW1wbGUgaW1hZ2UgcHJvdGVjdGlvbiBmb3IgaW1hZ2VzXHJcbiAgICBwcm90ZWN0OiBmYWxzZSxcclxuXHJcbiAgICAvLyBTaG9ydGN1dCB0byBtYWtlIGNvbnRlbnQgXCJtb2RhbFwiIC0gZGlzYWJsZSBrZXlib2FyZCBuYXZpZ3Rpb24sIGhpZGUgYnV0dG9ucywgZXRjXHJcbiAgICBtb2RhbDogZmFsc2UsXHJcblxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgLy8gV2FpdCBmb3IgaW1hZ2VzIHRvIGxvYWQgYmVmb3JlIGRpc3BsYXlpbmdcclxuICAgICAgLy8gICB0cnVlICAtIHdhaXQgZm9yIGltYWdlIHRvIGxvYWQgYW5kIHRoZW4gZGlzcGxheTtcclxuICAgICAgLy8gICBmYWxzZSAtIGRpc3BsYXkgdGh1bWJuYWlsIGFuZCBsb2FkIHRoZSBmdWxsLXNpemVkIGltYWdlIG92ZXIgdG9wLFxyXG4gICAgICAvLyAgICAgICAgICAgcmVxdWlyZXMgcHJlZGVmaW5lZCBpbWFnZSBkaW1lbnNpb25zIChgZGF0YS13aWR0aGAgYW5kIGBkYXRhLWhlaWdodGAgYXR0cmlidXRlcylcclxuICAgICAgcHJlbG9hZDogZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgYWpheDoge1xyXG4gICAgICAvLyBPYmplY3QgY29udGFpbmluZyBzZXR0aW5ncyBmb3IgYWpheCByZXF1ZXN0XHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgLy8gVGhpcyBoZWxwcyB0byBpbmRpY2F0ZSB0aGF0IHJlcXVlc3QgY29tZXMgZnJvbSB0aGUgbW9kYWxcclxuICAgICAgICAvLyBGZWVsIGZyZWUgdG8gY2hhbmdlIG5hbWluZ1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGZhbmN5Ym94OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlmcmFtZToge1xyXG4gICAgICAvLyBJZnJhbWUgdGVtcGxhdGVcclxuICAgICAgdHBsOiAnPGlmcmFtZSBpZD1cImZhbmN5Ym94LWZyYW1le3JuZH1cIiBuYW1lPVwiZmFuY3lib3gtZnJhbWV7cm5kfVwiIGNsYXNzPVwiZmFuY3lib3gtaWZyYW1lXCIgYWxsb3dmdWxsc2NyZWVuPVwiYWxsb3dmdWxsc2NyZWVuXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiIHNyYz1cIlwiPjwvaWZyYW1lPicsXHJcblxyXG4gICAgICAvLyBQcmVsb2FkIGlmcmFtZSBiZWZvcmUgZGlzcGxheWluZyBpdFxyXG4gICAgICAvLyBUaGlzIGFsbG93cyB0byBjYWxjdWxhdGUgaWZyYW1lIGNvbnRlbnQgd2lkdGggYW5kIGhlaWdodFxyXG4gICAgICAvLyAobm90ZTogRHVlIHRvIFwiU2FtZSBPcmlnaW4gUG9saWN5XCIsIHlvdSBjYW4ndCBnZXQgY3Jvc3MgZG9tYWluIGRhdGEpLlxyXG4gICAgICBwcmVsb2FkOiB0cnVlLFxyXG5cclxuICAgICAgLy8gQ3VzdG9tIENTUyBzdHlsaW5nIGZvciBpZnJhbWUgd3JhcHBpbmcgZWxlbWVudFxyXG4gICAgICAvLyBZb3UgY2FuIHVzZSB0aGlzIHRvIHNldCBjdXN0b20gaWZyYW1lIGRpbWVuc2lvbnNcclxuICAgICAgY3NzOiB7fSxcclxuXHJcbiAgICAgIC8vIElmcmFtZSB0YWcgYXR0cmlidXRlc1xyXG4gICAgICBhdHRyOiB7XHJcbiAgICAgICAgc2Nyb2xsaW5nOiBcImF1dG9cIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEZvciBIVE1MNSB2aWRlbyBvbmx5XHJcbiAgICB2aWRlbzoge1xyXG4gICAgICB0cGw6ICc8dmlkZW8gY2xhc3M9XCJmYW5jeWJveC12aWRlb1wiIGNvbnRyb2xzIGNvbnRyb2xzTGlzdD1cIm5vZG93bmxvYWRcIiBwb3N0ZXI9XCJ7e3Bvc3Rlcn19XCI+JyArXHJcbiAgICAgICAgJzxzb3VyY2Ugc3JjPVwie3tzcmN9fVwiIHR5cGU9XCJ7e2Zvcm1hdH19XCIgLz4nICtcclxuICAgICAgICAnU29ycnksIHlvdXIgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBlbWJlZGRlZCB2aWRlb3MsIDxhIGhyZWY9XCJ7e3NyY319XCI+ZG93bmxvYWQ8L2E+IGFuZCB3YXRjaCB3aXRoIHlvdXIgZmF2b3JpdGUgdmlkZW8gcGxheWVyIScgK1xyXG4gICAgICAgIFwiPC92aWRlbz5cIixcclxuICAgICAgZm9ybWF0OiBcIlwiLCAvLyBjdXN0b20gdmlkZW8gZm9ybWF0XHJcbiAgICAgIGF1dG9TdGFydDogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBEZWZhdWx0IGNvbnRlbnQgdHlwZSBpZiBjYW5ub3QgYmUgZGV0ZWN0ZWQgYXV0b21hdGljYWxseVxyXG4gICAgZGVmYXVsdFR5cGU6IFwiaW1hZ2VcIixcclxuXHJcbiAgICAvLyBPcGVuL2Nsb3NlIGFuaW1hdGlvbiB0eXBlXHJcbiAgICAvLyBQb3NzaWJsZSB2YWx1ZXM6XHJcbiAgICAvLyAgIGZhbHNlICAgICAgICAgICAgLSBkaXNhYmxlXHJcbiAgICAvLyAgIFwiem9vbVwiICAgICAgICAgICAtIHpvb20gaW1hZ2VzIGZyb20vdG8gdGh1bWJuYWlsXHJcbiAgICAvLyAgIFwiZmFkZVwiXHJcbiAgICAvLyAgIFwiem9vbS1pbi1vdXRcIlxyXG4gICAgLy9cclxuICAgIGFuaW1hdGlvbkVmZmVjdDogXCJ6b29tXCIsXHJcblxyXG4gICAgLy8gRHVyYXRpb24gaW4gbXMgZm9yIG9wZW4vY2xvc2UgYW5pbWF0aW9uXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogMzY2LFxyXG5cclxuICAgIC8vIFNob3VsZCBpbWFnZSBjaGFuZ2Ugb3BhY2l0eSB3aGlsZSB6b29taW5nXHJcbiAgICAvLyBJZiBvcGFjaXR5IGlzIFwiYXV0b1wiLCB0aGVuIG9wYWNpdHkgd2lsbCBiZSBjaGFuZ2VkIGlmIGltYWdlIGFuZCB0aHVtYm5haWwgaGF2ZSBkaWZmZXJlbnQgYXNwZWN0IHJhdGlvc1xyXG4gICAgem9vbU9wYWNpdHk6IFwiYXV0b1wiLFxyXG5cclxuICAgIC8vIFRyYW5zaXRpb24gZWZmZWN0IGJldHdlZW4gc2xpZGVzXHJcbiAgICAvL1xyXG4gICAgLy8gUG9zc2libGUgdmFsdWVzOlxyXG4gICAgLy8gICBmYWxzZSAgICAgICAgICAgIC0gZGlzYWJsZVxyXG4gICAgLy8gICBcImZhZGUnXHJcbiAgICAvLyAgIFwic2xpZGUnXHJcbiAgICAvLyAgIFwiY2lyY3VsYXInXHJcbiAgICAvLyAgIFwidHViZSdcclxuICAgIC8vICAgXCJ6b29tLWluLW91dCdcclxuICAgIC8vICAgXCJyb3RhdGUnXHJcbiAgICAvL1xyXG4gICAgdHJhbnNpdGlvbkVmZmVjdDogXCJmYWRlXCIsXHJcblxyXG4gICAgLy8gRHVyYXRpb24gaW4gbXMgZm9yIHRyYW5zaXRpb24gYW5pbWF0aW9uXHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IDM2NixcclxuXHJcbiAgICAvLyBDdXN0b20gQ1NTIGNsYXNzIGZvciBzbGlkZSBlbGVtZW50XHJcbiAgICBzbGlkZUNsYXNzOiBcIlwiLFxyXG5cclxuICAgIC8vIEN1c3RvbSBDU1MgY2xhc3MgZm9yIGxheW91dFxyXG4gICAgYmFzZUNsYXNzOiBcIlwiLFxyXG5cclxuICAgIC8vIEJhc2UgdGVtcGxhdGUgZm9yIGxheW91dFxyXG4gICAgYmFzZVRwbDogJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1jb250YWluZXJcIiByb2xlPVwiZGlhbG9nXCIgdGFiaW5kZXg9XCItMVwiPicgK1xyXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWJnXCI+PC9kaXY+JyArXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtaW5uZXJcIj4nICtcclxuICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1pbmZvYmFyXCI+PHNwYW4gZGF0YS1mYW5jeWJveC1pbmRleD48L3NwYW4+Jm5ic3A7LyZuYnNwOzxzcGFuIGRhdGEtZmFuY3lib3gtY291bnQ+PC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXRvb2xiYXJcIj57e2J1dHRvbnN9fTwvZGl2PicgK1xyXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LW5hdmlnYXRpb25cIj57e2Fycm93c319PC9kaXY+JyArXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtc3RhZ2VcIj48L2Rpdj4nICtcclxuICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1jYXB0aW9uXCI+PGRpdiBjbGFzcz1cImZhbmN5Ym94LWNhcHRpb25fX2JvZHlcIj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgXCI8L2Rpdj5cIiArXHJcbiAgICAgIFwiPC9kaXY+XCIsXHJcblxyXG4gICAgLy8gTG9hZGluZyBpbmRpY2F0b3IgdGVtcGxhdGVcclxuICAgIHNwaW5uZXJUcGw6ICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtbG9hZGluZ1wiPjwvZGl2PicsXHJcblxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSB0ZW1wbGF0ZVxyXG4gICAgZXJyb3JUcGw6ICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtZXJyb3JcIj48cD57e0VSUk9SfX08L3A+PC9kaXY+JyxcclxuXHJcbiAgICBidG5UcGw6IHtcclxuICAgICAgZG93bmxvYWQ6ICc8YSBkb3dubG9hZCBkYXRhLWZhbmN5Ym94LWRvd25sb2FkIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZG93bmxvYWRcIiB0aXRsZT1cInt7RE9XTkxPQUR9fVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj4nICtcclxuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTguNjIgMTcuMDlWMTlINS4zOHYtMS45MXptLTIuOTctNi45NkwxNyAxMS40NWwtNSA0Ljg3LTUtNC44NyAxLjM2LTEuMzIgMi42OCAyLjY0VjVoMS45MnY3Ljc3elwiLz48L3N2Zz4nICtcclxuICAgICAgICBcIjwvYT5cIixcclxuXHJcbiAgICAgIHpvb206ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtem9vbSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXpvb21cIiB0aXRsZT1cInt7Wk9PTX19XCI+JyArXHJcbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE4LjcgMTcuM2wtMy0zYTUuOSA1LjkgMCAwIDAtLjYtNy42IDUuOSA1LjkgMCAwIDAtOC40IDAgNS45IDUuOSAwIDAgMCAwIDguNCA1LjkgNS45IDAgMCAwIDcuNy43bDMgM2ExIDEgMCAwIDAgMS4zIDBjLjQtLjUuNC0xIDAtMS41ek04LjEgMTMuOGE0IDQgMCAwIDEgMC01LjcgNCA0IDAgMCAxIDUuNyAwIDQgNCAwIDAgMSAwIDUuNyA0IDQgMCAwIDEtNS43IDB6XCIvPjwvc3ZnPicgK1xyXG4gICAgICAgIFwiPC9idXR0b24+XCIsXHJcblxyXG4gICAgICBjbG9zZTogJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIj4nICtcclxuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMTAuNkw2LjYgNS4yIDUuMiA2LjZsNS40IDUuNC01LjQgNS40IDEuNCAxLjQgNS40LTUuNCA1LjQgNS40IDEuNC0xLjQtNS40LTUuNCA1LjQtNS40LTEuNC0xLjQtNS40IDUuNHpcIi8+PC9zdmc+JyArXHJcbiAgICAgICAgXCI8L2J1dHRvbj5cIixcclxuXHJcbiAgICAgIC8vIEFycm93c1xyXG4gICAgICBhcnJvd0xlZnQ6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcHJldiBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWFycm93X2xlZnRcIiB0aXRsZT1cInt7UFJFVn19XCI+JyArXHJcbiAgICAgICAgJzxkaXY+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTEuMjggMTUuN2wtMS4zNCAxLjM3TDUgMTJsNC45NC01LjA3IDEuMzQgMS4zOC0yLjY4IDIuNzJIMTl2MS45NEg4LjZ6XCIvPjwvc3ZnPjwvZGl2PicgK1xyXG4gICAgICAgIFwiPC9idXR0b24+XCIsXHJcblxyXG4gICAgICBhcnJvd1JpZ2h0OiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LW5leHQgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1hcnJvd19yaWdodFwiIHRpdGxlPVwie3tORVhUfX1cIj4nICtcclxuICAgICAgICAnPGRpdj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNS40IDEyLjk3bC0yLjY4IDIuNzIgMS4zNCAxLjM4TDE5IDEybC00Ljk0LTUuMDctMS4zNCAxLjM4IDIuNjggMi43Mkg1djEuOTR6XCIvPjwvc3ZnPjwvZGl2PicgK1xyXG4gICAgICAgIFwiPC9idXR0b24+XCIsXHJcblxyXG4gICAgICAvLyBUaGlzIHNtYWxsIGNsb3NlIGJ1dHRvbiB3aWxsIGJlIGFwcGVuZGVkIHRvIHlvdXIgaHRtbC9pbmxpbmUvYWpheCBjb250ZW50IGJ5IGRlZmF1bHQsXHJcbiAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxyXG4gICAgICBzbWFsbEJ0bjogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtY2xvc2Utc21hbGxcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPicgK1xyXG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEzIDEybDUtNS0xLTEtNSA1LTUtNS0xIDEgNSA1LTUgNSAxIDEgNS01IDUgNSAxLTF6XCIvPjwvc3ZnPicgK1xyXG4gICAgICAgIFwiPC9idXR0b24+XCJcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ29udGFpbmVyIGlzIGluamVjdGVkIGludG8gdGhpcyBlbGVtZW50XHJcbiAgICBwYXJlbnRFbDogXCJib2R5XCIsXHJcblxyXG4gICAgLy8gSGlkZSBicm93c2VyIHZlcnRpY2FsIHNjcm9sbGJhcnM7IHVzZSBhdCB5b3VyIG93biByaXNrXHJcbiAgICBoaWRlU2Nyb2xsYmFyOiB0cnVlLFxyXG5cclxuICAgIC8vIEZvY3VzIGhhbmRsaW5nXHJcbiAgICAvLyA9PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFRyeSB0byBmb2N1cyBvbiB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgYWZ0ZXIgb3BlbmluZ1xyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG5cclxuICAgIC8vIFB1dCBmb2N1cyBiYWNrIHRvIGFjdGl2ZSBlbGVtZW50IGFmdGVyIGNsb3NpbmdcclxuICAgIGJhY2tGb2N1czogdHJ1ZSxcclxuXHJcbiAgICAvLyBEbyBub3QgbGV0IHVzZXIgdG8gZm9jdXMgb24gZWxlbWVudCBvdXRzaWRlIG1vZGFsIGNvbnRlbnRcclxuICAgIHRyYXBGb2N1czogdHJ1ZSxcclxuXHJcbiAgICAvLyBNb2R1bGUgc3BlY2lmaWMgb3B0aW9uc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgIGF1dG9TdGFydDogZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgLy8gU2V0IGB0b3VjaDogZmFsc2VgIHRvIGRpc2FibGUgcGFubmluZy9zd2lwaW5nXHJcbiAgICB0b3VjaDoge1xyXG4gICAgICB2ZXJ0aWNhbDogdHJ1ZSwgLy8gQWxsb3cgdG8gZHJhZyBjb250ZW50IHZlcnRpY2FsbHlcclxuICAgICAgbW9tZW50dW06IHRydWUgLy8gQ29udGludWUgbW92ZW1lbnQgYWZ0ZXIgcmVsZWFzaW5nIG1vdXNlL3RvdWNoIHdoZW4gcGFubmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBIYXNoIHZhbHVlIHdoZW4gaW5pdGlhbGl6aW5nIG1hbnVhbGx5LFxyXG4gICAgLy8gc2V0IGBmYWxzZWAgdG8gZGlzYWJsZSBoYXNoIGNoYW5nZVxyXG4gICAgaGFzaDogbnVsbCxcclxuXHJcbiAgICAvLyBDdXN0b21pemUgb3IgYWRkIG5ldyBtZWRpYSB0eXBlc1xyXG4gICAgLy8gRXhhbXBsZTpcclxuICAgIC8qXHJcbiAgICAgIG1lZGlhIDoge1xyXG4gICAgICAgIHlvdXR1YmUgOiB7XHJcbiAgICAgICAgICBwYXJhbXMgOiB7XHJcbiAgICAgICAgICAgIGF1dG9wbGF5IDogMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKi9cclxuICAgIG1lZGlhOiB7fSxcclxuXHJcbiAgICBzbGlkZVNob3c6IHtcclxuICAgICAgYXV0b1N0YXJ0OiBmYWxzZSxcclxuICAgICAgc3BlZWQ6IDMwMDBcclxuICAgIH0sXHJcblxyXG4gICAgdGh1bWJzOiB7XHJcbiAgICAgIGF1dG9TdGFydDogZmFsc2UsIC8vIERpc3BsYXkgdGh1bWJuYWlscyBvbiBvcGVuaW5nXHJcbiAgICAgIGhpZGVPbkNsb3NlOiB0cnVlLCAvLyBIaWRlIHRodW1ibmFpbCBncmlkIHdoZW4gY2xvc2luZyBhbmltYXRpb24gc3RhcnRzXHJcbiAgICAgIHBhcmVudEVsOiBcIi5mYW5jeWJveC1jb250YWluZXJcIiwgLy8gQ29udGFpbmVyIGlzIGluamVjdGVkIGludG8gdGhpcyBlbGVtZW50XHJcbiAgICAgIGF4aXM6IFwieVwiIC8vIFZlcnRpY2FsICh5KSBvciBob3Jpem9udGFsICh4KSBzY3JvbGxpbmdcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlIG1vdXNld2hlZWwgdG8gbmF2aWdhdGUgZ2FsbGVyeVxyXG4gICAgLy8gSWYgJ2F1dG8nIC0gZW5hYmxlZCBmb3IgaW1hZ2VzIG9ubHlcclxuICAgIHdoZWVsOiBcImF1dG9cIixcclxuXHJcbiAgICAvLyBDYWxsYmFja3NcclxuICAgIC8vPT09PT09PT09PVxyXG5cclxuICAgIC8vIFNlZSBEb2N1bWVudGF0aW9uL0FQSS9FdmVudHMgZm9yIG1vcmUgaW5mb3JtYXRpb25cclxuICAgIC8vIEV4YW1wbGU6XHJcbiAgICAvKlxyXG4gICAgICBhZnRlclNob3c6IGZ1bmN0aW9uKCBpbnN0YW5jZSwgY3VycmVudCApIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oICdDbGlja2VkIGVsZW1lbnQ6JyApO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyggY3VycmVudC5vcHRzLiRvcmlnICk7XHJcbiAgICAgIH1cclxuICAgICovXHJcblxyXG4gICAgb25Jbml0OiAkLm5vb3AsIC8vIFdoZW4gaW5zdGFuY2UgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcclxuXHJcbiAgICBiZWZvcmVMb2FkOiAkLm5vb3AsIC8vIEJlZm9yZSB0aGUgY29udGVudCBvZiBhIHNsaWRlIGlzIGJlaW5nIGxvYWRlZFxyXG4gICAgYWZ0ZXJMb2FkOiAkLm5vb3AsIC8vIFdoZW4gdGhlIGNvbnRlbnQgb2YgYSBzbGlkZSBpcyBkb25lIGxvYWRpbmdcclxuXHJcbiAgICBiZWZvcmVTaG93OiAkLm5vb3AsIC8vIEJlZm9yZSBvcGVuIGFuaW1hdGlvbiBzdGFydHNcclxuICAgIGFmdGVyU2hvdzogJC5ub29wLCAvLyBXaGVuIGNvbnRlbnQgaXMgZG9uZSBsb2FkaW5nIGFuZCBhbmltYXRpbmdcclxuXHJcbiAgICBiZWZvcmVDbG9zZTogJC5ub29wLCAvLyBCZWZvcmUgdGhlIGluc3RhbmNlIGF0dGVtcHRzIHRvIGNsb3NlLiBSZXR1cm4gZmFsc2UgdG8gY2FuY2VsIHRoZSBjbG9zZS5cclxuICAgIGFmdGVyQ2xvc2U6ICQubm9vcCwgLy8gQWZ0ZXIgaW5zdGFuY2UgaGFzIGJlZW4gY2xvc2VkXHJcblxyXG4gICAgb25BY3RpdmF0ZTogJC5ub29wLCAvLyBXaGVuIGluc3RhbmNlIGlzIGJyb3VnaHQgdG8gZnJvbnRcclxuICAgIG9uRGVhY3RpdmF0ZTogJC5ub29wLCAvLyBXaGVuIG90aGVyIGluc3RhbmNlIGhhcyBiZWVuIGFjdGl2YXRlZFxyXG5cclxuICAgIC8vIEludGVyYWN0aW9uXHJcbiAgICAvLyA9PT09PT09PT09PVxyXG5cclxuICAgIC8vIFVzZSBvcHRpb25zIGJlbG93IHRvIGN1c3RvbWl6ZSB0YWtlbiBhY3Rpb24gd2hlbiB1c2VyIGNsaWNrcyBvciBkb3VibGUgY2xpY2tzIG9uIHRoZSBmYW5jeUJveCBhcmVhLFxyXG4gICAgLy8gZWFjaCBvcHRpb24gY2FuIGJlIHN0cmluZyBvciBtZXRob2QgdGhhdCByZXR1cm5zIHZhbHVlLlxyXG4gICAgLy9cclxuICAgIC8vIFBvc3NpYmxlIHZhbHVlczpcclxuICAgIC8vICAgXCJjbG9zZVwiICAgICAgICAgICAtIGNsb3NlIGluc3RhbmNlXHJcbiAgICAvLyAgIFwibmV4dFwiICAgICAgICAgICAgLSBtb3ZlIHRvIG5leHQgZ2FsbGVyeSBpdGVtXHJcbiAgICAvLyAgIFwibmV4dE9yQ2xvc2VcIiAgICAgLSBtb3ZlIHRvIG5leHQgZ2FsbGVyeSBpdGVtIG9yIGNsb3NlIGlmIGdhbGxlcnkgaGFzIG9ubHkgb25lIGl0ZW1cclxuICAgIC8vICAgXCJ0b2dnbGVDb250cm9sc1wiICAtIHNob3cvaGlkZSBjb250cm9sc1xyXG4gICAgLy8gICBcInpvb21cIiAgICAgICAgICAgIC0gem9vbSBpbWFnZSAoaWYgbG9hZGVkKVxyXG4gICAgLy8gICBmYWxzZSAgICAgICAgICAgICAtIGRvIG5vdGhpbmdcclxuXHJcbiAgICAvLyBDbGlja2VkIG9uIHRoZSBjb250ZW50XHJcbiAgICBjbGlja0NvbnRlbnQ6IGZ1bmN0aW9uIChjdXJyZW50LCBldmVudCkge1xyXG4gICAgICByZXR1cm4gY3VycmVudC50eXBlID09PSBcImltYWdlXCIgPyBcInpvb21cIiA6IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDbGlja2VkIG9uIHRoZSBzbGlkZVxyXG4gICAgY2xpY2tTbGlkZTogXCJjbG9zZVwiLFxyXG5cclxuICAgIC8vIENsaWNrZWQgb24gdGhlIGJhY2tncm91bmQgKGJhY2tkcm9wKSBlbGVtZW50O1xyXG4gICAgLy8gaWYgeW91IGhhdmUgbm90IGNoYW5nZWQgdGhlIGxheW91dCwgdGhlbiBtb3N0IGxpa2VseSB5b3UgbmVlZCB0byB1c2UgYGNsaWNrU2xpZGVgIG9wdGlvblxyXG4gICAgY2xpY2tPdXRzaWRlOiBcImNsb3NlXCIsXHJcblxyXG4gICAgLy8gU2FtZSBhcyBwcmV2aW91cyB0d28sIGJ1dCBmb3IgZG91YmxlIGNsaWNrXHJcbiAgICBkYmxjbGlja0NvbnRlbnQ6IGZhbHNlLFxyXG4gICAgZGJsY2xpY2tTbGlkZTogZmFsc2UsXHJcbiAgICBkYmxjbGlja091dHNpZGU6IGZhbHNlLFxyXG5cclxuICAgIC8vIEN1c3RvbSBvcHRpb25zIHdoZW4gbW9iaWxlIGRldmljZSBpcyBkZXRlY3RlZFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbW9iaWxlOiB7XHJcbiAgICAgIHByZXZlbnRDYXB0aW9uT3ZlcmxhcDogZmFsc2UsXHJcbiAgICAgIGlkbGVUaW1lOiBmYWxzZSxcclxuICAgICAgY2xpY2tDb250ZW50OiBmdW5jdGlvbiAoY3VycmVudCwgZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudC50eXBlID09PSBcImltYWdlXCIgPyBcInRvZ2dsZUNvbnRyb2xzXCIgOiBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgY2xpY2tTbGlkZTogZnVuY3Rpb24gKGN1cnJlbnQsIGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiID8gXCJ0b2dnbGVDb250cm9sc1wiIDogXCJjbG9zZVwiO1xyXG4gICAgICB9LFxyXG4gICAgICBkYmxjbGlja0NvbnRlbnQ6IGZ1bmN0aW9uIChjdXJyZW50LCBldmVudCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50LnR5cGUgPT09IFwiaW1hZ2VcIiA/IFwiem9vbVwiIDogZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRibGNsaWNrU2xpZGU6IGZ1bmN0aW9uIChjdXJyZW50LCBldmVudCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50LnR5cGUgPT09IFwiaW1hZ2VcIiA/IFwiem9vbVwiIDogZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gSW50ZXJuYXRpb25hbGl6YXRpb25cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbGFuZzogXCJlblwiLFxyXG4gICAgaTE4bjoge1xyXG4gICAgICBlbjoge1xyXG4gICAgICAgIENMT1NFOiBcIkNsb3NlXCIsXHJcbiAgICAgICAgTkVYVDogXCJOZXh0XCIsXHJcbiAgICAgICAgUFJFVjogXCJQcmV2aW91c1wiLFxyXG4gICAgICAgIEVSUk9SOiBcIlRoZSByZXF1ZXN0ZWQgY29udGVudCBjYW5ub3QgYmUgbG9hZGVkLiA8YnIvPiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgIFBMQVlfU1RBUlQ6IFwiU3RhcnQgc2xpZGVzaG93XCIsXHJcbiAgICAgICAgUExBWV9TVE9QOiBcIlBhdXNlIHNsaWRlc2hvd1wiLFxyXG4gICAgICAgIEZVTExfU0NSRUVOOiBcIkZ1bGwgc2NyZWVuXCIsXHJcbiAgICAgICAgVEhVTUJTOiBcIlRodW1ibmFpbHNcIixcclxuICAgICAgICBET1dOTE9BRDogXCJEb3dubG9hZFwiLFxyXG4gICAgICAgIFNIQVJFOiBcIlNoYXJlXCIsXHJcbiAgICAgICAgWk9PTTogXCJab29tXCJcclxuICAgICAgfSxcclxuICAgICAgZGU6IHtcclxuICAgICAgICBDTE9TRTogXCJTY2hsaWUmc3psaWc7ZW5cIixcclxuICAgICAgICBORVhUOiBcIldlaXRlclwiLFxyXG4gICAgICAgIFBSRVY6IFwiWnVyJnV1bWw7Y2tcIixcclxuICAgICAgICBFUlJPUjogXCJEaWUgYW5nZWZvcmRlcnRlbiBEYXRlbiBrb25udGVuIG5pY2h0IGdlbGFkZW4gd2VyZGVuLiA8YnIvPiBCaXR0ZSB2ZXJzdWNoZW4gU2llIGVzIHNwJmF1bWw7dGVyIG5vY2htYWwuXCIsXHJcbiAgICAgICAgUExBWV9TVEFSVDogXCJEaWFzY2hhdSBzdGFydGVuXCIsXHJcbiAgICAgICAgUExBWV9TVE9QOiBcIkRpYXNjaGF1IGJlZW5kZW5cIixcclxuICAgICAgICBGVUxMX1NDUkVFTjogXCJWb2xsYmlsZFwiLFxyXG4gICAgICAgIFRIVU1CUzogXCJWb3JzY2hhdWJpbGRlclwiLFxyXG4gICAgICAgIERPV05MT0FEOiBcIkhlcnVudGVybGFkZW5cIixcclxuICAgICAgICBTSEFSRTogXCJUZWlsZW5cIixcclxuICAgICAgICBaT09NOiBcIlZlcmdyJm91bWw7JnN6bGlnO2VyblwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGZXcgdXNlZnVsIHZhcmlhYmxlcyBhbmQgbWV0aG9kc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIHZhciAkVyA9ICQod2luZG93KTtcclxuICB2YXIgJEQgPSAkKGRvY3VtZW50KTtcclxuXHJcbiAgdmFyIGNhbGxlZCA9IDA7XHJcblxyXG4gIC8vIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIGpRdWVyeSBvYmplY3QgYW5kIG5vdCBhIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHZhciBpc1F1ZXJ5ID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouaGFzT3duUHJvcGVydHkgJiYgb2JqIGluc3RhbmNlb2YgJDtcclxuICB9O1xyXG5cclxuICAvLyBIYW5kbGUgbXVsdGlwbGUgYnJvd3NlcnMgZm9yIFwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXCIgYW5kIFwiY2FuY2VsQW5pbWF0aW9uRnJhbWVcIlxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICB2YXIgcmVxdWVzdEFGcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAvLyBpZiBhbGwgZWxzZSBmYWlscywgdXNlIHNldFRpbWVvdXRcclxuICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG4gIHZhciBjYW5jZWxBRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KSgpO1xyXG5cclxuICAvLyBEZXRlY3QgdGhlIHN1cHBvcnRlZCB0cmFuc2l0aW9uLWVuZCBldmVudCBwcm9wZXJ0eSBuYW1lXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHZhciB0cmFuc2l0aW9uRW5kID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKSxcclxuICAgICAgdDtcclxuXHJcbiAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XHJcbiAgICAgIHRyYW5zaXRpb246IFwidHJhbnNpdGlvbmVuZFwiLFxyXG4gICAgICBPVHJhbnNpdGlvbjogXCJvVHJhbnNpdGlvbkVuZFwiLFxyXG4gICAgICBNb3pUcmFuc2l0aW9uOiBcInRyYW5zaXRpb25lbmRcIixcclxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJcclxuICAgIH07XHJcblxyXG4gICAgZm9yICh0IGluIHRyYW5zaXRpb25zKSB7XHJcbiAgICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFwidHJhbnNpdGlvbmVuZFwiO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8vIEZvcmNlIHJlZHJhdyBvbiBhbiBlbGVtZW50LlxyXG4gIC8vIFRoaXMgaGVscHMgaW4gY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgZG9lc24ndCByZWRyYXcgYW4gdXBkYXRlZCBlbGVtZW50IHByb3Blcmx5XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICB2YXIgZm9yY2VSZWRyYXcgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICByZXR1cm4gJGVsICYmICRlbC5sZW5ndGggJiYgJGVsWzBdLm9mZnNldEhlaWdodDtcclxuICB9O1xyXG5cclxuICAvLyBFeGNsdWRlIGFycmF5IChgYnV0dG9uc2ApIG9wdGlvbnMgZnJvbSBkZWVwIG1lcmdpbmdcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICB2YXIgbWVyZ2VPcHRzID0gZnVuY3Rpb24gKG9wdHMxLCBvcHRzMikge1xyXG4gICAgdmFyIHJleiA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRzMSwgb3B0czIpO1xyXG5cclxuICAgICQuZWFjaChvcHRzMiwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgaWYgKCQuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICByZXpba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmV6O1xyXG4gIH07XHJcblxyXG4gIC8vIEhvdyBtdWNoIG9mIGFuIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiB2aWV3cG9ydFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICB2YXIgaW5WaWV3cG9ydCA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICB2YXIgZWxlbUNlbnRlciwgcmV6O1xyXG5cclxuICAgIGlmICghZWxlbSB8fCBlbGVtLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiLmZhbmN5Ym94LWNvbnRhaW5lclwiKS5jc3MoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIik7XHJcblxyXG4gICAgZWxlbUNlbnRlciA9IHtcclxuICAgICAgeDogZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgZWxlbS5vZmZzZXRXaWR0aCAvIDIsXHJcbiAgICAgIHk6IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZWxlbS5vZmZzZXRIZWlnaHQgLyAyXHJcbiAgICB9O1xyXG5cclxuICAgIHJleiA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZWxlbUNlbnRlci54LCBlbGVtQ2VudGVyLnkpID09PSBlbGVtO1xyXG5cclxuICAgICQoXCIuZmFuY3lib3gtY29udGFpbmVyXCIpLmNzcyhcInBvaW50ZXItZXZlbnRzXCIsIFwiXCIpO1xyXG5cclxuICAgIHJldHVybiByZXo7XHJcbiAgfTtcclxuXHJcbiAgLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG4gIC8vID09PT09PT09PT09PT09PT1cclxuXHJcbiAgdmFyIEZhbmN5Qm94ID0gZnVuY3Rpb24gKGNvbnRlbnQsIG9wdHMsIGluZGV4KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5vcHRzID0gbWVyZ2VPcHRzKHtcclxuICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICB9LCAkLmZhbmN5Ym94LmRlZmF1bHRzKTtcclxuXHJcbiAgICBpZiAoJC5pc1BsYWluT2JqZWN0KG9wdHMpKSB7XHJcbiAgICAgIHNlbGYub3B0cyA9IG1lcmdlT3B0cyhzZWxmLm9wdHMsIG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkLmZhbmN5Ym94LmlzTW9iaWxlKSB7XHJcbiAgICAgIHNlbGYub3B0cyA9IG1lcmdlT3B0cyhzZWxmLm9wdHMsIHNlbGYub3B0cy5tb2JpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuaWQgPSBzZWxmLm9wdHMuaWQgfHwgKytjYWxsZWQ7XHJcblxyXG4gICAgc2VsZi5jdXJySW5kZXggPSBwYXJzZUludChzZWxmLm9wdHMuaW5kZXgsIDEwKSB8fCAwO1xyXG4gICAgc2VsZi5wcmV2SW5kZXggPSBudWxsO1xyXG5cclxuICAgIHNlbGYucHJldlBvcyA9IG51bGw7XHJcbiAgICBzZWxmLmN1cnJQb3MgPSAwO1xyXG5cclxuICAgIHNlbGYuZmlyc3RSdW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIEFsbCBncm91cCBpdGVtc1xyXG4gICAgc2VsZi5ncm91cCA9IFtdO1xyXG5cclxuICAgIC8vIEV4aXN0aW5nIHNsaWRlcyAoZm9yIGN1cnJlbnQsIG5leHQgYW5kIHByZXZpb3VzIGdhbGxlcnkgaXRlbXMpXHJcbiAgICBzZWxmLnNsaWRlcyA9IHt9O1xyXG5cclxuICAgIC8vIENyZWF0ZSBncm91cCBlbGVtZW50c1xyXG4gICAgc2VsZi5hZGRDb250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgIGlmICghc2VsZi5ncm91cC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuaW5pdCgpO1xyXG4gIH07XHJcblxyXG4gICQuZXh0ZW5kKEZhbmN5Qm94LnByb3RvdHlwZSwge1xyXG4gICAgLy8gQ3JlYXRlIERPTSBzdHJ1Y3R1cmVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZmlyc3RJdGVtID0gc2VsZi5ncm91cFtzZWxmLmN1cnJJbmRleF0sXHJcbiAgICAgICAgZmlyc3RJdGVtT3B0cyA9IGZpcnN0SXRlbS5vcHRzLFxyXG4gICAgICAgICRjb250YWluZXIsXHJcbiAgICAgICAgYnV0dG9uU3RyO1xyXG5cclxuICAgICAgaWYgKGZpcnN0SXRlbU9wdHMuY2xvc2VFeGlzdGluZykge1xyXG4gICAgICAgICQuZmFuY3lib3guY2xvc2UodHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEhpZGUgc2Nyb2xsYmFyc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiZmFuY3lib3gtYWN0aXZlXCIpO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgICEkLmZhbmN5Ym94LmdldEluc3RhbmNlKCkgJiZcclxuICAgICAgICBmaXJzdEl0ZW1PcHRzLmhpZGVTY3JvbGxiYXIgIT09IGZhbHNlICYmXHJcbiAgICAgICAgISQuZmFuY3lib3guaXNNb2JpbGUgJiZcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICApIHtcclxuICAgICAgICAkKFwiaGVhZFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAnPHN0eWxlIGlkPVwiZmFuY3lib3gtc3R5bGUtbm9zY3JvbGxcIiB0eXBlPVwidGV4dC9jc3NcIj4uY29tcGVuc2F0ZS1mb3Itc2Nyb2xsYmFye21hcmdpbi1yaWdodDonICtcclxuICAgICAgICAgICh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgK1xyXG4gICAgICAgICAgXCJweDt9PC9zdHlsZT5cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiY29tcGVuc2F0ZS1mb3Itc2Nyb2xsYmFyXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCdWlsZCBodG1sIG1hcmt1cCBhbmQgc2V0IHJlZmVyZW5jZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAvLyBCdWlsZCBodG1sIGNvZGUgZm9yIGJ1dHRvbnMgYW5kIGluc2VydCBpbnRvIG1haW4gdGVtcGxhdGVcclxuICAgICAgYnV0dG9uU3RyID0gXCJcIjtcclxuXHJcbiAgICAgICQuZWFjaChmaXJzdEl0ZW1PcHRzLmJ1dHRvbnMsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICBidXR0b25TdHIgKz0gZmlyc3RJdGVtT3B0cy5idG5UcGxbdmFsdWVdIHx8IFwiXCI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIG1hcmt1cCBmcm9tIGJhc2UgdGVtcGxhdGUsIGl0IHdpbGwgYmUgaW5pdGlhbGx5IGhpZGRlbiB0b1xyXG4gICAgICAvLyBhdm9pZCB1bm5lY2Vzc2FyeSB3b3JrIGxpa2UgcGFpbnRpbmcgd2hpbGUgaW5pdGlhbGl6aW5nIGlzIG5vdCBjb21wbGV0ZVxyXG4gICAgICAkY29udGFpbmVyID0gJChcclxuICAgICAgICAgIHNlbGYudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICBzZWxmLFxyXG4gICAgICAgICAgICBmaXJzdEl0ZW1PcHRzLmJhc2VUcGxcclxuICAgICAgICAgICAgLnJlcGxhY2UoXCJ7e2J1dHRvbnN9fVwiLCBidXR0b25TdHIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKFwie3thcnJvd3N9fVwiLCBmaXJzdEl0ZW1PcHRzLmJ0blRwbC5hcnJvd0xlZnQgKyBmaXJzdEl0ZW1PcHRzLmJ0blRwbC5hcnJvd1JpZ2h0KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgICAuYXR0cihcImlkXCIsIFwiZmFuY3lib3gtY29udGFpbmVyLVwiICsgc2VsZi5pZClcclxuICAgICAgICAuYWRkQ2xhc3MoZmlyc3RJdGVtT3B0cy5iYXNlQ2xhc3MpXHJcbiAgICAgICAgLmRhdGEoXCJGYW5jeUJveFwiLCBzZWxmKVxyXG4gICAgICAgIC5hcHBlbmRUbyhmaXJzdEl0ZW1PcHRzLnBhcmVudEVsKTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBvYmplY3QgaG9sZGluZyByZWZlcmVuY2VzIHRvIGpRdWVyeSB3cmFwcGVkIG5vZGVzXHJcbiAgICAgIHNlbGYuJHJlZnMgPSB7XHJcbiAgICAgICAgY29udGFpbmVyOiAkY29udGFpbmVyXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBbXCJiZ1wiLCBcImlubmVyXCIsIFwiaW5mb2JhclwiLCBcInRvb2xiYXJcIiwgXCJzdGFnZVwiLCBcImNhcHRpb25cIiwgXCJuYXZpZ2F0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBzZWxmLiRyZWZzW2l0ZW1dID0gJGNvbnRhaW5lci5maW5kKFwiLmZhbmN5Ym94LVwiICsgaXRlbSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VsZi50cmlnZ2VyKFwib25Jbml0XCIpO1xyXG5cclxuICAgICAgLy8gRW5hYmxlIGV2ZW50cywgZGVhY3RpdmUgcHJldmlvdXMgaW5zdGFuY2VzXHJcbiAgICAgIHNlbGYuYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgIC8vIEJ1aWxkIHNsaWRlcywgbG9hZCBhbmQgcmV2ZWFsIGNvbnRlbnRcclxuICAgICAgc2VsZi5qdW1wVG8oc2VsZi5jdXJySW5kZXgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBTaW1wbGUgaTE4biBzdXBwb3J0IC0gcmVwbGFjZXMgb2JqZWN0IGtleXMgZm91bmQgaW4gdGVtcGxhdGVcclxuICAgIC8vIHdpdGggY29ycmVzcG9uZGluZyB2YWx1ZXNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHRyYW5zbGF0ZTogZnVuY3Rpb24gKG9iaiwgc3RyKSB7XHJcbiAgICAgIHZhciBhcnIgPSBvYmoub3B0cy5pMThuW29iai5vcHRzLmxhbmddIHx8IG9iai5vcHRzLmkxOG4uZW47XHJcblxyXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xce1xceyhcXHcrKVxcfVxcfS9nLCBmdW5jdGlvbiAobWF0Y2gsIG4pIHtcclxuICAgICAgICByZXR1cm4gYXJyW25dID09PSB1bmRlZmluZWQgPyBtYXRjaCA6IGFycltuXTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFBvcHVsYXRlIGN1cnJlbnQgZ3JvdXAgd2l0aCBmcmVzaCBjb250ZW50XHJcbiAgICAvLyBDaGVjayBpZiBlYWNoIG9iamVjdCBoYXMgdmFsaWQgdHlwZSBhbmQgY29udGVudFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhZGRDb250ZW50OiBmdW5jdGlvbiAoY29udGVudCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgaXRlbXMgPSAkLm1ha2VBcnJheShjb250ZW50KSxcclxuICAgICAgICB0aHVtYnM7XHJcblxyXG4gICAgICAkLmVhY2goaXRlbXMsIGZ1bmN0aW9uIChpLCBpdGVtKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9LFxyXG4gICAgICAgICAgb3B0cyA9IHt9LFxyXG4gICAgICAgICAgJGl0ZW0sXHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgZm91bmQsXHJcbiAgICAgICAgICBzcmMsXHJcbiAgICAgICAgICBzcmNQYXJ0cztcclxuXHJcbiAgICAgICAgLy8gU3RlcCAxIC0gTWFrZSBzdXJlIHdlIGhhdmUgYW4gb2JqZWN0XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QoaXRlbSkpIHtcclxuICAgICAgICAgIC8vIFdlIHByb2JhYmx5IGhhdmUgbWFudWFsIHVzYWdlIGhlcmUsIHNvbWV0aGluZyBsaWtlXHJcbiAgICAgICAgICAvLyAkLmZhbmN5Ym94Lm9wZW4oIFsgeyBzcmMgOiBcImltYWdlLmpwZ1wiLCB0eXBlIDogXCJpbWFnZVwiIH0gXSApXHJcblxyXG4gICAgICAgICAgb2JqID0gaXRlbTtcclxuICAgICAgICAgIG9wdHMgPSBpdGVtLm9wdHMgfHwgaXRlbTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQudHlwZShpdGVtKSA9PT0gXCJvYmplY3RcIiAmJiAkKGl0ZW0pLmxlbmd0aCkge1xyXG4gICAgICAgICAgLy8gSGVyZSB3ZSBwcm9iYWJseSBoYXZlIGpRdWVyeSBjb2xsZWN0aW9uIHJldHVybmVkIGJ5IHNvbWUgc2VsZWN0b3JcclxuICAgICAgICAgICRpdGVtID0gJChpdGVtKTtcclxuXHJcbiAgICAgICAgICAvLyBTdXBwb3J0IGF0dHJpYnV0ZXMgbGlrZSBgZGF0YS1vcHRpb25zPSd7XCJ0b3VjaFwiIDogZmFsc2V9J2AgYW5kIGBkYXRhLXRvdWNoPSdmYWxzZSdgXHJcbiAgICAgICAgICBvcHRzID0gJGl0ZW0uZGF0YSgpIHx8IHt9O1xyXG4gICAgICAgICAgb3B0cyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRzLCBvcHRzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgIC8vIEhlcmUgd2Ugc3RvcmUgY2xpY2tlZCBlbGVtZW50XHJcbiAgICAgICAgICBvcHRzLiRvcmlnID0gJGl0ZW07XHJcblxyXG4gICAgICAgICAgb2JqLnNyYyA9IHNlbGYub3B0cy5zcmMgfHwgb3B0cy5zcmMgfHwgJGl0ZW0uYXR0cihcImhyZWZcIik7XHJcblxyXG4gICAgICAgICAgLy8gQXNzdW1lIHRoYXQgc2ltcGxlIHN5bnRheCBpcyB1c2VkLCBmb3IgZXhhbXBsZTpcclxuICAgICAgICAgIC8vICAgYCQuZmFuY3lib3gub3BlbiggJChcIiN0ZXN0XCIpLCB7fSApO2BcclxuICAgICAgICAgIGlmICghb2JqLnR5cGUgJiYgIW9iai5zcmMpIHtcclxuICAgICAgICAgICAgb2JqLnR5cGUgPSBcImlubGluZVwiO1xyXG4gICAgICAgICAgICBvYmouc3JjID0gaXRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gQXNzdW1lIHdlIGhhdmUgYSBzaW1wbGUgaHRtbCBjb2RlLCBmb3IgZXhhbXBsZTpcclxuICAgICAgICAgIC8vICAgJC5mYW5jeWJveC5vcGVuKCAnPGRpdj48aDE+SGkhPC9oMT48L2Rpdj4nICk7XHJcbiAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICAgICAgICBzcmM6IGl0ZW0gKyBcIlwiXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRWFjaCBnYWxsZXJ5IG9iamVjdCBoYXMgZnVsbCBjb2xsZWN0aW9uIG9mIG9wdGlvbnNcclxuICAgICAgICBvYmoub3B0cyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBzZWxmLm9wdHMsIG9wdHMpO1xyXG5cclxuICAgICAgICAvLyBEbyBub3QgbWVyZ2UgYnV0dG9ucyBhcnJheVxyXG4gICAgICAgIGlmICgkLmlzQXJyYXkob3B0cy5idXR0b25zKSkge1xyXG4gICAgICAgICAgb2JqLm9wdHMuYnV0dG9ucyA9IG9wdHMuYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkLmZhbmN5Ym94LmlzTW9iaWxlICYmIG9iai5vcHRzLm1vYmlsZSkge1xyXG4gICAgICAgICAgb2JqLm9wdHMgPSBtZXJnZU9wdHMob2JqLm9wdHMsIG9iai5vcHRzLm1vYmlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdGVwIDIgLSBNYWtlIHN1cmUgd2UgaGF2ZSBjb250ZW50IHR5cGUsIGlmIG5vdCAtIHRyeSB0byBndWVzc1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIHR5cGUgPSBvYmoudHlwZSB8fCBvYmoub3B0cy50eXBlO1xyXG4gICAgICAgIHNyYyA9IG9iai5zcmMgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCF0eXBlICYmIHNyYykge1xyXG4gICAgICAgICAgaWYgKChmb3VuZCA9IHNyYy5tYXRjaCgvXFwuKG1wNHxtb3Z8b2d2fHdlYm0pKChcXD98IykuKik/JC9pKSkpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFwidmlkZW9cIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghb2JqLm9wdHMudmlkZW8uZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgb2JqLm9wdHMudmlkZW8uZm9ybWF0ID0gXCJ2aWRlby9cIiArIChmb3VuZFsxXSA9PT0gXCJvZ3ZcIiA/IFwib2dnXCIgOiBmb3VuZFsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3JjLm1hdGNoKC8oXmRhdGE6aW1hZ2VcXC9bYS16MC05K1xcLz1dKiwpfChcXC4oanAoZXxnfGVnKXxnaWZ8cG5nfGJtcHx3ZWJwfHN2Z3xpY28pKChcXD98IykuKik/JCkvaSkpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFwiaW1hZ2VcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3JjLm1hdGNoKC9cXC4ocGRmKSgoXFw/fCMpLiopPyQvaSkpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFwiaWZyYW1lXCI7XHJcbiAgICAgICAgICAgIG9iaiA9ICQuZXh0ZW5kKHRydWUsIG9iaiwge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcInBkZlwiLFxyXG4gICAgICAgICAgICAgIG9wdHM6IHtcclxuICAgICAgICAgICAgICAgIGlmcmFtZToge1xyXG4gICAgICAgICAgICAgICAgICBwcmVsb2FkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNyYy5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBcImlubGluZVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgIG9iai50eXBlID0gdHlwZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VsZi50cmlnZ2VyKFwib2JqZWN0TmVlZHNUeXBlXCIsIG9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9iai5jb250ZW50VHlwZSkge1xyXG4gICAgICAgICAgb2JqLmNvbnRlbnRUeXBlID0gJC5pbkFycmF5KG9iai50eXBlLCBbXCJodG1sXCIsIFwiaW5saW5lXCIsIFwiYWpheFwiXSkgPiAtMSA/IFwiaHRtbFwiIDogb2JqLnR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdGVwIDMgLSBTb21lIGFkanVzdG1lbnRzXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBvYmouaW5kZXggPSBzZWxmLmdyb3VwLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG9iai5vcHRzLnNtYWxsQnRuID09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICBvYmoub3B0cy5zbWFsbEJ0biA9ICQuaW5BcnJheShvYmoudHlwZSwgW1wiaHRtbFwiLCBcImlubGluZVwiLCBcImFqYXhcIl0pID4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2JqLm9wdHMudG9vbGJhciA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgIG9iai5vcHRzLnRvb2xiYXIgPSAhb2JqLm9wdHMuc21hbGxCdG47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGaW5kIHRodW1ibmFpbCBpbWFnZSwgY2hlY2sgaWYgZXhpc3RzIGFuZCBpZiBpcyBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICBvYmouJHRodW1iID0gb2JqLm9wdHMuJHRodW1iIHx8IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChvYmoub3B0cy4kdHJpZ2dlciAmJiBvYmouaW5kZXggPT09IHNlbGYub3B0cy5pbmRleCkge1xyXG4gICAgICAgICAgb2JqLiR0aHVtYiA9IG9iai5vcHRzLiR0cmlnZ2VyLmZpbmQoXCJpbWc6Zmlyc3RcIik7XHJcblxyXG4gICAgICAgICAgaWYgKG9iai4kdGh1bWIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG9iai5vcHRzLiRvcmlnID0gb2JqLm9wdHMuJHRyaWdnZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShvYmouJHRodW1iICYmIG9iai4kdGh1bWIubGVuZ3RoKSAmJiBvYmoub3B0cy4kb3JpZykge1xyXG4gICAgICAgICAgb2JqLiR0aHVtYiA9IG9iai5vcHRzLiRvcmlnLmZpbmQoXCJpbWc6Zmlyc3RcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2JqLiR0aHVtYiAmJiAhb2JqLiR0aHVtYi5sZW5ndGgpIHtcclxuICAgICAgICAgIG9iai4kdGh1bWIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JqLnRodW1iID0gb2JqLm9wdHMudGh1bWIgfHwgKG9iai4kdGh1bWIgPyBvYmouJHRodW1iWzBdLnNyYyA6IG51bGwpO1xyXG5cclxuICAgICAgICAvLyBcImNhcHRpb25cIiBpcyBhIFwic3BlY2lhbFwiIG9wdGlvbiwgaXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIGNhcHRpb24gcGVyIGdhbGxlcnkgaXRlbVxyXG4gICAgICAgIGlmICgkLnR5cGUob2JqLm9wdHMuY2FwdGlvbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgb2JqLm9wdHMuY2FwdGlvbiA9IG9iai5vcHRzLmNhcHRpb24uYXBwbHkoaXRlbSwgW3NlbGYsIG9ial0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQudHlwZShzZWxmLm9wdHMuY2FwdGlvbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgb2JqLm9wdHMuY2FwdGlvbiA9IHNlbGYub3B0cy5jYXB0aW9uLmFwcGx5KGl0ZW0sIFtzZWxmLCBvYmpdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGNhcHRpb24gYXMgYSBzdHJpbmcgb3IgalF1ZXJ5IG9iamVjdFxyXG4gICAgICAgIGlmICghKG9iai5vcHRzLmNhcHRpb24gaW5zdGFuY2VvZiAkKSkge1xyXG4gICAgICAgICAgb2JqLm9wdHMuY2FwdGlvbiA9IG9iai5vcHRzLmNhcHRpb24gPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBvYmoub3B0cy5jYXB0aW9uICsgXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHVybCBjb250YWlucyBcImZpbHRlclwiIHVzZWQgdG8gZmlsdGVyIHRoZSBjb250ZW50XHJcbiAgICAgICAgLy8gRXhhbXBsZTogXCJhamF4Lmh0bWwgI3NvbWV0aGluZ1wiXHJcbiAgICAgICAgaWYgKG9iai50eXBlID09PSBcImFqYXhcIikge1xyXG4gICAgICAgICAgc3JjUGFydHMgPSBzcmMuc3BsaXQoL1xccysvLCAyKTtcclxuXHJcbiAgICAgICAgICBpZiAoc3JjUGFydHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBvYmouc3JjID0gc3JjUGFydHMuc2hpZnQoKTtcclxuXHJcbiAgICAgICAgICAgIG9iai5vcHRzLmZpbHRlciA9IHNyY1BhcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCBidXR0b25zIGFuZCBkaXNhYmxlIGludGVyYWN0aXZpdHkgZm9yIG1vZGFsIGl0ZW1zXHJcbiAgICAgICAgaWYgKG9iai5vcHRzLm1vZGFsKSB7XHJcbiAgICAgICAgICBvYmoub3B0cyA9ICQuZXh0ZW5kKHRydWUsIG9iai5vcHRzLCB7XHJcbiAgICAgICAgICAgIHRyYXBGb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGJ1dHRvbnNcclxuICAgICAgICAgICAgaW5mb2JhcjogMCxcclxuICAgICAgICAgICAgdG9vbGJhcjogMCxcclxuXHJcbiAgICAgICAgICAgIHNtYWxsQnRuOiAwLFxyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGtleWJvYXJkOiAwLFxyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBzb21lIG1vZHVsZXNcclxuICAgICAgICAgICAgc2xpZGVTaG93OiAwLFxyXG4gICAgICAgICAgICBmdWxsU2NyZWVuOiAwLFxyXG4gICAgICAgICAgICB0aHVtYnM6IDAsXHJcbiAgICAgICAgICAgIHRvdWNoOiAwLFxyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBjbGljayBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICAgICBjbGlja0NvbnRlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGlja1NsaWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xpY2tPdXRzaWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgZGJsY2xpY2tDb250ZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZGJsY2xpY2tTbGlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRibGNsaWNrT3V0c2lkZTogZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3RlcCA0IC0gQWRkIHByb2Nlc3NlZCBvYmplY3QgdG8gZ3JvdXBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBzZWxmLmdyb3VwLnB1c2gob2JqKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgY29udHJvbHMgaWYgZ2FsbGVyeSBpcyBhbHJlYWR5IG9wZW5lZFxyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoc2VsZi5zbGlkZXMpLmxlbmd0aCkge1xyXG4gICAgICAgIHNlbGYudXBkYXRlQ29udHJvbHMoKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRodW1ibmFpbHMsIGlmIG5lZWRlZFxyXG4gICAgICAgIHRodW1icyA9IHNlbGYuVGh1bWJzO1xyXG5cclxuICAgICAgICBpZiAodGh1bWJzICYmIHRodW1icy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgdGh1bWJzLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAgIHRodW1icy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBBdHRhY2ggYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbnMgZm9yOlxyXG4gICAgLy8gICAtIG5hdmlnYXRpb24gYnV0dG9uc1xyXG4gICAgLy8gICAtIGJyb3dzZXIgc2Nyb2xsaW5nLCByZXNpemluZztcclxuICAgIC8vICAgLSBmb2N1c2luZ1xyXG4gICAgLy8gICAtIGtleWJvYXJkXHJcbiAgICAvLyAgIC0gZGV0ZWN0aW5nIGluYWN0aXZpdHlcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgYWRkRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIHNlbGYucmVtb3ZlRXZlbnRzKCk7XHJcblxyXG4gICAgICAvLyBNYWtlIG5hdmlnYXRpb24gZWxlbWVudHMgY2xpY2thYmxlXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyXHJcbiAgICAgICAgLm9uKFwiY2xpY2suZmItY2xvc2VcIiwgXCJbZGF0YS1mYW5jeWJveC1jbG9zZV1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgc2VsZi5jbG9zZShlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcInRvdWNoc3RhcnQuZmItcHJldiBjbGljay5mYi1wcmV2XCIsIFwiW2RhdGEtZmFuY3lib3gtcHJldl1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgc2VsZi5wcmV2aW91cygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwidG91Y2hzdGFydC5mYi1uZXh0IGNsaWNrLmZiLW5leHRcIiwgXCJbZGF0YS1mYW5jeWJveC1uZXh0XVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBzZWxmLm5leHQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcImNsaWNrLmZiXCIsIFwiW2RhdGEtZmFuY3lib3gtem9vbV1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIC8vIENsaWNrIGhhbmRsZXIgZm9yIHpvb20gYnV0dG9uXHJcbiAgICAgICAgICBzZWxmW3NlbGYuaXNTY2FsZWREb3duKCkgPyBcInNjYWxlVG9BY3R1YWxcIiA6IFwic2NhbGVUb0ZpdFwiXSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIHBhZ2Ugc2Nyb2xsaW5nIGFuZCBicm93c2VyIHJlc2l6aW5nXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgJFcub24oXCJvcmllbnRhdGlvbmNoYW5nZS5mYiByZXNpemUuZmJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZSAmJiBlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LnR5cGUgPT09IFwicmVzaXplXCIpIHtcclxuICAgICAgICAgIGlmIChzZWxmLnJlcXVlc3RJZCkge1xyXG4gICAgICAgICAgICBjYW5jZWxBRnJhbWUoc2VsZi5yZXF1ZXN0SWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNlbGYucmVxdWVzdElkID0gcmVxdWVzdEFGcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzZWxmLmN1cnJlbnQgJiYgc2VsZi5jdXJyZW50LnR5cGUgPT09IFwiaWZyYW1lXCIpIHtcclxuICAgICAgICAgICAgc2VsZi4kcmVmcy5zdGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHNlbGYuJHJlZnMuc3RhZ2Uuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICBzZWxmLnVwZGF0ZShlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJC5mYW5jeWJveC5pc01vYmlsZSA/IDYwMCA6IDI1MFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJEQub24oXCJrZXlkb3duLmZiXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gJC5mYW5jeWJveCA/ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKSA6IG51bGwsXHJcbiAgICAgICAgICBjdXJyZW50ID0gaW5zdGFuY2UuY3VycmVudCxcclxuICAgICAgICAgIGtleWNvZGUgPSBlLmtleUNvZGUgfHwgZS53aGljaDtcclxuXHJcbiAgICAgICAgLy8gVHJhcCBrZXlib2FyZCBmb2N1cyBpbnNpZGUgb2YgdGhlIG1vZGFsXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGlmIChrZXljb2RlID09IDkpIHtcclxuICAgICAgICAgIGlmIChjdXJyZW50Lm9wdHMudHJhcEZvY3VzKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZm9jdXMoZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRW5hYmxlIGtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBpZiAoIWN1cnJlbnQub3B0cy5rZXlib2FyZCB8fCBlLmN0cmxLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleSB8fCAkKGUudGFyZ2V0KS5pcyhcImlucHV0LHRleHRhcmVhLHZpZGVvLGF1ZGlvLHNlbGVjdFwiKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQmFja3NwYWNlIGFuZCBFc2Mga2V5c1xyXG4gICAgICAgIGlmIChrZXljb2RlID09PSA4IHx8IGtleWNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgc2VsZi5jbG9zZShlKTtcclxuXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMZWZ0IGFycm93IGFuZCBVcCBhcnJvd1xyXG4gICAgICAgIGlmIChrZXljb2RlID09PSAzNyB8fCBrZXljb2RlID09PSAzOCkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIHNlbGYucHJldmlvdXMoKTtcclxuXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSaWdoIGFycm93IGFuZCBEb3duIGFycm93XHJcbiAgICAgICAgaWYgKGtleWNvZGUgPT09IDM5IHx8IGtleWNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgc2VsZi5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi50cmlnZ2VyKFwiYWZ0ZXJLZXlkb3duXCIsIGUsIGtleWNvZGUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEhpZGUgY29udHJvbHMgYWZ0ZXIgc29tZSBpbmFjdGl2aXR5IHBlcmlvZFxyXG4gICAgICBpZiAoc2VsZi5ncm91cFtzZWxmLmN1cnJJbmRleF0ub3B0cy5pZGxlVGltZSkge1xyXG4gICAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgJEQub24oXHJcbiAgICAgICAgICBcIm1vdXNlbW92ZS5mYi1pZGxlIG1vdXNlbGVhdmUuZmItaWRsZSBtb3VzZWRvd24uZmItaWRsZSB0b3VjaHN0YXJ0LmZiLWlkbGUgdG91Y2htb3ZlLmZiLWlkbGUgc2Nyb2xsLmZiLWlkbGUga2V5ZG93bi5mYi1pZGxlXCIsXHJcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmlkbGVTZWNvbmRzQ291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc0lkbGUpIHtcclxuICAgICAgICAgICAgICBzZWxmLnNob3dDb250cm9scygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLmlzSWRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNlbGYuaWRsZUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyKys7XHJcblxyXG4gICAgICAgICAgaWYgKHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID49IHNlbGYuZ3JvdXBbc2VsZi5jdXJySW5kZXhdLm9wdHMuaWRsZVRpbWUgJiYgIXNlbGYuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICBzZWxmLmlzSWRsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuaGlkZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gUmVtb3ZlIGV2ZW50cyBhZGRlZCBieSB0aGUgY29yZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJlbW92ZUV2ZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAkVy5vZmYoXCJvcmllbnRhdGlvbmNoYW5nZS5mYiByZXNpemUuZmJcIik7XHJcbiAgICAgICRELm9mZihcImtleWRvd24uZmIgLmZiLWlkbGVcIik7XHJcblxyXG4gICAgICB0aGlzLiRyZWZzLmNvbnRhaW5lci5vZmYoXCIuZmItY2xvc2UgLmZiLXByZXYgLmZiLW5leHRcIik7XHJcblxyXG4gICAgICBpZiAoc2VsZi5pZGxlSW50ZXJ2YWwpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChzZWxmLmlkbGVJbnRlcnZhbCk7XHJcblxyXG4gICAgICAgIHNlbGYuaWRsZUludGVydmFsID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDaGFuZ2UgdG8gcHJldmlvdXMgZ2FsbGVyeSBpdGVtXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcHJldmlvdXM6IGZ1bmN0aW9uIChkdXJhdGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5qdW1wVG8odGhpcy5jdXJyUG9zIC0gMSwgZHVyYXRpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDaGFuZ2UgdG8gbmV4dCBnYWxsZXJ5IGl0ZW1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIG5leHQ6IGZ1bmN0aW9uIChkdXJhdGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5qdW1wVG8odGhpcy5jdXJyUG9zICsgMSwgZHVyYXRpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBTd2l0Y2ggdG8gc2VsZWN0ZWQgZ2FsbGVyeSBpdGVtXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAganVtcFRvOiBmdW5jdGlvbiAocG9zLCBkdXJhdGlvbikge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZ3JvdXBMZW4gPSBzZWxmLmdyb3VwLmxlbmd0aCxcclxuICAgICAgICBmaXJzdFJ1bixcclxuICAgICAgICBpc01vdmVkLFxyXG4gICAgICAgIGxvb3AsXHJcbiAgICAgICAgY3VycmVudCxcclxuICAgICAgICBwcmV2aW91cyxcclxuICAgICAgICBzbGlkZVBvcyxcclxuICAgICAgICBzdGFnZVBvcyxcclxuICAgICAgICBwcm9wLFxyXG4gICAgICAgIGRpZmY7XHJcblxyXG4gICAgICBpZiAoc2VsZi5pc0RyYWdnaW5nIHx8IHNlbGYuaXNDbG9zaW5nIHx8IChzZWxmLmlzQW5pbWF0aW5nICYmIHNlbGYuZmlyc3RSdW4pKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTaG91bGQgbG9vcD9cclxuICAgICAgcG9zID0gcGFyc2VJbnQocG9zLCAxMCk7XHJcbiAgICAgIGxvb3AgPSBzZWxmLmN1cnJlbnQgPyBzZWxmLmN1cnJlbnQub3B0cy5sb29wIDogc2VsZi5vcHRzLmxvb3A7XHJcblxyXG4gICAgICBpZiAoIWxvb3AgJiYgKHBvcyA8IDAgfHwgcG9zID49IGdyb3VwTGVuKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgb3BlbmluZyBmb3IgdGhlIGZpcnN0IHRpbWU7IHRoaXMgaGVscHMgdG8gc3BlZWQgdGhpbmdzIHVwXHJcbiAgICAgIGZpcnN0UnVuID0gc2VsZi5maXJzdFJ1biA9ICFPYmplY3Qua2V5cyhzZWxmLnNsaWRlcykubGVuZ3RoO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIHNsaWRlc1xyXG4gICAgICBwcmV2aW91cyA9IHNlbGYuY3VycmVudDtcclxuXHJcbiAgICAgIHNlbGYucHJldkluZGV4ID0gc2VsZi5jdXJySW5kZXg7XHJcbiAgICAgIHNlbGYucHJldlBvcyA9IHNlbGYuY3VyclBvcztcclxuXHJcbiAgICAgIGN1cnJlbnQgPSBzZWxmLmNyZWF0ZVNsaWRlKHBvcyk7XHJcblxyXG4gICAgICBpZiAoZ3JvdXBMZW4gPiAxKSB7XHJcbiAgICAgICAgaWYgKGxvb3AgfHwgY3VycmVudC5pbmRleCA8IGdyb3VwTGVuIC0gMSkge1xyXG4gICAgICAgICAgc2VsZi5jcmVhdGVTbGlkZShwb3MgKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsb29wIHx8IGN1cnJlbnQuaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICBzZWxmLmNyZWF0ZVNsaWRlKHBvcyAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgc2VsZi5jdXJySW5kZXggPSBjdXJyZW50LmluZGV4O1xyXG4gICAgICBzZWxmLmN1cnJQb3MgPSBjdXJyZW50LnBvcztcclxuXHJcbiAgICAgIHNlbGYudHJpZ2dlcihcImJlZm9yZVNob3dcIiwgZmlyc3RSdW4pO1xyXG5cclxuICAgICAgc2VsZi51cGRhdGVDb250cm9scygpO1xyXG5cclxuICAgICAgLy8gVmFsaWRhdGUgZHVyYXRpb24gbGVuZ3RoXHJcbiAgICAgIGN1cnJlbnQuZm9yY2VkRHVyYXRpb24gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICBpZiAoJC5pc051bWVyaWMoZHVyYXRpb24pKSB7XHJcbiAgICAgICAgY3VycmVudC5mb3JjZWREdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGR1cmF0aW9uID0gY3VycmVudC5vcHRzW2ZpcnN0UnVuID8gXCJhbmltYXRpb25EdXJhdGlvblwiIDogXCJ0cmFuc2l0aW9uRHVyYXRpb25cIl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGR1cmF0aW9uID0gcGFyc2VJbnQoZHVyYXRpb24sIDEwKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIHN3aXBlZCB0aGUgc2xpZGVzIG9yIGlmIHN0aWxsIGFuaW1hdGluZ1xyXG4gICAgICBpc01vdmVkID0gc2VsZi5pc01vdmVkKGN1cnJlbnQpO1xyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIGN1cnJlbnQgc2xpZGUgaXMgdmlzaWJsZVxyXG4gICAgICBjdXJyZW50LiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIpO1xyXG5cclxuICAgICAgLy8gRnJlc2ggc3RhcnQgLSByZXZlYWwgY29udGFpbmVyLCBjdXJyZW50IHNsaWRlIGFuZCBzdGFydCBsb2FkaW5nIGNvbnRlbnRcclxuICAgICAgaWYgKGZpcnN0UnVuKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQub3B0cy5hbmltYXRpb25FZmZlY3QgJiYgZHVyYXRpb24pIHtcclxuICAgICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgZHVyYXRpb24gKyBcIm1zXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1vcGVuXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuXHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBsb2FkIGNvbnRlbnQgaW50byBzbGlkZVxyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBsYXRlciBjYWxsIGBhZnRlckxvYWRgIC0+IGByZXZlYWxDb250ZW50YFxyXG4gICAgICAgIHNlbGYubG9hZFNsaWRlKGN1cnJlbnQpO1xyXG5cclxuICAgICAgICBzZWxmLnByZWxvYWQoXCJpbWFnZVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZXQgYWN0dWFsIHNsaWRlL3N0YWdlIHBvc2l0aW9ucyAoYmVmb3JlIGNsZWFuaW5nIHVwKVxyXG4gICAgICBzbGlkZVBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHByZXZpb3VzLiRzbGlkZSk7XHJcbiAgICAgIHN0YWdlUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoc2VsZi4kcmVmcy5zdGFnZSk7XHJcblxyXG4gICAgICAvLyBDbGVhbiB1cCBhbGwgc2xpZGVzXHJcbiAgICAgICQuZWFjaChzZWxmLnNsaWRlcywgZnVuY3Rpb24gKGluZGV4LCBzbGlkZSkge1xyXG4gICAgICAgICQuZmFuY3lib3guc3RvcChzbGlkZS4kc2xpZGUsIHRydWUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChwcmV2aW91cy5wb3MgIT09IGN1cnJlbnQucG9zKSB7XHJcbiAgICAgICAgcHJldmlvdXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcmV2aW91cy4kc2xpZGUucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY29tcGxldGUgZmFuY3lib3gtc2xpZGUtLWN1cnJlbnRcIik7XHJcblxyXG4gICAgICAvLyBJZiBzbGlkZXMgYXJlIG91dCBvZiBwbGFjZSwgdGhlbiBhbmltYXRlIHRoZW0gdG8gY29ycmVjdCBwb3NpdGlvblxyXG4gICAgICBpZiAoaXNNb3ZlZCkge1xyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBob3Jpem9udGFsIHN3aXBlIGRpc3RhbmNlXHJcbiAgICAgICAgZGlmZiA9IHNsaWRlUG9zLmxlZnQgLSAocHJldmlvdXMucG9zICogc2xpZGVQb3Mud2lkdGggKyBwcmV2aW91cy5wb3MgKiBwcmV2aW91cy5vcHRzLmd1dHRlcik7XHJcblxyXG4gICAgICAgICQuZWFjaChzZWxmLnNsaWRlcywgZnVuY3Rpb24gKGluZGV4LCBzbGlkZSkge1xyXG4gICAgICAgICAgc2xpZGUuJHNsaWRlLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYW5pbWF0ZWRcIikucmVtb3ZlQ2xhc3MoZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2goLyhefFxccylmYW5jeWJveC1meC1cXFMrL2cpIHx8IFtdKS5qb2luKFwiIFwiKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGVhY2ggc2xpZGUgaXMgaW4gZXF1YWwgZGlzdGFuY2VcclxuICAgICAgICAgIC8vIFRoaXMgaXMgbW9zdGx5IG5lZWRlZCBmb3IgZnJlc2hseSBhZGRlZCBzbGlkZXMsIGJlY2F1c2UgdGhleSBhcmUgbm90IHlldCBwb3NpdGlvbmVkXHJcbiAgICAgICAgICB2YXIgbGVmdFBvcyA9IHNsaWRlLnBvcyAqIHNsaWRlUG9zLndpZHRoICsgc2xpZGUucG9zICogc2xpZGUub3B0cy5ndXR0ZXI7XHJcblxyXG4gICAgICAgICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoc2xpZGUuJHNsaWRlLCB7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogbGVmdFBvcyAtIHN0YWdlUG9zLmxlZnQgKyBkaWZmXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2xpZGUucG9zICE9PSBjdXJyZW50LnBvcykge1xyXG4gICAgICAgICAgICBzbGlkZS4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tXCIgKyAoc2xpZGUucG9zID4gY3VycmVudC5wb3MgPyBcIm5leHRcIiA6IFwicHJldmlvdXNcIikpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFJlZHJhdyB0byBtYWtlIHN1cmUgdGhhdCB0cmFuc2l0aW9uIHdpbGwgc3RhcnRcclxuICAgICAgICAgIGZvcmNlUmVkcmF3KHNsaWRlLiRzbGlkZSk7XHJcblxyXG4gICAgICAgICAgLy8gQW5pbWF0ZSB0aGUgc2xpZGVcclxuICAgICAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICAgICAgc2xpZGUuJHNsaWRlLCB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IChzbGlkZS5wb3MgLSBjdXJyZW50LnBvcykgKiBzbGlkZVBvcy53aWR0aCArIChzbGlkZS5wb3MgLSBjdXJyZW50LnBvcykgKiBzbGlkZS5vcHRzLmd1dHRlclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHNsaWRlLiRzbGlkZVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1uZXh0IGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGR1cmF0aW9uICYmIGN1cnJlbnQub3B0cy50cmFuc2l0aW9uRWZmZWN0KSB7XHJcbiAgICAgICAgLy8gU2V0IHRyYW5zaXRpb24gZWZmZWN0IGZvciBwcmV2aW91c2x5IGFjdGl2ZSBzbGlkZVxyXG4gICAgICAgIHByb3AgPSBcImZhbmN5Ym94LWFuaW1hdGVkIGZhbmN5Ym94LWZ4LVwiICsgY3VycmVudC5vcHRzLnRyYW5zaXRpb25FZmZlY3Q7XHJcblxyXG4gICAgICAgIHByZXZpb3VzLiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1cIiArIChwcmV2aW91cy5wb3MgPiBjdXJyZW50LnBvcyA/IFwibmV4dFwiIDogXCJwcmV2aW91c1wiKSk7XHJcblxyXG4gICAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICAgIHByZXZpb3VzLiRzbGlkZSxcclxuICAgICAgICAgIHByb3AsXHJcbiAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcHJldmlvdXMuJHNsaWRlLnJlbW92ZUNsYXNzKHByb3ApLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnQuaXNMb2FkZWQpIHtcclxuICAgICAgICBzZWxmLnJldmVhbENvbnRlbnQoY3VycmVudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5sb2FkU2xpZGUoY3VycmVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYucHJlbG9hZChcImltYWdlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDcmVhdGUgbmV3IFwic2xpZGVcIiBlbGVtZW50XHJcbiAgICAvLyBUaGVzZSBhcmUgZ2FsbGVyeSBpdGVtcyAgdGhhdCBhcmUgYWN0dWFsbHkgYWRkZWQgdG8gRE9NXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgY3JlYXRlU2xpZGU6IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICRzbGlkZSxcclxuICAgICAgICBpbmRleDtcclxuXHJcbiAgICAgIGluZGV4ID0gcG9zICUgc2VsZi5ncm91cC5sZW5ndGg7XHJcbiAgICAgIGluZGV4ID0gaW5kZXggPCAwID8gc2VsZi5ncm91cC5sZW5ndGggKyBpbmRleCA6IGluZGV4O1xyXG5cclxuICAgICAgaWYgKCFzZWxmLnNsaWRlc1twb3NdICYmIHNlbGYuZ3JvdXBbaW5kZXhdKSB7XHJcbiAgICAgICAgJHNsaWRlID0gJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXNsaWRlXCI+PC9kaXY+JykuYXBwZW5kVG8oc2VsZi4kcmVmcy5zdGFnZSk7XHJcblxyXG4gICAgICAgIHNlbGYuc2xpZGVzW3Bvc10gPSAkLmV4dGVuZCh0cnVlLCB7fSwgc2VsZi5ncm91cFtpbmRleF0sIHtcclxuICAgICAgICAgIHBvczogcG9zLFxyXG4gICAgICAgICAgJHNsaWRlOiAkc2xpZGUsXHJcbiAgICAgICAgICBpc0xvYWRlZDogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi51cGRhdGVTbGlkZShzZWxmLnNsaWRlc1twb3NdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHNlbGYuc2xpZGVzW3Bvc107XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFNjYWxlIGltYWdlIHRvIHRoZSBhY3R1YWwgc2l6ZSBvZiB0aGUgaW1hZ2U7XHJcbiAgICAvLyB4IGFuZCB5IHZhbHVlcyBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIHNsaWRlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2NhbGVUb0FjdHVhbDogZnVuY3Rpb24gKHgsIHksIGR1cmF0aW9uKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBjdXJyZW50ID0gc2VsZi5jdXJyZW50LFxyXG4gICAgICAgICRjb250ZW50ID0gY3VycmVudC4kY29udGVudCxcclxuICAgICAgICBjYW52YXNXaWR0aCA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKGN1cnJlbnQuJHNsaWRlKS53aWR0aCxcclxuICAgICAgICBjYW52YXNIZWlnaHQgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShjdXJyZW50LiRzbGlkZSkuaGVpZ2h0LFxyXG4gICAgICAgIG5ld0ltZ1dpZHRoID0gY3VycmVudC53aWR0aCxcclxuICAgICAgICBuZXdJbWdIZWlnaHQgPSBjdXJyZW50LmhlaWdodCxcclxuICAgICAgICBpbWdQb3MsXHJcbiAgICAgICAgcG9zWCxcclxuICAgICAgICBwb3NZLFxyXG4gICAgICAgIHNjYWxlWCxcclxuICAgICAgICBzY2FsZVk7XHJcblxyXG4gICAgICBpZiAoc2VsZi5pc0FuaW1hdGluZyB8fCBzZWxmLmlzTW92ZWQoKSB8fCAhJGNvbnRlbnQgfHwgIShjdXJyZW50LnR5cGUgPT0gXCJpbWFnZVwiICYmIGN1cnJlbnQuaXNMb2FkZWQgJiYgIWN1cnJlbnQuaGFzRXJyb3IpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLmlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICQuZmFuY3lib3guc3RvcCgkY29udGVudCk7XHJcblxyXG4gICAgICB4ID0geCA9PT0gdW5kZWZpbmVkID8gY2FudmFzV2lkdGggKiAwLjUgOiB4O1xyXG4gICAgICB5ID0geSA9PT0gdW5kZWZpbmVkID8gY2FudmFzSGVpZ2h0ICogMC41IDogeTtcclxuXHJcbiAgICAgIGltZ1BvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCRjb250ZW50KTtcclxuXHJcbiAgICAgIGltZ1Bvcy50b3AgLT0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoY3VycmVudC4kc2xpZGUpLnRvcDtcclxuICAgICAgaW1nUG9zLmxlZnQgLT0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoY3VycmVudC4kc2xpZGUpLmxlZnQ7XHJcblxyXG4gICAgICBzY2FsZVggPSBuZXdJbWdXaWR0aCAvIGltZ1Bvcy53aWR0aDtcclxuICAgICAgc2NhbGVZID0gbmV3SW1nSGVpZ2h0IC8gaW1nUG9zLmhlaWdodDtcclxuXHJcbiAgICAgIC8vIEdldCBjZW50ZXIgcG9zaXRpb24gZm9yIG9yaWdpbmFsIGltYWdlXHJcbiAgICAgIHBvc1ggPSBjYW52YXNXaWR0aCAqIDAuNSAtIG5ld0ltZ1dpZHRoICogMC41O1xyXG4gICAgICBwb3NZID0gY2FudmFzSGVpZ2h0ICogMC41IC0gbmV3SW1nSGVpZ2h0ICogMC41O1xyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIGltYWdlIGRvZXMgbm90IG1vdmUgYXdheSBmcm9tIGVkZ2VzXHJcbiAgICAgIGlmIChuZXdJbWdXaWR0aCA+IGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgICAgcG9zWCA9IGltZ1Bvcy5sZWZ0ICogc2NhbGVYIC0gKHggKiBzY2FsZVggLSB4KTtcclxuXHJcbiAgICAgICAgaWYgKHBvc1ggPiAwKSB7XHJcbiAgICAgICAgICBwb3NYID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwb3NYIDwgY2FudmFzV2lkdGggLSBuZXdJbWdXaWR0aCkge1xyXG4gICAgICAgICAgcG9zWCA9IGNhbnZhc1dpZHRoIC0gbmV3SW1nV2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmV3SW1nSGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgICAgcG9zWSA9IGltZ1Bvcy50b3AgKiBzY2FsZVkgLSAoeSAqIHNjYWxlWSAtIHkpO1xyXG5cclxuICAgICAgICBpZiAocG9zWSA+IDApIHtcclxuICAgICAgICAgIHBvc1kgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBvc1kgPCBjYW52YXNIZWlnaHQgLSBuZXdJbWdIZWlnaHQpIHtcclxuICAgICAgICAgIHBvc1kgPSBjYW52YXNIZWlnaHQgLSBuZXdJbWdIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnVwZGF0ZUN1cnNvcihuZXdJbWdXaWR0aCwgbmV3SW1nSGVpZ2h0KTtcclxuXHJcbiAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICAkY29udGVudCwge1xyXG4gICAgICAgICAgdG9wOiBwb3NZLFxyXG4gICAgICAgICAgbGVmdDogcG9zWCxcclxuICAgICAgICAgIHNjYWxlWDogc2NhbGVYLFxyXG4gICAgICAgICAgc2NhbGVZOiBzY2FsZVlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1cmF0aW9uIHx8IDM2NixcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZWxmLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gU3RvcCBzbGlkZXNob3dcclxuICAgICAgaWYgKHNlbGYuU2xpZGVTaG93ICYmIHNlbGYuU2xpZGVTaG93LmlzQWN0aXZlKSB7XHJcbiAgICAgICAgc2VsZi5TbGlkZVNob3cuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFNjYWxlIGltYWdlIHRvIGZpdCBpbnNpZGUgcGFyZW50IGVsZW1lbnRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBzY2FsZVRvRml0OiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXHJcbiAgICAgICAgJGNvbnRlbnQgPSBjdXJyZW50LiRjb250ZW50LFxyXG4gICAgICAgIGVuZDtcclxuXHJcbiAgICAgIGlmIChzZWxmLmlzQW5pbWF0aW5nIHx8IHNlbGYuaXNNb3ZlZCgpIHx8ICEkY29udGVudCB8fCAhKGN1cnJlbnQudHlwZSA9PSBcImltYWdlXCIgJiYgY3VycmVudC5pc0xvYWRlZCAmJiAhY3VycmVudC5oYXNFcnJvcikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgJC5mYW5jeWJveC5zdG9wKCRjb250ZW50KTtcclxuXHJcbiAgICAgIGVuZCA9IHNlbGYuZ2V0Rml0UG9zKGN1cnJlbnQpO1xyXG5cclxuICAgICAgc2VsZi51cGRhdGVDdXJzb3IoZW5kLndpZHRoLCBlbmQuaGVpZ2h0KTtcclxuXHJcbiAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICAkY29udGVudCwge1xyXG4gICAgICAgICAgdG9wOiBlbmQudG9wLFxyXG4gICAgICAgICAgbGVmdDogZW5kLmxlZnQsXHJcbiAgICAgICAgICBzY2FsZVg6IGVuZC53aWR0aCAvICRjb250ZW50LndpZHRoKCksXHJcbiAgICAgICAgICBzY2FsZVk6IGVuZC5oZWlnaHQgLyAkY29udGVudC5oZWlnaHQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVyYXRpb24gfHwgMzY2LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBpbWFnZSBzaXplIHRvIGZpdCBpbnNpZGUgdmlld3BvcnRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBnZXRGaXRQb3M6IGZ1bmN0aW9uIChzbGlkZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgJGNvbnRlbnQgPSBzbGlkZS4kY29udGVudCxcclxuICAgICAgICAkc2xpZGUgPSBzbGlkZS4kc2xpZGUsXHJcbiAgICAgICAgd2lkdGggPSBzbGlkZS53aWR0aCB8fCBzbGlkZS5vcHRzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodCA9IHNsaWRlLmhlaWdodCB8fCBzbGlkZS5vcHRzLmhlaWdodCxcclxuICAgICAgICBtYXhXaWR0aCxcclxuICAgICAgICBtYXhIZWlnaHQsXHJcbiAgICAgICAgbWluUmF0aW8sXHJcbiAgICAgICAgYXNwZWN0UmF0aW8sXHJcbiAgICAgICAgcmV6ID0ge307XHJcblxyXG4gICAgICBpZiAoIXNsaWRlLmlzTG9hZGVkIHx8ICEkY29udGVudCB8fCAhJGNvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXhXaWR0aCA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHNlbGYuJHJlZnMuc3RhZ2UpLndpZHRoO1xyXG4gICAgICBtYXhIZWlnaHQgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShzZWxmLiRyZWZzLnN0YWdlKS5oZWlnaHQ7XHJcblxyXG4gICAgICBtYXhXaWR0aCAtPVxyXG4gICAgICAgIHBhcnNlRmxvYXQoJHNsaWRlLmNzcyhcInBhZGRpbmdMZWZ0XCIpKSArXHJcbiAgICAgICAgcGFyc2VGbG9hdCgkc2xpZGUuY3NzKFwicGFkZGluZ1JpZ2h0XCIpKSArXHJcbiAgICAgICAgcGFyc2VGbG9hdCgkY29udGVudC5jc3MoXCJtYXJnaW5MZWZ0XCIpKSArXHJcbiAgICAgICAgcGFyc2VGbG9hdCgkY29udGVudC5jc3MoXCJtYXJnaW5SaWdodFwiKSk7XHJcblxyXG4gICAgICBtYXhIZWlnaHQgLT1cclxuICAgICAgICBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nVG9wXCIpKSArXHJcbiAgICAgICAgcGFyc2VGbG9hdCgkc2xpZGUuY3NzKFwicGFkZGluZ0JvdHRvbVwiKSkgK1xyXG4gICAgICAgIHBhcnNlRmxvYXQoJGNvbnRlbnQuY3NzKFwibWFyZ2luVG9wXCIpKSArXHJcbiAgICAgICAgcGFyc2VGbG9hdCgkY29udGVudC5jc3MoXCJtYXJnaW5Cb3R0b21cIikpO1xyXG5cclxuICAgICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XHJcbiAgICAgICAgd2lkdGggPSBtYXhXaWR0aDtcclxuICAgICAgICBoZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1pblJhdGlvID0gTWF0aC5taW4oMSwgbWF4V2lkdGggLyB3aWR0aCwgbWF4SGVpZ2h0IC8gaGVpZ2h0KTtcclxuXHJcbiAgICAgIHdpZHRoID0gbWluUmF0aW8gKiB3aWR0aDtcclxuICAgICAgaGVpZ2h0ID0gbWluUmF0aW8gKiBoZWlnaHQ7XHJcblxyXG4gICAgICAvLyBBZGp1c3Qgd2lkdGgvaGVpZ2h0IHRvIHByZWNpc2VseSBmaXQgaW50byBjb250YWluZXJcclxuICAgICAgaWYgKHdpZHRoID4gbWF4V2lkdGggLSAwLjUpIHtcclxuICAgICAgICB3aWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaGVpZ2h0ID4gbWF4SGVpZ2h0IC0gMC41KSB7XHJcbiAgICAgICAgaGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2xpZGUudHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcbiAgICAgICAgcmV6LnRvcCA9IE1hdGguZmxvb3IoKG1heEhlaWdodCAtIGhlaWdodCkgKiAwLjUpICsgcGFyc2VGbG9hdCgkc2xpZGUuY3NzKFwicGFkZGluZ1RvcFwiKSk7XHJcbiAgICAgICAgcmV6LmxlZnQgPSBNYXRoLmZsb29yKChtYXhXaWR0aCAtIHdpZHRoKSAqIDAuNSkgKyBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nTGVmdFwiKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2xpZGUuY29udGVudFR5cGUgPT09IFwidmlkZW9cIikge1xyXG4gICAgICAgIC8vIEZvcmNlIGFzcGVjdCByYXRpbyBmb3IgdGhlIHZpZGVvXHJcbiAgICAgICAgLy8gXCJJIHNheSB0aGUgd2hvbGUgd29ybGQgbXVzdCBsZWFybiBvZiBvdXIgcGVhY2VmdWwgd2F5c+KApiBieSBmb3JjZSFcIlxyXG4gICAgICAgIGFzcGVjdFJhdGlvID0gc2xpZGUub3B0cy53aWR0aCAmJiBzbGlkZS5vcHRzLmhlaWdodCA/IHdpZHRoIC8gaGVpZ2h0IDogc2xpZGUub3B0cy5yYXRpbyB8fCAxNiAvIDk7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgPiB3aWR0aCAvIGFzcGVjdFJhdGlvKSB7XHJcbiAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGggPiBoZWlnaHQgKiBhc3BlY3RSYXRpbykge1xyXG4gICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlei53aWR0aCA9IHdpZHRoO1xyXG4gICAgICByZXouaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgcmV0dXJuIHJlejtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXBkYXRlIGNvbnRlbnQgc2l6ZSBhbmQgcG9zaXRpb24gZm9yIGFsbCBzbGlkZXNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICQuZWFjaChzZWxmLnNsaWRlcywgZnVuY3Rpb24gKGtleSwgc2xpZGUpIHtcclxuICAgICAgICBzZWxmLnVwZGF0ZVNsaWRlKHNsaWRlLCBlKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVwZGF0ZSBzbGlkZSBjb250ZW50IHBvc2l0aW9uIGFuZCBzaXplXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHVwZGF0ZVNsaWRlOiBmdW5jdGlvbiAoc2xpZGUsIGUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICRjb250ZW50ID0gc2xpZGUgJiYgc2xpZGUuJGNvbnRlbnQsXHJcbiAgICAgICAgd2lkdGggPSBzbGlkZS53aWR0aCB8fCBzbGlkZS5vcHRzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodCA9IHNsaWRlLmhlaWdodCB8fCBzbGlkZS5vcHRzLmhlaWdodCxcclxuICAgICAgICAkc2xpZGUgPSBzbGlkZS4kc2xpZGU7XHJcblxyXG4gICAgICAvLyBGaXJzdCwgcHJldmVudCBjYXB0aW9uIG92ZXJsYXAsIGlmIG5lZWRlZFxyXG4gICAgICBzZWxmLmFkanVzdENhcHRpb24oc2xpZGUpO1xyXG5cclxuICAgICAgLy8gVGhlbiByZXNpemUgY29udGVudCB0byBmaXQgaW5zaWRlIHRoZSBzbGlkZVxyXG4gICAgICBpZiAoJGNvbnRlbnQgJiYgKHdpZHRoIHx8IGhlaWdodCB8fCBzbGlkZS5jb250ZW50VHlwZSA9PT0gXCJ2aWRlb1wiKSAmJiAhc2xpZGUuaGFzRXJyb3IpIHtcclxuICAgICAgICAkLmZhbmN5Ym94LnN0b3AoJGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSgkY29udGVudCwgc2VsZi5nZXRGaXRQb3Moc2xpZGUpKTtcclxuXHJcbiAgICAgICAgaWYgKHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zKSB7XHJcbiAgICAgICAgICBzZWxmLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgc2VsZi51cGRhdGVDdXJzb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZW4gc29tZSBhZGp1c3RtZW50c1xyXG4gICAgICBzZWxmLmFkanVzdExheW91dChzbGlkZSk7XHJcblxyXG4gICAgICBpZiAoJHNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgICRzbGlkZS50cmlnZ2VyKFwicmVmcmVzaFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zKSB7XHJcbiAgICAgICAgICBzZWxmLiRyZWZzLnRvb2xiYXJcclxuICAgICAgICAgICAgLmFkZChzZWxmLiRyZWZzLm5hdmlnYXRpb24uZmluZChcIi5mYW5jeWJveC1idXR0b24tLWFycm93X3JpZ2h0XCIpKVxyXG4gICAgICAgICAgICAudG9nZ2xlQ2xhc3MoXCJjb21wZW5zYXRlLWZvci1zY3JvbGxiYXJcIiwgJHNsaWRlLmdldCgwKS5zY3JvbGxIZWlnaHQgPiAkc2xpZGUuZ2V0KDApLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnRyaWdnZXIoXCJvblVwZGF0ZVwiLCBzbGlkZSwgZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEhvcml6b250YWxseSBjZW50ZXIgc2xpZGVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjZW50ZXJTbGlkZTogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBjdXJyZW50ID0gc2VsZi5jdXJyZW50LFxyXG4gICAgICAgICRzbGlkZSA9IGN1cnJlbnQuJHNsaWRlO1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXNDbG9zaW5nIHx8ICFjdXJyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2xpZGUuc2libGluZ3MoKS5jc3Moe1xyXG4gICAgICAgIHRyYW5zZm9ybTogXCJcIixcclxuICAgICAgICBvcGFjaXR5OiBcIlwiXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJHNsaWRlXHJcbiAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tcHJldmlvdXMgZmFuY3lib3gtc2xpZGUtLW5leHRcIik7XHJcblxyXG4gICAgICAkLmZhbmN5Ym94LmFuaW1hdGUoXHJcbiAgICAgICAgJHNsaWRlLCB7XHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IDAgOiBkdXJhdGlvbixcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBDbGVhbiB1cFxyXG4gICAgICAgICAgJHNsaWRlLmNzcyh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJcIixcclxuICAgICAgICAgICAgb3BhY2l0eTogXCJcIlxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFjdXJyZW50LmlzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCBzbGlkZSBpcyBtb3ZlZCAoc3dpcGVkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGlzTW92ZWQ6IGZ1bmN0aW9uIChzbGlkZSkge1xyXG4gICAgICB2YXIgY3VycmVudCA9IHNsaWRlIHx8IHRoaXMuY3VycmVudCxcclxuICAgICAgICBzbGlkZVBvcyxcclxuICAgICAgICBzdGFnZVBvcztcclxuXHJcbiAgICAgIGlmICghY3VycmVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhZ2VQb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZSh0aGlzLiRyZWZzLnN0YWdlKTtcclxuICAgICAgc2xpZGVQb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShjdXJyZW50LiRzbGlkZSk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICFjdXJyZW50LiRzbGlkZS5oYXNDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpICYmXHJcbiAgICAgICAgKE1hdGguYWJzKHNsaWRlUG9zLnRvcCAtIHN0YWdlUG9zLnRvcCkgPiAwLjUgfHwgTWF0aC5hYnMoc2xpZGVQb3MubGVmdCAtIHN0YWdlUG9zLmxlZnQpID4gMC41KVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVcGRhdGUgY3Vyc29yIHN0eWxlIGRlcGVuZGluZyBpZiBjb250ZW50IGNhbiBiZSB6b29tZWRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHVwZGF0ZUN1cnNvcjogZnVuY3Rpb24gKG5leHRXaWR0aCwgbmV4dEhlaWdodCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcclxuICAgICAgICAkY29udGFpbmVyID0gc2VsZi4kcmVmcy5jb250YWluZXIsXHJcbiAgICAgICAgY2FuUGFuLFxyXG4gICAgICAgIGlzWm9vbWFibGU7XHJcblxyXG4gICAgICBpZiAoIWN1cnJlbnQgfHwgc2VsZi5pc0Nsb3NpbmcgfHwgIXNlbGYuR3Vlc3R1cmVzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtem9vbWFibGUgZmFuY3lib3gtY2FuLXpvb21JbiBmYW5jeWJveC1jYW4tem9vbU91dCBmYW5jeWJveC1jYW4tc3dpcGUgZmFuY3lib3gtY2FuLXBhblwiKTtcclxuXHJcbiAgICAgIGNhblBhbiA9IHNlbGYuY2FuUGFuKG5leHRXaWR0aCwgbmV4dEhlaWdodCk7XHJcblxyXG4gICAgICBpc1pvb21hYmxlID0gY2FuUGFuID8gdHJ1ZSA6IHNlbGYuaXNab29tYWJsZSgpO1xyXG5cclxuICAgICAgJGNvbnRhaW5lci50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWlzLXpvb21hYmxlXCIsIGlzWm9vbWFibGUpO1xyXG5cclxuICAgICAgJChcIltkYXRhLWZhbmN5Ym94LXpvb21dXCIpLnByb3AoXCJkaXNhYmxlZFwiLCAhaXNab29tYWJsZSk7XHJcblxyXG4gICAgICBpZiAoY2FuUGFuKSB7XHJcbiAgICAgICAgJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWNhbi1wYW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgaXNab29tYWJsZSAmJlxyXG4gICAgICAgIChjdXJyZW50Lm9wdHMuY2xpY2tDb250ZW50ID09PSBcInpvb21cIiB8fCAoJC5pc0Z1bmN0aW9uKGN1cnJlbnQub3B0cy5jbGlja0NvbnRlbnQpICYmIGN1cnJlbnQub3B0cy5jbGlja0NvbnRlbnQoY3VycmVudCkgPT0gXCJ6b29tXCIpKVxyXG4gICAgICApIHtcclxuICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKFwiZmFuY3lib3gtY2FuLXpvb21JblwiKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm9wdHMudG91Y2ggJiYgKGN1cnJlbnQub3B0cy50b3VjaC52ZXJ0aWNhbCB8fCBzZWxmLmdyb3VwLmxlbmd0aCA+IDEpICYmIGN1cnJlbnQuY29udGVudFR5cGUgIT09IFwidmlkZW9cIikge1xyXG4gICAgICAgICRjb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1jYW4tc3dpcGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCBzbGlkZSBpcyB6b29tYWJsZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGlzWm9vbWFibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXHJcbiAgICAgICAgZml0UG9zO1xyXG5cclxuICAgICAgLy8gQXNzdW1lIHRoYXQgc2xpZGUgaXMgem9vbWFibGUgaWY6XHJcbiAgICAgIC8vICAgLSBpbWFnZSBpcyBzdGlsbCBsb2FkaW5nXHJcbiAgICAgIC8vICAgLSBhY3R1YWwgc2l6ZSBvZiB0aGUgaW1hZ2UgaXMgc21hbGxlciB0aGFuIGF2YWlsYWJsZSBhcmVhXHJcbiAgICAgIGlmIChjdXJyZW50ICYmICFzZWxmLmlzQ2xvc2luZyAmJiBjdXJyZW50LnR5cGUgPT09IFwiaW1hZ2VcIiAmJiAhY3VycmVudC5oYXNFcnJvcikge1xyXG4gICAgICAgIGlmICghY3VycmVudC5pc0xvYWRlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaXRQb3MgPSBzZWxmLmdldEZpdFBvcyhjdXJyZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGZpdFBvcyAmJiAoY3VycmVudC53aWR0aCA+IGZpdFBvcy53aWR0aCB8fCBjdXJyZW50LmhlaWdodCA+IGZpdFBvcy5oZWlnaHQpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCBpbWFnZSBkaW1lbnNpb25zIGFyZSBzbWFsbGVyIHRoYW4gYWN0dWFsXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBpc1NjYWxlZERvd246IGZ1bmN0aW9uIChuZXh0V2lkdGgsIG5leHRIZWlnaHQpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIHJleiA9IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXHJcbiAgICAgICAgJGNvbnRlbnQgPSBjdXJyZW50LiRjb250ZW50O1xyXG5cclxuICAgICAgaWYgKG5leHRXaWR0aCAhPT0gdW5kZWZpbmVkICYmIG5leHRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJleiA9IG5leHRXaWR0aCA8IGN1cnJlbnQud2lkdGggJiYgbmV4dEhlaWdodCA8IGN1cnJlbnQuaGVpZ2h0O1xyXG4gICAgICB9IGVsc2UgaWYgKCRjb250ZW50KSB7XHJcbiAgICAgICAgcmV6ID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoJGNvbnRlbnQpO1xyXG4gICAgICAgIHJleiA9IHJlei53aWR0aCA8IGN1cnJlbnQud2lkdGggJiYgcmV6LmhlaWdodCA8IGN1cnJlbnQuaGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV6O1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbWFnZSBkaW1lbnNpb25zIGV4Y2VlZCBwYXJlbnQgZWxlbWVudFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjYW5QYW46IGZ1bmN0aW9uIChuZXh0V2lkdGgsIG5leHRIZWlnaHQpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXHJcbiAgICAgICAgcG9zID0gbnVsbCxcclxuICAgICAgICByZXogPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09IFwiaW1hZ2VcIiAmJiAoY3VycmVudC5pc0NvbXBsZXRlIHx8IChuZXh0V2lkdGggJiYgbmV4dEhlaWdodCkpICYmICFjdXJyZW50Lmhhc0Vycm9yKSB7XHJcbiAgICAgICAgcmV6ID0gc2VsZi5nZXRGaXRQb3MoY3VycmVudCk7XHJcblxyXG4gICAgICAgIGlmIChuZXh0V2lkdGggIT09IHVuZGVmaW5lZCAmJiBuZXh0SGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHBvcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IG5leHRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBuZXh0SGVpZ2h0XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5pc0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICBwb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShjdXJyZW50LiRjb250ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwb3MgJiYgcmV6KSB7XHJcbiAgICAgICAgICByZXogPSBNYXRoLmFicyhwb3Mud2lkdGggLSByZXoud2lkdGgpID4gMS41IHx8IE1hdGguYWJzKHBvcy5oZWlnaHQgLSByZXouaGVpZ2h0KSA+IDEuNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXo7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExvYWQgY29udGVudCBpbnRvIHRoZSBzbGlkZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbG9hZFNsaWRlOiBmdW5jdGlvbiAoc2xpZGUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgJHNsaWRlLFxyXG4gICAgICAgIGFqYXhMb2FkO1xyXG5cclxuICAgICAgaWYgKHNsaWRlLmlzTG9hZGluZyB8fCBzbGlkZS5pc0xvYWRlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2xpZGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmIChzZWxmLnRyaWdnZXIoXCJiZWZvcmVMb2FkXCIsIHNsaWRlKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBzbGlkZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0eXBlID0gc2xpZGUudHlwZTtcclxuICAgICAgJHNsaWRlID0gc2xpZGUuJHNsaWRlO1xyXG5cclxuICAgICAgJHNsaWRlXHJcbiAgICAgICAgLm9mZihcInJlZnJlc2hcIilcclxuICAgICAgICAudHJpZ2dlcihcIm9uUmVzZXRcIilcclxuICAgICAgICAuYWRkQ2xhc3Moc2xpZGUub3B0cy5zbGlkZUNsYXNzKTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBjb250ZW50IGRlcGVuZGluZyBvbiB0aGUgdHlwZVxyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcclxuICAgICAgICAgIHNlbGYuc2V0SW1hZ2Uoc2xpZGUpO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiaWZyYW1lXCI6XHJcbiAgICAgICAgICBzZWxmLnNldElmcmFtZShzbGlkZSk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJodG1sXCI6XHJcbiAgICAgICAgICBzZWxmLnNldENvbnRlbnQoc2xpZGUsIHNsaWRlLnNyYyB8fCBzbGlkZS5jb250ZW50KTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcInZpZGVvXCI6XHJcbiAgICAgICAgICBzZWxmLnNldENvbnRlbnQoXHJcbiAgICAgICAgICAgIHNsaWRlLFxyXG4gICAgICAgICAgICBzbGlkZS5vcHRzLnZpZGVvLnRwbFxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx7XFx7c3JjXFx9XFx9L2dpLCBzbGlkZS5zcmMpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKFwie3tmb3JtYXR9fVwiLCBzbGlkZS5vcHRzLnZpZGVvRm9ybWF0IHx8IHNsaWRlLm9wdHMudmlkZW8uZm9ybWF0IHx8IFwiXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKFwie3twb3N0ZXJ9fVwiLCBzbGlkZS50aHVtYiB8fCBcIlwiKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcImlubGluZVwiOlxyXG4gICAgICAgICAgaWYgKCQoc2xpZGUuc3JjKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZi5zZXRDb250ZW50KHNsaWRlLCAkKHNsaWRlLnNyYykpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5zZXRFcnJvcihzbGlkZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJhamF4XCI6XHJcbiAgICAgICAgICBzZWxmLnNob3dMb2FkaW5nKHNsaWRlKTtcclxuXHJcbiAgICAgICAgICBhamF4TG9hZCA9ICQuYWpheChcclxuICAgICAgICAgICAgJC5leHRlbmQoe30sIHNsaWRlLm9wdHMuYWpheC5zZXR0aW5ncywge1xyXG4gICAgICAgICAgICAgIHVybDogc2xpZGUuc3JjLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dFN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5zZXRDb250ZW50KHNsaWRlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChqcVhIUiAmJiB0ZXh0U3RhdHVzICE9PSBcImFib3J0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5zZXRFcnJvcihzbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkc2xpZGUub25lKFwib25SZXNldFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFqYXhMb2FkLmFib3J0KCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHNlbGYuc2V0RXJyb3Ioc2xpZGUpO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlIHRodW1ibmFpbCBpbWFnZSwgaWYgcG9zc2libGVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2V0SW1hZ2U6IGZ1bmN0aW9uIChzbGlkZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZ2hvc3Q7XHJcblxyXG4gICAgICAvLyBDaGVjayBpZiBuZWVkIHRvIHNob3cgbG9hZGluZyBpY29uXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciAkaW1nID0gc2xpZGUuJGltYWdlO1xyXG5cclxuICAgICAgICBpZiAoIXNlbGYuaXNDbG9zaW5nICYmIHNsaWRlLmlzTG9hZGluZyAmJiAoISRpbWcgfHwgISRpbWcubGVuZ3RoIHx8ICEkaW1nWzBdLmNvbXBsZXRlKSAmJiAhc2xpZGUuaGFzRXJyb3IpIHtcclxuICAgICAgICAgIHNlbGYuc2hvd0xvYWRpbmcoc2xpZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTApO1xyXG5cclxuICAgICAgLy9DaGVjayBpZiBpbWFnZSBoYXMgc3Jjc2V0XHJcbiAgICAgIHNlbGYuY2hlY2tTcmNzZXQoc2xpZGUpO1xyXG5cclxuICAgICAgLy8gVGhpcyB3aWxsIGJlIHdyYXBwZXIgY29udGFpbmluZyBib3RoIGdob3N0IGFuZCBhY3R1YWwgaW1hZ2VcclxuICAgICAgc2xpZGUuJGNvbnRlbnQgPSAkKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtY29udGVudFwiPjwvZGl2PicpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpXHJcbiAgICAgICAgLmFwcGVuZFRvKHNsaWRlLiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1pbWFnZVwiKSk7XHJcblxyXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgdGh1bWJuYWlsLCB3ZSBjYW4gZGlzcGxheSBpdCB3aGlsZSBhY3R1YWwgaW1hZ2UgaXMgbG9hZGluZ1xyXG4gICAgICAvLyBVc2VycyB3aWxsIG5vdCBzdGFyZSBhdCBibGFjayBzY3JlZW4gYW5kIGFjdHVhbCBpbWFnZSB3aWxsIGFwcGVhciBncmFkdWFsbHlcclxuICAgICAgaWYgKHNsaWRlLm9wdHMucHJlbG9hZCAhPT0gZmFsc2UgJiYgc2xpZGUub3B0cy53aWR0aCAmJiBzbGlkZS5vcHRzLmhlaWdodCAmJiBzbGlkZS50aHVtYikge1xyXG4gICAgICAgIHNsaWRlLndpZHRoID0gc2xpZGUub3B0cy53aWR0aDtcclxuICAgICAgICBzbGlkZS5oZWlnaHQgPSBzbGlkZS5vcHRzLmhlaWdodDtcclxuXHJcbiAgICAgICAgZ2hvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgICAgICBnaG9zdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICBzbGlkZS4kZ2hvc3QgPSBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGdob3N0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNlbGYuYWZ0ZXJMb2FkKHNsaWRlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzbGlkZS4kZ2hvc3QgPSAkKGdob3N0KVxyXG4gICAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtaW1hZ2VcIilcclxuICAgICAgICAgIC5hcHBlbmRUbyhzbGlkZS4kY29udGVudClcclxuICAgICAgICAgIC5hdHRyKFwic3JjXCIsIHNsaWRlLnRodW1iKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU3RhcnQgbG9hZGluZyBhY3R1YWwgaW1hZ2VcclxuICAgICAgc2VsZi5zZXRCaWdJbWFnZShzbGlkZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENoZWNrIGlmIGltYWdlIGhhcyBzcmNzZXQgYW5kIGdldCB0aGUgc291cmNlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY2hlY2tTcmNzZXQ6IGZ1bmN0aW9uIChzbGlkZSkge1xyXG4gICAgICB2YXIgc3Jjc2V0ID0gc2xpZGUub3B0cy5zcmNzZXQgfHwgc2xpZGUub3B0cy5pbWFnZS5zcmNzZXQsXHJcbiAgICAgICAgZm91bmQsXHJcbiAgICAgICAgdGVtcCxcclxuICAgICAgICBweFJhdGlvLFxyXG4gICAgICAgIHdpbmRvd1dpZHRoO1xyXG5cclxuICAgICAgLy8gSWYgd2UgaGF2ZSBcInNyY3NldFwiLCB0aGVuIHdlIG5lZWQgdG8gZmluZCBmaXJzdCBtYXRjaGluZyBcInNyY1wiIHZhbHVlLlxyXG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSwgYmVjYXVzZSB3aGVuIHlvdSBzZXQgYW4gc3JjIGF0dHJpYnV0ZSwgdGhlIGJyb3dzZXIgd2lsbCBwcmVsb2FkIHRoZSBpbWFnZVxyXG4gICAgICAvLyBiZWZvcmUgYW55IGphdmFzY3JpcHQgb3IgZXZlbiBDU1MgaXMgYXBwbGllZC5cclxuICAgICAgaWYgKHNyY3NldCkge1xyXG4gICAgICAgIHB4UmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xyXG4gICAgICAgIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBweFJhdGlvO1xyXG5cclxuICAgICAgICB0ZW1wID0gc3Jjc2V0LnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICB2YXIgcmV0ID0ge307XHJcblxyXG4gICAgICAgICAgZWwudHJpbSgpXHJcbiAgICAgICAgICAgIC5zcGxpdCgvXFxzKy8pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xyXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlSW50KGVsLnN1YnN0cmluZygwLCBlbC5sZW5ndGggLSAxKSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZXQudXJsID0gZWwpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldC5wb3N0Zml4ID0gZWxbZWwubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTb3J0IGJ5IHZhbHVlXHJcbiAgICAgICAgdGVtcC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICByZXR1cm4gYS52YWx1ZSAtIGIudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9rLCBub3cgd2UgaGF2ZSBhbiBhcnJheSBvZiBhbGwgc3Jjc2V0IHZhbHVlc1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGVtcC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgdmFyIGVsID0gdGVtcFtqXTtcclxuXHJcbiAgICAgICAgICBpZiAoKGVsLnBvc3RmaXggPT09IFwid1wiICYmIGVsLnZhbHVlID49IHdpbmRvd1dpZHRoKSB8fCAoZWwucG9zdGZpeCA9PT0gXCJ4XCIgJiYgZWwudmFsdWUgPj0gcHhSYXRpbykpIHtcclxuICAgICAgICAgICAgZm91bmQgPSBlbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBub3QgZm91bmQsIHRha2UgdGhlIGxhc3Qgb25lXHJcbiAgICAgICAgaWYgKCFmb3VuZCAmJiB0ZW1wLmxlbmd0aCkge1xyXG4gICAgICAgICAgZm91bmQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgIHNsaWRlLnNyYyA9IGZvdW5kLnVybDtcclxuXHJcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGRlZmF1bHQgd2lkdGgvaGVpZ2h0IHZhbHVlcywgd2UgY2FuIGNhbGN1bGF0ZSBoZWlnaHQgZm9yIG1hdGNoaW5nIHNvdXJjZVxyXG4gICAgICAgICAgaWYgKHNsaWRlLndpZHRoICYmIHNsaWRlLmhlaWdodCAmJiBmb3VuZC5wb3N0Zml4ID09IFwid1wiKSB7XHJcbiAgICAgICAgICAgIHNsaWRlLmhlaWdodCA9IChzbGlkZS53aWR0aCAvIHNsaWRlLmhlaWdodCkgKiBmb3VuZC52YWx1ZTtcclxuICAgICAgICAgICAgc2xpZGUud2lkdGggPSBmb3VuZC52YWx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzbGlkZS5vcHRzLnNyY3NldCA9IHNyY3NldDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ3JlYXRlIGZ1bGwtc2l6ZSBpbWFnZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNldEJpZ0ltYWdlOiBmdW5jdGlvbiAoc2xpZGUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXHJcbiAgICAgICAgJGltZyA9ICQoaW1nKTtcclxuXHJcbiAgICAgIHNsaWRlLiRpbWFnZSA9ICRpbWdcclxuICAgICAgICAub25lKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2VsZi5zZXRFcnJvcihzbGlkZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub25lKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgc2l6ZXM7XHJcblxyXG4gICAgICAgICAgaWYgKCFzbGlkZS4kZ2hvc3QpIHtcclxuICAgICAgICAgICAgc2VsZi5yZXNvbHZlSW1hZ2VTbGlkZVNpemUoc2xpZGUsIHRoaXMubmF0dXJhbFdpZHRoLCB0aGlzLm5hdHVyYWxIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5hZnRlckxvYWQoc2xpZGUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNsaWRlLm9wdHMuc3Jjc2V0KSB7XHJcbiAgICAgICAgICAgIHNpemVzID0gc2xpZGUub3B0cy5zaXplcztcclxuXHJcbiAgICAgICAgICAgIGlmICghc2l6ZXMgfHwgc2l6ZXMgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgICAgc2l6ZXMgPVxyXG4gICAgICAgICAgICAgICAgKHNsaWRlLndpZHRoIC8gc2xpZGUuaGVpZ2h0ID4gMSAmJiAkVy53aWR0aCgpIC8gJFcuaGVpZ2h0KCkgPiAxID8gXCIxMDBcIiA6IE1hdGgucm91bmQoKHNsaWRlLndpZHRoIC8gc2xpZGUuaGVpZ2h0KSAqIDEwMCkpICtcclxuICAgICAgICAgICAgICAgIFwidndcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGltZy5hdHRyKFwic2l6ZXNcIiwgc2l6ZXMpLmF0dHIoXCJzcmNzZXRcIiwgc2xpZGUub3B0cy5zcmNzZXQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIEhpZGUgdGVtcG9yYXJ5IGltYWdlIGFmdGVyIHNvbWUgZGVsYXlcclxuICAgICAgICAgIGlmIChzbGlkZS4kZ2hvc3QpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNsaWRlLiRnaG9zdCAmJiAhc2VsZi5pc0Nsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlLiRnaG9zdC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBNYXRoLm1pbigzMDAsIE1hdGgubWF4KDEwMDAsIHNsaWRlLmhlaWdodCAvIDE2MDApKSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2VsZi5oaWRlTG9hZGluZyhzbGlkZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYWRkQ2xhc3MoXCJmYW5jeWJveC1pbWFnZVwiKVxyXG4gICAgICAgIC5hdHRyKFwic3JjXCIsIHNsaWRlLnNyYylcclxuICAgICAgICAuYXBwZW5kVG8oc2xpZGUuJGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKChpbWcuY29tcGxldGUgfHwgaW1nLnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKSAmJiAkaW1nLm5hdHVyYWxXaWR0aCAmJiAkaW1nLm5hdHVyYWxIZWlnaHQpIHtcclxuICAgICAgICAkaW1nLnRyaWdnZXIoXCJsb2FkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGltZy5lcnJvcikge1xyXG4gICAgICAgICRpbWcudHJpZ2dlcihcImVycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENvbXB1dGVzIHRoZSBzbGlkZSBzaXplIGZyb20gaW1hZ2Ugc2l6ZSBhbmQgbWF4V2lkdGgvbWF4SGVpZ2h0XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJlc29sdmVJbWFnZVNsaWRlU2l6ZTogZnVuY3Rpb24gKHNsaWRlLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KSB7XHJcbiAgICAgIHZhciBtYXhXaWR0aCA9IHBhcnNlSW50KHNsaWRlLm9wdHMud2lkdGgsIDEwKSxcclxuICAgICAgICBtYXhIZWlnaHQgPSBwYXJzZUludChzbGlkZS5vcHRzLmhlaWdodCwgMTApO1xyXG5cclxuICAgICAgLy8gU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZXMgZnJvbSB0aGUgaW1hZ2VcclxuICAgICAgc2xpZGUud2lkdGggPSBpbWdXaWR0aDtcclxuICAgICAgc2xpZGUuaGVpZ2h0ID0gaW1nSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKG1heFdpZHRoID4gMCkge1xyXG4gICAgICAgIHNsaWRlLndpZHRoID0gbWF4V2lkdGg7XHJcbiAgICAgICAgc2xpZGUuaGVpZ2h0ID0gTWF0aC5mbG9vcigobWF4V2lkdGggKiBpbWdIZWlnaHQpIC8gaW1nV2lkdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWF4SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgIHNsaWRlLndpZHRoID0gTWF0aC5mbG9vcigobWF4SGVpZ2h0ICogaW1nV2lkdGgpIC8gaW1nSGVpZ2h0KTtcclxuICAgICAgICBzbGlkZS5oZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ3JlYXRlIGlmcmFtZSB3cmFwcGVyLCBpZnJhbWUgYW5kIGJpbmRpbmdzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBzZXRJZnJhbWU6IGZ1bmN0aW9uIChzbGlkZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgb3B0cyA9IHNsaWRlLm9wdHMuaWZyYW1lLFxyXG4gICAgICAgICRzbGlkZSA9IHNsaWRlLiRzbGlkZSxcclxuICAgICAgICAkaWZyYW1lO1xyXG5cclxuICAgICAgc2xpZGUuJGNvbnRlbnQgPSAkKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtY29udGVudCcgKyAob3B0cy5wcmVsb2FkID8gXCIgZmFuY3lib3gtaXMtaGlkZGVuXCIgOiBcIlwiKSArICdcIj48L2Rpdj4nKVxyXG4gICAgICAgIC5jc3Mob3B0cy5jc3MpXHJcbiAgICAgICAgLmFwcGVuZFRvKCRzbGlkZSk7XHJcblxyXG4gICAgICAkc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tXCIgKyBzbGlkZS5jb250ZW50VHlwZSk7XHJcblxyXG4gICAgICBzbGlkZS4kaWZyYW1lID0gJGlmcmFtZSA9ICQob3B0cy50cGwucmVwbGFjZSgvXFx7cm5kXFx9L2csIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSlcclxuICAgICAgICAuYXR0cihvcHRzLmF0dHIpXHJcbiAgICAgICAgLmFwcGVuZFRvKHNsaWRlLiRjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChvcHRzLnByZWxvYWQpIHtcclxuICAgICAgICBzZWxmLnNob3dMb2FkaW5nKHNsaWRlKTtcclxuXHJcbiAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgaXQgaXMgbm90IGFsd2F5cyBwb3NzaWJsZSB0byBkZXRlcm1pbmUgaWYgaWZyYW1lIGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWRcclxuICAgICAgICAvLyAoZHVlIHRvIGJyb3dzZXIgc2VjdXJpdHkgcG9saWN5KVxyXG5cclxuICAgICAgICAkaWZyYW1lLm9uKFwibG9hZC5mYiBlcnJvci5mYlwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdGhpcy5pc1JlYWR5ID0gMTtcclxuXHJcbiAgICAgICAgICBzbGlkZS4kc2xpZGUudHJpZ2dlcihcInJlZnJlc2hcIik7XHJcblxyXG4gICAgICAgICAgc2VsZi5hZnRlckxvYWQoc2xpZGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSBpZnJhbWUgY29udGVudCBzaXplXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAkc2xpZGUub24oXCJyZWZyZXNoLmZiXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciAkY29udGVudCA9IHNsaWRlLiRjb250ZW50LFxyXG4gICAgICAgICAgICBmcmFtZVdpZHRoID0gb3B0cy5jc3Mud2lkdGgsXHJcbiAgICAgICAgICAgIGZyYW1lSGVpZ2h0ID0gb3B0cy5jc3MuaGVpZ2h0LFxyXG4gICAgICAgICAgICAkY29udGVudHMsXHJcbiAgICAgICAgICAgICRib2R5O1xyXG5cclxuICAgICAgICAgIGlmICgkaWZyYW1lWzBdLmlzUmVhZHkgIT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICRjb250ZW50cyA9ICRpZnJhbWUuY29udGVudHMoKTtcclxuICAgICAgICAgICAgJGJvZHkgPSAkY29udGVudHMuZmluZChcImJvZHlcIik7XHJcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XHJcblxyXG4gICAgICAgICAgLy8gQ2FsY3VsYXRlIGNvbnRlbnQgZGltZW5zaW9ucywgaWYgaXQgaXMgYWNjZXNzaWJsZVxyXG4gICAgICAgICAgaWYgKCRib2R5ICYmICRib2R5Lmxlbmd0aCAmJiAkYm9keS5jaGlsZHJlbigpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBBdm9pZCBzY3JvbGxpbmcgdG8gdG9wIChpZiBtdWx0aXBsZSBpbnN0YW5jZXMpXHJcbiAgICAgICAgICAgICRzbGlkZS5jc3MoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIik7XHJcblxyXG4gICAgICAgICAgICAkY29udGVudC5jc3Moe1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiOTk5OXB4XCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZnJhbWVXaWR0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgZnJhbWVXaWR0aCA9IE1hdGguY2VpbChNYXRoLm1heCgkYm9keVswXS5jbGllbnRXaWR0aCwgJGJvZHkub3V0ZXJXaWR0aCh0cnVlKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkY29udGVudC5jc3MoXCJ3aWR0aFwiLCBmcmFtZVdpZHRoID8gZnJhbWVXaWR0aCA6IFwiXCIpLmNzcyhcIm1heC13aWR0aFwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmcmFtZUhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgZnJhbWVIZWlnaHQgPSBNYXRoLmNlaWwoTWF0aC5tYXgoJGJvZHlbMF0uY2xpZW50SGVpZ2h0LCAkYm9keS5vdXRlckhlaWdodCh0cnVlKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkY29udGVudC5jc3MoXCJoZWlnaHRcIiwgZnJhbWVIZWlnaHQgPyBmcmFtZUhlaWdodCA6IFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgJHNsaWRlLmNzcyhcIm92ZXJmbG93XCIsIFwiYXV0b1wiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkY29udGVudC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLWhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxmLmFmdGVyTG9hZChzbGlkZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRpZnJhbWUuYXR0cihcInNyY1wiLCBzbGlkZS5zcmMpO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIGlmcmFtZSBpZiBjbG9zaW5nIG9yIGNoYW5naW5nIGdhbGxlcnkgaXRlbVxyXG4gICAgICAkc2xpZGUub25lKFwib25SZXNldFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBoZWxwcyBJRSBub3QgdG8gdGhyb3cgZXJyb3JzIHdoZW4gY2xvc2luZ1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgIC5maW5kKFwiaWZyYW1lXCIpXHJcbiAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgLnVuYmluZCgpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIFwiLy9hYm91dDpibGFua1wiKTtcclxuICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XHJcblxyXG4gICAgICAgICQodGhpcylcclxuICAgICAgICAgIC5vZmYoXCJyZWZyZXNoLmZiXCIpXHJcbiAgICAgICAgICAuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgc2xpZGUuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICBzbGlkZS5pc1JldmVhbGVkID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBXcmFwIGFuZCBhcHBlbmQgY29udGVudCB0byB0aGUgc2xpZGVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2V0Q29udGVudDogZnVuY3Rpb24gKHNsaWRlLCBjb250ZW50KSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5oaWRlTG9hZGluZyhzbGlkZSk7XHJcblxyXG4gICAgICBpZiAoc2xpZGUuJGNvbnRlbnQpIHtcclxuICAgICAgICAkLmZhbmN5Ym94LnN0b3Aoc2xpZGUuJGNvbnRlbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzbGlkZS4kc2xpZGUuZW1wdHkoKTtcclxuXHJcbiAgICAgIC8vIElmIGNvbnRlbnQgaXMgYSBqUXVlcnkgb2JqZWN0LCB0aGVuIGl0IHdpbGwgYmUgbW92ZWQgdG8gdGhlIHNsaWRlLlxyXG4gICAgICAvLyBUaGUgcGxhY2Vob2xkZXIgaXMgY3JlYXRlZCBzbyB3ZSB3aWxsIGtub3cgd2hlcmUgdG8gcHV0IGl0IGJhY2suXHJcbiAgICAgIGlmIChpc1F1ZXJ5KGNvbnRlbnQpICYmIGNvbnRlbnQucGFyZW50KCkubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIGNvbnRlbnQgaXMgbm90IGFscmVhZHkgbW92ZWQgdG8gZmFuY3lCb3hcclxuICAgICAgICBpZiAoY29udGVudC5oYXNDbGFzcyhcImZhbmN5Ym94LWNvbnRlbnRcIikgfHwgY29udGVudC5wYXJlbnQoKS5oYXNDbGFzcyhcImZhbmN5Ym94LWNvbnRlbnRcIikpIHtcclxuICAgICAgICAgIGNvbnRlbnQucGFyZW50cyhcIi5mYW5jeWJveC1zbGlkZVwiKS50cmlnZ2VyKFwib25SZXNldFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0ZW1wb3JhcnkgZWxlbWVudCBtYXJraW5nIG9yaWdpbmFsIHBsYWNlIG9mIHRoZSBjb250ZW50XHJcbiAgICAgICAgc2xpZGUuJHBsYWNlaG9sZGVyID0gJChcIjxkaXY+XCIpXHJcbiAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoY29udGVudCk7XHJcblxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBjb250ZW50IGlzIHZpc2libGVcclxuICAgICAgICBjb250ZW50LmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXNsaWRlLmhhc0Vycm9yKSB7XHJcbiAgICAgICAgLy8gSWYgY29udGVudCBpcyBqdXN0IGEgcGxhaW4gdGV4dCwgdHJ5IHRvIGNvbnZlcnQgaXQgdG8gaHRtbFxyXG4gICAgICAgIGlmICgkLnR5cGUoY29udGVudCkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgIGNvbnRlbnQgPSAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgLmFwcGVuZCgkLnRyaW0oY29udGVudCkpXHJcbiAgICAgICAgICAgIC5jb250ZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgXCJmaWx0ZXJcIiBvcHRpb24gaXMgcHJvdmlkZWQsIHRoZW4gZmlsdGVyIGNvbnRlbnRcclxuICAgICAgICBpZiAoc2xpZGUub3B0cy5maWx0ZXIpIHtcclxuICAgICAgICAgIGNvbnRlbnQgPSAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgLmh0bWwoY29udGVudClcclxuICAgICAgICAgICAgLmZpbmQoc2xpZGUub3B0cy5maWx0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2xpZGUuJHNsaWRlLm9uZShcIm9uUmVzZXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFBhdXNlIGFsbCBodG1sNSB2aWRlby9hdWRpb1xyXG4gICAgICAgICQodGhpcylcclxuICAgICAgICAgIC5maW5kKFwidmlkZW8sYXVkaW9cIilcclxuICAgICAgICAgIC50cmlnZ2VyKFwicGF1c2VcIik7XHJcblxyXG4gICAgICAgIC8vIFB1dCBjb250ZW50IGJhY2tcclxuICAgICAgICBpZiAoc2xpZGUuJHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICBzbGlkZS4kcGxhY2Vob2xkZXIuYWZ0ZXIoY29udGVudC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWNvbnRlbnRcIikuaGlkZSgpKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICBzbGlkZS4kcGxhY2Vob2xkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGN1c3RvbSBjbG9zZSBidXR0b25cclxuICAgICAgICBpZiAoc2xpZGUuJHNtYWxsQnRuKSB7XHJcbiAgICAgICAgICBzbGlkZS4kc21hbGxCdG4ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgc2xpZGUuJHNtYWxsQnRuID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBjb250ZW50IGFuZCBtYXJrIHNsaWRlIGFzIG5vdCBsb2FkZWRcclxuICAgICAgICBpZiAoIXNsaWRlLmhhc0Vycm9yKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgc2xpZGUuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHNsaWRlLmlzUmV2ZWFsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChjb250ZW50KS5hcHBlbmRUbyhzbGlkZS4kc2xpZGUpO1xyXG5cclxuICAgICAgaWYgKCQoY29udGVudCkuaXMoXCJ2aWRlbyxhdWRpb1wiKSkge1xyXG4gICAgICAgICQoY29udGVudCkuYWRkQ2xhc3MoXCJmYW5jeWJveC12aWRlb1wiKTtcclxuXHJcbiAgICAgICAgJChjb250ZW50KS53cmFwKFwiPGRpdj48L2Rpdj5cIik7XHJcblxyXG4gICAgICAgIHNsaWRlLmNvbnRlbnRUeXBlID0gXCJ2aWRlb1wiO1xyXG5cclxuICAgICAgICBzbGlkZS5vcHRzLndpZHRoID0gc2xpZGUub3B0cy53aWR0aCB8fCAkKGNvbnRlbnQpLmF0dHIoXCJ3aWR0aFwiKTtcclxuICAgICAgICBzbGlkZS5vcHRzLmhlaWdodCA9IHNsaWRlLm9wdHMuaGVpZ2h0IHx8ICQoY29udGVudCkuYXR0cihcImhlaWdodFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2xpZGUuJGNvbnRlbnQgPSBzbGlkZS4kc2xpZGVcclxuICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgIC5maWx0ZXIoXCJkaXYsZm9ybSxtYWluLHZpZGVvLGF1ZGlvLGFydGljbGUsLmZhbmN5Ym94LWNvbnRlbnRcIilcclxuICAgICAgICAuZmlyc3QoKTtcclxuXHJcbiAgICAgIHNsaWRlLiRjb250ZW50LnNpYmxpbmdzKCkuaGlkZSgpO1xyXG5cclxuICAgICAgLy8gUmUtY2hlY2sgaWYgdGhlcmUgaXMgYSB2YWxpZCBjb250ZW50XHJcbiAgICAgIC8vIChpbiBzb21lIGNhc2VzLCBhamF4IHJlc3BvbnNlIGNhbiBjb250YWluIHZhcmlvdXMgZWxlbWVudHMgb3IgcGxhaW4gdGV4dClcclxuICAgICAgaWYgKCFzbGlkZS4kY29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICBzbGlkZS4kY29udGVudCA9IHNsaWRlLiRzbGlkZVxyXG4gICAgICAgICAgLndyYXBJbm5lcihcIjxkaXY+PC9kaXY+XCIpXHJcbiAgICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgLmZpcnN0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNsaWRlLiRjb250ZW50LmFkZENsYXNzKFwiZmFuY3lib3gtY29udGVudFwiKTtcclxuXHJcbiAgICAgIHNsaWRlLiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1cIiArIHNsaWRlLmNvbnRlbnRUeXBlKTtcclxuXHJcbiAgICAgIHNlbGYuYWZ0ZXJMb2FkKHNsaWRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRGlzcGxheSBlcnJvciBtZXNzYWdlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBzZXRFcnJvcjogZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgIHNsaWRlLmhhc0Vycm9yID0gdHJ1ZTtcclxuXHJcbiAgICAgIHNsaWRlLiRzbGlkZVxyXG4gICAgICAgIC50cmlnZ2VyKFwib25SZXNldFwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1cIiArIHNsaWRlLmNvbnRlbnRUeXBlKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1lcnJvclwiKTtcclxuXHJcbiAgICAgIHNsaWRlLmNvbnRlbnRUeXBlID0gXCJodG1sXCI7XHJcblxyXG4gICAgICB0aGlzLnNldENvbnRlbnQoc2xpZGUsIHRoaXMudHJhbnNsYXRlKHNsaWRlLCBzbGlkZS5vcHRzLmVycm9yVHBsKSk7XHJcblxyXG4gICAgICBpZiAoc2xpZGUucG9zID09PSB0aGlzLmN1cnJQb3MpIHtcclxuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gU2hvdyBsb2FkaW5nIGljb24gaW5zaWRlIHRoZSBzbGlkZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNob3dMb2FkaW5nOiBmdW5jdGlvbiAoc2xpZGUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgc2xpZGUgPSBzbGlkZSB8fCBzZWxmLmN1cnJlbnQ7XHJcblxyXG4gICAgICBpZiAoc2xpZGUgJiYgIXNsaWRlLiRzcGlubmVyKSB7XHJcbiAgICAgICAgc2xpZGUuJHNwaW5uZXIgPSAkKHNlbGYudHJhbnNsYXRlKHNlbGYsIHNlbGYub3B0cy5zcGlubmVyVHBsKSlcclxuICAgICAgICAgIC5hcHBlbmRUbyhzbGlkZS4kc2xpZGUpXHJcbiAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAuZmFkZUluKFwiZmFzdFwiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBSZW1vdmUgbG9hZGluZyBpY29uIGZyb20gdGhlIHNsaWRlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgaGlkZUxvYWRpbmc6IGZ1bmN0aW9uIChzbGlkZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICBzbGlkZSA9IHNsaWRlIHx8IHNlbGYuY3VycmVudDtcclxuXHJcbiAgICAgIGlmIChzbGlkZSAmJiBzbGlkZS4kc3Bpbm5lcikge1xyXG4gICAgICAgIHNsaWRlLiRzcGlubmVyLnN0b3AoKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHNsaWRlLiRzcGlubmVyO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEFkanVzdG1lbnRzIGFmdGVyIHNsaWRlIGNvbnRlbnQgaGFzIGJlZW4gbG9hZGVkXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGFmdGVyTG9hZDogZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2xpZGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHNsaWRlLmlzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHNlbGYudHJpZ2dlcihcImFmdGVyTG9hZFwiLCBzbGlkZSk7XHJcblxyXG4gICAgICBzZWxmLmhpZGVMb2FkaW5nKHNsaWRlKTtcclxuXHJcbiAgICAgIC8vIEFkZCBzbWFsbCBjbG9zZSBidXR0b25cclxuICAgICAgaWYgKHNsaWRlLm9wdHMuc21hbGxCdG4gJiYgKCFzbGlkZS4kc21hbGxCdG4gfHwgIXNsaWRlLiRzbWFsbEJ0bi5sZW5ndGgpKSB7XHJcbiAgICAgICAgc2xpZGUuJHNtYWxsQnRuID0gJChzZWxmLnRyYW5zbGF0ZShzbGlkZSwgc2xpZGUub3B0cy5idG5UcGwuc21hbGxCdG4pKS5hcHBlbmRUbyhzbGlkZS4kY29udGVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERpc2FibGUgcmlnaHQgY2xpY2tcclxuICAgICAgaWYgKHNsaWRlLm9wdHMucHJvdGVjdCAmJiBzbGlkZS4kY29udGVudCAmJiAhc2xpZGUuaGFzRXJyb3IpIHtcclxuICAgICAgICBzbGlkZS4kY29udGVudC5vbihcImNvbnRleHRtZW51LmZiXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBpZiAoZS5idXR0b24gPT0gMikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBmYWtlIGVsZW1lbnQgb24gdG9wIG9mIHRoZSBpbWFnZVxyXG4gICAgICAgIC8vIFRoaXMgbWFrZXMgYSBiaXQgaGFyZGVyIGZvciB1c2VyIHRvIHNlbGVjdCBpbWFnZVxyXG4gICAgICAgIGlmIChzbGlkZS50eXBlID09PSBcImltYWdlXCIpIHtcclxuICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zcGFjZWJhbGxcIj48L2Rpdj4nKS5hcHBlbmRUbyhzbGlkZS4kY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLmFkanVzdENhcHRpb24oc2xpZGUpO1xyXG5cclxuICAgICAgc2VsZi5hZGp1c3RMYXlvdXQoc2xpZGUpO1xyXG5cclxuICAgICAgaWYgKHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zKSB7XHJcbiAgICAgICAgc2VsZi51cGRhdGVDdXJzb3IoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5yZXZlYWxDb250ZW50KHNsaWRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUHJldmVudCBjYXB0aW9uIG92ZXJsYXAsXHJcbiAgICAvLyBmaXggY3NzIGluY29uc2lzdGVuY3kgYWNyb3NzIGJyb3dzZXJzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgYWRqdXN0Q2FwdGlvbjogZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBjdXJyZW50ID0gc2xpZGUgfHwgc2VsZi5jdXJyZW50LFxyXG4gICAgICAgIGNhcHRpb24gPSBjdXJyZW50Lm9wdHMuY2FwdGlvbixcclxuICAgICAgICBwcmV2ZW50T3ZlcmxhcCA9IGN1cnJlbnQub3B0cy5wcmV2ZW50Q2FwdGlvbk92ZXJsYXAsXHJcbiAgICAgICAgJGNhcHRpb24gPSBzZWxmLiRyZWZzLmNhcHRpb24sXHJcbiAgICAgICAgJGNsb25lLFxyXG4gICAgICAgIGNhcHRpb25IID0gZmFsc2U7XHJcblxyXG4gICAgICAkY2FwdGlvbi50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWNhcHRpb24tLXNlcGFyYXRlXCIsIHByZXZlbnRPdmVybGFwKTtcclxuXHJcbiAgICAgIGlmIChwcmV2ZW50T3ZlcmxhcCAmJiBjYXB0aW9uICYmIGNhcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQucG9zICE9PSBzZWxmLmN1cnJQb3MpIHtcclxuICAgICAgICAgICRjbG9uZSA9ICRjYXB0aW9uLmNsb25lKCkuYXBwZW5kVG8oJGNhcHRpb24ucGFyZW50KCkpO1xyXG5cclxuICAgICAgICAgICRjbG9uZVxyXG4gICAgICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAuZXEoMClcclxuICAgICAgICAgICAgLmVtcHR5KClcclxuICAgICAgICAgICAgLmh0bWwoY2FwdGlvbik7XHJcblxyXG4gICAgICAgICAgY2FwdGlvbkggPSAkY2xvbmUub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgJGNsb25lLmVtcHR5KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLiRjYXB0aW9uKSB7XHJcbiAgICAgICAgICBjYXB0aW9uSCA9IHNlbGYuJGNhcHRpb24ub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50LiRzbGlkZS5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiLCBjYXB0aW9uSCB8fCBcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBTaW1wbGUgaGFjayB0byBmaXggaW5jb25zaXN0ZW5jeSBhY3Jvc3MgYnJvd3NlcnMsIGRlc2NyaWJlZCBoZXJlIChhZmZlY3RzIEVkZ2UsIHRvbyk6XHJcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NDg1MThcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGFkanVzdExheW91dDogZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBjdXJyZW50ID0gc2xpZGUgfHwgc2VsZi5jdXJyZW50LFxyXG4gICAgICAgIHNjcm9sbEhlaWdodCxcclxuICAgICAgICBtYXJnaW5Cb3R0b20sXHJcbiAgICAgICAgaW5saW5lUGFkZGluZyxcclxuICAgICAgICBhY3R1YWxQYWRkaW5nO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnQuaXNMb2FkZWQgJiYgY3VycmVudC5vcHRzLmRpc2FibGVMYXlvdXRGaXggIT09IHRydWUpIHtcclxuICAgICAgICBjdXJyZW50LiRjb250ZW50LmNzcyhcIm1hcmdpbi1ib3R0b21cIiwgXCJcIik7XHJcblxyXG4gICAgICAgIC8vIElmIHdlIHdvdWxkIGFsd2F5cyBzZXQgbWFyZ2luLWJvdHRvbSBmb3IgdGhlIGNvbnRlbnQsXHJcbiAgICAgICAgLy8gdGhlbiBpdCB3b3VsZCBwb3RlbnRpYWxseSBicmVhayB2ZXJ0aWNhbCBhbGlnblxyXG4gICAgICAgIGlmIChjdXJyZW50LiRjb250ZW50Lm91dGVySGVpZ2h0KCkgPiBjdXJyZW50LiRzbGlkZS5oZWlnaHQoKSArIDAuNSkge1xyXG4gICAgICAgICAgaW5saW5lUGFkZGluZyA9IGN1cnJlbnQuJHNsaWRlWzBdLnN0eWxlW1wicGFkZGluZy1ib3R0b21cIl07XHJcbiAgICAgICAgICBhY3R1YWxQYWRkaW5nID0gY3VycmVudC4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIik7XHJcblxyXG4gICAgICAgICAgaWYgKHBhcnNlRmxvYXQoYWN0dWFsUGFkZGluZykgPiAwKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IGN1cnJlbnQuJHNsaWRlWzBdLnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnQuJHNsaWRlLmNzcyhcInBhZGRpbmctYm90dG9tXCIsIDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNjcm9sbEhlaWdodCAtIGN1cnJlbnQuJHNsaWRlWzBdLnNjcm9sbEhlaWdodCkgPCAxKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gYWN0dWFsUGFkZGluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VycmVudC4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIiwgaW5saW5lUGFkZGluZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50LiRjb250ZW50LmNzcyhcIm1hcmdpbi1ib3R0b21cIiwgbWFyZ2luQm90dG9tKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBNYWtlIGNvbnRlbnQgdmlzaWJsZVxyXG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGNvbnRlbnQgaGFzIGJlZW4gbG9hZGVkIG9yXHJcbiAgICAvLyB1c2VyIG5hdmlnYXRlcyBnYWxsZXJ5IGFuZCB0cmFuc2l0aW9uIHNob3VsZCBzdGFydFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmV2ZWFsQ29udGVudDogZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAkc2xpZGUgPSBzbGlkZS4kc2xpZGUsXHJcbiAgICAgICAgZW5kID0gZmFsc2UsXHJcbiAgICAgICAgc3RhcnQgPSBmYWxzZSxcclxuICAgICAgICBpc01vdmVkID0gc2VsZi5pc01vdmVkKHNsaWRlKSxcclxuICAgICAgICBpc1JldmVhbGVkID0gc2xpZGUuaXNSZXZlYWxlZCxcclxuICAgICAgICBlZmZlY3QsXHJcbiAgICAgICAgZWZmZWN0Q2xhc3NOYW1lLFxyXG4gICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgIG9wYWNpdHk7XHJcblxyXG4gICAgICBzbGlkZS5pc1JldmVhbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGVmZmVjdCA9IHNsaWRlLm9wdHNbc2VsZi5maXJzdFJ1biA/IFwiYW5pbWF0aW9uRWZmZWN0XCIgOiBcInRyYW5zaXRpb25FZmZlY3RcIl07XHJcbiAgICAgIGR1cmF0aW9uID0gc2xpZGUub3B0c1tzZWxmLmZpcnN0UnVuID8gXCJhbmltYXRpb25EdXJhdGlvblwiIDogXCJ0cmFuc2l0aW9uRHVyYXRpb25cIl07XHJcblxyXG4gICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KHNsaWRlLmZvcmNlZER1cmF0aW9uID09PSB1bmRlZmluZWQgPyBkdXJhdGlvbiA6IHNsaWRlLmZvcmNlZER1cmF0aW9uLCAxMCk7XHJcblxyXG4gICAgICBpZiAoaXNNb3ZlZCB8fCBzbGlkZS5wb3MgIT09IHNlbGYuY3VyclBvcyB8fCAhZHVyYXRpb24pIHtcclxuICAgICAgICBlZmZlY3QgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgY2FuIHpvb21cclxuICAgICAgaWYgKGVmZmVjdCA9PT0gXCJ6b29tXCIpIHtcclxuICAgICAgICBpZiAoc2xpZGUucG9zID09PSBzZWxmLmN1cnJQb3MgJiYgZHVyYXRpb24gJiYgc2xpZGUudHlwZSA9PT0gXCJpbWFnZVwiICYmICFzbGlkZS5oYXNFcnJvciAmJiAoc3RhcnQgPSBzZWxmLmdldFRodW1iUG9zKHNsaWRlKSkpIHtcclxuICAgICAgICAgIGVuZCA9IHNlbGYuZ2V0Rml0UG9zKHNsaWRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWZmZWN0ID0gXCJmYWRlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBab29tIGFuaW1hdGlvblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PVxyXG4gICAgICBpZiAoZWZmZWN0ID09PSBcInpvb21cIikge1xyXG4gICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBlbmQuc2NhbGVYID0gZW5kLndpZHRoIC8gc3RhcnQud2lkdGg7XHJcbiAgICAgICAgZW5kLnNjYWxlWSA9IGVuZC5oZWlnaHQgLyBzdGFydC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gYW5pbWF0ZSBvcGFjaXR5XHJcbiAgICAgICAgb3BhY2l0eSA9IHNsaWRlLm9wdHMuem9vbU9wYWNpdHk7XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ID09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gTWF0aC5hYnMoc2xpZGUud2lkdGggLyBzbGlkZS5oZWlnaHQgLSBzdGFydC53aWR0aCAvIHN0YXJ0LmhlaWdodCkgPiAwLjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSkge1xyXG4gICAgICAgICAgc3RhcnQub3BhY2l0eSA9IDAuMTtcclxuICAgICAgICAgIGVuZC5vcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERyYXcgaW1hZ2UgYXQgc3RhcnQgcG9zaXRpb25cclxuICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShzbGlkZS4kY29udGVudC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLWhpZGRlblwiKSwgc3RhcnQpO1xyXG5cclxuICAgICAgICBmb3JjZVJlZHJhdyhzbGlkZS4kY29udGVudCk7XHJcblxyXG4gICAgICAgIC8vIFN0YXJ0IGFuaW1hdGlvblxyXG4gICAgICAgICQuZmFuY3lib3guYW5pbWF0ZShzbGlkZS4kY29udGVudCwgZW5kLCBkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIHNlbGYuY29tcGxldGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnVwZGF0ZVNsaWRlKHNsaWRlKTtcclxuXHJcbiAgICAgIC8vIFNpbXBseSBzaG93IGNvbnRlbnQgaWYgbm8gZWZmZWN0XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGlmICghZWZmZWN0KSB7XHJcbiAgICAgICAgc2xpZGUuJGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgIGlmICghaXNSZXZlYWxlZCAmJiBpc01vdmVkICYmIHNsaWRlLnR5cGUgPT09IFwiaW1hZ2VcIiAmJiAhc2xpZGUuaGFzRXJyb3IpIHtcclxuICAgICAgICAgIHNsaWRlLiRjb250ZW50LmhpZGUoKS5mYWRlSW4oXCJmYXN0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zKSB7XHJcbiAgICAgICAgICBzZWxmLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFByZXBhcmUgZm9yIENTUyB0cmFuc2l0b25cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAkLmZhbmN5Ym94LnN0b3AoJHNsaWRlKTtcclxuXHJcbiAgICAgIC8vZWZmZWN0Q2xhc3NOYW1lID0gXCJmYW5jeWJveC1hbmltYXRlZCBmYW5jeWJveC1zbGlkZS0tXCIgKyAoc2xpZGUucG9zID49IHNlbGYucHJldlBvcyA/IFwibmV4dFwiIDogXCJwcmV2aW91c1wiKSArIFwiIGZhbmN5Ym94LWZ4LVwiICsgZWZmZWN0O1xyXG4gICAgICBlZmZlY3RDbGFzc05hbWUgPSBcImZhbmN5Ym94LXNsaWRlLS1cIiArIChzbGlkZS5wb3MgPj0gc2VsZi5wcmV2UG9zID8gXCJuZXh0XCIgOiBcInByZXZpb3VzXCIpICsgXCIgZmFuY3lib3gtYW5pbWF0ZWQgZmFuY3lib3gtZngtXCIgKyBlZmZlY3Q7XHJcblxyXG4gICAgICAkc2xpZGUuYWRkQ2xhc3MoZWZmZWN0Q2xhc3NOYW1lKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIpOyAvLy5hZGRDbGFzcyhlZmZlY3RDbGFzc05hbWUpO1xyXG5cclxuICAgICAgc2xpZGUuJGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAvLyBGb3JjZSByZWZsb3dcclxuICAgICAgZm9yY2VSZWRyYXcoJHNsaWRlKTtcclxuXHJcbiAgICAgIGlmIChzbGlkZS50eXBlICE9PSBcImltYWdlXCIpIHtcclxuICAgICAgICBzbGlkZS4kY29udGVudC5oaWRlKCkuc2hvdygwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxyXG4gICAgICAgICRzbGlkZSxcclxuICAgICAgICBcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIsXHJcbiAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHNsaWRlLnJlbW92ZUNsYXNzKGVmZmVjdENsYXNzTmFtZSkuY3NzKHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcIlwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBcIlwiXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2xpZGUucG9zID09PSBzZWxmLmN1cnJQb3MpIHtcclxuICAgICAgICAgICAgc2VsZi5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDaGVjayBpZiB3ZSBjYW4gYW5kIGhhdmUgdG8gem9vbSBmcm9tIHRodW1ibmFpbFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBnZXRUaHVtYlBvczogZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgIHZhciByZXogPSBmYWxzZSxcclxuICAgICAgICAkdGh1bWIgPSBzbGlkZS4kdGh1bWIsXHJcbiAgICAgICAgdGh1bWJQb3MsXHJcbiAgICAgICAgYnR3LFxyXG4gICAgICAgIGJydyxcclxuICAgICAgICBiYncsXHJcbiAgICAgICAgYmx3O1xyXG5cclxuICAgICAgaWYgKCEkdGh1bWIgfHwgIWluVmlld3BvcnQoJHRodW1iWzBdKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGh1bWJQb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZSgkdGh1bWIpO1xyXG5cclxuICAgICAgYnR3ID0gcGFyc2VGbG9hdCgkdGh1bWIuY3NzKFwiYm9yZGVyLXRvcC13aWR0aFwiKSB8fCAwKTtcclxuICAgICAgYnJ3ID0gcGFyc2VGbG9hdCgkdGh1bWIuY3NzKFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCIpIHx8IDApO1xyXG4gICAgICBiYncgPSBwYXJzZUZsb2F0KCR0aHVtYi5jc3MoXCJib3JkZXItYm90dG9tLXdpZHRoXCIpIHx8IDApO1xyXG4gICAgICBibHcgPSBwYXJzZUZsb2F0KCR0aHVtYi5jc3MoXCJib3JkZXItbGVmdC13aWR0aFwiKSB8fCAwKTtcclxuXHJcbiAgICAgIHJleiA9IHtcclxuICAgICAgICB0b3A6IHRodW1iUG9zLnRvcCArIGJ0dyxcclxuICAgICAgICBsZWZ0OiB0aHVtYlBvcy5sZWZ0ICsgYmx3LFxyXG4gICAgICAgIHdpZHRoOiB0aHVtYlBvcy53aWR0aCAtIGJydyAtIGJsdyxcclxuICAgICAgICBoZWlnaHQ6IHRodW1iUG9zLmhlaWdodCAtIGJ0dyAtIGJidyxcclxuICAgICAgICBzY2FsZVg6IDEsXHJcbiAgICAgICAgc2NhbGVZOiAxXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gdGh1bWJQb3Mud2lkdGggPiAwICYmIHRodW1iUG9zLmhlaWdodCA+IDAgPyByZXogOiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRmluYWwgYWRqdXN0bWVudHMgYWZ0ZXIgY3VycmVudCBnYWxsZXJ5IGl0ZW0gaXMgbW92ZWQgdG8gcG9zaXRpb25cclxuICAgIC8vIGFuZCBpdGBzIGNvbnRlbnQgaXMgbG9hZGVkXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcclxuICAgICAgICBzbGlkZXMgPSB7fSxcclxuICAgICAgICAkZWw7XHJcblxyXG4gICAgICBpZiAoc2VsZi5pc01vdmVkKCkgfHwgIWN1cnJlbnQuaXNMb2FkZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghY3VycmVudC5pc0NvbXBsZXRlKSB7XHJcbiAgICAgICAgY3VycmVudC5pc0NvbXBsZXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY3VycmVudC4kc2xpZGUuc2libGluZ3MoKS50cmlnZ2VyKFwib25SZXNldFwiKTtcclxuXHJcbiAgICAgICAgc2VsZi5wcmVsb2FkKFwiaW5saW5lXCIpO1xyXG5cclxuICAgICAgICAvLyBUcmlnZ2VyIGFueSBDU1MgdHJhbnNpdG9uIGluc2lkZSB0aGUgc2xpZGVcclxuICAgICAgICBmb3JjZVJlZHJhdyhjdXJyZW50LiRzbGlkZSk7XHJcblxyXG4gICAgICAgIGN1cnJlbnQuJHNsaWRlLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWNvbXBsZXRlXCIpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgdW5uZWNlc3Nhcnkgc2xpZGVzXHJcbiAgICAgICAgJC5lYWNoKHNlbGYuc2xpZGVzLCBmdW5jdGlvbiAoa2V5LCBzbGlkZSkge1xyXG4gICAgICAgICAgaWYgKHNsaWRlLnBvcyA+PSBzZWxmLmN1cnJQb3MgLSAxICYmIHNsaWRlLnBvcyA8PSBzZWxmLmN1cnJQb3MgKyAxKSB7XHJcbiAgICAgICAgICAgIHNsaWRlc1tzbGlkZS5wb3NdID0gc2xpZGU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlKSB7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guc3RvcChzbGlkZS4kc2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgc2xpZGUuJHNsaWRlLm9mZigpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLnNsaWRlcyA9IHNsaWRlcztcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgc2VsZi51cGRhdGVDdXJzb3IoKTtcclxuXHJcbiAgICAgIHNlbGYudHJpZ2dlcihcImFmdGVyU2hvd1wiKTtcclxuXHJcbiAgICAgIC8vIEF1dG9wbGF5IGZpcnN0IGh0bWw1IHZpZGVvL2F1ZGlvXHJcbiAgICAgIGlmICghIWN1cnJlbnQub3B0cy52aWRlby5hdXRvU3RhcnQpIHtcclxuICAgICAgICBjdXJyZW50LiRzbGlkZVxyXG4gICAgICAgICAgLmZpbmQoXCJ2aWRlbyxhdWRpb1wiKVxyXG4gICAgICAgICAgLmZpbHRlcihcIjp2aXNpYmxlOmZpcnN0XCIpXHJcbiAgICAgICAgICAudHJpZ2dlcihcInBsYXlcIilcclxuICAgICAgICAgIC5vbmUoXCJlbmRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChEb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICAgIERvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICAgIHRoaXMud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5uZXh0KCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVHJ5IHRvIGZvY3VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxyXG4gICAgICBpZiAoY3VycmVudC5vcHRzLmF1dG9Gb2N1cyAmJiBjdXJyZW50LmNvbnRlbnRUeXBlID09PSBcImh0bWxcIikge1xyXG4gICAgICAgIC8vIExvb2sgZm9yIHRoZSBmaXJzdCBpbnB1dCB3aXRoIGF1dG9mb2N1cyBhdHRyaWJ1dGVcclxuICAgICAgICAkZWwgPSBjdXJyZW50LiRjb250ZW50LmZpbmQoXCJpbnB1dFthdXRvZm9jdXNdOmVuYWJsZWQ6dmlzaWJsZTpmaXJzdFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCRlbC5sZW5ndGgpIHtcclxuICAgICAgICAgICRlbC50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlbGYuZm9jdXMobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdm9pZCBqdW1waW5nXHJcbiAgICAgIGN1cnJlbnQuJHNsaWRlLnNjcm9sbFRvcCgwKS5zY3JvbGxMZWZ0KDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBQcmVsb2FkIG5leHQgYW5kIHByZXZpb3VzIHNsaWRlc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBwcmVsb2FkOiBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgcHJldixcclxuICAgICAgICBuZXh0O1xyXG5cclxuICAgICAgaWYgKHNlbGYuZ3JvdXAubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV4dCA9IHNlbGYuc2xpZGVzW3NlbGYuY3VyclBvcyArIDFdO1xyXG4gICAgICBwcmV2ID0gc2VsZi5zbGlkZXNbc2VsZi5jdXJyUG9zIC0gMV07XHJcblxyXG4gICAgICBpZiAocHJldiAmJiBwcmV2LnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICBzZWxmLmxvYWRTbGlkZShwcmV2KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5leHQgJiYgbmV4dC50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgc2VsZi5sb2FkU2xpZGUobmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gVHJ5IHRvIGZpbmQgYW5kIGZvY3VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGZvY3VzOiBmdW5jdGlvbiAoZSwgZmlyc3RSdW4pIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGZvY3VzYWJsZVN0ciA9IFtcclxuICAgICAgICAgIFwiYVtocmVmXVwiLFxyXG4gICAgICAgICAgXCJhcmVhW2hyZWZdXCIsXHJcbiAgICAgICAgICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcclxuICAgICAgICAgIFwic2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSlcIixcclxuICAgICAgICAgIFwidGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKVwiLFxyXG4gICAgICAgICAgXCJidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKVwiLFxyXG4gICAgICAgICAgXCJpZnJhbWVcIixcclxuICAgICAgICAgIFwib2JqZWN0XCIsXHJcbiAgICAgICAgICBcImVtYmVkXCIsXHJcbiAgICAgICAgICBcInZpZGVvXCIsXHJcbiAgICAgICAgICBcImF1ZGlvXCIsXHJcbiAgICAgICAgICBcIltjb250ZW50ZWRpdGFibGVdXCIsXHJcbiAgICAgICAgICAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ1xyXG4gICAgICAgIF0uam9pbihcIixcIiksXHJcbiAgICAgICAgZm9jdXNhYmxlSXRlbXMsXHJcbiAgICAgICAgZm9jdXNlZEl0ZW1JbmRleDtcclxuXHJcbiAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGUgfHwgIXNlbGYuY3VycmVudCB8fCAhc2VsZi5jdXJyZW50LmlzQ29tcGxldGUpIHtcclxuICAgICAgICAvLyBGb2N1cyBvbiBhbnkgZWxlbWVudCBpbnNpZGUgZmFuY3lib3hcclxuICAgICAgICBmb2N1c2FibGVJdGVtcyA9IHNlbGYuJHJlZnMuY29udGFpbmVyLmZpbmQoXCIqOnZpc2libGVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRm9jdXMgaW5zaWRlIGN1cnJlbnQgc2xpZGVcclxuICAgICAgICBmb2N1c2FibGVJdGVtcyA9IHNlbGYuY3VycmVudC4kc2xpZGUuZmluZChcIio6dmlzaWJsZVwiICsgKGZpcnN0UnVuID8gXCI6bm90KC5mYW5jeWJveC1jbG9zZS1zbWFsbClcIiA6IFwiXCIpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9jdXNhYmxlSXRlbXMgPSBmb2N1c2FibGVJdGVtcy5maWx0ZXIoZm9jdXNhYmxlU3RyKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAkKHRoaXMpLmNzcyhcInZpc2liaWxpdHlcIikgIT09IFwiaGlkZGVuXCIgJiYgISQodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZm9jdXNhYmxlSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9jdXNlZEl0ZW1JbmRleCA9IGZvY3VzYWJsZUl0ZW1zLmluZGV4KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAoZSAmJiBlLnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAvLyBCYWNrIHRhYlxyXG4gICAgICAgICAgaWYgKGZvY3VzZWRJdGVtSW5kZXggPCAwIHx8IGZvY3VzZWRJdGVtSW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBmb2N1c2FibGVJdGVtcy5lcShmb2N1c2FibGVJdGVtcy5sZW5ndGggLSAxKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIE91dHNpZGUgb3IgRm9yd2FyZCB0YWJcclxuICAgICAgICAgIGlmIChmb2N1c2VkSXRlbUluZGV4IDwgMCB8fCBmb2N1c2VkSXRlbUluZGV4ID09IGZvY3VzYWJsZUl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvY3VzYWJsZUl0ZW1zLmVxKDApLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEFjdGl2YXRlcyBjdXJyZW50IGluc3RhbmNlIC0gYnJpbmdzIGNvbnRhaW5lciB0byB0aGUgZnJvbnQgYW5kIGVuYWJsZXMga2V5Ym9hcmQsXHJcbiAgICAvLyBub3RpZmllcyBvdGhlciBpbnN0YW5jZXMgYWJvdXQgZGVhY3RpdmF0aW5nXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAvLyBEZWFjdGl2YXRlIGFsbCBpbnN0YW5jZXNcclxuICAgICAgJChcIi5mYW5jeWJveC1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gJCh0aGlzKS5kYXRhKFwiRmFuY3lCb3hcIik7XHJcblxyXG4gICAgICAgIC8vIFNraXAgc2VsZiBhbmQgY2xvc2luZyBpbnN0YW5jZXNcclxuICAgICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuaWQgIT09IHNlbGYuaWQgJiYgIWluc3RhbmNlLmlzQ2xvc2luZykge1xyXG4gICAgICAgICAgaW5zdGFuY2UudHJpZ2dlcihcIm9uRGVhY3RpdmF0ZVwiKTtcclxuXHJcbiAgICAgICAgICBpbnN0YW5jZS5yZW1vdmVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgICBpbnN0YW5jZS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VsZi5pc1Zpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHNlbGYuY3VycmVudCB8fCBzZWxmLmlzSWRsZSkge1xyXG4gICAgICAgIHNlbGYudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHNlbGYudXBkYXRlQ29udHJvbHMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi50cmlnZ2VyKFwib25BY3RpdmF0ZVwiKTtcclxuXHJcbiAgICAgIHNlbGYuYWRkRXZlbnRzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFN0YXJ0IGNsb3NpbmcgcHJvY2VkdXJlXHJcbiAgICAvLyBUaGlzIHdpbGwgc3RhcnQgXCJ6b29tLW91dFwiIGFuaW1hdGlvbiBpZiBuZWVkZWQgYW5kIGNsZWFuIGV2ZXJ5dGhpbmcgdXAgYWZ0ZXJ3YXJkc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgY2xvc2U6IGZ1bmN0aW9uIChlLCBkKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBjdXJyZW50ID0gc2VsZi5jdXJyZW50LFxyXG4gICAgICAgIGVmZmVjdCxcclxuICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAkY29udGVudCxcclxuICAgICAgICBkb21SZWN0LFxyXG4gICAgICAgIG9wYWNpdHksXHJcbiAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgZW5kO1xyXG5cclxuICAgICAgdmFyIGRvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi5jbGVhblVwKGUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXNDbG9zaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLmlzQ2xvc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAvLyBJZiBiZWZvcmVDbG9zZSBjYWxsYmFjayBwcmV2ZW50cyBjbG9zaW5nLCBtYWtlIHN1cmUgY29udGVudCBpcyBjZW50ZXJlZFxyXG4gICAgICBpZiAoc2VsZi50cmlnZ2VyKFwiYmVmb3JlQ2xvc2VcIiwgZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgc2VsZi5pc0Nsb3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFGcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnRzXHJcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBpbnN0YW5jZXMsIHRoZXkgd2lsbCBiZSBzZXQgYWdhaW4gYnkgXCJhY3RpdmF0ZVwiIG1ldGhvZFxyXG4gICAgICBzZWxmLnJlbW92ZUV2ZW50cygpO1xyXG5cclxuICAgICAgJGNvbnRlbnQgPSBjdXJyZW50LiRjb250ZW50O1xyXG4gICAgICBlZmZlY3QgPSBjdXJyZW50Lm9wdHMuYW5pbWF0aW9uRWZmZWN0O1xyXG4gICAgICBkdXJhdGlvbiA9ICQuaXNOdW1lcmljKGQpID8gZCA6IGVmZmVjdCA/IGN1cnJlbnQub3B0cy5hbmltYXRpb25EdXJhdGlvbiA6IDA7XHJcblxyXG4gICAgICBjdXJyZW50LiRzbGlkZS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jb21wbGV0ZSBmYW5jeWJveC1zbGlkZS0tbmV4dCBmYW5jeWJveC1zbGlkZS0tcHJldmlvdXMgZmFuY3lib3gtYW5pbWF0ZWRcIik7XHJcblxyXG4gICAgICBpZiAoZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICQuZmFuY3lib3guc3RvcChjdXJyZW50LiRzbGlkZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWZmZWN0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlbW92ZSBvdGhlciBzbGlkZXNcclxuICAgICAgY3VycmVudC4kc2xpZGVcclxuICAgICAgICAuc2libGluZ3MoKVxyXG4gICAgICAgIC50cmlnZ2VyKFwib25SZXNldFwiKVxyXG4gICAgICAgIC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vIFRyaWdnZXIgYW5pbWF0aW9uc1xyXG4gICAgICBpZiAoZHVyYXRpb24pIHtcclxuICAgICAgICBzZWxmLiRyZWZzLmNvbnRhaW5lclxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtb3BlblwiKVxyXG4gICAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtY2xvc2luZ1wiKVxyXG4gICAgICAgICAgLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgZHVyYXRpb24gKyBcIm1zXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDbGVhbiB1cFxyXG4gICAgICBzZWxmLmhpZGVMb2FkaW5nKGN1cnJlbnQpO1xyXG5cclxuICAgICAgc2VsZi5oaWRlQ29udHJvbHModHJ1ZSk7XHJcblxyXG4gICAgICBzZWxmLnVwZGF0ZUN1cnNvcigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgcG9zc2libGUgdG8gem9vbS1vdXRcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVmZmVjdCA9PT0gXCJ6b29tXCIgJiZcclxuICAgICAgICAhKCRjb250ZW50ICYmIGR1cmF0aW9uICYmIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiICYmICFzZWxmLmlzTW92ZWQoKSAmJiAhY3VycmVudC5oYXNFcnJvciAmJiAoZW5kID0gc2VsZi5nZXRUaHVtYlBvcyhjdXJyZW50KSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVmZmVjdCA9IFwiZmFkZVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWZmZWN0ID09PSBcInpvb21cIikge1xyXG4gICAgICAgICQuZmFuY3lib3guc3RvcCgkY29udGVudCk7XHJcblxyXG4gICAgICAgIGRvbVJlY3QgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZSgkY29udGVudCk7XHJcblxyXG4gICAgICAgIHN0YXJ0ID0ge1xyXG4gICAgICAgICAgdG9wOiBkb21SZWN0LnRvcCxcclxuICAgICAgICAgIGxlZnQ6IGRvbVJlY3QubGVmdCxcclxuICAgICAgICAgIHNjYWxlWDogZG9tUmVjdC53aWR0aCAvIGVuZC53aWR0aCxcclxuICAgICAgICAgIHNjYWxlWTogZG9tUmVjdC5oZWlnaHQgLyBlbmQuaGVpZ2h0LFxyXG4gICAgICAgICAgd2lkdGg6IGVuZC53aWR0aCxcclxuICAgICAgICAgIGhlaWdodDogZW5kLmhlaWdodFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gYW5pbWF0ZSBvcGFjaXR5XHJcbiAgICAgICAgb3BhY2l0eSA9IGN1cnJlbnQub3B0cy56b29tT3BhY2l0eTtcclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgPT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSBNYXRoLmFicyhjdXJyZW50LndpZHRoIC8gY3VycmVudC5oZWlnaHQgLSBlbmQud2lkdGggLyBlbmQuaGVpZ2h0KSA+IDAuMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5KSB7XHJcbiAgICAgICAgICBlbmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSgkY29udGVudCwgc3RhcnQpO1xyXG5cclxuICAgICAgICBmb3JjZVJlZHJhdygkY29udGVudCk7XHJcblxyXG4gICAgICAgICQuZmFuY3lib3guYW5pbWF0ZSgkY29udGVudCwgZW5kLCBkdXJhdGlvbiwgZG9uZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWZmZWN0ICYmIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxyXG4gICAgICAgICAgY3VycmVudC4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY3VycmVudFwiKSxcclxuICAgICAgICAgIFwiZmFuY3lib3gtYW5pbWF0ZWQgZmFuY3lib3gtZngtXCIgKyBlZmZlY3QsXHJcbiAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgIGRvbmVcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHNraXAgYW5pbWF0aW9uXHJcbiAgICAgICAgaWYgKGUgPT09IHRydWUpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZG9uZSwgZHVyYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRmluYWwgYWRqdXN0bWVudHMgYWZ0ZXIgcmVtb3ZpbmcgdGhlIGluc3RhbmNlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjbGVhblVwOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgaW5zdGFuY2UsXHJcbiAgICAgICAgJGZvY3VzID0gc2VsZi5jdXJyZW50Lm9wdHMuJG9yaWcsXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5O1xyXG5cclxuICAgICAgc2VsZi5jdXJyZW50LiRzbGlkZS50cmlnZ2VyKFwib25SZXNldFwiKTtcclxuXHJcbiAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLmVtcHR5KCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICBzZWxmLnRyaWdnZXIoXCJhZnRlckNsb3NlXCIsIGUpO1xyXG5cclxuICAgICAgLy8gUGxhY2UgYmFjayBmb2N1c1xyXG4gICAgICBpZiAoISFzZWxmLmN1cnJlbnQub3B0cy5iYWNrRm9jdXMpIHtcclxuICAgICAgICBpZiAoISRmb2N1cyB8fCAhJGZvY3VzLmxlbmd0aCB8fCAhJGZvY3VzLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICRmb2N1cyA9IHNlbGYuJHRyaWdnZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGZvY3VzICYmICRmb2N1cy5sZW5ndGgpIHtcclxuICAgICAgICAgIHggPSB3aW5kb3cuc2Nyb2xsWDtcclxuICAgICAgICAgIHkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAgICAgICAkZm9jdXMudHJpZ2dlcihcImZvY3VzXCIpO1xyXG5cclxuICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpXHJcbiAgICAgICAgICAgIC5zY3JvbGxUb3AoeSlcclxuICAgICAgICAgICAgLnNjcm9sbExlZnQoeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLmN1cnJlbnQgPSBudWxsO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIG90aGVyIGluc3RhbmNlc1xyXG4gICAgICBpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgIGluc3RhbmNlLmFjdGl2YXRlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1hY3RpdmUgY29tcGVuc2F0ZS1mb3Itc2Nyb2xsYmFyXCIpO1xyXG5cclxuICAgICAgICAkKFwiI2ZhbmN5Ym94LXN0eWxlLW5vc2Nyb2xsXCIpLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENhbGwgY2FsbGJhY2sgYW5kIHRyaWdnZXIgYW4gZXZlbnRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICB0cmlnZ2VyOiBmdW5jdGlvbiAobmFtZSwgc2xpZGUpIHtcclxuICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxyXG4gICAgICAgIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIG9iaiA9IHNsaWRlICYmIHNsaWRlLm9wdHMgPyBzbGlkZSA6IHNlbGYuY3VycmVudCxcclxuICAgICAgICByZXo7XHJcblxyXG4gICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgYXJncy51bnNoaWZ0KG9iaik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqID0gc2VsZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXJncy51bnNoaWZ0KHNlbGYpO1xyXG5cclxuICAgICAgaWYgKCQuaXNGdW5jdGlvbihvYmoub3B0c1tuYW1lXSkpIHtcclxuICAgICAgICByZXogPSBvYmoub3B0c1tuYW1lXS5hcHBseShvYmosIGFyZ3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmV6ID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiByZXo7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuYW1lID09PSBcImFmdGVyQ2xvc2VcIiB8fCAhc2VsZi4kcmVmcykge1xyXG4gICAgICAgICRELnRyaWdnZXIobmFtZSArIFwiLmZiXCIsIGFyZ3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLnRyaWdnZXIobmFtZSArIFwiLmZiXCIsIGFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVwZGF0ZSBpbmZvYmFyIHZhbHVlcywgbmF2aWdhdGlvbiBidXR0b24gc3RhdGVzIGFuZCByZXZlYWwgY2FwdGlvblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgdXBkYXRlQ29udHJvbHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXHJcbiAgICAgICAgaW5kZXggPSBjdXJyZW50LmluZGV4LFxyXG4gICAgICAgICRjb250YWluZXIgPSBzZWxmLiRyZWZzLmNvbnRhaW5lcixcclxuICAgICAgICAkY2FwdGlvbiA9IHNlbGYuJHJlZnMuY2FwdGlvbixcclxuICAgICAgICBjYXB0aW9uID0gY3VycmVudC5vcHRzLmNhcHRpb247XHJcblxyXG4gICAgICAvLyBSZWNhbGN1bGF0ZSBjb250ZW50IGRpbWVuc2lvbnNcclxuICAgICAgY3VycmVudC4kc2xpZGUudHJpZ2dlcihcInJlZnJlc2hcIik7XHJcblxyXG4gICAgICAvLyBTZXQgY2FwdGlvblxyXG4gICAgICBpZiAoY2FwdGlvbiAmJiBjYXB0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgIHNlbGYuJGNhcHRpb24gPSAkY2FwdGlvbjtcclxuXHJcbiAgICAgICAgJGNhcHRpb25cclxuICAgICAgICAgIC5jaGlsZHJlbigpXHJcbiAgICAgICAgICAuZXEoMClcclxuICAgICAgICAgIC5odG1sKGNhcHRpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYuJGNhcHRpb24gPSBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXNlbGYuaGFzSGlkZGVuQ29udHJvbHMgJiYgIXNlbGYuaXNJZGxlKSB7XHJcbiAgICAgICAgc2VsZi5zaG93Q29udHJvbHMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVXBkYXRlIGluZm8gYW5kIG5hdmlnYXRpb24gZWxlbWVudHNcclxuICAgICAgJGNvbnRhaW5lci5maW5kKFwiW2RhdGEtZmFuY3lib3gtY291bnRdXCIpLmh0bWwoc2VsZi5ncm91cC5sZW5ndGgpO1xyXG4gICAgICAkY29udGFpbmVyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1pbmRleF1cIikuaHRtbChpbmRleCArIDEpO1xyXG5cclxuICAgICAgJGNvbnRhaW5lci5maW5kKFwiW2RhdGEtZmFuY3lib3gtcHJldl1cIikucHJvcChcImRpc2FibGVkXCIsICFjdXJyZW50Lm9wdHMubG9vcCAmJiBpbmRleCA8PSAwKTtcclxuICAgICAgJGNvbnRhaW5lci5maW5kKFwiW2RhdGEtZmFuY3lib3gtbmV4dF1cIikucHJvcChcImRpc2FibGVkXCIsICFjdXJyZW50Lm9wdHMubG9vcCAmJiBpbmRleCA+PSBzZWxmLmdyb3VwLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcbiAgICAgICAgLy8gUmUtZW5hYmxlIGJ1dHRvbnM7IHVwZGF0ZSBkb3dubG9hZCBidXR0b24gc291cmNlXHJcbiAgICAgICAgJGNvbnRhaW5lclxyXG4gICAgICAgICAgLmZpbmQoXCJbZGF0YS1mYW5jeWJveC16b29tXVwiKVxyXG4gICAgICAgICAgLnNob3coKVxyXG4gICAgICAgICAgLmVuZCgpXHJcbiAgICAgICAgICAuZmluZChcIltkYXRhLWZhbmN5Ym94LWRvd25sb2FkXVwiKVxyXG4gICAgICAgICAgLmF0dHIoXCJocmVmXCIsIGN1cnJlbnQub3B0cy5pbWFnZS5zcmMgfHwgY3VycmVudC5zcmMpXHJcbiAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnQub3B0cy50b29sYmFyKSB7XHJcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKFwiW2RhdGEtZmFuY3lib3gtZG93bmxvYWRdLFtkYXRhLWZhbmN5Ym94LXpvb21dXCIpLmhpZGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIGZvY3VzIGlzIG5vdCBvbiBkaXNhYmxlZCBidXR0b24vZWxlbWVudFxyXG4gICAgICBpZiAoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcyhcIjpoaWRkZW4sW2Rpc2FibGVkXVwiKSkge1xyXG4gICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBIaWRlIHRvb2xiYXIgYW5kIGNhcHRpb25cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGhpZGVDb250cm9sczogZnVuY3Rpb24gKGFuZENhcHRpb24pIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGFyciA9IFtcImluZm9iYXJcIiwgXCJ0b29sYmFyXCIsIFwibmF2XCJdO1xyXG5cclxuICAgICAgaWYgKGFuZENhcHRpb24gfHwgIXNlbGYuY3VycmVudC5vcHRzLnByZXZlbnRDYXB0aW9uT3ZlcmxhcCkge1xyXG4gICAgICAgIGFyci5wdXNoKFwiY2FwdGlvblwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kcmVmcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgYXJyXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiZmFuY3lib3gtc2hvdy1cIiArIGk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbihcIiBcIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaGFzSGlkZGVuQ29udHJvbHMgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93Q29udHJvbHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIG9wdHMgPSBzZWxmLmN1cnJlbnQgPyBzZWxmLmN1cnJlbnQub3B0cyA6IHNlbGYub3B0cyxcclxuICAgICAgICAkY29udGFpbmVyID0gc2VsZi4kcmVmcy5jb250YWluZXI7XHJcblxyXG4gICAgICBzZWxmLmhhc0hpZGRlbkNvbnRyb2xzID0gZmFsc2U7XHJcbiAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICRjb250YWluZXJcclxuICAgICAgICAudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LXRvb2xiYXJcIiwgISEob3B0cy50b29sYmFyICYmIG9wdHMuYnV0dG9ucykpXHJcbiAgICAgICAgLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtc2hvdy1pbmZvYmFyXCIsICEhKG9wdHMuaW5mb2JhciAmJiBzZWxmLmdyb3VwLmxlbmd0aCA+IDEpKVxyXG4gICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LXNob3ctY2FwdGlvblwiLCAhIXNlbGYuJGNhcHRpb24pXHJcbiAgICAgICAgLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtc2hvdy1uYXZcIiwgISEob3B0cy5hcnJvd3MgJiYgc2VsZi5ncm91cC5sZW5ndGggPiAxKSlcclxuICAgICAgICAudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1pcy1tb2RhbFwiLCAhIW9wdHMubW9kYWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBUb2dnbGUgdG9vbGJhciBhbmQgY2FwdGlvblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICB0b2dnbGVDb250cm9sczogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5oYXNIaWRkZW5Db250cm9scykge1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29udHJvbHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkLmZhbmN5Ym94ID0ge1xyXG4gICAgdmVyc2lvbjogXCIzLjUuN1wiLFxyXG4gICAgZGVmYXVsdHM6IGRlZmF1bHRzLFxyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IGluc3RhbmNlIGFuZCBleGVjdXRlIGEgY29tbWFuZC5cclxuICAgIC8vXHJcbiAgICAvLyBFeGFtcGxlcyBvZiB1c2FnZTpcclxuICAgIC8vXHJcbiAgICAvLyAgICRpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcclxuICAgIC8vICAgJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLmp1bXBUbyggMSApO1xyXG4gICAgLy8gICAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCAnanVtcFRvJywgMSApO1xyXG4gICAgLy8gICAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgIGNvbnNvbGUuaW5mbyggdGhpcy5jdXJySW5kZXggKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBnZXRJbnN0YW5jZTogZnVuY3Rpb24gKGNvbW1hbmQpIHtcclxuICAgICAgdmFyIGluc3RhbmNlID0gJCgnLmZhbmN5Ym94LWNvbnRhaW5lcjpub3QoXCIuZmFuY3lib3gtaXMtY2xvc2luZ1wiKTpsYXN0JykuZGF0YShcIkZhbmN5Qm94XCIpLFxyXG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG5cclxuICAgICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgRmFuY3lCb3gpIHtcclxuICAgICAgICBpZiAoJC50eXBlKGNvbW1hbmQpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICBpbnN0YW5jZVtjb21tYW5kXS5hcHBseShpbnN0YW5jZSwgYXJncyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkLnR5cGUoY29tbWFuZCkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgY29tbWFuZC5hcHBseShpbnN0YW5jZSwgYXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ3JlYXRlIG5ldyBpbnN0YW5jZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIG9wZW46IGZ1bmN0aW9uIChpdGVtcywgb3B0cywgaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBGYW5jeUJveChpdGVtcywgb3B0cywgaW5kZXgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDbG9zZSBjdXJyZW50IG9yIGFsbCBpbnN0YW5jZXNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGNsb3NlOiBmdW5jdGlvbiAoYWxsKSB7XHJcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgIGluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGFuZCBjbG9zZSBuZXh0IGluc3RhbmNlXHJcbiAgICAgICAgaWYgKGFsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZShhbGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDbG9zZSBhbGwgaW5zdGFuY2VzIGFuZCB1bmJpbmQgYWxsIGV2ZW50c1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSk7XHJcblxyXG4gICAgICAkRC5hZGQoXCJib2R5XCIpLm9mZihcImNsaWNrLmZiLXN0YXJ0XCIsIFwiKipcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFRyeSB0byBkZXRlY3QgbW9iaWxlIGRldmljZXNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBpc01vYmlsZTogL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLFxyXG5cclxuICAgIC8vIERldGVjdCBpZiAndHJhbnNsYXRlM2QnIHN1cHBvcnQgaXMgYXZhaWxhYmxlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHVzZTNkOiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUgJiZcclxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkaXYpICYmXHJcbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGl2KS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpICYmXHJcbiAgICAgICAgIShkb2N1bWVudC5kb2N1bWVudE1vZGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlIDwgMTEpXHJcbiAgICAgICk7XHJcbiAgICB9KSgpLFxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgY3VycmVudCB2aXN1YWwgc3RhdGUgb2YgYW4gZWxlbWVudFxyXG4gICAgLy8gcmV0dXJucyBhcnJheVsgdG9wLCBsZWZ0LCBob3Jpem9udGFsLXNjYWxlLCB2ZXJ0aWNhbC1zY2FsZSwgb3BhY2l0eSBdXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBnZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgdmFyIGRvbVJlY3Q7XHJcblxyXG4gICAgICBpZiAoISRlbCB8fCAhJGVsLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9tUmVjdCA9ICRlbFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiBkb21SZWN0LnRvcCB8fCAwLFxyXG4gICAgICAgIGxlZnQ6IGRvbVJlY3QubGVmdCB8fCAwLFxyXG4gICAgICAgIHdpZHRoOiBkb21SZWN0LndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZG9tUmVjdC5oZWlnaHQsXHJcbiAgICAgICAgb3BhY2l0eTogcGFyc2VGbG9hdCgkZWwuY3NzKFwib3BhY2l0eVwiKSlcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gU2hvcnRjdXQgZm9yIHNldHRpbmcgXCJ0cmFuc2xhdGUzZFwiIHByb3BlcnRpZXMgZm9yIGVsZW1lbnRcclxuICAgIC8vIENhbiBzZXQgYmUgdXNlZCB0byBzZXQgb3BhY2l0eSwgdG9vXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCRlbCwgcHJvcHMpIHtcclxuICAgICAgdmFyIHN0ciA9IFwiXCIsXHJcbiAgICAgICAgY3NzID0ge307XHJcblxyXG4gICAgICBpZiAoISRlbCB8fCAhcHJvcHMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcm9wcy5sZWZ0ICE9PSB1bmRlZmluZWQgfHwgcHJvcHMudG9wICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdHIgPVxyXG4gICAgICAgICAgKHByb3BzLmxlZnQgPT09IHVuZGVmaW5lZCA/ICRlbC5wb3NpdGlvbigpLmxlZnQgOiBwcm9wcy5sZWZ0KSArXHJcbiAgICAgICAgICBcInB4LCBcIiArXHJcbiAgICAgICAgICAocHJvcHMudG9wID09PSB1bmRlZmluZWQgPyAkZWwucG9zaXRpb24oKS50b3AgOiBwcm9wcy50b3ApICtcclxuICAgICAgICAgIFwicHhcIjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXNlM2QpIHtcclxuICAgICAgICAgIHN0ciA9IFwidHJhbnNsYXRlM2QoXCIgKyBzdHIgKyBcIiwgMHB4KVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdHIgPSBcInRyYW5zbGF0ZShcIiArIHN0ciArIFwiKVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb3BzLnNjYWxlWCAhPT0gdW5kZWZpbmVkICYmIHByb3BzLnNjYWxlWSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3RyICs9IFwiIHNjYWxlKFwiICsgcHJvcHMuc2NhbGVYICsgXCIsIFwiICsgcHJvcHMuc2NhbGVZICsgXCIpXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuc2NhbGVYICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdHIgKz0gXCIgc2NhbGVYKFwiICsgcHJvcHMuc2NhbGVYICsgXCIpXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgY3NzLnRyYW5zZm9ybSA9IHN0cjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb3BzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNzcy5vcGFjaXR5ID0gcHJvcHMub3BhY2l0eTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb3BzLndpZHRoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjc3Mud2lkdGggPSBwcm9wcy53aWR0aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb3BzLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY3NzLmhlaWdodCA9IHByb3BzLmhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuICRlbC5jc3MoY3NzKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gU2ltcGxlIENTUyB0cmFuc2l0aW9uIGhhbmRsZXJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gKCRlbCwgdG8sIGR1cmF0aW9uLCBjYWxsYmFjaywgbGVhdmVBbmltYXRpb25OYW1lKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBmcm9tO1xyXG5cclxuICAgICAgaWYgKCQuaXNGdW5jdGlvbihkdXJhdGlvbikpIHtcclxuICAgICAgICBjYWxsYmFjayA9IGR1cmF0aW9uO1xyXG4gICAgICAgIGR1cmF0aW9uID0gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5zdG9wKCRlbCk7XHJcblxyXG4gICAgICBmcm9tID0gc2VsZi5nZXRUcmFuc2xhdGUoJGVsKTtcclxuXHJcbiAgICAgICRlbC5vbih0cmFuc2l0aW9uRW5kLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIFNraXAgZXZlbnRzIGZyb20gY2hpbGQgZWxlbWVudHMgYW5kIHotaW5kZXggY2hhbmdlXHJcbiAgICAgICAgaWYgKGUgJiYgZS5vcmlnaW5hbEV2ZW50ICYmICghJGVsLmlzKGUub3JpZ2luYWxFdmVudC50YXJnZXQpIHx8IGUub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUgPT0gXCJ6LWluZGV4XCIpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLnN0b3AoJGVsKTtcclxuXHJcbiAgICAgICAgaWYgKCQuaXNOdW1lcmljKGR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgJGVsLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KHRvKSkge1xyXG4gICAgICAgICAgaWYgKHRvLnNjYWxlWCAhPT0gdW5kZWZpbmVkICYmIHRvLnNjYWxlWSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0VHJhbnNsYXRlKCRlbCwge1xyXG4gICAgICAgICAgICAgIHRvcDogdG8udG9wLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IHRvLmxlZnQsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGZyb20ud2lkdGggKiB0by5zY2FsZVgsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBmcm9tLmhlaWdodCAqIHRvLnNjYWxlWSxcclxuICAgICAgICAgICAgICBzY2FsZVg6IDEsXHJcbiAgICAgICAgICAgICAgc2NhbGVZOiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobGVhdmVBbmltYXRpb25OYW1lICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAkZWwucmVtb3ZlQ2xhc3ModG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcclxuICAgICAgICAgIGNhbGxiYWNrKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoJC5pc051bWVyaWMoZHVyYXRpb24pKSB7XHJcbiAgICAgICAgJGVsLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgZHVyYXRpb24gKyBcIm1zXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTdGFydCBhbmltYXRpb24gYnkgY2hhbmdpbmcgQ1NTIHByb3BlcnRpZXMgb3IgY2xhc3MgbmFtZVxyXG4gICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KHRvKSkge1xyXG4gICAgICAgIGlmICh0by5zY2FsZVggIT09IHVuZGVmaW5lZCAmJiB0by5zY2FsZVkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZGVsZXRlIHRvLndpZHRoO1xyXG4gICAgICAgICAgZGVsZXRlIHRvLmhlaWdodDtcclxuXHJcbiAgICAgICAgICBpZiAoJGVsLnBhcmVudCgpLmhhc0NsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWltYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICRlbC5wYXJlbnQoKS5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLXNjYWxpbmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSgkZWwsIHRvKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkZWwuYWRkQ2xhc3ModG8pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNYWtlIHN1cmUgdGhhdCBgdHJhbnNpdGlvbmVuZGAgY2FsbGJhY2sgZ2V0cyBmaXJlZFxyXG4gICAgICAkZWwuZGF0YShcclxuICAgICAgICBcInRpbWVyXCIsXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkZWwudHJpZ2dlcih0cmFuc2l0aW9uRW5kKTtcclxuICAgICAgICB9LCBkdXJhdGlvbiArIDMzKVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbiAoJGVsLCBjYWxsQ2FsbGJhY2spIHtcclxuICAgICAgaWYgKCRlbCAmJiAkZWwubGVuZ3RoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KCRlbC5kYXRhKFwidGltZXJcIikpO1xyXG5cclxuICAgICAgICBpZiAoY2FsbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAkZWwudHJpZ2dlcih0cmFuc2l0aW9uRW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRlbC5vZmYodHJhbnNpdGlvbkVuZCkuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgJGVsLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtc2NhbGluZ1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIERlZmF1bHQgY2xpY2sgaGFuZGxlciBmb3IgXCJmYW5jeWJveGVkXCIgbGlua3NcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBmdW5jdGlvbiBfcnVuKGUsIG9wdHMpIHtcclxuICAgIHZhciBpdGVtcyA9IFtdLFxyXG4gICAgICBpbmRleCA9IDAsXHJcbiAgICAgICR0YXJnZXQsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBpbnN0YW5jZTtcclxuXHJcbiAgICAvLyBBdm9pZCBvcGVuaW5nIG11bHRpcGxlIHRpbWVzXHJcbiAgICBpZiAoZSAmJiBlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgb3B0cyA9IG9wdHMgfHwge307XHJcblxyXG4gICAgaWYgKGUgJiYgZS5kYXRhKSB7XHJcbiAgICAgIG9wdHMgPSBtZXJnZU9wdHMoZS5kYXRhLm9wdGlvbnMsIG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgICR0YXJnZXQgPSBvcHRzLiR0YXJnZXQgfHwgJChlLmN1cnJlbnRUYXJnZXQpLnRyaWdnZXIoXCJibHVyXCIpO1xyXG4gICAgaW5zdGFuY2UgPSAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLiR0cmlnZ2VyICYmIGluc3RhbmNlLiR0cmlnZ2VyLmlzKCR0YXJnZXQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0cy5zZWxlY3Rvcikge1xyXG4gICAgICBpdGVtcyA9ICQob3B0cy5zZWxlY3Rvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBHZXQgYWxsIHJlbGF0ZWQgaXRlbXMgYW5kIGZpbmQgaW5kZXggZm9yIGNsaWNrZWQgb25lXHJcbiAgICAgIHZhbHVlID0gJHRhcmdldC5hdHRyKFwiZGF0YS1mYW5jeWJveFwiKSB8fCBcIlwiO1xyXG5cclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgaXRlbXMgPSBlLmRhdGEgPyBlLmRhdGEuaXRlbXMgOiBbXTtcclxuICAgICAgICBpdGVtcyA9IGl0ZW1zLmxlbmd0aCA/IGl0ZW1zLmZpbHRlcignW2RhdGEtZmFuY3lib3g9XCInICsgdmFsdWUgKyAnXCJdJykgOiAkKCdbZGF0YS1mYW5jeWJveD1cIicgKyB2YWx1ZSArICdcIl0nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtcyA9IFskdGFyZ2V0XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluZGV4ID0gJChpdGVtcykuaW5kZXgoJHRhcmdldCk7XHJcblxyXG4gICAgLy8gU29tZXRpbWVzIGN1cnJlbnQgaXRlbSBjYW4gbm90IGJlIGZvdW5kXHJcbiAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZSA9ICQuZmFuY3lib3gub3BlbihpdGVtcywgb3B0cywgaW5kZXgpO1xyXG5cclxuICAgIC8vIFNhdmUgbGFzdCBhY3RpdmUgZWxlbWVudFxyXG4gICAgaW5zdGFuY2UuJHRyaWdnZXIgPSAkdGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGEgalF1ZXJ5IHBsdWdpblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgJC5mbi5mYW5jeWJveCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICB2YXIgc2VsZWN0b3I7XHJcblxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IgfHwgZmFsc2U7XHJcblxyXG4gICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgIC8vIFVzZSBib2R5IGVsZW1lbnQgaW5zdGVhZCBvZiBkb2N1bWVudCBzbyBpdCBleGVjdXRlcyBmaXJzdFxyXG4gICAgICAkKFwiYm9keVwiKVxyXG4gICAgICAgIC5vZmYoXCJjbGljay5mYi1zdGFydFwiLCBzZWxlY3RvcilcclxuICAgICAgICAub24oXCJjbGljay5mYi1zdGFydFwiLCBzZWxlY3Rvciwge1xyXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgIH0sIF9ydW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vZmYoXCJjbGljay5mYi1zdGFydFwiKS5vbihcclxuICAgICAgICBcImNsaWNrLmZiLXN0YXJ0XCIsIHtcclxuICAgICAgICAgIGl0ZW1zOiB0aGlzLFxyXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3J1blxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIC8vIFNlbGYgaW5pdGlhbGl6aW5nIHBsdWdpbiBmb3IgYWxsIGVsZW1lbnRzIGhhdmluZyBgZGF0YS1mYW5jeWJveGAgYXR0cmlidXRlXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgJEQub24oXCJjbGljay5mYi1zdGFydFwiLCBcIltkYXRhLWZhbmN5Ym94XVwiLCBfcnVuKTtcclxuXHJcbiAgLy8gRW5hYmxlIFwidHJpZ2dlciBlbGVtZW50c1wiXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAkRC5vbihcImNsaWNrLmZiLXN0YXJ0XCIsIFwiW2RhdGEtZmFuY3lib3gtdHJpZ2dlcl1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJ1tkYXRhLWZhbmN5Ym94PVwiJyArICQodGhpcykuYXR0cihcImRhdGEtZmFuY3lib3gtdHJpZ2dlclwiKSArICdcIl0nKVxyXG4gICAgICAuZXEoJCh0aGlzKS5hdHRyKFwiZGF0YS1mYW5jeWJveC1pbmRleFwiKSB8fCAwKVxyXG4gICAgICAudHJpZ2dlcihcImNsaWNrLmZiLXN0YXJ0XCIsIHtcclxuICAgICAgICAkdHJpZ2dlcjogJCh0aGlzKVxyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gVHJhY2sgZm9jdXMgZXZlbnQgZm9yIGJldHRlciBhY2Nlc3NpYmlsaXR5IHN0eWxpbmdcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYnV0dG9uU3RyID0gXCIuZmFuY3lib3gtYnV0dG9uXCIsXHJcbiAgICAgIGZvY3VzU3RyID0gXCJmYW5jeWJveC1mb2N1c1wiLFxyXG4gICAgICAkcHJlc3NlZCA9IG51bGw7XHJcblxyXG4gICAgJEQub24oXCJtb3VzZWRvd24gbW91c2V1cCBmb2N1cyBibHVyXCIsIGJ1dHRvblN0ciwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgc3dpdGNoIChlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwibW91c2Vkb3duXCI6XHJcbiAgICAgICAgICAkcHJlc3NlZCA9ICQodGhpcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibW91c2V1cFwiOlxyXG4gICAgICAgICAgJHByZXNzZWQgPSBudWxsO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImZvY3VzaW5cIjpcclxuICAgICAgICAgICQoYnV0dG9uU3RyKS5yZW1vdmVDbGFzcyhmb2N1c1N0cik7XHJcblxyXG4gICAgICAgICAgaWYgKCEkKHRoaXMpLmlzKCRwcmVzc2VkKSAmJiAhJCh0aGlzKS5pcyhcIltkaXNhYmxlZF1cIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhmb2N1c1N0cik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZm9jdXNvdXRcIjpcclxuICAgICAgICAgICQoYnV0dG9uU3RyKS5yZW1vdmVDbGFzcyhmb2N1c1N0cik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSkoKTtcclxufSkod2luZG93LCBkb2N1bWVudCwgalF1ZXJ5KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIE1lZGlhXHJcbi8vIEFkZHMgYWRkaXRpb25hbCBtZWRpYSB0eXBlIHN1cHBvcnRcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIC8vIE9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgZm9yIGVhY2ggbWVkaWEgdHlwZVxyXG4gIHZhciBkZWZhdWx0cyA9IHtcclxuICAgIHlvdXR1YmU6IHtcclxuICAgICAgbWF0Y2hlcjogLyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmV8eW91dHViZVxcLW5vY29va2llXFwuY29tKVxcLyh3YXRjaFxcPyguKiYpP3Y9fHZcXC98dVxcL3xlbWJlZFxcLz8pPyh2aWRlb3Nlcmllc1xcP2xpc3Q9KC4qKXxbXFx3LV17MTF9fFxcP2xpc3RUeXBlPSguKikmbGlzdD0oLiopKSguKikvaSxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgYXV0b3BsYXk6IDEsXHJcbiAgICAgICAgYXV0b2hpZGU6IDEsXHJcbiAgICAgICAgZnM6IDEsXHJcbiAgICAgICAgcmVsOiAwLFxyXG4gICAgICAgIGhkOiAxLFxyXG4gICAgICAgIHdtb2RlOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgZW5hYmxlanNhcGk6IDEsXHJcbiAgICAgICAgaHRtbDU6IDFcclxuICAgICAgfSxcclxuICAgICAgcGFyYW1QbGFjZTogOCxcclxuICAgICAgdHlwZTogXCJpZnJhbWVcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkLyQ0XCIsXHJcbiAgICAgIHRodW1iOiBcImh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyQ0L2hxZGVmYXVsdC5qcGdcIlxyXG4gICAgfSxcclxuXHJcbiAgICB2aW1lbzoge1xyXG4gICAgICBtYXRjaGVyOiAvXi4rdmltZW8uY29tXFwvKC4qXFwvKT8oW1xcZF0rKSguKik/LyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgYXV0b3BsYXk6IDEsXHJcbiAgICAgICAgaGQ6IDEsXHJcbiAgICAgICAgc2hvd190aXRsZTogMSxcclxuICAgICAgICBzaG93X2J5bGluZTogMSxcclxuICAgICAgICBzaG93X3BvcnRyYWl0OiAwLFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IDFcclxuICAgICAgfSxcclxuICAgICAgcGFyYW1QbGFjZTogMyxcclxuICAgICAgdHlwZTogXCJpZnJhbWVcIixcclxuICAgICAgdXJsOiBcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8kMlwiXHJcbiAgICB9LFxyXG5cclxuICAgIGluc3RhZ3JhbToge1xyXG4gICAgICBtYXRjaGVyOiAvKGluc3RhZ3JcXC5hbXxpbnN0YWdyYW1cXC5jb20pXFwvcFxcLyhbYS16QS1aMC05X1xcLV0rKVxcLz8vaSxcclxuICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICB1cmw6IFwiLy8kMS9wLyQyL21lZGlhLz9zaXplPWxcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFeGFtcGxlczpcclxuICAgIC8vIGh0dHA6Ly9tYXBzLmdvb2dsZS5jb20vP2xsPTQ4Ljg1Nzk5NSwyLjI5NDI5NyZzcG49MC4wMDc2NjYsMC4wMjExMzYmdD1tJno9MTZcclxuICAgIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9AMzcuNzg1MjAwNiwtMTIyLjQxNDYzNTUsMTQuNjV6XHJcbiAgICAvLyBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvQDUyLjIxMTExMjMsMi45MjM3NTQyLDYuNjF6P2hsPWVuXHJcbiAgICAvLyBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvR29vZ2xlcGxleC9AMzcuNDIyMDA0MSwtMTIyLjA4MzM0OTQsMTd6L2RhdGE9ITRtNSEzbTQhMXMweDA6MHg2YzI5NmM2NjYxOTM2N2UwIThtMiEzZDM3LjQyMTk5OTghNGQtMTIyLjA4NDA1NzJcclxuICAgIGdtYXBfcGxhY2U6IHtcclxuICAgICAgbWF0Y2hlcjogLyhtYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfShcXC5bYS16XXsyfSk/KVxcLygoKG1hcHNcXC8ocGxhY2VcXC8oLiopXFwvKT9cXEAoLiopLChcXGQrLj9cXGQrPyl6KSl8KFxcP2xsPSkpKC4qKT8vaSxcclxuICAgICAgdHlwZTogXCJpZnJhbWVcIixcclxuICAgICAgdXJsOiBmdW5jdGlvbiAocmV6KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIFwiLy9tYXBzLmdvb2dsZS5cIiArXHJcbiAgICAgICAgICByZXpbMl0gK1xyXG4gICAgICAgICAgXCIvP2xsPVwiICtcclxuICAgICAgICAgIChyZXpbOV0gPyByZXpbOV0gKyBcIiZ6PVwiICsgTWF0aC5mbG9vcihyZXpbMTBdKSArIChyZXpbMTJdID8gcmV6WzEyXS5yZXBsYWNlKC9eXFwvLywgXCImXCIpIDogXCJcIikgOiByZXpbMTJdICsgXCJcIikucmVwbGFjZSgvXFw/LywgXCImXCIpICtcclxuICAgICAgICAgIFwiJm91dHB1dD1cIiArXHJcbiAgICAgICAgICAocmV6WzEyXSAmJiByZXpbMTJdLmluZGV4T2YoXCJsYXllcj1jXCIpID4gMCA/IFwic3ZlbWJlZFwiIDogXCJlbWJlZFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gRXhhbXBsZXM6XHJcbiAgICAvLyBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoL0VtcGlyZStTdGF0ZStCdWlsZGluZy9cclxuICAgIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PWNlbnR1cnlsaW5rK2ZpZWxkXHJcbiAgICAvLyBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT00Ny41OTUxNTE4LC0xMjIuMzMxNjM5M1xyXG4gICAgZ21hcF9zZWFyY2g6IHtcclxuICAgICAgbWF0Y2hlcjogLyhtYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfShcXC5bYS16XXsyfSk/KVxcLyhtYXBzXFwvc2VhcmNoXFwvKSguKikvaSxcclxuICAgICAgdHlwZTogXCJpZnJhbWVcIixcclxuICAgICAgdXJsOiBmdW5jdGlvbiAocmV6KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiLy9tYXBzLmdvb2dsZS5cIiArIHJlelsyXSArIFwiL21hcHM/cT1cIiArIHJlels1XS5yZXBsYWNlKFwicXVlcnk9XCIsIFwicT1cIikucmVwbGFjZShcImFwaT0xXCIsIFwiXCIpICsgXCImb3V0cHV0PWVtYmVkXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGb3JtYXRzIG1hdGNoaW5nIHVybCB0byBmaW5hbCBmb3JtXHJcbiAgdmFyIGZvcm1hdCA9IGZ1bmN0aW9uICh1cmwsIHJleiwgcGFyYW1zKSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IFwiXCI7XHJcblxyXG4gICAgaWYgKCQudHlwZShwYXJhbXMpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHBhcmFtcyA9ICQucGFyYW0ocGFyYW1zLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAkLmVhY2gocmV6LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICB1cmwgPSB1cmwucmVwbGFjZShcIiRcIiArIGtleSwgdmFsdWUgfHwgXCJcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocGFyYW1zLmxlbmd0aCkge1xyXG4gICAgICB1cmwgKz0gKHVybC5pbmRleE9mKFwiP1wiKSA+IDAgPyBcIiZcIiA6IFwiP1wiKSArIHBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwib2JqZWN0TmVlZHNUeXBlLmZiXCIsIGZ1bmN0aW9uIChlLCBpbnN0YW5jZSwgaXRlbSkge1xyXG4gICAgdmFyIHVybCA9IGl0ZW0uc3JjIHx8IFwiXCIsXHJcbiAgICAgIHR5cGUgPSBmYWxzZSxcclxuICAgICAgbWVkaWEsXHJcbiAgICAgIHRodW1iLFxyXG4gICAgICByZXosXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgdXJsUGFyYW1zLFxyXG4gICAgICBwYXJhbU9iaixcclxuICAgICAgcHJvdmlkZXI7XHJcblxyXG4gICAgbWVkaWEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGVmYXVsdHMsIGl0ZW0ub3B0cy5tZWRpYSk7XHJcblxyXG4gICAgLy8gTG9vayBmb3IgYW55IG1hdGNoaW5nIG1lZGlhIHR5cGVcclxuICAgICQuZWFjaChtZWRpYSwgZnVuY3Rpb24gKHByb3ZpZGVyTmFtZSwgcHJvdmlkZXJPcHRzKSB7XHJcbiAgICAgIHJleiA9IHVybC5tYXRjaChwcm92aWRlck9wdHMubWF0Y2hlcik7XHJcblxyXG4gICAgICBpZiAoIXJleikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHlwZSA9IHByb3ZpZGVyT3B0cy50eXBlO1xyXG4gICAgICBwcm92aWRlciA9IHByb3ZpZGVyTmFtZTtcclxuICAgICAgcGFyYW1PYmogPSB7fTtcclxuXHJcbiAgICAgIGlmIChwcm92aWRlck9wdHMucGFyYW1QbGFjZSAmJiByZXpbcHJvdmlkZXJPcHRzLnBhcmFtUGxhY2VdKSB7XHJcbiAgICAgICAgdXJsUGFyYW1zID0gcmV6W3Byb3ZpZGVyT3B0cy5wYXJhbVBsYWNlXTtcclxuXHJcbiAgICAgICAgaWYgKHVybFBhcmFtc1swXSA9PSBcIj9cIikge1xyXG4gICAgICAgICAgdXJsUGFyYW1zID0gdXJsUGFyYW1zLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVybFBhcmFtcyA9IHVybFBhcmFtcy5zcGxpdChcIiZcIik7XHJcblxyXG4gICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgdXJsUGFyYW1zLmxlbmd0aDsgKyttKSB7XHJcbiAgICAgICAgICB2YXIgcCA9IHVybFBhcmFtc1ttXS5zcGxpdChcIj1cIiwgMik7XHJcblxyXG4gICAgICAgICAgaWYgKHAubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgcGFyYW1PYmpbcFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQocFsxXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhcmFtcyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBwcm92aWRlck9wdHMucGFyYW1zLCBpdGVtLm9wdHNbcHJvdmlkZXJOYW1lXSwgcGFyYW1PYmopO1xyXG5cclxuICAgICAgdXJsID1cclxuICAgICAgICAkLnR5cGUocHJvdmlkZXJPcHRzLnVybCkgPT09IFwiZnVuY3Rpb25cIiA/IHByb3ZpZGVyT3B0cy51cmwuY2FsbCh0aGlzLCByZXosIHBhcmFtcywgaXRlbSkgOiBmb3JtYXQocHJvdmlkZXJPcHRzLnVybCwgcmV6LCBwYXJhbXMpO1xyXG5cclxuICAgICAgdGh1bWIgPVxyXG4gICAgICAgICQudHlwZShwcm92aWRlck9wdHMudGh1bWIpID09PSBcImZ1bmN0aW9uXCIgPyBwcm92aWRlck9wdHMudGh1bWIuY2FsbCh0aGlzLCByZXosIHBhcmFtcywgaXRlbSkgOiBmb3JtYXQocHJvdmlkZXJPcHRzLnRodW1iLCByZXopO1xyXG5cclxuICAgICAgaWYgKHByb3ZpZGVyTmFtZSA9PT0gXCJ5b3V0dWJlXCIpIHtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvJnQ9KChcXGQrKW0pPyhcXGQrKXMvLCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBtLCBzKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCImc3RhcnQ9XCIgKyAoKG0gPyBwYXJzZUludChtLCAxMCkgKiA2MCA6IDApICsgcGFyc2VJbnQocywgMTApKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChwcm92aWRlck5hbWUgPT09IFwidmltZW9cIikge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiJiUyM1wiLCBcIiNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIElmIGl0IGlzIGZvdW5kLCB0aGVuIGNoYW5nZSBjb250ZW50IHR5cGUgYW5kIHVwZGF0ZSB0aGUgdXJsXHJcblxyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgaWYgKCFpdGVtLm9wdHMudGh1bWIgJiYgIShpdGVtLm9wdHMuJHRodW1iICYmIGl0ZW0ub3B0cy4kdGh1bWIubGVuZ3RoKSkge1xyXG4gICAgICAgIGl0ZW0ub3B0cy50aHVtYiA9IHRodW1iO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gXCJpZnJhbWVcIikge1xyXG4gICAgICAgIGl0ZW0ub3B0cyA9ICQuZXh0ZW5kKHRydWUsIGl0ZW0ub3B0cywge1xyXG4gICAgICAgICAgaWZyYW1lOiB7XHJcbiAgICAgICAgICAgIHByZWxvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBcIm5vXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkLmV4dGVuZChpdGVtLCB7XHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBzcmM6IHVybCxcclxuICAgICAgICBvcmlnU3JjOiBpdGVtLnNyYyxcclxuICAgICAgICBjb250ZW50U291cmNlOiBwcm92aWRlcixcclxuICAgICAgICBjb250ZW50VHlwZTogdHlwZSA9PT0gXCJpbWFnZVwiID8gXCJpbWFnZVwiIDogcHJvdmlkZXIgPT0gXCJnbWFwX3BsYWNlXCIgfHwgcHJvdmlkZXIgPT0gXCJnbWFwX3NlYXJjaFwiID8gXCJtYXBcIiA6IFwidmlkZW9cIlxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodXJsKSB7XHJcbiAgICAgIGl0ZW0udHlwZSA9IGl0ZW0ub3B0cy5kZWZhdWx0VHlwZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gTG9hZCBZb3VUdWJlL1ZpZGVvIEFQSSBvbiByZXF1ZXN0IHRvIGRldGVjdCB3aGVuIHZpZGVvIGZpbmlzaGVkIHBsYXlpbmdcclxuICB2YXIgVmlkZW9BUElMb2FkZXIgPSB7XHJcbiAgICB5b3V0dWJlOiB7XHJcbiAgICAgIHNyYzogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCIsXHJcbiAgICAgIGNsYXNzOiBcIllUXCIsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBsb2FkZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIHZpbWVvOiB7XHJcbiAgICAgIHNyYzogXCJodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qc1wiLFxyXG4gICAgICBjbGFzczogXCJWaW1lb1wiLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgbG9hZGVkOiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkOiBmdW5jdGlvbiAodmVuZG9yKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXMsXHJcbiAgICAgICAgc2NyaXB0O1xyXG5cclxuICAgICAgaWYgKHRoaXNbdmVuZG9yXS5sb2FkZWQpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIF90aGlzLmRvbmUodmVuZG9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzW3ZlbmRvcl0ubG9hZGluZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpc1t2ZW5kb3JdLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gICAgICBzY3JpcHQuc3JjID0gdGhpc1t2ZW5kb3JdLnNyYztcclxuXHJcbiAgICAgIGlmICh2ZW5kb3IgPT09IFwieW91dHViZVwiKSB7XHJcbiAgICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgX3RoaXNbdmVuZG9yXS5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgX3RoaXMuZG9uZSh2ZW5kb3IpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIF90aGlzW3ZlbmRvcl0ubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgIF90aGlzLmRvbmUodmVuZG9yKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9LFxyXG4gICAgZG9uZTogZnVuY3Rpb24gKHZlbmRvcikge1xyXG4gICAgICB2YXIgaW5zdGFuY2UsICRlbCwgcGxheWVyO1xyXG5cclxuICAgICAgaWYgKHZlbmRvciA9PT0gXCJ5b3V0dWJlXCIpIHtcclxuICAgICAgICBkZWxldGUgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICRlbCA9IGluc3RhbmNlLmN1cnJlbnQuJGNvbnRlbnQuZmluZChcImlmcmFtZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHZlbmRvciA9PT0gXCJ5b3V0dWJlXCIgJiYgWVQgIT09IHVuZGVmaW5lZCAmJiBZVCkge1xyXG4gICAgICAgICAgcGxheWVyID0gbmV3IFlULlBsYXllcigkZWwuYXR0cihcImlkXCIpLCB7XHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgaW5zdGFuY2UubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2ZW5kb3IgPT09IFwidmltZW9cIiAmJiBWaW1lbyAhPT0gdW5kZWZpbmVkICYmIFZpbWVvKSB7XHJcbiAgICAgICAgICBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKCRlbCk7XHJcblxyXG4gICAgICAgICAgcGxheWVyLm9uKFwiZW5kZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5uZXh0KCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkKGRvY3VtZW50KS5vbih7XHJcbiAgICBcImFmdGVyU2hvdy5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQpIHtcclxuICAgICAgaWYgKGluc3RhbmNlLmdyb3VwLmxlbmd0aCA+IDEgJiYgKGN1cnJlbnQuY29udGVudFNvdXJjZSA9PT0gXCJ5b3V0dWJlXCIgfHwgY3VycmVudC5jb250ZW50U291cmNlID09PSBcInZpbWVvXCIpKSB7XHJcbiAgICAgICAgVmlkZW9BUElMb2FkZXIubG9hZChjdXJyZW50LmNvbnRlbnRTb3VyY2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyBHdWVzdHVyZXNcclxuLy8gQWRkcyB0b3VjaCBndWVzdHVyZXMsIGhhbmRsZXMgY2xpY2sgYW5kIHRhcCBldmVudHNcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCAkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHZhciByZXF1ZXN0QUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIC8vIGlmIGFsbCBlbHNlIGZhaWxzLCB1c2Ugc2V0VGltZW91dFxyXG4gICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSkoKTtcclxuXHJcbiAgdmFyIGNhbmNlbEFGcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cub0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG4gIHZhciBnZXRQb2ludGVyWFkgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZSB8fCB3aW5kb3cuZTtcclxuICAgIGUgPSBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA/IGUudG91Y2hlcyA6IGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBlLmNoYW5nZWRUb3VjaGVzIDogW2VdO1xyXG5cclxuICAgIGZvciAodmFyIGtleSBpbiBlKSB7XHJcbiAgICAgIGlmIChlW2tleV0ucGFnZVgpIHtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICB4OiBlW2tleV0ucGFnZVgsXHJcbiAgICAgICAgICB5OiBlW2tleV0ucGFnZVlcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlW2tleV0uY2xpZW50WCkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgIHg6IGVba2V5XS5jbGllbnRYLFxyXG4gICAgICAgICAgeTogZVtrZXldLmNsaWVudFlcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRpc3RhbmNlID0gZnVuY3Rpb24gKHBvaW50MiwgcG9pbnQxLCB3aGF0KSB7XHJcbiAgICBpZiAoIXBvaW50MSB8fCAhcG9pbnQyKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aGF0ID09PSBcInhcIikge1xyXG4gICAgICByZXR1cm4gcG9pbnQyLnggLSBwb2ludDEueDtcclxuICAgIH0gZWxzZSBpZiAod2hhdCA9PT0gXCJ5XCIpIHtcclxuICAgICAgcmV0dXJuIHBvaW50Mi55IC0gcG9pbnQxLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwb2ludDIueCAtIHBvaW50MS54LCAyKSArIE1hdGgucG93KHBvaW50Mi55IC0gcG9pbnQxLnksIDIpKTtcclxuICB9O1xyXG5cclxuICB2YXIgaXNDbGlja2FibGUgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICRlbC5pcygnYSxhcmVhLGJ1dHRvbixbcm9sZT1cImJ1dHRvblwiXSxpbnB1dCxsYWJlbCxzZWxlY3Qsc3VtbWFyeSx0ZXh0YXJlYSx2aWRlbyxhdWRpbyxpZnJhbWUnKSB8fFxyXG4gICAgICAkLmlzRnVuY3Rpb24oJGVsLmdldCgwKS5vbmNsaWNrKSB8fFxyXG4gICAgICAkZWwuZGF0YShcInNlbGVjdGFibGVcIilcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBmb3IgYXR0cmlidXRlcyBsaWtlIGRhdGEtZmFuY3lib3gtbmV4dCBvciBkYXRhLWZhbmN5Ym94LWNsb3NlXHJcbiAgICBmb3IgKHZhciBpID0gMCwgYXR0cyA9ICRlbFswXS5hdHRyaWJ1dGVzLCBuID0gYXR0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgaWYgKGF0dHNbaV0ubm9kZU5hbWUuc3Vic3RyKDAsIDE0KSA9PT0gXCJkYXRhLWZhbmN5Ym94LVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGhhc1Njcm9sbGJhcnMgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIHZhciBvdmVyZmxvd1kgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbXCJvdmVyZmxvdy15XCJdLFxyXG4gICAgICBvdmVyZmxvd1ggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbXCJvdmVyZmxvdy14XCJdLFxyXG4gICAgICB2ZXJ0aWNhbCA9IChvdmVyZmxvd1kgPT09IFwic2Nyb2xsXCIgfHwgb3ZlcmZsb3dZID09PSBcImF1dG9cIikgJiYgZWwuc2Nyb2xsSGVpZ2h0ID4gZWwuY2xpZW50SGVpZ2h0LFxyXG4gICAgICBob3Jpem9udGFsID0gKG92ZXJmbG93WCA9PT0gXCJzY3JvbGxcIiB8fCBvdmVyZmxvd1ggPT09IFwiYXV0b1wiKSAmJiBlbC5zY3JvbGxXaWR0aCA+IGVsLmNsaWVudFdpZHRoO1xyXG5cclxuICAgIHJldHVybiB2ZXJ0aWNhbCB8fCBob3Jpem9udGFsO1xyXG4gIH07XHJcblxyXG4gIHZhciBpc1Njcm9sbGFibGUgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICB2YXIgcmV6ID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgcmV6ID0gaGFzU2Nyb2xsYmFycygkZWwuZ2V0KDApKTtcclxuXHJcbiAgICAgIGlmIChyZXopIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgJGVsID0gJGVsLnBhcmVudCgpO1xyXG5cclxuICAgICAgaWYgKCEkZWwubGVuZ3RoIHx8ICRlbC5oYXNDbGFzcyhcImZhbmN5Ym94LXN0YWdlXCIpIHx8ICRlbC5pcyhcImJvZHlcIikpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXo7XHJcbiAgfTtcclxuXHJcbiAgdmFyIEd1ZXN0dXJlcyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNlbGYuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHJcbiAgICBzZWxmLiRiZyA9IGluc3RhbmNlLiRyZWZzLmJnO1xyXG4gICAgc2VsZi4kc3RhZ2UgPSBpbnN0YW5jZS4kcmVmcy5zdGFnZTtcclxuICAgIHNlbGYuJGNvbnRhaW5lciA9IGluc3RhbmNlLiRyZWZzLmNvbnRhaW5lcjtcclxuXHJcbiAgICBzZWxmLmRlc3Ryb3koKTtcclxuXHJcbiAgICBzZWxmLiRjb250YWluZXIub24oXCJ0b3VjaHN0YXJ0LmZiLnRvdWNoIG1vdXNlZG93bi5mYi50b3VjaFwiLCAkLnByb3h5KHNlbGYsIFwib250b3VjaHN0YXJ0XCIpKTtcclxuICB9O1xyXG5cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi4kY29udGFpbmVyLm9mZihcIi5mYi50b3VjaFwiKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vZmYoXCIuZmIudG91Y2hcIik7XHJcblxyXG4gICAgaWYgKHNlbGYucmVxdWVzdElkKSB7XHJcbiAgICAgIGNhbmNlbEFGcmFtZShzZWxmLnJlcXVlc3RJZCk7XHJcbiAgICAgIHNlbGYucmVxdWVzdElkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZi50YXBwZWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYudGFwcGVkKTtcclxuICAgICAgc2VsZi50YXBwZWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgJHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgICBpbnN0YW5jZSA9IHNlbGYuaW5zdGFuY2UsXHJcbiAgICAgIGN1cnJlbnQgPSBpbnN0YW5jZS5jdXJyZW50LFxyXG4gICAgICAkc2xpZGUgPSBjdXJyZW50LiRzbGlkZSxcclxuICAgICAgJGNvbnRlbnQgPSBjdXJyZW50LiRjb250ZW50LFxyXG4gICAgICBpc1RvdWNoRGV2aWNlID0gZS50eXBlID09IFwidG91Y2hzdGFydFwiO1xyXG5cclxuICAgIC8vIERvIG5vdCByZXNwb25kIHRvIGJvdGggKHRvdWNoIGFuZCBtb3VzZSkgZXZlbnRzXHJcbiAgICBpZiAoaXNUb3VjaERldmljZSkge1xyXG4gICAgICBzZWxmLiRjb250YWluZXIub2ZmKFwibW91c2Vkb3duLmZiLnRvdWNoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElnbm9yZSByaWdodCBjbGlja1xyXG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQuYnV0dG9uID09IDIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElnbm9yZSB0YXBpbmcgb24gbGlua3MsIGJ1dHRvbnMsIGlucHV0IGVsZW1lbnRzXHJcbiAgICBpZiAoISRzbGlkZS5sZW5ndGggfHwgISR0YXJnZXQubGVuZ3RoIHx8IGlzQ2xpY2thYmxlKCR0YXJnZXQpIHx8IGlzQ2xpY2thYmxlKCR0YXJnZXQucGFyZW50KCkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIElnbm9yZSBjbGlja3Mgb24gdGhlIHNjcm9sbGJhclxyXG4gICAgaWYgKCEkdGFyZ2V0LmlzKFwiaW1nXCIpICYmIGUub3JpZ2luYWxFdmVudC5jbGllbnRYID4gJHRhcmdldFswXS5jbGllbnRXaWR0aCArICR0YXJnZXQub2Zmc2V0KCkubGVmdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWdub3JlIGNsaWNrcyB3aGlsZSB6b29taW5nIG9yIGNsb3NpbmdcclxuICAgIGlmICghY3VycmVudCB8fCBpbnN0YW5jZS5pc0FuaW1hdGluZyB8fCBjdXJyZW50LiRzbGlkZS5oYXNDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnJlYWxQb2ludHMgPSBzZWxmLnN0YXJ0UG9pbnRzID0gZ2V0UG9pbnRlclhZKGUpO1xyXG5cclxuICAgIGlmICghc2VsZi5zdGFydFBvaW50cy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFsbG93IG90aGVyIHNjcmlwdHMgdG8gY2F0Y2ggdG91Y2ggZXZlbnQgaWYgXCJ0b3VjaFwiIGlzIHNldCB0byBmYWxzZVxyXG4gICAgaWYgKGN1cnJlbnQudG91Y2gpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnN0YXJ0RXZlbnQgPSBlO1xyXG5cclxuICAgIHNlbGYuY2FuVGFwID0gdHJ1ZTtcclxuICAgIHNlbGYuJHRhcmdldCA9ICR0YXJnZXQ7XHJcbiAgICBzZWxmLiRjb250ZW50ID0gJGNvbnRlbnQ7XHJcbiAgICBzZWxmLm9wdHMgPSBjdXJyZW50Lm9wdHMudG91Y2g7XHJcblxyXG4gICAgc2VsZi5pc1Bhbm5pbmcgPSBmYWxzZTtcclxuICAgIHNlbGYuaXNTd2lwaW5nID0gZmFsc2U7XHJcbiAgICBzZWxmLmlzWm9vbWluZyA9IGZhbHNlO1xyXG4gICAgc2VsZi5pc1Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgc2VsZi5jYW5QYW4gPSBpbnN0YW5jZS5jYW5QYW4oKTtcclxuXHJcbiAgICBzZWxmLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgc2VsZi5kaXN0YW5jZVggPSBzZWxmLmRpc3RhbmNlWSA9IHNlbGYuZGlzdGFuY2UgPSAwO1xyXG5cclxuICAgIHNlbGYuY2FudmFzV2lkdGggPSBNYXRoLnJvdW5kKCRzbGlkZVswXS5jbGllbnRXaWR0aCk7XHJcbiAgICBzZWxmLmNhbnZhc0hlaWdodCA9IE1hdGgucm91bmQoJHNsaWRlWzBdLmNsaWVudEhlaWdodCk7XHJcblxyXG4gICAgc2VsZi5jb250ZW50TGFzdFBvcyA9IG51bGw7XHJcbiAgICBzZWxmLmNvbnRlbnRTdGFydFBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHNlbGYuJGNvbnRlbnQpIHx8IHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwXHJcbiAgICB9O1xyXG4gICAgc2VsZi5zbGlkZXJTdGFydFBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCRzbGlkZSk7XHJcblxyXG4gICAgLy8gU2luY2UgcG9zaXRpb24gd2lsbCBiZSBhYnNvbHV0ZSwgYnV0IHdlIG5lZWQgdG8gbWFrZSBpdCByZWxhdGl2ZSB0byB0aGUgc3RhZ2VcclxuICAgIHNlbGYuc3RhZ2VQb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShpbnN0YW5jZS4kcmVmcy5zdGFnZSk7XHJcblxyXG4gICAgc2VsZi5zbGlkZXJTdGFydFBvcy50b3AgLT0gc2VsZi5zdGFnZVBvcy50b3A7XHJcbiAgICBzZWxmLnNsaWRlclN0YXJ0UG9zLmxlZnQgLT0gc2VsZi5zdGFnZVBvcy5sZWZ0O1xyXG5cclxuICAgIHNlbGYuY29udGVudFN0YXJ0UG9zLnRvcCAtPSBzZWxmLnN0YWdlUG9zLnRvcDtcclxuICAgIHNlbGYuY29udGVudFN0YXJ0UG9zLmxlZnQgLT0gc2VsZi5zdGFnZVBvcy5sZWZ0O1xyXG5cclxuICAgICQoZG9jdW1lbnQpXHJcbiAgICAgIC5vZmYoXCIuZmIudG91Y2hcIilcclxuICAgICAgLm9uKGlzVG91Y2hEZXZpY2UgPyBcInRvdWNoZW5kLmZiLnRvdWNoIHRvdWNoY2FuY2VsLmZiLnRvdWNoXCIgOiBcIm1vdXNldXAuZmIudG91Y2ggbW91c2VsZWF2ZS5mYi50b3VjaFwiLCAkLnByb3h5KHNlbGYsIFwib250b3VjaGVuZFwiKSlcclxuICAgICAgLm9uKGlzVG91Y2hEZXZpY2UgPyBcInRvdWNobW92ZS5mYi50b3VjaFwiIDogXCJtb3VzZW1vdmUuZmIudG91Y2hcIiwgJC5wcm94eShzZWxmLCBcIm9udG91Y2htb3ZlXCIpKTtcclxuXHJcbiAgICBpZiAoJC5mYW5jeWJveC5pc01vYmlsZSkge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNlbGYub25zY3JvbGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgaWYgY2xpY2tlZCBvdXRzaWRlIHRoZSBzbGlkaW5nIGFyZWFcclxuICAgIGlmICghKHNlbGYub3B0cyB8fCBzZWxmLmNhblBhbikgfHwgISgkdGFyZ2V0LmlzKHNlbGYuJHN0YWdlKSB8fCBzZWxmLiRzdGFnZS5maW5kKCR0YXJnZXQpLmxlbmd0aCkpIHtcclxuICAgICAgaWYgKCR0YXJnZXQuaXMoXCIuZmFuY3lib3gtaW1hZ2VcIikpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghKCQuZmFuY3lib3guaXNNb2JpbGUgJiYgJHRhcmdldC5wYXJlbnRzKFwiLmZhbmN5Ym94LWNhcHRpb25cIikubGVuZ3RoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuaXNTY3JvbGxhYmxlID0gaXNTY3JvbGxhYmxlKCR0YXJnZXQpIHx8IGlzU2Nyb2xsYWJsZSgkdGFyZ2V0LnBhcmVudCgpKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIHNjcm9sbGFibGUgYW5kIHRyeSB0byBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IgKHNjcm9sbGluZylcclxuICAgIGlmICghKCQuZmFuY3lib3guaXNNb2JpbGUgJiYgc2VsZi5pc1Njcm9sbGFibGUpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmUgZmluZ2VyIG9yIG1vdXNlIGNsaWNrIC0gc3dpcGUgb3IgcGFuIGFuIGltYWdlXHJcbiAgICBpZiAoc2VsZi5zdGFydFBvaW50cy5sZW5ndGggPT09IDEgfHwgY3VycmVudC5oYXNFcnJvcikge1xyXG4gICAgICBpZiAoc2VsZi5jYW5QYW4pIHtcclxuICAgICAgICAkLmZhbmN5Ym94LnN0b3Aoc2VsZi4kY29udGVudCk7XHJcblxyXG4gICAgICAgIHNlbGYuaXNQYW5uaW5nID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxmLmlzU3dpcGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLWdyYWJiaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFR3byBmaW5nZXJzIC0gem9vbSBpbWFnZVxyXG4gICAgaWYgKHNlbGYuc3RhcnRQb2ludHMubGVuZ3RoID09PSAyICYmIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiICYmIChjdXJyZW50LmlzTG9hZGVkIHx8IGN1cnJlbnQuJGdob3N0KSkge1xyXG4gICAgICBzZWxmLmNhblRhcCA9IGZhbHNlO1xyXG4gICAgICBzZWxmLmlzU3dpcGluZyA9IGZhbHNlO1xyXG4gICAgICBzZWxmLmlzUGFubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgc2VsZi5pc1pvb21pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgJC5mYW5jeWJveC5zdG9wKHNlbGYuJGNvbnRlbnQpO1xyXG5cclxuICAgICAgc2VsZi5jZW50ZXJQb2ludFN0YXJ0WCA9IChzZWxmLnN0YXJ0UG9pbnRzWzBdLnggKyBzZWxmLnN0YXJ0UG9pbnRzWzFdLngpICogMC41IC0gJCh3aW5kb3cpLnNjcm9sbExlZnQoKTtcclxuICAgICAgc2VsZi5jZW50ZXJQb2ludFN0YXJ0WSA9IChzZWxmLnN0YXJ0UG9pbnRzWzBdLnkgKyBzZWxmLnN0YXJ0UG9pbnRzWzFdLnkpICogMC41IC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgc2VsZi5wZXJjZW50YWdlT2ZJbWFnZUF0UGluY2hQb2ludFggPSAoc2VsZi5jZW50ZXJQb2ludFN0YXJ0WCAtIHNlbGYuY29udGVudFN0YXJ0UG9zLmxlZnQpIC8gc2VsZi5jb250ZW50U3RhcnRQb3Mud2lkdGg7XHJcbiAgICAgIHNlbGYucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZID0gKHNlbGYuY2VudGVyUG9pbnRTdGFydFkgLSBzZWxmLmNvbnRlbnRTdGFydFBvcy50b3ApIC8gc2VsZi5jb250ZW50U3RhcnRQb3MuaGVpZ2h0O1xyXG5cclxuICAgICAgc2VsZi5zdGFydERpc3RhbmNlQmV0d2VlbkZpbmdlcnMgPSBkaXN0YW5jZShzZWxmLnN0YXJ0UG9pbnRzWzBdLCBzZWxmLnN0YXJ0UG9pbnRzWzFdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLm9uc2Nyb2xsID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcclxuXHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNlbGYub25zY3JvbGwsIHRydWUpO1xyXG4gIH07XHJcblxyXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSB1c2VyIGhhcyBub3QgcmVsZWFzZWQgb3ZlciBpZnJhbWUgb3IgZGlzYWJsZWQgZWxlbWVudFxyXG4gICAgaWYgKGUub3JpZ2luYWxFdmVudC5idXR0b25zICE9PSB1bmRlZmluZWQgJiYgZS5vcmlnaW5hbEV2ZW50LmJ1dHRvbnMgPT09IDApIHtcclxuICAgICAgc2VsZi5vbnRvdWNoZW5kKGUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGYuaXNTY3JvbGxpbmcpIHtcclxuICAgICAgc2VsZi5jYW5UYXAgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYubmV3UG9pbnRzID0gZ2V0UG9pbnRlclhZKGUpO1xyXG5cclxuICAgIGlmICghKHNlbGYub3B0cyB8fCBzZWxmLmNhblBhbikgfHwgIXNlbGYubmV3UG9pbnRzLmxlbmd0aCB8fCAhc2VsZi5uZXdQb2ludHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShzZWxmLmlzU3dpcGluZyAmJiBzZWxmLmlzU3dpcGluZyA9PT0gdHJ1ZSkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuZGlzdGFuY2VYID0gZGlzdGFuY2Uoc2VsZi5uZXdQb2ludHNbMF0sIHNlbGYuc3RhcnRQb2ludHNbMF0sIFwieFwiKTtcclxuICAgIHNlbGYuZGlzdGFuY2VZID0gZGlzdGFuY2Uoc2VsZi5uZXdQb2ludHNbMF0sIHNlbGYuc3RhcnRQb2ludHNbMF0sIFwieVwiKTtcclxuXHJcbiAgICBzZWxmLmRpc3RhbmNlID0gZGlzdGFuY2Uoc2VsZi5uZXdQb2ludHNbMF0sIHNlbGYuc3RhcnRQb2ludHNbMF0pO1xyXG5cclxuICAgIC8vIFNraXAgZmFsc2Ugb250b3VjaG1vdmUgZXZlbnRzIChDaHJvbWUpXHJcbiAgICBpZiAoc2VsZi5kaXN0YW5jZSA+IDApIHtcclxuICAgICAgaWYgKHNlbGYuaXNTd2lwaW5nKSB7XHJcbiAgICAgICAgc2VsZi5vblN3aXBlKGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGYuaXNQYW5uaW5nKSB7XHJcbiAgICAgICAgc2VsZi5vblBhbigpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGYuaXNab29taW5nKSB7XHJcbiAgICAgICAgc2VsZi5vblpvb20oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUub25Td2lwZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcclxuICAgICAgc3dpcGluZyA9IHNlbGYuaXNTd2lwaW5nLFxyXG4gICAgICBsZWZ0ID0gc2VsZi5zbGlkZXJTdGFydFBvcy5sZWZ0IHx8IDAsXHJcbiAgICAgIGFuZ2xlO1xyXG5cclxuICAgIC8vIElmIGRpcmVjdGlvbiBpcyBub3QgeWV0IGRldGVybWluZWRcclxuICAgIGlmIChzd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgIC8vIFdlIG5lZWQgYXQgbGVhc3QgMTBweCBkaXN0YW5jZSB0byBjb3JyZWN0bHkgY2FsY3VsYXRlIGFuIGFuZ2xlXHJcbiAgICAgIGlmIChNYXRoLmFicyhzZWxmLmRpc3RhbmNlKSA+IDEwKSB7XHJcbiAgICAgICAgc2VsZi5jYW5UYXAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIgJiYgc2VsZi5vcHRzLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICBzZWxmLmlzU3dpcGluZyA9IFwieVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UuaXNEcmFnZ2luZyB8fCBzZWxmLm9wdHMudmVydGljYWwgPT09IGZhbHNlIHx8IChzZWxmLm9wdHMudmVydGljYWwgPT09IFwiYXV0b1wiICYmICQod2luZG93KS53aWR0aCgpID4gODAwKSkge1xyXG4gICAgICAgICAgc2VsZi5pc1N3aXBpbmcgPSBcInhcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYW5nbGUgPSBNYXRoLmFicygoTWF0aC5hdGFuMihzZWxmLmRpc3RhbmNlWSwgc2VsZi5kaXN0YW5jZVgpICogMTgwKSAvIE1hdGguUEkpO1xyXG5cclxuICAgICAgICAgIHNlbGYuaXNTd2lwaW5nID0gYW5nbGUgPiA0NSAmJiBhbmdsZSA8IDEzNSA/IFwieVwiIDogXCJ4XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5pc1N3aXBpbmcgPT09IFwieVwiICYmICQuZmFuY3lib3guaXNNb2JpbGUgJiYgc2VsZi5pc1Njcm9sbGFibGUpIHtcclxuICAgICAgICAgIHNlbGYuaXNTY3JvbGxpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluc3RhbmNlLmlzRHJhZ2dpbmcgPSBzZWxmLmlzU3dpcGluZztcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgcG9pbnRzIHRvIGF2b2lkIGp1bXBpbmcsIGJlY2F1c2Ugd2UgZHJvcHBlZCBmaXJzdCBzd2lwZXMgdG8gY2FsY3VsYXRlIHRoZSBhbmdsZVxyXG4gICAgICAgIHNlbGYuc3RhcnRQb2ludHMgPSBzZWxmLm5ld1BvaW50cztcclxuXHJcbiAgICAgICAgJC5lYWNoKGluc3RhbmNlLnNsaWRlcywgZnVuY3Rpb24gKGluZGV4LCBzbGlkZSkge1xyXG4gICAgICAgICAgdmFyIHNsaWRlUG9zLCBzdGFnZVBvcztcclxuXHJcbiAgICAgICAgICAkLmZhbmN5Ym94LnN0b3Aoc2xpZGUuJHNsaWRlKTtcclxuXHJcbiAgICAgICAgICBzbGlkZVBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHNsaWRlLiRzbGlkZSk7XHJcbiAgICAgICAgICBzdGFnZVBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKGluc3RhbmNlLiRyZWZzLnN0YWdlKTtcclxuXHJcbiAgICAgICAgICBzbGlkZS4kc2xpZGVcclxuICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcIlwiLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6IFwiXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYW5pbWF0ZWRcIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2goLyhefFxccylmYW5jeWJveC1meC1cXFMrL2cpIHx8IFtdKS5qb2luKFwiIFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKHNsaWRlLnBvcyA9PT0gaW5zdGFuY2UuY3VycmVudC5wb3MpIHtcclxuICAgICAgICAgICAgc2VsZi5zbGlkZXJTdGFydFBvcy50b3AgPSBzbGlkZVBvcy50b3AgLSBzdGFnZVBvcy50b3A7XHJcbiAgICAgICAgICAgIHNlbGYuc2xpZGVyU3RhcnRQb3MubGVmdCA9IHNsaWRlUG9zLmxlZnQgLSBzdGFnZVBvcy5sZWZ0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKHNsaWRlLiRzbGlkZSwge1xyXG4gICAgICAgICAgICB0b3A6IHNsaWRlUG9zLnRvcCAtIHN0YWdlUG9zLnRvcCxcclxuICAgICAgICAgICAgbGVmdDogc2xpZGVQb3MubGVmdCAtIHN0YWdlUG9zLmxlZnRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTdG9wIHNsaWRlc2hvd1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5TbGlkZVNob3cgJiYgaW5zdGFuY2UuU2xpZGVTaG93LmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICBpbnN0YW5jZS5TbGlkZVNob3cuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0aWNreSBlZGdlc1xyXG4gICAgaWYgKHN3aXBpbmcgPT0gXCJ4XCIpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHNlbGYuZGlzdGFuY2VYID4gMCAmJlxyXG4gICAgICAgIChzZWxmLmluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIgfHwgKHNlbGYuaW5zdGFuY2UuY3VycmVudC5pbmRleCA9PT0gMCAmJiAhc2VsZi5pbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxlZnQgPSBsZWZ0ICsgTWF0aC5wb3coc2VsZi5kaXN0YW5jZVgsIDAuOCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgc2VsZi5kaXN0YW5jZVggPCAwICYmXHJcbiAgICAgICAgKHNlbGYuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMiB8fFxyXG4gICAgICAgICAgKHNlbGYuaW5zdGFuY2UuY3VycmVudC5pbmRleCA9PT0gc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGggLSAxICYmICFzZWxmLmluc3RhbmNlLmN1cnJlbnQub3B0cy5sb29wKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGVmdCA9IGxlZnQgLSBNYXRoLnBvdygtc2VsZi5kaXN0YW5jZVgsIDAuOCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGVmdCA9IGxlZnQgKyBzZWxmLmRpc3RhbmNlWDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuc2xpZGVyTGFzdFBvcyA9IHtcclxuICAgICAgdG9wOiBzd2lwaW5nID09IFwieFwiID8gMCA6IHNlbGYuc2xpZGVyU3RhcnRQb3MudG9wICsgc2VsZi5kaXN0YW5jZVksXHJcbiAgICAgIGxlZnQ6IGxlZnRcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHNlbGYucmVxdWVzdElkKSB7XHJcbiAgICAgIGNhbmNlbEFGcmFtZShzZWxmLnJlcXVlc3RJZCk7XHJcblxyXG4gICAgICBzZWxmLnJlcXVlc3RJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5yZXF1ZXN0SWQgPSByZXF1ZXN0QUZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHNlbGYuc2xpZGVyTGFzdFBvcykge1xyXG4gICAgICAgICQuZWFjaChzZWxmLmluc3RhbmNlLnNsaWRlcywgZnVuY3Rpb24gKGluZGV4LCBzbGlkZSkge1xyXG4gICAgICAgICAgdmFyIHBvcyA9IHNsaWRlLnBvcyAtIHNlbGYuaW5zdGFuY2UuY3VyclBvcztcclxuXHJcbiAgICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShzbGlkZS4kc2xpZGUsIHtcclxuICAgICAgICAgICAgdG9wOiBzZWxmLnNsaWRlckxhc3RQb3MudG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiBzZWxmLnNsaWRlckxhc3RQb3MubGVmdCArIHBvcyAqIHNlbGYuY2FudmFzV2lkdGggKyBwb3MgKiBzbGlkZS5vcHRzLmd1dHRlclxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLXNsaWRpbmdcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUub25QYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG1vdmVtZW50IChzb21ldGltZXMsIHdoZW4gdGFwcGluZyBjYXN1YWxseSwgZmluZ2VyIGNhbiBtb3ZlIGEgYml0KVxyXG4gICAgaWYgKGRpc3RhbmNlKHNlbGYubmV3UG9pbnRzWzBdLCBzZWxmLnJlYWxQb2ludHNbMF0pIDwgKCQuZmFuY3lib3guaXNNb2JpbGUgPyAxMCA6IDUpKSB7XHJcbiAgICAgIHNlbGYuc3RhcnRQb2ludHMgPSBzZWxmLm5ld1BvaW50cztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuY2FuVGFwID0gZmFsc2U7XHJcblxyXG4gICAgc2VsZi5jb250ZW50TGFzdFBvcyA9IHNlbGYubGltaXRNb3ZlbWVudCgpO1xyXG5cclxuICAgIGlmIChzZWxmLnJlcXVlc3RJZCkge1xyXG4gICAgICBjYW5jZWxBRnJhbWUoc2VsZi5yZXF1ZXN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYucmVxdWVzdElkID0gcmVxdWVzdEFGcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKHNlbGYuJGNvbnRlbnQsIHNlbGYuY29udGVudExhc3RQb3MpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gTWFrZSBwYW5uaW5nIHN0aWNreSB0byB0aGUgZWRnZXNcclxuICBHdWVzdHVyZXMucHJvdG90eXBlLmxpbWl0TW92ZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIGNhbnZhc1dpZHRoID0gc2VsZi5jYW52YXNXaWR0aDtcclxuICAgIHZhciBjYW52YXNIZWlnaHQgPSBzZWxmLmNhbnZhc0hlaWdodDtcclxuXHJcbiAgICB2YXIgZGlzdGFuY2VYID0gc2VsZi5kaXN0YW5jZVg7XHJcbiAgICB2YXIgZGlzdGFuY2VZID0gc2VsZi5kaXN0YW5jZVk7XHJcblxyXG4gICAgdmFyIGNvbnRlbnRTdGFydFBvcyA9IHNlbGYuY29udGVudFN0YXJ0UG9zO1xyXG5cclxuICAgIHZhciBjdXJyZW50T2Zmc2V0WCA9IGNvbnRlbnRTdGFydFBvcy5sZWZ0O1xyXG4gICAgdmFyIGN1cnJlbnRPZmZzZXRZID0gY29udGVudFN0YXJ0UG9zLnRvcDtcclxuXHJcbiAgICB2YXIgY3VycmVudFdpZHRoID0gY29udGVudFN0YXJ0UG9zLndpZHRoO1xyXG4gICAgdmFyIGN1cnJlbnRIZWlnaHQgPSBjb250ZW50U3RhcnRQb3MuaGVpZ2h0O1xyXG5cclxuICAgIHZhciBtaW5UcmFuc2xhdGVYLCBtaW5UcmFuc2xhdGVZLCBtYXhUcmFuc2xhdGVYLCBtYXhUcmFuc2xhdGVZLCBuZXdPZmZzZXRYLCBuZXdPZmZzZXRZO1xyXG5cclxuICAgIGlmIChjdXJyZW50V2lkdGggPiBjYW52YXNXaWR0aCkge1xyXG4gICAgICBuZXdPZmZzZXRYID0gY3VycmVudE9mZnNldFggKyBkaXN0YW5jZVg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdPZmZzZXRYID0gY3VycmVudE9mZnNldFg7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3T2Zmc2V0WSA9IGN1cnJlbnRPZmZzZXRZICsgZGlzdGFuY2VZO1xyXG5cclxuICAgIC8vIFNsb3cgZG93biBwcm9wb3J0aW9uYWxseSB0byB0cmF2ZWxlZCBkaXN0YW5jZVxyXG4gICAgbWluVHJhbnNsYXRlWCA9IE1hdGgubWF4KDAsIGNhbnZhc1dpZHRoICogMC41IC0gY3VycmVudFdpZHRoICogMC41KTtcclxuICAgIG1pblRyYW5zbGF0ZVkgPSBNYXRoLm1heCgwLCBjYW52YXNIZWlnaHQgKiAwLjUgLSBjdXJyZW50SGVpZ2h0ICogMC41KTtcclxuXHJcbiAgICBtYXhUcmFuc2xhdGVYID0gTWF0aC5taW4oY2FudmFzV2lkdGggLSBjdXJyZW50V2lkdGgsIGNhbnZhc1dpZHRoICogMC41IC0gY3VycmVudFdpZHRoICogMC41KTtcclxuICAgIG1heFRyYW5zbGF0ZVkgPSBNYXRoLm1pbihjYW52YXNIZWlnaHQgLSBjdXJyZW50SGVpZ2h0LCBjYW52YXNIZWlnaHQgKiAwLjUgLSBjdXJyZW50SGVpZ2h0ICogMC41KTtcclxuXHJcbiAgICAvLyAgIC0+XHJcbiAgICBpZiAoZGlzdGFuY2VYID4gMCAmJiBuZXdPZmZzZXRYID4gbWluVHJhbnNsYXRlWCkge1xyXG4gICAgICBuZXdPZmZzZXRYID0gbWluVHJhbnNsYXRlWCAtIDEgKyBNYXRoLnBvdygtbWluVHJhbnNsYXRlWCArIGN1cnJlbnRPZmZzZXRYICsgZGlzdGFuY2VYLCAwLjgpIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gICAgPC1cclxuICAgIGlmIChkaXN0YW5jZVggPCAwICYmIG5ld09mZnNldFggPCBtYXhUcmFuc2xhdGVYKSB7XHJcbiAgICAgIG5ld09mZnNldFggPSBtYXhUcmFuc2xhdGVYICsgMSAtIE1hdGgucG93KG1heFRyYW5zbGF0ZVggLSBjdXJyZW50T2Zmc2V0WCAtIGRpc3RhbmNlWCwgMC44KSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICAgXFwvXHJcbiAgICBpZiAoZGlzdGFuY2VZID4gMCAmJiBuZXdPZmZzZXRZID4gbWluVHJhbnNsYXRlWSkge1xyXG4gICAgICBuZXdPZmZzZXRZID0gbWluVHJhbnNsYXRlWSAtIDEgKyBNYXRoLnBvdygtbWluVHJhbnNsYXRlWSArIGN1cnJlbnRPZmZzZXRZICsgZGlzdGFuY2VZLCAwLjgpIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gICAvXFxcclxuICAgIGlmIChkaXN0YW5jZVkgPCAwICYmIG5ld09mZnNldFkgPCBtYXhUcmFuc2xhdGVZKSB7XHJcbiAgICAgIG5ld09mZnNldFkgPSBtYXhUcmFuc2xhdGVZICsgMSAtIE1hdGgucG93KG1heFRyYW5zbGF0ZVkgLSBjdXJyZW50T2Zmc2V0WSAtIGRpc3RhbmNlWSwgMC44KSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogbmV3T2Zmc2V0WSxcclxuICAgICAgbGVmdDogbmV3T2Zmc2V0WFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLmxpbWl0UG9zaXRpb24gPSBmdW5jdGlvbiAobmV3T2Zmc2V0WCwgbmV3T2Zmc2V0WSwgbmV3V2lkdGgsIG5ld0hlaWdodCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHZhciBjYW52YXNXaWR0aCA9IHNlbGYuY2FudmFzV2lkdGg7XHJcbiAgICB2YXIgY2FudmFzSGVpZ2h0ID0gc2VsZi5jYW52YXNIZWlnaHQ7XHJcblxyXG4gICAgaWYgKG5ld1dpZHRoID4gY2FudmFzV2lkdGgpIHtcclxuICAgICAgbmV3T2Zmc2V0WCA9IG5ld09mZnNldFggPiAwID8gMCA6IG5ld09mZnNldFg7XHJcbiAgICAgIG5ld09mZnNldFggPSBuZXdPZmZzZXRYIDwgY2FudmFzV2lkdGggLSBuZXdXaWR0aCA/IGNhbnZhc1dpZHRoIC0gbmV3V2lkdGggOiBuZXdPZmZzZXRYO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ2VudGVyIGhvcml6b250YWxseVxyXG4gICAgICBuZXdPZmZzZXRYID0gTWF0aC5tYXgoMCwgY2FudmFzV2lkdGggLyAyIC0gbmV3V2lkdGggLyAyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3SGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgIG5ld09mZnNldFkgPSBuZXdPZmZzZXRZID4gMCA/IDAgOiBuZXdPZmZzZXRZO1xyXG4gICAgICBuZXdPZmZzZXRZID0gbmV3T2Zmc2V0WSA8IGNhbnZhc0hlaWdodCAtIG5ld0hlaWdodCA/IGNhbnZhc0hlaWdodCAtIG5ld0hlaWdodCA6IG5ld09mZnNldFk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDZW50ZXIgdmVydGljYWxseVxyXG4gICAgICBuZXdPZmZzZXRZID0gTWF0aC5tYXgoMCwgY2FudmFzSGVpZ2h0IC8gMiAtIG5ld0hlaWdodCAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogbmV3T2Zmc2V0WSxcclxuICAgICAgbGVmdDogbmV3T2Zmc2V0WFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLm9uWm9vbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgY3VycmVudCBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50cyB0byBnZXQgcGluY2ggcmF0aW8gYW5kIG5ldyB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgICB2YXIgY29udGVudFN0YXJ0UG9zID0gc2VsZi5jb250ZW50U3RhcnRQb3M7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRXaWR0aCA9IGNvbnRlbnRTdGFydFBvcy53aWR0aDtcclxuICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gY29udGVudFN0YXJ0UG9zLmhlaWdodDtcclxuXHJcbiAgICB2YXIgY3VycmVudE9mZnNldFggPSBjb250ZW50U3RhcnRQb3MubGVmdDtcclxuICAgIHZhciBjdXJyZW50T2Zmc2V0WSA9IGNvbnRlbnRTdGFydFBvcy50b3A7XHJcblxyXG4gICAgdmFyIGVuZERpc3RhbmNlQmV0d2VlbkZpbmdlcnMgPSBkaXN0YW5jZShzZWxmLm5ld1BvaW50c1swXSwgc2VsZi5uZXdQb2ludHNbMV0pO1xyXG5cclxuICAgIHZhciBwaW5jaFJhdGlvID0gZW5kRGlzdGFuY2VCZXR3ZWVuRmluZ2VycyAvIHNlbGYuc3RhcnREaXN0YW5jZUJldHdlZW5GaW5nZXJzO1xyXG5cclxuICAgIHZhciBuZXdXaWR0aCA9IE1hdGguZmxvb3IoY3VycmVudFdpZHRoICogcGluY2hSYXRpbyk7XHJcbiAgICB2YXIgbmV3SGVpZ2h0ID0gTWF0aC5mbG9vcihjdXJyZW50SGVpZ2h0ICogcGluY2hSYXRpbyk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyB0aGUgdHJhbnNsYXRpb24gZHVlIHRvIHBpbmNoLXpvb21pbmdcclxuICAgIHZhciB0cmFuc2xhdGVGcm9tWm9vbWluZ1ggPSAoY3VycmVudFdpZHRoIC0gbmV3V2lkdGgpICogc2VsZi5wZXJjZW50YWdlT2ZJbWFnZUF0UGluY2hQb2ludFg7XHJcbiAgICB2YXIgdHJhbnNsYXRlRnJvbVpvb21pbmdZID0gKGN1cnJlbnRIZWlnaHQgLSBuZXdIZWlnaHQpICogc2VsZi5wZXJjZW50YWdlT2ZJbWFnZUF0UGluY2hQb2ludFk7XHJcblxyXG4gICAgLy8gUG9pbnQgYmV0d2VlbiB0aGUgdHdvIHRvdWNoZXNcclxuICAgIHZhciBjZW50ZXJQb2ludEVuZFggPSAoc2VsZi5uZXdQb2ludHNbMF0ueCArIHNlbGYubmV3UG9pbnRzWzFdLngpIC8gMiAtICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XHJcbiAgICB2YXIgY2VudGVyUG9pbnRFbmRZID0gKHNlbGYubmV3UG9pbnRzWzBdLnkgKyBzZWxmLm5ld1BvaW50c1sxXS55KSAvIDIgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgLy8gQW5kIHRoaXMgaXMgdGhlIHRyYW5zbGF0aW9uIGR1ZSB0byB0cmFuc2xhdGlvbiBvZiB0aGUgY2VudGVycG9pbnRcclxuICAgIC8vIGJldHdlZW4gdGhlIHR3byBmaW5nZXJzXHJcbiAgICB2YXIgdHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWCA9IGNlbnRlclBvaW50RW5kWCAtIHNlbGYuY2VudGVyUG9pbnRTdGFydFg7XHJcbiAgICB2YXIgdHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWSA9IGNlbnRlclBvaW50RW5kWSAtIHNlbGYuY2VudGVyUG9pbnRTdGFydFk7XHJcblxyXG4gICAgLy8gVGhlIG5ldyBvZmZzZXQgaXMgdGhlIG9sZC9jdXJyZW50IG9uZSBwbHVzIHRoZSB0b3RhbCB0cmFuc2xhdGlvblxyXG4gICAgdmFyIG5ld09mZnNldFggPSBjdXJyZW50T2Zmc2V0WCArICh0cmFuc2xhdGVGcm9tWm9vbWluZ1ggKyB0cmFuc2xhdGVGcm9tVHJhbnNsYXRpbmdYKTtcclxuICAgIHZhciBuZXdPZmZzZXRZID0gY3VycmVudE9mZnNldFkgKyAodHJhbnNsYXRlRnJvbVpvb21pbmdZICsgdHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWSk7XHJcblxyXG4gICAgdmFyIG5ld1BvcyA9IHtcclxuICAgICAgdG9wOiBuZXdPZmZzZXRZLFxyXG4gICAgICBsZWZ0OiBuZXdPZmZzZXRYLFxyXG4gICAgICBzY2FsZVg6IHBpbmNoUmF0aW8sXHJcbiAgICAgIHNjYWxlWTogcGluY2hSYXRpb1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLmNhblRhcCA9IGZhbHNlO1xyXG5cclxuICAgIHNlbGYubmV3V2lkdGggPSBuZXdXaWR0aDtcclxuICAgIHNlbGYubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG5cclxuICAgIHNlbGYuY29udGVudExhc3RQb3MgPSBuZXdQb3M7XHJcblxyXG4gICAgaWYgKHNlbGYucmVxdWVzdElkKSB7XHJcbiAgICAgIGNhbmNlbEFGcmFtZShzZWxmLnJlcXVlc3RJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5yZXF1ZXN0SWQgPSByZXF1ZXN0QUZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoc2VsZi4kY29udGVudCwgc2VsZi5jb250ZW50TGFzdFBvcyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHZhciBzd2lwaW5nID0gc2VsZi5pc1N3aXBpbmc7XHJcbiAgICB2YXIgcGFubmluZyA9IHNlbGYuaXNQYW5uaW5nO1xyXG4gICAgdmFyIHpvb21pbmcgPSBzZWxmLmlzWm9vbWluZztcclxuICAgIHZhciBzY3JvbGxpbmcgPSBzZWxmLmlzU2Nyb2xsaW5nO1xyXG5cclxuICAgIHNlbGYuZW5kUG9pbnRzID0gZ2V0UG9pbnRlclhZKGUpO1xyXG4gICAgc2VsZi5kTXMgPSBNYXRoLm1heChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHNlbGYuc3RhcnRUaW1lLCAxKTtcclxuXHJcbiAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1ncmFiYmluZ1wiKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vZmYoXCIuZmIudG91Y2hcIik7XHJcblxyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzZWxmLm9uc2Nyb2xsLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoc2VsZi5yZXF1ZXN0SWQpIHtcclxuICAgICAgY2FuY2VsQUZyYW1lKHNlbGYucmVxdWVzdElkKTtcclxuXHJcbiAgICAgIHNlbGYucmVxdWVzdElkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmlzU3dpcGluZyA9IGZhbHNlO1xyXG4gICAgc2VsZi5pc1Bhbm5pbmcgPSBmYWxzZTtcclxuICAgIHNlbGYuaXNab29taW5nID0gZmFsc2U7XHJcbiAgICBzZWxmLmlzU2Nyb2xsaW5nID0gZmFsc2U7XHJcblxyXG4gICAgc2VsZi5pbnN0YW5jZS5pc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHNlbGYuY2FuVGFwKSB7XHJcbiAgICAgIHJldHVybiBzZWxmLm9uVGFwKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuc3BlZWQgPSAxMDA7XHJcblxyXG4gICAgLy8gU3BlZWQgaW4gcHgvbXNcclxuICAgIHNlbGYudmVsb2NpdHlYID0gKHNlbGYuZGlzdGFuY2VYIC8gc2VsZi5kTXMpICogMC41O1xyXG4gICAgc2VsZi52ZWxvY2l0eVkgPSAoc2VsZi5kaXN0YW5jZVkgLyBzZWxmLmRNcykgKiAwLjU7XHJcblxyXG4gICAgaWYgKHBhbm5pbmcpIHtcclxuICAgICAgc2VsZi5lbmRQYW5uaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKHpvb21pbmcpIHtcclxuICAgICAgc2VsZi5lbmRab29taW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxmLmVuZFN3aXBpbmcoc3dpcGluZywgc2Nyb2xsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuXHJcbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5lbmRTd2lwaW5nID0gZnVuY3Rpb24gKHN3aXBpbmcsIHNjcm9sbGluZykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICByZXQgPSBmYWxzZSxcclxuICAgICAgbGVuID0gc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGgsXHJcbiAgICAgIGRpc3RhbmNlWCA9IE1hdGguYWJzKHNlbGYuZGlzdGFuY2VYKSxcclxuICAgICAgY2FuQWR2YW5jZSA9IHN3aXBpbmcgPT0gXCJ4XCIgJiYgbGVuID4gMSAmJiAoKHNlbGYuZE1zID4gMTMwICYmIGRpc3RhbmNlWCA+IDEwKSB8fCBkaXN0YW5jZVggPiA1MCksXHJcbiAgICAgIHNwZWVkWCA9IDMwMDtcclxuXHJcbiAgICBzZWxmLnNsaWRlckxhc3RQb3MgPSBudWxsO1xyXG5cclxuICAgIC8vIENsb3NlIGlmIHN3aXBlZCB2ZXJ0aWNhbGx5IC8gbmF2aWdhdGUgaWYgaG9yaXpvbnRhbGx5XHJcbiAgICBpZiAoc3dpcGluZyA9PSBcInlcIiAmJiAhc2Nyb2xsaW5nICYmIE1hdGguYWJzKHNlbGYuZGlzdGFuY2VZKSA+IDUwKSB7XHJcbiAgICAgIC8vIENvbnRpbnVlIHZlcnRpY2FsIG1vdmVtZW50XHJcbiAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICBzZWxmLmluc3RhbmNlLmN1cnJlbnQuJHNsaWRlLCB7XHJcbiAgICAgICAgICB0b3A6IHNlbGYuc2xpZGVyU3RhcnRQb3MudG9wICsgc2VsZi5kaXN0YW5jZVkgKyBzZWxmLnZlbG9jaXR5WSAqIDE1MCxcclxuICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIDIwMFxyXG4gICAgICApO1xyXG4gICAgICByZXQgPSBzZWxmLmluc3RhbmNlLmNsb3NlKHRydWUsIDI1MCk7XHJcbiAgICB9IGVsc2UgaWYgKGNhbkFkdmFuY2UgJiYgc2VsZi5kaXN0YW5jZVggPiAwKSB7XHJcbiAgICAgIHJldCA9IHNlbGYuaW5zdGFuY2UucHJldmlvdXMoc3BlZWRYKTtcclxuICAgIH0gZWxzZSBpZiAoY2FuQWR2YW5jZSAmJiBzZWxmLmRpc3RhbmNlWCA8IDApIHtcclxuICAgICAgcmV0ID0gc2VsZi5pbnN0YW5jZS5uZXh0KHNwZWVkWCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgJiYgKHN3aXBpbmcgPT0gXCJ4XCIgfHwgc3dpcGluZyA9PSBcInlcIikpIHtcclxuICAgICAgc2VsZi5pbnN0YW5jZS5jZW50ZXJTbGlkZSgyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuJGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLXNsaWRpbmdcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gTGltaXQgcGFubmluZyBmcm9tIGVkZ2VzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5lbmRQYW5uaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBuZXdPZmZzZXRYLFxyXG4gICAgICBuZXdPZmZzZXRZLFxyXG4gICAgICBuZXdQb3M7XHJcblxyXG4gICAgaWYgKCFzZWxmLmNvbnRlbnRMYXN0UG9zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZi5vcHRzLm1vbWVudHVtID09PSBmYWxzZSB8fCBzZWxmLmRNcyA+IDM1MCkge1xyXG4gICAgICBuZXdPZmZzZXRYID0gc2VsZi5jb250ZW50TGFzdFBvcy5sZWZ0O1xyXG4gICAgICBuZXdPZmZzZXRZID0gc2VsZi5jb250ZW50TGFzdFBvcy50b3A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDb250aW51ZSBtb3ZlbWVudFxyXG4gICAgICBuZXdPZmZzZXRYID0gc2VsZi5jb250ZW50TGFzdFBvcy5sZWZ0ICsgc2VsZi52ZWxvY2l0eVggKiA1MDA7XHJcbiAgICAgIG5ld09mZnNldFkgPSBzZWxmLmNvbnRlbnRMYXN0UG9zLnRvcCArIHNlbGYudmVsb2NpdHlZICogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld1BvcyA9IHNlbGYubGltaXRQb3NpdGlvbihuZXdPZmZzZXRYLCBuZXdPZmZzZXRZLCBzZWxmLmNvbnRlbnRTdGFydFBvcy53aWR0aCwgc2VsZi5jb250ZW50U3RhcnRQb3MuaGVpZ2h0KTtcclxuXHJcbiAgICBuZXdQb3Mud2lkdGggPSBzZWxmLmNvbnRlbnRTdGFydFBvcy53aWR0aDtcclxuICAgIG5ld1Bvcy5oZWlnaHQgPSBzZWxmLmNvbnRlbnRTdGFydFBvcy5oZWlnaHQ7XHJcblxyXG4gICAgJC5mYW5jeWJveC5hbmltYXRlKHNlbGYuJGNvbnRlbnQsIG5ld1BvcywgMzY2KTtcclxuICB9O1xyXG5cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLmVuZFpvb21pbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIGN1cnJlbnQgPSBzZWxmLmluc3RhbmNlLmN1cnJlbnQ7XHJcblxyXG4gICAgdmFyIG5ld09mZnNldFgsIG5ld09mZnNldFksIG5ld1BvcywgcmVzZXQ7XHJcblxyXG4gICAgdmFyIG5ld1dpZHRoID0gc2VsZi5uZXdXaWR0aDtcclxuICAgIHZhciBuZXdIZWlnaHQgPSBzZWxmLm5ld0hlaWdodDtcclxuXHJcbiAgICBpZiAoIXNlbGYuY29udGVudExhc3RQb3MpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld09mZnNldFggPSBzZWxmLmNvbnRlbnRMYXN0UG9zLmxlZnQ7XHJcbiAgICBuZXdPZmZzZXRZID0gc2VsZi5jb250ZW50TGFzdFBvcy50b3A7XHJcblxyXG4gICAgcmVzZXQgPSB7XHJcbiAgICAgIHRvcDogbmV3T2Zmc2V0WSxcclxuICAgICAgbGVmdDogbmV3T2Zmc2V0WCxcclxuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG5ld0hlaWdodCxcclxuICAgICAgc2NhbGVYOiAxLFxyXG4gICAgICBzY2FsZVk6IDFcclxuICAgIH07XHJcblxyXG4gICAgLy8gUmVzZXQgc2NhbGV4L3NjYWxlWSB2YWx1ZXM7IHRoaXMgaGVscHMgZm9yIHBlcmZvbWFuY2UgYW5kIGRvZXMgbm90IGJyZWFrIGFuaW1hdGlvblxyXG4gICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoc2VsZi4kY29udGVudCwgcmVzZXQpO1xyXG5cclxuICAgIGlmIChuZXdXaWR0aCA8IHNlbGYuY2FudmFzV2lkdGggJiYgbmV3SGVpZ2h0IDwgc2VsZi5jYW52YXNIZWlnaHQpIHtcclxuICAgICAgc2VsZi5pbnN0YW5jZS5zY2FsZVRvRml0KDE1MCk7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1dpZHRoID4gY3VycmVudC53aWR0aCB8fCBuZXdIZWlnaHQgPiBjdXJyZW50LmhlaWdodCkge1xyXG4gICAgICBzZWxmLmluc3RhbmNlLnNjYWxlVG9BY3R1YWwoc2VsZi5jZW50ZXJQb2ludFN0YXJ0WCwgc2VsZi5jZW50ZXJQb2ludFN0YXJ0WSwgMTUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1BvcyA9IHNlbGYubGltaXRQb3NpdGlvbihuZXdPZmZzZXRYLCBuZXdPZmZzZXRZLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcclxuXHJcbiAgICAgICQuZmFuY3lib3guYW5pbWF0ZShzZWxmLiRjb250ZW50LCBuZXdQb3MsIDE1MCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5vblRhcCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgIHZhciBpbnN0YW5jZSA9IHNlbGYuaW5zdGFuY2U7XHJcbiAgICB2YXIgY3VycmVudCA9IGluc3RhbmNlLmN1cnJlbnQ7XHJcblxyXG4gICAgdmFyIGVuZFBvaW50cyA9IChlICYmIGdldFBvaW50ZXJYWShlKSkgfHwgc2VsZi5zdGFydFBvaW50cztcclxuXHJcbiAgICB2YXIgdGFwWCA9IGVuZFBvaW50c1swXSA/IGVuZFBvaW50c1swXS54IC0gJCh3aW5kb3cpLnNjcm9sbExlZnQoKSAtIHNlbGYuc3RhZ2VQb3MubGVmdCA6IDA7XHJcbiAgICB2YXIgdGFwWSA9IGVuZFBvaW50c1swXSA/IGVuZFBvaW50c1swXS55IC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gc2VsZi5zdGFnZVBvcy50b3AgOiAwO1xyXG5cclxuICAgIHZhciB3aGVyZTtcclxuXHJcbiAgICB2YXIgcHJvY2VzcyA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcclxuICAgICAgdmFyIGFjdGlvbiA9IGN1cnJlbnQub3B0c1twcmVmaXhdO1xyXG5cclxuICAgICAgaWYgKCQuaXNGdW5jdGlvbihhY3Rpb24pKSB7XHJcbiAgICAgICAgYWN0aW9uID0gYWN0aW9uLmFwcGx5KGluc3RhbmNlLCBbY3VycmVudCwgZV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWFjdGlvbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgIGluc3RhbmNlLmNsb3NlKHNlbGYuc3RhcnRFdmVudCk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJ0b2dnbGVDb250cm9sc1wiOlxyXG4gICAgICAgICAgaW5zdGFuY2UudG9nZ2xlQ29udHJvbHMoKTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIm5leHRcIjpcclxuICAgICAgICAgIGluc3RhbmNlLm5leHQoKTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIm5leHRPckNsb3NlXCI6XHJcbiAgICAgICAgICBpZiAoaW5zdGFuY2UuZ3JvdXAubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5uZXh0KCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5jbG9zZShzZWxmLnN0YXJ0RXZlbnQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiem9vbVwiOlxyXG4gICAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PSBcImltYWdlXCIgJiYgKGN1cnJlbnQuaXNMb2FkZWQgfHwgY3VycmVudC4kZ2hvc3QpKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5jYW5QYW4oKSkge1xyXG4gICAgICAgICAgICAgIGluc3RhbmNlLnNjYWxlVG9GaXQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnN0YW5jZS5pc1NjYWxlZERvd24oKSkge1xyXG4gICAgICAgICAgICAgIGluc3RhbmNlLnNjYWxlVG9BY3R1YWwodGFwWCwgdGFwWSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgIGluc3RhbmNlLmNsb3NlKHNlbGYuc3RhcnRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJZ25vcmUgcmlnaHQgY2xpY2tcclxuICAgIGlmIChlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LmJ1dHRvbiA9PSAyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGlmIGNsaWNrZWQgb24gdGhlIHNjcm9sbGJhclxyXG4gICAgaWYgKCEkdGFyZ2V0LmlzKFwiaW1nXCIpICYmIHRhcFggPiAkdGFyZ2V0WzBdLmNsaWVudFdpZHRoICsgJHRhcmdldC5vZmZzZXQoKS5sZWZ0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB3aGVyZSBpcyBjbGlja2VkXHJcbiAgICBpZiAoJHRhcmdldC5pcyhcIi5mYW5jeWJveC1iZywuZmFuY3lib3gtaW5uZXIsLmZhbmN5Ym94LW91dGVyLC5mYW5jeWJveC1jb250YWluZXJcIikpIHtcclxuICAgICAgd2hlcmUgPSBcIk91dHNpZGVcIjtcclxuICAgIH0gZWxzZSBpZiAoJHRhcmdldC5pcyhcIi5mYW5jeWJveC1zbGlkZVwiKSkge1xyXG4gICAgICB3aGVyZSA9IFwiU2xpZGVcIjtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGluc3RhbmNlLmN1cnJlbnQuJGNvbnRlbnQgJiZcclxuICAgICAgaW5zdGFuY2UuY3VycmVudC4kY29udGVudFxyXG4gICAgICAuZmluZCgkdGFyZ2V0KVxyXG4gICAgICAuYWRkQmFjaygpXHJcbiAgICAgIC5maWx0ZXIoJHRhcmdldCkubGVuZ3RoXHJcbiAgICApIHtcclxuICAgICAgd2hlcmUgPSBcIkNvbnRlbnRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgZG91YmxlIHRhcFxyXG4gICAgaWYgKHNlbGYudGFwcGVkKSB7XHJcbiAgICAgIC8vIFN0b3AgcHJldmlvdXNseSBjcmVhdGVkIHNpbmdsZSB0YXBcclxuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYudGFwcGVkKTtcclxuICAgICAgc2VsZi50YXBwZWQgPSBudWxsO1xyXG5cclxuICAgICAgLy8gU2tpcCBpZiBkaXN0YW5jZSBiZXR3ZWVuIHRhcHMgaXMgdG9vIGJpZ1xyXG4gICAgICBpZiAoTWF0aC5hYnModGFwWCAtIHNlbGYudGFwWCkgPiA1MCB8fCBNYXRoLmFicyh0YXBZIC0gc2VsZi50YXBZKSA+IDUwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE9LLCBub3cgd2UgYXNzdW1lIHRoYXQgdGhpcyBpcyBhIGRvdWJsZS10YXBcclxuICAgICAgcHJvY2VzcyhcImRibGNsaWNrXCIgKyB3aGVyZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTaW5nbGUgdGFwIHdpbGwgYmUgcHJvY2Vzc2VkIGlmIHVzZXIgaGFzIG5vdCBjbGlja2VkIHNlY29uZCB0aW1lIHdpdGhpbiAzMDBtc1xyXG4gICAgICAvLyBvciB0aGVyZSBpcyBubyBuZWVkIHRvIHdhaXQgZm9yIGRvdWJsZS10YXBcclxuICAgICAgc2VsZi50YXBYID0gdGFwWDtcclxuICAgICAgc2VsZi50YXBZID0gdGFwWTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50Lm9wdHNbXCJkYmxjbGlja1wiICsgd2hlcmVdICYmIGN1cnJlbnQub3B0c1tcImRibGNsaWNrXCIgKyB3aGVyZV0gIT09IGN1cnJlbnQub3B0c1tcImNsaWNrXCIgKyB3aGVyZV0pIHtcclxuICAgICAgICBzZWxmLnRhcHBlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2VsZi50YXBwZWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgIGlmICghaW5zdGFuY2UuaXNBbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgcHJvY2VzcyhcImNsaWNrXCIgKyB3aGVyZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9jZXNzKFwiY2xpY2tcIiArIHdoZXJlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpXHJcbiAgICAub24oXCJvbkFjdGl2YXRlLmZiXCIsIGZ1bmN0aW9uIChlLCBpbnN0YW5jZSkge1xyXG4gICAgICBpZiAoaW5zdGFuY2UgJiYgIWluc3RhbmNlLkd1ZXN0dXJlcykge1xyXG4gICAgICAgIGluc3RhbmNlLkd1ZXN0dXJlcyA9IG5ldyBHdWVzdHVyZXMoaW5zdGFuY2UpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLm9uKFwiYmVmb3JlQ2xvc2UuZmJcIiwgZnVuY3Rpb24gKGUsIGluc3RhbmNlKSB7XHJcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5HdWVzdHVyZXMpIHtcclxuICAgICAgICBpbnN0YW5jZS5HdWVzdHVyZXMuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufSkod2luZG93LCBkb2N1bWVudCwgalF1ZXJ5KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIFNsaWRlU2hvd1xyXG4vLyBFbmFibGVzIHNsaWRlc2hvdyBmdW5jdGlvbmFsaXR5XHJcbi8vXHJcbi8vIEV4YW1wbGUgb2YgdXNhZ2U6XHJcbi8vICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKS5TbGlkZVNob3cuc3RhcnQoKVxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4oZnVuY3Rpb24gKGRvY3VtZW50LCAkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICQuZXh0ZW5kKHRydWUsICQuZmFuY3lib3guZGVmYXVsdHMsIHtcclxuICAgIGJ0blRwbDoge1xyXG4gICAgICBzbGlkZVNob3c6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcGxheSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXBsYXlcIiB0aXRsZT1cInt7UExBWV9TVEFSVH19XCI+JyArXHJcbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTYuNSA1LjR2MTMuMmwxMS02LjZ6XCIvPjwvc3ZnPicgK1xyXG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjMzIDUuNzVoMi4ydjEyLjVoLTIuMlY1Ljc1em01LjE1IDBoMi4ydjEyLjVoLTIuMlY1Ljc1elwiLz48L3N2Zz4nICtcclxuICAgICAgICBcIjwvYnV0dG9uPlwiXHJcbiAgICB9LFxyXG4gICAgc2xpZGVTaG93OiB7XHJcbiAgICAgIGF1dG9TdGFydDogZmFsc2UsXHJcbiAgICAgIHNwZWVkOiAzMDAwLFxyXG4gICAgICBwcm9ncmVzczogdHJ1ZVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgU2xpZGVTaG93ID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9O1xyXG5cclxuICAkLmV4dGVuZChTbGlkZVNob3cucHJvdG90eXBlLCB7XHJcbiAgICB0aW1lcjogbnVsbCxcclxuICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICRidXR0b246IG51bGwsXHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgaW5zdGFuY2UgPSBzZWxmLmluc3RhbmNlLFxyXG4gICAgICAgIG9wdHMgPSBpbnN0YW5jZS5ncm91cFtpbnN0YW5jZS5jdXJySW5kZXhdLm9wdHMuc2xpZGVTaG93O1xyXG5cclxuICAgICAgc2VsZi4kYnV0dG9uID0gaW5zdGFuY2UuJHJlZnMudG9vbGJhci5maW5kKFwiW2RhdGEtZmFuY3lib3gtcGxheV1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi50b2dnbGUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMiB8fCAhb3B0cykge1xyXG4gICAgICAgIHNlbGYuJGJ1dHRvbi5oaWRlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5wcm9ncmVzcykge1xyXG4gICAgICAgIHNlbGYuJHByb2dyZXNzID0gJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXByb2dyZXNzXCI+PC9kaXY+JykuYXBwZW5kVG8oaW5zdGFuY2UuJHJlZnMuaW5uZXIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldDogZnVuY3Rpb24gKGZvcmNlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBpbnN0YW5jZSA9IHNlbGYuaW5zdGFuY2UsXHJcbiAgICAgICAgY3VycmVudCA9IGluc3RhbmNlLmN1cnJlbnQ7XHJcblxyXG4gICAgICAvLyBDaGVjayBpZiByZWFjaGVkIGxhc3QgZWxlbWVudFxyXG4gICAgICBpZiAoY3VycmVudCAmJiAoZm9yY2UgPT09IHRydWUgfHwgY3VycmVudC5vcHRzLmxvb3AgfHwgaW5zdGFuY2UuY3VyckluZGV4IDwgaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICBpZiAoc2VsZi5pc0FjdGl2ZSAmJiBjdXJyZW50LmNvbnRlbnRUeXBlICE9PSBcInZpZGVvXCIpIHtcclxuICAgICAgICAgIGlmIChzZWxmLiRwcm9ncmVzcykge1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmFuaW1hdGUoc2VsZi4kcHJvZ3Jlc3Muc2hvdygpLCB7XHJcbiAgICAgICAgICAgICAgc2NhbGVYOiAxXHJcbiAgICAgICAgICAgIH0sIGN1cnJlbnQub3B0cy5zbGlkZVNob3cuc3BlZWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNlbGYudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCAmJiBpbnN0YW5jZS5jdXJyZW50LmluZGV4ID09IGluc3RhbmNlLmdyb3VwLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICBpbnN0YW5jZS5qdW1wVG8oMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaW5zdGFuY2UubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCBjdXJyZW50Lm9wdHMuc2xpZGVTaG93LnNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5zdG9wKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuICAgICAgICBpbnN0YW5jZS5zaG93Q29udHJvbHMoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICBjbGVhclRpbWVvdXQoc2VsZi50aW1lcik7XHJcblxyXG4gICAgICBzZWxmLnRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgIGlmIChzZWxmLiRwcm9ncmVzcykge1xyXG4gICAgICAgIHNlbGYuJHByb2dyZXNzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmluc3RhbmNlLmN1cnJlbnQ7XHJcblxyXG4gICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgIHNlbGYuJGJ1dHRvblxyXG4gICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCAoY3VycmVudC5vcHRzLmkxOG5bY3VycmVudC5vcHRzLmxhbmddIHx8IGN1cnJlbnQub3B0cy5pMThuLmVuKS5QTEFZX1NUT1ApXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1idXR0b24tLXBsYXlcIilcclxuICAgICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tcGF1c2VcIik7XHJcblxyXG4gICAgICAgIHNlbGYuaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudC5pc0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICBzZWxmLnNldCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuaW5zdGFuY2UudHJpZ2dlcihcIm9uU2xpZGVTaG93Q2hhbmdlXCIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmluc3RhbmNlLmN1cnJlbnQ7XHJcblxyXG4gICAgICBzZWxmLmNsZWFyKCk7XHJcblxyXG4gICAgICBzZWxmLiRidXR0b25cclxuICAgICAgICAuYXR0cihcInRpdGxlXCIsIChjdXJyZW50Lm9wdHMuaTE4bltjdXJyZW50Lm9wdHMubGFuZ10gfHwgY3VycmVudC5vcHRzLmkxOG4uZW4pLlBMQVlfU1RBUlQpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wYXVzZVwiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tcGxheVwiKTtcclxuXHJcbiAgICAgIHNlbGYuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHNlbGYuaW5zdGFuY2UudHJpZ2dlcihcIm9uU2xpZGVTaG93Q2hhbmdlXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgIGlmIChzZWxmLiRwcm9ncmVzcykge1xyXG4gICAgICAgIHNlbGYuJHByb2dyZXNzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzZWxmLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgc2VsZi5zdG9wKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5zdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKHtcclxuICAgIFwib25Jbml0LmZiXCI6IGZ1bmN0aW9uIChlLCBpbnN0YW5jZSkge1xyXG4gICAgICBpZiAoaW5zdGFuY2UgJiYgIWluc3RhbmNlLlNsaWRlU2hvdykge1xyXG4gICAgICAgIGluc3RhbmNlLlNsaWRlU2hvdyA9IG5ldyBTbGlkZVNob3coaW5zdGFuY2UpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiYmVmb3JlU2hvdy5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGZpcnN0UnVuKSB7XHJcbiAgICAgIHZhciBTbGlkZVNob3cgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5TbGlkZVNob3c7XHJcblxyXG4gICAgICBpZiAoZmlyc3RSdW4pIHtcclxuICAgICAgICBpZiAoU2xpZGVTaG93ICYmIGN1cnJlbnQub3B0cy5zbGlkZVNob3cuYXV0b1N0YXJ0KSB7XHJcbiAgICAgICAgICBTbGlkZVNob3cuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoU2xpZGVTaG93ICYmIFNsaWRlU2hvdy5pc0FjdGl2ZSkge1xyXG4gICAgICAgIFNsaWRlU2hvdy5jbGVhcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiYWZ0ZXJTaG93LmZiXCI6IGZ1bmN0aW9uIChlLCBpbnN0YW5jZSwgY3VycmVudCkge1xyXG4gICAgICB2YXIgU2xpZGVTaG93ID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuU2xpZGVTaG93O1xyXG5cclxuICAgICAgaWYgKFNsaWRlU2hvdyAmJiBTbGlkZVNob3cuaXNBY3RpdmUpIHtcclxuICAgICAgICBTbGlkZVNob3cuc2V0KCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJhZnRlcktleWRvd24uZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlLCBjdXJyZW50LCBrZXlwcmVzcywga2V5Y29kZSkge1xyXG4gICAgICB2YXIgU2xpZGVTaG93ID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuU2xpZGVTaG93O1xyXG5cclxuICAgICAgLy8gXCJQXCIgb3IgU3BhY2ViYXJcclxuICAgICAgaWYgKFNsaWRlU2hvdyAmJiBjdXJyZW50Lm9wdHMuc2xpZGVTaG93ICYmIChrZXljb2RlID09PSA4MCB8fCBrZXljb2RlID09PSAzMikgJiYgISQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaXMoXCJidXR0b24sYSxpbnB1dFwiKSkge1xyXG4gICAgICAgIGtleXByZXNzLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIFNsaWRlU2hvdy50b2dnbGUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImJlZm9yZUNsb3NlLmZiIG9uRGVhY3RpdmF0ZS5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UpIHtcclxuICAgICAgdmFyIFNsaWRlU2hvdyA9IGluc3RhbmNlICYmIGluc3RhbmNlLlNsaWRlU2hvdztcclxuXHJcbiAgICAgIGlmIChTbGlkZVNob3cpIHtcclxuICAgICAgICBTbGlkZVNob3cuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFBhZ2UgVmlzaWJpbGl0eSBBUEkgdG8gcGF1c2Ugc2xpZGVzaG93IHdoZW4gd2luZG93IGlzIG5vdCBhY3RpdmVcclxuICAkKGRvY3VtZW50KS5vbihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGluc3RhbmNlID0gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLFxyXG4gICAgICBTbGlkZVNob3cgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5TbGlkZVNob3c7XHJcblxyXG4gICAgaWYgKFNsaWRlU2hvdyAmJiBTbGlkZVNob3cuaXNBY3RpdmUpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xyXG4gICAgICAgIFNsaWRlU2hvdy5jbGVhcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFNsaWRlU2hvdy5zZXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KShkb2N1bWVudCwgalF1ZXJ5KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIEZ1bGxTY3JlZW5cclxuLy8gQWRkcyBmdWxsc2NyZWVuIGZ1bmN0aW9uYWxpdHlcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uIChkb2N1bWVudCwgJCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAvLyBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgc3VwcG9ydGVkIGJ5IHVzZXIgYnJvd3NlclxyXG4gIHZhciBmbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm5NYXAgPSBbXHJcbiAgICAgIFtcInJlcXVlc3RGdWxsc2NyZWVuXCIsIFwiZXhpdEZ1bGxzY3JlZW5cIiwgXCJmdWxsc2NyZWVuRWxlbWVudFwiLCBcImZ1bGxzY3JlZW5FbmFibGVkXCIsIFwiZnVsbHNjcmVlbmNoYW5nZVwiLCBcImZ1bGxzY3JlZW5lcnJvclwiXSxcclxuICAgICAgLy8gbmV3IFdlYktpdFxyXG4gICAgICBbXHJcbiAgICAgICAgXCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlblwiLFxyXG4gICAgICAgIFwid2Via2l0RXhpdEZ1bGxzY3JlZW5cIixcclxuICAgICAgICBcIndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50XCIsXHJcbiAgICAgICAgXCJ3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZFwiLFxyXG4gICAgICAgIFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFxyXG4gICAgICAgIFwid2Via2l0ZnVsbHNjcmVlbmVycm9yXCJcclxuICAgICAgXSxcclxuICAgICAgLy8gb2xkIFdlYktpdCAoU2FmYXJpIDUuMSlcclxuICAgICAgW1xyXG4gICAgICAgIFwid2Via2l0UmVxdWVzdEZ1bGxTY3JlZW5cIixcclxuICAgICAgICBcIndlYmtpdENhbmNlbEZ1bGxTY3JlZW5cIixcclxuICAgICAgICBcIndlYmtpdEN1cnJlbnRGdWxsU2NyZWVuRWxlbWVudFwiLFxyXG4gICAgICAgIFwid2Via2l0Q2FuY2VsRnVsbFNjcmVlblwiLFxyXG4gICAgICAgIFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFxyXG4gICAgICAgIFwid2Via2l0ZnVsbHNjcmVlbmVycm9yXCJcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFwibW96UmVxdWVzdEZ1bGxTY3JlZW5cIixcclxuICAgICAgICBcIm1vekNhbmNlbEZ1bGxTY3JlZW5cIixcclxuICAgICAgICBcIm1vekZ1bGxTY3JlZW5FbGVtZW50XCIsXHJcbiAgICAgICAgXCJtb3pGdWxsU2NyZWVuRW5hYmxlZFwiLFxyXG4gICAgICAgIFwibW96ZnVsbHNjcmVlbmNoYW5nZVwiLFxyXG4gICAgICAgIFwibW96ZnVsbHNjcmVlbmVycm9yXCJcclxuICAgICAgXSxcclxuICAgICAgW1wibXNSZXF1ZXN0RnVsbHNjcmVlblwiLCBcIm1zRXhpdEZ1bGxzY3JlZW5cIiwgXCJtc0Z1bGxzY3JlZW5FbGVtZW50XCIsIFwibXNGdWxsc2NyZWVuRW5hYmxlZFwiLCBcIk1TRnVsbHNjcmVlbkNoYW5nZVwiLCBcIk1TRnVsbHNjcmVlbkVycm9yXCJdXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciByZXQgPSB7fTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZuTWFwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB2YWwgPSBmbk1hcFtpXTtcclxuXHJcbiAgICAgIGlmICh2YWwgJiYgdmFsWzFdIGluIGRvY3VtZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWwubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIHJldFtmbk1hcFswXVtqXV0gPSB2YWxbal07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pKCk7XHJcblxyXG4gIGlmIChmbikge1xyXG4gICAgdmFyIEZ1bGxTY3JlZW4gPSB7XHJcbiAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBlbGVtW2ZuLnJlcXVlc3RGdWxsc2NyZWVuXShlbGVtLkFMTE9XX0tFWUJPQVJEX0lOUFVUKTtcclxuICAgICAgfSxcclxuICAgICAgZXhpdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50W2ZuLmV4aXRGdWxsc2NyZWVuXSgpO1xyXG4gICAgICB9LFxyXG4gICAgICB0b2dnbGU6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4oKSkge1xyXG4gICAgICAgICAgdGhpcy5leGl0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdChlbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGlzRnVsbHNjcmVlbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50W2ZuLmZ1bGxzY3JlZW5FbGVtZW50XSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudFtmbi5mdWxsc2NyZWVuRW5hYmxlZF0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICQuZXh0ZW5kKHRydWUsICQuZmFuY3lib3guZGVmYXVsdHMsIHtcclxuICAgICAgYnRuVHBsOiB7XHJcbiAgICAgICAgZnVsbFNjcmVlbjogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnNlbnRlclwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+JyArXHJcbiAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNyAxNEg1djVoNXYtMkg3di0zem0tMi00aDJWN2gzVjVINXY1em0xMiA3aC0zdjJoNXYtNWgtMnYzek0xNCA1djJoM3YzaDJWNWgtNXpcIi8+PC9zdmc+JyArXHJcbiAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNSAxNmgzdjNoMnYtNUg1em0zLThINXYyaDVWNUg4em02IDExaDJ2LTNoM3YtMmgtNXptMi0xMVY1aC0ydjVoNVY4elwiLz48L3N2Zz4nICtcclxuICAgICAgICAgIFwiPC9idXR0b24+XCJcclxuICAgICAgfSxcclxuICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgIGF1dG9TdGFydDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oZm4uZnVsbHNjcmVlbmNoYW5nZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaXNGdWxsc2NyZWVuID0gRnVsbFNjcmVlbi5pc0Z1bGxzY3JlZW4oKSxcclxuICAgICAgICBpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgIC8vIElmIGltYWdlIGlzIHpvb21pbmcsIHRoZW4gZm9yY2UgdG8gc3RvcCBhbmQgcmVwb3NpdGlvbiBwcm9wZXJseVxyXG4gICAgICAgIGlmIChpbnN0YW5jZS5jdXJyZW50ICYmIGluc3RhbmNlLmN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiICYmIGluc3RhbmNlLmlzQW5pbWF0aW5nKSB7XHJcbiAgICAgICAgICBpbnN0YW5jZS5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZSh0cnVlLCB0cnVlLCAwKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWluc3RhbmNlLmlzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuY29tcGxldGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluc3RhbmNlLnRyaWdnZXIoXCJvbkZ1bGxzY3JlZW5DaGFuZ2VcIiwgaXNGdWxsc2NyZWVuKTtcclxuXHJcbiAgICAgICAgaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtaXMtZnVsbHNjcmVlblwiLCBpc0Z1bGxzY3JlZW4pO1xyXG5cclxuICAgICAgICBpbnN0YW5jZS4kcmVmcy50b29sYmFyXHJcbiAgICAgICAgICAuZmluZChcIltkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dXCIpXHJcbiAgICAgICAgICAudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1idXR0b24tLWZzZW50ZXJcIiwgIWlzRnVsbHNjcmVlbilcclxuICAgICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tZnNleGl0XCIsIGlzRnVsbHNjcmVlbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJChkb2N1bWVudCkub24oe1xyXG4gICAgXCJvbkluaXQuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlKSB7XHJcbiAgICAgIHZhciAkY29udGFpbmVyO1xyXG5cclxuICAgICAgaWYgKCFmbikge1xyXG4gICAgICAgIGluc3RhbmNlLiRyZWZzLnRvb2xiYXIuZmluZChcIltkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5ncm91cFtpbnN0YW5jZS5jdXJySW5kZXhdLm9wdHMuZnVsbFNjcmVlbikge1xyXG4gICAgICAgICRjb250YWluZXIgPSBpbnN0YW5jZS4kcmVmcy5jb250YWluZXI7XHJcblxyXG4gICAgICAgICRjb250YWluZXIub24oXCJjbGljay5mYi1mdWxsc2NyZWVuXCIsIFwiW2RhdGEtZmFuY3lib3gtZnVsbHNjcmVlbl1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgRnVsbFNjcmVlbi50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGluc3RhbmNlLm9wdHMuZnVsbFNjcmVlbiAmJiBpbnN0YW5jZS5vcHRzLmZ1bGxTY3JlZW4uYXV0b1N0YXJ0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBGdWxsU2NyZWVuLnJlcXVlc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEV4cG9zZSBBUElcclxuICAgICAgICBpbnN0YW5jZS5GdWxsU2NyZWVuID0gRnVsbFNjcmVlbjtcclxuICAgICAgfSBlbHNlIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgIGluc3RhbmNlLiRyZWZzLnRvb2xiYXIuZmluZChcIltkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dXCIpLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGtleXByZXNzLCBrZXljb2RlKSB7XHJcbiAgICAgIC8vIFwiRlwiXHJcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5GdWxsU2NyZWVuICYmIGtleWNvZGUgPT09IDcwKSB7XHJcbiAgICAgICAga2V5cHJlc3MucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaW5zdGFuY2UuRnVsbFNjcmVlbi50b2dnbGUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImJlZm9yZUNsb3NlLmZiXCI6IGZ1bmN0aW9uIChlLCBpbnN0YW5jZSkge1xyXG4gICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuRnVsbFNjcmVlbiAmJiBpbnN0YW5jZS4kcmVmcy5jb250YWluZXIuaGFzQ2xhc3MoXCJmYW5jeWJveC1pcy1mdWxsc2NyZWVuXCIpKSB7XHJcbiAgICAgICAgRnVsbFNjcmVlbi5leGl0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSkoZG9jdW1lbnQsIGpRdWVyeSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyBUaHVtYnNcclxuLy8gRGlzcGxheXMgdGh1bWJuYWlscyBpbiBhIGdyaWRcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uIChkb2N1bWVudCwgJCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB2YXIgQ0xBU1MgPSBcImZhbmN5Ym94LXRodW1ic1wiLFxyXG4gICAgQ0xBU1NfQUNUSVZFID0gQ0xBU1MgKyBcIi1hY3RpdmVcIjtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBkZWZhdWx0IHZhbHVlc1xyXG4gICQuZmFuY3lib3guZGVmYXVsdHMgPSAkLmV4dGVuZChcclxuICAgIHRydWUsIHtcclxuICAgICAgYnRuVHBsOiB7XHJcbiAgICAgICAgdGh1bWJzOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXRodW1icyBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXRodW1ic1wiIHRpdGxlPVwie3tUSFVNQlN9fVwiPicgK1xyXG4gICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE0LjU5IDE0LjU5aDMuNzZ2My43NmgtMy43NnYtMy43NnptLTQuNDcgMGgzLjc2djMuNzZoLTMuNzZ2LTMuNzZ6bS00LjQ3IDBoMy43NnYzLjc2SDUuNjV2LTMuNzZ6bTguOTQtNC40N2gzLjc2djMuNzZoLTMuNzZ2LTMuNzZ6bS00LjQ3IDBoMy43NnYzLjc2aC0zLjc2di0zLjc2em0tNC40NyAwaDMuNzZ2My43Nkg1LjY1di0zLjc2em04Ljk0LTQuNDdoMy43NnYzLjc2aC0zLjc2VjUuNjV6bS00LjQ3IDBoMy43NnYzLjc2aC0zLjc2VjUuNjV6bS00LjQ3IDBoMy43NnYzLjc2SDUuNjVWNS42NXpcIi8+PC9zdmc+JyArXHJcbiAgICAgICAgICBcIjwvYnV0dG9uPlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRodW1iczoge1xyXG4gICAgICAgIGF1dG9TdGFydDogZmFsc2UsIC8vIERpc3BsYXkgdGh1bWJuYWlscyBvbiBvcGVuaW5nXHJcbiAgICAgICAgaGlkZU9uQ2xvc2U6IHRydWUsIC8vIEhpZGUgdGh1bWJuYWlsIGdyaWQgd2hlbiBjbG9zaW5nIGFuaW1hdGlvbiBzdGFydHNcclxuICAgICAgICBwYXJlbnRFbDogXCIuZmFuY3lib3gtY29udGFpbmVyXCIsIC8vIENvbnRhaW5lciBpcyBpbmplY3RlZCBpbnRvIHRoaXMgZWxlbWVudFxyXG4gICAgICAgIGF4aXM6IFwieVwiIC8vIFZlcnRpY2FsICh5KSBvciBob3Jpem9udGFsICh4KSBzY3JvbGxpbmdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICQuZmFuY3lib3guZGVmYXVsdHNcclxuICApO1xyXG5cclxuICB2YXIgRmFuY3lUaHVtYnMgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgIHRoaXMuaW5pdChpbnN0YW5jZSk7XHJcbiAgfTtcclxuXHJcbiAgJC5leHRlbmQoRmFuY3lUaHVtYnMucHJvdG90eXBlLCB7XHJcbiAgICAkYnV0dG9uOiBudWxsLFxyXG4gICAgJGdyaWQ6IG51bGwsXHJcbiAgICAkbGlzdDogbnVsbCxcclxuICAgIGlzVmlzaWJsZTogZmFsc2UsXHJcbiAgICBpc0FjdGl2ZTogZmFsc2UsXHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBncm91cCA9IGluc3RhbmNlLmdyb3VwLFxyXG4gICAgICAgIGVuYWJsZWQgPSAwO1xyXG5cclxuICAgICAgc2VsZi5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICBzZWxmLm9wdHMgPSBncm91cFtpbnN0YW5jZS5jdXJySW5kZXhdLm9wdHMudGh1bWJzO1xyXG5cclxuICAgICAgaW5zdGFuY2UuVGh1bWJzID0gc2VsZjtcclxuXHJcbiAgICAgIHNlbGYuJGJ1dHRvbiA9IGluc3RhbmNlLiRyZWZzLnRvb2xiYXIuZmluZChcIltkYXRhLWZhbmN5Ym94LXRodW1ic11cIik7XHJcblxyXG4gICAgICAvLyBFbmFibGUgdGh1bWJzIGlmIGF0IGxlYXN0IHR3byBncm91cCBpdGVtcyBoYXZlIHRodW1ibmFpbHNcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGdyb3VwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGdyb3VwW2ldLnRodW1iKSB7XHJcbiAgICAgICAgICBlbmFibGVkKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW5hYmxlZCA+IDEpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVuYWJsZWQgPiAxICYmICEhc2VsZi5vcHRzKSB7XHJcbiAgICAgICAgc2VsZi4kYnV0dG9uLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNlbGYudG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGYuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYuJGJ1dHRvbi5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBpbnN0YW5jZSA9IHNlbGYuaW5zdGFuY2UsXHJcbiAgICAgICAgcGFyZW50RWwgPSBzZWxmLm9wdHMucGFyZW50RWwsXHJcbiAgICAgICAgbGlzdCA9IFtdLFxyXG4gICAgICAgIHNyYztcclxuXHJcbiAgICAgIGlmICghc2VsZi4kZ3JpZCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBtYWluIGVsZW1lbnRcclxuICAgICAgICBzZWxmLiRncmlkID0gJCgnPGRpdiBjbGFzcz1cIicgKyBDTEFTUyArIFwiIFwiICsgQ0xBU1MgKyBcIi1cIiArIHNlbGYub3B0cy5heGlzICsgJ1wiPjwvZGl2PicpLmFwcGVuZFRvKFxyXG4gICAgICAgICAgaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyXHJcbiAgICAgICAgICAuZmluZChwYXJlbnRFbClcclxuICAgICAgICAgIC5hZGRCYWNrKClcclxuICAgICAgICAgIC5maWx0ZXIocGFyZW50RWwpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIFwiY2xpY2tcIiBldmVudCB0aGF0IHBlcmZvcm1zIGdhbGxlcnkgbmF2aWdhdGlvblxyXG4gICAgICAgIHNlbGYuJGdyaWQub24oXCJjbGlja1wiLCBcImFcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaW5zdGFuY2UuanVtcFRvKCQodGhpcykuYXR0cihcImRhdGEtaW5kZXhcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCdWlsZCB0aGUgbGlzdFxyXG4gICAgICBpZiAoIXNlbGYuJGxpc3QpIHtcclxuICAgICAgICBzZWxmLiRsaXN0ID0gJCgnPGRpdiBjbGFzcz1cIicgKyBDTEFTUyArICdfX2xpc3RcIj4nKS5hcHBlbmRUbyhzZWxmLiRncmlkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJC5lYWNoKGluc3RhbmNlLmdyb3VwLCBmdW5jdGlvbiAoaSwgaXRlbSkge1xyXG4gICAgICAgIHNyYyA9IGl0ZW0udGh1bWI7XHJcblxyXG4gICAgICAgIGlmICghc3JjICYmIGl0ZW0udHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcbiAgICAgICAgICBzcmMgPSBpdGVtLnNyYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3QucHVzaChcclxuICAgICAgICAgICc8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgdGFiaW5kZXg9XCIwXCIgZGF0YS1pbmRleD1cIicgK1xyXG4gICAgICAgICAgaSArXHJcbiAgICAgICAgICAnXCInICtcclxuICAgICAgICAgIChzcmMgJiYgc3JjLmxlbmd0aCA/ICcgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybCgnICsgc3JjICsgJylcIicgOiAnY2xhc3M9XCJmYW5jeWJveC10aHVtYnMtbWlzc2luZ1wiJykgK1xyXG4gICAgICAgICAgXCI+PC9hPlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxmLiRsaXN0WzBdLmlubmVySFRNTCA9IGxpc3Quam9pbihcIlwiKTtcclxuXHJcbiAgICAgIGlmIChzZWxmLm9wdHMuYXhpcyA9PT0gXCJ4XCIpIHtcclxuICAgICAgICAvLyBTZXQgZml4ZWQgd2lkdGggZm9yIGxpc3QgZWxlbWVudCB0byBlbmFibGUgaG9yaXpvbnRhbCBzY3JvbGxpbmdcclxuICAgICAgICBzZWxmLiRsaXN0LndpZHRoKFxyXG4gICAgICAgICAgcGFyc2VJbnQoc2VsZi4kZ3JpZC5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpLCAxMCkgK1xyXG4gICAgICAgICAgaW5zdGFuY2UuZ3JvdXAubGVuZ3RoICpcclxuICAgICAgICAgIHNlbGYuJGxpc3RcclxuICAgICAgICAgIC5jaGlsZHJlbigpXHJcbiAgICAgICAgICAuZXEoMClcclxuICAgICAgICAgIC5vdXRlcldpZHRoKHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBmb2N1czogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAkbGlzdCA9IHNlbGYuJGxpc3QsXHJcbiAgICAgICAgJGdyaWQgPSBzZWxmLiRncmlkLFxyXG4gICAgICAgIHRodW1iLFxyXG4gICAgICAgIHRodW1iUG9zO1xyXG5cclxuICAgICAgaWYgKCFzZWxmLmluc3RhbmNlLmN1cnJlbnQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRodW1iID0gJGxpc3RcclxuICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19BQ1RJVkUpXHJcbiAgICAgICAgLmZpbHRlcignW2RhdGEtaW5kZXg9XCInICsgc2VsZi5pbnN0YW5jZS5jdXJyZW50LmluZGV4ICsgJ1wiXScpXHJcbiAgICAgICAgLmFkZENsYXNzKENMQVNTX0FDVElWRSk7XHJcblxyXG4gICAgICB0aHVtYlBvcyA9IHRodW1iLnBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBpZiBuZWVkIHRvIHNjcm9sbCB0byBtYWtlIGN1cnJlbnQgdGh1bWIgdmlzaWJsZVxyXG4gICAgICBpZiAoc2VsZi5vcHRzLmF4aXMgPT09IFwieVwiICYmICh0aHVtYlBvcy50b3AgPCAwIHx8IHRodW1iUG9zLnRvcCA+ICRsaXN0LmhlaWdodCgpIC0gdGh1bWIub3V0ZXJIZWlnaHQoKSkpIHtcclxuICAgICAgICAkbGlzdC5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJGxpc3Quc2Nyb2xsVG9wKCkgKyB0aHVtYlBvcy50b3BcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkdXJhdGlvblxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgc2VsZi5vcHRzLmF4aXMgPT09IFwieFwiICYmXHJcbiAgICAgICAgKHRodW1iUG9zLmxlZnQgPCAkZ3JpZC5zY3JvbGxMZWZ0KCkgfHwgdGh1bWJQb3MubGVmdCA+ICRncmlkLnNjcm9sbExlZnQoKSArICgkZ3JpZC53aWR0aCgpIC0gdGh1bWIub3V0ZXJXaWR0aCgpKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgJGxpc3RcclxuICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgLnN0b3AoKVxyXG4gICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgIHNjcm9sbExlZnQ6IHRodW1iUG9zLmxlZnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb25cclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgdGhhdC5pbnN0YW5jZS4kcmVmcy5jb250YWluZXIudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LXRodW1ic1wiLCB0aGlzLmlzVmlzaWJsZSk7XHJcblxyXG4gICAgICBpZiAodGhhdC5pc1Zpc2libGUpIHtcclxuICAgICAgICBpZiAoIXRoYXQuJGdyaWQpIHtcclxuICAgICAgICAgIHRoYXQuY3JlYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGF0Lmluc3RhbmNlLnRyaWdnZXIoXCJvblRodW1ic1Nob3dcIik7XHJcblxyXG4gICAgICAgIHRoYXQuZm9jdXMoMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhhdC4kZ3JpZCkge1xyXG4gICAgICAgIHRoYXQuaW5zdGFuY2UudHJpZ2dlcihcIm9uVGh1bWJzSGlkZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVXBkYXRlIGNvbnRlbnQgcG9zaXRpb25cclxuICAgICAgdGhhdC5pbnN0YW5jZS51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gIXRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbih7XHJcbiAgICBcIm9uSW5pdC5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UpIHtcclxuICAgICAgdmFyIFRodW1icztcclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZSAmJiAhaW5zdGFuY2UuVGh1bWJzKSB7XHJcbiAgICAgICAgVGh1bWJzID0gbmV3IEZhbmN5VGh1bWJzKGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgaWYgKFRodW1icy5pc0FjdGl2ZSAmJiBUaHVtYnMub3B0cy5hdXRvU3RhcnQgPT09IHRydWUpIHtcclxuICAgICAgICAgIFRodW1icy5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiYmVmb3JlU2hvdy5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGl0ZW0sIGZpcnN0UnVuKSB7XHJcbiAgICAgIHZhciBUaHVtYnMgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5UaHVtYnM7XHJcblxyXG4gICAgICBpZiAoVGh1bWJzICYmIFRodW1icy5pc1Zpc2libGUpIHtcclxuICAgICAgICBUaHVtYnMuZm9jdXMoZmlyc3RSdW4gPyAwIDogMjUwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGtleXByZXNzLCBrZXljb2RlKSB7XHJcbiAgICAgIHZhciBUaHVtYnMgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5UaHVtYnM7XHJcblxyXG4gICAgICAvLyBcIkdcIlxyXG4gICAgICBpZiAoVGh1bWJzICYmIFRodW1icy5pc0FjdGl2ZSAmJiBrZXljb2RlID09PSA3MSkge1xyXG4gICAgICAgIGtleXByZXNzLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIFRodW1icy50b2dnbGUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImJlZm9yZUNsb3NlLmZiXCI6IGZ1bmN0aW9uIChlLCBpbnN0YW5jZSkge1xyXG4gICAgICB2YXIgVGh1bWJzID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuVGh1bWJzO1xyXG5cclxuICAgICAgaWYgKFRodW1icyAmJiBUaHVtYnMuaXNWaXNpYmxlICYmIFRodW1icy5vcHRzLmhpZGVPbkNsb3NlICE9PSBmYWxzZSkge1xyXG4gICAgICAgIFRodW1icy4kZ3JpZC5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSkoZG9jdW1lbnQsIGpRdWVyeSk7XG4vLy8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIFNoYXJlXHJcbi8vIERpc3BsYXlzIHNpbXBsZSBmb3JtIGZvciBzaGFyaW5nIGN1cnJlbnQgdXJsXHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbihmdW5jdGlvbiAoZG9jdW1lbnQsICQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgJC5leHRlbmQodHJ1ZSwgJC5mYW5jeWJveC5kZWZhdWx0cywge1xyXG4gICAgYnRuVHBsOiB7XHJcbiAgICAgIHNoYXJlOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXNoYXJlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tc2hhcmVcIiB0aXRsZT1cInt7U0hBUkV9fVwiPicgK1xyXG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0yLjU1IDE5YzEuNC04LjQgOS4xLTkuOCAxMS45LTkuOFY1bDcgNy03IDYuM3YtMy41Yy0yLjggMC0xMC41IDIuMS0xMS45IDQuMnpcIi8+PC9zdmc+JyArXHJcbiAgICAgICAgXCI8L2J1dHRvbj5cIlxyXG4gICAgfSxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIHVybDogZnVuY3Rpb24gKGluc3RhbmNlLCBpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICghaW5zdGFuY2UuY3VycmVudEhhc2ggJiYgIShpdGVtLnR5cGUgPT09IFwiaW5saW5lXCIgfHwgaXRlbS50eXBlID09PSBcImh0bWxcIikgPyBpdGVtLm9yaWdTcmMgfHwgaXRlbS5zcmMgOiBmYWxzZSkgfHwgd2luZG93LmxvY2F0aW9uXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgdHBsOiAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXNoYXJlXCI+JyArXHJcbiAgICAgICAgXCI8aDE+e3tTSEFSRX19PC9oMT5cIiArXHJcbiAgICAgICAgXCI8cD5cIiArXHJcbiAgICAgICAgJzxhIGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2J1dHRvbiBmYW5jeWJveC1zaGFyZV9fYnV0dG9uLS1mYlwiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT17e3VybH19XCI+JyArXHJcbiAgICAgICAgJzxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtMjg3IDQ1NnYtMjk5YzAtMjEgNi0zNSAzNS0zNWgzOHYtNjNjLTctMS0yOS0zLTU1LTMtNTQgMC05MSAzMy05MSA5NHYzMDZtMTQzLTI1NGgtMjA1djcyaDE5NlwiIC8+PC9zdmc+JyArXHJcbiAgICAgICAgXCI8c3Bhbj5GYWNlYm9vazwvc3Bhbj5cIiArXHJcbiAgICAgICAgXCI8L2E+XCIgK1xyXG4gICAgICAgICc8YSBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19idXR0b24gZmFuY3lib3gtc2hhcmVfX2J1dHRvbi0tdHdcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPXt7dXJsfX0mdGV4dD17e2Rlc2NyfX1cIj4nICtcclxuICAgICAgICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm00NTYgMTMzYy0xNCA3LTMxIDExLTQ3IDEzIDE3LTEwIDMwLTI3IDM3LTQ2LTE1IDEwLTM0IDE2LTUyIDIwLTYxLTYyLTE1Ny03LTE0MSA3NS02OC0zLTEyOS0zNS0xNjktODUtMjIgMzctMTEgODYgMjYgMTA5LTEzIDAtMjYtNC0zNy05IDAgMzkgMjggNzIgNjUgODAtMTIgMy0yNSA0LTM3IDIgMTAgMzMgNDEgNTcgNzcgNTctNDIgMzAtNzcgMzgtMTIyIDM0IDE3MCAxMTEgMzc4LTMyIDM1OS0yMDggMTYtMTEgMzAtMjUgNDEtNDJ6XCIgLz48L3N2Zz4nICtcclxuICAgICAgICBcIjxzcGFuPlR3aXR0ZXI8L3NwYW4+XCIgK1xyXG4gICAgICAgIFwiPC9hPlwiICtcclxuICAgICAgICAnPGEgY2xhc3M9XCJmYW5jeWJveC1zaGFyZV9fYnV0dG9uIGZhbmN5Ym94LXNoYXJlX19idXR0b24tLXB0XCIgaHJlZj1cImh0dHBzOi8vd3d3LnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vP3VybD17e3VybH19JmRlc2NyaXB0aW9uPXt7ZGVzY3J9fSZtZWRpYT17e21lZGlhfX1cIj4nICtcclxuICAgICAgICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm0yNjUgNTZjLTEwOSAwLTE2NCA3OC0xNjQgMTQ0IDAgMzkgMTUgNzQgNDcgODcgNSAyIDEwIDAgMTItNWw0LTE5YzItNiAxLTgtMy0xMy05LTExLTE1LTI1LTE1LTQ1IDAtNTggNDMtMTEwIDExMy0xMTAgNjIgMCA5NiAzOCA5NiA4OCAwIDY3LTMwIDEyMi03MyAxMjItMjQgMC00Mi0xOS0zNi00NCA2LTI5IDIwLTYwIDIwLTgxIDAtMTktMTAtMzUtMzEtMzUtMjUgMC00NCAyNi00NCA2MCAwIDIxIDcgMzYgNyAzNmwtMzAgMTI1Yy04IDM3LTEgODMgMCA4NyAwIDMgNCA0IDUgMiAyLTMgMzItMzkgNDItNzVsMTYtNjRjOCAxNiAzMSAyOSA1NiAyOSA3NCAwIDEyNC02NyAxMjQtMTU3IDAtNjktNTgtMTMyLTE0Ni0xMzJ6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+JyArXHJcbiAgICAgICAgXCI8c3Bhbj5QaW50ZXJlc3Q8L3NwYW4+XCIgK1xyXG4gICAgICAgIFwiPC9hPlwiICtcclxuICAgICAgICBcIjwvcD5cIiArXHJcbiAgICAgICAgJzxwPjxpbnB1dCBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ7e3VybF9yYXd9fVwiIG9uY2xpY2s9XCJzZWxlY3QoKVwiIC8+PC9wPicgK1xyXG4gICAgICAgIFwiPC9kaXY+XCJcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcclxuICAgIHZhciBlbnRpdHlNYXAgPSB7XHJcbiAgICAgIFwiJlwiOiBcIiZhbXA7XCIsXHJcbiAgICAgIFwiPFwiOiBcIiZsdDtcIixcclxuICAgICAgXCI+XCI6IFwiJmd0O1wiLFxyXG4gICAgICAnXCInOiBcIiZxdW90O1wiLFxyXG4gICAgICBcIidcIjogXCImIzM5O1wiLFxyXG4gICAgICBcIi9cIjogXCImI3gyRjtcIixcclxuICAgICAgXCJgXCI6IFwiJiN4NjA7XCIsXHJcbiAgICAgIFwiPVwiOiBcIiYjeDNEO1wiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csIGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgIHJldHVybiBlbnRpdHlNYXBbc107XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1mYW5jeWJveC1zaGFyZV1cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGluc3RhbmNlID0gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLFxyXG4gICAgICBjdXJyZW50ID0gaW5zdGFuY2UuY3VycmVudCB8fCBudWxsLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHRwbDtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkLnR5cGUoY3VycmVudC5vcHRzLnNoYXJlLnVybCkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICB1cmwgPSBjdXJyZW50Lm9wdHMuc2hhcmUudXJsLmFwcGx5KGN1cnJlbnQsIFtpbnN0YW5jZSwgY3VycmVudF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRwbCA9IGN1cnJlbnQub3B0cy5zaGFyZS50cGxcclxuICAgICAgLnJlcGxhY2UoL1xce1xce21lZGlhXFx9XFx9L2csIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiID8gZW5jb2RlVVJJQ29tcG9uZW50KGN1cnJlbnQuc3JjKSA6IFwiXCIpXHJcbiAgICAgIC5yZXBsYWNlKC9cXHtcXHt1cmxcXH1cXH0vZywgZW5jb2RlVVJJQ29tcG9uZW50KHVybCkpXHJcbiAgICAgIC5yZXBsYWNlKC9cXHtcXHt1cmxfcmF3XFx9XFx9L2csIGVzY2FwZUh0bWwodXJsKSlcclxuICAgICAgLnJlcGxhY2UoL1xce1xce2Rlc2NyXFx9XFx9L2csIGluc3RhbmNlLiRjYXB0aW9uID8gZW5jb2RlVVJJQ29tcG9uZW50KGluc3RhbmNlLiRjYXB0aW9uLnRleHQoKSkgOiBcIlwiKTtcclxuXHJcbiAgICAkLmZhbmN5Ym94Lm9wZW4oe1xyXG4gICAgICBzcmM6IGluc3RhbmNlLnRyYW5zbGF0ZShpbnN0YW5jZSwgdHBsKSxcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIG9wdHM6IHtcclxuICAgICAgICB0b3VjaDogZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0aW9uRWZmZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlckxvYWQ6IGZ1bmN0aW9uIChzaGFyZUluc3RhbmNlLCBzaGFyZUN1cnJlbnQpIHtcclxuICAgICAgICAgIC8vIENsb3NlIHNlbGYgaWYgcGFyZW50IGluc3RhbmNlIGlzIGNsb3NpbmdcclxuICAgICAgICAgIGluc3RhbmNlLiRyZWZzLmNvbnRhaW5lci5vbmUoXCJiZWZvcmVDbG9zZS5mYlwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNoYXJlSW5zdGFuY2UuY2xvc2UobnVsbCwgMCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBPcGVuaW5nIGxpbmtzIGluIGEgcG9wdXAgd2luZG93XHJcbiAgICAgICAgICBzaGFyZUN1cnJlbnQuJGNvbnRlbnQuZmluZChcIi5mYW5jeWJveC1zaGFyZV9fYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5ocmVmLCBcIlNoYXJlXCIsIFwid2lkdGg9NTUwLCBoZWlnaHQ9NDUwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKGRvY3VtZW50LCBqUXVlcnkpO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy9cclxuLy8gSGFzaFxyXG4vLyBFbmFibGVzIGxpbmtpbmcgdG8gZWFjaCBtb2RhbFxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsICQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgLy8gU2ltcGxlICQuZXNjYXBlU2VsZWN0b3IgcG9seWZpbGwgKGZvciBqUXVlcnkgcHJpb3IgdjMpXHJcbiAgaWYgKCEkLmVzY2FwZVNlbGVjdG9yKSB7XHJcbiAgICAkLmVzY2FwZVNlbGVjdG9yID0gZnVuY3Rpb24gKHNlbCkge1xyXG4gICAgICB2YXIgcmNzc2VzY2FwZSA9IC8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxceDgwLVxcdUZGRkZcXHctXS9nO1xyXG4gICAgICB2YXIgZmNzc2VzY2FwZSA9IGZ1bmN0aW9uIChjaCwgYXNDb2RlUG9pbnQpIHtcclxuICAgICAgICBpZiAoYXNDb2RlUG9pbnQpIHtcclxuICAgICAgICAgIC8vIFUrMDAwMCBOVUxMIGJlY29tZXMgVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUlxyXG4gICAgICAgICAgaWYgKGNoID09PSBcIlxcMFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlxcdUZGRkRcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIChkZXBlbmRlbnQgdXBvbiBwb3NpdGlvbikgbnVtYmVycyBnZXQgZXNjYXBlZCBhcyBjb2RlIHBvaW50c1xyXG4gICAgICAgICAgcmV0dXJuIGNoLnNsaWNlKDAsIC0xKSArIFwiXFxcXFwiICsgY2guY2hhckNvZGVBdChjaC5sZW5ndGggLSAxKS50b1N0cmluZygxNikgKyBcIiBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE90aGVyIHBvdGVudGlhbGx5LXNwZWNpYWwgQVNDSUkgY2hhcmFjdGVycyBnZXQgYmFja3NsYXNoLWVzY2FwZWRcclxuICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyBjaDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiAoc2VsICsgXCJcIikucmVwbGFjZShyY3NzZXNjYXBlLCBmY3NzZXNjYXBlKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgaW5mbyBhYm91dCBnYWxsZXJ5IG5hbWUgYW5kIGN1cnJlbnQgaW5kZXggZnJvbSB1cmxcclxuICBmdW5jdGlvbiBwYXJzZVVybCgpIHtcclxuICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLFxyXG4gICAgICByZXogPSBoYXNoLnNwbGl0KFwiLVwiKSxcclxuICAgICAgaW5kZXggPSByZXoubGVuZ3RoID4gMSAmJiAvXlxcKz9cXGQrJC8udGVzdChyZXpbcmV6Lmxlbmd0aCAtIDFdKSA/IHBhcnNlSW50KHJlei5wb3AoLTEpLCAxMCkgfHwgMSA6IDEsXHJcbiAgICAgIGdhbGxlcnkgPSByZXouam9pbihcIi1cIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGFzaDogaGFzaCxcclxuICAgICAgLyogSW5kZXggaXMgc3RhcnRpbmcgZnJvbSAxICovXHJcbiAgICAgIGluZGV4OiBpbmRleCA8IDEgPyAxIDogaW5kZXgsXHJcbiAgICAgIGdhbGxlcnk6IGdhbGxlcnlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBUcmlnZ2VyIGNsaWNrIGV2bnQgb24gbGlua3MgdG8gb3BlbiBuZXcgZmFuY3lCb3ggaW5zdGFuY2VcclxuICBmdW5jdGlvbiB0cmlnZ2VyRnJvbVVybCh1cmwpIHtcclxuICAgIGlmICh1cmwuZ2FsbGVyeSAhPT0gXCJcIikge1xyXG4gICAgICAvLyBJZiB3ZSBjYW4gZmluZCBlbGVtZW50IG1hdGNoaW5nICdkYXRhLWZhbmN5Ym94JyBhdHJpYnV0ZSxcclxuICAgICAgLy8gdGhlbiB0cmlnZ2VyaW5nIGNsaWNrIGV2ZW50IHNob3VsZCBzdGFydCBmYW5jeUJveFxyXG4gICAgICAkKFwiW2RhdGEtZmFuY3lib3g9J1wiICsgJC5lc2NhcGVTZWxlY3Rvcih1cmwuZ2FsbGVyeSkgKyBcIiddXCIpXHJcbiAgICAgICAgLmVxKHVybC5pbmRleCAtIDEpXHJcbiAgICAgICAgLmZvY3VzKClcclxuICAgICAgICAudHJpZ2dlcihcImNsaWNrLmZiLXN0YXJ0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IGdhbGxlcnkgbmFtZSBmcm9tIGN1cnJlbnQgaW5zdGFuY2VcclxuICBmdW5jdGlvbiBnZXRHYWxsZXJ5SUQoaW5zdGFuY2UpIHtcclxuICAgIHZhciBvcHRzLCByZXQ7XHJcblxyXG4gICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0cyA9IGluc3RhbmNlLmN1cnJlbnQgPyBpbnN0YW5jZS5jdXJyZW50Lm9wdHMgOiBpbnN0YW5jZS5vcHRzO1xyXG4gICAgcmV0ID0gb3B0cy5oYXNoIHx8IChvcHRzLiRvcmlnID8gb3B0cy4kb3JpZy5kYXRhKFwiZmFuY3lib3hcIikgfHwgb3B0cy4kb3JpZy5kYXRhKFwiZmFuY3lib3gtdHJpZ2dlclwiKSA6IFwiXCIpO1xyXG5cclxuICAgIHJldHVybiByZXQgPT09IFwiXCIgPyBmYWxzZSA6IHJldDtcclxuICB9XHJcblxyXG4gIC8vIFN0YXJ0IHdoZW4gRE9NIGJlY29tZXMgcmVhZHlcclxuICAkKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIGRpc2FibGVkIHRoaXMgbW9kdWxlXHJcbiAgICBpZiAoJC5mYW5jeWJveC5kZWZhdWx0cy5oYXNoID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGhhc2ggd2hlbiBvcGVuaW5nL2Nsb3NpbmcgZmFuY3lCb3hcclxuICAgICQoZG9jdW1lbnQpLm9uKHtcclxuICAgICAgXCJvbkluaXQuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHVybCwgZ2FsbGVyeTtcclxuXHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmdyb3VwW2luc3RhbmNlLmN1cnJJbmRleF0ub3B0cy5oYXNoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXJsID0gcGFyc2VVcmwoKTtcclxuICAgICAgICBnYWxsZXJ5ID0gZ2V0R2FsbGVyeUlEKGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIGdhbGxlcnkgc3RhcnQgaW5kZXggbWF0Y2hlcyBpbmRleCBmcm9tIGhhc2hcclxuICAgICAgICBpZiAoZ2FsbGVyeSAmJiB1cmwuZ2FsbGVyeSAmJiBnYWxsZXJ5ID09IHVybC5nYWxsZXJ5KSB7XHJcbiAgICAgICAgICBpbnN0YW5jZS5jdXJySW5kZXggPSB1cmwuaW5kZXggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiYmVmb3JlU2hvdy5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGZpcnN0UnVuKSB7XHJcbiAgICAgICAgdmFyIGdhbGxlcnk7XHJcblxyXG4gICAgICAgIGlmICghY3VycmVudCB8fCBjdXJyZW50Lm9wdHMuaGFzaCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIG5lZWQgdG8gdXBkYXRlIHdpbmRvdyBoYXNoXHJcbiAgICAgICAgZ2FsbGVyeSA9IGdldEdhbGxlcnlJRChpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIGlmICghZ2FsbGVyeSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVmFyaWFibGUgY29udGFpbmluZyBsYXN0IGhhc2ggdmFsdWUgc2V0IGJ5IGZhbmN5Qm94XHJcbiAgICAgICAgLy8gSXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBpZiBmYW5jeUJveCBuZWVkcyB0byBjbG9zZSBhZnRlciBoYXNoIGNoYW5nZSBpcyBkZXRlY3RlZFxyXG4gICAgICAgIGluc3RhbmNlLmN1cnJlbnRIYXNoID0gZ2FsbGVyeSArIChpbnN0YW5jZS5ncm91cC5sZW5ndGggPiAxID8gXCItXCIgKyAoY3VycmVudC5pbmRleCArIDEpIDogXCJcIik7XHJcblxyXG4gICAgICAgIC8vIElmIGN1cnJlbnQgaGFzaCBpcyB0aGUgc2FtZSAodGhpcyBpbnN0YW5jZSBtb3N0IGxpa2VseSBpcyBvcGVuZWQgYnkgaGFzaGNoYW5nZSksIHRoZW4gZG8gbm90aGluZ1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjXCIgKyBpbnN0YW5jZS5jdXJyZW50SGFzaCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpcnN0UnVuICYmICFpbnN0YW5jZS5vcmlnSGFzaCkge1xyXG4gICAgICAgICAgaW5zdGFuY2Uub3JpZ0hhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbnN0YW5jZS5oYXNoVGltZXIpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChpbnN0YW5jZS5oYXNoVGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGhhc2hcclxuICAgICAgICBpbnN0YW5jZS5oYXNoVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChcInJlcGxhY2VTdGF0ZVwiIGluIHdpbmRvdy5oaXN0b3J5KSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W2ZpcnN0UnVuID8gXCJwdXNoU3RhdGVcIiA6IFwicmVwbGFjZVN0YXRlXCJdKHt9LFxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlLFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyBcIiNcIiArIGluc3RhbmNlLmN1cnJlbnRIYXNoXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlyc3RSdW4pIHtcclxuICAgICAgICAgICAgICBpbnN0YW5jZS5oYXNDcmVhdGVkSGlzdG9yeSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaW5zdGFuY2UuY3VycmVudEhhc2g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5zdGFuY2UuaGFzaFRpbWVyID0gbnVsbDtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCJiZWZvcmVDbG9zZS5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC5vcHRzLmhhc2ggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoaW5zdGFuY2UuaGFzaFRpbWVyKTtcclxuXHJcbiAgICAgICAgLy8gR290byBwcmV2aW91cyBoaXN0b3J5IGVudHJ5XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmN1cnJlbnRIYXNoICYmIGluc3RhbmNlLmhhc0NyZWF0ZWRIaXN0b3J5KSB7XHJcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnN0YW5jZS5jdXJyZW50SGFzaCkge1xyXG4gICAgICAgICAgaWYgKFwicmVwbGFjZVN0YXRlXCIgaW4gd2luZG93Lmhpc3RvcnkpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIChpbnN0YW5jZS5vcmlnSGFzaCB8fCBcIlwiKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGluc3RhbmNlLm9yaWdIYXNoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5zdGFuY2UuY3VycmVudEhhc2ggPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBuZWVkIHRvIHN0YXJ0L2Nsb3NlIGFmdGVyIHVybCBoYXMgY2hhbmdlZFxyXG4gICAgJCh3aW5kb3cpLm9uKFwiaGFzaGNoYW5nZS5mYlwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB1cmwgPSBwYXJzZVVybCgpLFxyXG4gICAgICAgIGZiID0gbnVsbDtcclxuXHJcbiAgICAgIC8vIEZpbmQgbGFzdCBmYW5jeUJveCBpbnN0YW5jZSB0aGF0IGhhcyBcImhhc2hcIlxyXG4gICAgICAkLmVhY2goXHJcbiAgICAgICAgJChcIi5mYW5jeWJveC1jb250YWluZXJcIilcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAucmV2ZXJzZSgpLFxyXG4gICAgICAgIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgIHZhciB0bXAgPSAkKHZhbHVlKS5kYXRhKFwiRmFuY3lCb3hcIik7XHJcblxyXG4gICAgICAgICAgaWYgKHRtcCAmJiB0bXAuY3VycmVudEhhc2gpIHtcclxuICAgICAgICAgICAgZmIgPSB0bXA7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoZmIpIHtcclxuICAgICAgICAvLyBOb3csIGNvbXBhcmUgaGFzaCB2YWx1ZXNcclxuICAgICAgICBpZiAoZmIuY3VycmVudEhhc2ggIT09IHVybC5nYWxsZXJ5ICsgXCItXCIgKyB1cmwuaW5kZXggJiYgISh1cmwuaW5kZXggPT09IDEgJiYgZmIuY3VycmVudEhhc2ggPT0gdXJsLmdhbGxlcnkpKSB7XHJcbiAgICAgICAgICBmYi5jdXJyZW50SGFzaCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgZmIuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmdhbGxlcnkgIT09IFwiXCIpIHtcclxuICAgICAgICB0cmlnZ2VyRnJvbVVybCh1cmwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGVjayBjdXJyZW50IGhhc2ggYW5kIHRyaWdnZXIgY2xpY2sgZXZlbnQgb24gbWF0Y2hpbmcgZWxlbWVudCB0byBzdGFydCBmYW5jeUJveCwgaWYgbmVlZGVkXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCEkLmZhbmN5Ym94LmdldEluc3RhbmNlKCkpIHtcclxuICAgICAgICB0cmlnZ2VyRnJvbVVybChwYXJzZVVybCgpKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTApO1xyXG4gIH0pO1xyXG59KSh3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkpO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy9cclxuLy8gV2hlZWxcclxuLy8gQmFzaWMgbW91c2Ugd2VoZWVsIHN1cHBvcnQgZm9yIGdhbGxlcnkgbmF2aWdhdGlvblxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4oZnVuY3Rpb24gKGRvY3VtZW50LCAkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHZhciBwcmV2VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbih7XHJcbiAgICBcIm9uSW5pdC5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQpIHtcclxuICAgICAgaW5zdGFuY2UuJHJlZnMuc3RhZ2Uub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsIHdoZWVsIE1vek1vdXNlUGl4ZWxTY3JvbGxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgY3VycmVudCA9IGluc3RhbmNlLmN1cnJlbnQsXHJcbiAgICAgICAgICBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBpZiAoaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMiB8fCBjdXJyZW50Lm9wdHMud2hlZWwgPT09IGZhbHNlIHx8IChjdXJyZW50Lm9wdHMud2hlZWwgPT09IFwiYXV0b1wiICYmIGN1cnJlbnQudHlwZSAhPT0gXCJpbWFnZVwiKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50LiRzbGlkZS5oYXNDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlID0gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XHJcblxyXG4gICAgICAgIGlmIChjdXJyVGltZSAtIHByZXZUaW1lIDwgMjUwKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcmV2VGltZSA9IGN1cnJUaW1lO1xyXG5cclxuICAgICAgICBpbnN0YW5jZVsoLWUuZGVsdGFZIHx8IC1lLmRlbHRhWCB8fCBlLndoZWVsRGVsdGEgfHwgLWUuZGV0YWlsKSA8IDAgPyBcIm5leHRcIiA6IFwicHJldmlvdXNcIl0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKGRvY3VtZW50LCBqUXVlcnkpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=