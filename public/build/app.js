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
// fancyBox v3.5.6
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
(function(window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function(stuff) {}
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
      tpl:
        '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

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
      tpl:
        '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
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
    baseTpl:
      '<div class="fancybox-container" role="dialog" tabindex="-1">' +
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
      download:
        '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
        "</a>",

      zoom:
        '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
        "</button>",

      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      // Arrows
      arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
        "</button>",

      arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
        "</button>",

      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn:
        '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
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
    clickContent: function(current, event) {
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
      clickContent: function(current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function(current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function(current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function(current, event) {
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
  var isQuery = function(obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================
  var requestAFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function() {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function(id) {
        window.clearTimeout(id);
      }
    );
  })();

  // Detect the supported transition-end event property name
  // =======================================================
  var transitionEnd = (function() {
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
  var forceRedraw = function($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  // Exclude array (`buttons`) options from deep merging
  // ===================================================
  var mergeOpts = function(opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);

    $.each(opts2, function(key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });

    return rez;
  };

  // How much of an element is visible in viewport
  // =============================================

  var inViewport = function(elem) {
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

  var FancyBox = function(content, opts, index) {
    var self = this;

    self.opts = mergeOpts({index: index}, $.fancybox.defaults);

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

    init: function() {
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

      $.each(firstItemOpts.buttons, function(index, value) {
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

      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(item) {
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

    translate: function(obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

      return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },

    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================

    addContent: function(content) {
      var self = this,
        items = $.makeArray(content),
        thumbs;

      $.each(items, function(i, item) {
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
            obj = $.extend(true, obj, {contentType: "pdf", opts: {iframe: {preload: false}}});
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

    addEvents: function() {
      var self = this;

      self.removeEvents();

      // Make navigation elements clickable
      // ==================================

      self.$refs.container
        .on("click.fb-close", "[data-fancybox-close]", function(e) {
          e.stopPropagation();
          e.preventDefault();

          self.close(e);
        })
        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
          e.stopPropagation();
          e.preventDefault();

          self.previous();
        })
        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
          e.stopPropagation();
          e.preventDefault();

          self.next();
        })
        .on("click.fb", "[data-fancybox-zoom]", function(e) {
          // Click handler for zoom button
          self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        });

      // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function(e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }

          self.requestId = requestAFrame(function() {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }

          setTimeout(
            function() {
              self.$refs.stage.show();

              self.update(e);
            },
            $.fancybox.isMobile ? 600 : 250
          );
        }
      });

      $D.on("keydown.fb", function(e) {
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

        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio")) {
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
          function(e) {
            self.idleSecondsCounter = 0;

            if (self.isIdle) {
              self.showControls();
            }

            self.isIdle = false;
          }
        );

        self.idleInterval = window.setInterval(function() {
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

    removeEvents: function() {
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

    previous: function(duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },

    // Change to next gallery item
    // ===========================

    next: function(duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },

    // Switch to selected gallery item
    // ===============================

    jumpTo: function(pos, duration) {
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
      $.each(self.slides, function(index, slide) {
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

        $.each(self.slides, function(index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function(index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned
          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

          $.fancybox.setTranslate(slide.$slide, {top: 0, left: leftPos - stagePos.left + diff});

          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          }

          // Redraw to make sure that transition will start
          forceRedraw(slide.$slide);

          // Animate the slide
          $.fancybox.animate(
            slide.$slide,
            {
              top: 0,
              left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
            },
            duration,
            function() {
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
          function() {
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

    createSlide: function(pos) {
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

    scaleToActual: function(x, y, duration) {
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
        $content,
        {
          top: posY,
          left: posX,
          scaleX: scaleX,
          scaleY: scaleY
        },
        duration || 366,
        function() {
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

    scaleToFit: function(duration) {
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
        $content,
        {
          top: end.top,
          left: end.left,
          scaleX: end.width / $content.width(),
          scaleY: end.height / $content.height()
        },
        duration || 366,
        function() {
          self.isAnimating = false;
        }
      );
    },

    // Calculate image size to fit inside viewport
    // ===========================================

    getFitPos: function(slide) {
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

    update: function(e) {
      var self = this;

      $.each(self.slides, function(key, slide) {
        self.updateSlide(slide, e);
      });
    },

    // Update slide content position and size
    // ======================================

    updateSlide: function(slide, e) {
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

    centerSlide: function(duration) {
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
        $slide,
        {
          top: 0,
          left: 0,
          opacity: 1
        },
        duration === undefined ? 0 : duration,
        function() {
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

    isMoved: function(slide) {
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

    updateCursor: function(nextWidth, nextHeight) {
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

    isZoomable: function() {
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

    isScaledDown: function(nextWidth, nextHeight) {
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

    canPan: function(nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        pos = null,
        rez = false;

      if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
        rez = self.getFitPos(current);

        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {width: nextWidth, height: nextHeight};
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

    loadSlide: function(slide) {
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
              success: function(data, textStatus) {
                if (textStatus === "success") {
                  self.setContent(slide, data);
                }
              },
              error: function(jqXHR, textStatus) {
                if (jqXHR && textStatus !== "abort") {
                  self.setError(slide);
                }
              }
            })
          );

          $slide.one("onReset", function() {
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

    setImage: function(slide) {
      var self = this,
        ghost;

      // Check if need to show loading icon
      setTimeout(function() {
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

        ghost.onerror = function() {
          $(this).remove();

          slide.$ghost = null;
        };

        ghost.onload = function() {
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
    checkSrcset: function(slide) {
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

        temp = srcset.split(",").map(function(el) {
          var ret = {};

          el.trim()
            .split(/\s+/)
            .forEach(function(el, i) {
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
        temp.sort(function(a, b) {
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

    setBigImage: function(slide) {
      var self = this,
        img = document.createElement("img"),
        $img = $(img);

      slide.$image = $img
        .one("error", function() {
          self.setError(slide);
        })
        .one("load", function() {
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
            setTimeout(function() {
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

    resolveImageSlideSize: function(slide, imgWidth, imgHeight) {
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

    setIframe: function(slide) {
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

        $iframe.on("load.fb error.fb", function(e) {
          this.isReady = 1;

          slide.$slide.trigger("refresh");

          self.afterLoad(slide);
        });

        // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function() {
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
      $slide.one("onReset", function() {
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

    setContent: function(slide, content) {
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

      slide.$slide.one("onReset", function() {
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

    setError: function(slide) {
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

    showLoading: function(slide) {
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

    hideLoading: function(slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();

        delete slide.$spinner;
      }
    },

    // Adjustments after slide content has been loaded
    // ===============================================

    afterLoad: function(slide) {
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
        slide.$content.on("contextmenu.fb", function(e) {
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

    adjustCaption: function(slide) {
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

    adjustLayout: function(slide) {
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

    revealContent: function(slide) {
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
        $.fancybox.animate(slide.$content, end, duration, function() {
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
        function() {
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

    getThumbPos: function(slide) {
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

    complete: function() {
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
        $.each(self.slides, function(key, slide) {
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
          .one("ended", function() {
            if (this.webkitExitFullscreen) {
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

    preload: function(type) {
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

    focus: function(e, firstRun) {
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

      focusableItems = focusableItems.filter(focusableStr).filter(function() {
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

    activate: function() {
      var self = this;

      // Deactivate all instances
      $(".fancybox-container").each(function() {
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

    close: function(e, d) {
      var self = this,
        current = self.current,
        effect,
        duration,
        $content,
        domRect,
        opacity,
        start,
        end;

      var done = function() {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true;

      // If beforeClose callback prevents closing, make sure content is centered
      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;

        requestAFrame(function() {
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

    cleanUp: function(e) {
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

    trigger: function(name, slide) {
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

    updateControls: function() {
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

    hideControls: function(andCaption) {
      var self = this,
        arr = ["infobar", "toolbar", "nav"];

      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }

      this.$refs.container.removeClass(
        arr
          .map(function(i) {
            return "fancybox-show-" + i;
          })
          .join(" ")
      );

      this.hasHiddenControls = true;
    },

    showControls: function() {
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

    toggleControls: function() {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });

  $.fancybox = {
    version: "3.5.6",
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

    getInstance: function(command) {
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

    open: function(items, opts, index) {
      return new FancyBox(items, opts, index);
    },

    // Close current or all instances
    // ==============================

    close: function(all) {
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

    destroy: function() {
      this.close(true);

      $D.add("body").off("click.fb-start", "**");
    },

    // Try to detect mobile devices
    // ============================

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    // Detect if 'translate3d' support is available
    // ============================================

    use3d: (function() {
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

    getTranslate: function($el) {
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

    setTranslate: function($el, props) {
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

    animate: function($el, to, duration, callback, leaveAnimationName) {
      var self = this,
        from;

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      self.stop($el);

      from = self.getTranslate($el);

      $el.on(transitionEnd, function(e) {
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
        setTimeout(function() {
          $el.trigger(transitionEnd);
        }, duration + 33)
      );
    },

    stop: function($el, callCallback) {
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

  $.fn.fancybox = function(options) {
    var selector;

    options = options || {};
    selector = options.selector || false;

    if (selector) {
      // Use body element instead of document so it executes first
      $("body")
        .off("click.fb-start", selector)
        .on("click.fb-start", selector, {options: options}, _run);
    } else {
      this.off("click.fb-start").on(
        "click.fb-start",
        {
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

  $D.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
      .eq($(this).attr("data-fancybox-index") || 0)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });
  });

  // Track focus event for better accessibility styling
  // ==================================================
  (function() {
    var buttonStr = ".fancybox-button",
      focusStr = "fancybox-focus",
      $pressed = null;

    $D.on("mousedown mouseup focus blur", buttonStr, function(e) {
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
(function($) {
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
      url: function(rez) {
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
      url: function(rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };

  // Formats matching url to final form
  var format = function(url, rez, params) {
    if (!url) {
      return;
    }

    params = params || "";

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function(key, value) {
      url = url.replace("$" + key, value || "");
    });

    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }

    return url;
  };

  $(document).on("objectNeedsType.fb", function(e, instance, item) {
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
    $.each(media, function(providerName, providerOpts) {
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
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function(match, p1, m, s) {
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

    load: function(vendor) {
      var _this = this,
        script;

      if (this[vendor].loaded) {
        setTimeout(function() {
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
        window.onYouTubeIframeAPIReady = function() {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      } else {
        script.onload = function() {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      }

      document.body.appendChild(script);
    },
    done: function(vendor) {
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
              onStateChange: function(e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);

          player.on("ended", function() {
            instance.next();
          });
        }
      }
    }
  };

  $(document).on({
    "afterShow.fb": function(e, instance, current) {
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
(function(window, document, $) {
  "use strict";

  var requestAFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function() {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function(id) {
        window.clearTimeout(id);
      }
    );
  })();

  var getPointerXY = function(e) {
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

  var distance = function(point2, point1, what) {
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

  var isClickable = function($el) {
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

  var hasScrollbars = function(el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
      overflowX = window.getComputedStyle(el)["overflow-x"],
      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

    return vertical || horizontal;
  };

  var isScrollable = function($el) {
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

  var Guestures = function(instance) {
    var self = this;

    self.instance = instance;

    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;

    self.destroy();

    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };

  Guestures.prototype.destroy = function() {
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

  Guestures.prototype.ontouchstart = function(e) {
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
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {top: 0, left: 0};
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

  Guestures.prototype.onscroll = function(e) {
    var self = this;

    self.isScrolling = true;

    document.removeEventListener("scroll", self.onscroll, true);
  };

  Guestures.prototype.ontouchmove = function(e) {
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

  Guestures.prototype.onSwipe = function(e) {
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

        $.each(instance.slides, function(index, slide) {
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
            .removeClass(function(index, className) {
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

    self.requestId = requestAFrame(function() {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function(index, slide) {
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

  Guestures.prototype.onPan = function() {
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

    self.requestId = requestAFrame(function() {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  // Make panning sticky to the edges
  Guestures.prototype.limitMovement = function() {
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

  Guestures.prototype.limitPosition = function(newOffsetX, newOffsetY, newWidth, newHeight) {
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

  Guestures.prototype.onZoom = function() {
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

    self.requestId = requestAFrame(function() {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function(e) {
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

  Guestures.prototype.endSwiping = function(swiping, scrolling) {
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
        self.instance.current.$slide,
        {
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
  Guestures.prototype.endPanning = function() {
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

  Guestures.prototype.endZooming = function() {
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

  Guestures.prototype.onTap = function(e) {
    var self = this;
    var $target = $(e.target);

    var instance = self.instance;
    var current = instance.current;

    var endPoints = (e && getPointerXY(e)) || self.startPoints;

    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

    var where;

    var process = function(prefix) {
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
        self.tapped = setTimeout(function() {
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
    .on("onActivate.fb", function(e, instance) {
      if (instance && !instance.Guestures) {
        instance.Guestures = new Guestures(instance);
      }
    })
    .on("beforeClose.fb", function(e, instance) {
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
(function(document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow:
        '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
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

  var SlideShow = function(instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,

    init: function() {
      var self = this,
        instance = self.instance,
        opts = instance.group[instance.currIndex].opts.slideShow;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
        self.toggle();
      });

      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },

    set: function(force) {
      var self = this,
        instance = self.instance,
        current = instance.current;

      // Check if reached last element
      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {scaleX: 1}, current.opts.slideShow.speed);
          }

          self.timer = setTimeout(function() {
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

    clear: function() {
      var self = this;

      clearTimeout(self.timer);

      self.timer = null;

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    start: function() {
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

    stop: function() {
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

    toggle: function() {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });

  $(document).on({
    "onInit.fb": function(e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },

    "beforeShow.fb": function(e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },

    "afterShow.fb": function(e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },

    "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      // "P" or Spacebar
      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();

        SlideShow.toggle();
      }
    },

    "beforeClose.fb onDeactivate.fb": function(e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });

  // Page Visibility API to pause slideshow when window is not active
  $(document).on("visibilitychange", function() {
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
(function(document, $) {
  "use strict";

  // Collection of methods supported by user browser
  var fn = (function() {
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
      request: function(elem) {
        elem = elem || document.documentElement;

        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function() {
        document[fn.exitFullscreen]();
      },
      toggle: function(elem) {
        elem = elem || document.documentElement;

        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function() {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function() {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen:
          '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
          "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });

    $(document).on(fn.fullscreenchange, function() {
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
    "onInit.fb": function(e, instance) {
      var $container;

      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

        return;
      }

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;

        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
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

    "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();

        instance.FullScreen.toggle();
      }
    },

    "beforeClose.fb": function(e, instance) {
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
(function(document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
    CLASS_ACTIVE = CLASS + "-active";

  // Make sure there are default values
  $.fancybox.defaults = $.extend(
    true,
    {
      btnTpl: {
        thumbs:
          '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
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

  var FancyThumbs = function(instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,

    init: function(instance) {
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
        self.$button.removeAttr("style").on("click", function() {
          self.toggle();
        });

        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },

    create: function() {
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
        self.$grid.on("click", "a", function() {
          instance.jumpTo($(this).attr("data-index"));
        });
      }

      // Build the list
      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }

      $.each(instance.group, function(i, item) {
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

    focus: function(duration) {
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
        $list.stop().animate(
          {
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
          .animate(
            {
              scrollLeft: thumbPos.left
            },
            duration
          );
      }
    },

    update: function() {
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

    hide: function() {
      this.isVisible = false;
      this.update();
    },

    show: function() {
      this.isVisible = true;
      this.update();
    },

    toggle: function() {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });

  $(document).on({
    "onInit.fb": function(e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },

    "beforeShow.fb": function(e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },

    "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      // "G"
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();

        Thumbs.toggle();
      }
    },

    "beforeClose.fb": function(e, instance) {
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
(function(document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share:
        '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
        "</button>"
    },
    share: {
      url: function(instance, item) {
        return (
          (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
        );
      },
      tpl:
        '<div class="fancybox-share">' +
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

    return String(string).replace(/[&<>"'`=\/]/g, function(s) {
      return entityMap[s];
    });
  }

  $(document).on("click", "[data-fancybox-share]", function() {
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
        afterLoad: function(shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function() {
            shareInstance.close(null, 0);
          });

          // Opening links in a popup window
          shareCurrent.$content.find(".fancybox-share__button").click(function() {
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
(function(window, document, $) {
  "use strict";

  // Simple $.escapeSelector polyfill (for jQuery prior v3)
  if (!$.escapeSelector) {
    $.escapeSelector = function(sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function(ch, asCodePoint) {
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
  $(function() {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    }

    // Update hash when opening/closing fancyBox
    $(document).on({
      "onInit.fb": function(e, instance) {
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

      "beforeShow.fb": function(e, instance, current, firstRun) {
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
        instance.hashTimer = setTimeout(function() {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"](
              {},
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

      "beforeClose.fb": function(e, instance, current) {
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
    $(window).on("hashchange.fb", function() {
      var url = parseUrl(),
        fb = null;

      // Find last fancyBox instance that has "hash"
      $.each(
        $(".fancybox-container")
          .get()
          .reverse(),
        function(index, value) {
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
    setTimeout(function() {
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
(function(document, $) {
  "use strict";

  var prevTime = new Date().getTime();

  $(document).on({
    "onInit.fb": function(e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3M/YzU1MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmFuY3lhcHBzL2ZhbmN5Ym94L2Rpc3QvanF1ZXJ5LmZhbmN5Ym94LmNzcz9hZGZiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmFuY3lhcHBzL2ZhbmN5Ym94L2Rpc3QvanF1ZXJ5LmZhbmN5Ym94LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGFnLWljb24tY3NzL2Nzcy9mbGFnLWljb24uY3NzP2ZhZDMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVAsQyxDQUNBOzs7QUFDQUEsbUJBQU8sQ0FBQyx1RkFBRCxDQUFQLEMsQ0FDQTs7O0FBQ0FBLG1CQUFPLENBQUMsaUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1RkFBRCxDQUFQLEMsQ0FFQTtBQUNBOzs7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksbURBQVosRTs7Ozs7Ozs7Ozs7QUNsQkEsdUM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLElBQUksdUJBQXVCLElBQUksNEVBQTRFOztBQUUvSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLFFBQVE7QUFDNUYsd0JBQXdCLEtBQUssVUFBVSxRQUFRO0FBQy9DLDBFQUEwRSxLQUFLO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLE9BQU87QUFDbkYsdUNBQXVDLFNBQVM7QUFDaEQsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCxPQUFPOztBQUV2RDtBQUNBO0FBQ0EsdUdBQXVHLFVBQVUsb0JBQW9CO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQSwyRkFBMkYsTUFBTTtBQUNqRztBQUNBOztBQUVBO0FBQ0EsNkZBQTZGLE9BQU87QUFDcEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUdBQWlHLE1BQU07QUFDdkc7QUFDQTs7QUFFQTtBQUNBLGtHQUFrRyxNQUFNO0FBQ3hHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLE9BQU87QUFDaEg7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx3QkFBd0I7QUFDeEIsMkdBQTJHO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLGFBQWE7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUY7QUFDekY7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakMsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxvQ0FBb0M7O0FBRXJFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxxREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBOztBQUVBOztBQUVBO0FBQ0EsK0NBQStDLEdBQUc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLHVDQUF1QywyQkFBMkIsU0FBUyxpQkFBaUI7QUFDNUYsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELDZDQUE2Qzs7QUFFOUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFLEtBQUssRUFBRTtBQUNuQywwQkFBMEIsUUFBUTtBQUNsQywwQkFBMEIsUUFBUTtBQUNsQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNEQUFzRCxLQUFLO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4RUFBOEU7O0FBRTlFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpQkFBaUI7QUFDMUQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtJQUFrSSxHQUFHO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJLFNBQVMsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLElBQUksU0FBUyxFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixzQkFBc0I7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQsT0FBTztBQUNyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFO0FBQ3RFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixZQUFZO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFVBQVU7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDOztBQUVBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRyxhQUFhO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLFFBQVE7QUFDekc7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLE9BQU87QUFDcEc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSwySEFBMkgsS0FBSztBQUNoSTtBQUNBO0FBQ0E7QUFDQSxtSEFBbUgsS0FBSyxRQUFRLE9BQU87QUFDdkk7QUFDQTtBQUNBO0FBQ0EsK0hBQStILEtBQUssZUFBZSxPQUFPLFNBQVMsT0FBTztBQUMxSztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxTQUFTO0FBQy9FO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLEVBQUUsT0FBTyxFQUFFO0FBQzdCLGtCQUFrQixFQUFFLEtBQUssRUFBRTtBQUMzQixrQkFBa0IsRUFBRSxTQUFTLEVBQUU7QUFDL0Isa0JBQWtCLEVBQUUsT0FBTyxFQUFFOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwwQ0FBMEM7QUFDMUMsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ3ZnTEQsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xuLy8gZmxhZyBpY29uIGNzc1xucmVxdWlyZSgnZmxhZy1pY29uLWNzcy9jc3MvZmxhZy1pY29uLmNzcycpO1xuLy8gZmFuY3lib3hcbnJlcXVpcmUoJ0BmYW5jeWFwcHMvZmFuY3lib3gvZGlzdC9qcXVlcnkuZmFuY3lib3guY3NzJyk7XG5yZXF1aXJlKCdAZmFuY3lhcHBzL2ZhbmN5Ym94Jyk7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cbi8vIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBmYW5jeUJveCB2My41LjZcbi8vXG4vLyBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4vLyBvciBmYW5jeUJveCBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXG4vL1xuLy8gaHR0cDovL2ZhbmN5YXBwcy5jb20vZmFuY3lib3gvXG4vLyBDb3B5cmlnaHQgMjAxOCBmYW5jeUFwcHNcbi8vXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHtcclxuICAgIGluZm86IGZ1bmN0aW9uKHN0dWZmKSB7fVxyXG4gIH07XHJcblxyXG4gIC8vIElmIHRoZXJlJ3Mgbm8galF1ZXJ5LCBmYW5jeUJveCBjYW4ndCB3b3JrXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgaWYgKCEkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBmYW5jeUJveCBpcyBhbHJlYWR5IGluaXRpYWxpemVkXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBpZiAoJC5mbi5mYW5jeWJveCkge1xyXG4gICAgY29uc29sZS5pbmZvKFwiZmFuY3lCb3ggYWxyZWFkeSBpbml0aWFsaXplZFwiKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBQcml2YXRlIGRlZmF1bHQgc2V0dGluZ3NcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgLy8gQ2xvc2UgZXhpc3RpbmcgbW9kYWxzXHJcbiAgICAvLyBTZXQgdGhpcyB0byBmYWxzZSBpZiB5b3UgZG8gbm90IG5lZWQgdG8gc3RhY2sgbXVsdGlwbGUgaW5zdGFuY2VzXHJcbiAgICBjbG9zZUV4aXN0aW5nOiBmYWxzZSxcclxuXHJcbiAgICAvLyBFbmFibGUgaW5maW5pdGUgZ2FsbGVyeSBuYXZpZ2F0aW9uXHJcbiAgICBsb29wOiBmYWxzZSxcclxuXHJcbiAgICAvLyBIb3Jpem9udGFsIHNwYWNlIGJldHdlZW4gc2xpZGVzXHJcbiAgICBndXR0ZXI6IDUwLFxyXG5cclxuICAgIC8vIEVuYWJsZSBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICBrZXlib2FyZDogdHJ1ZSxcclxuXHJcbiAgICAvLyBTaG91bGQgYWxsb3cgY2FwdGlvbiB0byBvdmVybGFwIHRoZSBjb250ZW50XHJcbiAgICBwcmV2ZW50Q2FwdGlvbk92ZXJsYXA6IHRydWUsXHJcblxyXG4gICAgLy8gU2hvdWxkIGRpc3BsYXkgbmF2aWdhdGlvbiBhcnJvd3MgYXQgdGhlIHNjcmVlbiBlZGdlc1xyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG5cclxuICAgIC8vIFNob3VsZCBkaXNwbGF5IGNvdW50ZXIgYXQgdGhlIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgaW5mb2JhcjogdHJ1ZSxcclxuXHJcbiAgICAvLyBTaG91bGQgZGlzcGxheSBjbG9zZSBidXR0b24gKHVzaW5nIGBidG5UcGwuc21hbGxCdG5gIHRlbXBsYXRlKSBvdmVyIHRoZSBjb250ZW50XHJcbiAgICAvLyBDYW4gYmUgdHJ1ZSwgZmFsc2UsIFwiYXV0b1wiXHJcbiAgICAvLyBJZiBcImF1dG9cIiAtIHdpbGwgYmUgYXV0b21hdGljYWxseSBlbmFibGVkIGZvciBcImh0bWxcIiwgXCJpbmxpbmVcIiBvciBcImFqYXhcIiBpdGVtc1xyXG4gICAgc21hbGxCdG46IFwiYXV0b1wiLFxyXG5cclxuICAgIC8vIFNob3VsZCBkaXNwbGF5IHRvb2xiYXIgKGJ1dHRvbnMgYXQgdGhlIHRvcClcclxuICAgIC8vIENhbiBiZSB0cnVlLCBmYWxzZSwgXCJhdXRvXCJcclxuICAgIC8vIElmIFwiYXV0b1wiIC0gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGhpZGRlbiBpZiBcInNtYWxsQnRuXCIgaXMgZW5hYmxlZFxyXG4gICAgdG9vbGJhcjogXCJhdXRvXCIsXHJcblxyXG4gICAgLy8gV2hhdCBidXR0b25zIHNob3VsZCBhcHBlYXIgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuXHJcbiAgICAvLyBCdXR0b25zIHdpbGwgYmUgY3JlYXRlZCB1c2luZyB0ZW1wbGF0ZXMgZnJvbSBgYnRuVHBsYCBvcHRpb25cclxuICAgIC8vIGFuZCB0aGV5IHdpbGwgYmUgcGxhY2VkIGludG8gdG9vbGJhciAoY2xhc3M9XCJmYW5jeWJveC10b29sYmFyXCJgIGVsZW1lbnQpXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgIFwiem9vbVwiLFxyXG4gICAgICAvL1wic2hhcmVcIixcclxuICAgICAgXCJzbGlkZVNob3dcIixcclxuICAgICAgLy9cImZ1bGxTY3JlZW5cIixcclxuICAgICAgLy9cImRvd25sb2FkXCIsXHJcbiAgICAgIFwidGh1bWJzXCIsXHJcbiAgICAgIFwiY2xvc2VcIlxyXG4gICAgXSxcclxuXHJcbiAgICAvLyBEZXRlY3QgXCJpZGxlXCIgdGltZSBpbiBzZWNvbmRzXHJcbiAgICBpZGxlVGltZTogMyxcclxuXHJcbiAgICAvLyBEaXNhYmxlIHJpZ2h0LWNsaWNrIGFuZCB1c2Ugc2ltcGxlIGltYWdlIHByb3RlY3Rpb24gZm9yIGltYWdlc1xyXG4gICAgcHJvdGVjdDogZmFsc2UsXHJcblxyXG4gICAgLy8gU2hvcnRjdXQgdG8gbWFrZSBjb250ZW50IFwibW9kYWxcIiAtIGRpc2FibGUga2V5Ym9hcmQgbmF2aWd0aW9uLCBoaWRlIGJ1dHRvbnMsIGV0Y1xyXG4gICAgbW9kYWw6IGZhbHNlLFxyXG5cclxuICAgIGltYWdlOiB7XHJcbiAgICAgIC8vIFdhaXQgZm9yIGltYWdlcyB0byBsb2FkIGJlZm9yZSBkaXNwbGF5aW5nXHJcbiAgICAgIC8vICAgdHJ1ZSAgLSB3YWl0IGZvciBpbWFnZSB0byBsb2FkIGFuZCB0aGVuIGRpc3BsYXk7XHJcbiAgICAgIC8vICAgZmFsc2UgLSBkaXNwbGF5IHRodW1ibmFpbCBhbmQgbG9hZCB0aGUgZnVsbC1zaXplZCBpbWFnZSBvdmVyIHRvcCxcclxuICAgICAgLy8gICAgICAgICAgIHJlcXVpcmVzIHByZWRlZmluZWQgaW1hZ2UgZGltZW5zaW9ucyAoYGRhdGEtd2lkdGhgIGFuZCBgZGF0YS1oZWlnaHRgIGF0dHJpYnV0ZXMpXHJcbiAgICAgIHByZWxvYWQ6IGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIGFqYXg6IHtcclxuICAgICAgLy8gT2JqZWN0IGNvbnRhaW5pbmcgc2V0dGluZ3MgZm9yIGFqYXggcmVxdWVzdFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIC8vIFRoaXMgaGVscHMgdG8gaW5kaWNhdGUgdGhhdCByZXF1ZXN0IGNvbWVzIGZyb20gdGhlIG1vZGFsXHJcbiAgICAgICAgLy8gRmVlbCBmcmVlIHRvIGNoYW5nZSBuYW1pbmdcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBmYW5jeWJveDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpZnJhbWU6IHtcclxuICAgICAgLy8gSWZyYW1lIHRlbXBsYXRlXHJcbiAgICAgIHRwbDpcclxuICAgICAgICAnPGlmcmFtZSBpZD1cImZhbmN5Ym94LWZyYW1le3JuZH1cIiBuYW1lPVwiZmFuY3lib3gtZnJhbWV7cm5kfVwiIGNsYXNzPVwiZmFuY3lib3gtaWZyYW1lXCIgYWxsb3dmdWxsc2NyZWVuPVwiYWxsb3dmdWxsc2NyZWVuXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiIHNyYz1cIlwiPjwvaWZyYW1lPicsXHJcblxyXG4gICAgICAvLyBQcmVsb2FkIGlmcmFtZSBiZWZvcmUgZGlzcGxheWluZyBpdFxyXG4gICAgICAvLyBUaGlzIGFsbG93cyB0byBjYWxjdWxhdGUgaWZyYW1lIGNvbnRlbnQgd2lkdGggYW5kIGhlaWdodFxyXG4gICAgICAvLyAobm90ZTogRHVlIHRvIFwiU2FtZSBPcmlnaW4gUG9saWN5XCIsIHlvdSBjYW4ndCBnZXQgY3Jvc3MgZG9tYWluIGRhdGEpLlxyXG4gICAgICBwcmVsb2FkOiB0cnVlLFxyXG5cclxuICAgICAgLy8gQ3VzdG9tIENTUyBzdHlsaW5nIGZvciBpZnJhbWUgd3JhcHBpbmcgZWxlbWVudFxyXG4gICAgICAvLyBZb3UgY2FuIHVzZSB0aGlzIHRvIHNldCBjdXN0b20gaWZyYW1lIGRpbWVuc2lvbnNcclxuICAgICAgY3NzOiB7fSxcclxuXHJcbiAgICAgIC8vIElmcmFtZSB0YWcgYXR0cmlidXRlc1xyXG4gICAgICBhdHRyOiB7XHJcbiAgICAgICAgc2Nyb2xsaW5nOiBcImF1dG9cIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEZvciBIVE1MNSB2aWRlbyBvbmx5XHJcbiAgICB2aWRlbzoge1xyXG4gICAgICB0cGw6XHJcbiAgICAgICAgJzx2aWRlbyBjbGFzcz1cImZhbmN5Ym94LXZpZGVvXCIgY29udHJvbHMgY29udHJvbHNMaXN0PVwibm9kb3dubG9hZFwiIHBvc3Rlcj1cInt7cG9zdGVyfX1cIj4nICtcclxuICAgICAgICAnPHNvdXJjZSBzcmM9XCJ7e3NyY319XCIgdHlwZT1cInt7Zm9ybWF0fX1cIiAvPicgK1xyXG4gICAgICAgICdTb3JyeSwgeW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IGVtYmVkZGVkIHZpZGVvcywgPGEgaHJlZj1cInt7c3JjfX1cIj5kb3dubG9hZDwvYT4gYW5kIHdhdGNoIHdpdGggeW91ciBmYXZvcml0ZSB2aWRlbyBwbGF5ZXIhJyArXHJcbiAgICAgICAgXCI8L3ZpZGVvPlwiLFxyXG4gICAgICBmb3JtYXQ6IFwiXCIsIC8vIGN1c3RvbSB2aWRlbyBmb3JtYXRcclxuICAgICAgYXV0b1N0YXJ0OiB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIERlZmF1bHQgY29udGVudCB0eXBlIGlmIGNhbm5vdCBiZSBkZXRlY3RlZCBhdXRvbWF0aWNhbGx5XHJcbiAgICBkZWZhdWx0VHlwZTogXCJpbWFnZVwiLFxyXG5cclxuICAgIC8vIE9wZW4vY2xvc2UgYW5pbWF0aW9uIHR5cGVcclxuICAgIC8vIFBvc3NpYmxlIHZhbHVlczpcclxuICAgIC8vICAgZmFsc2UgICAgICAgICAgICAtIGRpc2FibGVcclxuICAgIC8vICAgXCJ6b29tXCIgICAgICAgICAgIC0gem9vbSBpbWFnZXMgZnJvbS90byB0aHVtYm5haWxcclxuICAgIC8vICAgXCJmYWRlXCJcclxuICAgIC8vICAgXCJ6b29tLWluLW91dFwiXHJcbiAgICAvL1xyXG4gICAgYW5pbWF0aW9uRWZmZWN0OiBcInpvb21cIixcclxuXHJcbiAgICAvLyBEdXJhdGlvbiBpbiBtcyBmb3Igb3Blbi9jbG9zZSBhbmltYXRpb25cclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzNjYsXHJcblxyXG4gICAgLy8gU2hvdWxkIGltYWdlIGNoYW5nZSBvcGFjaXR5IHdoaWxlIHpvb21pbmdcclxuICAgIC8vIElmIG9wYWNpdHkgaXMgXCJhdXRvXCIsIHRoZW4gb3BhY2l0eSB3aWxsIGJlIGNoYW5nZWQgaWYgaW1hZ2UgYW5kIHRodW1ibmFpbCBoYXZlIGRpZmZlcmVudCBhc3BlY3QgcmF0aW9zXHJcbiAgICB6b29tT3BhY2l0eTogXCJhdXRvXCIsXHJcblxyXG4gICAgLy8gVHJhbnNpdGlvbiBlZmZlY3QgYmV0d2VlbiBzbGlkZXNcclxuICAgIC8vXHJcbiAgICAvLyBQb3NzaWJsZSB2YWx1ZXM6XHJcbiAgICAvLyAgIGZhbHNlICAgICAgICAgICAgLSBkaXNhYmxlXHJcbiAgICAvLyAgIFwiZmFkZSdcclxuICAgIC8vICAgXCJzbGlkZSdcclxuICAgIC8vICAgXCJjaXJjdWxhcidcclxuICAgIC8vICAgXCJ0dWJlJ1xyXG4gICAgLy8gICBcInpvb20taW4tb3V0J1xyXG4gICAgLy8gICBcInJvdGF0ZSdcclxuICAgIC8vXHJcbiAgICB0cmFuc2l0aW9uRWZmZWN0OiBcImZhZGVcIixcclxuXHJcbiAgICAvLyBEdXJhdGlvbiBpbiBtcyBmb3IgdHJhbnNpdGlvbiBhbmltYXRpb25cclxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMzY2LFxyXG5cclxuICAgIC8vIEN1c3RvbSBDU1MgY2xhc3MgZm9yIHNsaWRlIGVsZW1lbnRcclxuICAgIHNsaWRlQ2xhc3M6IFwiXCIsXHJcblxyXG4gICAgLy8gQ3VzdG9tIENTUyBjbGFzcyBmb3IgbGF5b3V0XHJcbiAgICBiYXNlQ2xhc3M6IFwiXCIsXHJcblxyXG4gICAgLy8gQmFzZSB0ZW1wbGF0ZSBmb3IgbGF5b3V0XHJcbiAgICBiYXNlVHBsOlxyXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWNvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiB0YWJpbmRleD1cIi0xXCI+JyArXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtYmdcIj48L2Rpdj4nICtcclxuICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1pbm5lclwiPicgK1xyXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWluZm9iYXJcIj48c3BhbiBkYXRhLWZhbmN5Ym94LWluZGV4Pjwvc3Bhbj4mbmJzcDsvJm5ic3A7PHNwYW4gZGF0YS1mYW5jeWJveC1jb3VudD48L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtdG9vbGJhclwiPnt7YnV0dG9uc319PC9kaXY+JyArXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtbmF2aWdhdGlvblwiPnt7YXJyb3dzfX08L2Rpdj4nICtcclxuICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zdGFnZVwiPjwvZGl2PicgK1xyXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWNhcHRpb25cIj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtY2FwdGlvbl9fYm9keVwiPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICBcIjwvZGl2PlwiICtcclxuICAgICAgXCI8L2Rpdj5cIixcclxuXHJcbiAgICAvLyBMb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZVxyXG4gICAgc3Bpbm5lclRwbDogJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1sb2FkaW5nXCI+PC9kaXY+JyxcclxuXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIHRlbXBsYXRlXHJcbiAgICBlcnJvclRwbDogJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1lcnJvclwiPjxwPnt7RVJST1J9fTwvcD48L2Rpdj4nLFxyXG5cclxuICAgIGJ0blRwbDoge1xyXG4gICAgICBkb3dubG9hZDpcclxuICAgICAgICAnPGEgZG93bmxvYWQgZGF0YS1mYW5jeWJveC1kb3dubG9hZCBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWRvd25sb2FkXCIgdGl0bGU9XCJ7e0RPV05MT0FEfX1cIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+JyArXHJcbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE4LjYyIDE3LjA5VjE5SDUuMzh2LTEuOTF6bS0yLjk3LTYuOTZMMTcgMTEuNDVsLTUgNC44Ny01LTQuODcgMS4zNi0xLjMyIDIuNjggMi42NFY1aDEuOTJ2Ny43N3pcIi8+PC9zdmc+JyArXHJcbiAgICAgICAgXCI8L2E+XCIsXHJcblxyXG4gICAgICB6b29tOlxyXG4gICAgICAgICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtem9vbSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXpvb21cIiB0aXRsZT1cInt7Wk9PTX19XCI+JyArXHJcbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE4LjcgMTcuM2wtMy0zYTUuOSA1LjkgMCAwIDAtLjYtNy42IDUuOSA1LjkgMCAwIDAtOC40IDAgNS45IDUuOSAwIDAgMCAwIDguNCA1LjkgNS45IDAgMCAwIDcuNy43bDMgM2ExIDEgMCAwIDAgMS4zIDBjLjQtLjUuNC0xIDAtMS41ek04LjEgMTMuOGE0IDQgMCAwIDEgMC01LjcgNCA0IDAgMCAxIDUuNyAwIDQgNCAwIDAgMSAwIDUuNyA0IDQgMCAwIDEtNS43IDB6XCIvPjwvc3ZnPicgK1xyXG4gICAgICAgIFwiPC9idXR0b24+XCIsXHJcblxyXG4gICAgICBjbG9zZTpcclxuICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tY2xvc2VcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPicgK1xyXG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAxMC42TDYuNiA1LjIgNS4yIDYuNmw1LjQgNS40LTUuNCA1LjQgMS40IDEuNCA1LjQtNS40IDUuNCA1LjQgMS40LTEuNC01LjQtNS40IDUuNC01LjQtMS40LTEuNC01LjQgNS40elwiLz48L3N2Zz4nICtcclxuICAgICAgICBcIjwvYnV0dG9uPlwiLFxyXG5cclxuICAgICAgLy8gQXJyb3dzXHJcbiAgICAgIGFycm93TGVmdDpcclxuICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXByZXYgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1hcnJvd19sZWZ0XCIgdGl0bGU9XCJ7e1BSRVZ9fVwiPicgK1xyXG4gICAgICAgICc8ZGl2PjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTExLjI4IDE1LjdsLTEuMzQgMS4zN0w1IDEybDQuOTQtNS4wNyAxLjM0IDEuMzgtMi42OCAyLjcySDE5djEuOTRIOC42elwiLz48L3N2Zz48L2Rpdj4nICtcclxuICAgICAgICBcIjwvYnV0dG9uPlwiLFxyXG5cclxuICAgICAgYXJyb3dSaWdodDpcclxuICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LW5leHQgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1hcnJvd19yaWdodFwiIHRpdGxlPVwie3tORVhUfX1cIj4nICtcclxuICAgICAgICAnPGRpdj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNS40IDEyLjk3bC0yLjY4IDIuNzIgMS4zNCAxLjM4TDE5IDEybC00Ljk0LTUuMDctMS4zNCAxLjM4IDIuNjggMi43Mkg1djEuOTR6XCIvPjwvc3ZnPjwvZGl2PicgK1xyXG4gICAgICAgIFwiPC9idXR0b24+XCIsXHJcblxyXG4gICAgICAvLyBUaGlzIHNtYWxsIGNsb3NlIGJ1dHRvbiB3aWxsIGJlIGFwcGVuZGVkIHRvIHlvdXIgaHRtbC9pbmxpbmUvYWpheCBjb250ZW50IGJ5IGRlZmF1bHQsXHJcbiAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxyXG4gICAgICBzbWFsbEJ0bjpcclxuICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1jbG9zZS1zbWFsbFwiIHRpdGxlPVwie3tDTE9TRX19XCI+JyArXHJcbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTMgMTJsNS01LTEtMS01IDUtNS01LTEgMSA1IDUtNSA1IDEgMSA1LTUgNSA1IDEtMXpcIi8+PC9zdmc+JyArXHJcbiAgICAgICAgXCI8L2J1dHRvbj5cIlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDb250YWluZXIgaXMgaW5qZWN0ZWQgaW50byB0aGlzIGVsZW1lbnRcclxuICAgIHBhcmVudEVsOiBcImJvZHlcIixcclxuXHJcbiAgICAvLyBIaWRlIGJyb3dzZXIgdmVydGljYWwgc2Nyb2xsYmFyczsgdXNlIGF0IHlvdXIgb3duIHJpc2tcclxuICAgIGhpZGVTY3JvbGxiYXI6IHRydWUsXHJcblxyXG4gICAgLy8gRm9jdXMgaGFuZGxpbmdcclxuICAgIC8vID09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gVHJ5IHRvIGZvY3VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBhZnRlciBvcGVuaW5nXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcblxyXG4gICAgLy8gUHV0IGZvY3VzIGJhY2sgdG8gYWN0aXZlIGVsZW1lbnQgYWZ0ZXIgY2xvc2luZ1xyXG4gICAgYmFja0ZvY3VzOiB0cnVlLFxyXG5cclxuICAgIC8vIERvIG5vdCBsZXQgdXNlciB0byBmb2N1cyBvbiBlbGVtZW50IG91dHNpZGUgbW9kYWwgY29udGVudFxyXG4gICAgdHJhcEZvY3VzOiB0cnVlLFxyXG5cclxuICAgIC8vIE1vZHVsZSBzcGVjaWZpYyBvcHRpb25zXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGZ1bGxTY3JlZW46IHtcclxuICAgICAgYXV0b1N0YXJ0OiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBTZXQgYHRvdWNoOiBmYWxzZWAgdG8gZGlzYWJsZSBwYW5uaW5nL3N3aXBpbmdcclxuICAgIHRvdWNoOiB7XHJcbiAgICAgIHZlcnRpY2FsOiB0cnVlLCAvLyBBbGxvdyB0byBkcmFnIGNvbnRlbnQgdmVydGljYWxseVxyXG4gICAgICBtb21lbnR1bTogdHJ1ZSAvLyBDb250aW51ZSBtb3ZlbWVudCBhZnRlciByZWxlYXNpbmcgbW91c2UvdG91Y2ggd2hlbiBwYW5uaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEhhc2ggdmFsdWUgd2hlbiBpbml0aWFsaXppbmcgbWFudWFsbHksXHJcbiAgICAvLyBzZXQgYGZhbHNlYCB0byBkaXNhYmxlIGhhc2ggY2hhbmdlXHJcbiAgICBoYXNoOiBudWxsLFxyXG5cclxuICAgIC8vIEN1c3RvbWl6ZSBvciBhZGQgbmV3IG1lZGlhIHR5cGVzXHJcbiAgICAvLyBFeGFtcGxlOlxyXG4gICAgLypcclxuICAgICAgbWVkaWEgOiB7XHJcbiAgICAgICAgeW91dHViZSA6IHtcclxuICAgICAgICAgIHBhcmFtcyA6IHtcclxuICAgICAgICAgICAgYXV0b3BsYXkgOiAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAqL1xyXG4gICAgbWVkaWE6IHt9LFxyXG5cclxuICAgIHNsaWRlU2hvdzoge1xyXG4gICAgICBhdXRvU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBzcGVlZDogMzAwMFxyXG4gICAgfSxcclxuXHJcbiAgICB0aHVtYnM6IHtcclxuICAgICAgYXV0b1N0YXJ0OiBmYWxzZSwgLy8gRGlzcGxheSB0aHVtYm5haWxzIG9uIG9wZW5pbmdcclxuICAgICAgaGlkZU9uQ2xvc2U6IHRydWUsIC8vIEhpZGUgdGh1bWJuYWlsIGdyaWQgd2hlbiBjbG9zaW5nIGFuaW1hdGlvbiBzdGFydHNcclxuICAgICAgcGFyZW50RWw6IFwiLmZhbmN5Ym94LWNvbnRhaW5lclwiLCAvLyBDb250YWluZXIgaXMgaW5qZWN0ZWQgaW50byB0aGlzIGVsZW1lbnRcclxuICAgICAgYXhpczogXCJ5XCIgLy8gVmVydGljYWwgKHkpIG9yIGhvcml6b250YWwgKHgpIHNjcm9sbGluZ1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2UgbW91c2V3aGVlbCB0byBuYXZpZ2F0ZSBnYWxsZXJ5XHJcbiAgICAvLyBJZiAnYXV0bycgLSBlbmFibGVkIGZvciBpbWFnZXMgb25seVxyXG4gICAgd2hlZWw6IFwiYXV0b1wiLFxyXG5cclxuICAgIC8vIENhbGxiYWNrc1xyXG4gICAgLy89PT09PT09PT09XHJcblxyXG4gICAgLy8gU2VlIERvY3VtZW50YXRpb24vQVBJL0V2ZW50cyBmb3IgbW9yZSBpbmZvcm1hdGlvblxyXG4gICAgLy8gRXhhbXBsZTpcclxuICAgIC8qXHJcbiAgICAgIGFmdGVyU2hvdzogZnVuY3Rpb24oIGluc3RhbmNlLCBjdXJyZW50ICkge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyggJ0NsaWNrZWQgZWxlbWVudDonICk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCBjdXJyZW50Lm9wdHMuJG9yaWcgKTtcclxuICAgICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICBvbkluaXQ6ICQubm9vcCwgLy8gV2hlbiBpbnN0YW5jZSBoYXMgYmVlbiBpbml0aWFsaXplZFxyXG5cclxuICAgIGJlZm9yZUxvYWQ6ICQubm9vcCwgLy8gQmVmb3JlIHRoZSBjb250ZW50IG9mIGEgc2xpZGUgaXMgYmVpbmcgbG9hZGVkXHJcbiAgICBhZnRlckxvYWQ6ICQubm9vcCwgLy8gV2hlbiB0aGUgY29udGVudCBvZiBhIHNsaWRlIGlzIGRvbmUgbG9hZGluZ1xyXG5cclxuICAgIGJlZm9yZVNob3c6ICQubm9vcCwgLy8gQmVmb3JlIG9wZW4gYW5pbWF0aW9uIHN0YXJ0c1xyXG4gICAgYWZ0ZXJTaG93OiAkLm5vb3AsIC8vIFdoZW4gY29udGVudCBpcyBkb25lIGxvYWRpbmcgYW5kIGFuaW1hdGluZ1xyXG5cclxuICAgIGJlZm9yZUNsb3NlOiAkLm5vb3AsIC8vIEJlZm9yZSB0aGUgaW5zdGFuY2UgYXR0ZW1wdHMgdG8gY2xvc2UuIFJldHVybiBmYWxzZSB0byBjYW5jZWwgdGhlIGNsb3NlLlxyXG4gICAgYWZ0ZXJDbG9zZTogJC5ub29wLCAvLyBBZnRlciBpbnN0YW5jZSBoYXMgYmVlbiBjbG9zZWRcclxuXHJcbiAgICBvbkFjdGl2YXRlOiAkLm5vb3AsIC8vIFdoZW4gaW5zdGFuY2UgaXMgYnJvdWdodCB0byBmcm9udFxyXG4gICAgb25EZWFjdGl2YXRlOiAkLm5vb3AsIC8vIFdoZW4gb3RoZXIgaW5zdGFuY2UgaGFzIGJlZW4gYWN0aXZhdGVkXHJcblxyXG4gICAgLy8gSW50ZXJhY3Rpb25cclxuICAgIC8vID09PT09PT09PT09XHJcblxyXG4gICAgLy8gVXNlIG9wdGlvbnMgYmVsb3cgdG8gY3VzdG9taXplIHRha2VuIGFjdGlvbiB3aGVuIHVzZXIgY2xpY2tzIG9yIGRvdWJsZSBjbGlja3Mgb24gdGhlIGZhbmN5Qm94IGFyZWEsXHJcbiAgICAvLyBlYWNoIG9wdGlvbiBjYW4gYmUgc3RyaW5nIG9yIG1ldGhvZCB0aGF0IHJldHVybnMgdmFsdWUuXHJcbiAgICAvL1xyXG4gICAgLy8gUG9zc2libGUgdmFsdWVzOlxyXG4gICAgLy8gICBcImNsb3NlXCIgICAgICAgICAgIC0gY2xvc2UgaW5zdGFuY2VcclxuICAgIC8vICAgXCJuZXh0XCIgICAgICAgICAgICAtIG1vdmUgdG8gbmV4dCBnYWxsZXJ5IGl0ZW1cclxuICAgIC8vICAgXCJuZXh0T3JDbG9zZVwiICAgICAtIG1vdmUgdG8gbmV4dCBnYWxsZXJ5IGl0ZW0gb3IgY2xvc2UgaWYgZ2FsbGVyeSBoYXMgb25seSBvbmUgaXRlbVxyXG4gICAgLy8gICBcInRvZ2dsZUNvbnRyb2xzXCIgIC0gc2hvdy9oaWRlIGNvbnRyb2xzXHJcbiAgICAvLyAgIFwiem9vbVwiICAgICAgICAgICAgLSB6b29tIGltYWdlIChpZiBsb2FkZWQpXHJcbiAgICAvLyAgIGZhbHNlICAgICAgICAgICAgIC0gZG8gbm90aGluZ1xyXG5cclxuICAgIC8vIENsaWNrZWQgb24gdGhlIGNvbnRlbnRcclxuICAgIGNsaWNrQ29udGVudDogZnVuY3Rpb24oY3VycmVudCwgZXZlbnQpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiID8gXCJ6b29tXCIgOiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ2xpY2tlZCBvbiB0aGUgc2xpZGVcclxuICAgIGNsaWNrU2xpZGU6IFwiY2xvc2VcIixcclxuXHJcbiAgICAvLyBDbGlja2VkIG9uIHRoZSBiYWNrZ3JvdW5kIChiYWNrZHJvcCkgZWxlbWVudDtcclxuICAgIC8vIGlmIHlvdSBoYXZlIG5vdCBjaGFuZ2VkIHRoZSBsYXlvdXQsIHRoZW4gbW9zdCBsaWtlbHkgeW91IG5lZWQgdG8gdXNlIGBjbGlja1NsaWRlYCBvcHRpb25cclxuICAgIGNsaWNrT3V0c2lkZTogXCJjbG9zZVwiLFxyXG5cclxuICAgIC8vIFNhbWUgYXMgcHJldmlvdXMgdHdvLCBidXQgZm9yIGRvdWJsZSBjbGlja1xyXG4gICAgZGJsY2xpY2tDb250ZW50OiBmYWxzZSxcclxuICAgIGRibGNsaWNrU2xpZGU6IGZhbHNlLFxyXG4gICAgZGJsY2xpY2tPdXRzaWRlOiBmYWxzZSxcclxuXHJcbiAgICAvLyBDdXN0b20gb3B0aW9ucyB3aGVuIG1vYmlsZSBkZXZpY2UgaXMgZGV0ZWN0ZWRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIG1vYmlsZToge1xyXG4gICAgICBwcmV2ZW50Q2FwdGlvbk92ZXJsYXA6IGZhbHNlLFxyXG4gICAgICBpZGxlVGltZTogZmFsc2UsXHJcbiAgICAgIGNsaWNrQ29udGVudDogZnVuY3Rpb24oY3VycmVudCwgZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudC50eXBlID09PSBcImltYWdlXCIgPyBcInRvZ2dsZUNvbnRyb2xzXCIgOiBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgY2xpY2tTbGlkZTogZnVuY3Rpb24oY3VycmVudCwgZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudC50eXBlID09PSBcImltYWdlXCIgPyBcInRvZ2dsZUNvbnRyb2xzXCIgOiBcImNsb3NlXCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRibGNsaWNrQ29udGVudDogZnVuY3Rpb24oY3VycmVudCwgZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudC50eXBlID09PSBcImltYWdlXCIgPyBcInpvb21cIiA6IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBkYmxjbGlja1NsaWRlOiBmdW5jdGlvbihjdXJyZW50LCBldmVudCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50LnR5cGUgPT09IFwiaW1hZ2VcIiA/IFwiem9vbVwiIDogZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gSW50ZXJuYXRpb25hbGl6YXRpb25cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbGFuZzogXCJlblwiLFxyXG4gICAgaTE4bjoge1xyXG4gICAgICBlbjoge1xyXG4gICAgICAgIENMT1NFOiBcIkNsb3NlXCIsXHJcbiAgICAgICAgTkVYVDogXCJOZXh0XCIsXHJcbiAgICAgICAgUFJFVjogXCJQcmV2aW91c1wiLFxyXG4gICAgICAgIEVSUk9SOiBcIlRoZSByZXF1ZXN0ZWQgY29udGVudCBjYW5ub3QgYmUgbG9hZGVkLiA8YnIvPiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgIFBMQVlfU1RBUlQ6IFwiU3RhcnQgc2xpZGVzaG93XCIsXHJcbiAgICAgICAgUExBWV9TVE9QOiBcIlBhdXNlIHNsaWRlc2hvd1wiLFxyXG4gICAgICAgIEZVTExfU0NSRUVOOiBcIkZ1bGwgc2NyZWVuXCIsXHJcbiAgICAgICAgVEhVTUJTOiBcIlRodW1ibmFpbHNcIixcclxuICAgICAgICBET1dOTE9BRDogXCJEb3dubG9hZFwiLFxyXG4gICAgICAgIFNIQVJFOiBcIlNoYXJlXCIsXHJcbiAgICAgICAgWk9PTTogXCJab29tXCJcclxuICAgICAgfSxcclxuICAgICAgZGU6IHtcclxuICAgICAgICBDTE9TRTogXCJTY2hsaWUmc3psaWc7ZW5cIixcclxuICAgICAgICBORVhUOiBcIldlaXRlclwiLFxyXG4gICAgICAgIFBSRVY6IFwiWnVyJnV1bWw7Y2tcIixcclxuICAgICAgICBFUlJPUjogXCJEaWUgYW5nZWZvcmRlcnRlbiBEYXRlbiBrb25udGVuIG5pY2h0IGdlbGFkZW4gd2VyZGVuLiA8YnIvPiBCaXR0ZSB2ZXJzdWNoZW4gU2llIGVzIHNwJmF1bWw7dGVyIG5vY2htYWwuXCIsXHJcbiAgICAgICAgUExBWV9TVEFSVDogXCJEaWFzY2hhdSBzdGFydGVuXCIsXHJcbiAgICAgICAgUExBWV9TVE9QOiBcIkRpYXNjaGF1IGJlZW5kZW5cIixcclxuICAgICAgICBGVUxMX1NDUkVFTjogXCJWb2xsYmlsZFwiLFxyXG4gICAgICAgIFRIVU1CUzogXCJWb3JzY2hhdWJpbGRlclwiLFxyXG4gICAgICAgIERPV05MT0FEOiBcIkhlcnVudGVybGFkZW5cIixcclxuICAgICAgICBTSEFSRTogXCJUZWlsZW5cIixcclxuICAgICAgICBaT09NOiBcIlZlcmdyJm91bWw7JnN6bGlnO2VyblwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGZXcgdXNlZnVsIHZhcmlhYmxlcyBhbmQgbWV0aG9kc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIHZhciAkVyA9ICQod2luZG93KTtcclxuICB2YXIgJEQgPSAkKGRvY3VtZW50KTtcclxuXHJcbiAgdmFyIGNhbGxlZCA9IDA7XHJcblxyXG4gIC8vIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIGpRdWVyeSBvYmplY3QgYW5kIG5vdCBhIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHZhciBpc1F1ZXJ5ID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5oYXNPd25Qcm9wZXJ0eSAmJiBvYmogaW5zdGFuY2VvZiAkO1xyXG4gIH07XHJcblxyXG4gIC8vIEhhbmRsZSBtdWx0aXBsZSBicm93c2VycyBmb3IgXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIiBhbmQgXCJjYW5jZWxBbmltYXRpb25GcmFtZVwiXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHZhciByZXF1ZXN0QUZyYW1lID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgLy8gaWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBzZXRUaW1lb3V0XHJcbiAgICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG4gIHZhciBjYW5jZWxBRnJhbWUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cub0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChpZCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSkoKTtcclxuXHJcbiAgLy8gRGV0ZWN0IHRoZSBzdXBwb3J0ZWQgdHJhbnNpdGlvbi1lbmQgZXZlbnQgcHJvcGVydHkgbmFtZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICB2YXIgdHJhbnNpdGlvbkVuZCA9IChmdW5jdGlvbigpIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKSxcclxuICAgICAgdDtcclxuXHJcbiAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XHJcbiAgICAgIHRyYW5zaXRpb246IFwidHJhbnNpdGlvbmVuZFwiLFxyXG4gICAgICBPVHJhbnNpdGlvbjogXCJvVHJhbnNpdGlvbkVuZFwiLFxyXG4gICAgICBNb3pUcmFuc2l0aW9uOiBcInRyYW5zaXRpb25lbmRcIixcclxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJcclxuICAgIH07XHJcblxyXG4gICAgZm9yICh0IGluIHRyYW5zaXRpb25zKSB7XHJcbiAgICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFwidHJhbnNpdGlvbmVuZFwiO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8vIEZvcmNlIHJlZHJhdyBvbiBhbiBlbGVtZW50LlxyXG4gIC8vIFRoaXMgaGVscHMgaW4gY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgZG9lc24ndCByZWRyYXcgYW4gdXBkYXRlZCBlbGVtZW50IHByb3Blcmx5XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICB2YXIgZm9yY2VSZWRyYXcgPSBmdW5jdGlvbigkZWwpIHtcclxuICAgIHJldHVybiAkZWwgJiYgJGVsLmxlbmd0aCAmJiAkZWxbMF0ub2Zmc2V0SGVpZ2h0O1xyXG4gIH07XHJcblxyXG4gIC8vIEV4Y2x1ZGUgYXJyYXkgKGBidXR0b25zYCkgb3B0aW9ucyBmcm9tIGRlZXAgbWVyZ2luZ1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHZhciBtZXJnZU9wdHMgPSBmdW5jdGlvbihvcHRzMSwgb3B0czIpIHtcclxuICAgIHZhciByZXogPSAkLmV4dGVuZCh0cnVlLCB7fSwgb3B0czEsIG9wdHMyKTtcclxuXHJcbiAgICAkLmVhY2gob3B0czIsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgaWYgKCQuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICByZXpba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmV6O1xyXG4gIH07XHJcblxyXG4gIC8vIEhvdyBtdWNoIG9mIGFuIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiB2aWV3cG9ydFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICB2YXIgaW5WaWV3cG9ydCA9IGZ1bmN0aW9uKGVsZW0pIHtcclxuICAgIHZhciBlbGVtQ2VudGVyLCByZXo7XHJcblxyXG4gICAgaWYgKCFlbGVtIHx8IGVsZW0ub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIuZmFuY3lib3gtY29udGFpbmVyXCIpLmNzcyhcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKTtcclxuXHJcbiAgICBlbGVtQ2VudGVyID0ge1xyXG4gICAgICB4OiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBlbGVtLm9mZnNldFdpZHRoIC8gMixcclxuICAgICAgeTogZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBlbGVtLm9mZnNldEhlaWdodCAvIDJcclxuICAgIH07XHJcblxyXG4gICAgcmV6ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlbGVtQ2VudGVyLngsIGVsZW1DZW50ZXIueSkgPT09IGVsZW07XHJcblxyXG4gICAgJChcIi5mYW5jeWJveC1jb250YWluZXJcIikuY3NzKFwicG9pbnRlci1ldmVudHNcIiwgXCJcIik7XHJcblxyXG4gICAgcmV0dXJuIHJlejtcclxuICB9O1xyXG5cclxuICAvLyBDbGFzcyBkZWZpbml0aW9uXHJcbiAgLy8gPT09PT09PT09PT09PT09PVxyXG5cclxuICB2YXIgRmFuY3lCb3ggPSBmdW5jdGlvbihjb250ZW50LCBvcHRzLCBpbmRleCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNlbGYub3B0cyA9IG1lcmdlT3B0cyh7aW5kZXg6IGluZGV4fSwgJC5mYW5jeWJveC5kZWZhdWx0cyk7XHJcblxyXG4gICAgaWYgKCQuaXNQbGFpbk9iamVjdChvcHRzKSkge1xyXG4gICAgICBzZWxmLm9wdHMgPSBtZXJnZU9wdHMoc2VsZi5vcHRzLCBvcHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJC5mYW5jeWJveC5pc01vYmlsZSkge1xyXG4gICAgICBzZWxmLm9wdHMgPSBtZXJnZU9wdHMoc2VsZi5vcHRzLCBzZWxmLm9wdHMubW9iaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmlkID0gc2VsZi5vcHRzLmlkIHx8ICsrY2FsbGVkO1xyXG5cclxuICAgIHNlbGYuY3VyckluZGV4ID0gcGFyc2VJbnQoc2VsZi5vcHRzLmluZGV4LCAxMCkgfHwgMDtcclxuICAgIHNlbGYucHJldkluZGV4ID0gbnVsbDtcclxuXHJcbiAgICBzZWxmLnByZXZQb3MgPSBudWxsO1xyXG4gICAgc2VsZi5jdXJyUG9zID0gMDtcclxuXHJcbiAgICBzZWxmLmZpcnN0UnVuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBBbGwgZ3JvdXAgaXRlbXNcclxuICAgIHNlbGYuZ3JvdXAgPSBbXTtcclxuXHJcbiAgICAvLyBFeGlzdGluZyBzbGlkZXMgKGZvciBjdXJyZW50LCBuZXh0IGFuZCBwcmV2aW91cyBnYWxsZXJ5IGl0ZW1zKVxyXG4gICAgc2VsZi5zbGlkZXMgPSB7fTtcclxuXHJcbiAgICAvLyBDcmVhdGUgZ3JvdXAgZWxlbWVudHNcclxuICAgIHNlbGYuYWRkQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICBpZiAoIXNlbGYuZ3JvdXAubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmluaXQoKTtcclxuICB9O1xyXG5cclxuICAkLmV4dGVuZChGYW5jeUJveC5wcm90b3R5cGUsIHtcclxuICAgIC8vIENyZWF0ZSBET00gc3RydWN0dXJlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZmlyc3RJdGVtID0gc2VsZi5ncm91cFtzZWxmLmN1cnJJbmRleF0sXHJcbiAgICAgICAgZmlyc3RJdGVtT3B0cyA9IGZpcnN0SXRlbS5vcHRzLFxyXG4gICAgICAgICRjb250YWluZXIsXHJcbiAgICAgICAgYnV0dG9uU3RyO1xyXG5cclxuICAgICAgaWYgKGZpcnN0SXRlbU9wdHMuY2xvc2VFeGlzdGluZykge1xyXG4gICAgICAgICQuZmFuY3lib3guY2xvc2UodHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEhpZGUgc2Nyb2xsYmFyc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiZmFuY3lib3gtYWN0aXZlXCIpO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgICEkLmZhbmN5Ym94LmdldEluc3RhbmNlKCkgJiZcclxuICAgICAgICBmaXJzdEl0ZW1PcHRzLmhpZGVTY3JvbGxiYXIgIT09IGZhbHNlICYmXHJcbiAgICAgICAgISQuZmFuY3lib3guaXNNb2JpbGUgJiZcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICApIHtcclxuICAgICAgICAkKFwiaGVhZFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAnPHN0eWxlIGlkPVwiZmFuY3lib3gtc3R5bGUtbm9zY3JvbGxcIiB0eXBlPVwidGV4dC9jc3NcIj4uY29tcGVuc2F0ZS1mb3Itc2Nyb2xsYmFye21hcmdpbi1yaWdodDonICtcclxuICAgICAgICAgICAgKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSArXHJcbiAgICAgICAgICAgIFwicHg7fTwvc3R5bGU+XCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhclwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQnVpbGQgaHRtbCBtYXJrdXAgYW5kIHNldCByZWZlcmVuY2VzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgLy8gQnVpbGQgaHRtbCBjb2RlIGZvciBidXR0b25zIGFuZCBpbnNlcnQgaW50byBtYWluIHRlbXBsYXRlXHJcbiAgICAgIGJ1dHRvblN0ciA9IFwiXCI7XHJcblxyXG4gICAgICAkLmVhY2goZmlyc3RJdGVtT3B0cy5idXR0b25zLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICBidXR0b25TdHIgKz0gZmlyc3RJdGVtT3B0cy5idG5UcGxbdmFsdWVdIHx8IFwiXCI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIG1hcmt1cCBmcm9tIGJhc2UgdGVtcGxhdGUsIGl0IHdpbGwgYmUgaW5pdGlhbGx5IGhpZGRlbiB0b1xyXG4gICAgICAvLyBhdm9pZCB1bm5lY2Vzc2FyeSB3b3JrIGxpa2UgcGFpbnRpbmcgd2hpbGUgaW5pdGlhbGl6aW5nIGlzIG5vdCBjb21wbGV0ZVxyXG4gICAgICAkY29udGFpbmVyID0gJChcclxuICAgICAgICBzZWxmLnRyYW5zbGF0ZShcclxuICAgICAgICAgIHNlbGYsXHJcbiAgICAgICAgICBmaXJzdEl0ZW1PcHRzLmJhc2VUcGxcclxuICAgICAgICAgICAgLnJlcGxhY2UoXCJ7e2J1dHRvbnN9fVwiLCBidXR0b25TdHIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKFwie3thcnJvd3N9fVwiLCBmaXJzdEl0ZW1PcHRzLmJ0blRwbC5hcnJvd0xlZnQgKyBmaXJzdEl0ZW1PcHRzLmJ0blRwbC5hcnJvd1JpZ2h0KVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgXCJmYW5jeWJveC1jb250YWluZXItXCIgKyBzZWxmLmlkKVxyXG4gICAgICAgIC5hZGRDbGFzcyhmaXJzdEl0ZW1PcHRzLmJhc2VDbGFzcylcclxuICAgICAgICAuZGF0YShcIkZhbmN5Qm94XCIsIHNlbGYpXHJcbiAgICAgICAgLmFwcGVuZFRvKGZpcnN0SXRlbU9wdHMucGFyZW50RWwpO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIG9iamVjdCBob2xkaW5nIHJlZmVyZW5jZXMgdG8galF1ZXJ5IHdyYXBwZWQgbm9kZXNcclxuICAgICAgc2VsZi4kcmVmcyA9IHtcclxuICAgICAgICBjb250YWluZXI6ICRjb250YWluZXJcclxuICAgICAgfTtcclxuXHJcbiAgICAgIFtcImJnXCIsIFwiaW5uZXJcIiwgXCJpbmZvYmFyXCIsIFwidG9vbGJhclwiLCBcInN0YWdlXCIsIFwiY2FwdGlvblwiLCBcIm5hdmlnYXRpb25cIl0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgc2VsZi4kcmVmc1tpdGVtXSA9ICRjb250YWluZXIuZmluZChcIi5mYW5jeWJveC1cIiArIGl0ZW0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGYudHJpZ2dlcihcIm9uSW5pdFwiKTtcclxuXHJcbiAgICAgIC8vIEVuYWJsZSBldmVudHMsIGRlYWN0aXZlIHByZXZpb3VzIGluc3RhbmNlc1xyXG4gICAgICBzZWxmLmFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAvLyBCdWlsZCBzbGlkZXMsIGxvYWQgYW5kIHJldmVhbCBjb250ZW50XHJcbiAgICAgIHNlbGYuanVtcFRvKHNlbGYuY3VyckluZGV4KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gU2ltcGxlIGkxOG4gc3VwcG9ydCAtIHJlcGxhY2VzIG9iamVjdCBrZXlzIGZvdW5kIGluIHRlbXBsYXRlXHJcbiAgICAvLyB3aXRoIGNvcnJlc3BvbmRpbmcgdmFsdWVzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uKG9iaiwgc3RyKSB7XHJcbiAgICAgIHZhciBhcnIgPSBvYmoub3B0cy5pMThuW29iai5vcHRzLmxhbmddIHx8IG9iai5vcHRzLmkxOG4uZW47XHJcblxyXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xce1xceyhcXHcrKVxcfVxcfS9nLCBmdW5jdGlvbihtYXRjaCwgbikge1xyXG4gICAgICAgIHJldHVybiBhcnJbbl0gPT09IHVuZGVmaW5lZCA/IG1hdGNoIDogYXJyW25dO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUG9wdWxhdGUgY3VycmVudCBncm91cCB3aXRoIGZyZXNoIGNvbnRlbnRcclxuICAgIC8vIENoZWNrIGlmIGVhY2ggb2JqZWN0IGhhcyB2YWxpZCB0eXBlIGFuZCBjb250ZW50XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGFkZENvbnRlbnQ6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGl0ZW1zID0gJC5tYWtlQXJyYXkoY29udGVudCksXHJcbiAgICAgICAgdGh1bWJzO1xyXG5cclxuICAgICAgJC5lYWNoKGl0ZW1zLCBmdW5jdGlvbihpLCBpdGVtKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9LFxyXG4gICAgICAgICAgb3B0cyA9IHt9LFxyXG4gICAgICAgICAgJGl0ZW0sXHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgZm91bmQsXHJcbiAgICAgICAgICBzcmMsXHJcbiAgICAgICAgICBzcmNQYXJ0cztcclxuXHJcbiAgICAgICAgLy8gU3RlcCAxIC0gTWFrZSBzdXJlIHdlIGhhdmUgYW4gb2JqZWN0XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QoaXRlbSkpIHtcclxuICAgICAgICAgIC8vIFdlIHByb2JhYmx5IGhhdmUgbWFudWFsIHVzYWdlIGhlcmUsIHNvbWV0aGluZyBsaWtlXHJcbiAgICAgICAgICAvLyAkLmZhbmN5Ym94Lm9wZW4oIFsgeyBzcmMgOiBcImltYWdlLmpwZ1wiLCB0eXBlIDogXCJpbWFnZVwiIH0gXSApXHJcblxyXG4gICAgICAgICAgb2JqID0gaXRlbTtcclxuICAgICAgICAgIG9wdHMgPSBpdGVtLm9wdHMgfHwgaXRlbTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQudHlwZShpdGVtKSA9PT0gXCJvYmplY3RcIiAmJiAkKGl0ZW0pLmxlbmd0aCkge1xyXG4gICAgICAgICAgLy8gSGVyZSB3ZSBwcm9iYWJseSBoYXZlIGpRdWVyeSBjb2xsZWN0aW9uIHJldHVybmVkIGJ5IHNvbWUgc2VsZWN0b3JcclxuICAgICAgICAgICRpdGVtID0gJChpdGVtKTtcclxuXHJcbiAgICAgICAgICAvLyBTdXBwb3J0IGF0dHJpYnV0ZXMgbGlrZSBgZGF0YS1vcHRpb25zPSd7XCJ0b3VjaFwiIDogZmFsc2V9J2AgYW5kIGBkYXRhLXRvdWNoPSdmYWxzZSdgXHJcbiAgICAgICAgICBvcHRzID0gJGl0ZW0uZGF0YSgpIHx8IHt9O1xyXG4gICAgICAgICAgb3B0cyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRzLCBvcHRzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgIC8vIEhlcmUgd2Ugc3RvcmUgY2xpY2tlZCBlbGVtZW50XHJcbiAgICAgICAgICBvcHRzLiRvcmlnID0gJGl0ZW07XHJcblxyXG4gICAgICAgICAgb2JqLnNyYyA9IHNlbGYub3B0cy5zcmMgfHwgb3B0cy5zcmMgfHwgJGl0ZW0uYXR0cihcImhyZWZcIik7XHJcblxyXG4gICAgICAgICAgLy8gQXNzdW1lIHRoYXQgc2ltcGxlIHN5bnRheCBpcyB1c2VkLCBmb3IgZXhhbXBsZTpcclxuICAgICAgICAgIC8vICAgYCQuZmFuY3lib3gub3BlbiggJChcIiN0ZXN0XCIpLCB7fSApO2BcclxuICAgICAgICAgIGlmICghb2JqLnR5cGUgJiYgIW9iai5zcmMpIHtcclxuICAgICAgICAgICAgb2JqLnR5cGUgPSBcImlubGluZVwiO1xyXG4gICAgICAgICAgICBvYmouc3JjID0gaXRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gQXNzdW1lIHdlIGhhdmUgYSBzaW1wbGUgaHRtbCBjb2RlLCBmb3IgZXhhbXBsZTpcclxuICAgICAgICAgIC8vICAgJC5mYW5jeWJveC5vcGVuKCAnPGRpdj48aDE+SGkhPC9oMT48L2Rpdj4nICk7XHJcbiAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICAgICAgICBzcmM6IGl0ZW0gKyBcIlwiXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRWFjaCBnYWxsZXJ5IG9iamVjdCBoYXMgZnVsbCBjb2xsZWN0aW9uIG9mIG9wdGlvbnNcclxuICAgICAgICBvYmoub3B0cyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBzZWxmLm9wdHMsIG9wdHMpO1xyXG5cclxuICAgICAgICAvLyBEbyBub3QgbWVyZ2UgYnV0dG9ucyBhcnJheVxyXG4gICAgICAgIGlmICgkLmlzQXJyYXkob3B0cy5idXR0b25zKSkge1xyXG4gICAgICAgICAgb2JqLm9wdHMuYnV0dG9ucyA9IG9wdHMuYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkLmZhbmN5Ym94LmlzTW9iaWxlICYmIG9iai5vcHRzLm1vYmlsZSkge1xyXG4gICAgICAgICAgb2JqLm9wdHMgPSBtZXJnZU9wdHMob2JqLm9wdHMsIG9iai5vcHRzLm1vYmlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdGVwIDIgLSBNYWtlIHN1cmUgd2UgaGF2ZSBjb250ZW50IHR5cGUsIGlmIG5vdCAtIHRyeSB0byBndWVzc1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIHR5cGUgPSBvYmoudHlwZSB8fCBvYmoub3B0cy50eXBlO1xyXG4gICAgICAgIHNyYyA9IG9iai5zcmMgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCF0eXBlICYmIHNyYykge1xyXG4gICAgICAgICAgaWYgKChmb3VuZCA9IHNyYy5tYXRjaCgvXFwuKG1wNHxtb3Z8b2d2fHdlYm0pKChcXD98IykuKik/JC9pKSkpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFwidmlkZW9cIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghb2JqLm9wdHMudmlkZW8uZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgb2JqLm9wdHMudmlkZW8uZm9ybWF0ID0gXCJ2aWRlby9cIiArIChmb3VuZFsxXSA9PT0gXCJvZ3ZcIiA/IFwib2dnXCIgOiBmb3VuZFsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3JjLm1hdGNoKC8oXmRhdGE6aW1hZ2VcXC9bYS16MC05K1xcLz1dKiwpfChcXC4oanAoZXxnfGVnKXxnaWZ8cG5nfGJtcHx3ZWJwfHN2Z3xpY28pKChcXD98IykuKik/JCkvaSkpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFwiaW1hZ2VcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3JjLm1hdGNoKC9cXC4ocGRmKSgoXFw/fCMpLiopPyQvaSkpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFwiaWZyYW1lXCI7XHJcbiAgICAgICAgICAgIG9iaiA9ICQuZXh0ZW5kKHRydWUsIG9iaiwge2NvbnRlbnRUeXBlOiBcInBkZlwiLCBvcHRzOiB7aWZyYW1lOiB7cHJlbG9hZDogZmFsc2V9fX0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzcmMuY2hhckF0KDApID09PSBcIiNcIikge1xyXG4gICAgICAgICAgICB0eXBlID0gXCJpbmxpbmVcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICBvYmoudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlbGYudHJpZ2dlcihcIm9iamVjdE5lZWRzVHlwZVwiLCBvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFvYmouY29udGVudFR5cGUpIHtcclxuICAgICAgICAgIG9iai5jb250ZW50VHlwZSA9ICQuaW5BcnJheShvYmoudHlwZSwgW1wiaHRtbFwiLCBcImlubGluZVwiLCBcImFqYXhcIl0pID4gLTEgPyBcImh0bWxcIiA6IG9iai50eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3RlcCAzIC0gU29tZSBhZGp1c3RtZW50c1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgb2JqLmluZGV4ID0gc2VsZi5ncm91cC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChvYmoub3B0cy5zbWFsbEJ0biA9PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgb2JqLm9wdHMuc21hbGxCdG4gPSAkLmluQXJyYXkob2JqLnR5cGUsIFtcImh0bWxcIiwgXCJpbmxpbmVcIiwgXCJhamF4XCJdKSA+IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9iai5vcHRzLnRvb2xiYXIgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICBvYmoub3B0cy50b29sYmFyID0gIW9iai5vcHRzLnNtYWxsQnRuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRmluZCB0aHVtYm5haWwgaW1hZ2UsIGNoZWNrIGlmIGV4aXN0cyBhbmQgaWYgaXMgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgb2JqLiR0aHVtYiA9IG9iai5vcHRzLiR0aHVtYiB8fCBudWxsO1xyXG5cclxuICAgICAgICBpZiAob2JqLm9wdHMuJHRyaWdnZXIgJiYgb2JqLmluZGV4ID09PSBzZWxmLm9wdHMuaW5kZXgpIHtcclxuICAgICAgICAgIG9iai4kdGh1bWIgPSBvYmoub3B0cy4kdHJpZ2dlci5maW5kKFwiaW1nOmZpcnN0XCIpO1xyXG5cclxuICAgICAgICAgIGlmIChvYmouJHRodW1iLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvYmoub3B0cy4kb3JpZyA9IG9iai5vcHRzLiR0cmlnZ2VyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEob2JqLiR0aHVtYiAmJiBvYmouJHRodW1iLmxlbmd0aCkgJiYgb2JqLm9wdHMuJG9yaWcpIHtcclxuICAgICAgICAgIG9iai4kdGh1bWIgPSBvYmoub3B0cy4kb3JpZy5maW5kKFwiaW1nOmZpcnN0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9iai4kdGh1bWIgJiYgIW9iai4kdGh1bWIubGVuZ3RoKSB7XHJcbiAgICAgICAgICBvYmouJHRodW1iID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iai50aHVtYiA9IG9iai5vcHRzLnRodW1iIHx8IChvYmouJHRodW1iID8gb2JqLiR0aHVtYlswXS5zcmMgOiBudWxsKTtcclxuXHJcbiAgICAgICAgLy8gXCJjYXB0aW9uXCIgaXMgYSBcInNwZWNpYWxcIiBvcHRpb24sIGl0IGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSBjYXB0aW9uIHBlciBnYWxsZXJ5IGl0ZW1cclxuICAgICAgICBpZiAoJC50eXBlKG9iai5vcHRzLmNhcHRpb24pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgIG9iai5vcHRzLmNhcHRpb24gPSBvYmoub3B0cy5jYXB0aW9uLmFwcGx5KGl0ZW0sIFtzZWxmLCBvYmpdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkLnR5cGUoc2VsZi5vcHRzLmNhcHRpb24pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgIG9iai5vcHRzLmNhcHRpb24gPSBzZWxmLm9wdHMuY2FwdGlvbi5hcHBseShpdGVtLCBbc2VsZiwgb2JqXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBjYXB0aW9uIGFzIGEgc3RyaW5nIG9yIGpRdWVyeSBvYmplY3RcclxuICAgICAgICBpZiAoIShvYmoub3B0cy5jYXB0aW9uIGluc3RhbmNlb2YgJCkpIHtcclxuICAgICAgICAgIG9iai5vcHRzLmNhcHRpb24gPSBvYmoub3B0cy5jYXB0aW9uID09PSB1bmRlZmluZWQgPyBcIlwiIDogb2JqLm9wdHMuY2FwdGlvbiArIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB1cmwgY29udGFpbnMgXCJmaWx0ZXJcIiB1c2VkIHRvIGZpbHRlciB0aGUgY29udGVudFxyXG4gICAgICAgIC8vIEV4YW1wbGU6IFwiYWpheC5odG1sICNzb21ldGhpbmdcIlxyXG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gXCJhamF4XCIpIHtcclxuICAgICAgICAgIHNyY1BhcnRzID0gc3JjLnNwbGl0KC9cXHMrLywgMik7XHJcblxyXG4gICAgICAgICAgaWYgKHNyY1BhcnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgb2JqLnNyYyA9IHNyY1BhcnRzLnNoaWZ0KCk7XHJcblxyXG4gICAgICAgICAgICBvYmoub3B0cy5maWx0ZXIgPSBzcmNQYXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgYnV0dG9ucyBhbmQgZGlzYWJsZSBpbnRlcmFjdGl2aXR5IGZvciBtb2RhbCBpdGVtc1xyXG4gICAgICAgIGlmIChvYmoub3B0cy5tb2RhbCkge1xyXG4gICAgICAgICAgb2JqLm9wdHMgPSAkLmV4dGVuZCh0cnVlLCBvYmoub3B0cywge1xyXG4gICAgICAgICAgICB0cmFwRm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBidXR0b25zXHJcbiAgICAgICAgICAgIGluZm9iYXI6IDAsXHJcbiAgICAgICAgICAgIHRvb2xiYXI6IDAsXHJcblxyXG4gICAgICAgICAgICBzbWFsbEJ0bjogMCxcclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG4gICAgICAgICAgICBrZXlib2FyZDogMCxcclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgc29tZSBtb2R1bGVzXHJcbiAgICAgICAgICAgIHNsaWRlU2hvdzogMCxcclxuICAgICAgICAgICAgZnVsbFNjcmVlbjogMCxcclxuICAgICAgICAgICAgdGh1bWJzOiAwLFxyXG4gICAgICAgICAgICB0b3VjaDogMCxcclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgY2xpY2sgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAgICAgY2xpY2tDb250ZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgY2xpY2tTbGlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsaWNrT3V0c2lkZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRibGNsaWNrQ29udGVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRibGNsaWNrU2xpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYmxjbGlja091dHNpZGU6IGZhbHNlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN0ZXAgNCAtIEFkZCBwcm9jZXNzZWQgb2JqZWN0IHRvIGdyb3VwXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgc2VsZi5ncm91cC5wdXNoKG9iaik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGNvbnRyb2xzIGlmIGdhbGxlcnkgaXMgYWxyZWFkeSBvcGVuZWRcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKHNlbGYuc2xpZGVzKS5sZW5ndGgpIHtcclxuICAgICAgICBzZWxmLnVwZGF0ZUNvbnRyb2xzKCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aHVtYm5haWxzLCBpZiBuZWVkZWRcclxuICAgICAgICB0aHVtYnMgPSBzZWxmLlRodW1icztcclxuXHJcbiAgICAgICAgaWYgKHRodW1icyAmJiB0aHVtYnMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgIHRodW1icy5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICB0aHVtYnMuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIGZvcjpcclxuICAgIC8vICAgLSBuYXZpZ2F0aW9uIGJ1dHRvbnNcclxuICAgIC8vICAgLSBicm93c2VyIHNjcm9sbGluZywgcmVzaXppbmc7XHJcbiAgICAvLyAgIC0gZm9jdXNpbmdcclxuICAgIC8vICAgLSBrZXlib2FyZFxyXG4gICAgLy8gICAtIGRldGVjdGluZyBpbmFjdGl2aXR5XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGFkZEV2ZW50czogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIHNlbGYucmVtb3ZlRXZlbnRzKCk7XHJcblxyXG4gICAgICAvLyBNYWtlIG5hdmlnYXRpb24gZWxlbWVudHMgY2xpY2thYmxlXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyXHJcbiAgICAgICAgLm9uKFwiY2xpY2suZmItY2xvc2VcIiwgXCJbZGF0YS1mYW5jeWJveC1jbG9zZV1cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBzZWxmLmNsb3NlKGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwidG91Y2hzdGFydC5mYi1wcmV2IGNsaWNrLmZiLXByZXZcIiwgXCJbZGF0YS1mYW5jeWJveC1wcmV2XVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIHNlbGYucHJldmlvdXMoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcInRvdWNoc3RhcnQuZmItbmV4dCBjbGljay5mYi1uZXh0XCIsIFwiW2RhdGEtZmFuY3lib3gtbmV4dF1cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBzZWxmLm5leHQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcImNsaWNrLmZiXCIsIFwiW2RhdGEtZmFuY3lib3gtem9vbV1cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgLy8gQ2xpY2sgaGFuZGxlciBmb3Igem9vbSBidXR0b25cclxuICAgICAgICAgIHNlbGZbc2VsZi5pc1NjYWxlZERvd24oKSA/IFwic2NhbGVUb0FjdHVhbFwiIDogXCJzY2FsZVRvRml0XCJdKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgcGFnZSBzY3JvbGxpbmcgYW5kIGJyb3dzZXIgcmVzaXppbmdcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAkVy5vbihcIm9yaWVudGF0aW9uY2hhbmdlLmZiIHJlc2l6ZS5mYlwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUgJiYgZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC50eXBlID09PSBcInJlc2l6ZVwiKSB7XHJcbiAgICAgICAgICBpZiAoc2VsZi5yZXF1ZXN0SWQpIHtcclxuICAgICAgICAgICAgY2FuY2VsQUZyYW1lKHNlbGYucmVxdWVzdElkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZWxmLnJlcXVlc3RJZCA9IHJlcXVlc3RBRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzZWxmLmN1cnJlbnQgJiYgc2VsZi5jdXJyZW50LnR5cGUgPT09IFwiaWZyYW1lXCIpIHtcclxuICAgICAgICAgICAgc2VsZi4kcmVmcy5zdGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgc2VsZi4kcmVmcy5zdGFnZS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgIHNlbGYudXBkYXRlKGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmlzTW9iaWxlID8gNjAwIDogMjUwXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkRC5vbihcImtleWRvd24uZmJcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9ICQuZmFuY3lib3ggPyAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCkgOiBudWxsLFxyXG4gICAgICAgICAgY3VycmVudCA9IGluc3RhbmNlLmN1cnJlbnQsXHJcbiAgICAgICAgICBrZXljb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XHJcblxyXG4gICAgICAgIC8vIFRyYXAga2V5Ym9hcmQgZm9jdXMgaW5zaWRlIG9mIHRoZSBtb2RhbFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBpZiAoa2V5Y29kZSA9PSA5KSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudC5vcHRzLnRyYXBGb2N1cykge1xyXG4gICAgICAgICAgICBzZWxmLmZvY3VzKGUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVuYWJsZSBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgaWYgKCFjdXJyZW50Lm9wdHMua2V5Ym9hcmQgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkgfHwgJChlLnRhcmdldCkuaXMoXCJpbnB1dCx0ZXh0YXJlYSx2aWRlbyxhdWRpb1wiKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQmFja3NwYWNlIGFuZCBFc2Mga2V5c1xyXG4gICAgICAgIGlmIChrZXljb2RlID09PSA4IHx8IGtleWNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgc2VsZi5jbG9zZShlKTtcclxuXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMZWZ0IGFycm93IGFuZCBVcCBhcnJvd1xyXG4gICAgICAgIGlmIChrZXljb2RlID09PSAzNyB8fCBrZXljb2RlID09PSAzOCkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIHNlbGYucHJldmlvdXMoKTtcclxuXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSaWdoIGFycm93IGFuZCBEb3duIGFycm93XHJcbiAgICAgICAgaWYgKGtleWNvZGUgPT09IDM5IHx8IGtleWNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgc2VsZi5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi50cmlnZ2VyKFwiYWZ0ZXJLZXlkb3duXCIsIGUsIGtleWNvZGUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEhpZGUgY29udHJvbHMgYWZ0ZXIgc29tZSBpbmFjdGl2aXR5IHBlcmlvZFxyXG4gICAgICBpZiAoc2VsZi5ncm91cFtzZWxmLmN1cnJJbmRleF0ub3B0cy5pZGxlVGltZSkge1xyXG4gICAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgJEQub24oXHJcbiAgICAgICAgICBcIm1vdXNlbW92ZS5mYi1pZGxlIG1vdXNlbGVhdmUuZmItaWRsZSBtb3VzZWRvd24uZmItaWRsZSB0b3VjaHN0YXJ0LmZiLWlkbGUgdG91Y2htb3ZlLmZiLWlkbGUgc2Nyb2xsLmZiLWlkbGUga2V5ZG93bi5mYi1pZGxlXCIsXHJcbiAgICAgICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmlzSWRsZSkge1xyXG4gICAgICAgICAgICAgIHNlbGYuc2hvd0NvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYuaXNJZGxlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2VsZi5pZGxlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZWxmLmlkbGVTZWNvbmRzQ291bnRlcisrO1xyXG5cclxuICAgICAgICAgIGlmIChzZWxmLmlkbGVTZWNvbmRzQ291bnRlciA+PSBzZWxmLmdyb3VwW3NlbGYuY3VyckluZGV4XS5vcHRzLmlkbGVUaW1lICYmICFzZWxmLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgc2VsZi5pc0lkbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZWxmLmlkbGVTZWNvbmRzQ291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmhpZGVDb250cm9scygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFJlbW92ZSBldmVudHMgYWRkZWQgYnkgdGhlIGNvcmVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICByZW1vdmVFdmVudHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAkVy5vZmYoXCJvcmllbnRhdGlvbmNoYW5nZS5mYiByZXNpemUuZmJcIik7XHJcbiAgICAgICRELm9mZihcImtleWRvd24uZmIgLmZiLWlkbGVcIik7XHJcblxyXG4gICAgICB0aGlzLiRyZWZzLmNvbnRhaW5lci5vZmYoXCIuZmItY2xvc2UgLmZiLXByZXYgLmZiLW5leHRcIik7XHJcblxyXG4gICAgICBpZiAoc2VsZi5pZGxlSW50ZXJ2YWwpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChzZWxmLmlkbGVJbnRlcnZhbCk7XHJcblxyXG4gICAgICAgIHNlbGYuaWRsZUludGVydmFsID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDaGFuZ2UgdG8gcHJldmlvdXMgZ2FsbGVyeSBpdGVtXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcHJldmlvdXM6IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmp1bXBUbyh0aGlzLmN1cnJQb3MgLSAxLCBkdXJhdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENoYW5nZSB0byBuZXh0IGdhbGxlcnkgaXRlbVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbmV4dDogZnVuY3Rpb24oZHVyYXRpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuanVtcFRvKHRoaXMuY3VyclBvcyArIDEsIGR1cmF0aW9uKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gU3dpdGNoIHRvIHNlbGVjdGVkIGdhbGxlcnkgaXRlbVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGp1bXBUbzogZnVuY3Rpb24ocG9zLCBkdXJhdGlvbikge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZ3JvdXBMZW4gPSBzZWxmLmdyb3VwLmxlbmd0aCxcclxuICAgICAgICBmaXJzdFJ1bixcclxuICAgICAgICBpc01vdmVkLFxyXG4gICAgICAgIGxvb3AsXHJcbiAgICAgICAgY3VycmVudCxcclxuICAgICAgICBwcmV2aW91cyxcclxuICAgICAgICBzbGlkZVBvcyxcclxuICAgICAgICBzdGFnZVBvcyxcclxuICAgICAgICBwcm9wLFxyXG4gICAgICAgIGRpZmY7XHJcblxyXG4gICAgICBpZiAoc2VsZi5pc0RyYWdnaW5nIHx8IHNlbGYuaXNDbG9zaW5nIHx8IChzZWxmLmlzQW5pbWF0aW5nICYmIHNlbGYuZmlyc3RSdW4pKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTaG91bGQgbG9vcD9cclxuICAgICAgcG9zID0gcGFyc2VJbnQocG9zLCAxMCk7XHJcbiAgICAgIGxvb3AgPSBzZWxmLmN1cnJlbnQgPyBzZWxmLmN1cnJlbnQub3B0cy5sb29wIDogc2VsZi5vcHRzLmxvb3A7XHJcblxyXG4gICAgICBpZiAoIWxvb3AgJiYgKHBvcyA8IDAgfHwgcG9zID49IGdyb3VwTGVuKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgb3BlbmluZyBmb3IgdGhlIGZpcnN0IHRpbWU7IHRoaXMgaGVscHMgdG8gc3BlZWQgdGhpbmdzIHVwXHJcbiAgICAgIGZpcnN0UnVuID0gc2VsZi5maXJzdFJ1biA9ICFPYmplY3Qua2V5cyhzZWxmLnNsaWRlcykubGVuZ3RoO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIHNsaWRlc1xyXG4gICAgICBwcmV2aW91cyA9IHNlbGYuY3VycmVudDtcclxuXHJcbiAgICAgIHNlbGYucHJldkluZGV4ID0gc2VsZi5jdXJySW5kZXg7XHJcbiAgICAgIHNlbGYucHJldlBvcyA9IHNlbGYuY3VyclBvcztcclxuXHJcbiAgICAgIGN1cnJlbnQgPSBzZWxmLmNyZWF0ZVNsaWRlKHBvcyk7XHJcblxyXG4gICAgICBpZiAoZ3JvdXBMZW4gPiAxKSB7XHJcbiAgICAgICAgaWYgKGxvb3AgfHwgY3VycmVudC5pbmRleCA8IGdyb3VwTGVuIC0gMSkge1xyXG4gICAgICAgICAgc2VsZi5jcmVhdGVTbGlkZShwb3MgKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsb29wIHx8IGN1cnJlbnQuaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICBzZWxmLmNyZWF0ZVNsaWRlKHBvcyAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgc2VsZi5jdXJySW5kZXggPSBjdXJyZW50LmluZGV4O1xyXG4gICAgICBzZWxmLmN1cnJQb3MgPSBjdXJyZW50LnBvcztcclxuXHJcbiAgICAgIHNlbGYudHJpZ2dlcihcImJlZm9yZVNob3dcIiwgZmlyc3RSdW4pO1xyXG5cclxuICAgICAgc2VsZi51cGRhdGVDb250cm9scygpO1xyXG5cclxuICAgICAgLy8gVmFsaWRhdGUgZHVyYXRpb24gbGVuZ3RoXHJcbiAgICAgIGN1cnJlbnQuZm9yY2VkRHVyYXRpb24gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICBpZiAoJC5pc051bWVyaWMoZHVyYXRpb24pKSB7XHJcbiAgICAgICAgY3VycmVudC5mb3JjZWREdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGR1cmF0aW9uID0gY3VycmVudC5vcHRzW2ZpcnN0UnVuID8gXCJhbmltYXRpb25EdXJhdGlvblwiIDogXCJ0cmFuc2l0aW9uRHVyYXRpb25cIl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGR1cmF0aW9uID0gcGFyc2VJbnQoZHVyYXRpb24sIDEwKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIHN3aXBlZCB0aGUgc2xpZGVzIG9yIGlmIHN0aWxsIGFuaW1hdGluZ1xyXG4gICAgICBpc01vdmVkID0gc2VsZi5pc01vdmVkKGN1cnJlbnQpO1xyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIGN1cnJlbnQgc2xpZGUgaXMgdmlzaWJsZVxyXG4gICAgICBjdXJyZW50LiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIpO1xyXG5cclxuICAgICAgLy8gRnJlc2ggc3RhcnQgLSByZXZlYWwgY29udGFpbmVyLCBjdXJyZW50IHNsaWRlIGFuZCBzdGFydCBsb2FkaW5nIGNvbnRlbnRcclxuICAgICAgaWYgKGZpcnN0UnVuKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQub3B0cy5hbmltYXRpb25FZmZlY3QgJiYgZHVyYXRpb24pIHtcclxuICAgICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgZHVyYXRpb24gKyBcIm1zXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1vcGVuXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuXHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBsb2FkIGNvbnRlbnQgaW50byBzbGlkZVxyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBsYXRlciBjYWxsIGBhZnRlckxvYWRgIC0+IGByZXZlYWxDb250ZW50YFxyXG4gICAgICAgIHNlbGYubG9hZFNsaWRlKGN1cnJlbnQpO1xyXG5cclxuICAgICAgICBzZWxmLnByZWxvYWQoXCJpbWFnZVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZXQgYWN0dWFsIHNsaWRlL3N0YWdlIHBvc2l0aW9ucyAoYmVmb3JlIGNsZWFuaW5nIHVwKVxyXG4gICAgICBzbGlkZVBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHByZXZpb3VzLiRzbGlkZSk7XHJcbiAgICAgIHN0YWdlUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoc2VsZi4kcmVmcy5zdGFnZSk7XHJcblxyXG4gICAgICAvLyBDbGVhbiB1cCBhbGwgc2xpZGVzXHJcbiAgICAgICQuZWFjaChzZWxmLnNsaWRlcywgZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XHJcbiAgICAgICAgJC5mYW5jeWJveC5zdG9wKHNsaWRlLiRzbGlkZSwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHByZXZpb3VzLnBvcyAhPT0gY3VycmVudC5wb3MpIHtcclxuICAgICAgICBwcmV2aW91cy5pc0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByZXZpb3VzLiRzbGlkZS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jb21wbGV0ZSBmYW5jeWJveC1zbGlkZS0tY3VycmVudFwiKTtcclxuXHJcbiAgICAgIC8vIElmIHNsaWRlcyBhcmUgb3V0IG9mIHBsYWNlLCB0aGVuIGFuaW1hdGUgdGhlbSB0byBjb3JyZWN0IHBvc2l0aW9uXHJcbiAgICAgIGlmIChpc01vdmVkKSB7XHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGhvcml6b250YWwgc3dpcGUgZGlzdGFuY2VcclxuICAgICAgICBkaWZmID0gc2xpZGVQb3MubGVmdCAtIChwcmV2aW91cy5wb3MgKiBzbGlkZVBvcy53aWR0aCArIHByZXZpb3VzLnBvcyAqIHByZXZpb3VzLm9wdHMuZ3V0dGVyKTtcclxuXHJcbiAgICAgICAgJC5lYWNoKHNlbGYuc2xpZGVzLCBmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcclxuICAgICAgICAgIHNsaWRlLiRzbGlkZS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpLnJlbW92ZUNsYXNzKGZ1bmN0aW9uKGluZGV4LCBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2goLyhefFxccylmYW5jeWJveC1meC1cXFMrL2cpIHx8IFtdKS5qb2luKFwiIFwiKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGVhY2ggc2xpZGUgaXMgaW4gZXF1YWwgZGlzdGFuY2VcclxuICAgICAgICAgIC8vIFRoaXMgaXMgbW9zdGx5IG5lZWRlZCBmb3IgZnJlc2hseSBhZGRlZCBzbGlkZXMsIGJlY2F1c2UgdGhleSBhcmUgbm90IHlldCBwb3NpdGlvbmVkXHJcbiAgICAgICAgICB2YXIgbGVmdFBvcyA9IHNsaWRlLnBvcyAqIHNsaWRlUG9zLndpZHRoICsgc2xpZGUucG9zICogc2xpZGUub3B0cy5ndXR0ZXI7XHJcblxyXG4gICAgICAgICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoc2xpZGUuJHNsaWRlLCB7dG9wOiAwLCBsZWZ0OiBsZWZ0UG9zIC0gc3RhZ2VQb3MubGVmdCArIGRpZmZ9KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2xpZGUucG9zICE9PSBjdXJyZW50LnBvcykge1xyXG4gICAgICAgICAgICBzbGlkZS4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tXCIgKyAoc2xpZGUucG9zID4gY3VycmVudC5wb3MgPyBcIm5leHRcIiA6IFwicHJldmlvdXNcIikpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFJlZHJhdyB0byBtYWtlIHN1cmUgdGhhdCB0cmFuc2l0aW9uIHdpbGwgc3RhcnRcclxuICAgICAgICAgIGZvcmNlUmVkcmF3KHNsaWRlLiRzbGlkZSk7XHJcblxyXG4gICAgICAgICAgLy8gQW5pbWF0ZSB0aGUgc2xpZGVcclxuICAgICAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICAgICAgc2xpZGUuJHNsaWRlLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IChzbGlkZS5wb3MgLSBjdXJyZW50LnBvcykgKiBzbGlkZVBvcy53aWR0aCArIChzbGlkZS5wb3MgLSBjdXJyZW50LnBvcykgKiBzbGlkZS5vcHRzLmd1dHRlclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgc2xpZGUuJHNsaWRlXHJcbiAgICAgICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2xpZGUucG9zID09PSBzZWxmLmN1cnJQb3MpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gJiYgY3VycmVudC5vcHRzLnRyYW5zaXRpb25FZmZlY3QpIHtcclxuICAgICAgICAvLyBTZXQgdHJhbnNpdGlvbiBlZmZlY3QgZm9yIHByZXZpb3VzbHkgYWN0aXZlIHNsaWRlXHJcbiAgICAgICAgcHJvcCA9IFwiZmFuY3lib3gtYW5pbWF0ZWQgZmFuY3lib3gtZngtXCIgKyBjdXJyZW50Lm9wdHMudHJhbnNpdGlvbkVmZmVjdDtcclxuXHJcbiAgICAgICAgcHJldmlvdXMuJHNsaWRlLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLVwiICsgKHByZXZpb3VzLnBvcyA+IGN1cnJlbnQucG9zID8gXCJuZXh0XCIgOiBcInByZXZpb3VzXCIpKTtcclxuXHJcbiAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxyXG4gICAgICAgICAgcHJldmlvdXMuJHNsaWRlLFxyXG4gICAgICAgICAgcHJvcCxcclxuICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzLiRzbGlkZS5yZW1vdmVDbGFzcyhwcm9wKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1uZXh0IGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91c1wiKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50LmlzTG9hZGVkKSB7XHJcbiAgICAgICAgc2VsZi5yZXZlYWxDb250ZW50KGN1cnJlbnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYubG9hZFNsaWRlKGN1cnJlbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnByZWxvYWQoXCJpbWFnZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ3JlYXRlIG5ldyBcInNsaWRlXCIgZWxlbWVudFxyXG4gICAgLy8gVGhlc2UgYXJlIGdhbGxlcnkgaXRlbXMgIHRoYXQgYXJlIGFjdHVhbGx5IGFkZGVkIHRvIERPTVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGNyZWF0ZVNsaWRlOiBmdW5jdGlvbihwb3MpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICRzbGlkZSxcclxuICAgICAgICBpbmRleDtcclxuXHJcbiAgICAgIGluZGV4ID0gcG9zICUgc2VsZi5ncm91cC5sZW5ndGg7XHJcbiAgICAgIGluZGV4ID0gaW5kZXggPCAwID8gc2VsZi5ncm91cC5sZW5ndGggKyBpbmRleCA6IGluZGV4O1xyXG5cclxuICAgICAgaWYgKCFzZWxmLnNsaWRlc1twb3NdICYmIHNlbGYuZ3JvdXBbaW5kZXhdKSB7XHJcbiAgICAgICAgJHNsaWRlID0gJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXNsaWRlXCI+PC9kaXY+JykuYXBwZW5kVG8oc2VsZi4kcmVmcy5zdGFnZSk7XHJcblxyXG4gICAgICAgIHNlbGYuc2xpZGVzW3Bvc10gPSAkLmV4dGVuZCh0cnVlLCB7fSwgc2VsZi5ncm91cFtpbmRleF0sIHtcclxuICAgICAgICAgIHBvczogcG9zLFxyXG4gICAgICAgICAgJHNsaWRlOiAkc2xpZGUsXHJcbiAgICAgICAgICBpc0xvYWRlZDogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi51cGRhdGVTbGlkZShzZWxmLnNsaWRlc1twb3NdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHNlbGYuc2xpZGVzW3Bvc107XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFNjYWxlIGltYWdlIHRvIHRoZSBhY3R1YWwgc2l6ZSBvZiB0aGUgaW1hZ2U7XHJcbiAgICAvLyB4IGFuZCB5IHZhbHVlcyBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIHNsaWRlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2NhbGVUb0FjdHVhbDogZnVuY3Rpb24oeCwgeSwgZHVyYXRpb24pIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXHJcbiAgICAgICAgJGNvbnRlbnQgPSBjdXJyZW50LiRjb250ZW50LFxyXG4gICAgICAgIGNhbnZhc1dpZHRoID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoY3VycmVudC4kc2xpZGUpLndpZHRoLFxyXG4gICAgICAgIGNhbnZhc0hlaWdodCA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKGN1cnJlbnQuJHNsaWRlKS5oZWlnaHQsXHJcbiAgICAgICAgbmV3SW1nV2lkdGggPSBjdXJyZW50LndpZHRoLFxyXG4gICAgICAgIG5ld0ltZ0hlaWdodCA9IGN1cnJlbnQuaGVpZ2h0LFxyXG4gICAgICAgIGltZ1BvcyxcclxuICAgICAgICBwb3NYLFxyXG4gICAgICAgIHBvc1ksXHJcbiAgICAgICAgc2NhbGVYLFxyXG4gICAgICAgIHNjYWxlWTtcclxuXHJcbiAgICAgIGlmIChzZWxmLmlzQW5pbWF0aW5nIHx8IHNlbGYuaXNNb3ZlZCgpIHx8ICEkY29udGVudCB8fCAhKGN1cnJlbnQudHlwZSA9PSBcImltYWdlXCIgJiYgY3VycmVudC5pc0xvYWRlZCAmJiAhY3VycmVudC5oYXNFcnJvcikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgJC5mYW5jeWJveC5zdG9wKCRjb250ZW50KTtcclxuXHJcbiAgICAgIHggPSB4ID09PSB1bmRlZmluZWQgPyBjYW52YXNXaWR0aCAqIDAuNSA6IHg7XHJcbiAgICAgIHkgPSB5ID09PSB1bmRlZmluZWQgPyBjYW52YXNIZWlnaHQgKiAwLjUgOiB5O1xyXG5cclxuICAgICAgaW1nUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoJGNvbnRlbnQpO1xyXG5cclxuICAgICAgaW1nUG9zLnRvcCAtPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShjdXJyZW50LiRzbGlkZSkudG9wO1xyXG4gICAgICBpbWdQb3MubGVmdCAtPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShjdXJyZW50LiRzbGlkZSkubGVmdDtcclxuXHJcbiAgICAgIHNjYWxlWCA9IG5ld0ltZ1dpZHRoIC8gaW1nUG9zLndpZHRoO1xyXG4gICAgICBzY2FsZVkgPSBuZXdJbWdIZWlnaHQgLyBpbWdQb3MuaGVpZ2h0O1xyXG5cclxuICAgICAgLy8gR2V0IGNlbnRlciBwb3NpdGlvbiBmb3Igb3JpZ2luYWwgaW1hZ2VcclxuICAgICAgcG9zWCA9IGNhbnZhc1dpZHRoICogMC41IC0gbmV3SW1nV2lkdGggKiAwLjU7XHJcbiAgICAgIHBvc1kgPSBjYW52YXNIZWlnaHQgKiAwLjUgLSBuZXdJbWdIZWlnaHQgKiAwLjU7XHJcblxyXG4gICAgICAvLyBNYWtlIHN1cmUgaW1hZ2UgZG9lcyBub3QgbW92ZSBhd2F5IGZyb20gZWRnZXNcclxuICAgICAgaWYgKG5ld0ltZ1dpZHRoID4gY2FudmFzV2lkdGgpIHtcclxuICAgICAgICBwb3NYID0gaW1nUG9zLmxlZnQgKiBzY2FsZVggLSAoeCAqIHNjYWxlWCAtIHgpO1xyXG5cclxuICAgICAgICBpZiAocG9zWCA+IDApIHtcclxuICAgICAgICAgIHBvc1ggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBvc1ggPCBjYW52YXNXaWR0aCAtIG5ld0ltZ1dpZHRoKSB7XHJcbiAgICAgICAgICBwb3NYID0gY2FudmFzV2lkdGggLSBuZXdJbWdXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZXdJbWdIZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcclxuICAgICAgICBwb3NZID0gaW1nUG9zLnRvcCAqIHNjYWxlWSAtICh5ICogc2NhbGVZIC0geSk7XHJcblxyXG4gICAgICAgIGlmIChwb3NZID4gMCkge1xyXG4gICAgICAgICAgcG9zWSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocG9zWSA8IGNhbnZhc0hlaWdodCAtIG5ld0ltZ0hlaWdodCkge1xyXG4gICAgICAgICAgcG9zWSA9IGNhbnZhc0hlaWdodCAtIG5ld0ltZ0hlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYudXBkYXRlQ3Vyc29yKG5ld0ltZ1dpZHRoLCBuZXdJbWdIZWlnaHQpO1xyXG5cclxuICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxyXG4gICAgICAgICRjb250ZW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvcDogcG9zWSxcclxuICAgICAgICAgIGxlZnQ6IHBvc1gsXHJcbiAgICAgICAgICBzY2FsZVg6IHNjYWxlWCxcclxuICAgICAgICAgIHNjYWxlWTogc2NhbGVZXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdXJhdGlvbiB8fCAzNjYsXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZWxmLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gU3RvcCBzbGlkZXNob3dcclxuICAgICAgaWYgKHNlbGYuU2xpZGVTaG93ICYmIHNlbGYuU2xpZGVTaG93LmlzQWN0aXZlKSB7XHJcbiAgICAgICAgc2VsZi5TbGlkZVNob3cuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFNjYWxlIGltYWdlIHRvIGZpdCBpbnNpZGUgcGFyZW50IGVsZW1lbnRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBzY2FsZVRvRml0OiBmdW5jdGlvbihkdXJhdGlvbikge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcclxuICAgICAgICAkY29udGVudCA9IGN1cnJlbnQuJGNvbnRlbnQsXHJcbiAgICAgICAgZW5kO1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXNBbmltYXRpbmcgfHwgc2VsZi5pc01vdmVkKCkgfHwgISRjb250ZW50IHx8ICEoY3VycmVudC50eXBlID09IFwiaW1hZ2VcIiAmJiBjdXJyZW50LmlzTG9hZGVkICYmICFjdXJyZW50Lmhhc0Vycm9yKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAkLmZhbmN5Ym94LnN0b3AoJGNvbnRlbnQpO1xyXG5cclxuICAgICAgZW5kID0gc2VsZi5nZXRGaXRQb3MoY3VycmVudCk7XHJcblxyXG4gICAgICBzZWxmLnVwZGF0ZUN1cnNvcihlbmQud2lkdGgsIGVuZC5oZWlnaHQpO1xyXG5cclxuICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxyXG4gICAgICAgICRjb250ZW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvcDogZW5kLnRvcCxcclxuICAgICAgICAgIGxlZnQ6IGVuZC5sZWZ0LFxyXG4gICAgICAgICAgc2NhbGVYOiBlbmQud2lkdGggLyAkY29udGVudC53aWR0aCgpLFxyXG4gICAgICAgICAgc2NhbGVZOiBlbmQuaGVpZ2h0IC8gJGNvbnRlbnQuaGVpZ2h0KClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1cmF0aW9uIHx8IDM2NixcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBpbWFnZSBzaXplIHRvIGZpdCBpbnNpZGUgdmlld3BvcnRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBnZXRGaXRQb3M6IGZ1bmN0aW9uKHNsaWRlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAkY29udGVudCA9IHNsaWRlLiRjb250ZW50LFxyXG4gICAgICAgICRzbGlkZSA9IHNsaWRlLiRzbGlkZSxcclxuICAgICAgICB3aWR0aCA9IHNsaWRlLndpZHRoIHx8IHNsaWRlLm9wdHMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0ID0gc2xpZGUuaGVpZ2h0IHx8IHNsaWRlLm9wdHMuaGVpZ2h0LFxyXG4gICAgICAgIG1heFdpZHRoLFxyXG4gICAgICAgIG1heEhlaWdodCxcclxuICAgICAgICBtaW5SYXRpbyxcclxuICAgICAgICBhc3BlY3RSYXRpbyxcclxuICAgICAgICByZXogPSB7fTtcclxuXHJcbiAgICAgIGlmICghc2xpZGUuaXNMb2FkZWQgfHwgISRjb250ZW50IHx8ICEkY29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1heFdpZHRoID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoc2VsZi4kcmVmcy5zdGFnZSkud2lkdGg7XHJcbiAgICAgIG1heEhlaWdodCA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHNlbGYuJHJlZnMuc3RhZ2UpLmhlaWdodDtcclxuXHJcbiAgICAgIG1heFdpZHRoIC09XHJcbiAgICAgICAgcGFyc2VGbG9hdCgkc2xpZGUuY3NzKFwicGFkZGluZ0xlZnRcIikpICtcclxuICAgICAgICBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nUmlnaHRcIikpICtcclxuICAgICAgICBwYXJzZUZsb2F0KCRjb250ZW50LmNzcyhcIm1hcmdpbkxlZnRcIikpICtcclxuICAgICAgICBwYXJzZUZsb2F0KCRjb250ZW50LmNzcyhcIm1hcmdpblJpZ2h0XCIpKTtcclxuXHJcbiAgICAgIG1heEhlaWdodCAtPVxyXG4gICAgICAgIHBhcnNlRmxvYXQoJHNsaWRlLmNzcyhcInBhZGRpbmdUb3BcIikpICtcclxuICAgICAgICBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nQm90dG9tXCIpKSArXHJcbiAgICAgICAgcGFyc2VGbG9hdCgkY29udGVudC5jc3MoXCJtYXJnaW5Ub3BcIikpICtcclxuICAgICAgICBwYXJzZUZsb2F0KCRjb250ZW50LmNzcyhcIm1hcmdpbkJvdHRvbVwiKSk7XHJcblxyXG4gICAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcclxuICAgICAgICB3aWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICAgIGhlaWdodCA9IG1heEhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWluUmF0aW8gPSBNYXRoLm1pbigxLCBtYXhXaWR0aCAvIHdpZHRoLCBtYXhIZWlnaHQgLyBoZWlnaHQpO1xyXG5cclxuICAgICAgd2lkdGggPSBtaW5SYXRpbyAqIHdpZHRoO1xyXG4gICAgICBoZWlnaHQgPSBtaW5SYXRpbyAqIGhlaWdodDtcclxuXHJcbiAgICAgIC8vIEFkanVzdCB3aWR0aC9oZWlnaHQgdG8gcHJlY2lzZWx5IGZpdCBpbnRvIGNvbnRhaW5lclxyXG4gICAgICBpZiAod2lkdGggPiBtYXhXaWR0aCAtIDAuNSkge1xyXG4gICAgICAgIHdpZHRoID0gbWF4V2lkdGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQgLSAwLjUpIHtcclxuICAgICAgICBoZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzbGlkZS50eXBlID09PSBcImltYWdlXCIpIHtcclxuICAgICAgICByZXoudG9wID0gTWF0aC5mbG9vcigobWF4SGVpZ2h0IC0gaGVpZ2h0KSAqIDAuNSkgKyBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nVG9wXCIpKTtcclxuICAgICAgICByZXoubGVmdCA9IE1hdGguZmxvb3IoKG1heFdpZHRoIC0gd2lkdGgpICogMC41KSArIHBhcnNlRmxvYXQoJHNsaWRlLmNzcyhcInBhZGRpbmdMZWZ0XCIpKTtcclxuICAgICAgfSBlbHNlIGlmIChzbGlkZS5jb250ZW50VHlwZSA9PT0gXCJ2aWRlb1wiKSB7XHJcbiAgICAgICAgLy8gRm9yY2UgYXNwZWN0IHJhdGlvIGZvciB0aGUgdmlkZW9cclxuICAgICAgICAvLyBcIkkgc2F5IHRoZSB3aG9sZSB3b3JsZCBtdXN0IGxlYXJuIG9mIG91ciBwZWFjZWZ1bCB3YXlz4oCmIGJ5IGZvcmNlIVwiXHJcbiAgICAgICAgYXNwZWN0UmF0aW8gPSBzbGlkZS5vcHRzLndpZHRoICYmIHNsaWRlLm9wdHMuaGVpZ2h0ID8gd2lkdGggLyBoZWlnaHQgOiBzbGlkZS5vcHRzLnJhdGlvIHx8IDE2IC8gOTtcclxuXHJcbiAgICAgICAgaWYgKGhlaWdodCA+IHdpZHRoIC8gYXNwZWN0UmF0aW8pIHtcclxuICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XHJcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA+IGhlaWdodCAqIGFzcGVjdFJhdGlvKSB7XHJcbiAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV6LndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHJlei5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICByZXR1cm4gcmV6O1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVcGRhdGUgY29udGVudCBzaXplIGFuZCBwb3NpdGlvbiBmb3IgYWxsIHNsaWRlc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAkLmVhY2goc2VsZi5zbGlkZXMsIGZ1bmN0aW9uKGtleSwgc2xpZGUpIHtcclxuICAgICAgICBzZWxmLnVwZGF0ZVNsaWRlKHNsaWRlLCBlKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVwZGF0ZSBzbGlkZSBjb250ZW50IHBvc2l0aW9uIGFuZCBzaXplXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHVwZGF0ZVNsaWRlOiBmdW5jdGlvbihzbGlkZSwgZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgJGNvbnRlbnQgPSBzbGlkZSAmJiBzbGlkZS4kY29udGVudCxcclxuICAgICAgICB3aWR0aCA9IHNsaWRlLndpZHRoIHx8IHNsaWRlLm9wdHMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0ID0gc2xpZGUuaGVpZ2h0IHx8IHNsaWRlLm9wdHMuaGVpZ2h0LFxyXG4gICAgICAgICRzbGlkZSA9IHNsaWRlLiRzbGlkZTtcclxuXHJcbiAgICAgIC8vIEZpcnN0LCBwcmV2ZW50IGNhcHRpb24gb3ZlcmxhcCwgaWYgbmVlZGVkXHJcbiAgICAgIHNlbGYuYWRqdXN0Q2FwdGlvbihzbGlkZSk7XHJcblxyXG4gICAgICAvLyBUaGVuIHJlc2l6ZSBjb250ZW50IHRvIGZpdCBpbnNpZGUgdGhlIHNsaWRlXHJcbiAgICAgIGlmICgkY29udGVudCAmJiAod2lkdGggfHwgaGVpZ2h0IHx8IHNsaWRlLmNvbnRlbnRUeXBlID09PSBcInZpZGVvXCIpICYmICFzbGlkZS5oYXNFcnJvcikge1xyXG4gICAgICAgICQuZmFuY3lib3guc3RvcCgkY29udGVudCk7XHJcblxyXG4gICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKCRjb250ZW50LCBzZWxmLmdldEZpdFBvcyhzbGlkZSkpO1xyXG5cclxuICAgICAgICBpZiAoc2xpZGUucG9zID09PSBzZWxmLmN1cnJQb3MpIHtcclxuICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBzZWxmLnVwZGF0ZUN1cnNvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlbiBzb21lIGFkanVzdG1lbnRzXHJcbiAgICAgIHNlbGYuYWRqdXN0TGF5b3V0KHNsaWRlKTtcclxuXHJcbiAgICAgIGlmICgkc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgJHNsaWRlLnRyaWdnZXIoXCJyZWZyZXNoXCIpO1xyXG5cclxuICAgICAgICBpZiAoc2xpZGUucG9zID09PSBzZWxmLmN1cnJQb3MpIHtcclxuICAgICAgICAgIHNlbGYuJHJlZnMudG9vbGJhclxyXG4gICAgICAgICAgICAuYWRkKHNlbGYuJHJlZnMubmF2aWdhdGlvbi5maW5kKFwiLmZhbmN5Ym94LWJ1dHRvbi0tYXJyb3dfcmlnaHRcIikpXHJcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcyhcImNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhclwiLCAkc2xpZGUuZ2V0KDApLnNjcm9sbEhlaWdodCA+ICRzbGlkZS5nZXQoMCkuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYudHJpZ2dlcihcIm9uVXBkYXRlXCIsIHNsaWRlLCBlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gSG9yaXpvbnRhbGx5IGNlbnRlciBzbGlkZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGNlbnRlclNsaWRlOiBmdW5jdGlvbihkdXJhdGlvbikge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcclxuICAgICAgICAkc2xpZGUgPSBjdXJyZW50LiRzbGlkZTtcclxuXHJcbiAgICAgIGlmIChzZWxmLmlzQ2xvc2luZyB8fCAhY3VycmVudCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHNsaWRlLnNpYmxpbmdzKCkuY3NzKHtcclxuICAgICAgICB0cmFuc2Zvcm06IFwiXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCJcIlxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICRzbGlkZVxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC5jaGlsZHJlbigpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzIGZhbmN5Ym94LXNsaWRlLS1uZXh0XCIpO1xyXG5cclxuICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxyXG4gICAgICAgICRzbGlkZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IDAgOiBkdXJhdGlvbixcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIC8vIENsZWFuIHVwXHJcbiAgICAgICAgICAkc2xpZGUuY3NzKHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcIlwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBcIlwiXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoIWN1cnJlbnQuaXNDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDaGVjayBpZiBjdXJyZW50IHNsaWRlIGlzIG1vdmVkIChzd2lwZWQpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgaXNNb3ZlZDogZnVuY3Rpb24oc2xpZGUpIHtcclxuICAgICAgdmFyIGN1cnJlbnQgPSBzbGlkZSB8fCB0aGlzLmN1cnJlbnQsXHJcbiAgICAgICAgc2xpZGVQb3MsXHJcbiAgICAgICAgc3RhZ2VQb3M7XHJcblxyXG4gICAgICBpZiAoIWN1cnJlbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YWdlUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUodGhpcy4kcmVmcy5zdGFnZSk7XHJcbiAgICAgIHNsaWRlUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoY3VycmVudC4kc2xpZGUpO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAhY3VycmVudC4kc2xpZGUuaGFzQ2xhc3MoXCJmYW5jeWJveC1hbmltYXRlZFwiKSAmJlxyXG4gICAgICAgIChNYXRoLmFicyhzbGlkZVBvcy50b3AgLSBzdGFnZVBvcy50b3ApID4gMC41IHx8IE1hdGguYWJzKHNsaWRlUG9zLmxlZnQgLSBzdGFnZVBvcy5sZWZ0KSA+IDAuNSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXBkYXRlIGN1cnNvciBzdHlsZSBkZXBlbmRpbmcgaWYgY29udGVudCBjYW4gYmUgem9vbWVkXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICB1cGRhdGVDdXJzb3I6IGZ1bmN0aW9uKG5leHRXaWR0aCwgbmV4dEhlaWdodCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcclxuICAgICAgICAkY29udGFpbmVyID0gc2VsZi4kcmVmcy5jb250YWluZXIsXHJcbiAgICAgICAgY2FuUGFuLFxyXG4gICAgICAgIGlzWm9vbWFibGU7XHJcblxyXG4gICAgICBpZiAoIWN1cnJlbnQgfHwgc2VsZi5pc0Nsb3NpbmcgfHwgIXNlbGYuR3Vlc3R1cmVzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtem9vbWFibGUgZmFuY3lib3gtY2FuLXpvb21JbiBmYW5jeWJveC1jYW4tem9vbU91dCBmYW5jeWJveC1jYW4tc3dpcGUgZmFuY3lib3gtY2FuLXBhblwiKTtcclxuXHJcbiAgICAgIGNhblBhbiA9IHNlbGYuY2FuUGFuKG5leHRXaWR0aCwgbmV4dEhlaWdodCk7XHJcblxyXG4gICAgICBpc1pvb21hYmxlID0gY2FuUGFuID8gdHJ1ZSA6IHNlbGYuaXNab29tYWJsZSgpO1xyXG5cclxuICAgICAgJGNvbnRhaW5lci50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWlzLXpvb21hYmxlXCIsIGlzWm9vbWFibGUpO1xyXG5cclxuICAgICAgJChcIltkYXRhLWZhbmN5Ym94LXpvb21dXCIpLnByb3AoXCJkaXNhYmxlZFwiLCAhaXNab29tYWJsZSk7XHJcblxyXG4gICAgICBpZiAoY2FuUGFuKSB7XHJcbiAgICAgICAgJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWNhbi1wYW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgaXNab29tYWJsZSAmJlxyXG4gICAgICAgIChjdXJyZW50Lm9wdHMuY2xpY2tDb250ZW50ID09PSBcInpvb21cIiB8fCAoJC5pc0Z1bmN0aW9uKGN1cnJlbnQub3B0cy5jbGlja0NvbnRlbnQpICYmIGN1cnJlbnQub3B0cy5jbGlja0NvbnRlbnQoY3VycmVudCkgPT0gXCJ6b29tXCIpKVxyXG4gICAgICApIHtcclxuICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKFwiZmFuY3lib3gtY2FuLXpvb21JblwiKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm9wdHMudG91Y2ggJiYgKGN1cnJlbnQub3B0cy50b3VjaC52ZXJ0aWNhbCB8fCBzZWxmLmdyb3VwLmxlbmd0aCA+IDEpICYmIGN1cnJlbnQuY29udGVudFR5cGUgIT09IFwidmlkZW9cIikge1xyXG4gICAgICAgICRjb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1jYW4tc3dpcGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCBzbGlkZSBpcyB6b29tYWJsZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGlzWm9vbWFibGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcclxuICAgICAgICBmaXRQb3M7XHJcblxyXG4gICAgICAvLyBBc3N1bWUgdGhhdCBzbGlkZSBpcyB6b29tYWJsZSBpZjpcclxuICAgICAgLy8gICAtIGltYWdlIGlzIHN0aWxsIGxvYWRpbmdcclxuICAgICAgLy8gICAtIGFjdHVhbCBzaXplIG9mIHRoZSBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gYXZhaWxhYmxlIGFyZWFcclxuICAgICAgaWYgKGN1cnJlbnQgJiYgIXNlbGYuaXNDbG9zaW5nICYmIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiICYmICFjdXJyZW50Lmhhc0Vycm9yKSB7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50LmlzTG9hZGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpdFBvcyA9IHNlbGYuZ2V0Rml0UG9zKGN1cnJlbnQpO1xyXG5cclxuICAgICAgICBpZiAoZml0UG9zICYmIChjdXJyZW50LndpZHRoID4gZml0UG9zLndpZHRoIHx8IGN1cnJlbnQuaGVpZ2h0ID4gZml0UG9zLmhlaWdodCkpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDaGVjayBpZiBjdXJyZW50IGltYWdlIGRpbWVuc2lvbnMgYXJlIHNtYWxsZXIgdGhhbiBhY3R1YWxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGlzU2NhbGVkRG93bjogZnVuY3Rpb24obmV4dFdpZHRoLCBuZXh0SGVpZ2h0KSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICByZXogPSBmYWxzZSxcclxuICAgICAgICBjdXJyZW50ID0gc2VsZi5jdXJyZW50LFxyXG4gICAgICAgICRjb250ZW50ID0gY3VycmVudC4kY29udGVudDtcclxuXHJcbiAgICAgIGlmIChuZXh0V2lkdGggIT09IHVuZGVmaW5lZCAmJiBuZXh0SGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXogPSBuZXh0V2lkdGggPCBjdXJyZW50LndpZHRoICYmIG5leHRIZWlnaHQgPCBjdXJyZW50LmhlaWdodDtcclxuICAgICAgfSBlbHNlIGlmICgkY29udGVudCkge1xyXG4gICAgICAgIHJleiA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCRjb250ZW50KTtcclxuICAgICAgICByZXogPSByZXoud2lkdGggPCBjdXJyZW50LndpZHRoICYmIHJlei5oZWlnaHQgPCBjdXJyZW50LmhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlejtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgaW1hZ2UgZGltZW5zaW9ucyBleGNlZWQgcGFyZW50IGVsZW1lbnRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgY2FuUGFuOiBmdW5jdGlvbihuZXh0V2lkdGgsIG5leHRIZWlnaHQpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXHJcbiAgICAgICAgcG9zID0gbnVsbCxcclxuICAgICAgICByZXogPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09IFwiaW1hZ2VcIiAmJiAoY3VycmVudC5pc0NvbXBsZXRlIHx8IChuZXh0V2lkdGggJiYgbmV4dEhlaWdodCkpICYmICFjdXJyZW50Lmhhc0Vycm9yKSB7XHJcbiAgICAgICAgcmV6ID0gc2VsZi5nZXRGaXRQb3MoY3VycmVudCk7XHJcblxyXG4gICAgICAgIGlmIChuZXh0V2lkdGggIT09IHVuZGVmaW5lZCAmJiBuZXh0SGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHBvcyA9IHt3aWR0aDogbmV4dFdpZHRoLCBoZWlnaHQ6IG5leHRIZWlnaHR9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5pc0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICBwb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShjdXJyZW50LiRjb250ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwb3MgJiYgcmV6KSB7XHJcbiAgICAgICAgICByZXogPSBNYXRoLmFicyhwb3Mud2lkdGggLSByZXoud2lkdGgpID4gMS41IHx8IE1hdGguYWJzKHBvcy5oZWlnaHQgLSByZXouaGVpZ2h0KSA+IDEuNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXo7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExvYWQgY29udGVudCBpbnRvIHRoZSBzbGlkZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbG9hZFNsaWRlOiBmdW5jdGlvbihzbGlkZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICAkc2xpZGUsXHJcbiAgICAgICAgYWpheExvYWQ7XHJcblxyXG4gICAgICBpZiAoc2xpZGUuaXNMb2FkaW5nIHx8IHNsaWRlLmlzTG9hZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzbGlkZS5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHNlbGYudHJpZ2dlcihcImJlZm9yZUxvYWRcIiwgc2xpZGUpID09PSBmYWxzZSkge1xyXG4gICAgICAgIHNsaWRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHR5cGUgPSBzbGlkZS50eXBlO1xyXG4gICAgICAkc2xpZGUgPSBzbGlkZS4kc2xpZGU7XHJcblxyXG4gICAgICAkc2xpZGVcclxuICAgICAgICAub2ZmKFwicmVmcmVzaFwiKVxyXG4gICAgICAgIC50cmlnZ2VyKFwib25SZXNldFwiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhzbGlkZS5vcHRzLnNsaWRlQ2xhc3MpO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIGNvbnRlbnQgZGVwZW5kaW5nIG9uIHRoZSB0eXBlXHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4gICAgICAgICAgc2VsZi5zZXRJbWFnZShzbGlkZSk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJpZnJhbWVcIjpcclxuICAgICAgICAgIHNlbGYuc2V0SWZyYW1lKHNsaWRlKTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcImh0bWxcIjpcclxuICAgICAgICAgIHNlbGYuc2V0Q29udGVudChzbGlkZSwgc2xpZGUuc3JjIHx8IHNsaWRlLmNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwidmlkZW9cIjpcclxuICAgICAgICAgIHNlbGYuc2V0Q29udGVudChcclxuICAgICAgICAgICAgc2xpZGUsXHJcbiAgICAgICAgICAgIHNsaWRlLm9wdHMudmlkZW8udHBsXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xce1xce3NyY1xcfVxcfS9naSwgc2xpZGUuc3JjKVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKFwie3tmb3JtYXR9fVwiLCBzbGlkZS5vcHRzLnZpZGVvRm9ybWF0IHx8IHNsaWRlLm9wdHMudmlkZW8uZm9ybWF0IHx8IFwiXCIpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ7e3Bvc3Rlcn19XCIsIHNsaWRlLnRodW1iIHx8IFwiXCIpXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiaW5saW5lXCI6XHJcbiAgICAgICAgICBpZiAoJChzbGlkZS5zcmMpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLnNldENvbnRlbnQoc2xpZGUsICQoc2xpZGUuc3JjKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLnNldEVycm9yKHNsaWRlKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcImFqYXhcIjpcclxuICAgICAgICAgIHNlbGYuc2hvd0xvYWRpbmcoc2xpZGUpO1xyXG5cclxuICAgICAgICAgIGFqYXhMb2FkID0gJC5hamF4KFxyXG4gICAgICAgICAgICAkLmV4dGVuZCh7fSwgc2xpZGUub3B0cy5hamF4LnNldHRpbmdzLCB7XHJcbiAgICAgICAgICAgICAgdXJsOiBzbGlkZS5zcmMsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRleHRTdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGYuc2V0Q29udGVudChzbGlkZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChqcVhIUiAmJiB0ZXh0U3RhdHVzICE9PSBcImFib3J0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5zZXRFcnJvcihzbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkc2xpZGUub25lKFwib25SZXNldFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWpheExvYWQuYWJvcnQoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc2VsZi5zZXRFcnJvcihzbGlkZSk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2UgdGh1bWJuYWlsIGltYWdlLCBpZiBwb3NzaWJsZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBzZXRJbWFnZTogZnVuY3Rpb24oc2xpZGUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGdob3N0O1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgbmVlZCB0byBzaG93IGxvYWRpbmcgaWNvblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkaW1nID0gc2xpZGUuJGltYWdlO1xyXG5cclxuICAgICAgICBpZiAoIXNlbGYuaXNDbG9zaW5nICYmIHNsaWRlLmlzTG9hZGluZyAmJiAoISRpbWcgfHwgISRpbWcubGVuZ3RoIHx8ICEkaW1nWzBdLmNvbXBsZXRlKSAmJiAhc2xpZGUuaGFzRXJyb3IpIHtcclxuICAgICAgICAgIHNlbGYuc2hvd0xvYWRpbmcoc2xpZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTApO1xyXG5cclxuICAgICAgLy9DaGVjayBpZiBpbWFnZSBoYXMgc3Jjc2V0XHJcbiAgICAgIHNlbGYuY2hlY2tTcmNzZXQoc2xpZGUpO1xyXG5cclxuICAgICAgLy8gVGhpcyB3aWxsIGJlIHdyYXBwZXIgY29udGFpbmluZyBib3RoIGdob3N0IGFuZCBhY3R1YWwgaW1hZ2VcclxuICAgICAgc2xpZGUuJGNvbnRlbnQgPSAkKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtY29udGVudFwiPjwvZGl2PicpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpXHJcbiAgICAgICAgLmFwcGVuZFRvKHNsaWRlLiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1pbWFnZVwiKSk7XHJcblxyXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgdGh1bWJuYWlsLCB3ZSBjYW4gZGlzcGxheSBpdCB3aGlsZSBhY3R1YWwgaW1hZ2UgaXMgbG9hZGluZ1xyXG4gICAgICAvLyBVc2VycyB3aWxsIG5vdCBzdGFyZSBhdCBibGFjayBzY3JlZW4gYW5kIGFjdHVhbCBpbWFnZSB3aWxsIGFwcGVhciBncmFkdWFsbHlcclxuICAgICAgaWYgKHNsaWRlLm9wdHMucHJlbG9hZCAhPT0gZmFsc2UgJiYgc2xpZGUub3B0cy53aWR0aCAmJiBzbGlkZS5vcHRzLmhlaWdodCAmJiBzbGlkZS50aHVtYikge1xyXG4gICAgICAgIHNsaWRlLndpZHRoID0gc2xpZGUub3B0cy53aWR0aDtcclxuICAgICAgICBzbGlkZS5oZWlnaHQgPSBzbGlkZS5vcHRzLmhlaWdodDtcclxuXHJcbiAgICAgICAgZ2hvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgICAgICBnaG9zdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgIHNsaWRlLiRnaG9zdCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZ2hvc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZWxmLmFmdGVyTG9hZChzbGlkZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2xpZGUuJGdob3N0ID0gJChnaG9zdClcclxuICAgICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LWltYWdlXCIpXHJcbiAgICAgICAgICAuYXBwZW5kVG8oc2xpZGUuJGNvbnRlbnQpXHJcbiAgICAgICAgICAuYXR0cihcInNyY1wiLCBzbGlkZS50aHVtYik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFN0YXJ0IGxvYWRpbmcgYWN0dWFsIGltYWdlXHJcbiAgICAgIHNlbGYuc2V0QmlnSW1hZ2Uoc2xpZGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbWFnZSBoYXMgc3Jjc2V0IGFuZCBnZXQgdGhlIHNvdXJjZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNoZWNrU3Jjc2V0OiBmdW5jdGlvbihzbGlkZSkge1xyXG4gICAgICB2YXIgc3Jjc2V0ID0gc2xpZGUub3B0cy5zcmNzZXQgfHwgc2xpZGUub3B0cy5pbWFnZS5zcmNzZXQsXHJcbiAgICAgICAgZm91bmQsXHJcbiAgICAgICAgdGVtcCxcclxuICAgICAgICBweFJhdGlvLFxyXG4gICAgICAgIHdpbmRvd1dpZHRoO1xyXG5cclxuICAgICAgLy8gSWYgd2UgaGF2ZSBcInNyY3NldFwiLCB0aGVuIHdlIG5lZWQgdG8gZmluZCBmaXJzdCBtYXRjaGluZyBcInNyY1wiIHZhbHVlLlxyXG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSwgYmVjYXVzZSB3aGVuIHlvdSBzZXQgYW4gc3JjIGF0dHJpYnV0ZSwgdGhlIGJyb3dzZXIgd2lsbCBwcmVsb2FkIHRoZSBpbWFnZVxyXG4gICAgICAvLyBiZWZvcmUgYW55IGphdmFzY3JpcHQgb3IgZXZlbiBDU1MgaXMgYXBwbGllZC5cclxuICAgICAgaWYgKHNyY3NldCkge1xyXG4gICAgICAgIHB4UmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xyXG4gICAgICAgIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBweFJhdGlvO1xyXG5cclxuICAgICAgICB0ZW1wID0gc3Jjc2V0LnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgIHZhciByZXQgPSB7fTtcclxuXHJcbiAgICAgICAgICBlbC50cmltKClcclxuICAgICAgICAgICAgLnNwbGl0KC9cXHMrLylcclxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oZWwsIGkpIHtcclxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUludChlbC5zdWJzdHJpbmcoMCwgZWwubGVuZ3RoIC0gMSksIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocmV0LnVybCA9IGVsKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXQucG9zdGZpeCA9IGVsW2VsLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU29ydCBieSB2YWx1ZVxyXG4gICAgICAgIHRlbXAuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICByZXR1cm4gYS52YWx1ZSAtIGIudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9rLCBub3cgd2UgaGF2ZSBhbiBhcnJheSBvZiBhbGwgc3Jjc2V0IHZhbHVlc1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGVtcC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgdmFyIGVsID0gdGVtcFtqXTtcclxuXHJcbiAgICAgICAgICBpZiAoKGVsLnBvc3RmaXggPT09IFwid1wiICYmIGVsLnZhbHVlID49IHdpbmRvd1dpZHRoKSB8fCAoZWwucG9zdGZpeCA9PT0gXCJ4XCIgJiYgZWwudmFsdWUgPj0gcHhSYXRpbykpIHtcclxuICAgICAgICAgICAgZm91bmQgPSBlbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBub3QgZm91bmQsIHRha2UgdGhlIGxhc3Qgb25lXHJcbiAgICAgICAgaWYgKCFmb3VuZCAmJiB0ZW1wLmxlbmd0aCkge1xyXG4gICAgICAgICAgZm91bmQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgIHNsaWRlLnNyYyA9IGZvdW5kLnVybDtcclxuXHJcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGRlZmF1bHQgd2lkdGgvaGVpZ2h0IHZhbHVlcywgd2UgY2FuIGNhbGN1bGF0ZSBoZWlnaHQgZm9yIG1hdGNoaW5nIHNvdXJjZVxyXG4gICAgICAgICAgaWYgKHNsaWRlLndpZHRoICYmIHNsaWRlLmhlaWdodCAmJiBmb3VuZC5wb3N0Zml4ID09IFwid1wiKSB7XHJcbiAgICAgICAgICAgIHNsaWRlLmhlaWdodCA9IChzbGlkZS53aWR0aCAvIHNsaWRlLmhlaWdodCkgKiBmb3VuZC52YWx1ZTtcclxuICAgICAgICAgICAgc2xpZGUud2lkdGggPSBmb3VuZC52YWx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzbGlkZS5vcHRzLnNyY3NldCA9IHNyY3NldDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ3JlYXRlIGZ1bGwtc2l6ZSBpbWFnZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNldEJpZ0ltYWdlOiBmdW5jdGlvbihzbGlkZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxcclxuICAgICAgICAkaW1nID0gJChpbWcpO1xyXG5cclxuICAgICAgc2xpZGUuJGltYWdlID0gJGltZ1xyXG4gICAgICAgIC5vbmUoXCJlcnJvclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNlbGYuc2V0RXJyb3Ioc2xpZGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uZShcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgc2l6ZXM7XHJcblxyXG4gICAgICAgICAgaWYgKCFzbGlkZS4kZ2hvc3QpIHtcclxuICAgICAgICAgICAgc2VsZi5yZXNvbHZlSW1hZ2VTbGlkZVNpemUoc2xpZGUsIHRoaXMubmF0dXJhbFdpZHRoLCB0aGlzLm5hdHVyYWxIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5hZnRlckxvYWQoc2xpZGUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNsaWRlLm9wdHMuc3Jjc2V0KSB7XHJcbiAgICAgICAgICAgIHNpemVzID0gc2xpZGUub3B0cy5zaXplcztcclxuXHJcbiAgICAgICAgICAgIGlmICghc2l6ZXMgfHwgc2l6ZXMgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgICAgc2l6ZXMgPVxyXG4gICAgICAgICAgICAgICAgKHNsaWRlLndpZHRoIC8gc2xpZGUuaGVpZ2h0ID4gMSAmJiAkVy53aWR0aCgpIC8gJFcuaGVpZ2h0KCkgPiAxID8gXCIxMDBcIiA6IE1hdGgucm91bmQoKHNsaWRlLndpZHRoIC8gc2xpZGUuaGVpZ2h0KSAqIDEwMCkpICtcclxuICAgICAgICAgICAgICAgIFwidndcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGltZy5hdHRyKFwic2l6ZXNcIiwgc2l6ZXMpLmF0dHIoXCJzcmNzZXRcIiwgc2xpZGUub3B0cy5zcmNzZXQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIEhpZGUgdGVtcG9yYXJ5IGltYWdlIGFmdGVyIHNvbWUgZGVsYXlcclxuICAgICAgICAgIGlmIChzbGlkZS4kZ2hvc3QpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBpZiAoc2xpZGUuJGdob3N0ICYmICFzZWxmLmlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgc2xpZGUuJGdob3N0LmhpZGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIE1hdGgubWluKDMwMCwgTWF0aC5tYXgoMTAwMCwgc2xpZGUuaGVpZ2h0IC8gMTYwMCkpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZWxmLmhpZGVMb2FkaW5nKHNsaWRlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LWltYWdlXCIpXHJcbiAgICAgICAgLmF0dHIoXCJzcmNcIiwgc2xpZGUuc3JjKVxyXG4gICAgICAgIC5hcHBlbmRUbyhzbGlkZS4kY29udGVudCk7XHJcblxyXG4gICAgICBpZiAoKGltZy5jb21wbGV0ZSB8fCBpbWcucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpICYmICRpbWcubmF0dXJhbFdpZHRoICYmICRpbWcubmF0dXJhbEhlaWdodCkge1xyXG4gICAgICAgICRpbWcudHJpZ2dlcihcImxvYWRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW1nLmVycm9yKSB7XHJcbiAgICAgICAgJGltZy50cmlnZ2VyKFwiZXJyb3JcIik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ29tcHV0ZXMgdGhlIHNsaWRlIHNpemUgZnJvbSBpbWFnZSBzaXplIGFuZCBtYXhXaWR0aC9tYXhIZWlnaHRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmVzb2x2ZUltYWdlU2xpZGVTaXplOiBmdW5jdGlvbihzbGlkZSwgaW1nV2lkdGgsIGltZ0hlaWdodCkge1xyXG4gICAgICB2YXIgbWF4V2lkdGggPSBwYXJzZUludChzbGlkZS5vcHRzLndpZHRoLCAxMCksXHJcbiAgICAgICAgbWF4SGVpZ2h0ID0gcGFyc2VJbnQoc2xpZGUub3B0cy5oZWlnaHQsIDEwKTtcclxuXHJcbiAgICAgIC8vIFNldHMgdGhlIGRlZmF1bHQgdmFsdWVzIGZyb20gdGhlIGltYWdlXHJcbiAgICAgIHNsaWRlLndpZHRoID0gaW1nV2lkdGg7XHJcbiAgICAgIHNsaWRlLmhlaWdodCA9IGltZ0hlaWdodDtcclxuXHJcbiAgICAgIGlmIChtYXhXaWR0aCA+IDApIHtcclxuICAgICAgICBzbGlkZS53aWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICAgIHNsaWRlLmhlaWdodCA9IE1hdGguZmxvb3IoKG1heFdpZHRoICogaW1nSGVpZ2h0KSAvIGltZ1dpZHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1heEhlaWdodCA+IDApIHtcclxuICAgICAgICBzbGlkZS53aWR0aCA9IE1hdGguZmxvb3IoKG1heEhlaWdodCAqIGltZ1dpZHRoKSAvIGltZ0hlaWdodCk7XHJcbiAgICAgICAgc2xpZGUuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENyZWF0ZSBpZnJhbWUgd3JhcHBlciwgaWZyYW1lIGFuZCBiaW5kaW5nc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2V0SWZyYW1lOiBmdW5jdGlvbihzbGlkZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgb3B0cyA9IHNsaWRlLm9wdHMuaWZyYW1lLFxyXG4gICAgICAgICRzbGlkZSA9IHNsaWRlLiRzbGlkZSxcclxuICAgICAgICAkaWZyYW1lO1xyXG5cclxuICAgICAgc2xpZGUuJGNvbnRlbnQgPSAkKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtY29udGVudCcgKyAob3B0cy5wcmVsb2FkID8gXCIgZmFuY3lib3gtaXMtaGlkZGVuXCIgOiBcIlwiKSArICdcIj48L2Rpdj4nKVxyXG4gICAgICAgIC5jc3Mob3B0cy5jc3MpXHJcbiAgICAgICAgLmFwcGVuZFRvKCRzbGlkZSk7XHJcblxyXG4gICAgICAkc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tXCIgKyBzbGlkZS5jb250ZW50VHlwZSk7XHJcblxyXG4gICAgICBzbGlkZS4kaWZyYW1lID0gJGlmcmFtZSA9ICQob3B0cy50cGwucmVwbGFjZSgvXFx7cm5kXFx9L2csIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSlcclxuICAgICAgICAuYXR0cihvcHRzLmF0dHIpXHJcbiAgICAgICAgLmFwcGVuZFRvKHNsaWRlLiRjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChvcHRzLnByZWxvYWQpIHtcclxuICAgICAgICBzZWxmLnNob3dMb2FkaW5nKHNsaWRlKTtcclxuXHJcbiAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgaXQgaXMgbm90IGFsd2F5cyBwb3NzaWJsZSB0byBkZXRlcm1pbmUgaWYgaWZyYW1lIGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWRcclxuICAgICAgICAvLyAoZHVlIHRvIGJyb3dzZXIgc2VjdXJpdHkgcG9saWN5KVxyXG5cclxuICAgICAgICAkaWZyYW1lLm9uKFwibG9hZC5mYiBlcnJvci5mYlwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICB0aGlzLmlzUmVhZHkgPSAxO1xyXG5cclxuICAgICAgICAgIHNsaWRlLiRzbGlkZS50cmlnZ2VyKFwicmVmcmVzaFwiKTtcclxuXHJcbiAgICAgICAgICBzZWxmLmFmdGVyTG9hZChzbGlkZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIGlmcmFtZSBjb250ZW50IHNpemVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICRzbGlkZS5vbihcInJlZnJlc2guZmJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgJGNvbnRlbnQgPSBzbGlkZS4kY29udGVudCxcclxuICAgICAgICAgICAgZnJhbWVXaWR0aCA9IG9wdHMuY3NzLndpZHRoLFxyXG4gICAgICAgICAgICBmcmFtZUhlaWdodCA9IG9wdHMuY3NzLmhlaWdodCxcclxuICAgICAgICAgICAgJGNvbnRlbnRzLFxyXG4gICAgICAgICAgICAkYm9keTtcclxuXHJcbiAgICAgICAgICBpZiAoJGlmcmFtZVswXS5pc1JlYWR5ICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAkY29udGVudHMgPSAkaWZyYW1lLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICRib2R5ID0gJGNvbnRlbnRzLmZpbmQoXCJib2R5XCIpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxyXG5cclxuICAgICAgICAgIC8vIENhbGN1bGF0ZSBjb250ZW50IGRpbWVuc2lvbnMsIGlmIGl0IGlzIGFjY2Vzc2libGVcclxuICAgICAgICAgIGlmICgkYm9keSAmJiAkYm9keS5sZW5ndGggJiYgJGJvZHkuY2hpbGRyZW4oKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gQXZvaWQgc2Nyb2xsaW5nIHRvIHRvcCAoaWYgbXVsdGlwbGUgaW5zdGFuY2VzKVxyXG4gICAgICAgICAgICAkc2xpZGUuY3NzKFwib3ZlcmZsb3dcIiwgXCJ2aXNpYmxlXCIpO1xyXG5cclxuICAgICAgICAgICAgJGNvbnRlbnQuY3NzKHtcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjk5OTlweFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZyYW1lV2lkdGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGZyYW1lV2lkdGggPSBNYXRoLmNlaWwoTWF0aC5tYXgoJGJvZHlbMF0uY2xpZW50V2lkdGgsICRib2R5Lm91dGVyV2lkdGgodHJ1ZSkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGNvbnRlbnQuY3NzKFwid2lkdGhcIiwgZnJhbWVXaWR0aCA/IGZyYW1lV2lkdGggOiBcIlwiKS5jc3MoXCJtYXgtd2lkdGhcIiwgXCJcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZnJhbWVIZWlnaHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGZyYW1lSGVpZ2h0ID0gTWF0aC5jZWlsKE1hdGgubWF4KCRib2R5WzBdLmNsaWVudEhlaWdodCwgJGJvZHkub3V0ZXJIZWlnaHQodHJ1ZSkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGNvbnRlbnQuY3NzKFwiaGVpZ2h0XCIsIGZyYW1lSGVpZ2h0ID8gZnJhbWVIZWlnaHQgOiBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICRzbGlkZS5jc3MoXCJvdmVyZmxvd1wiLCBcImF1dG9cIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5hZnRlckxvYWQoc2xpZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkaWZyYW1lLmF0dHIoXCJzcmNcIiwgc2xpZGUuc3JjKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSBpZnJhbWUgaWYgY2xvc2luZyBvciBjaGFuZ2luZyBnYWxsZXJ5IGl0ZW1cclxuICAgICAgJHNsaWRlLm9uZShcIm9uUmVzZXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gVGhpcyBoZWxwcyBJRSBub3QgdG8gdGhyb3cgZXJyb3JzIHdoZW4gY2xvc2luZ1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgIC5maW5kKFwiaWZyYW1lXCIpXHJcbiAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgLnVuYmluZCgpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIFwiLy9hYm91dDpibGFua1wiKTtcclxuICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XHJcblxyXG4gICAgICAgICQodGhpcylcclxuICAgICAgICAgIC5vZmYoXCJyZWZyZXNoLmZiXCIpXHJcbiAgICAgICAgICAuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgc2xpZGUuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICBzbGlkZS5pc1JldmVhbGVkID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBXcmFwIGFuZCBhcHBlbmQgY29udGVudCB0byB0aGUgc2xpZGVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2V0Q29udGVudDogZnVuY3Rpb24oc2xpZGUsIGNvbnRlbnQpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXNDbG9zaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLmhpZGVMb2FkaW5nKHNsaWRlKTtcclxuXHJcbiAgICAgIGlmIChzbGlkZS4kY29udGVudCkge1xyXG4gICAgICAgICQuZmFuY3lib3guc3RvcChzbGlkZS4kY29udGVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNsaWRlLiRzbGlkZS5lbXB0eSgpO1xyXG5cclxuICAgICAgLy8gSWYgY29udGVudCBpcyBhIGpRdWVyeSBvYmplY3QsIHRoZW4gaXQgd2lsbCBiZSBtb3ZlZCB0byB0aGUgc2xpZGUuXHJcbiAgICAgIC8vIFRoZSBwbGFjZWhvbGRlciBpcyBjcmVhdGVkIHNvIHdlIHdpbGwga25vdyB3aGVyZSB0byBwdXQgaXQgYmFjay5cclxuICAgICAgaWYgKGlzUXVlcnkoY29udGVudCkgJiYgY29udGVudC5wYXJlbnQoKS5sZW5ndGgpIHtcclxuICAgICAgICAvLyBNYWtlIHN1cmUgY29udGVudCBpcyBub3QgYWxyZWFkeSBtb3ZlZCB0byBmYW5jeUJveFxyXG4gICAgICAgIGlmIChjb250ZW50Lmhhc0NsYXNzKFwiZmFuY3lib3gtY29udGVudFwiKSB8fCBjb250ZW50LnBhcmVudCgpLmhhc0NsYXNzKFwiZmFuY3lib3gtY29udGVudFwiKSkge1xyXG4gICAgICAgICAgY29udGVudC5wYXJlbnRzKFwiLmZhbmN5Ym94LXNsaWRlXCIpLnRyaWdnZXIoXCJvblJlc2V0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRlbXBvcmFyeSBlbGVtZW50IG1hcmtpbmcgb3JpZ2luYWwgcGxhY2Ugb2YgdGhlIGNvbnRlbnRcclxuICAgICAgICBzbGlkZS4kcGxhY2Vob2xkZXIgPSAkKFwiPGRpdj5cIilcclxuICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgIC5pbnNlcnRBZnRlcihjb250ZW50KTtcclxuXHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIGNvbnRlbnQgaXMgdmlzaWJsZVxyXG4gICAgICAgIGNvbnRlbnQuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcclxuICAgICAgfSBlbHNlIGlmICghc2xpZGUuaGFzRXJyb3IpIHtcclxuICAgICAgICAvLyBJZiBjb250ZW50IGlzIGp1c3QgYSBwbGFpbiB0ZXh0LCB0cnkgdG8gY29udmVydCBpdCB0byBodG1sXHJcbiAgICAgICAgaWYgKCQudHlwZShjb250ZW50KSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgY29udGVudCA9ICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCQudHJpbShjb250ZW50KSlcclxuICAgICAgICAgICAgLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBcImZpbHRlclwiIG9wdGlvbiBpcyBwcm92aWRlZCwgdGhlbiBmaWx0ZXIgY29udGVudFxyXG4gICAgICAgIGlmIChzbGlkZS5vcHRzLmZpbHRlcikge1xyXG4gICAgICAgICAgY29udGVudCA9ICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAuaHRtbChjb250ZW50KVxyXG4gICAgICAgICAgICAuZmluZChzbGlkZS5vcHRzLmZpbHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzbGlkZS4kc2xpZGUub25lKFwib25SZXNldFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBQYXVzZSBhbGwgaHRtbDUgdmlkZW8vYXVkaW9cclxuICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAuZmluZChcInZpZGVvLGF1ZGlvXCIpXHJcbiAgICAgICAgICAudHJpZ2dlcihcInBhdXNlXCIpO1xyXG5cclxuICAgICAgICAvLyBQdXQgY29udGVudCBiYWNrXHJcbiAgICAgICAgaWYgKHNsaWRlLiRwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgc2xpZGUuJHBsYWNlaG9sZGVyLmFmdGVyKGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1jb250ZW50XCIpLmhpZGUoKSkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgc2xpZGUuJHBsYWNlaG9sZGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBjdXN0b20gY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgaWYgKHNsaWRlLiRzbWFsbEJ0bikge1xyXG4gICAgICAgICAgc2xpZGUuJHNtYWxsQnRuLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgIHNsaWRlLiRzbWFsbEJ0biA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgY29udGVudCBhbmQgbWFyayBzbGlkZSBhcyBub3QgbG9hZGVkXHJcbiAgICAgICAgaWYgKCFzbGlkZS5oYXNFcnJvcikge1xyXG4gICAgICAgICAgJCh0aGlzKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgIHNsaWRlLmlzTG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBzbGlkZS5pc1JldmVhbGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQoY29udGVudCkuYXBwZW5kVG8oc2xpZGUuJHNsaWRlKTtcclxuXHJcbiAgICAgIGlmICgkKGNvbnRlbnQpLmlzKFwidmlkZW8sYXVkaW9cIikpIHtcclxuICAgICAgICAkKGNvbnRlbnQpLmFkZENsYXNzKFwiZmFuY3lib3gtdmlkZW9cIik7XHJcblxyXG4gICAgICAgICQoY29udGVudCkud3JhcChcIjxkaXY+PC9kaXY+XCIpO1xyXG5cclxuICAgICAgICBzbGlkZS5jb250ZW50VHlwZSA9IFwidmlkZW9cIjtcclxuXHJcbiAgICAgICAgc2xpZGUub3B0cy53aWR0aCA9IHNsaWRlLm9wdHMud2lkdGggfHwgJChjb250ZW50KS5hdHRyKFwid2lkdGhcIik7XHJcbiAgICAgICAgc2xpZGUub3B0cy5oZWlnaHQgPSBzbGlkZS5vcHRzLmhlaWdodCB8fCAkKGNvbnRlbnQpLmF0dHIoXCJoZWlnaHRcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNsaWRlLiRjb250ZW50ID0gc2xpZGUuJHNsaWRlXHJcbiAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAuZmlsdGVyKFwiZGl2LGZvcm0sbWFpbix2aWRlbyxhdWRpbyxhcnRpY2xlLC5mYW5jeWJveC1jb250ZW50XCIpXHJcbiAgICAgICAgLmZpcnN0KCk7XHJcblxyXG4gICAgICBzbGlkZS4kY29udGVudC5zaWJsaW5ncygpLmhpZGUoKTtcclxuXHJcbiAgICAgIC8vIFJlLWNoZWNrIGlmIHRoZXJlIGlzIGEgdmFsaWQgY29udGVudFxyXG4gICAgICAvLyAoaW4gc29tZSBjYXNlcywgYWpheCByZXNwb25zZSBjYW4gY29udGFpbiB2YXJpb3VzIGVsZW1lbnRzIG9yIHBsYWluIHRleHQpXHJcbiAgICAgIGlmICghc2xpZGUuJGNvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgc2xpZGUuJGNvbnRlbnQgPSBzbGlkZS4kc2xpZGVcclxuICAgICAgICAgIC53cmFwSW5uZXIoXCI8ZGl2PjwvZGl2PlwiKVxyXG4gICAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAgIC5maXJzdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzbGlkZS4kY29udGVudC5hZGRDbGFzcyhcImZhbmN5Ym94LWNvbnRlbnRcIik7XHJcblxyXG4gICAgICBzbGlkZS4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tXCIgKyBzbGlkZS5jb250ZW50VHlwZSk7XHJcblxyXG4gICAgICBzZWxmLmFmdGVyTG9hZChzbGlkZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIERpc3BsYXkgZXJyb3IgbWVzc2FnZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2V0RXJyb3I6IGZ1bmN0aW9uKHNsaWRlKSB7XHJcbiAgICAgIHNsaWRlLmhhc0Vycm9yID0gdHJ1ZTtcclxuXHJcbiAgICAgIHNsaWRlLiRzbGlkZVxyXG4gICAgICAgIC50cmlnZ2VyKFwib25SZXNldFwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1cIiArIHNsaWRlLmNvbnRlbnRUeXBlKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1lcnJvclwiKTtcclxuXHJcbiAgICAgIHNsaWRlLmNvbnRlbnRUeXBlID0gXCJodG1sXCI7XHJcblxyXG4gICAgICB0aGlzLnNldENvbnRlbnQoc2xpZGUsIHRoaXMudHJhbnNsYXRlKHNsaWRlLCBzbGlkZS5vcHRzLmVycm9yVHBsKSk7XHJcblxyXG4gICAgICBpZiAoc2xpZGUucG9zID09PSB0aGlzLmN1cnJQb3MpIHtcclxuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gU2hvdyBsb2FkaW5nIGljb24gaW5zaWRlIHRoZSBzbGlkZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNob3dMb2FkaW5nOiBmdW5jdGlvbihzbGlkZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICBzbGlkZSA9IHNsaWRlIHx8IHNlbGYuY3VycmVudDtcclxuXHJcbiAgICAgIGlmIChzbGlkZSAmJiAhc2xpZGUuJHNwaW5uZXIpIHtcclxuICAgICAgICBzbGlkZS4kc3Bpbm5lciA9ICQoc2VsZi50cmFuc2xhdGUoc2VsZiwgc2VsZi5vcHRzLnNwaW5uZXJUcGwpKVxyXG4gICAgICAgICAgLmFwcGVuZFRvKHNsaWRlLiRzbGlkZSlcclxuICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgIC5mYWRlSW4oXCJmYXN0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFJlbW92ZSBsb2FkaW5nIGljb24gZnJvbSB0aGUgc2xpZGVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBoaWRlTG9hZGluZzogZnVuY3Rpb24oc2xpZGUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgc2xpZGUgPSBzbGlkZSB8fCBzZWxmLmN1cnJlbnQ7XHJcblxyXG4gICAgICBpZiAoc2xpZGUgJiYgc2xpZGUuJHNwaW5uZXIpIHtcclxuICAgICAgICBzbGlkZS4kc3Bpbm5lci5zdG9wKCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGRlbGV0ZSBzbGlkZS4kc3Bpbm5lcjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBBZGp1c3RtZW50cyBhZnRlciBzbGlkZSBjb250ZW50IGhhcyBiZWVuIGxvYWRlZFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhZnRlckxvYWQ6IGZ1bmN0aW9uKHNsaWRlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2xpZGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHNsaWRlLmlzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHNlbGYudHJpZ2dlcihcImFmdGVyTG9hZFwiLCBzbGlkZSk7XHJcblxyXG4gICAgICBzZWxmLmhpZGVMb2FkaW5nKHNsaWRlKTtcclxuXHJcbiAgICAgIC8vIEFkZCBzbWFsbCBjbG9zZSBidXR0b25cclxuICAgICAgaWYgKHNsaWRlLm9wdHMuc21hbGxCdG4gJiYgKCFzbGlkZS4kc21hbGxCdG4gfHwgIXNsaWRlLiRzbWFsbEJ0bi5sZW5ndGgpKSB7XHJcbiAgICAgICAgc2xpZGUuJHNtYWxsQnRuID0gJChzZWxmLnRyYW5zbGF0ZShzbGlkZSwgc2xpZGUub3B0cy5idG5UcGwuc21hbGxCdG4pKS5hcHBlbmRUbyhzbGlkZS4kY29udGVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERpc2FibGUgcmlnaHQgY2xpY2tcclxuICAgICAgaWYgKHNsaWRlLm9wdHMucHJvdGVjdCAmJiBzbGlkZS4kY29udGVudCAmJiAhc2xpZGUuaGFzRXJyb3IpIHtcclxuICAgICAgICBzbGlkZS4kY29udGVudC5vbihcImNvbnRleHRtZW51LmZiXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGZha2UgZWxlbWVudCBvbiB0b3Agb2YgdGhlIGltYWdlXHJcbiAgICAgICAgLy8gVGhpcyBtYWtlcyBhIGJpdCBoYXJkZXIgZm9yIHVzZXIgdG8gc2VsZWN0IGltYWdlXHJcbiAgICAgICAgaWYgKHNsaWRlLnR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG4gICAgICAgICAgJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXNwYWNlYmFsbFwiPjwvZGl2PicpLmFwcGVuZFRvKHNsaWRlLiRjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYuYWRqdXN0Q2FwdGlvbihzbGlkZSk7XHJcblxyXG4gICAgICBzZWxmLmFkanVzdExheW91dChzbGlkZSk7XHJcblxyXG4gICAgICBpZiAoc2xpZGUucG9zID09PSBzZWxmLmN1cnJQb3MpIHtcclxuICAgICAgICBzZWxmLnVwZGF0ZUN1cnNvcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnJldmVhbENvbnRlbnQoc2xpZGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBQcmV2ZW50IGNhcHRpb24gb3ZlcmxhcCxcclxuICAgIC8vIGZpeCBjc3MgaW5jb25zaXN0ZW5jeSBhY3Jvc3MgYnJvd3NlcnNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhZGp1c3RDYXB0aW9uOiBmdW5jdGlvbihzbGlkZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY3VycmVudCA9IHNsaWRlIHx8IHNlbGYuY3VycmVudCxcclxuICAgICAgICBjYXB0aW9uID0gY3VycmVudC5vcHRzLmNhcHRpb24sXHJcbiAgICAgICAgcHJldmVudE92ZXJsYXAgPSBjdXJyZW50Lm9wdHMucHJldmVudENhcHRpb25PdmVybGFwLFxyXG4gICAgICAgICRjYXB0aW9uID0gc2VsZi4kcmVmcy5jYXB0aW9uLFxyXG4gICAgICAgICRjbG9uZSxcclxuICAgICAgICBjYXB0aW9uSCA9IGZhbHNlO1xyXG5cclxuICAgICAgJGNhcHRpb24udG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1jYXB0aW9uLS1zZXBhcmF0ZVwiLCBwcmV2ZW50T3ZlcmxhcCk7XHJcblxyXG4gICAgICBpZiAocHJldmVudE92ZXJsYXAgJiYgY2FwdGlvbiAmJiBjYXB0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50LnBvcyAhPT0gc2VsZi5jdXJyUG9zKSB7XHJcbiAgICAgICAgICAkY2xvbmUgPSAkY2FwdGlvbi5jbG9uZSgpLmFwcGVuZFRvKCRjYXB0aW9uLnBhcmVudCgpKTtcclxuXHJcbiAgICAgICAgICAkY2xvbmVcclxuICAgICAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgLmVxKDApXHJcbiAgICAgICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgICAgIC5odG1sKGNhcHRpb24pO1xyXG5cclxuICAgICAgICAgIGNhcHRpb25IID0gJGNsb25lLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuICAgICAgICAgICRjbG9uZS5lbXB0eSgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi4kY2FwdGlvbikge1xyXG4gICAgICAgICAgY2FwdGlvbkggPSBzZWxmLiRjYXB0aW9uLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudC4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIiwgY2FwdGlvbkggfHwgXCJcIik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gU2ltcGxlIGhhY2sgdG8gZml4IGluY29uc2lzdGVuY3kgYWNyb3NzIGJyb3dzZXJzLCBkZXNjcmliZWQgaGVyZSAoYWZmZWN0cyBFZGdlLCB0b28pOlxyXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzQ4NTE4XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhZGp1c3RMYXlvdXQ6IGZ1bmN0aW9uKHNsaWRlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBjdXJyZW50ID0gc2xpZGUgfHwgc2VsZi5jdXJyZW50LFxyXG4gICAgICAgIHNjcm9sbEhlaWdodCxcclxuICAgICAgICBtYXJnaW5Cb3R0b20sXHJcbiAgICAgICAgaW5saW5lUGFkZGluZyxcclxuICAgICAgICBhY3R1YWxQYWRkaW5nO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnQuaXNMb2FkZWQgJiYgY3VycmVudC5vcHRzLmRpc2FibGVMYXlvdXRGaXggIT09IHRydWUpIHtcclxuICAgICAgICBjdXJyZW50LiRjb250ZW50LmNzcyhcIm1hcmdpbi1ib3R0b21cIiwgXCJcIik7XHJcblxyXG4gICAgICAgIC8vIElmIHdlIHdvdWxkIGFsd2F5cyBzZXQgbWFyZ2luLWJvdHRvbSBmb3IgdGhlIGNvbnRlbnQsXHJcbiAgICAgICAgLy8gdGhlbiBpdCB3b3VsZCBwb3RlbnRpYWxseSBicmVhayB2ZXJ0aWNhbCBhbGlnblxyXG4gICAgICAgIGlmIChjdXJyZW50LiRjb250ZW50Lm91dGVySGVpZ2h0KCkgPiBjdXJyZW50LiRzbGlkZS5oZWlnaHQoKSArIDAuNSkge1xyXG4gICAgICAgICAgaW5saW5lUGFkZGluZyA9IGN1cnJlbnQuJHNsaWRlWzBdLnN0eWxlW1wicGFkZGluZy1ib3R0b21cIl07XHJcbiAgICAgICAgICBhY3R1YWxQYWRkaW5nID0gY3VycmVudC4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIik7XHJcblxyXG4gICAgICAgICAgaWYgKHBhcnNlRmxvYXQoYWN0dWFsUGFkZGluZykgPiAwKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IGN1cnJlbnQuJHNsaWRlWzBdLnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnQuJHNsaWRlLmNzcyhcInBhZGRpbmctYm90dG9tXCIsIDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNjcm9sbEhlaWdodCAtIGN1cnJlbnQuJHNsaWRlWzBdLnNjcm9sbEhlaWdodCkgPCAxKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gYWN0dWFsUGFkZGluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VycmVudC4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIiwgaW5saW5lUGFkZGluZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50LiRjb250ZW50LmNzcyhcIm1hcmdpbi1ib3R0b21cIiwgbWFyZ2luQm90dG9tKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBNYWtlIGNvbnRlbnQgdmlzaWJsZVxyXG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGNvbnRlbnQgaGFzIGJlZW4gbG9hZGVkIG9yXHJcbiAgICAvLyB1c2VyIG5hdmlnYXRlcyBnYWxsZXJ5IGFuZCB0cmFuc2l0aW9uIHNob3VsZCBzdGFydFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmV2ZWFsQ29udGVudDogZnVuY3Rpb24oc2xpZGUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICRzbGlkZSA9IHNsaWRlLiRzbGlkZSxcclxuICAgICAgICBlbmQgPSBmYWxzZSxcclxuICAgICAgICBzdGFydCA9IGZhbHNlLFxyXG4gICAgICAgIGlzTW92ZWQgPSBzZWxmLmlzTW92ZWQoc2xpZGUpLFxyXG4gICAgICAgIGlzUmV2ZWFsZWQgPSBzbGlkZS5pc1JldmVhbGVkLFxyXG4gICAgICAgIGVmZmVjdCxcclxuICAgICAgICBlZmZlY3RDbGFzc05hbWUsXHJcbiAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgb3BhY2l0eTtcclxuXHJcbiAgICAgIHNsaWRlLmlzUmV2ZWFsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgZWZmZWN0ID0gc2xpZGUub3B0c1tzZWxmLmZpcnN0UnVuID8gXCJhbmltYXRpb25FZmZlY3RcIiA6IFwidHJhbnNpdGlvbkVmZmVjdFwiXTtcclxuICAgICAgZHVyYXRpb24gPSBzbGlkZS5vcHRzW3NlbGYuZmlyc3RSdW4gPyBcImFuaW1hdGlvbkR1cmF0aW9uXCIgOiBcInRyYW5zaXRpb25EdXJhdGlvblwiXTtcclxuXHJcbiAgICAgIGR1cmF0aW9uID0gcGFyc2VJbnQoc2xpZGUuZm9yY2VkRHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IGR1cmF0aW9uIDogc2xpZGUuZm9yY2VkRHVyYXRpb24sIDEwKTtcclxuXHJcbiAgICAgIGlmIChpc01vdmVkIHx8IHNsaWRlLnBvcyAhPT0gc2VsZi5jdXJyUG9zIHx8ICFkdXJhdGlvbikge1xyXG4gICAgICAgIGVmZmVjdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDaGVjayBpZiBjYW4gem9vbVxyXG4gICAgICBpZiAoZWZmZWN0ID09PSBcInpvb21cIikge1xyXG4gICAgICAgIGlmIChzbGlkZS5wb3MgPT09IHNlbGYuY3VyclBvcyAmJiBkdXJhdGlvbiAmJiBzbGlkZS50eXBlID09PSBcImltYWdlXCIgJiYgIXNsaWRlLmhhc0Vycm9yICYmIChzdGFydCA9IHNlbGYuZ2V0VGh1bWJQb3Moc2xpZGUpKSkge1xyXG4gICAgICAgICAgZW5kID0gc2VsZi5nZXRGaXRQb3Moc2xpZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlZmZlY3QgPSBcImZhZGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFpvb20gYW5pbWF0aW9uXHJcbiAgICAgIC8vID09PT09PT09PT09PT09XHJcbiAgICAgIGlmIChlZmZlY3QgPT09IFwiem9vbVwiKSB7XHJcbiAgICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGVuZC5zY2FsZVggPSBlbmQud2lkdGggLyBzdGFydC53aWR0aDtcclxuICAgICAgICBlbmQuc2NhbGVZID0gZW5kLmhlaWdodCAvIHN0YXJ0LmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBhbmltYXRlIG9wYWNpdHlcclxuICAgICAgICBvcGFjaXR5ID0gc2xpZGUub3B0cy56b29tT3BhY2l0eTtcclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgPT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSBNYXRoLmFicyhzbGlkZS53aWR0aCAvIHNsaWRlLmhlaWdodCAtIHN0YXJ0LndpZHRoIC8gc3RhcnQuaGVpZ2h0KSA+IDAuMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5KSB7XHJcbiAgICAgICAgICBzdGFydC5vcGFjaXR5ID0gMC4xO1xyXG4gICAgICAgICAgZW5kLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRHJhdyBpbWFnZSBhdCBzdGFydCBwb3NpdGlvblxyXG4gICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKHNsaWRlLiRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpLCBzdGFydCk7XHJcblxyXG4gICAgICAgIGZvcmNlUmVkcmF3KHNsaWRlLiRjb250ZW50KTtcclxuXHJcbiAgICAgICAgLy8gU3RhcnQgYW5pbWF0aW9uXHJcbiAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKHNsaWRlLiRjb250ZW50LCBlbmQsIGR1cmF0aW9uLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBzZWxmLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi51cGRhdGVTbGlkZShzbGlkZSk7XHJcblxyXG4gICAgICAvLyBTaW1wbHkgc2hvdyBjb250ZW50IGlmIG5vIGVmZmVjdFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBpZiAoIWVmZmVjdCkge1xyXG4gICAgICAgIHNsaWRlLiRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUmV2ZWFsZWQgJiYgaXNNb3ZlZCAmJiBzbGlkZS50eXBlID09PSBcImltYWdlXCIgJiYgIXNsaWRlLmhhc0Vycm9yKSB7XHJcbiAgICAgICAgICBzbGlkZS4kY29udGVudC5oaWRlKCkuZmFkZUluKFwiZmFzdFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzbGlkZS5wb3MgPT09IHNlbGYuY3VyclBvcykge1xyXG4gICAgICAgICAgc2VsZi5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcmVwYXJlIGZvciBDU1MgdHJhbnNpdG9uXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgJC5mYW5jeWJveC5zdG9wKCRzbGlkZSk7XHJcblxyXG4gICAgICAvL2VmZmVjdENsYXNzTmFtZSA9IFwiZmFuY3lib3gtYW5pbWF0ZWQgZmFuY3lib3gtc2xpZGUtLVwiICsgKHNsaWRlLnBvcyA+PSBzZWxmLnByZXZQb3MgPyBcIm5leHRcIiA6IFwicHJldmlvdXNcIikgKyBcIiBmYW5jeWJveC1meC1cIiArIGVmZmVjdDtcclxuICAgICAgZWZmZWN0Q2xhc3NOYW1lID0gXCJmYW5jeWJveC1zbGlkZS0tXCIgKyAoc2xpZGUucG9zID49IHNlbGYucHJldlBvcyA/IFwibmV4dFwiIDogXCJwcmV2aW91c1wiKSArIFwiIGZhbmN5Ym94LWFuaW1hdGVkIGZhbmN5Ym94LWZ4LVwiICsgZWZmZWN0O1xyXG5cclxuICAgICAgJHNsaWRlLmFkZENsYXNzKGVmZmVjdENsYXNzTmFtZSkucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY3VycmVudFwiKTsgLy8uYWRkQ2xhc3MoZWZmZWN0Q2xhc3NOYW1lKTtcclxuXHJcbiAgICAgIHNsaWRlLiRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgLy8gRm9yY2UgcmVmbG93XHJcbiAgICAgIGZvcmNlUmVkcmF3KCRzbGlkZSk7XHJcblxyXG4gICAgICBpZiAoc2xpZGUudHlwZSAhPT0gXCJpbWFnZVwiKSB7XHJcbiAgICAgICAgc2xpZGUuJGNvbnRlbnQuaGlkZSgpLnNob3coMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICAkc2xpZGUsXHJcbiAgICAgICAgXCJmYW5jeWJveC1zbGlkZS0tY3VycmVudFwiLFxyXG4gICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJHNsaWRlLnJlbW92ZUNsYXNzKGVmZmVjdENsYXNzTmFtZSkuY3NzKHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcIlwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBcIlwiXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2xpZGUucG9zID09PSBzZWxmLmN1cnJQb3MpIHtcclxuICAgICAgICAgICAgc2VsZi5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDaGVjayBpZiB3ZSBjYW4gYW5kIGhhdmUgdG8gem9vbSBmcm9tIHRodW1ibmFpbFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBnZXRUaHVtYlBvczogZnVuY3Rpb24oc2xpZGUpIHtcclxuICAgICAgdmFyIHJleiA9IGZhbHNlLFxyXG4gICAgICAgICR0aHVtYiA9IHNsaWRlLiR0aHVtYixcclxuICAgICAgICB0aHVtYlBvcyxcclxuICAgICAgICBidHcsXHJcbiAgICAgICAgYnJ3LFxyXG4gICAgICAgIGJidyxcclxuICAgICAgICBibHc7XHJcblxyXG4gICAgICBpZiAoISR0aHVtYiB8fCAhaW5WaWV3cG9ydCgkdGh1bWJbMF0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aHVtYlBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCR0aHVtYik7XHJcblxyXG4gICAgICBidHcgPSBwYXJzZUZsb2F0KCR0aHVtYi5jc3MoXCJib3JkZXItdG9wLXdpZHRoXCIpIHx8IDApO1xyXG4gICAgICBicncgPSBwYXJzZUZsb2F0KCR0aHVtYi5jc3MoXCJib3JkZXItcmlnaHQtd2lkdGhcIikgfHwgMCk7XHJcbiAgICAgIGJidyA9IHBhcnNlRmxvYXQoJHRodW1iLmNzcyhcImJvcmRlci1ib3R0b20td2lkdGhcIikgfHwgMCk7XHJcbiAgICAgIGJsdyA9IHBhcnNlRmxvYXQoJHRodW1iLmNzcyhcImJvcmRlci1sZWZ0LXdpZHRoXCIpIHx8IDApO1xyXG5cclxuICAgICAgcmV6ID0ge1xyXG4gICAgICAgIHRvcDogdGh1bWJQb3MudG9wICsgYnR3LFxyXG4gICAgICAgIGxlZnQ6IHRodW1iUG9zLmxlZnQgKyBibHcsXHJcbiAgICAgICAgd2lkdGg6IHRodW1iUG9zLndpZHRoIC0gYnJ3IC0gYmx3LFxyXG4gICAgICAgIGhlaWdodDogdGh1bWJQb3MuaGVpZ2h0IC0gYnR3IC0gYmJ3LFxyXG4gICAgICAgIHNjYWxlWDogMSxcclxuICAgICAgICBzY2FsZVk6IDFcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiB0aHVtYlBvcy53aWR0aCA+IDAgJiYgdGh1bWJQb3MuaGVpZ2h0ID4gMCA/IHJleiA6IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBGaW5hbCBhZGp1c3RtZW50cyBhZnRlciBjdXJyZW50IGdhbGxlcnkgaXRlbSBpcyBtb3ZlZCB0byBwb3NpdGlvblxyXG4gICAgLy8gYW5kIGl0YHMgY29udGVudCBpcyBsb2FkZWRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXHJcbiAgICAgICAgc2xpZGVzID0ge30sXHJcbiAgICAgICAgJGVsO1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXNNb3ZlZCgpIHx8ICFjdXJyZW50LmlzTG9hZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWN1cnJlbnQuaXNDb21wbGV0ZSkge1xyXG4gICAgICAgIGN1cnJlbnQuaXNDb21wbGV0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGN1cnJlbnQuJHNsaWRlLnNpYmxpbmdzKCkudHJpZ2dlcihcIm9uUmVzZXRcIik7XHJcblxyXG4gICAgICAgIHNlbGYucHJlbG9hZChcImlubGluZVwiKTtcclxuXHJcbiAgICAgICAgLy8gVHJpZ2dlciBhbnkgQ1NTIHRyYW5zaXRvbiBpbnNpZGUgdGhlIHNsaWRlXHJcbiAgICAgICAgZm9yY2VSZWRyYXcoY3VycmVudC4kc2xpZGUpO1xyXG5cclxuICAgICAgICBjdXJyZW50LiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jb21wbGV0ZVwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHVubmVjZXNzYXJ5IHNsaWRlc1xyXG4gICAgICAgICQuZWFjaChzZWxmLnNsaWRlcywgZnVuY3Rpb24oa2V5LCBzbGlkZSkge1xyXG4gICAgICAgICAgaWYgKHNsaWRlLnBvcyA+PSBzZWxmLmN1cnJQb3MgLSAxICYmIHNsaWRlLnBvcyA8PSBzZWxmLmN1cnJQb3MgKyAxKSB7XHJcbiAgICAgICAgICAgIHNsaWRlc1tzbGlkZS5wb3NdID0gc2xpZGU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlKSB7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guc3RvcChzbGlkZS4kc2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgc2xpZGUuJHNsaWRlLm9mZigpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLnNsaWRlcyA9IHNsaWRlcztcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgc2VsZi51cGRhdGVDdXJzb3IoKTtcclxuXHJcbiAgICAgIHNlbGYudHJpZ2dlcihcImFmdGVyU2hvd1wiKTtcclxuXHJcbiAgICAgIC8vIEF1dG9wbGF5IGZpcnN0IGh0bWw1IHZpZGVvL2F1ZGlvXHJcbiAgICAgIGlmICghIWN1cnJlbnQub3B0cy52aWRlby5hdXRvU3RhcnQpIHtcclxuICAgICAgICBjdXJyZW50LiRzbGlkZVxyXG4gICAgICAgICAgLmZpbmQoXCJ2aWRlbyxhdWRpb1wiKVxyXG4gICAgICAgICAgLmZpbHRlcihcIjp2aXNpYmxlOmZpcnN0XCIpXHJcbiAgICAgICAgICAudHJpZ2dlcihcInBsYXlcIilcclxuICAgICAgICAgIC5vbmUoXCJlbmRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgICB0aGlzLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYubmV4dCgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRyeSB0byBmb2N1cyBvbiB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnRcclxuICAgICAgaWYgKGN1cnJlbnQub3B0cy5hdXRvRm9jdXMgJiYgY3VycmVudC5jb250ZW50VHlwZSA9PT0gXCJodG1sXCIpIHtcclxuICAgICAgICAvLyBMb29rIGZvciB0aGUgZmlyc3QgaW5wdXQgd2l0aCBhdXRvZm9jdXMgYXR0cmlidXRlXHJcbiAgICAgICAgJGVsID0gY3VycmVudC4kY29udGVudC5maW5kKFwiaW5wdXRbYXV0b2ZvY3VzXTplbmFibGVkOnZpc2libGU6Zmlyc3RcIik7XHJcblxyXG4gICAgICAgIGlmICgkZWwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAkZWwudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZWxmLmZvY3VzKG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXZvaWQganVtcGluZ1xyXG4gICAgICBjdXJyZW50LiRzbGlkZS5zY3JvbGxUb3AoMCkuc2Nyb2xsTGVmdCgwKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUHJlbG9hZCBuZXh0IGFuZCBwcmV2aW91cyBzbGlkZXNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcHJlbG9hZDogZnVuY3Rpb24odHlwZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgcHJldixcclxuICAgICAgICBuZXh0O1xyXG5cclxuICAgICAgaWYgKHNlbGYuZ3JvdXAubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV4dCA9IHNlbGYuc2xpZGVzW3NlbGYuY3VyclBvcyArIDFdO1xyXG4gICAgICBwcmV2ID0gc2VsZi5zbGlkZXNbc2VsZi5jdXJyUG9zIC0gMV07XHJcblxyXG4gICAgICBpZiAocHJldiAmJiBwcmV2LnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICBzZWxmLmxvYWRTbGlkZShwcmV2KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5leHQgJiYgbmV4dC50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgc2VsZi5sb2FkU2xpZGUobmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gVHJ5IHRvIGZpbmQgYW5kIGZvY3VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGZvY3VzOiBmdW5jdGlvbihlLCBmaXJzdFJ1bikge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZm9jdXNhYmxlU3RyID0gW1xyXG4gICAgICAgICAgXCJhW2hyZWZdXCIsXHJcbiAgICAgICAgICBcImFyZWFbaHJlZl1cIixcclxuICAgICAgICAgICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG4gICAgICAgICAgXCJzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKVwiLFxyXG4gICAgICAgICAgXCJ0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXHJcbiAgICAgICAgICBcImJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXHJcbiAgICAgICAgICBcImlmcmFtZVwiLFxyXG4gICAgICAgICAgXCJvYmplY3RcIixcclxuICAgICAgICAgIFwiZW1iZWRcIixcclxuICAgICAgICAgIFwidmlkZW9cIixcclxuICAgICAgICAgIFwiYXVkaW9cIixcclxuICAgICAgICAgIFwiW2NvbnRlbnRlZGl0YWJsZV1cIixcclxuICAgICAgICAgICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXHJcbiAgICAgICAgXS5qb2luKFwiLFwiKSxcclxuICAgICAgICBmb2N1c2FibGVJdGVtcyxcclxuICAgICAgICBmb2N1c2VkSXRlbUluZGV4O1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXNDbG9zaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZSB8fCAhc2VsZi5jdXJyZW50IHx8ICFzZWxmLmN1cnJlbnQuaXNDb21wbGV0ZSkge1xyXG4gICAgICAgIC8vIEZvY3VzIG9uIGFueSBlbGVtZW50IGluc2lkZSBmYW5jeWJveFxyXG4gICAgICAgIGZvY3VzYWJsZUl0ZW1zID0gc2VsZi4kcmVmcy5jb250YWluZXIuZmluZChcIio6dmlzaWJsZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGb2N1cyBpbnNpZGUgY3VycmVudCBzbGlkZVxyXG4gICAgICAgIGZvY3VzYWJsZUl0ZW1zID0gc2VsZi5jdXJyZW50LiRzbGlkZS5maW5kKFwiKjp2aXNpYmxlXCIgKyAoZmlyc3RSdW4gPyBcIjpub3QoLmZhbmN5Ym94LWNsb3NlLXNtYWxsKVwiIDogXCJcIikpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb2N1c2FibGVJdGVtcyA9IGZvY3VzYWJsZUl0ZW1zLmZpbHRlcihmb2N1c2FibGVTdHIpLmZpbHRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gJCh0aGlzKS5jc3MoXCJ2aXNpYmlsaXR5XCIpICE9PSBcImhpZGRlblwiICYmICEkKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGZvY3VzYWJsZUl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGZvY3VzZWRJdGVtSW5kZXggPSBmb2N1c2FibGVJdGVtcy5pbmRleChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGUgJiYgZS5zaGlmdEtleSkge1xyXG4gICAgICAgICAgLy8gQmFjayB0YWJcclxuICAgICAgICAgIGlmIChmb2N1c2VkSXRlbUluZGV4IDwgMCB8fCBmb2N1c2VkSXRlbUluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgZm9jdXNhYmxlSXRlbXMuZXEoZm9jdXNhYmxlSXRlbXMubGVuZ3RoIC0gMSkudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBPdXRzaWRlIG9yIEZvcndhcmQgdGFiXHJcbiAgICAgICAgICBpZiAoZm9jdXNlZEl0ZW1JbmRleCA8IDAgfHwgZm9jdXNlZEl0ZW1JbmRleCA9PSBmb2N1c2FibGVJdGVtcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb2N1c2FibGVJdGVtcy5lcSgwKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBBY3RpdmF0ZXMgY3VycmVudCBpbnN0YW5jZSAtIGJyaW5ncyBjb250YWluZXIgdG8gdGhlIGZyb250IGFuZCBlbmFibGVzIGtleWJvYXJkLFxyXG4gICAgLy8gbm90aWZpZXMgb3RoZXIgaW5zdGFuY2VzIGFib3V0IGRlYWN0aXZhdGluZ1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAvLyBEZWFjdGl2YXRlIGFsbCBpbnN0YW5jZXNcclxuICAgICAgJChcIi5mYW5jeWJveC1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSAkKHRoaXMpLmRhdGEoXCJGYW5jeUJveFwiKTtcclxuXHJcbiAgICAgICAgLy8gU2tpcCBzZWxmIGFuZCBjbG9zaW5nIGluc3RhbmNlc1xyXG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5pZCAhPT0gc2VsZi5pZCAmJiAhaW5zdGFuY2UuaXNDbG9zaW5nKSB7XHJcbiAgICAgICAgICBpbnN0YW5jZS50cmlnZ2VyKFwib25EZWFjdGl2YXRlXCIpO1xyXG5cclxuICAgICAgICAgIGluc3RhbmNlLnJlbW92ZUV2ZW50cygpO1xyXG5cclxuICAgICAgICAgIGluc3RhbmNlLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxmLmlzVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICBpZiAoc2VsZi5jdXJyZW50IHx8IHNlbGYuaXNJZGxlKSB7XHJcbiAgICAgICAgc2VsZi51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgc2VsZi51cGRhdGVDb250cm9scygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnRyaWdnZXIoXCJvbkFjdGl2YXRlXCIpO1xyXG5cclxuICAgICAgc2VsZi5hZGRFdmVudHMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gU3RhcnQgY2xvc2luZyBwcm9jZWR1cmVcclxuICAgIC8vIFRoaXMgd2lsbCBzdGFydCBcInpvb20tb3V0XCIgYW5pbWF0aW9uIGlmIG5lZWRlZCBhbmQgY2xlYW4gZXZlcnl0aGluZyB1cCBhZnRlcndhcmRzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjbG9zZTogZnVuY3Rpb24oZSwgZCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcclxuICAgICAgICBlZmZlY3QsXHJcbiAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgJGNvbnRlbnQsXHJcbiAgICAgICAgZG9tUmVjdCxcclxuICAgICAgICBvcGFjaXR5LFxyXG4gICAgICAgIHN0YXJ0LFxyXG4gICAgICAgIGVuZDtcclxuXHJcbiAgICAgIHZhciBkb25lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2VsZi5jbGVhblVwKGUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXNDbG9zaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLmlzQ2xvc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAvLyBJZiBiZWZvcmVDbG9zZSBjYWxsYmFjayBwcmV2ZW50cyBjbG9zaW5nLCBtYWtlIHN1cmUgY29udGVudCBpcyBjZW50ZXJlZFxyXG4gICAgICBpZiAoc2VsZi50cmlnZ2VyKFwiYmVmb3JlQ2xvc2VcIiwgZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgc2VsZi5pc0Nsb3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFGcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNlbGYudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudHNcclxuICAgICAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIGluc3RhbmNlcywgdGhleSB3aWxsIGJlIHNldCBhZ2FpbiBieSBcImFjdGl2YXRlXCIgbWV0aG9kXHJcbiAgICAgIHNlbGYucmVtb3ZlRXZlbnRzKCk7XHJcblxyXG4gICAgICAkY29udGVudCA9IGN1cnJlbnQuJGNvbnRlbnQ7XHJcbiAgICAgIGVmZmVjdCA9IGN1cnJlbnQub3B0cy5hbmltYXRpb25FZmZlY3Q7XHJcbiAgICAgIGR1cmF0aW9uID0gJC5pc051bWVyaWMoZCkgPyBkIDogZWZmZWN0ID8gY3VycmVudC5vcHRzLmFuaW1hdGlvbkR1cmF0aW9uIDogMDtcclxuXHJcbiAgICAgIGN1cnJlbnQuJHNsaWRlLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWNvbXBsZXRlIGZhbmN5Ym94LXNsaWRlLS1uZXh0IGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91cyBmYW5jeWJveC1hbmltYXRlZFwiKTtcclxuXHJcbiAgICAgIGlmIChlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgJC5mYW5jeWJveC5zdG9wKGN1cnJlbnQuJHNsaWRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlZmZlY3QgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVtb3ZlIG90aGVyIHNsaWRlc1xyXG4gICAgICBjdXJyZW50LiRzbGlkZVxyXG4gICAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgICAgLnRyaWdnZXIoXCJvblJlc2V0XCIpXHJcbiAgICAgICAgLnJlbW92ZSgpO1xyXG5cclxuICAgICAgLy8gVHJpZ2dlciBhbmltYXRpb25zXHJcbiAgICAgIGlmIChkdXJhdGlvbikge1xyXG4gICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1vcGVuXCIpXHJcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1jbG9zaW5nXCIpXHJcbiAgICAgICAgICAuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBkdXJhdGlvbiArIFwibXNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENsZWFuIHVwXHJcbiAgICAgIHNlbGYuaGlkZUxvYWRpbmcoY3VycmVudCk7XHJcblxyXG4gICAgICBzZWxmLmhpZGVDb250cm9scyh0cnVlKTtcclxuXHJcbiAgICAgIHNlbGYudXBkYXRlQ3Vyc29yKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBpZiBwb3NzaWJsZSB0byB6b29tLW91dFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZWZmZWN0ID09PSBcInpvb21cIiAmJlxyXG4gICAgICAgICEoJGNvbnRlbnQgJiYgZHVyYXRpb24gJiYgY3VycmVudC50eXBlID09PSBcImltYWdlXCIgJiYgIXNlbGYuaXNNb3ZlZCgpICYmICFjdXJyZW50Lmhhc0Vycm9yICYmIChlbmQgPSBzZWxmLmdldFRodW1iUG9zKGN1cnJlbnQpKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgZWZmZWN0ID0gXCJmYWRlXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlZmZlY3QgPT09IFwiem9vbVwiKSB7XHJcbiAgICAgICAgJC5mYW5jeWJveC5zdG9wKCRjb250ZW50KTtcclxuXHJcbiAgICAgICAgZG9tUmVjdCA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCRjb250ZW50KTtcclxuXHJcbiAgICAgICAgc3RhcnQgPSB7XHJcbiAgICAgICAgICB0b3A6IGRvbVJlY3QudG9wLFxyXG4gICAgICAgICAgbGVmdDogZG9tUmVjdC5sZWZ0LFxyXG4gICAgICAgICAgc2NhbGVYOiBkb21SZWN0LndpZHRoIC8gZW5kLndpZHRoLFxyXG4gICAgICAgICAgc2NhbGVZOiBkb21SZWN0LmhlaWdodCAvIGVuZC5oZWlnaHQsXHJcbiAgICAgICAgICB3aWR0aDogZW5kLndpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiBlbmQuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBhbmltYXRlIG9wYWNpdHlcclxuICAgICAgICBvcGFjaXR5ID0gY3VycmVudC5vcHRzLnpvb21PcGFjaXR5O1xyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSA9PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IE1hdGguYWJzKGN1cnJlbnQud2lkdGggLyBjdXJyZW50LmhlaWdodCAtIGVuZC53aWR0aCAvIGVuZC5oZWlnaHQpID4gMC4xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkpIHtcclxuICAgICAgICAgIGVuZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKCRjb250ZW50LCBzdGFydCk7XHJcblxyXG4gICAgICAgIGZvcmNlUmVkcmF3KCRjb250ZW50KTtcclxuXHJcbiAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKCRjb250ZW50LCBlbmQsIGR1cmF0aW9uLCBkb25lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlZmZlY3QgJiYgZHVyYXRpb24pIHtcclxuICAgICAgICAkLmZhbmN5Ym94LmFuaW1hdGUoXHJcbiAgICAgICAgICBjdXJyZW50LiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIpLFxyXG4gICAgICAgICAgXCJmYW5jeWJveC1hbmltYXRlZCBmYW5jeWJveC1meC1cIiArIGVmZmVjdCxcclxuICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgZG9uZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSWYgc2tpcCBhbmltYXRpb25cclxuICAgICAgICBpZiAoZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dChkb25lLCBkdXJhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBGaW5hbCBhZGp1c3RtZW50cyBhZnRlciByZW1vdmluZyB0aGUgaW5zdGFuY2VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGNsZWFuVXA6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGluc3RhbmNlLFxyXG4gICAgICAgICRmb2N1cyA9IHNlbGYuY3VycmVudC5vcHRzLiRvcmlnLFxyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeTtcclxuXHJcbiAgICAgIHNlbGYuY3VycmVudC4kc2xpZGUudHJpZ2dlcihcIm9uUmVzZXRcIik7XHJcblxyXG4gICAgICBzZWxmLiRyZWZzLmNvbnRhaW5lci5lbXB0eSgpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgc2VsZi50cmlnZ2VyKFwiYWZ0ZXJDbG9zZVwiLCBlKTtcclxuXHJcbiAgICAgIC8vIFBsYWNlIGJhY2sgZm9jdXNcclxuICAgICAgaWYgKCEhc2VsZi5jdXJyZW50Lm9wdHMuYmFja0ZvY3VzKSB7XHJcbiAgICAgICAgaWYgKCEkZm9jdXMgfHwgISRmb2N1cy5sZW5ndGggfHwgISRmb2N1cy5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAkZm9jdXMgPSBzZWxmLiR0cmlnZ2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRmb2N1cyAmJiAkZm9jdXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB4ID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgICB5ID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgICAgICAgJGZvY3VzLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuXHJcbiAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKVxyXG4gICAgICAgICAgICAuc2Nyb2xsVG9wKHkpXHJcbiAgICAgICAgICAgIC5zY3JvbGxMZWZ0KHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5jdXJyZW50ID0gbnVsbDtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBvdGhlciBpbnN0YW5jZXNcclxuICAgICAgaW5zdGFuY2UgPSAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgICBpZiAoaW5zdGFuY2UpIHtcclxuICAgICAgICBpbnN0YW5jZS5hY3RpdmF0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYWN0aXZlIGNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhclwiKTtcclxuXHJcbiAgICAgICAgJChcIiNmYW5jeWJveC1zdHlsZS1ub3Njcm9sbFwiKS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDYWxsIGNhbGxiYWNrIGFuZCB0cmlnZ2VyIGFuIGV2ZW50XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24obmFtZSwgc2xpZGUpIHtcclxuICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxyXG4gICAgICAgIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIG9iaiA9IHNsaWRlICYmIHNsaWRlLm9wdHMgPyBzbGlkZSA6IHNlbGYuY3VycmVudCxcclxuICAgICAgICByZXo7XHJcblxyXG4gICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgYXJncy51bnNoaWZ0KG9iaik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqID0gc2VsZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXJncy51bnNoaWZ0KHNlbGYpO1xyXG5cclxuICAgICAgaWYgKCQuaXNGdW5jdGlvbihvYmoub3B0c1tuYW1lXSkpIHtcclxuICAgICAgICByZXogPSBvYmoub3B0c1tuYW1lXS5hcHBseShvYmosIGFyZ3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmV6ID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiByZXo7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuYW1lID09PSBcImFmdGVyQ2xvc2VcIiB8fCAhc2VsZi4kcmVmcykge1xyXG4gICAgICAgICRELnRyaWdnZXIobmFtZSArIFwiLmZiXCIsIGFyZ3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLnRyaWdnZXIobmFtZSArIFwiLmZiXCIsIGFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVwZGF0ZSBpbmZvYmFyIHZhbHVlcywgbmF2aWdhdGlvbiBidXR0b24gc3RhdGVzIGFuZCByZXZlYWwgY2FwdGlvblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgdXBkYXRlQ29udHJvbHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcclxuICAgICAgICBpbmRleCA9IGN1cnJlbnQuaW5kZXgsXHJcbiAgICAgICAgJGNvbnRhaW5lciA9IHNlbGYuJHJlZnMuY29udGFpbmVyLFxyXG4gICAgICAgICRjYXB0aW9uID0gc2VsZi4kcmVmcy5jYXB0aW9uLFxyXG4gICAgICAgIGNhcHRpb24gPSBjdXJyZW50Lm9wdHMuY2FwdGlvbjtcclxuXHJcbiAgICAgIC8vIFJlY2FsY3VsYXRlIGNvbnRlbnQgZGltZW5zaW9uc1xyXG4gICAgICBjdXJyZW50LiRzbGlkZS50cmlnZ2VyKFwicmVmcmVzaFwiKTtcclxuXHJcbiAgICAgIC8vIFNldCBjYXB0aW9uXHJcbiAgICAgIGlmIChjYXB0aW9uICYmIGNhcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgc2VsZi4kY2FwdGlvbiA9ICRjYXB0aW9uO1xyXG5cclxuICAgICAgICAkY2FwdGlvblxyXG4gICAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAgIC5lcSgwKVxyXG4gICAgICAgICAgLmh0bWwoY2FwdGlvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi4kY2FwdGlvbiA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghc2VsZi5oYXNIaWRkZW5Db250cm9scyAmJiAhc2VsZi5pc0lkbGUpIHtcclxuICAgICAgICBzZWxmLnNob3dDb250cm9scygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVcGRhdGUgaW5mbyBhbmQgbmF2aWdhdGlvbiBlbGVtZW50c1xyXG4gICAgICAkY29udGFpbmVyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1jb3VudF1cIikuaHRtbChzZWxmLmdyb3VwLmxlbmd0aCk7XHJcbiAgICAgICRjb250YWluZXIuZmluZChcIltkYXRhLWZhbmN5Ym94LWluZGV4XVwiKS5odG1sKGluZGV4ICsgMSk7XHJcblxyXG4gICAgICAkY29udGFpbmVyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1wcmV2XVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgIWN1cnJlbnQub3B0cy5sb29wICYmIGluZGV4IDw9IDApO1xyXG4gICAgICAkY29udGFpbmVyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1uZXh0XVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgIWN1cnJlbnQub3B0cy5sb29wICYmIGluZGV4ID49IHNlbGYuZ3JvdXAubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICBpZiAoY3VycmVudC50eXBlID09PSBcImltYWdlXCIpIHtcclxuICAgICAgICAvLyBSZS1lbmFibGUgYnV0dG9uczsgdXBkYXRlIGRvd25sb2FkIGJ1dHRvbiBzb3VyY2VcclxuICAgICAgICAkY29udGFpbmVyXHJcbiAgICAgICAgICAuZmluZChcIltkYXRhLWZhbmN5Ym94LXpvb21dXCIpXHJcbiAgICAgICAgICAuc2hvdygpXHJcbiAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgIC5maW5kKFwiW2RhdGEtZmFuY3lib3gtZG93bmxvYWRdXCIpXHJcbiAgICAgICAgICAuYXR0cihcImhyZWZcIiwgY3VycmVudC5vcHRzLmltYWdlLnNyYyB8fCBjdXJyZW50LnNyYylcclxuICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vcHRzLnRvb2xiYXIpIHtcclxuICAgICAgICAkY29udGFpbmVyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1kb3dubG9hZF0sW2RhdGEtZmFuY3lib3gtem9vbV1cIikuaGlkZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNYWtlIHN1cmUgZm9jdXMgaXMgbm90IG9uIGRpc2FibGVkIGJ1dHRvbi9lbGVtZW50XHJcbiAgICAgIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKFwiOmhpZGRlbixbZGlzYWJsZWRdXCIpKSB7XHJcbiAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEhpZGUgdG9vbGJhciBhbmQgY2FwdGlvblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgaGlkZUNvbnRyb2xzOiBmdW5jdGlvbihhbmRDYXB0aW9uKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBhcnIgPSBbXCJpbmZvYmFyXCIsIFwidG9vbGJhclwiLCBcIm5hdlwiXTtcclxuXHJcbiAgICAgIGlmIChhbmRDYXB0aW9uIHx8ICFzZWxmLmN1cnJlbnQub3B0cy5wcmV2ZW50Q2FwdGlvbk92ZXJsYXApIHtcclxuICAgICAgICBhcnIucHVzaChcImNhcHRpb25cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJHJlZnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgIGFyclxyXG4gICAgICAgICAgLm1hcChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImZhbmN5Ym94LXNob3ctXCIgKyBpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5qb2luKFwiIFwiKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5oYXNIaWRkZW5Db250cm9scyA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dDb250cm9sczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBvcHRzID0gc2VsZi5jdXJyZW50ID8gc2VsZi5jdXJyZW50Lm9wdHMgOiBzZWxmLm9wdHMsXHJcbiAgICAgICAgJGNvbnRhaW5lciA9IHNlbGYuJHJlZnMuY29udGFpbmVyO1xyXG5cclxuICAgICAgc2VsZi5oYXNIaWRkZW5Db250cm9scyA9IGZhbHNlO1xyXG4gICAgICBzZWxmLmlkbGVTZWNvbmRzQ291bnRlciA9IDA7XHJcblxyXG4gICAgICAkY29udGFpbmVyXHJcbiAgICAgICAgLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtc2hvdy10b29sYmFyXCIsICEhKG9wdHMudG9vbGJhciAmJiBvcHRzLmJ1dHRvbnMpKVxyXG4gICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LXNob3ctaW5mb2JhclwiLCAhIShvcHRzLmluZm9iYXIgJiYgc2VsZi5ncm91cC5sZW5ndGggPiAxKSlcclxuICAgICAgICAudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LWNhcHRpb25cIiwgISFzZWxmLiRjYXB0aW9uKVxyXG4gICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LXNob3ctbmF2XCIsICEhKG9wdHMuYXJyb3dzICYmIHNlbGYuZ3JvdXAubGVuZ3RoID4gMSkpXHJcbiAgICAgICAgLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtaXMtbW9kYWxcIiwgISFvcHRzLm1vZGFsKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVG9nZ2xlIHRvb2xiYXIgYW5kIGNhcHRpb25cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgdG9nZ2xlQ29udHJvbHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5oYXNIaWRkZW5Db250cm9scykge1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29udHJvbHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkLmZhbmN5Ym94ID0ge1xyXG4gICAgdmVyc2lvbjogXCIzLjUuNlwiLFxyXG4gICAgZGVmYXVsdHM6IGRlZmF1bHRzLFxyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IGluc3RhbmNlIGFuZCBleGVjdXRlIGEgY29tbWFuZC5cclxuICAgIC8vXHJcbiAgICAvLyBFeGFtcGxlcyBvZiB1c2FnZTpcclxuICAgIC8vXHJcbiAgICAvLyAgICRpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcclxuICAgIC8vICAgJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLmp1bXBUbyggMSApO1xyXG4gICAgLy8gICAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCAnanVtcFRvJywgMSApO1xyXG4gICAgLy8gICAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgIGNvbnNvbGUuaW5mbyggdGhpcy5jdXJySW5kZXggKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBnZXRJbnN0YW5jZTogZnVuY3Rpb24oY29tbWFuZCkge1xyXG4gICAgICB2YXIgaW5zdGFuY2UgPSAkKCcuZmFuY3lib3gtY29udGFpbmVyOm5vdChcIi5mYW5jeWJveC1pcy1jbG9zaW5nXCIpOmxhc3QnKS5kYXRhKFwiRmFuY3lCb3hcIiksXHJcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcblxyXG4gICAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBGYW5jeUJveCkge1xyXG4gICAgICAgIGlmICgkLnR5cGUoY29tbWFuZCkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgIGluc3RhbmNlW2NvbW1hbmRdLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQudHlwZShjb21tYW5kKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICBjb21tYW5kLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDcmVhdGUgbmV3IGluc3RhbmNlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgb3BlbjogZnVuY3Rpb24oaXRlbXMsIG9wdHMsIGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBuZXcgRmFuY3lCb3goaXRlbXMsIG9wdHMsIGluZGV4KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ2xvc2UgY3VycmVudCBvciBhbGwgaW5zdGFuY2VzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjbG9zZTogZnVuY3Rpb24oYWxsKSB7XHJcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgIGluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGFuZCBjbG9zZSBuZXh0IGluc3RhbmNlXHJcbiAgICAgICAgaWYgKGFsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZShhbGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBDbG9zZSBhbGwgaW5zdGFuY2VzIGFuZCB1bmJpbmQgYWxsIGV2ZW50c1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcclxuXHJcbiAgICAgICRELmFkZChcImJvZHlcIikub2ZmKFwiY2xpY2suZmItc3RhcnRcIiwgXCIqKlwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVHJ5IHRvIGRldGVjdCBtb2JpbGUgZGV2aWNlc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGlzTW9iaWxlOiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcblxyXG4gICAgLy8gRGV0ZWN0IGlmICd0cmFuc2xhdGUzZCcgc3VwcG9ydCBpcyBhdmFpbGFibGVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgdXNlM2Q6IChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICYmXHJcbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGl2KSAmJlxyXG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRpdikuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKSAmJlxyXG4gICAgICAgICEoZG9jdW1lbnQuZG9jdW1lbnRNb2RlICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSA8IDExKVxyXG4gICAgICApO1xyXG4gICAgfSkoKSxcclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IGN1cnJlbnQgdmlzdWFsIHN0YXRlIG9mIGFuIGVsZW1lbnRcclxuICAgIC8vIHJldHVybnMgYXJyYXlbIHRvcCwgbGVmdCwgaG9yaXpvbnRhbC1zY2FsZSwgdmVydGljYWwtc2NhbGUsIG9wYWNpdHkgXVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgZ2V0VHJhbnNsYXRlOiBmdW5jdGlvbigkZWwpIHtcclxuICAgICAgdmFyIGRvbVJlY3Q7XHJcblxyXG4gICAgICBpZiAoISRlbCB8fCAhJGVsLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9tUmVjdCA9ICRlbFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiBkb21SZWN0LnRvcCB8fCAwLFxyXG4gICAgICAgIGxlZnQ6IGRvbVJlY3QubGVmdCB8fCAwLFxyXG4gICAgICAgIHdpZHRoOiBkb21SZWN0LndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZG9tUmVjdC5oZWlnaHQsXHJcbiAgICAgICAgb3BhY2l0eTogcGFyc2VGbG9hdCgkZWwuY3NzKFwib3BhY2l0eVwiKSlcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gU2hvcnRjdXQgZm9yIHNldHRpbmcgXCJ0cmFuc2xhdGUzZFwiIHByb3BlcnRpZXMgZm9yIGVsZW1lbnRcclxuICAgIC8vIENhbiBzZXQgYmUgdXNlZCB0byBzZXQgb3BhY2l0eSwgdG9vXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24oJGVsLCBwcm9wcykge1xyXG4gICAgICB2YXIgc3RyID0gXCJcIixcclxuICAgICAgICBjc3MgPSB7fTtcclxuXHJcbiAgICAgIGlmICghJGVsIHx8ICFwcm9wcykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb3BzLmxlZnQgIT09IHVuZGVmaW5lZCB8fCBwcm9wcy50b3AgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN0ciA9XHJcbiAgICAgICAgICAocHJvcHMubGVmdCA9PT0gdW5kZWZpbmVkID8gJGVsLnBvc2l0aW9uKCkubGVmdCA6IHByb3BzLmxlZnQpICtcclxuICAgICAgICAgIFwicHgsIFwiICtcclxuICAgICAgICAgIChwcm9wcy50b3AgPT09IHVuZGVmaW5lZCA/ICRlbC5wb3NpdGlvbigpLnRvcCA6IHByb3BzLnRvcCkgK1xyXG4gICAgICAgICAgXCJweFwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51c2UzZCkge1xyXG4gICAgICAgICAgc3RyID0gXCJ0cmFuc2xhdGUzZChcIiArIHN0ciArIFwiLCAwcHgpXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0ciA9IFwidHJhbnNsYXRlKFwiICsgc3RyICsgXCIpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJvcHMuc2NhbGVYICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuc2NhbGVZICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdHIgKz0gXCIgc2NhbGUoXCIgKyBwcm9wcy5zY2FsZVggKyBcIiwgXCIgKyBwcm9wcy5zY2FsZVkgKyBcIilcIjtcclxuICAgICAgfSBlbHNlIGlmIChwcm9wcy5zY2FsZVggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN0ciArPSBcIiBzY2FsZVgoXCIgKyBwcm9wcy5zY2FsZVggKyBcIilcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0ci5sZW5ndGgpIHtcclxuICAgICAgICBjc3MudHJhbnNmb3JtID0gc3RyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJvcHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY3NzLm9wYWNpdHkgPSBwcm9wcy5vcGFjaXR5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJvcHMud2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNzcy53aWR0aCA9IHByb3BzLndpZHRoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJvcHMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjc3MuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gJGVsLmNzcyhjc3MpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBTaW1wbGUgQ1NTIHRyYW5zaXRpb24gaGFuZGxlclxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhbmltYXRlOiBmdW5jdGlvbigkZWwsIHRvLCBkdXJhdGlvbiwgY2FsbGJhY2ssIGxlYXZlQW5pbWF0aW9uTmFtZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZnJvbTtcclxuXHJcbiAgICAgIGlmICgkLmlzRnVuY3Rpb24oZHVyYXRpb24pKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBkdXJhdGlvbjtcclxuICAgICAgICBkdXJhdGlvbiA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYuc3RvcCgkZWwpO1xyXG5cclxuICAgICAgZnJvbSA9IHNlbGYuZ2V0VHJhbnNsYXRlKCRlbCk7XHJcblxyXG4gICAgICAkZWwub24odHJhbnNpdGlvbkVuZCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vIFNraXAgZXZlbnRzIGZyb20gY2hpbGQgZWxlbWVudHMgYW5kIHotaW5kZXggY2hhbmdlXHJcbiAgICAgICAgaWYgKGUgJiYgZS5vcmlnaW5hbEV2ZW50ICYmICghJGVsLmlzKGUub3JpZ2luYWxFdmVudC50YXJnZXQpIHx8IGUub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUgPT0gXCJ6LWluZGV4XCIpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLnN0b3AoJGVsKTtcclxuXHJcbiAgICAgICAgaWYgKCQuaXNOdW1lcmljKGR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgJGVsLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KHRvKSkge1xyXG4gICAgICAgICAgaWYgKHRvLnNjYWxlWCAhPT0gdW5kZWZpbmVkICYmIHRvLnNjYWxlWSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0VHJhbnNsYXRlKCRlbCwge1xyXG4gICAgICAgICAgICAgIHRvcDogdG8udG9wLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IHRvLmxlZnQsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGZyb20ud2lkdGggKiB0by5zY2FsZVgsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBmcm9tLmhlaWdodCAqIHRvLnNjYWxlWSxcclxuICAgICAgICAgICAgICBzY2FsZVg6IDEsXHJcbiAgICAgICAgICAgICAgc2NhbGVZOiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobGVhdmVBbmltYXRpb25OYW1lICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAkZWwucmVtb3ZlQ2xhc3ModG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcclxuICAgICAgICAgIGNhbGxiYWNrKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoJC5pc051bWVyaWMoZHVyYXRpb24pKSB7XHJcbiAgICAgICAgJGVsLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgZHVyYXRpb24gKyBcIm1zXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTdGFydCBhbmltYXRpb24gYnkgY2hhbmdpbmcgQ1NTIHByb3BlcnRpZXMgb3IgY2xhc3MgbmFtZVxyXG4gICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KHRvKSkge1xyXG4gICAgICAgIGlmICh0by5zY2FsZVggIT09IHVuZGVmaW5lZCAmJiB0by5zY2FsZVkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZGVsZXRlIHRvLndpZHRoO1xyXG4gICAgICAgICAgZGVsZXRlIHRvLmhlaWdodDtcclxuXHJcbiAgICAgICAgICBpZiAoJGVsLnBhcmVudCgpLmhhc0NsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWltYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICRlbC5wYXJlbnQoKS5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLXNjYWxpbmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSgkZWwsIHRvKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkZWwuYWRkQ2xhc3ModG8pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNYWtlIHN1cmUgdGhhdCBgdHJhbnNpdGlvbmVuZGAgY2FsbGJhY2sgZ2V0cyBmaXJlZFxyXG4gICAgICAkZWwuZGF0YShcclxuICAgICAgICBcInRpbWVyXCIsXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRlbC50cmlnZ2VyKHRyYW5zaXRpb25FbmQpO1xyXG4gICAgICAgIH0sIGR1cmF0aW9uICsgMzMpXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3A6IGZ1bmN0aW9uKCRlbCwgY2FsbENhbGxiYWNrKSB7XHJcbiAgICAgIGlmICgkZWwgJiYgJGVsLmxlbmd0aCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCgkZWwuZGF0YShcInRpbWVyXCIpKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxDYWxsYmFjaykge1xyXG4gICAgICAgICAgJGVsLnRyaWdnZXIodHJhbnNpdGlvbkVuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkZWwub2ZmKHRyYW5zaXRpb25FbmQpLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgXCJcIik7XHJcblxyXG4gICAgICAgICRlbC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLXNjYWxpbmdcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBEZWZhdWx0IGNsaWNrIGhhbmRsZXIgZm9yIFwiZmFuY3lib3hlZFwiIGxpbmtzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgZnVuY3Rpb24gX3J1bihlLCBvcHRzKSB7XHJcbiAgICB2YXIgaXRlbXMgPSBbXSxcclxuICAgICAgaW5kZXggPSAwLFxyXG4gICAgICAkdGFyZ2V0LFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgaW5zdGFuY2U7XHJcblxyXG4gICAgLy8gQXZvaWQgb3BlbmluZyBtdWx0aXBsZSB0aW1lc1xyXG4gICAgaWYgKGUgJiYgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xyXG5cclxuICAgIGlmIChlICYmIGUuZGF0YSkge1xyXG4gICAgICBvcHRzID0gbWVyZ2VPcHRzKGUuZGF0YS5vcHRpb25zLCBvcHRzKTtcclxuICAgIH1cclxuXHJcbiAgICAkdGFyZ2V0ID0gb3B0cy4kdGFyZ2V0IHx8ICQoZS5jdXJyZW50VGFyZ2V0KS50cmlnZ2VyKFwiYmx1clwiKTtcclxuICAgIGluc3RhbmNlID0gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS4kdHJpZ2dlciAmJiBpbnN0YW5jZS4kdHJpZ2dlci5pcygkdGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdHMuc2VsZWN0b3IpIHtcclxuICAgICAgaXRlbXMgPSAkKG9wdHMuc2VsZWN0b3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gR2V0IGFsbCByZWxhdGVkIGl0ZW1zIGFuZCBmaW5kIGluZGV4IGZvciBjbGlja2VkIG9uZVxyXG4gICAgICB2YWx1ZSA9ICR0YXJnZXQuYXR0cihcImRhdGEtZmFuY3lib3hcIikgfHwgXCJcIjtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGl0ZW1zID0gZS5kYXRhID8gZS5kYXRhLml0ZW1zIDogW107XHJcbiAgICAgICAgaXRlbXMgPSBpdGVtcy5sZW5ndGggPyBpdGVtcy5maWx0ZXIoJ1tkYXRhLWZhbmN5Ym94PVwiJyArIHZhbHVlICsgJ1wiXScpIDogJCgnW2RhdGEtZmFuY3lib3g9XCInICsgdmFsdWUgKyAnXCJdJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbXMgPSBbJHRhcmdldF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbmRleCA9ICQoaXRlbXMpLmluZGV4KCR0YXJnZXQpO1xyXG5cclxuICAgIC8vIFNvbWV0aW1lcyBjdXJyZW50IGl0ZW0gY2FuIG5vdCBiZSBmb3VuZFxyXG4gICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICBpbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFuY2UgPSAkLmZhbmN5Ym94Lm9wZW4oaXRlbXMsIG9wdHMsIGluZGV4KTtcclxuXHJcbiAgICAvLyBTYXZlIGxhc3QgYWN0aXZlIGVsZW1lbnRcclxuICAgIGluc3RhbmNlLiR0cmlnZ2VyID0gJHRhcmdldDtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBhIGpRdWVyeSBwbHVnaW5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICQuZm4uZmFuY3lib3ggPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICB2YXIgc2VsZWN0b3I7XHJcblxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IgfHwgZmFsc2U7XHJcblxyXG4gICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgIC8vIFVzZSBib2R5IGVsZW1lbnQgaW5zdGVhZCBvZiBkb2N1bWVudCBzbyBpdCBleGVjdXRlcyBmaXJzdFxyXG4gICAgICAkKFwiYm9keVwiKVxyXG4gICAgICAgIC5vZmYoXCJjbGljay5mYi1zdGFydFwiLCBzZWxlY3RvcilcclxuICAgICAgICAub24oXCJjbGljay5mYi1zdGFydFwiLCBzZWxlY3Rvciwge29wdGlvbnM6IG9wdGlvbnN9LCBfcnVuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub2ZmKFwiY2xpY2suZmItc3RhcnRcIikub24oXHJcbiAgICAgICAgXCJjbGljay5mYi1zdGFydFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGl0ZW1zOiB0aGlzLFxyXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3J1blxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIC8vIFNlbGYgaW5pdGlhbGl6aW5nIHBsdWdpbiBmb3IgYWxsIGVsZW1lbnRzIGhhdmluZyBgZGF0YS1mYW5jeWJveGAgYXR0cmlidXRlXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgJEQub24oXCJjbGljay5mYi1zdGFydFwiLCBcIltkYXRhLWZhbmN5Ym94XVwiLCBfcnVuKTtcclxuXHJcbiAgLy8gRW5hYmxlIFwidHJpZ2dlciBlbGVtZW50c1wiXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAkRC5vbihcImNsaWNrLmZiLXN0YXJ0XCIsIFwiW2RhdGEtZmFuY3lib3gtdHJpZ2dlcl1cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgJCgnW2RhdGEtZmFuY3lib3g9XCInICsgJCh0aGlzKS5hdHRyKFwiZGF0YS1mYW5jeWJveC10cmlnZ2VyXCIpICsgJ1wiXScpXHJcbiAgICAgIC5lcSgkKHRoaXMpLmF0dHIoXCJkYXRhLWZhbmN5Ym94LWluZGV4XCIpIHx8IDApXHJcbiAgICAgIC50cmlnZ2VyKFwiY2xpY2suZmItc3RhcnRcIiwge1xyXG4gICAgICAgICR0cmlnZ2VyOiAkKHRoaXMpXHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBUcmFjayBmb2N1cyBldmVudCBmb3IgYmV0dGVyIGFjY2Vzc2liaWxpdHkgc3R5bGluZ1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGJ1dHRvblN0ciA9IFwiLmZhbmN5Ym94LWJ1dHRvblwiLFxyXG4gICAgICBmb2N1c1N0ciA9IFwiZmFuY3lib3gtZm9jdXNcIixcclxuICAgICAgJHByZXNzZWQgPSBudWxsO1xyXG5cclxuICAgICRELm9uKFwibW91c2Vkb3duIG1vdXNldXAgZm9jdXMgYmx1clwiLCBidXR0b25TdHIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc3dpdGNoIChlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwibW91c2Vkb3duXCI6XHJcbiAgICAgICAgICAkcHJlc3NlZCA9ICQodGhpcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibW91c2V1cFwiOlxyXG4gICAgICAgICAgJHByZXNzZWQgPSBudWxsO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImZvY3VzaW5cIjpcclxuICAgICAgICAgICQoYnV0dG9uU3RyKS5yZW1vdmVDbGFzcyhmb2N1c1N0cik7XHJcblxyXG4gICAgICAgICAgaWYgKCEkKHRoaXMpLmlzKCRwcmVzc2VkKSAmJiAhJCh0aGlzKS5pcyhcIltkaXNhYmxlZF1cIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhmb2N1c1N0cik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZm9jdXNvdXRcIjpcclxuICAgICAgICAgICQoYnV0dG9uU3RyKS5yZW1vdmVDbGFzcyhmb2N1c1N0cik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSkoKTtcclxufSkod2luZG93LCBkb2N1bWVudCwgalF1ZXJ5KTtcclxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyBNZWRpYVxyXG4vLyBBZGRzIGFkZGl0aW9uYWwgbWVkaWEgdHlwZSBzdXBwb3J0XHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbihmdW5jdGlvbigkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIC8vIE9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgZm9yIGVhY2ggbWVkaWEgdHlwZVxyXG4gIHZhciBkZWZhdWx0cyA9IHtcclxuICAgIHlvdXR1YmU6IHtcclxuICAgICAgbWF0Y2hlcjogLyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmV8eW91dHViZVxcLW5vY29va2llXFwuY29tKVxcLyh3YXRjaFxcPyguKiYpP3Y9fHZcXC98dVxcL3xlbWJlZFxcLz8pPyh2aWRlb3Nlcmllc1xcP2xpc3Q9KC4qKXxbXFx3LV17MTF9fFxcP2xpc3RUeXBlPSguKikmbGlzdD0oLiopKSguKikvaSxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgYXV0b3BsYXk6IDEsXHJcbiAgICAgICAgYXV0b2hpZGU6IDEsXHJcbiAgICAgICAgZnM6IDEsXHJcbiAgICAgICAgcmVsOiAwLFxyXG4gICAgICAgIGhkOiAxLFxyXG4gICAgICAgIHdtb2RlOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgZW5hYmxlanNhcGk6IDEsXHJcbiAgICAgICAgaHRtbDU6IDFcclxuICAgICAgfSxcclxuICAgICAgcGFyYW1QbGFjZTogOCxcclxuICAgICAgdHlwZTogXCJpZnJhbWVcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkLyQ0XCIsXHJcbiAgICAgIHRodW1iOiBcImh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyQ0L2hxZGVmYXVsdC5qcGdcIlxyXG4gICAgfSxcclxuXHJcbiAgICB2aW1lbzoge1xyXG4gICAgICBtYXRjaGVyOiAvXi4rdmltZW8uY29tXFwvKC4qXFwvKT8oW1xcZF0rKSguKik/LyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgYXV0b3BsYXk6IDEsXHJcbiAgICAgICAgaGQ6IDEsXHJcbiAgICAgICAgc2hvd190aXRsZTogMSxcclxuICAgICAgICBzaG93X2J5bGluZTogMSxcclxuICAgICAgICBzaG93X3BvcnRyYWl0OiAwLFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IDFcclxuICAgICAgfSxcclxuICAgICAgcGFyYW1QbGFjZTogMyxcclxuICAgICAgdHlwZTogXCJpZnJhbWVcIixcclxuICAgICAgdXJsOiBcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8kMlwiXHJcbiAgICB9LFxyXG5cclxuICAgIGluc3RhZ3JhbToge1xyXG4gICAgICBtYXRjaGVyOiAvKGluc3RhZ3JcXC5hbXxpbnN0YWdyYW1cXC5jb20pXFwvcFxcLyhbYS16QS1aMC05X1xcLV0rKVxcLz8vaSxcclxuICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICB1cmw6IFwiLy8kMS9wLyQyL21lZGlhLz9zaXplPWxcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFeGFtcGxlczpcclxuICAgIC8vIGh0dHA6Ly9tYXBzLmdvb2dsZS5jb20vP2xsPTQ4Ljg1Nzk5NSwyLjI5NDI5NyZzcG49MC4wMDc2NjYsMC4wMjExMzYmdD1tJno9MTZcclxuICAgIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9AMzcuNzg1MjAwNiwtMTIyLjQxNDYzNTUsMTQuNjV6XHJcbiAgICAvLyBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvQDUyLjIxMTExMjMsMi45MjM3NTQyLDYuNjF6P2hsPWVuXHJcbiAgICAvLyBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvR29vZ2xlcGxleC9AMzcuNDIyMDA0MSwtMTIyLjA4MzM0OTQsMTd6L2RhdGE9ITRtNSEzbTQhMXMweDA6MHg2YzI5NmM2NjYxOTM2N2UwIThtMiEzZDM3LjQyMTk5OTghNGQtMTIyLjA4NDA1NzJcclxuICAgIGdtYXBfcGxhY2U6IHtcclxuICAgICAgbWF0Y2hlcjogLyhtYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfShcXC5bYS16XXsyfSk/KVxcLygoKG1hcHNcXC8ocGxhY2VcXC8oLiopXFwvKT9cXEAoLiopLChcXGQrLj9cXGQrPyl6KSl8KFxcP2xsPSkpKC4qKT8vaSxcclxuICAgICAgdHlwZTogXCJpZnJhbWVcIixcclxuICAgICAgdXJsOiBmdW5jdGlvbihyZXopIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgXCIvL21hcHMuZ29vZ2xlLlwiICtcclxuICAgICAgICAgIHJlelsyXSArXHJcbiAgICAgICAgICBcIi8/bGw9XCIgK1xyXG4gICAgICAgICAgKHJlels5XSA/IHJlels5XSArIFwiJno9XCIgKyBNYXRoLmZsb29yKHJlelsxMF0pICsgKHJlelsxMl0gPyByZXpbMTJdLnJlcGxhY2UoL15cXC8vLCBcIiZcIikgOiBcIlwiKSA6IHJlelsxMl0gKyBcIlwiKS5yZXBsYWNlKC9cXD8vLCBcIiZcIikgK1xyXG4gICAgICAgICAgXCImb3V0cHV0PVwiICtcclxuICAgICAgICAgIChyZXpbMTJdICYmIHJlelsxMl0uaW5kZXhPZihcImxheWVyPWNcIikgPiAwID8gXCJzdmVtYmVkXCIgOiBcImVtYmVkXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFeGFtcGxlczpcclxuICAgIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvRW1waXJlK1N0YXRlK0J1aWxkaW5nL1xyXG4gICAgLy8gaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9Y2VudHVyeWxpbmsrZmllbGRcclxuICAgIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PTQ3LjU5NTE1MTgsLTEyMi4zMzE2MzkzXHJcbiAgICBnbWFwX3NlYXJjaDoge1xyXG4gICAgICBtYXRjaGVyOiAvKG1hcHNcXC4pP2dvb2dsZVxcLihbYS16XXsyLDN9KFxcLlthLXpdezJ9KT8pXFwvKG1hcHNcXC9zZWFyY2hcXC8pKC4qKS9pLFxyXG4gICAgICB0eXBlOiBcImlmcmFtZVwiLFxyXG4gICAgICB1cmw6IGZ1bmN0aW9uKHJleikge1xyXG4gICAgICAgIHJldHVybiBcIi8vbWFwcy5nb29nbGUuXCIgKyByZXpbMl0gKyBcIi9tYXBzP3E9XCIgKyByZXpbNV0ucmVwbGFjZShcInF1ZXJ5PVwiLCBcInE9XCIpLnJlcGxhY2UoXCJhcGk9MVwiLCBcIlwiKSArIFwiJm91dHB1dD1lbWJlZFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gRm9ybWF0cyBtYXRjaGluZyB1cmwgdG8gZmluYWwgZm9ybVxyXG4gIHZhciBmb3JtYXQgPSBmdW5jdGlvbih1cmwsIHJleiwgcGFyYW1zKSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IFwiXCI7XHJcblxyXG4gICAgaWYgKCQudHlwZShwYXJhbXMpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHBhcmFtcyA9ICQucGFyYW0ocGFyYW1zLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAkLmVhY2gocmV6LCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiJFwiICsga2V5LCB2YWx1ZSB8fCBcIlwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwYXJhbXMubGVuZ3RoKSB7XHJcbiAgICAgIHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpID4gMCA/IFwiJlwiIDogXCI/XCIpICsgcGFyYW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmw7XHJcbiAgfTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJvYmplY3ROZWVkc1R5cGUuZmJcIiwgZnVuY3Rpb24oZSwgaW5zdGFuY2UsIGl0ZW0pIHtcclxuICAgIHZhciB1cmwgPSBpdGVtLnNyYyB8fCBcIlwiLFxyXG4gICAgICB0eXBlID0gZmFsc2UsXHJcbiAgICAgIG1lZGlhLFxyXG4gICAgICB0aHVtYixcclxuICAgICAgcmV6LFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgIHVybFBhcmFtcyxcclxuICAgICAgcGFyYW1PYmosXHJcbiAgICAgIHByb3ZpZGVyO1xyXG5cclxuICAgIG1lZGlhID0gJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRzLCBpdGVtLm9wdHMubWVkaWEpO1xyXG5cclxuICAgIC8vIExvb2sgZm9yIGFueSBtYXRjaGluZyBtZWRpYSB0eXBlXHJcbiAgICAkLmVhY2gobWVkaWEsIGZ1bmN0aW9uKHByb3ZpZGVyTmFtZSwgcHJvdmlkZXJPcHRzKSB7XHJcbiAgICAgIHJleiA9IHVybC5tYXRjaChwcm92aWRlck9wdHMubWF0Y2hlcik7XHJcblxyXG4gICAgICBpZiAoIXJleikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHlwZSA9IHByb3ZpZGVyT3B0cy50eXBlO1xyXG4gICAgICBwcm92aWRlciA9IHByb3ZpZGVyTmFtZTtcclxuICAgICAgcGFyYW1PYmogPSB7fTtcclxuXHJcbiAgICAgIGlmIChwcm92aWRlck9wdHMucGFyYW1QbGFjZSAmJiByZXpbcHJvdmlkZXJPcHRzLnBhcmFtUGxhY2VdKSB7XHJcbiAgICAgICAgdXJsUGFyYW1zID0gcmV6W3Byb3ZpZGVyT3B0cy5wYXJhbVBsYWNlXTtcclxuXHJcbiAgICAgICAgaWYgKHVybFBhcmFtc1swXSA9PSBcIj9cIikge1xyXG4gICAgICAgICAgdXJsUGFyYW1zID0gdXJsUGFyYW1zLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVybFBhcmFtcyA9IHVybFBhcmFtcy5zcGxpdChcIiZcIik7XHJcblxyXG4gICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgdXJsUGFyYW1zLmxlbmd0aDsgKyttKSB7XHJcbiAgICAgICAgICB2YXIgcCA9IHVybFBhcmFtc1ttXS5zcGxpdChcIj1cIiwgMik7XHJcblxyXG4gICAgICAgICAgaWYgKHAubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgcGFyYW1PYmpbcFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQocFsxXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhcmFtcyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBwcm92aWRlck9wdHMucGFyYW1zLCBpdGVtLm9wdHNbcHJvdmlkZXJOYW1lXSwgcGFyYW1PYmopO1xyXG5cclxuICAgICAgdXJsID1cclxuICAgICAgICAkLnR5cGUocHJvdmlkZXJPcHRzLnVybCkgPT09IFwiZnVuY3Rpb25cIiA/IHByb3ZpZGVyT3B0cy51cmwuY2FsbCh0aGlzLCByZXosIHBhcmFtcywgaXRlbSkgOiBmb3JtYXQocHJvdmlkZXJPcHRzLnVybCwgcmV6LCBwYXJhbXMpO1xyXG5cclxuICAgICAgdGh1bWIgPVxyXG4gICAgICAgICQudHlwZShwcm92aWRlck9wdHMudGh1bWIpID09PSBcImZ1bmN0aW9uXCIgPyBwcm92aWRlck9wdHMudGh1bWIuY2FsbCh0aGlzLCByZXosIHBhcmFtcywgaXRlbSkgOiBmb3JtYXQocHJvdmlkZXJPcHRzLnRodW1iLCByZXopO1xyXG5cclxuICAgICAgaWYgKHByb3ZpZGVyTmFtZSA9PT0gXCJ5b3V0dWJlXCIpIHtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvJnQ9KChcXGQrKW0pPyhcXGQrKXMvLCBmdW5jdGlvbihtYXRjaCwgcDEsIG0sIHMpIHtcclxuICAgICAgICAgIHJldHVybiBcIiZzdGFydD1cIiArICgobSA/IHBhcnNlSW50KG0sIDEwKSAqIDYwIDogMCkgKyBwYXJzZUludChzLCAxMCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3ZpZGVyTmFtZSA9PT0gXCJ2aW1lb1wiKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCImJTIzXCIsIFwiI1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSWYgaXQgaXMgZm91bmQsIHRoZW4gY2hhbmdlIGNvbnRlbnQgdHlwZSBhbmQgdXBkYXRlIHRoZSB1cmxcclxuXHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICBpZiAoIWl0ZW0ub3B0cy50aHVtYiAmJiAhKGl0ZW0ub3B0cy4kdGh1bWIgJiYgaXRlbS5vcHRzLiR0aHVtYi5sZW5ndGgpKSB7XHJcbiAgICAgICAgaXRlbS5vcHRzLnRodW1iID0gdGh1bWI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlID09PSBcImlmcmFtZVwiKSB7XHJcbiAgICAgICAgaXRlbS5vcHRzID0gJC5leHRlbmQodHJ1ZSwgaXRlbS5vcHRzLCB7XHJcbiAgICAgICAgICBpZnJhbWU6IHtcclxuICAgICAgICAgICAgcHJlbG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICBzY3JvbGxpbmc6IFwibm9cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQuZXh0ZW5kKGl0ZW0sIHtcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIHNyYzogdXJsLFxyXG4gICAgICAgIG9yaWdTcmM6IGl0ZW0uc3JjLFxyXG4gICAgICAgIGNvbnRlbnRTb3VyY2U6IHByb3ZpZGVyLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiB0eXBlID09PSBcImltYWdlXCIgPyBcImltYWdlXCIgOiBwcm92aWRlciA9PSBcImdtYXBfcGxhY2VcIiB8fCBwcm92aWRlciA9PSBcImdtYXBfc2VhcmNoXCIgPyBcIm1hcFwiIDogXCJ2aWRlb1wiXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh1cmwpIHtcclxuICAgICAgaXRlbS50eXBlID0gaXRlbS5vcHRzLmRlZmF1bHRUeXBlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBMb2FkIFlvdVR1YmUvVmlkZW8gQVBJIG9uIHJlcXVlc3QgdG8gZGV0ZWN0IHdoZW4gdmlkZW8gZmluaXNoZWQgcGxheWluZ1xyXG4gIHZhciBWaWRlb0FQSUxvYWRlciA9IHtcclxuICAgIHlvdXR1YmU6IHtcclxuICAgICAgc3JjOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIixcclxuICAgICAgY2xhc3M6IFwiWVRcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGxvYWRlZDogZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgdmltZW86IHtcclxuICAgICAgc3JjOiBcImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzXCIsXHJcbiAgICAgIGNsYXNzOiBcIlZpbWVvXCIsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBsb2FkZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWQ6IGZ1bmN0aW9uKHZlbmRvcikge1xyXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzLFxyXG4gICAgICAgIHNjcmlwdDtcclxuXHJcbiAgICAgIGlmICh0aGlzW3ZlbmRvcl0ubG9hZGVkKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIF90aGlzLmRvbmUodmVuZG9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzW3ZlbmRvcl0ubG9hZGluZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpc1t2ZW5kb3JdLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gICAgICBzY3JpcHQuc3JjID0gdGhpc1t2ZW5kb3JdLnNyYztcclxuXHJcbiAgICAgIGlmICh2ZW5kb3IgPT09IFwieW91dHViZVwiKSB7XHJcbiAgICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBfdGhpc1t2ZW5kb3JdLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICBfdGhpcy5kb25lKHZlbmRvcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBfdGhpc1t2ZW5kb3JdLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICBfdGhpcy5kb25lKHZlbmRvcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSxcclxuICAgIGRvbmU6IGZ1bmN0aW9uKHZlbmRvcikge1xyXG4gICAgICB2YXIgaW5zdGFuY2UsICRlbCwgcGxheWVyO1xyXG5cclxuICAgICAgaWYgKHZlbmRvciA9PT0gXCJ5b3V0dWJlXCIpIHtcclxuICAgICAgICBkZWxldGUgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICRlbCA9IGluc3RhbmNlLmN1cnJlbnQuJGNvbnRlbnQuZmluZChcImlmcmFtZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHZlbmRvciA9PT0gXCJ5b3V0dWJlXCIgJiYgWVQgIT09IHVuZGVmaW5lZCAmJiBZVCkge1xyXG4gICAgICAgICAgcGxheWVyID0gbmV3IFlULlBsYXllcigkZWwuYXR0cihcImlkXCIpLCB7XHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZlbmRvciA9PT0gXCJ2aW1lb1wiICYmIFZpbWVvICE9PSB1bmRlZmluZWQgJiYgVmltZW8pIHtcclxuICAgICAgICAgIHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoJGVsKTtcclxuXHJcbiAgICAgICAgICBwbGF5ZXIub24oXCJlbmRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UubmV4dCgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oe1xyXG4gICAgXCJhZnRlclNob3cuZmJcIjogZnVuY3Rpb24oZSwgaW5zdGFuY2UsIGN1cnJlbnQpIHtcclxuICAgICAgaWYgKGluc3RhbmNlLmdyb3VwLmxlbmd0aCA+IDEgJiYgKGN1cnJlbnQuY29udGVudFNvdXJjZSA9PT0gXCJ5b3V0dWJlXCIgfHwgY3VycmVudC5jb250ZW50U291cmNlID09PSBcInZpbWVvXCIpKSB7XHJcbiAgICAgICAgVmlkZW9BUElMb2FkZXIubG9hZChjdXJyZW50LmNvbnRlbnRTb3VyY2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy9cclxuLy8gR3Vlc3R1cmVzXHJcbi8vIEFkZHMgdG91Y2ggZ3Vlc3R1cmVzLCBoYW5kbGVzIGNsaWNrIGFuZCB0YXAgZXZlbnRzXHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHZhciByZXF1ZXN0QUZyYW1lID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgLy8gaWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBzZXRUaW1lb3V0XHJcbiAgICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG4gIHZhciBjYW5jZWxBRnJhbWUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cub0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChpZCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSkoKTtcclxuXHJcbiAgdmFyIGdldFBvaW50ZXJYWSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuXHJcbiAgICBlID0gZS5vcmlnaW5hbEV2ZW50IHx8IGUgfHwgd2luZG93LmU7XHJcbiAgICBlID0gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXMgOiBlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID8gZS5jaGFuZ2VkVG91Y2hlcyA6IFtlXTtcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gZSkge1xyXG4gICAgICBpZiAoZVtrZXldLnBhZ2VYKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgeDogZVtrZXldLnBhZ2VYLFxyXG4gICAgICAgICAgeTogZVtrZXldLnBhZ2VZXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZVtrZXldLmNsaWVudFgpIHtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICB4OiBlW2tleV0uY2xpZW50WCxcclxuICAgICAgICAgIHk6IGVba2V5XS5jbGllbnRZXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIHZhciBkaXN0YW5jZSA9IGZ1bmN0aW9uKHBvaW50MiwgcG9pbnQxLCB3aGF0KSB7XHJcbiAgICBpZiAoIXBvaW50MSB8fCAhcG9pbnQyKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aGF0ID09PSBcInhcIikge1xyXG4gICAgICByZXR1cm4gcG9pbnQyLnggLSBwb2ludDEueDtcclxuICAgIH0gZWxzZSBpZiAod2hhdCA9PT0gXCJ5XCIpIHtcclxuICAgICAgcmV0dXJuIHBvaW50Mi55IC0gcG9pbnQxLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwb2ludDIueCAtIHBvaW50MS54LCAyKSArIE1hdGgucG93KHBvaW50Mi55IC0gcG9pbnQxLnksIDIpKTtcclxuICB9O1xyXG5cclxuICB2YXIgaXNDbGlja2FibGUgPSBmdW5jdGlvbigkZWwpIHtcclxuICAgIGlmIChcclxuICAgICAgJGVsLmlzKCdhLGFyZWEsYnV0dG9uLFtyb2xlPVwiYnV0dG9uXCJdLGlucHV0LGxhYmVsLHNlbGVjdCxzdW1tYXJ5LHRleHRhcmVhLHZpZGVvLGF1ZGlvLGlmcmFtZScpIHx8XHJcbiAgICAgICQuaXNGdW5jdGlvbigkZWwuZ2V0KDApLm9uY2xpY2spIHx8XHJcbiAgICAgICRlbC5kYXRhKFwic2VsZWN0YWJsZVwiKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGZvciBhdHRyaWJ1dGVzIGxpa2UgZGF0YS1mYW5jeWJveC1uZXh0IG9yIGRhdGEtZmFuY3lib3gtY2xvc2VcclxuICAgIGZvciAodmFyIGkgPSAwLCBhdHRzID0gJGVsWzBdLmF0dHJpYnV0ZXMsIG4gPSBhdHRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBpZiAoYXR0c1tpXS5ub2RlTmFtZS5zdWJzdHIoMCwgMTQpID09PSBcImRhdGEtZmFuY3lib3gtXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICB2YXIgaGFzU2Nyb2xsYmFycyA9IGZ1bmN0aW9uKGVsKSB7XHJcbiAgICB2YXIgb3ZlcmZsb3dZID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpW1wib3ZlcmZsb3cteVwiXSxcclxuICAgICAgb3ZlcmZsb3dYID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpW1wib3ZlcmZsb3cteFwiXSxcclxuICAgICAgdmVydGljYWwgPSAob3ZlcmZsb3dZID09PSBcInNjcm9sbFwiIHx8IG92ZXJmbG93WSA9PT0gXCJhdXRvXCIpICYmIGVsLnNjcm9sbEhlaWdodCA+IGVsLmNsaWVudEhlaWdodCxcclxuICAgICAgaG9yaXpvbnRhbCA9IChvdmVyZmxvd1ggPT09IFwic2Nyb2xsXCIgfHwgb3ZlcmZsb3dYID09PSBcImF1dG9cIikgJiYgZWwuc2Nyb2xsV2lkdGggPiBlbC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICByZXR1cm4gdmVydGljYWwgfHwgaG9yaXpvbnRhbDtcclxuICB9O1xyXG5cclxuICB2YXIgaXNTY3JvbGxhYmxlID0gZnVuY3Rpb24oJGVsKSB7XHJcbiAgICB2YXIgcmV6ID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgcmV6ID0gaGFzU2Nyb2xsYmFycygkZWwuZ2V0KDApKTtcclxuXHJcbiAgICAgIGlmIChyZXopIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgJGVsID0gJGVsLnBhcmVudCgpO1xyXG5cclxuICAgICAgaWYgKCEkZWwubGVuZ3RoIHx8ICRlbC5oYXNDbGFzcyhcImZhbmN5Ym94LXN0YWdlXCIpIHx8ICRlbC5pcyhcImJvZHlcIikpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXo7XHJcbiAgfTtcclxuXHJcbiAgdmFyIEd1ZXN0dXJlcyA9IGZ1bmN0aW9uKGluc3RhbmNlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cclxuICAgIHNlbGYuJGJnID0gaW5zdGFuY2UuJHJlZnMuYmc7XHJcbiAgICBzZWxmLiRzdGFnZSA9IGluc3RhbmNlLiRyZWZzLnN0YWdlO1xyXG4gICAgc2VsZi4kY29udGFpbmVyID0gaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyO1xyXG5cclxuICAgIHNlbGYuZGVzdHJveSgpO1xyXG5cclxuICAgIHNlbGYuJGNvbnRhaW5lci5vbihcInRvdWNoc3RhcnQuZmIudG91Y2ggbW91c2Vkb3duLmZiLnRvdWNoXCIsICQucHJveHkoc2VsZiwgXCJvbnRvdWNoc3RhcnRcIikpO1xyXG4gIH07XHJcblxyXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNlbGYuJGNvbnRhaW5lci5vZmYoXCIuZmIudG91Y2hcIik7XHJcblxyXG4gICAgJChkb2N1bWVudCkub2ZmKFwiLmZiLnRvdWNoXCIpO1xyXG5cclxuICAgIGlmIChzZWxmLnJlcXVlc3RJZCkge1xyXG4gICAgICBjYW5jZWxBRnJhbWUoc2VsZi5yZXF1ZXN0SWQpO1xyXG4gICAgICBzZWxmLnJlcXVlc3RJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGYudGFwcGVkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dChzZWxmLnRhcHBlZCk7XHJcbiAgICAgIHNlbGYudGFwcGVkID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgJHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgICBpbnN0YW5jZSA9IHNlbGYuaW5zdGFuY2UsXHJcbiAgICAgIGN1cnJlbnQgPSBpbnN0YW5jZS5jdXJyZW50LFxyXG4gICAgICAkc2xpZGUgPSBjdXJyZW50LiRzbGlkZSxcclxuICAgICAgJGNvbnRlbnQgPSBjdXJyZW50LiRjb250ZW50LFxyXG4gICAgICBpc1RvdWNoRGV2aWNlID0gZS50eXBlID09IFwidG91Y2hzdGFydFwiO1xyXG5cclxuICAgIC8vIERvIG5vdCByZXNwb25kIHRvIGJvdGggKHRvdWNoIGFuZCBtb3VzZSkgZXZlbnRzXHJcbiAgICBpZiAoaXNUb3VjaERldmljZSkge1xyXG4gICAgICBzZWxmLiRjb250YWluZXIub2ZmKFwibW91c2Vkb3duLmZiLnRvdWNoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElnbm9yZSByaWdodCBjbGlja1xyXG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQuYnV0dG9uID09IDIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElnbm9yZSB0YXBpbmcgb24gbGlua3MsIGJ1dHRvbnMsIGlucHV0IGVsZW1lbnRzXHJcbiAgICBpZiAoISRzbGlkZS5sZW5ndGggfHwgISR0YXJnZXQubGVuZ3RoIHx8IGlzQ2xpY2thYmxlKCR0YXJnZXQpIHx8IGlzQ2xpY2thYmxlKCR0YXJnZXQucGFyZW50KCkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIElnbm9yZSBjbGlja3Mgb24gdGhlIHNjcm9sbGJhclxyXG4gICAgaWYgKCEkdGFyZ2V0LmlzKFwiaW1nXCIpICYmIGUub3JpZ2luYWxFdmVudC5jbGllbnRYID4gJHRhcmdldFswXS5jbGllbnRXaWR0aCArICR0YXJnZXQub2Zmc2V0KCkubGVmdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWdub3JlIGNsaWNrcyB3aGlsZSB6b29taW5nIG9yIGNsb3NpbmdcclxuICAgIGlmICghY3VycmVudCB8fCBpbnN0YW5jZS5pc0FuaW1hdGluZyB8fCBjdXJyZW50LiRzbGlkZS5oYXNDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnJlYWxQb2ludHMgPSBzZWxmLnN0YXJ0UG9pbnRzID0gZ2V0UG9pbnRlclhZKGUpO1xyXG5cclxuICAgIGlmICghc2VsZi5zdGFydFBvaW50cy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFsbG93IG90aGVyIHNjcmlwdHMgdG8gY2F0Y2ggdG91Y2ggZXZlbnQgaWYgXCJ0b3VjaFwiIGlzIHNldCB0byBmYWxzZVxyXG4gICAgaWYgKGN1cnJlbnQudG91Y2gpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnN0YXJ0RXZlbnQgPSBlO1xyXG5cclxuICAgIHNlbGYuY2FuVGFwID0gdHJ1ZTtcclxuICAgIHNlbGYuJHRhcmdldCA9ICR0YXJnZXQ7XHJcbiAgICBzZWxmLiRjb250ZW50ID0gJGNvbnRlbnQ7XHJcbiAgICBzZWxmLm9wdHMgPSBjdXJyZW50Lm9wdHMudG91Y2g7XHJcblxyXG4gICAgc2VsZi5pc1Bhbm5pbmcgPSBmYWxzZTtcclxuICAgIHNlbGYuaXNTd2lwaW5nID0gZmFsc2U7XHJcbiAgICBzZWxmLmlzWm9vbWluZyA9IGZhbHNlO1xyXG4gICAgc2VsZi5pc1Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgc2VsZi5jYW5QYW4gPSBpbnN0YW5jZS5jYW5QYW4oKTtcclxuXHJcbiAgICBzZWxmLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgc2VsZi5kaXN0YW5jZVggPSBzZWxmLmRpc3RhbmNlWSA9IHNlbGYuZGlzdGFuY2UgPSAwO1xyXG5cclxuICAgIHNlbGYuY2FudmFzV2lkdGggPSBNYXRoLnJvdW5kKCRzbGlkZVswXS5jbGllbnRXaWR0aCk7XHJcbiAgICBzZWxmLmNhbnZhc0hlaWdodCA9IE1hdGgucm91bmQoJHNsaWRlWzBdLmNsaWVudEhlaWdodCk7XHJcblxyXG4gICAgc2VsZi5jb250ZW50TGFzdFBvcyA9IG51bGw7XHJcbiAgICBzZWxmLmNvbnRlbnRTdGFydFBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHNlbGYuJGNvbnRlbnQpIHx8IHt0b3A6IDAsIGxlZnQ6IDB9O1xyXG4gICAgc2VsZi5zbGlkZXJTdGFydFBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCRzbGlkZSk7XHJcblxyXG4gICAgLy8gU2luY2UgcG9zaXRpb24gd2lsbCBiZSBhYnNvbHV0ZSwgYnV0IHdlIG5lZWQgdG8gbWFrZSBpdCByZWxhdGl2ZSB0byB0aGUgc3RhZ2VcclxuICAgIHNlbGYuc3RhZ2VQb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShpbnN0YW5jZS4kcmVmcy5zdGFnZSk7XHJcblxyXG4gICAgc2VsZi5zbGlkZXJTdGFydFBvcy50b3AgLT0gc2VsZi5zdGFnZVBvcy50b3A7XHJcbiAgICBzZWxmLnNsaWRlclN0YXJ0UG9zLmxlZnQgLT0gc2VsZi5zdGFnZVBvcy5sZWZ0O1xyXG5cclxuICAgIHNlbGYuY29udGVudFN0YXJ0UG9zLnRvcCAtPSBzZWxmLnN0YWdlUG9zLnRvcDtcclxuICAgIHNlbGYuY29udGVudFN0YXJ0UG9zLmxlZnQgLT0gc2VsZi5zdGFnZVBvcy5sZWZ0O1xyXG5cclxuICAgICQoZG9jdW1lbnQpXHJcbiAgICAgIC5vZmYoXCIuZmIudG91Y2hcIilcclxuICAgICAgLm9uKGlzVG91Y2hEZXZpY2UgPyBcInRvdWNoZW5kLmZiLnRvdWNoIHRvdWNoY2FuY2VsLmZiLnRvdWNoXCIgOiBcIm1vdXNldXAuZmIudG91Y2ggbW91c2VsZWF2ZS5mYi50b3VjaFwiLCAkLnByb3h5KHNlbGYsIFwib250b3VjaGVuZFwiKSlcclxuICAgICAgLm9uKGlzVG91Y2hEZXZpY2UgPyBcInRvdWNobW92ZS5mYi50b3VjaFwiIDogXCJtb3VzZW1vdmUuZmIudG91Y2hcIiwgJC5wcm94eShzZWxmLCBcIm9udG91Y2htb3ZlXCIpKTtcclxuXHJcbiAgICBpZiAoJC5mYW5jeWJveC5pc01vYmlsZSkge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNlbGYub25zY3JvbGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgaWYgY2xpY2tlZCBvdXRzaWRlIHRoZSBzbGlkaW5nIGFyZWFcclxuICAgIGlmICghKHNlbGYub3B0cyB8fCBzZWxmLmNhblBhbikgfHwgISgkdGFyZ2V0LmlzKHNlbGYuJHN0YWdlKSB8fCBzZWxmLiRzdGFnZS5maW5kKCR0YXJnZXQpLmxlbmd0aCkpIHtcclxuICAgICAgaWYgKCR0YXJnZXQuaXMoXCIuZmFuY3lib3gtaW1hZ2VcIikpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghKCQuZmFuY3lib3guaXNNb2JpbGUgJiYgJHRhcmdldC5wYXJlbnRzKFwiLmZhbmN5Ym94LWNhcHRpb25cIikubGVuZ3RoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuaXNTY3JvbGxhYmxlID0gaXNTY3JvbGxhYmxlKCR0YXJnZXQpIHx8IGlzU2Nyb2xsYWJsZSgkdGFyZ2V0LnBhcmVudCgpKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIHNjcm9sbGFibGUgYW5kIHRyeSB0byBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IgKHNjcm9sbGluZylcclxuICAgIGlmICghKCQuZmFuY3lib3guaXNNb2JpbGUgJiYgc2VsZi5pc1Njcm9sbGFibGUpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmUgZmluZ2VyIG9yIG1vdXNlIGNsaWNrIC0gc3dpcGUgb3IgcGFuIGFuIGltYWdlXHJcbiAgICBpZiAoc2VsZi5zdGFydFBvaW50cy5sZW5ndGggPT09IDEgfHwgY3VycmVudC5oYXNFcnJvcikge1xyXG4gICAgICBpZiAoc2VsZi5jYW5QYW4pIHtcclxuICAgICAgICAkLmZhbmN5Ym94LnN0b3Aoc2VsZi4kY29udGVudCk7XHJcblxyXG4gICAgICAgIHNlbGYuaXNQYW5uaW5nID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxmLmlzU3dpcGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLWdyYWJiaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFR3byBmaW5nZXJzIC0gem9vbSBpbWFnZVxyXG4gICAgaWYgKHNlbGYuc3RhcnRQb2ludHMubGVuZ3RoID09PSAyICYmIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiICYmIChjdXJyZW50LmlzTG9hZGVkIHx8IGN1cnJlbnQuJGdob3N0KSkge1xyXG4gICAgICBzZWxmLmNhblRhcCA9IGZhbHNlO1xyXG4gICAgICBzZWxmLmlzU3dpcGluZyA9IGZhbHNlO1xyXG4gICAgICBzZWxmLmlzUGFubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgc2VsZi5pc1pvb21pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgJC5mYW5jeWJveC5zdG9wKHNlbGYuJGNvbnRlbnQpO1xyXG5cclxuICAgICAgc2VsZi5jZW50ZXJQb2ludFN0YXJ0WCA9IChzZWxmLnN0YXJ0UG9pbnRzWzBdLnggKyBzZWxmLnN0YXJ0UG9pbnRzWzFdLngpICogMC41IC0gJCh3aW5kb3cpLnNjcm9sbExlZnQoKTtcclxuICAgICAgc2VsZi5jZW50ZXJQb2ludFN0YXJ0WSA9IChzZWxmLnN0YXJ0UG9pbnRzWzBdLnkgKyBzZWxmLnN0YXJ0UG9pbnRzWzFdLnkpICogMC41IC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgc2VsZi5wZXJjZW50YWdlT2ZJbWFnZUF0UGluY2hQb2ludFggPSAoc2VsZi5jZW50ZXJQb2ludFN0YXJ0WCAtIHNlbGYuY29udGVudFN0YXJ0UG9zLmxlZnQpIC8gc2VsZi5jb250ZW50U3RhcnRQb3Mud2lkdGg7XHJcbiAgICAgIHNlbGYucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZID0gKHNlbGYuY2VudGVyUG9pbnRTdGFydFkgLSBzZWxmLmNvbnRlbnRTdGFydFBvcy50b3ApIC8gc2VsZi5jb250ZW50U3RhcnRQb3MuaGVpZ2h0O1xyXG5cclxuICAgICAgc2VsZi5zdGFydERpc3RhbmNlQmV0d2VlbkZpbmdlcnMgPSBkaXN0YW5jZShzZWxmLnN0YXJ0UG9pbnRzWzBdLCBzZWxmLnN0YXJ0UG9pbnRzWzFdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLm9uc2Nyb2xsID0gZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHNlbGYuaXNTY3JvbGxpbmcgPSB0cnVlO1xyXG5cclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2VsZi5vbnNjcm9sbCwgdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgdXNlciBoYXMgbm90IHJlbGVhc2VkIG92ZXIgaWZyYW1lIG9yIGRpc2FibGVkIGVsZW1lbnRcclxuICAgIGlmIChlLm9yaWdpbmFsRXZlbnQuYnV0dG9ucyAhPT0gdW5kZWZpbmVkICYmIGUub3JpZ2luYWxFdmVudC5idXR0b25zID09PSAwKSB7XHJcbiAgICAgIHNlbGYub250b3VjaGVuZChlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxmLmlzU2Nyb2xsaW5nKSB7XHJcbiAgICAgIHNlbGYuY2FuVGFwID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLm5ld1BvaW50cyA9IGdldFBvaW50ZXJYWShlKTtcclxuXHJcbiAgICBpZiAoIShzZWxmLm9wdHMgfHwgc2VsZi5jYW5QYW4pIHx8ICFzZWxmLm5ld1BvaW50cy5sZW5ndGggfHwgIXNlbGYubmV3UG9pbnRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEoc2VsZi5pc1N3aXBpbmcgJiYgc2VsZi5pc1N3aXBpbmcgPT09IHRydWUpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmRpc3RhbmNlWCA9IGRpc3RhbmNlKHNlbGYubmV3UG9pbnRzWzBdLCBzZWxmLnN0YXJ0UG9pbnRzWzBdLCBcInhcIik7XHJcbiAgICBzZWxmLmRpc3RhbmNlWSA9IGRpc3RhbmNlKHNlbGYubmV3UG9pbnRzWzBdLCBzZWxmLnN0YXJ0UG9pbnRzWzBdLCBcInlcIik7XHJcblxyXG4gICAgc2VsZi5kaXN0YW5jZSA9IGRpc3RhbmNlKHNlbGYubmV3UG9pbnRzWzBdLCBzZWxmLnN0YXJ0UG9pbnRzWzBdKTtcclxuXHJcbiAgICAvLyBTa2lwIGZhbHNlIG9udG91Y2htb3ZlIGV2ZW50cyAoQ2hyb21lKVxyXG4gICAgaWYgKHNlbGYuZGlzdGFuY2UgPiAwKSB7XHJcbiAgICAgIGlmIChzZWxmLmlzU3dpcGluZykge1xyXG4gICAgICAgIHNlbGYub25Td2lwZShlKTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxmLmlzUGFubmluZykge1xyXG4gICAgICAgIHNlbGYub25QYW4oKTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxmLmlzWm9vbWluZykge1xyXG4gICAgICAgIHNlbGYub25ab29tKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLm9uU3dpcGUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcclxuICAgICAgc3dpcGluZyA9IHNlbGYuaXNTd2lwaW5nLFxyXG4gICAgICBsZWZ0ID0gc2VsZi5zbGlkZXJTdGFydFBvcy5sZWZ0IHx8IDAsXHJcbiAgICAgIGFuZ2xlO1xyXG5cclxuICAgIC8vIElmIGRpcmVjdGlvbiBpcyBub3QgeWV0IGRldGVybWluZWRcclxuICAgIGlmIChzd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgIC8vIFdlIG5lZWQgYXQgbGVhc3QgMTBweCBkaXN0YW5jZSB0byBjb3JyZWN0bHkgY2FsY3VsYXRlIGFuIGFuZ2xlXHJcbiAgICAgIGlmIChNYXRoLmFicyhzZWxmLmRpc3RhbmNlKSA+IDEwKSB7XHJcbiAgICAgICAgc2VsZi5jYW5UYXAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIgJiYgc2VsZi5vcHRzLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICBzZWxmLmlzU3dpcGluZyA9IFwieVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UuaXNEcmFnZ2luZyB8fCBzZWxmLm9wdHMudmVydGljYWwgPT09IGZhbHNlIHx8IChzZWxmLm9wdHMudmVydGljYWwgPT09IFwiYXV0b1wiICYmICQod2luZG93KS53aWR0aCgpID4gODAwKSkge1xyXG4gICAgICAgICAgc2VsZi5pc1N3aXBpbmcgPSBcInhcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYW5nbGUgPSBNYXRoLmFicygoTWF0aC5hdGFuMihzZWxmLmRpc3RhbmNlWSwgc2VsZi5kaXN0YW5jZVgpICogMTgwKSAvIE1hdGguUEkpO1xyXG5cclxuICAgICAgICAgIHNlbGYuaXNTd2lwaW5nID0gYW5nbGUgPiA0NSAmJiBhbmdsZSA8IDEzNSA/IFwieVwiIDogXCJ4XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5pc1N3aXBpbmcgPT09IFwieVwiICYmICQuZmFuY3lib3guaXNNb2JpbGUgJiYgc2VsZi5pc1Njcm9sbGFibGUpIHtcclxuICAgICAgICAgIHNlbGYuaXNTY3JvbGxpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluc3RhbmNlLmlzRHJhZ2dpbmcgPSBzZWxmLmlzU3dpcGluZztcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgcG9pbnRzIHRvIGF2b2lkIGp1bXBpbmcsIGJlY2F1c2Ugd2UgZHJvcHBlZCBmaXJzdCBzd2lwZXMgdG8gY2FsY3VsYXRlIHRoZSBhbmdsZVxyXG4gICAgICAgIHNlbGYuc3RhcnRQb2ludHMgPSBzZWxmLm5ld1BvaW50cztcclxuXHJcbiAgICAgICAgJC5lYWNoKGluc3RhbmNlLnNsaWRlcywgZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XHJcbiAgICAgICAgICB2YXIgc2xpZGVQb3MsIHN0YWdlUG9zO1xyXG5cclxuICAgICAgICAgICQuZmFuY3lib3guc3RvcChzbGlkZS4kc2xpZGUpO1xyXG5cclxuICAgICAgICAgIHNsaWRlUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoc2xpZGUuJHNsaWRlKTtcclxuICAgICAgICAgIHN0YWdlUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoaW5zdGFuY2UuJHJlZnMuc3RhZ2UpO1xyXG5cclxuICAgICAgICAgIHNsaWRlLiRzbGlkZVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwiXCIsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogXCJcIixcclxuICAgICAgICAgICAgICBcInRyYW5zaXRpb24tZHVyYXRpb25cIjogXCJcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1hbmltYXRlZFwiKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoZnVuY3Rpb24oaW5kZXgsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoKC8oXnxcXHMpZmFuY3lib3gtZngtXFxTKy9nKSB8fCBbXSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChzbGlkZS5wb3MgPT09IGluc3RhbmNlLmN1cnJlbnQucG9zKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2xpZGVyU3RhcnRQb3MudG9wID0gc2xpZGVQb3MudG9wIC0gc3RhZ2VQb3MudG9wO1xyXG4gICAgICAgICAgICBzZWxmLnNsaWRlclN0YXJ0UG9zLmxlZnQgPSBzbGlkZVBvcy5sZWZ0IC0gc3RhZ2VQb3MubGVmdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShzbGlkZS4kc2xpZGUsIHtcclxuICAgICAgICAgICAgdG9wOiBzbGlkZVBvcy50b3AgLSBzdGFnZVBvcy50b3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHNsaWRlUG9zLmxlZnQgLSBzdGFnZVBvcy5sZWZ0XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU3RvcCBzbGlkZXNob3dcclxuICAgICAgICBpZiAoaW5zdGFuY2UuU2xpZGVTaG93ICYmIGluc3RhbmNlLlNsaWRlU2hvdy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgaW5zdGFuY2UuU2xpZGVTaG93LnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGlja3kgZWRnZXNcclxuICAgIGlmIChzd2lwaW5nID09IFwieFwiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzZWxmLmRpc3RhbmNlWCA+IDAgJiZcclxuICAgICAgICAoc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGggPCAyIHx8IChzZWxmLmluc3RhbmNlLmN1cnJlbnQuaW5kZXggPT09IDAgJiYgIXNlbGYuaW5zdGFuY2UuY3VycmVudC5vcHRzLmxvb3ApKVxyXG4gICAgICApIHtcclxuICAgICAgICBsZWZ0ID0gbGVmdCArIE1hdGgucG93KHNlbGYuZGlzdGFuY2VYLCAwLjgpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHNlbGYuZGlzdGFuY2VYIDwgMCAmJlxyXG4gICAgICAgIChzZWxmLmluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIgfHxcclxuICAgICAgICAgIChzZWxmLmluc3RhbmNlLmN1cnJlbnQuaW5kZXggPT09IHNlbGYuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIC0gMSAmJiAhc2VsZi5pbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxlZnQgPSBsZWZ0IC0gTWF0aC5wb3coLXNlbGYuZGlzdGFuY2VYLCAwLjgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxlZnQgPSBsZWZ0ICsgc2VsZi5kaXN0YW5jZVg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnNsaWRlckxhc3RQb3MgPSB7XHJcbiAgICAgIHRvcDogc3dpcGluZyA9PSBcInhcIiA/IDAgOiBzZWxmLnNsaWRlclN0YXJ0UG9zLnRvcCArIHNlbGYuZGlzdGFuY2VZLFxyXG4gICAgICBsZWZ0OiBsZWZ0XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzZWxmLnJlcXVlc3RJZCkge1xyXG4gICAgICBjYW5jZWxBRnJhbWUoc2VsZi5yZXF1ZXN0SWQpO1xyXG5cclxuICAgICAgc2VsZi5yZXF1ZXN0SWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYucmVxdWVzdElkID0gcmVxdWVzdEFGcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHNlbGYuc2xpZGVyTGFzdFBvcykge1xyXG4gICAgICAgICQuZWFjaChzZWxmLmluc3RhbmNlLnNsaWRlcywgZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XHJcbiAgICAgICAgICB2YXIgcG9zID0gc2xpZGUucG9zIC0gc2VsZi5pbnN0YW5jZS5jdXJyUG9zO1xyXG5cclxuICAgICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKHNsaWRlLiRzbGlkZSwge1xyXG4gICAgICAgICAgICB0b3A6IHNlbGYuc2xpZGVyTGFzdFBvcy50b3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHNlbGYuc2xpZGVyTGFzdFBvcy5sZWZ0ICsgcG9zICogc2VsZi5jYW52YXNXaWR0aCArIHBvcyAqIHNsaWRlLm9wdHMuZ3V0dGVyXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi4kY29udGFpbmVyLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtc2xpZGluZ1wiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5vblBhbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBtb3ZlbWVudCAoc29tZXRpbWVzLCB3aGVuIHRhcHBpbmcgY2FzdWFsbHksIGZpbmdlciBjYW4gbW92ZSBhIGJpdClcclxuICAgIGlmIChkaXN0YW5jZShzZWxmLm5ld1BvaW50c1swXSwgc2VsZi5yZWFsUG9pbnRzWzBdKSA8ICgkLmZhbmN5Ym94LmlzTW9iaWxlID8gMTAgOiA1KSkge1xyXG4gICAgICBzZWxmLnN0YXJ0UG9pbnRzID0gc2VsZi5uZXdQb2ludHM7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmNhblRhcCA9IGZhbHNlO1xyXG5cclxuICAgIHNlbGYuY29udGVudExhc3RQb3MgPSBzZWxmLmxpbWl0TW92ZW1lbnQoKTtcclxuXHJcbiAgICBpZiAoc2VsZi5yZXF1ZXN0SWQpIHtcclxuICAgICAgY2FuY2VsQUZyYW1lKHNlbGYucmVxdWVzdElkKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnJlcXVlc3RJZCA9IHJlcXVlc3RBRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKHNlbGYuJGNvbnRlbnQsIHNlbGYuY29udGVudExhc3RQb3MpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gTWFrZSBwYW5uaW5nIHN0aWNreSB0byB0aGUgZWRnZXNcclxuICBHdWVzdHVyZXMucHJvdG90eXBlLmxpbWl0TW92ZW1lbnQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB2YXIgY2FudmFzV2lkdGggPSBzZWxmLmNhbnZhc1dpZHRoO1xyXG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHNlbGYuY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgIHZhciBkaXN0YW5jZVggPSBzZWxmLmRpc3RhbmNlWDtcclxuICAgIHZhciBkaXN0YW5jZVkgPSBzZWxmLmRpc3RhbmNlWTtcclxuXHJcbiAgICB2YXIgY29udGVudFN0YXJ0UG9zID0gc2VsZi5jb250ZW50U3RhcnRQb3M7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRPZmZzZXRYID0gY29udGVudFN0YXJ0UG9zLmxlZnQ7XHJcbiAgICB2YXIgY3VycmVudE9mZnNldFkgPSBjb250ZW50U3RhcnRQb3MudG9wO1xyXG5cclxuICAgIHZhciBjdXJyZW50V2lkdGggPSBjb250ZW50U3RhcnRQb3Mud2lkdGg7XHJcbiAgICB2YXIgY3VycmVudEhlaWdodCA9IGNvbnRlbnRTdGFydFBvcy5oZWlnaHQ7XHJcblxyXG4gICAgdmFyIG1pblRyYW5zbGF0ZVgsIG1pblRyYW5zbGF0ZVksIG1heFRyYW5zbGF0ZVgsIG1heFRyYW5zbGF0ZVksIG5ld09mZnNldFgsIG5ld09mZnNldFk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRXaWR0aCA+IGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgIG5ld09mZnNldFggPSBjdXJyZW50T2Zmc2V0WCArIGRpc3RhbmNlWDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld09mZnNldFggPSBjdXJyZW50T2Zmc2V0WDtcclxuICAgIH1cclxuXHJcbiAgICBuZXdPZmZzZXRZID0gY3VycmVudE9mZnNldFkgKyBkaXN0YW5jZVk7XHJcblxyXG4gICAgLy8gU2xvdyBkb3duIHByb3BvcnRpb25hbGx5IHRvIHRyYXZlbGVkIGRpc3RhbmNlXHJcbiAgICBtaW5UcmFuc2xhdGVYID0gTWF0aC5tYXgoMCwgY2FudmFzV2lkdGggKiAwLjUgLSBjdXJyZW50V2lkdGggKiAwLjUpO1xyXG4gICAgbWluVHJhbnNsYXRlWSA9IE1hdGgubWF4KDAsIGNhbnZhc0hlaWdodCAqIDAuNSAtIGN1cnJlbnRIZWlnaHQgKiAwLjUpO1xyXG5cclxuICAgIG1heFRyYW5zbGF0ZVggPSBNYXRoLm1pbihjYW52YXNXaWR0aCAtIGN1cnJlbnRXaWR0aCwgY2FudmFzV2lkdGggKiAwLjUgLSBjdXJyZW50V2lkdGggKiAwLjUpO1xyXG4gICAgbWF4VHJhbnNsYXRlWSA9IE1hdGgubWluKGNhbnZhc0hlaWdodCAtIGN1cnJlbnRIZWlnaHQsIGNhbnZhc0hlaWdodCAqIDAuNSAtIGN1cnJlbnRIZWlnaHQgKiAwLjUpO1xyXG5cclxuICAgIC8vICAgLT5cclxuICAgIGlmIChkaXN0YW5jZVggPiAwICYmIG5ld09mZnNldFggPiBtaW5UcmFuc2xhdGVYKSB7XHJcbiAgICAgIG5ld09mZnNldFggPSBtaW5UcmFuc2xhdGVYIC0gMSArIE1hdGgucG93KC1taW5UcmFuc2xhdGVYICsgY3VycmVudE9mZnNldFggKyBkaXN0YW5jZVgsIDAuOCkgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgICA8LVxyXG4gICAgaWYgKGRpc3RhbmNlWCA8IDAgJiYgbmV3T2Zmc2V0WCA8IG1heFRyYW5zbGF0ZVgpIHtcclxuICAgICAgbmV3T2Zmc2V0WCA9IG1heFRyYW5zbGF0ZVggKyAxIC0gTWF0aC5wb3cobWF4VHJhbnNsYXRlWCAtIGN1cnJlbnRPZmZzZXRYIC0gZGlzdGFuY2VYLCAwLjgpIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gICBcXC9cclxuICAgIGlmIChkaXN0YW5jZVkgPiAwICYmIG5ld09mZnNldFkgPiBtaW5UcmFuc2xhdGVZKSB7XHJcbiAgICAgIG5ld09mZnNldFkgPSBtaW5UcmFuc2xhdGVZIC0gMSArIE1hdGgucG93KC1taW5UcmFuc2xhdGVZICsgY3VycmVudE9mZnNldFkgKyBkaXN0YW5jZVksIDAuOCkgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgIC9cXFxyXG4gICAgaWYgKGRpc3RhbmNlWSA8IDAgJiYgbmV3T2Zmc2V0WSA8IG1heFRyYW5zbGF0ZVkpIHtcclxuICAgICAgbmV3T2Zmc2V0WSA9IG1heFRyYW5zbGF0ZVkgKyAxIC0gTWF0aC5wb3cobWF4VHJhbnNsYXRlWSAtIGN1cnJlbnRPZmZzZXRZIC0gZGlzdGFuY2VZLCAwLjgpIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9wOiBuZXdPZmZzZXRZLFxyXG4gICAgICBsZWZ0OiBuZXdPZmZzZXRYXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUubGltaXRQb3NpdGlvbiA9IGZ1bmN0aW9uKG5ld09mZnNldFgsIG5ld09mZnNldFksIG5ld1dpZHRoLCBuZXdIZWlnaHQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB2YXIgY2FudmFzV2lkdGggPSBzZWxmLmNhbnZhc1dpZHRoO1xyXG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHNlbGYuY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgIGlmIChuZXdXaWR0aCA+IGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgIG5ld09mZnNldFggPSBuZXdPZmZzZXRYID4gMCA/IDAgOiBuZXdPZmZzZXRYO1xyXG4gICAgICBuZXdPZmZzZXRYID0gbmV3T2Zmc2V0WCA8IGNhbnZhc1dpZHRoIC0gbmV3V2lkdGggPyBjYW52YXNXaWR0aCAtIG5ld1dpZHRoIDogbmV3T2Zmc2V0WDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENlbnRlciBob3Jpem9udGFsbHlcclxuICAgICAgbmV3T2Zmc2V0WCA9IE1hdGgubWF4KDAsIGNhbnZhc1dpZHRoIC8gMiAtIG5ld1dpZHRoIC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld0hlaWdodCA+IGNhbnZhc0hlaWdodCkge1xyXG4gICAgICBuZXdPZmZzZXRZID0gbmV3T2Zmc2V0WSA+IDAgPyAwIDogbmV3T2Zmc2V0WTtcclxuICAgICAgbmV3T2Zmc2V0WSA9IG5ld09mZnNldFkgPCBjYW52YXNIZWlnaHQgLSBuZXdIZWlnaHQgPyBjYW52YXNIZWlnaHQgLSBuZXdIZWlnaHQgOiBuZXdPZmZzZXRZO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ2VudGVyIHZlcnRpY2FsbHlcclxuICAgICAgbmV3T2Zmc2V0WSA9IE1hdGgubWF4KDAsIGNhbnZhc0hlaWdodCAvIDIgLSBuZXdIZWlnaHQgLyAyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3A6IG5ld09mZnNldFksXHJcbiAgICAgIGxlZnQ6IG5ld09mZnNldFhcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5vblpvb20gPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgY3VycmVudCBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50cyB0byBnZXQgcGluY2ggcmF0aW8gYW5kIG5ldyB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgICB2YXIgY29udGVudFN0YXJ0UG9zID0gc2VsZi5jb250ZW50U3RhcnRQb3M7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRXaWR0aCA9IGNvbnRlbnRTdGFydFBvcy53aWR0aDtcclxuICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gY29udGVudFN0YXJ0UG9zLmhlaWdodDtcclxuXHJcbiAgICB2YXIgY3VycmVudE9mZnNldFggPSBjb250ZW50U3RhcnRQb3MubGVmdDtcclxuICAgIHZhciBjdXJyZW50T2Zmc2V0WSA9IGNvbnRlbnRTdGFydFBvcy50b3A7XHJcblxyXG4gICAgdmFyIGVuZERpc3RhbmNlQmV0d2VlbkZpbmdlcnMgPSBkaXN0YW5jZShzZWxmLm5ld1BvaW50c1swXSwgc2VsZi5uZXdQb2ludHNbMV0pO1xyXG5cclxuICAgIHZhciBwaW5jaFJhdGlvID0gZW5kRGlzdGFuY2VCZXR3ZWVuRmluZ2VycyAvIHNlbGYuc3RhcnREaXN0YW5jZUJldHdlZW5GaW5nZXJzO1xyXG5cclxuICAgIHZhciBuZXdXaWR0aCA9IE1hdGguZmxvb3IoY3VycmVudFdpZHRoICogcGluY2hSYXRpbyk7XHJcbiAgICB2YXIgbmV3SGVpZ2h0ID0gTWF0aC5mbG9vcihjdXJyZW50SGVpZ2h0ICogcGluY2hSYXRpbyk7XHJcblxyXG4gICAgLy8gVGhpcyBpcyB0aGUgdHJhbnNsYXRpb24gZHVlIHRvIHBpbmNoLXpvb21pbmdcclxuICAgIHZhciB0cmFuc2xhdGVGcm9tWm9vbWluZ1ggPSAoY3VycmVudFdpZHRoIC0gbmV3V2lkdGgpICogc2VsZi5wZXJjZW50YWdlT2ZJbWFnZUF0UGluY2hQb2ludFg7XHJcbiAgICB2YXIgdHJhbnNsYXRlRnJvbVpvb21pbmdZID0gKGN1cnJlbnRIZWlnaHQgLSBuZXdIZWlnaHQpICogc2VsZi5wZXJjZW50YWdlT2ZJbWFnZUF0UGluY2hQb2ludFk7XHJcblxyXG4gICAgLy8gUG9pbnQgYmV0d2VlbiB0aGUgdHdvIHRvdWNoZXNcclxuICAgIHZhciBjZW50ZXJQb2ludEVuZFggPSAoc2VsZi5uZXdQb2ludHNbMF0ueCArIHNlbGYubmV3UG9pbnRzWzFdLngpIC8gMiAtICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XHJcbiAgICB2YXIgY2VudGVyUG9pbnRFbmRZID0gKHNlbGYubmV3UG9pbnRzWzBdLnkgKyBzZWxmLm5ld1BvaW50c1sxXS55KSAvIDIgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgLy8gQW5kIHRoaXMgaXMgdGhlIHRyYW5zbGF0aW9uIGR1ZSB0byB0cmFuc2xhdGlvbiBvZiB0aGUgY2VudGVycG9pbnRcclxuICAgIC8vIGJldHdlZW4gdGhlIHR3byBmaW5nZXJzXHJcbiAgICB2YXIgdHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWCA9IGNlbnRlclBvaW50RW5kWCAtIHNlbGYuY2VudGVyUG9pbnRTdGFydFg7XHJcbiAgICB2YXIgdHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWSA9IGNlbnRlclBvaW50RW5kWSAtIHNlbGYuY2VudGVyUG9pbnRTdGFydFk7XHJcblxyXG4gICAgLy8gVGhlIG5ldyBvZmZzZXQgaXMgdGhlIG9sZC9jdXJyZW50IG9uZSBwbHVzIHRoZSB0b3RhbCB0cmFuc2xhdGlvblxyXG4gICAgdmFyIG5ld09mZnNldFggPSBjdXJyZW50T2Zmc2V0WCArICh0cmFuc2xhdGVGcm9tWm9vbWluZ1ggKyB0cmFuc2xhdGVGcm9tVHJhbnNsYXRpbmdYKTtcclxuICAgIHZhciBuZXdPZmZzZXRZID0gY3VycmVudE9mZnNldFkgKyAodHJhbnNsYXRlRnJvbVpvb21pbmdZICsgdHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWSk7XHJcblxyXG4gICAgdmFyIG5ld1BvcyA9IHtcclxuICAgICAgdG9wOiBuZXdPZmZzZXRZLFxyXG4gICAgICBsZWZ0OiBuZXdPZmZzZXRYLFxyXG4gICAgICBzY2FsZVg6IHBpbmNoUmF0aW8sXHJcbiAgICAgIHNjYWxlWTogcGluY2hSYXRpb1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLmNhblRhcCA9IGZhbHNlO1xyXG5cclxuICAgIHNlbGYubmV3V2lkdGggPSBuZXdXaWR0aDtcclxuICAgIHNlbGYubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG5cclxuICAgIHNlbGYuY29udGVudExhc3RQb3MgPSBuZXdQb3M7XHJcblxyXG4gICAgaWYgKHNlbGYucmVxdWVzdElkKSB7XHJcbiAgICAgIGNhbmNlbEFGcmFtZShzZWxmLnJlcXVlc3RJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5yZXF1ZXN0SWQgPSByZXF1ZXN0QUZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShzZWxmLiRjb250ZW50LCBzZWxmLmNvbnRlbnRMYXN0UG9zKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUub250b3VjaGVuZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB2YXIgc3dpcGluZyA9IHNlbGYuaXNTd2lwaW5nO1xyXG4gICAgdmFyIHBhbm5pbmcgPSBzZWxmLmlzUGFubmluZztcclxuICAgIHZhciB6b29taW5nID0gc2VsZi5pc1pvb21pbmc7XHJcbiAgICB2YXIgc2Nyb2xsaW5nID0gc2VsZi5pc1Njcm9sbGluZztcclxuXHJcbiAgICBzZWxmLmVuZFBvaW50cyA9IGdldFBvaW50ZXJYWShlKTtcclxuICAgIHNlbGYuZE1zID0gTWF0aC5tYXgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzZWxmLnN0YXJ0VGltZSwgMSk7XHJcblxyXG4gICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtZ3JhYmJpbmdcIik7XHJcblxyXG4gICAgJChkb2N1bWVudCkub2ZmKFwiLmZiLnRvdWNoXCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2VsZi5vbnNjcm9sbCwgdHJ1ZSk7XHJcblxyXG4gICAgaWYgKHNlbGYucmVxdWVzdElkKSB7XHJcbiAgICAgIGNhbmNlbEFGcmFtZShzZWxmLnJlcXVlc3RJZCk7XHJcblxyXG4gICAgICBzZWxmLnJlcXVlc3RJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5pc1N3aXBpbmcgPSBmYWxzZTtcclxuICAgIHNlbGYuaXNQYW5uaW5nID0gZmFsc2U7XHJcbiAgICBzZWxmLmlzWm9vbWluZyA9IGZhbHNlO1xyXG4gICAgc2VsZi5pc1Njcm9sbGluZyA9IGZhbHNlO1xyXG5cclxuICAgIHNlbGYuaW5zdGFuY2UuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChzZWxmLmNhblRhcCkge1xyXG4gICAgICByZXR1cm4gc2VsZi5vblRhcChlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnNwZWVkID0gMTAwO1xyXG5cclxuICAgIC8vIFNwZWVkIGluIHB4L21zXHJcbiAgICBzZWxmLnZlbG9jaXR5WCA9IChzZWxmLmRpc3RhbmNlWCAvIHNlbGYuZE1zKSAqIDAuNTtcclxuICAgIHNlbGYudmVsb2NpdHlZID0gKHNlbGYuZGlzdGFuY2VZIC8gc2VsZi5kTXMpICogMC41O1xyXG5cclxuICAgIGlmIChwYW5uaW5nKSB7XHJcbiAgICAgIHNlbGYuZW5kUGFubmluZygpO1xyXG4gICAgfSBlbHNlIGlmICh6b29taW5nKSB7XHJcbiAgICAgIHNlbGYuZW5kWm9vbWluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZi5lbmRTd2lwaW5nKHN3aXBpbmcsIHNjcm9sbGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcblxyXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUuZW5kU3dpcGluZyA9IGZ1bmN0aW9uKHN3aXBpbmcsIHNjcm9sbGluZykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICByZXQgPSBmYWxzZSxcclxuICAgICAgbGVuID0gc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGgsXHJcbiAgICAgIGRpc3RhbmNlWCA9IE1hdGguYWJzKHNlbGYuZGlzdGFuY2VYKSxcclxuICAgICAgY2FuQWR2YW5jZSA9IHN3aXBpbmcgPT0gXCJ4XCIgJiYgbGVuID4gMSAmJiAoKHNlbGYuZE1zID4gMTMwICYmIGRpc3RhbmNlWCA+IDEwKSB8fCBkaXN0YW5jZVggPiA1MCksXHJcbiAgICAgIHNwZWVkWCA9IDMwMDtcclxuXHJcbiAgICBzZWxmLnNsaWRlckxhc3RQb3MgPSBudWxsO1xyXG5cclxuICAgIC8vIENsb3NlIGlmIHN3aXBlZCB2ZXJ0aWNhbGx5IC8gbmF2aWdhdGUgaWYgaG9yaXpvbnRhbGx5XHJcbiAgICBpZiAoc3dpcGluZyA9PSBcInlcIiAmJiAhc2Nyb2xsaW5nICYmIE1hdGguYWJzKHNlbGYuZGlzdGFuY2VZKSA+IDUwKSB7XHJcbiAgICAgIC8vIENvbnRpbnVlIHZlcnRpY2FsIG1vdmVtZW50XHJcbiAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICBzZWxmLmluc3RhbmNlLmN1cnJlbnQuJHNsaWRlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvcDogc2VsZi5zbGlkZXJTdGFydFBvcy50b3AgKyBzZWxmLmRpc3RhbmNlWSArIHNlbGYudmVsb2NpdHlZICogMTUwLFxyXG4gICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMjAwXHJcbiAgICAgICk7XHJcbiAgICAgIHJldCA9IHNlbGYuaW5zdGFuY2UuY2xvc2UodHJ1ZSwgMjUwKTtcclxuICAgIH0gZWxzZSBpZiAoY2FuQWR2YW5jZSAmJiBzZWxmLmRpc3RhbmNlWCA+IDApIHtcclxuICAgICAgcmV0ID0gc2VsZi5pbnN0YW5jZS5wcmV2aW91cyhzcGVlZFgpO1xyXG4gICAgfSBlbHNlIGlmIChjYW5BZHZhbmNlICYmIHNlbGYuZGlzdGFuY2VYIDwgMCkge1xyXG4gICAgICByZXQgPSBzZWxmLmluc3RhbmNlLm5leHQoc3BlZWRYKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmV0ID09PSBmYWxzZSAmJiAoc3dpcGluZyA9PSBcInhcIiB8fCBzd2lwaW5nID09IFwieVwiKSkge1xyXG4gICAgICBzZWxmLmluc3RhbmNlLmNlbnRlclNsaWRlKDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtc2xpZGluZ1wiKTtcclxuICB9O1xyXG5cclxuICAvLyBMaW1pdCBwYW5uaW5nIGZyb20gZWRnZXNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBHdWVzdHVyZXMucHJvdG90eXBlLmVuZFBhbm5pbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgbmV3T2Zmc2V0WCxcclxuICAgICAgbmV3T2Zmc2V0WSxcclxuICAgICAgbmV3UG9zO1xyXG5cclxuICAgIGlmICghc2VsZi5jb250ZW50TGFzdFBvcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGYub3B0cy5tb21lbnR1bSA9PT0gZmFsc2UgfHwgc2VsZi5kTXMgPiAzNTApIHtcclxuICAgICAgbmV3T2Zmc2V0WCA9IHNlbGYuY29udGVudExhc3RQb3MubGVmdDtcclxuICAgICAgbmV3T2Zmc2V0WSA9IHNlbGYuY29udGVudExhc3RQb3MudG9wO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ29udGludWUgbW92ZW1lbnRcclxuICAgICAgbmV3T2Zmc2V0WCA9IHNlbGYuY29udGVudExhc3RQb3MubGVmdCArIHNlbGYudmVsb2NpdHlYICogNTAwO1xyXG4gICAgICBuZXdPZmZzZXRZID0gc2VsZi5jb250ZW50TGFzdFBvcy50b3AgKyBzZWxmLnZlbG9jaXR5WSAqIDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXdQb3MgPSBzZWxmLmxpbWl0UG9zaXRpb24obmV3T2Zmc2V0WCwgbmV3T2Zmc2V0WSwgc2VsZi5jb250ZW50U3RhcnRQb3Mud2lkdGgsIHNlbGYuY29udGVudFN0YXJ0UG9zLmhlaWdodCk7XHJcblxyXG4gICAgbmV3UG9zLndpZHRoID0gc2VsZi5jb250ZW50U3RhcnRQb3Mud2lkdGg7XHJcbiAgICBuZXdQb3MuaGVpZ2h0ID0gc2VsZi5jb250ZW50U3RhcnRQb3MuaGVpZ2h0O1xyXG5cclxuICAgICQuZmFuY3lib3guYW5pbWF0ZShzZWxmLiRjb250ZW50LCBuZXdQb3MsIDM2Nik7XHJcbiAgfTtcclxuXHJcbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5lbmRab29taW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIGN1cnJlbnQgPSBzZWxmLmluc3RhbmNlLmN1cnJlbnQ7XHJcblxyXG4gICAgdmFyIG5ld09mZnNldFgsIG5ld09mZnNldFksIG5ld1BvcywgcmVzZXQ7XHJcblxyXG4gICAgdmFyIG5ld1dpZHRoID0gc2VsZi5uZXdXaWR0aDtcclxuICAgIHZhciBuZXdIZWlnaHQgPSBzZWxmLm5ld0hlaWdodDtcclxuXHJcbiAgICBpZiAoIXNlbGYuY29udGVudExhc3RQb3MpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld09mZnNldFggPSBzZWxmLmNvbnRlbnRMYXN0UG9zLmxlZnQ7XHJcbiAgICBuZXdPZmZzZXRZID0gc2VsZi5jb250ZW50TGFzdFBvcy50b3A7XHJcblxyXG4gICAgcmVzZXQgPSB7XHJcbiAgICAgIHRvcDogbmV3T2Zmc2V0WSxcclxuICAgICAgbGVmdDogbmV3T2Zmc2V0WCxcclxuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG5ld0hlaWdodCxcclxuICAgICAgc2NhbGVYOiAxLFxyXG4gICAgICBzY2FsZVk6IDFcclxuICAgIH07XHJcblxyXG4gICAgLy8gUmVzZXQgc2NhbGV4L3NjYWxlWSB2YWx1ZXM7IHRoaXMgaGVscHMgZm9yIHBlcmZvbWFuY2UgYW5kIGRvZXMgbm90IGJyZWFrIGFuaW1hdGlvblxyXG4gICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoc2VsZi4kY29udGVudCwgcmVzZXQpO1xyXG5cclxuICAgIGlmIChuZXdXaWR0aCA8IHNlbGYuY2FudmFzV2lkdGggJiYgbmV3SGVpZ2h0IDwgc2VsZi5jYW52YXNIZWlnaHQpIHtcclxuICAgICAgc2VsZi5pbnN0YW5jZS5zY2FsZVRvRml0KDE1MCk7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1dpZHRoID4gY3VycmVudC53aWR0aCB8fCBuZXdIZWlnaHQgPiBjdXJyZW50LmhlaWdodCkge1xyXG4gICAgICBzZWxmLmluc3RhbmNlLnNjYWxlVG9BY3R1YWwoc2VsZi5jZW50ZXJQb2ludFN0YXJ0WCwgc2VsZi5jZW50ZXJQb2ludFN0YXJ0WSwgMTUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1BvcyA9IHNlbGYubGltaXRQb3NpdGlvbihuZXdPZmZzZXRYLCBuZXdPZmZzZXRZLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcclxuXHJcbiAgICAgICQuZmFuY3lib3guYW5pbWF0ZShzZWxmLiRjb250ZW50LCBuZXdQb3MsIDE1MCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5vblRhcCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcblxyXG4gICAgdmFyIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZTtcclxuICAgIHZhciBjdXJyZW50ID0gaW5zdGFuY2UuY3VycmVudDtcclxuXHJcbiAgICB2YXIgZW5kUG9pbnRzID0gKGUgJiYgZ2V0UG9pbnRlclhZKGUpKSB8fCBzZWxmLnN0YXJ0UG9pbnRzO1xyXG5cclxuICAgIHZhciB0YXBYID0gZW5kUG9pbnRzWzBdID8gZW5kUG9pbnRzWzBdLnggLSAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpIC0gc2VsZi5zdGFnZVBvcy5sZWZ0IDogMDtcclxuICAgIHZhciB0YXBZID0gZW5kUG9pbnRzWzBdID8gZW5kUG9pbnRzWzBdLnkgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBzZWxmLnN0YWdlUG9zLnRvcCA6IDA7XHJcblxyXG4gICAgdmFyIHdoZXJlO1xyXG5cclxuICAgIHZhciBwcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4KSB7XHJcbiAgICAgIHZhciBhY3Rpb24gPSBjdXJyZW50Lm9wdHNbcHJlZml4XTtcclxuXHJcbiAgICAgIGlmICgkLmlzRnVuY3Rpb24oYWN0aW9uKSkge1xyXG4gICAgICAgIGFjdGlvbiA9IGFjdGlvbi5hcHBseShpbnN0YW5jZSwgW2N1cnJlbnQsIGVdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICBpbnN0YW5jZS5jbG9zZShzZWxmLnN0YXJ0RXZlbnQpO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwidG9nZ2xlQ29udHJvbHNcIjpcclxuICAgICAgICAgIGluc3RhbmNlLnRvZ2dsZUNvbnRyb2xzKCk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJuZXh0XCI6XHJcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJuZXh0T3JDbG9zZVwiOlxyXG4gICAgICAgICAgaWYgKGluc3RhbmNlLmdyb3VwLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UubmV4dCgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuY2xvc2Uoc2VsZi5zdGFydEV2ZW50KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcInpvb21cIjpcclxuICAgICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT0gXCJpbWFnZVwiICYmIChjdXJyZW50LmlzTG9hZGVkIHx8IGN1cnJlbnQuJGdob3N0KSkge1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuY2FuUGFuKCkpIHtcclxuICAgICAgICAgICAgICBpbnN0YW5jZS5zY2FsZVRvRml0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UuaXNTY2FsZWREb3duKCkpIHtcclxuICAgICAgICAgICAgICBpbnN0YW5jZS5zY2FsZVRvQWN0dWFsKHRhcFgsIHRhcFkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICBpbnN0YW5jZS5jbG9zZShzZWxmLnN0YXJ0RXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gSWdub3JlIHJpZ2h0IGNsaWNrXHJcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC5idXR0b24gPT0gMikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2tpcCBpZiBjbGlja2VkIG9uIHRoZSBzY3JvbGxiYXJcclxuICAgIGlmICghJHRhcmdldC5pcyhcImltZ1wiKSAmJiB0YXBYID4gJHRhcmdldFswXS5jbGllbnRXaWR0aCArICR0YXJnZXQub2Zmc2V0KCkubGVmdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgd2hlcmUgaXMgY2xpY2tlZFxyXG4gICAgaWYgKCR0YXJnZXQuaXMoXCIuZmFuY3lib3gtYmcsLmZhbmN5Ym94LWlubmVyLC5mYW5jeWJveC1vdXRlciwuZmFuY3lib3gtY29udGFpbmVyXCIpKSB7XHJcbiAgICAgIHdoZXJlID0gXCJPdXRzaWRlXCI7XHJcbiAgICB9IGVsc2UgaWYgKCR0YXJnZXQuaXMoXCIuZmFuY3lib3gtc2xpZGVcIikpIHtcclxuICAgICAgd2hlcmUgPSBcIlNsaWRlXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBpbnN0YW5jZS5jdXJyZW50LiRjb250ZW50ICYmXHJcbiAgICAgIGluc3RhbmNlLmN1cnJlbnQuJGNvbnRlbnRcclxuICAgICAgICAuZmluZCgkdGFyZ2V0KVxyXG4gICAgICAgIC5hZGRCYWNrKClcclxuICAgICAgICAuZmlsdGVyKCR0YXJnZXQpLmxlbmd0aFxyXG4gICAgKSB7XHJcbiAgICAgIHdoZXJlID0gXCJDb250ZW50XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIGRvdWJsZSB0YXBcclxuICAgIGlmIChzZWxmLnRhcHBlZCkge1xyXG4gICAgICAvLyBTdG9wIHByZXZpb3VzbHkgY3JlYXRlZCBzaW5nbGUgdGFwXHJcbiAgICAgIGNsZWFyVGltZW91dChzZWxmLnRhcHBlZCk7XHJcbiAgICAgIHNlbGYudGFwcGVkID0gbnVsbDtcclxuXHJcbiAgICAgIC8vIFNraXAgaWYgZGlzdGFuY2UgYmV0d2VlbiB0YXBzIGlzIHRvbyBiaWdcclxuICAgICAgaWYgKE1hdGguYWJzKHRhcFggLSBzZWxmLnRhcFgpID4gNTAgfHwgTWF0aC5hYnModGFwWSAtIHNlbGYudGFwWSkgPiA1MCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBPSywgbm93IHdlIGFzc3VtZSB0aGF0IHRoaXMgaXMgYSBkb3VibGUtdGFwXHJcbiAgICAgIHByb2Nlc3MoXCJkYmxjbGlja1wiICsgd2hlcmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU2luZ2xlIHRhcCB3aWxsIGJlIHByb2Nlc3NlZCBpZiB1c2VyIGhhcyBub3QgY2xpY2tlZCBzZWNvbmQgdGltZSB3aXRoaW4gMzAwbXNcclxuICAgICAgLy8gb3IgdGhlcmUgaXMgbm8gbmVlZCB0byB3YWl0IGZvciBkb3VibGUtdGFwXHJcbiAgICAgIHNlbGYudGFwWCA9IHRhcFg7XHJcbiAgICAgIHNlbGYudGFwWSA9IHRhcFk7XHJcblxyXG4gICAgICBpZiAoY3VycmVudC5vcHRzW1wiZGJsY2xpY2tcIiArIHdoZXJlXSAmJiBjdXJyZW50Lm9wdHNbXCJkYmxjbGlja1wiICsgd2hlcmVdICE9PSBjdXJyZW50Lm9wdHNbXCJjbGlja1wiICsgd2hlcmVdKSB7XHJcbiAgICAgICAgc2VsZi50YXBwZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc2VsZi50YXBwZWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgIGlmICghaW5zdGFuY2UuaXNBbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgcHJvY2VzcyhcImNsaWNrXCIgKyB3aGVyZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9jZXNzKFwiY2xpY2tcIiArIHdoZXJlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpXHJcbiAgICAub24oXCJvbkFjdGl2YXRlLmZiXCIsIGZ1bmN0aW9uKGUsIGluc3RhbmNlKSB7XHJcbiAgICAgIGlmIChpbnN0YW5jZSAmJiAhaW5zdGFuY2UuR3Vlc3R1cmVzKSB7XHJcbiAgICAgICAgaW5zdGFuY2UuR3Vlc3R1cmVzID0gbmV3IEd1ZXN0dXJlcyhpbnN0YW5jZSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAub24oXCJiZWZvcmVDbG9zZS5mYlwiLCBmdW5jdGlvbihlLCBpbnN0YW5jZSkge1xyXG4gICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuR3Vlc3R1cmVzKSB7XHJcbiAgICAgICAgaW5zdGFuY2UuR3Vlc3R1cmVzLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSk7XHJcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy9cclxuLy8gU2xpZGVTaG93XHJcbi8vIEVuYWJsZXMgc2xpZGVzaG93IGZ1bmN0aW9uYWxpdHlcclxuLy9cclxuLy8gRXhhbXBsZSBvZiB1c2FnZTpcclxuLy8gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLlNsaWRlU2hvdy5zdGFydCgpXHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbihmdW5jdGlvbihkb2N1bWVudCwgJCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAkLmV4dGVuZCh0cnVlLCAkLmZhbmN5Ym94LmRlZmF1bHRzLCB7XHJcbiAgICBidG5UcGw6IHtcclxuICAgICAgc2xpZGVTaG93OlxyXG4gICAgICAgICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcGxheSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXBsYXlcIiB0aXRsZT1cInt7UExBWV9TVEFSVH19XCI+JyArXHJcbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTYuNSA1LjR2MTMuMmwxMS02LjZ6XCIvPjwvc3ZnPicgK1xyXG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjMzIDUuNzVoMi4ydjEyLjVoLTIuMlY1Ljc1em01LjE1IDBoMi4ydjEyLjVoLTIuMlY1Ljc1elwiLz48L3N2Zz4nICtcclxuICAgICAgICBcIjwvYnV0dG9uPlwiXHJcbiAgICB9LFxyXG4gICAgc2xpZGVTaG93OiB7XHJcbiAgICAgIGF1dG9TdGFydDogZmFsc2UsXHJcbiAgICAgIHNwZWVkOiAzMDAwLFxyXG4gICAgICBwcm9ncmVzczogdHJ1ZVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgU2xpZGVTaG93ID0gZnVuY3Rpb24oaW5zdGFuY2UpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH07XHJcblxyXG4gICQuZXh0ZW5kKFNsaWRlU2hvdy5wcm90b3R5cGUsIHtcclxuICAgIHRpbWVyOiBudWxsLFxyXG4gICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgJGJ1dHRvbjogbnVsbCxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcclxuICAgICAgICBvcHRzID0gaW5zdGFuY2UuZ3JvdXBbaW5zdGFuY2UuY3VyckluZGV4XS5vcHRzLnNsaWRlU2hvdztcclxuXHJcbiAgICAgIHNlbGYuJGJ1dHRvbiA9IGluc3RhbmNlLiRyZWZzLnRvb2xiYXIuZmluZChcIltkYXRhLWZhbmN5Ym94LXBsYXldXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2VsZi50b2dnbGUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMiB8fCAhb3B0cykge1xyXG4gICAgICAgIHNlbGYuJGJ1dHRvbi5oaWRlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5wcm9ncmVzcykge1xyXG4gICAgICAgIHNlbGYuJHByb2dyZXNzID0gJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXByb2dyZXNzXCI+PC9kaXY+JykuYXBwZW5kVG8oaW5zdGFuY2UuJHJlZnMuaW5uZXIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldDogZnVuY3Rpb24oZm9yY2UpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcclxuICAgICAgICBjdXJyZW50ID0gaW5zdGFuY2UuY3VycmVudDtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHJlYWNoZWQgbGFzdCBlbGVtZW50XHJcbiAgICAgIGlmIChjdXJyZW50ICYmIChmb3JjZSA9PT0gdHJ1ZSB8fCBjdXJyZW50Lm9wdHMubG9vcCB8fCBpbnN0YW5jZS5jdXJySW5kZXggPCBpbnN0YW5jZS5ncm91cC5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgIGlmIChzZWxmLmlzQWN0aXZlICYmIGN1cnJlbnQuY29udGVudFR5cGUgIT09IFwidmlkZW9cIikge1xyXG4gICAgICAgICAgaWYgKHNlbGYuJHByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guYW5pbWF0ZShzZWxmLiRwcm9ncmVzcy5zaG93KCksIHtzY2FsZVg6IDF9LCBjdXJyZW50Lm9wdHMuc2xpZGVTaG93LnNwZWVkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZWxmLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCAmJiBpbnN0YW5jZS5jdXJyZW50LmluZGV4ID09IGluc3RhbmNlLmdyb3VwLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICBpbnN0YW5jZS5qdW1wVG8oMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaW5zdGFuY2UubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCBjdXJyZW50Lm9wdHMuc2xpZGVTaG93LnNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZi5zdG9wKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuICAgICAgICBpbnN0YW5jZS5zaG93Q29udHJvbHMoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGNsZWFyVGltZW91dChzZWxmLnRpbWVyKTtcclxuXHJcbiAgICAgIHNlbGYudGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKHNlbGYuJHByb2dyZXNzKSB7XHJcbiAgICAgICAgc2VsZi4kcHJvZ3Jlc3MucmVtb3ZlQXR0cihcInN0eWxlXCIpLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBjdXJyZW50ID0gc2VsZi5pbnN0YW5jZS5jdXJyZW50O1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICBzZWxmLiRidXR0b25cclxuICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgKGN1cnJlbnQub3B0cy5pMThuW2N1cnJlbnQub3B0cy5sYW5nXSB8fCBjdXJyZW50Lm9wdHMuaTE4bi5lbikuUExBWV9TVE9QKVxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIpXHJcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJmYW5jeWJveC1idXR0b24tLXBhdXNlXCIpO1xyXG5cclxuICAgICAgICBzZWxmLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnQuaXNDb21wbGV0ZSkge1xyXG4gICAgICAgICAgc2VsZi5zZXQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLmluc3RhbmNlLnRyaWdnZXIoXCJvblNsaWRlU2hvd0NoYW5nZVwiLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmluc3RhbmNlLmN1cnJlbnQ7XHJcblxyXG4gICAgICBzZWxmLmNsZWFyKCk7XHJcblxyXG4gICAgICBzZWxmLiRidXR0b25cclxuICAgICAgICAuYXR0cihcInRpdGxlXCIsIChjdXJyZW50Lm9wdHMuaTE4bltjdXJyZW50Lm9wdHMubGFuZ10gfHwgY3VycmVudC5vcHRzLmkxOG4uZW4pLlBMQVlfU1RBUlQpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wYXVzZVwiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tcGxheVwiKTtcclxuXHJcbiAgICAgIHNlbGYuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHNlbGYuaW5zdGFuY2UudHJpZ2dlcihcIm9uU2xpZGVTaG93Q2hhbmdlXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgIGlmIChzZWxmLiRwcm9ncmVzcykge1xyXG4gICAgICAgIHNlbGYuJHByb2dyZXNzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXNBY3RpdmUpIHtcclxuICAgICAgICBzZWxmLnN0b3AoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxmLnN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oe1xyXG4gICAgXCJvbkluaXQuZmJcIjogZnVuY3Rpb24oZSwgaW5zdGFuY2UpIHtcclxuICAgICAgaWYgKGluc3RhbmNlICYmICFpbnN0YW5jZS5TbGlkZVNob3cpIHtcclxuICAgICAgICBpbnN0YW5jZS5TbGlkZVNob3cgPSBuZXcgU2xpZGVTaG93KGluc3RhbmNlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImJlZm9yZVNob3cuZmJcIjogZnVuY3Rpb24oZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGZpcnN0UnVuKSB7XHJcbiAgICAgIHZhciBTbGlkZVNob3cgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5TbGlkZVNob3c7XHJcblxyXG4gICAgICBpZiAoZmlyc3RSdW4pIHtcclxuICAgICAgICBpZiAoU2xpZGVTaG93ICYmIGN1cnJlbnQub3B0cy5zbGlkZVNob3cuYXV0b1N0YXJ0KSB7XHJcbiAgICAgICAgICBTbGlkZVNob3cuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoU2xpZGVTaG93ICYmIFNsaWRlU2hvdy5pc0FjdGl2ZSkge1xyXG4gICAgICAgIFNsaWRlU2hvdy5jbGVhcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiYWZ0ZXJTaG93LmZiXCI6IGZ1bmN0aW9uKGUsIGluc3RhbmNlLCBjdXJyZW50KSB7XHJcbiAgICAgIHZhciBTbGlkZVNob3cgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5TbGlkZVNob3c7XHJcblxyXG4gICAgICBpZiAoU2xpZGVTaG93ICYmIFNsaWRlU2hvdy5pc0FjdGl2ZSkge1xyXG4gICAgICAgIFNsaWRlU2hvdy5zZXQoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbihlLCBpbnN0YW5jZSwgY3VycmVudCwga2V5cHJlc3MsIGtleWNvZGUpIHtcclxuICAgICAgdmFyIFNsaWRlU2hvdyA9IGluc3RhbmNlICYmIGluc3RhbmNlLlNsaWRlU2hvdztcclxuXHJcbiAgICAgIC8vIFwiUFwiIG9yIFNwYWNlYmFyXHJcbiAgICAgIGlmIChTbGlkZVNob3cgJiYgY3VycmVudC5vcHRzLnNsaWRlU2hvdyAmJiAoa2V5Y29kZSA9PT0gODAgfHwga2V5Y29kZSA9PT0gMzIpICYmICEkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKFwiYnV0dG9uLGEsaW5wdXRcIikpIHtcclxuICAgICAgICBrZXlwcmVzcy5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBTbGlkZVNob3cudG9nZ2xlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJiZWZvcmVDbG9zZS5mYiBvbkRlYWN0aXZhdGUuZmJcIjogZnVuY3Rpb24oZSwgaW5zdGFuY2UpIHtcclxuICAgICAgdmFyIFNsaWRlU2hvdyA9IGluc3RhbmNlICYmIGluc3RhbmNlLlNsaWRlU2hvdztcclxuXHJcbiAgICAgIGlmIChTbGlkZVNob3cpIHtcclxuICAgICAgICBTbGlkZVNob3cuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFBhZ2UgVmlzaWJpbGl0eSBBUEkgdG8gcGF1c2Ugc2xpZGVzaG93IHdoZW4gd2luZG93IGlzIG5vdCBhY3RpdmVcclxuICAkKGRvY3VtZW50KS5vbihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaW5zdGFuY2UgPSAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCksXHJcbiAgICAgIFNsaWRlU2hvdyA9IGluc3RhbmNlICYmIGluc3RhbmNlLlNsaWRlU2hvdztcclxuXHJcbiAgICBpZiAoU2xpZGVTaG93ICYmIFNsaWRlU2hvdy5pc0FjdGl2ZSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XHJcbiAgICAgICAgU2xpZGVTaG93LmNsZWFyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgU2xpZGVTaG93LnNldCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKGRvY3VtZW50LCBqUXVlcnkpO1xyXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIEZ1bGxTY3JlZW5cclxuLy8gQWRkcyBmdWxsc2NyZWVuIGZ1bmN0aW9uYWxpdHlcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uKGRvY3VtZW50LCAkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIC8vIENvbGxlY3Rpb24gb2YgbWV0aG9kcyBzdXBwb3J0ZWQgYnkgdXNlciBicm93c2VyXHJcbiAgdmFyIGZuID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGZuTWFwID0gW1xyXG4gICAgICBbXCJyZXF1ZXN0RnVsbHNjcmVlblwiLCBcImV4aXRGdWxsc2NyZWVuXCIsIFwiZnVsbHNjcmVlbkVsZW1lbnRcIiwgXCJmdWxsc2NyZWVuRW5hYmxlZFwiLCBcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgXCJmdWxsc2NyZWVuZXJyb3JcIl0sXHJcbiAgICAgIC8vIG5ldyBXZWJLaXRcclxuICAgICAgW1xyXG4gICAgICAgIFwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW5cIixcclxuICAgICAgICBcIndlYmtpdEV4aXRGdWxsc2NyZWVuXCIsXHJcbiAgICAgICAgXCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudFwiLFxyXG4gICAgICAgIFwid2Via2l0RnVsbHNjcmVlbkVuYWJsZWRcIixcclxuICAgICAgICBcIndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2VcIixcclxuICAgICAgICBcIndlYmtpdGZ1bGxzY3JlZW5lcnJvclwiXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIG9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXHJcbiAgICAgIFtcclxuICAgICAgICBcIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuXCIsXHJcbiAgICAgICAgXCJ3ZWJraXRDYW5jZWxGdWxsU2NyZWVuXCIsXHJcbiAgICAgICAgXCJ3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnRcIixcclxuICAgICAgICBcIndlYmtpdENhbmNlbEZ1bGxTY3JlZW5cIixcclxuICAgICAgICBcIndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2VcIixcclxuICAgICAgICBcIndlYmtpdGZ1bGxzY3JlZW5lcnJvclwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBcIm1velJlcXVlc3RGdWxsU2NyZWVuXCIsXHJcbiAgICAgICAgXCJtb3pDYW5jZWxGdWxsU2NyZWVuXCIsXHJcbiAgICAgICAgXCJtb3pGdWxsU2NyZWVuRWxlbWVudFwiLFxyXG4gICAgICAgIFwibW96RnVsbFNjcmVlbkVuYWJsZWRcIixcclxuICAgICAgICBcIm1vemZ1bGxzY3JlZW5jaGFuZ2VcIixcclxuICAgICAgICBcIm1vemZ1bGxzY3JlZW5lcnJvclwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcIm1zUmVxdWVzdEZ1bGxzY3JlZW5cIiwgXCJtc0V4aXRGdWxsc2NyZWVuXCIsIFwibXNGdWxsc2NyZWVuRWxlbWVudFwiLCBcIm1zRnVsbHNjcmVlbkVuYWJsZWRcIiwgXCJNU0Z1bGxzY3JlZW5DaGFuZ2VcIiwgXCJNU0Z1bGxzY3JlZW5FcnJvclwiXVxyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgcmV0ID0ge307XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbk1hcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgdmFsID0gZm5NYXBbaV07XHJcblxyXG4gICAgICBpZiAodmFsICYmIHZhbFsxXSBpbiBkb2N1bWVudCkge1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICByZXRbZm5NYXBbMF1bal1dID0gdmFsW2pdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KSgpO1xyXG5cclxuICBpZiAoZm4pIHtcclxuICAgIHZhciBGdWxsU2NyZWVuID0ge1xyXG4gICAgICByZXF1ZXN0OiBmdW5jdGlvbihlbGVtKSB7XHJcbiAgICAgICAgZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBlbGVtW2ZuLnJlcXVlc3RGdWxsc2NyZWVuXShlbGVtLkFMTE9XX0tFWUJPQVJEX0lOUFVUKTtcclxuICAgICAgfSxcclxuICAgICAgZXhpdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZG9jdW1lbnRbZm4uZXhpdEZ1bGxzY3JlZW5dKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvZ2dsZTogZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICAgIGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNGdWxsc2NyZWVuKCkpIHtcclxuICAgICAgICAgIHRoaXMuZXhpdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QoZWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpc0Z1bGxzY3JlZW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50W2ZuLmZ1bGxzY3JlZW5FbGVtZW50XSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50W2ZuLmZ1bGxzY3JlZW5FbmFibGVkXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJC5leHRlbmQodHJ1ZSwgJC5mYW5jeWJveC5kZWZhdWx0cywge1xyXG4gICAgICBidG5UcGw6IHtcclxuICAgICAgICBmdWxsU2NyZWVuOlxyXG4gICAgICAgICAgJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnNlbnRlclwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+JyArXHJcbiAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNyAxNEg1djVoNXYtMkg3di0zem0tMi00aDJWN2gzVjVINXY1em0xMiA3aC0zdjJoNXYtNWgtMnYzek0xNCA1djJoM3YzaDJWNWgtNXpcIi8+PC9zdmc+JyArXHJcbiAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNSAxNmgzdjNoMnYtNUg1em0zLThINXYyaDVWNUg4em02IDExaDJ2LTNoM3YtMmgtNXptMi0xMVY1aC0ydjVoNVY4elwiLz48L3N2Zz4nICtcclxuICAgICAgICAgIFwiPC9idXR0b24+XCJcclxuICAgICAgfSxcclxuICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgIGF1dG9TdGFydDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oZm4uZnVsbHNjcmVlbmNoYW5nZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpc0Z1bGxzY3JlZW4gPSBGdWxsU2NyZWVuLmlzRnVsbHNjcmVlbigpLFxyXG4gICAgICAgIGluc3RhbmNlID0gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgICAgaWYgKGluc3RhbmNlKSB7XHJcbiAgICAgICAgLy8gSWYgaW1hZ2UgaXMgem9vbWluZywgdGhlbiBmb3JjZSB0byBzdG9wIGFuZCByZXBvc2l0aW9uIHByb3Blcmx5XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmN1cnJlbnQgJiYgaW5zdGFuY2UuY3VycmVudC50eXBlID09PSBcImltYWdlXCIgJiYgaW5zdGFuY2UuaXNBbmltYXRpbmcpIHtcclxuICAgICAgICAgIGluc3RhbmNlLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgaW5zdGFuY2UudXBkYXRlKHRydWUsIHRydWUsIDApO1xyXG5cclxuICAgICAgICAgIGlmICghaW5zdGFuY2UuaXNDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5zdGFuY2UudHJpZ2dlcihcIm9uRnVsbHNjcmVlbkNoYW5nZVwiLCBpc0Z1bGxzY3JlZW4pO1xyXG5cclxuICAgICAgICBpbnN0YW5jZS4kcmVmcy5jb250YWluZXIudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1pcy1mdWxsc2NyZWVuXCIsIGlzRnVsbHNjcmVlbik7XHJcblxyXG4gICAgICAgIGluc3RhbmNlLiRyZWZzLnRvb2xiYXJcclxuICAgICAgICAgIC5maW5kKFwiW2RhdGEtZmFuY3lib3gtZnVsbHNjcmVlbl1cIilcclxuICAgICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tZnNlbnRlclwiLCAhaXNGdWxsc2NyZWVuKVxyXG4gICAgICAgICAgLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1mc2V4aXRcIiwgaXNGdWxsc2NyZWVuKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkKGRvY3VtZW50KS5vbih7XHJcbiAgICBcIm9uSW5pdC5mYlwiOiBmdW5jdGlvbihlLCBpbnN0YW5jZSkge1xyXG4gICAgICB2YXIgJGNvbnRhaW5lcjtcclxuXHJcbiAgICAgIGlmICghZm4pIHtcclxuICAgICAgICBpbnN0YW5jZS4kcmVmcy50b29sYmFyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuXVwiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuZ3JvdXBbaW5zdGFuY2UuY3VyckluZGV4XS5vcHRzLmZ1bGxTY3JlZW4pIHtcclxuICAgICAgICAkY29udGFpbmVyID0gaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyO1xyXG5cclxuICAgICAgICAkY29udGFpbmVyLm9uKFwiY2xpY2suZmItZnVsbHNjcmVlblwiLCBcIltkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgRnVsbFNjcmVlbi50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGluc3RhbmNlLm9wdHMuZnVsbFNjcmVlbiAmJiBpbnN0YW5jZS5vcHRzLmZ1bGxTY3JlZW4uYXV0b1N0YXJ0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBGdWxsU2NyZWVuLnJlcXVlc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEV4cG9zZSBBUElcclxuICAgICAgICBpbnN0YW5jZS5GdWxsU2NyZWVuID0gRnVsbFNjcmVlbjtcclxuICAgICAgfSBlbHNlIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgIGluc3RhbmNlLiRyZWZzLnRvb2xiYXIuZmluZChcIltkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dXCIpLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbihlLCBpbnN0YW5jZSwgY3VycmVudCwga2V5cHJlc3MsIGtleWNvZGUpIHtcclxuICAgICAgLy8gXCJGXCJcclxuICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLkZ1bGxTY3JlZW4gJiYga2V5Y29kZSA9PT0gNzApIHtcclxuICAgICAgICBrZXlwcmVzcy5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpbnN0YW5jZS5GdWxsU2NyZWVuLnRvZ2dsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiYmVmb3JlQ2xvc2UuZmJcIjogZnVuY3Rpb24oZSwgaW5zdGFuY2UpIHtcclxuICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLkZ1bGxTY3JlZW4gJiYgaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyLmhhc0NsYXNzKFwiZmFuY3lib3gtaXMtZnVsbHNjcmVlblwiKSkge1xyXG4gICAgICAgIEZ1bGxTY3JlZW4uZXhpdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKGRvY3VtZW50LCBqUXVlcnkpO1xyXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIFRodW1ic1xyXG4vLyBEaXNwbGF5cyB0aHVtYm5haWxzIGluIGEgZ3JpZFxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4oZnVuY3Rpb24oZG9jdW1lbnQsICQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgdmFyIENMQVNTID0gXCJmYW5jeWJveC10aHVtYnNcIixcclxuICAgIENMQVNTX0FDVElWRSA9IENMQVNTICsgXCItYWN0aXZlXCI7XHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgZGVmYXVsdCB2YWx1ZXNcclxuICAkLmZhbmN5Ym94LmRlZmF1bHRzID0gJC5leHRlbmQoXHJcbiAgICB0cnVlLFxyXG4gICAge1xyXG4gICAgICBidG5UcGw6IHtcclxuICAgICAgICB0aHVtYnM6XHJcbiAgICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXRodW1icyBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXRodW1ic1wiIHRpdGxlPVwie3tUSFVNQlN9fVwiPicgK1xyXG4gICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE0LjU5IDE0LjU5aDMuNzZ2My43NmgtMy43NnYtMy43NnptLTQuNDcgMGgzLjc2djMuNzZoLTMuNzZ2LTMuNzZ6bS00LjQ3IDBoMy43NnYzLjc2SDUuNjV2LTMuNzZ6bTguOTQtNC40N2gzLjc2djMuNzZoLTMuNzZ2LTMuNzZ6bS00LjQ3IDBoMy43NnYzLjc2aC0zLjc2di0zLjc2em0tNC40NyAwaDMuNzZ2My43Nkg1LjY1di0zLjc2em04Ljk0LTQuNDdoMy43NnYzLjc2aC0zLjc2VjUuNjV6bS00LjQ3IDBoMy43NnYzLjc2aC0zLjc2VjUuNjV6bS00LjQ3IDBoMy43NnYzLjc2SDUuNjVWNS42NXpcIi8+PC9zdmc+JyArXHJcbiAgICAgICAgICBcIjwvYnV0dG9uPlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRodW1iczoge1xyXG4gICAgICAgIGF1dG9TdGFydDogZmFsc2UsIC8vIERpc3BsYXkgdGh1bWJuYWlscyBvbiBvcGVuaW5nXHJcbiAgICAgICAgaGlkZU9uQ2xvc2U6IHRydWUsIC8vIEhpZGUgdGh1bWJuYWlsIGdyaWQgd2hlbiBjbG9zaW5nIGFuaW1hdGlvbiBzdGFydHNcclxuICAgICAgICBwYXJlbnRFbDogXCIuZmFuY3lib3gtY29udGFpbmVyXCIsIC8vIENvbnRhaW5lciBpcyBpbmplY3RlZCBpbnRvIHRoaXMgZWxlbWVudFxyXG4gICAgICAgIGF4aXM6IFwieVwiIC8vIFZlcnRpY2FsICh5KSBvciBob3Jpem9udGFsICh4KSBzY3JvbGxpbmdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICQuZmFuY3lib3guZGVmYXVsdHNcclxuICApO1xyXG5cclxuICB2YXIgRmFuY3lUaHVtYnMgPSBmdW5jdGlvbihpbnN0YW5jZSkge1xyXG4gICAgdGhpcy5pbml0KGluc3RhbmNlKTtcclxuICB9O1xyXG5cclxuICAkLmV4dGVuZChGYW5jeVRodW1icy5wcm90b3R5cGUsIHtcclxuICAgICRidXR0b246IG51bGwsXHJcbiAgICAkZ3JpZDogbnVsbCxcclxuICAgICRsaXN0OiBudWxsLFxyXG4gICAgaXNWaXNpYmxlOiBmYWxzZSxcclxuICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbihpbnN0YW5jZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZ3JvdXAgPSBpbnN0YW5jZS5ncm91cCxcclxuICAgICAgICBlbmFibGVkID0gMDtcclxuXHJcbiAgICAgIHNlbGYuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgc2VsZi5vcHRzID0gZ3JvdXBbaW5zdGFuY2UuY3VyckluZGV4XS5vcHRzLnRodW1icztcclxuXHJcbiAgICAgIGluc3RhbmNlLlRodW1icyA9IHNlbGY7XHJcblxyXG4gICAgICBzZWxmLiRidXR0b24gPSBpbnN0YW5jZS4kcmVmcy50b29sYmFyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC10aHVtYnNdXCIpO1xyXG5cclxuICAgICAgLy8gRW5hYmxlIHRodW1icyBpZiBhdCBsZWFzdCB0d28gZ3JvdXAgaXRlbXMgaGF2ZSB0aHVtYm5haWxzXHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBncm91cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGlmIChncm91cFtpXS50aHVtYikge1xyXG4gICAgICAgICAgZW5hYmxlZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVuYWJsZWQgPiAxKSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbmFibGVkID4gMSAmJiAhIXNlbGYub3B0cykge1xyXG4gICAgICAgIHNlbGYuJGJ1dHRvbi5yZW1vdmVBdHRyKFwic3R5bGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNlbGYudG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGYuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYuJGJ1dHRvbi5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcclxuICAgICAgICBwYXJlbnRFbCA9IHNlbGYub3B0cy5wYXJlbnRFbCxcclxuICAgICAgICBsaXN0ID0gW10sXHJcbiAgICAgICAgc3JjO1xyXG5cclxuICAgICAgaWYgKCFzZWxmLiRncmlkKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIG1haW4gZWxlbWVudFxyXG4gICAgICAgIHNlbGYuJGdyaWQgPSAkKCc8ZGl2IGNsYXNzPVwiJyArIENMQVNTICsgXCIgXCIgKyBDTEFTUyArIFwiLVwiICsgc2VsZi5vcHRzLmF4aXMgKyAnXCI+PC9kaXY+JykuYXBwZW5kVG8oXHJcbiAgICAgICAgICBpbnN0YW5jZS4kcmVmcy5jb250YWluZXJcclxuICAgICAgICAgICAgLmZpbmQocGFyZW50RWwpXHJcbiAgICAgICAgICAgIC5hZGRCYWNrKClcclxuICAgICAgICAgICAgLmZpbHRlcihwYXJlbnRFbClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBBZGQgXCJjbGlja1wiIGV2ZW50IHRoYXQgcGVyZm9ybXMgZ2FsbGVyeSBuYXZpZ2F0aW9uXHJcbiAgICAgICAgc2VsZi4kZ3JpZC5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGluc3RhbmNlLmp1bXBUbygkKHRoaXMpLmF0dHIoXCJkYXRhLWluZGV4XCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQnVpbGQgdGhlIGxpc3RcclxuICAgICAgaWYgKCFzZWxmLiRsaXN0KSB7XHJcbiAgICAgICAgc2VsZi4kbGlzdCA9ICQoJzxkaXYgY2xhc3M9XCInICsgQ0xBU1MgKyAnX19saXN0XCI+JykuYXBwZW5kVG8oc2VsZi4kZ3JpZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQuZWFjaChpbnN0YW5jZS5ncm91cCwgZnVuY3Rpb24oaSwgaXRlbSkge1xyXG4gICAgICAgIHNyYyA9IGl0ZW0udGh1bWI7XHJcblxyXG4gICAgICAgIGlmICghc3JjICYmIGl0ZW0udHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcbiAgICAgICAgICBzcmMgPSBpdGVtLnNyYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3QucHVzaChcclxuICAgICAgICAgICc8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgdGFiaW5kZXg9XCIwXCIgZGF0YS1pbmRleD1cIicgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgJ1wiJyArXHJcbiAgICAgICAgICAgIChzcmMgJiYgc3JjLmxlbmd0aCA/ICcgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybCgnICsgc3JjICsgJylcIicgOiAnY2xhc3M9XCJmYW5jeWJveC10aHVtYnMtbWlzc2luZ1wiJykgK1xyXG4gICAgICAgICAgICBcIj48L2E+XCJcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGYuJGxpc3RbMF0uaW5uZXJIVE1MID0gbGlzdC5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgaWYgKHNlbGYub3B0cy5heGlzID09PSBcInhcIikge1xyXG4gICAgICAgIC8vIFNldCBmaXhlZCB3aWR0aCBmb3IgbGlzdCBlbGVtZW50IHRvIGVuYWJsZSBob3Jpem9udGFsIHNjcm9sbGluZ1xyXG4gICAgICAgIHNlbGYuJGxpc3Qud2lkdGgoXHJcbiAgICAgICAgICBwYXJzZUludChzZWxmLiRncmlkLmNzcyhcInBhZGRpbmctcmlnaHRcIiksIDEwKSArXHJcbiAgICAgICAgICAgIGluc3RhbmNlLmdyb3VwLmxlbmd0aCAqXHJcbiAgICAgICAgICAgICAgc2VsZi4kbGlzdFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgIC5lcSgwKVxyXG4gICAgICAgICAgICAgICAgLm91dGVyV2lkdGgodHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGZvY3VzOiBmdW5jdGlvbihkdXJhdGlvbikge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgJGxpc3QgPSBzZWxmLiRsaXN0LFxyXG4gICAgICAgICRncmlkID0gc2VsZi4kZ3JpZCxcclxuICAgICAgICB0aHVtYixcclxuICAgICAgICB0aHVtYlBvcztcclxuXHJcbiAgICAgIGlmICghc2VsZi5pbnN0YW5jZS5jdXJyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aHVtYiA9ICRsaXN0XHJcbiAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ0xBU1NfQUNUSVZFKVxyXG4gICAgICAgIC5maWx0ZXIoJ1tkYXRhLWluZGV4PVwiJyArIHNlbGYuaW5zdGFuY2UuY3VycmVudC5pbmRleCArICdcIl0nKVxyXG4gICAgICAgIC5hZGRDbGFzcyhDTEFTU19BQ1RJVkUpO1xyXG5cclxuICAgICAgdGh1bWJQb3MgPSB0aHVtYi5wb3NpdGlvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgbmVlZCB0byBzY3JvbGwgdG8gbWFrZSBjdXJyZW50IHRodW1iIHZpc2libGVcclxuICAgICAgaWYgKHNlbGYub3B0cy5heGlzID09PSBcInlcIiAmJiAodGh1bWJQb3MudG9wIDwgMCB8fCB0aHVtYlBvcy50b3AgPiAkbGlzdC5oZWlnaHQoKSAtIHRodW1iLm91dGVySGVpZ2h0KCkpKSB7XHJcbiAgICAgICAgJGxpc3Quc3RvcCgpLmFuaW1hdGUoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJGxpc3Quc2Nyb2xsVG9wKCkgKyB0aHVtYlBvcy50b3BcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkdXJhdGlvblxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgc2VsZi5vcHRzLmF4aXMgPT09IFwieFwiICYmXHJcbiAgICAgICAgKHRodW1iUG9zLmxlZnQgPCAkZ3JpZC5zY3JvbGxMZWZ0KCkgfHwgdGh1bWJQb3MubGVmdCA+ICRncmlkLnNjcm9sbExlZnQoKSArICgkZ3JpZC53aWR0aCgpIC0gdGh1bWIub3V0ZXJXaWR0aCgpKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgJGxpc3RcclxuICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgLnN0b3AoKVxyXG4gICAgICAgICAgLmFuaW1hdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiB0aHVtYlBvcy5sZWZ0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgdGhhdC5pbnN0YW5jZS4kcmVmcy5jb250YWluZXIudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LXRodW1ic1wiLCB0aGlzLmlzVmlzaWJsZSk7XHJcblxyXG4gICAgICBpZiAodGhhdC5pc1Zpc2libGUpIHtcclxuICAgICAgICBpZiAoIXRoYXQuJGdyaWQpIHtcclxuICAgICAgICAgIHRoYXQuY3JlYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGF0Lmluc3RhbmNlLnRyaWdnZXIoXCJvblRodW1ic1Nob3dcIik7XHJcblxyXG4gICAgICAgIHRoYXQuZm9jdXMoMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhhdC4kZ3JpZCkge1xyXG4gICAgICAgIHRoYXQuaW5zdGFuY2UudHJpZ2dlcihcIm9uVGh1bWJzSGlkZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVXBkYXRlIGNvbnRlbnQgcG9zaXRpb25cclxuICAgICAgdGhhdC5pbnN0YW5jZS51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGlkZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gIXRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbih7XHJcbiAgICBcIm9uSW5pdC5mYlwiOiBmdW5jdGlvbihlLCBpbnN0YW5jZSkge1xyXG4gICAgICB2YXIgVGh1bWJzO1xyXG5cclxuICAgICAgaWYgKGluc3RhbmNlICYmICFpbnN0YW5jZS5UaHVtYnMpIHtcclxuICAgICAgICBUaHVtYnMgPSBuZXcgRmFuY3lUaHVtYnMoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICBpZiAoVGh1bWJzLmlzQWN0aXZlICYmIFRodW1icy5vcHRzLmF1dG9TdGFydCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgVGh1bWJzLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJiZWZvcmVTaG93LmZiXCI6IGZ1bmN0aW9uKGUsIGluc3RhbmNlLCBpdGVtLCBmaXJzdFJ1bikge1xyXG4gICAgICB2YXIgVGh1bWJzID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuVGh1bWJzO1xyXG5cclxuICAgICAgaWYgKFRodW1icyAmJiBUaHVtYnMuaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgVGh1bWJzLmZvY3VzKGZpcnN0UnVuID8gMCA6IDI1MCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJhZnRlcktleWRvd24uZmJcIjogZnVuY3Rpb24oZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGtleXByZXNzLCBrZXljb2RlKSB7XHJcbiAgICAgIHZhciBUaHVtYnMgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5UaHVtYnM7XHJcblxyXG4gICAgICAvLyBcIkdcIlxyXG4gICAgICBpZiAoVGh1bWJzICYmIFRodW1icy5pc0FjdGl2ZSAmJiBrZXljb2RlID09PSA3MSkge1xyXG4gICAgICAgIGtleXByZXNzLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIFRodW1icy50b2dnbGUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImJlZm9yZUNsb3NlLmZiXCI6IGZ1bmN0aW9uKGUsIGluc3RhbmNlKSB7XHJcbiAgICAgIHZhciBUaHVtYnMgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5UaHVtYnM7XHJcblxyXG4gICAgICBpZiAoVGh1bWJzICYmIFRodW1icy5pc1Zpc2libGUgJiYgVGh1bWJzLm9wdHMuaGlkZU9uQ2xvc2UgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgVGh1bWJzLiRncmlkLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KShkb2N1bWVudCwgalF1ZXJ5KTtcclxuXG4vLy8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIFNoYXJlXHJcbi8vIERpc3BsYXlzIHNpbXBsZSBmb3JtIGZvciBzaGFyaW5nIGN1cnJlbnQgdXJsXHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbihmdW5jdGlvbihkb2N1bWVudCwgJCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAkLmV4dGVuZCh0cnVlLCAkLmZhbmN5Ym94LmRlZmF1bHRzLCB7XHJcbiAgICBidG5UcGw6IHtcclxuICAgICAgc2hhcmU6XHJcbiAgICAgICAgJzxidXR0b24gZGF0YS1mYW5jeWJveC1zaGFyZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXNoYXJlXCIgdGl0bGU9XCJ7e1NIQVJFfX1cIj4nICtcclxuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMi41NSAxOWMxLjQtOC40IDkuMS05LjggMTEuOS05LjhWNWw3IDctNyA2LjN2LTMuNWMtMi44IDAtMTAuNSAyLjEtMTEuOSA0LjJ6XCIvPjwvc3ZnPicgK1xyXG4gICAgICAgIFwiPC9idXR0b24+XCJcclxuICAgIH0sXHJcbiAgICBzaGFyZToge1xyXG4gICAgICB1cmw6IGZ1bmN0aW9uKGluc3RhbmNlLCBpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICghaW5zdGFuY2UuY3VycmVudEhhc2ggJiYgIShpdGVtLnR5cGUgPT09IFwiaW5saW5lXCIgfHwgaXRlbS50eXBlID09PSBcImh0bWxcIikgPyBpdGVtLm9yaWdTcmMgfHwgaXRlbS5zcmMgOiBmYWxzZSkgfHwgd2luZG93LmxvY2F0aW9uXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgdHBsOlxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtc2hhcmVcIj4nICtcclxuICAgICAgICBcIjxoMT57e1NIQVJFfX08L2gxPlwiICtcclxuICAgICAgICBcIjxwPlwiICtcclxuICAgICAgICAnPGEgY2xhc3M9XCJmYW5jeWJveC1zaGFyZV9fYnV0dG9uIGZhbmN5Ym94LXNoYXJlX19idXR0b24tLWZiXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PXt7dXJsfX1cIj4nICtcclxuICAgICAgICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm0yODcgNDU2di0yOTljMC0yMSA2LTM1IDM1LTM1aDM4di02M2MtNy0xLTI5LTMtNTUtMy01NCAwLTkxIDMzLTkxIDk0djMwNm0xNDMtMjU0aC0yMDV2NzJoMTk2XCIgLz48L3N2Zz4nICtcclxuICAgICAgICBcIjxzcGFuPkZhY2Vib29rPC9zcGFuPlwiICtcclxuICAgICAgICBcIjwvYT5cIiArXHJcbiAgICAgICAgJzxhIGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2J1dHRvbiBmYW5jeWJveC1zaGFyZV9fYnV0dG9uLS10d1wiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9e3t1cmx9fSZ0ZXh0PXt7ZGVzY3J9fVwiPicgK1xyXG4gICAgICAgICc8c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQ1NiAxMzNjLTE0IDctMzEgMTEtNDcgMTMgMTctMTAgMzAtMjcgMzctNDYtMTUgMTAtMzQgMTYtNTIgMjAtNjEtNjItMTU3LTctMTQxIDc1LTY4LTMtMTI5LTM1LTE2OS04NS0yMiAzNy0xMSA4NiAyNiAxMDktMTMgMC0yNi00LTM3LTkgMCAzOSAyOCA3MiA2NSA4MC0xMiAzLTI1IDQtMzcgMiAxMCAzMyA0MSA1NyA3NyA1Ny00MiAzMC03NyAzOC0xMjIgMzQgMTcwIDExMSAzNzgtMzIgMzU5LTIwOCAxNi0xMSAzMC0yNSA0MS00MnpcIiAvPjwvc3ZnPicgK1xyXG4gICAgICAgIFwiPHNwYW4+VHdpdHRlcjwvc3Bhbj5cIiArXHJcbiAgICAgICAgXCI8L2E+XCIgK1xyXG4gICAgICAgICc8YSBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19idXR0b24gZmFuY3lib3gtc2hhcmVfX2J1dHRvbi0tcHRcIiBocmVmPVwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/dXJsPXt7dXJsfX0mZGVzY3JpcHRpb249e3tkZXNjcn19Jm1lZGlhPXt7bWVkaWF9fVwiPicgK1xyXG4gICAgICAgICc8c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTI2NSA1NmMtMTA5IDAtMTY0IDc4LTE2NCAxNDQgMCAzOSAxNSA3NCA0NyA4NyA1IDIgMTAgMCAxMi01bDQtMTljMi02IDEtOC0zLTEzLTktMTEtMTUtMjUtMTUtNDUgMC01OCA0My0xMTAgMTEzLTExMCA2MiAwIDk2IDM4IDk2IDg4IDAgNjctMzAgMTIyLTczIDEyMi0yNCAwLTQyLTE5LTM2LTQ0IDYtMjkgMjAtNjAgMjAtODEgMC0xOS0xMC0zNS0zMS0zNS0yNSAwLTQ0IDI2LTQ0IDYwIDAgMjEgNyAzNiA3IDM2bC0zMCAxMjVjLTggMzctMSA4MyAwIDg3IDAgMyA0IDQgNSAyIDItMyAzMi0zOSA0Mi03NWwxNi02NGM4IDE2IDMxIDI5IDU2IDI5IDc0IDAgMTI0LTY3IDEyNC0xNTcgMC02OS01OC0xMzItMTQ2LTEzMnpcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz4nICtcclxuICAgICAgICBcIjxzcGFuPlBpbnRlcmVzdDwvc3Bhbj5cIiArXHJcbiAgICAgICAgXCI8L2E+XCIgK1xyXG4gICAgICAgIFwiPC9wPlwiICtcclxuICAgICAgICAnPHA+PGlucHV0IGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2lucHV0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cInt7dXJsX3Jhd319XCIgb25jbGljaz1cInNlbGVjdCgpXCIgLz48L3A+JyArXHJcbiAgICAgICAgXCI8L2Rpdj5cIlxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZykge1xyXG4gICAgdmFyIGVudGl0eU1hcCA9IHtcclxuICAgICAgXCImXCI6IFwiJmFtcDtcIixcclxuICAgICAgXCI8XCI6IFwiJmx0O1wiLFxyXG4gICAgICBcIj5cIjogXCImZ3Q7XCIsXHJcbiAgICAgICdcIic6IFwiJnF1b3Q7XCIsXHJcbiAgICAgIFwiJ1wiOiBcIiYjMzk7XCIsXHJcbiAgICAgIFwiL1wiOiBcIiYjeDJGO1wiLFxyXG4gICAgICBcImBcIjogXCImI3g2MDtcIixcclxuICAgICAgXCI9XCI6IFwiJiN4M0Q7XCJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24ocykge1xyXG4gICAgICByZXR1cm4gZW50aXR5TWFwW3NdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiW2RhdGEtZmFuY3lib3gtc2hhcmVdXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGluc3RhbmNlID0gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLFxyXG4gICAgICBjdXJyZW50ID0gaW5zdGFuY2UuY3VycmVudCB8fCBudWxsLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHRwbDtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkLnR5cGUoY3VycmVudC5vcHRzLnNoYXJlLnVybCkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICB1cmwgPSBjdXJyZW50Lm9wdHMuc2hhcmUudXJsLmFwcGx5KGN1cnJlbnQsIFtpbnN0YW5jZSwgY3VycmVudF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRwbCA9IGN1cnJlbnQub3B0cy5zaGFyZS50cGxcclxuICAgICAgLnJlcGxhY2UoL1xce1xce21lZGlhXFx9XFx9L2csIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiID8gZW5jb2RlVVJJQ29tcG9uZW50KGN1cnJlbnQuc3JjKSA6IFwiXCIpXHJcbiAgICAgIC5yZXBsYWNlKC9cXHtcXHt1cmxcXH1cXH0vZywgZW5jb2RlVVJJQ29tcG9uZW50KHVybCkpXHJcbiAgICAgIC5yZXBsYWNlKC9cXHtcXHt1cmxfcmF3XFx9XFx9L2csIGVzY2FwZUh0bWwodXJsKSlcclxuICAgICAgLnJlcGxhY2UoL1xce1xce2Rlc2NyXFx9XFx9L2csIGluc3RhbmNlLiRjYXB0aW9uID8gZW5jb2RlVVJJQ29tcG9uZW50KGluc3RhbmNlLiRjYXB0aW9uLnRleHQoKSkgOiBcIlwiKTtcclxuXHJcbiAgICAkLmZhbmN5Ym94Lm9wZW4oe1xyXG4gICAgICBzcmM6IGluc3RhbmNlLnRyYW5zbGF0ZShpbnN0YW5jZSwgdHBsKSxcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIG9wdHM6IHtcclxuICAgICAgICB0b3VjaDogZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0aW9uRWZmZWN0OiBmYWxzZSxcclxuICAgICAgICBhZnRlckxvYWQ6IGZ1bmN0aW9uKHNoYXJlSW5zdGFuY2UsIHNoYXJlQ3VycmVudCkge1xyXG4gICAgICAgICAgLy8gQ2xvc2Ugc2VsZiBpZiBwYXJlbnQgaW5zdGFuY2UgaXMgY2xvc2luZ1xyXG4gICAgICAgICAgaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyLm9uZShcImJlZm9yZUNsb3NlLmZiXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzaGFyZUluc3RhbmNlLmNsb3NlKG51bGwsIDApO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gT3BlbmluZyBsaW5rcyBpbiBhIHBvcHVwIHdpbmRvd1xyXG4gICAgICAgICAgc2hhcmVDdXJyZW50LiRjb250ZW50LmZpbmQoXCIuZmFuY3lib3gtc2hhcmVfX2J1dHRvblwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5ocmVmLCBcIlNoYXJlXCIsIFwid2lkdGg9NTUwLCBoZWlnaHQ9NDUwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKGRvY3VtZW50LCBqUXVlcnkpO1xyXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIEhhc2hcclxuLy8gRW5hYmxlcyBsaW5raW5nIHRvIGVhY2ggbW9kYWxcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgLy8gU2ltcGxlICQuZXNjYXBlU2VsZWN0b3IgcG9seWZpbGwgKGZvciBqUXVlcnkgcHJpb3IgdjMpXHJcbiAgaWYgKCEkLmVzY2FwZVNlbGVjdG9yKSB7XHJcbiAgICAkLmVzY2FwZVNlbGVjdG9yID0gZnVuY3Rpb24oc2VsKSB7XHJcbiAgICAgIHZhciByY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFx4ODAtXFx1RkZGRlxcdy1dL2c7XHJcbiAgICAgIHZhciBmY3NzZXNjYXBlID0gZnVuY3Rpb24oY2gsIGFzQ29kZVBvaW50KSB7XHJcbiAgICAgICAgaWYgKGFzQ29kZVBvaW50KSB7XHJcbiAgICAgICAgICAvLyBVKzAwMDAgTlVMTCBiZWNvbWVzIFUrRkZGRCBSRVBMQUNFTUVOVCBDSEFSQUNURVJcclxuICAgICAgICAgIGlmIChjaCA9PT0gXCJcXDBcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcXHVGRkZEXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcclxuICAgICAgICAgIHJldHVybiBjaC5zbGljZSgwLCAtMSkgKyBcIlxcXFxcIiArIGNoLmNoYXJDb2RlQXQoY2gubGVuZ3RoIC0gMSkudG9TdHJpbmcoMTYpICsgXCIgXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPdGhlciBwb3RlbnRpYWxseS1zcGVjaWFsIEFTQ0lJIGNoYXJhY3RlcnMgZ2V0IGJhY2tzbGFzaC1lc2NhcGVkXHJcbiAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgY2g7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gKHNlbCArIFwiXCIpLnJlcGxhY2UocmNzc2VzY2FwZSwgZmNzc2VzY2FwZSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IGluZm8gYWJvdXQgZ2FsbGVyeSBuYW1lIGFuZCBjdXJyZW50IGluZGV4IGZyb20gdXJsXHJcbiAgZnVuY3Rpb24gcGFyc2VVcmwoKSB7XHJcbiAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSxcclxuICAgICAgcmV6ID0gaGFzaC5zcGxpdChcIi1cIiksXHJcbiAgICAgIGluZGV4ID0gcmV6Lmxlbmd0aCA+IDEgJiYgL15cXCs/XFxkKyQvLnRlc3QocmV6W3Jlei5sZW5ndGggLSAxXSkgPyBwYXJzZUludChyZXoucG9wKC0xKSwgMTApIHx8IDEgOiAxLFxyXG4gICAgICBnYWxsZXJ5ID0gcmV6LmpvaW4oXCItXCIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhhc2g6IGhhc2gsXHJcbiAgICAgIC8qIEluZGV4IGlzIHN0YXJ0aW5nIGZyb20gMSAqL1xyXG4gICAgICBpbmRleDogaW5kZXggPCAxID8gMSA6IGluZGV4LFxyXG4gICAgICBnYWxsZXJ5OiBnYWxsZXJ5XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gVHJpZ2dlciBjbGljayBldm50IG9uIGxpbmtzIHRvIG9wZW4gbmV3IGZhbmN5Qm94IGluc3RhbmNlXHJcbiAgZnVuY3Rpb24gdHJpZ2dlckZyb21VcmwodXJsKSB7XHJcbiAgICBpZiAodXJsLmdhbGxlcnkgIT09IFwiXCIpIHtcclxuICAgICAgLy8gSWYgd2UgY2FuIGZpbmQgZWxlbWVudCBtYXRjaGluZyAnZGF0YS1mYW5jeWJveCcgYXRyaWJ1dGUsXHJcbiAgICAgIC8vIHRoZW4gdHJpZ2dlcmluZyBjbGljayBldmVudCBzaG91bGQgc3RhcnQgZmFuY3lCb3hcclxuICAgICAgJChcIltkYXRhLWZhbmN5Ym94PSdcIiArICQuZXNjYXBlU2VsZWN0b3IodXJsLmdhbGxlcnkpICsgXCInXVwiKVxyXG4gICAgICAgIC5lcSh1cmwuaW5kZXggLSAxKVxyXG4gICAgICAgIC5mb2N1cygpXHJcbiAgICAgICAgLnRyaWdnZXIoXCJjbGljay5mYi1zdGFydFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdldCBnYWxsZXJ5IG5hbWUgZnJvbSBjdXJyZW50IGluc3RhbmNlXHJcbiAgZnVuY3Rpb24gZ2V0R2FsbGVyeUlEKGluc3RhbmNlKSB7XHJcbiAgICB2YXIgb3B0cywgcmV0O1xyXG5cclxuICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdHMgPSBpbnN0YW5jZS5jdXJyZW50ID8gaW5zdGFuY2UuY3VycmVudC5vcHRzIDogaW5zdGFuY2Uub3B0cztcclxuICAgIHJldCA9IG9wdHMuaGFzaCB8fCAob3B0cy4kb3JpZyA/IG9wdHMuJG9yaWcuZGF0YShcImZhbmN5Ym94XCIpIHx8IG9wdHMuJG9yaWcuZGF0YShcImZhbmN5Ym94LXRyaWdnZXJcIikgOiBcIlwiKTtcclxuXHJcbiAgICByZXR1cm4gcmV0ID09PSBcIlwiID8gZmFsc2UgOiByZXQ7XHJcbiAgfVxyXG5cclxuICAvLyBTdGFydCB3aGVuIERPTSBiZWNvbWVzIHJlYWR5XHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIGRpc2FibGVkIHRoaXMgbW9kdWxlXHJcbiAgICBpZiAoJC5mYW5jeWJveC5kZWZhdWx0cy5oYXNoID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGhhc2ggd2hlbiBvcGVuaW5nL2Nsb3NpbmcgZmFuY3lCb3hcclxuICAgICQoZG9jdW1lbnQpLm9uKHtcclxuICAgICAgXCJvbkluaXQuZmJcIjogZnVuY3Rpb24oZSwgaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgdXJsLCBnYWxsZXJ5O1xyXG5cclxuICAgICAgICBpZiAoaW5zdGFuY2UuZ3JvdXBbaW5zdGFuY2UuY3VyckluZGV4XS5vcHRzLmhhc2ggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cmwgPSBwYXJzZVVybCgpO1xyXG4gICAgICAgIGdhbGxlcnkgPSBnZXRHYWxsZXJ5SUQoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAvLyBNYWtlIHN1cmUgZ2FsbGVyeSBzdGFydCBpbmRleCBtYXRjaGVzIGluZGV4IGZyb20gaGFzaFxyXG4gICAgICAgIGlmIChnYWxsZXJ5ICYmIHVybC5nYWxsZXJ5ICYmIGdhbGxlcnkgPT0gdXJsLmdhbGxlcnkpIHtcclxuICAgICAgICAgIGluc3RhbmNlLmN1cnJJbmRleCA9IHVybC5pbmRleCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCJiZWZvcmVTaG93LmZiXCI6IGZ1bmN0aW9uKGUsIGluc3RhbmNlLCBjdXJyZW50LCBmaXJzdFJ1bikge1xyXG4gICAgICAgIHZhciBnYWxsZXJ5O1xyXG5cclxuICAgICAgICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC5vcHRzLmhhc2ggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBuZWVkIHRvIHVwZGF0ZSB3aW5kb3cgaGFzaFxyXG4gICAgICAgIGdhbGxlcnkgPSBnZXRHYWxsZXJ5SUQoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICBpZiAoIWdhbGxlcnkpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFZhcmlhYmxlIGNvbnRhaW5pbmcgbGFzdCBoYXNoIHZhbHVlIHNldCBieSBmYW5jeUJveFxyXG4gICAgICAgIC8vIEl0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgaWYgZmFuY3lCb3ggbmVlZHMgdG8gY2xvc2UgYWZ0ZXIgaGFzaCBjaGFuZ2UgaXMgZGV0ZWN0ZWRcclxuICAgICAgICBpbnN0YW5jZS5jdXJyZW50SGFzaCA9IGdhbGxlcnkgKyAoaW5zdGFuY2UuZ3JvdXAubGVuZ3RoID4gMSA/IFwiLVwiICsgKGN1cnJlbnQuaW5kZXggKyAxKSA6IFwiXCIpO1xyXG5cclxuICAgICAgICAvLyBJZiBjdXJyZW50IGhhc2ggaXMgdGhlIHNhbWUgKHRoaXMgaW5zdGFuY2UgbW9zdCBsaWtlbHkgaXMgb3BlbmVkIGJ5IGhhc2hjaGFuZ2UpLCB0aGVuIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiI1wiICsgaW5zdGFuY2UuY3VycmVudEhhc2gpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmaXJzdFJ1biAmJiAhaW5zdGFuY2Uub3JpZ0hhc2gpIHtcclxuICAgICAgICAgIGluc3RhbmNlLm9yaWdIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5zdGFuY2UuaGFzaFRpbWVyKSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQoaW5zdGFuY2UuaGFzaFRpbWVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBoYXNoXHJcbiAgICAgICAgaW5zdGFuY2UuaGFzaFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlmIChcInJlcGxhY2VTdGF0ZVwiIGluIHdpbmRvdy5oaXN0b3J5KSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W2ZpcnN0UnVuID8gXCJwdXNoU3RhdGVcIiA6IFwicmVwbGFjZVN0YXRlXCJdKFxyXG4gICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlLFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyBcIiNcIiArIGluc3RhbmNlLmN1cnJlbnRIYXNoXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlyc3RSdW4pIHtcclxuICAgICAgICAgICAgICBpbnN0YW5jZS5oYXNDcmVhdGVkSGlzdG9yeSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaW5zdGFuY2UuY3VycmVudEhhc2g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5zdGFuY2UuaGFzaFRpbWVyID0gbnVsbDtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCJiZWZvcmVDbG9zZS5mYlwiOiBmdW5jdGlvbihlLCBpbnN0YW5jZSwgY3VycmVudCkge1xyXG4gICAgICAgIGlmICghY3VycmVudCB8fCBjdXJyZW50Lm9wdHMuaGFzaCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChpbnN0YW5jZS5oYXNoVGltZXIpO1xyXG5cclxuICAgICAgICAvLyBHb3RvIHByZXZpb3VzIGhpc3RvcnkgZW50cnlcclxuICAgICAgICBpZiAoaW5zdGFuY2UuY3VycmVudEhhc2ggJiYgaW5zdGFuY2UuaGFzQ3JlYXRlZEhpc3RvcnkpIHtcclxuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGluc3RhbmNlLmN1cnJlbnRIYXNoKSB7XHJcbiAgICAgICAgICBpZiAoXCJyZXBsYWNlU3RhdGVcIiBpbiB3aW5kb3cuaGlzdG9yeSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgKGluc3RhbmNlLm9yaWdIYXNoIHx8IFwiXCIpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaW5zdGFuY2Uub3JpZ0hhc2g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnN0YW5jZS5jdXJyZW50SGFzaCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIG5lZWQgdG8gc3RhcnQvY2xvc2UgYWZ0ZXIgdXJsIGhhcyBjaGFuZ2VkXHJcbiAgICAkKHdpbmRvdykub24oXCJoYXNoY2hhbmdlLmZiXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdXJsID0gcGFyc2VVcmwoKSxcclxuICAgICAgICBmYiA9IG51bGw7XHJcblxyXG4gICAgICAvLyBGaW5kIGxhc3QgZmFuY3lCb3ggaW5zdGFuY2UgdGhhdCBoYXMgXCJoYXNoXCJcclxuICAgICAgJC5lYWNoKFxyXG4gICAgICAgICQoXCIuZmFuY3lib3gtY29udGFpbmVyXCIpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC5yZXZlcnNlKCksXHJcbiAgICAgICAgZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICB2YXIgdG1wID0gJCh2YWx1ZSkuZGF0YShcIkZhbmN5Qm94XCIpO1xyXG5cclxuICAgICAgICAgIGlmICh0bXAgJiYgdG1wLmN1cnJlbnRIYXNoKSB7XHJcbiAgICAgICAgICAgIGZiID0gdG1wO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGZiKSB7XHJcbiAgICAgICAgLy8gTm93LCBjb21wYXJlIGhhc2ggdmFsdWVzXHJcbiAgICAgICAgaWYgKGZiLmN1cnJlbnRIYXNoICE9PSB1cmwuZ2FsbGVyeSArIFwiLVwiICsgdXJsLmluZGV4ICYmICEodXJsLmluZGV4ID09PSAxICYmIGZiLmN1cnJlbnRIYXNoID09IHVybC5nYWxsZXJ5KSkge1xyXG4gICAgICAgICAgZmIuY3VycmVudEhhc2ggPSBudWxsO1xyXG5cclxuICAgICAgICAgIGZiLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHVybC5nYWxsZXJ5ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgdHJpZ2dlckZyb21VcmwodXJsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgY3VycmVudCBoYXNoIGFuZCB0cmlnZ2VyIGNsaWNrIGV2ZW50IG9uIG1hdGNoaW5nIGVsZW1lbnQgdG8gc3RhcnQgZmFuY3lCb3gsIGlmIG5lZWRlZFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCEkLmZhbmN5Ym94LmdldEluc3RhbmNlKCkpIHtcclxuICAgICAgICB0cmlnZ2VyRnJvbVVybChwYXJzZVVybCgpKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTApO1xyXG4gIH0pO1xyXG59KSh3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkpO1xyXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIFdoZWVsXHJcbi8vIEJhc2ljIG1vdXNlIHdlaGVlbCBzdXBwb3J0IGZvciBnYWxsZXJ5IG5hdmlnYXRpb25cclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uKGRvY3VtZW50LCAkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHZhciBwcmV2VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbih7XHJcbiAgICBcIm9uSW5pdC5mYlwiOiBmdW5jdGlvbihlLCBpbnN0YW5jZSwgY3VycmVudCkge1xyXG4gICAgICBpbnN0YW5jZS4kcmVmcy5zdGFnZS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwgd2hlZWwgTW96TW91c2VQaXhlbFNjcm9sbFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnN0YW5jZS5jdXJyZW50LFxyXG4gICAgICAgICAgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIgfHwgY3VycmVudC5vcHRzLndoZWVsID09PSBmYWxzZSB8fCAoY3VycmVudC5vcHRzLndoZWVsID09PSBcImF1dG9cIiAmJiBjdXJyZW50LnR5cGUgIT09IFwiaW1hZ2VcIikpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudC4kc2xpZGUuaGFzQ2xhc3MoXCJmYW5jeWJveC1hbmltYXRlZFwiKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xyXG5cclxuICAgICAgICBpZiAoY3VyclRpbWUgLSBwcmV2VGltZSA8IDI1MCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJldlRpbWUgPSBjdXJyVGltZTtcclxuXHJcbiAgICAgICAgaW5zdGFuY2VbKC1lLmRlbHRhWSB8fCAtZS5kZWx0YVggfHwgZS53aGVlbERlbHRhIHx8IC1lLmRldGFpbCkgPCAwID8gXCJuZXh0XCIgOiBcInByZXZpb3VzXCJdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KShkb2N1bWVudCwgalF1ZXJ5KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==