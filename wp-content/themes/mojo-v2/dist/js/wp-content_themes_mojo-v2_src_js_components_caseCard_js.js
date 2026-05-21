"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_caseCard_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/classes/IsTopMedium.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/IsTopMedium.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var IsTopMedium = /*#__PURE__*/function () {
  function IsTopMedium() {
    _classCallCheck(this, IsTopMedium);
    if ('IntersectionObserver' in window) {
      this.hasSupport = true;
      this.initialize();
      this.addView(document);
    } else {
      this.hasSupport = false;
    }
  }
  return _createClass(IsTopMedium, [{
    key: "initialize",
    value: function initialize() {
      var options = {
        rootMargin: '-25% 0% -75% 0%',
        threshold: 0
      };
      this.observer = new IntersectionObserver(this.callback.bind(this), options);
    }
  }, {
    key: "addView",
    value: function addView(view) {
      var _this = this;
      var defaultElements = view.querySelectorAll('.js-is-top-medium');
      defaultElements.forEach(function (element) {
        _this.addElement(element);
      });
    }
  }, {
    key: "addElement",
    value: function addElement(el) {
      if (this.hasSupport) this.observer.observe(el);else el.classList.add('in-top-medium');
    }
  }, {
    key: "callback",
    value: function callback(elements) {
      elements.forEach(function (element) {
        if (element.isIntersecting) {
          var event = new CustomEvent('inTopMedium', {
            'detail': element
          });
          element.target.dispatchEvent(event);
          if (element.target.classList.contains('js-is-top-medium')) {
            element.target.classList.add('in-top-medium');
          }
        } else {
          var _event = new CustomEvent('outTopMedium', {
            'detail': element
          });
          element.target.dispatchEvent(_event);
          if (element.target.classList.contains('js-is-top-medium')) {
            element.target.classList.remove('in-top-medium');
          }
        }
      });
    }
  }]);
}();
var instance = new IsTopMedium();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/caseCard.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/caseCard.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ caseCard)
/* harmony export */ });
/* harmony import */ var _classes_IsTopMedium__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/IsTopMedium */ "./wp-content/themes/mojo-v2/src/js/classes/IsTopMedium.js");
/* harmony import */ var _utils_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detect */ "./wp-content/themes/mojo-v2/src/js/utils/detect.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var caseCard = /*#__PURE__*/function () {
  function caseCard(el) {
    _classCallCheck(this, caseCard);
    this.el = el;
    this.isVideo = el.classList.contains('caseCard--video');
    if (this.isVideo) {
      this.link = this.el.querySelector('.caseCard__link');
      this.video = this.el.querySelector('.caseCard__video');
    }
    if ((0,_utils_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
      _classes_IsTopMedium__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(this.el);
    }
    this.setEvents();
  }
  return _createClass(caseCard, [{
    key: "play",
    value: function play() {
      this.video.currentTime = 0;
      this.video.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.video.pause();
      this.video.currentTime = 0;
    }

    /**
     * Events
     */
  }, {
    key: "setEvents",
    value: function setEvents() {
      if (this.isVideo) {
        if ((0,_utils_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile)()) {
          this.el.addEventListener('inTopMedium', this.e_inTop.bind(this));
          this.el.addEventListener('outTopMedium', this.e_outTop.bind(this));
        } else {
          this.link.addEventListener('mouseenter', this.e_enter.bind(this));
          this.link.addEventListener('mouseleave', this.e_leave.bind(this));
        }
        this.video.addEventListener('playing', this.e_playing.bind(this));
        this.video.addEventListener('pause', this.e_pause.bind(this));
      }
      this.el.addEventListener('inView', this.e_inview.bind(this));
    }
  }, {
    key: "e_playing",
    value: function e_playing(e) {
      this.el.classList.add('caseCard--playing');
    }
  }, {
    key: "e_pause",
    value: function e_pause(e) {
      this.el.classList.remove('caseCard--playing');
    }
  }, {
    key: "e_inTop",
    value: function e_inTop(e) {
      this.play();
    }
  }, {
    key: "e_outTop",
    value: function e_outTop(e) {
      this.pause();
    }
  }, {
    key: "e_enter",
    value: function e_enter(e) {
      this.play();
    }
  }, {
    key: "e_leave",
    value: function e_leave(e) {
      this.pause();
    }
  }, {
    key: "e_inview",
    value: function e_inview(e) {
      this.el.classList.add('caseCard--inview');
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.caseCard';
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_caseCard_js.js.map