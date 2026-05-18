"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["/js/main"],{

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/destroy.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/destroy.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroy: () => (/* binding */ destroy)
/* harmony export */ });
function destroy(cursor) {
  if (cursor.initialized) {
    cursor.element.classList.remove('cursor--initialized');
    cursor.element.classList.remove('cursor--disabled');
    cursor.element.classList.remove('cursor--off-screen');
    cursor.unhideTrueCursor();
    document.removeEventListener('mousemove', cursor.track);
    document.removeEventListener('mouseleave', cursor.leave);
    document.removeEventListener('mouseenter', cursor.enter);
    document.removeEventListener('mousedown', cursor.clicking);
    cursor.focusController = cursor.focusController.destroy();
    cursor.initialized = false;
  }
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/clicking.js":
/*!*********************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/clicking.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clicking: () => (/* binding */ clicking)
/* harmony export */ });
function clicking(cursor) {
  cursor.element.classList.add('cursor--clicking');
  var _mouseup = function mouseup() {
    cursor.element.classList.remove('cursor--clicking');
    document.removeEventListener('mouseup', _mouseup);
  };
  document.addEventListener('mouseup', _mouseup, {
    once: true
  });
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/enter.js":
/*!******************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/enter.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enter: () => (/* binding */ enter)
/* harmony export */ });
function enter(cursor) {
  cursor.element.classList.remove('cursor--offScreen');
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/leave.js":
/*!******************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/leave.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   leave: () => (/* binding */ leave)
/* harmony export */ });
function leave(cursor) {
  cursor.element.classList.add('cursor--offScreen');
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/track.js":
/*!******************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/track.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   track: () => (/* binding */ track)
/* harmony export */ });
function track(e, cursor) {
  cursor.position.X = e.clientX;
  cursor.position.Y = e.clientY;
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/focus.js":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/focus.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Focus)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Focus = /*#__PURE__*/function () {
  function Focus(cursor) {
    var _this = this;
    _classCallCheck(this, Focus);
    this.cursor = cursor;
    this.initializedElements = [];
    this.focusClasses = [];
    this.elementEnter = function (focusClass, customEnterFunc) {
      var func = function func() {
        if (focusClass) {
          _this.cursor.element.classList.add(focusClass);
        }
        if (typeof customEnterFunc == 'function') customEnterFunc(_this.cursor);
      };
      return func;
    };
    this.elementLeave = function (focusClass, customLeaveFunc) {
      var func = function func() {
        if (focusClass) {
          _this.cursor.element.classList.remove(focusClass);
        }
        if (typeof customLeaveFunc == 'function') customLeaveFunc(_this.cursor);
      };
      return func;
    };
  }
  return _createClass(Focus, [{
    key: "addFocusElements",
    value: function addFocusElements(focusOpts) {
      var _this2 = this;
      focusOpts.forEach(function (selector) {
        if (typeof selector === 'string' || _typeof(selector) === 'object') {
          var elInfo = selector.hasOwnProperty('elements') ? selector.elements : selector;
          var focusClass = selector.hasOwnProperty('focusClass') ? selector.focusClass : _this2.cursor.options.focusClass;
          var customEnterFunc = selector.hasOwnProperty('mouseenter') ? selector.mouseenter : null;
          var customLeaveFunc = selector.hasOwnProperty('mouseleave') ? selector.mouseleave : null;
          var elements = [];
          if (typeof elInfo === 'string') {
            elements = document.querySelectorAll(elInfo);
          } else {
            elements = elInfo;
          }
          var enterFunc = _this2.elementEnter(focusClass, customEnterFunc);
          var leaveFunc = _this2.elementLeave(focusClass, customLeaveFunc);
          if (!_this2.focusClasses.includes(focusClass)) {
            _this2.focusClasses.push(focusClass);
          }
          var _iterator = _createForOfIteratorHelper(elements),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var el = _step.value;
              if (_this2.initializedElements.map(function (item) {
                return item.el;
              }).includes(el)) continue;
              el.addEventListener('mouseenter', enterFunc);
              el.addEventListener('mouseleave', leaveFunc);
              _this2.initializedElements.push({
                el: el,
                enterFunc: enterFunc,
                leaveFunc: leaveFunc
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      });
      return this;
    }
  }, {
    key: "removeFocusElements",
    value: function removeFocusElements(elements) {
      var _this3 = this;
      elements.forEach(function (el) {
        var ref = _this3.initializedElements.find(function (item) {
          return item.el == el;
        });
        if (ref) {
          el.removeEventListener('mouseenter', ref.enterFunc);
          el.removeEventListener('mouseleave', ref.leaveFunc);
        }
      });
      if (elements.length) {
        this.initializedElements = this.initializedElements.filter(function (obj) {
          return !_toConsumableArray(elements).includes(obj.el);
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.initializedElements.forEach(function (initializedElement) {
        initializedElement.el.removeEventListener('mouseenter', initializedElement.enterFunc);
        initializedElement.el.removeEventListener('mouseleave', initializedElement.leaveFunc);
      });
      this.initializedElements = [];
      var _iterator2 = _createForOfIteratorHelper(this.focusClasses),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var string = _step2.value;
          this.cursor.element.classList.remove(string);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return null;
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/initialize.js":
/*!****************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/initialize.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/focus.js");

function initialize(cursor) {
  if (!cursor.isMobileUserAgent) {
    cursor.element.classList.add('cursor--initialized');
    if (cursor.options.hideTrueCursor) {
      cursor.hideTrueCursor();
    }
    document.addEventListener('mousemove', cursor.track);
    document.addEventListener('mouseleave', cursor.leave);
    document.addEventListener('mouseenter', cursor.enter);
    document.addEventListener('mousedown', cursor.clicking);
    var _render = function render() {
      if (!cursor.disabled) {
        cursor.setPosition(cursor.position.X, cursor.position.Y);
      }
      requestAnimationFrame(_render);
    };
    _render();
    cursor.focusController = new _focus__WEBPACK_IMPORTED_MODULE_0__["default"](cursor).addFocusElements(cursor.options.focusElements);
    cursor.initialized = true;
  }
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/defaults.js":
/*!*********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/defaults.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Wether or not the true cursor should be visible
  hideTrueCursor: false,
  // Elements that apply the focus class on hover
  focusElements: ['a', 'button'],
  // Class applied when the true cursor is hovering over a focusElement
  focusClass: 'cursor--focused'
});

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/index.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomCursor)
/* harmony export */ });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/defaults.js");
/* harmony import */ var _util_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/log */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/util/log.js");
/* harmony import */ var _util_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/object */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/util/object.js");
/* harmony import */ var _util_isMobileUserAgent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isMobileUserAgent */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/util/isMobileUserAgent.js");
/* harmony import */ var _core_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/destroy */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/destroy.js");
/* harmony import */ var _core_initialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/initialize */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/initialize.js");
/* harmony import */ var _core_events_enter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/events/enter */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/enter.js");
/* harmony import */ var _core_events_leave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/events/leave */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/leave.js");
/* harmony import */ var _core_events_track__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/events/track */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/track.js");
/* harmony import */ var _core_events_clicking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/events/clicking */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/events/clicking.js");
/* harmony import */ var _utils_detect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/detect */ "./wp-content/themes/mojo-v2/src/js/utils/detect.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// DEFAULT SETTINGS


// UTILITY FUNCTIONS




// CORE FUNCTIONS



// EVENTS





var CustomCursor = /*#__PURE__*/function () {
  function CustomCursor(element) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, CustomCursor);
    if (typeof element === 'string') element = document.querySelector(element);
    if (!element || !element.nodeName) throw new Error('No element is specified to initialize customCursor');
    this.isActive = false;
    this.element = element;
    this.focusController = null;
    this.styleTag = null;
    this.initialized = false;
    this.disabled = false;
    if ((0,_utils_detect__WEBPACK_IMPORTED_MODULE_10__.isTouchDevice)()) this.disabled = true;
    this.position = {
      X: null,
      Y: null
    };
    this.options = {
      hideTrueCursor: options.hideTrueCursor || _defaults__WEBPACK_IMPORTED_MODULE_0__["default"].hideTrueCursor,
      focusElements: options.focusElements || _defaults__WEBPACK_IMPORTED_MODULE_0__["default"].focusElements,
      focusClass: options.focusClass || _defaults__WEBPACK_IMPORTED_MODULE_0__["default"].focusClass
    };
    this.isMobileUserAgent = (0,_util_isMobileUserAgent__WEBPACK_IMPORTED_MODULE_3__.isMobileUserAgent)();
    this.enter = function () {
      (0,_core_events_enter__WEBPACK_IMPORTED_MODULE_6__.enter)(_this);
    };
    this.leave = function () {
      (0,_core_events_leave__WEBPACK_IMPORTED_MODULE_7__.leave)(_this);
    };
    this.track = function (e) {
      (0,_core_events_track__WEBPACK_IMPORTED_MODULE_8__.track)(e, _this);
    };
    this.clicking = function (e) {
      (0,_core_events_clicking__WEBPACK_IMPORTED_MODULE_9__.clicking)(_this);
    };
  }
  return _createClass(CustomCursor, [{
    key: "active",
    value: function active() {
      if (this.initialized) {
        this.element.classList.add('cursor--active');
        this.isActive = true;
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      (0,_core_initialize__WEBPACK_IMPORTED_MODULE_5__.initialize)(this);
      return this;
    }
  }, {
    key: "disable",
    value: function disable() {
      if (this.initialized) {
        this.disabled = true;
        this.element.classList.add('cursor--disabled');
      } else (0,_util_log__WEBPACK_IMPORTED_MODULE_1__.warn)('CustomCursor needs to be initialized before it can be disabled');
      return this;
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.initialized) {
        this.disabled = false;
        this.element.classList.remove('cursor--disabled');
      } else (0,_util_log__WEBPACK_IMPORTED_MODULE_1__.warn)('CustomCursor needs to be initialized before it can be enabled');
      return this;
    }
  }, {
    key: "update",
    value: function update(newOptions) {
      if (!newOptions) {
        (0,_util_log__WEBPACK_IMPORTED_MODULE_1__.warn)('No new options are specified in update call');
        return;
      }
      if (!(0,_util_object__WEBPACK_IMPORTED_MODULE_2__.areOptionsEqual)(newOptions, this.options)) {
        for (var _i = 0, _Object$entries = Object.entries(newOptions); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          this.options[key] = value;
        }
      } else (0,_util_log__WEBPACK_IMPORTED_MODULE_1__.warn)('New options in update call are the same as the old options');
      this.destroy().initialize();
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.destroy().initialize();
    }
  }, {
    key: "hideTrueCursor",
    value: function hideTrueCursor() {
      document.documentElement.classList.add('hiddenCursor');
      return this;
    }
  }, {
    key: "unhideTrueCursor",
    value: function unhideTrueCursor() {
      document.documentElement.classList.add('hiddenCursor');
      return this;
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      var _this2 = this;
      var reqAni = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var set = function set() {
        if (typeof x === 'number' && typeof y === 'number') {
          if (!_this2.isActive) _this2.active();

          //this.element.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y})`
          document.documentElement.style.setProperty('--x', x);
          document.documentElement.style.setProperty('--y', y);
        }
      };
      if (reqAni) requestAnimationFrame(set);else set();
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,_core_destroy__WEBPACK_IMPORTED_MODULE_4__.destroy)(this);
      return this;
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/util/isMobileUserAgent.js":
/*!***********************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/util/isMobileUserAgent.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMobileUserAgent: () => (/* binding */ isMobileUserAgent)
/* harmony export */ });
function isMobileUserAgent() {
  var isMobile = false;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }
  return isMobile;
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/util/log.js":
/*!*********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/util/log.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warn: () => (/* binding */ warn)
/* harmony export */ });
function warn(msg) {
  console.error("[CustomCursor]: ".concat(msg));
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/util/object.js":
/*!************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/util/object.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areOptionsEqual: () => (/* binding */ areOptionsEqual)
/* harmony export */ });
function areOptionsEqual(object1, object2) {
  for (var key in object1) {
    if (object1.hasOwnProperty(key)) {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Footer.js":
/*!************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Footer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Footer = /*#__PURE__*/function () {
  function Footer(el) {
    _classCallCheck(this, Footer);
    this.el = document.querySelector('.footer');
    if (!this.el) return;
    this.body = document.querySelector('body');
    this.svg = this.el.querySelector('#footerSvg');
    this.svgWrapper = this.el.querySelector('.footer__svgWrapper');
    this.circle = this.el.querySelector('#footerSvg_circle');
    this.sensible = this.el.querySelector('#footer_sensible');
    this.links = this.el.querySelectorAll('a');
    this.isFirefox = /Firefox/i.test(navigator.userAgent);
    this.setRect();
    this.setEvents();
  }
  return _createClass(Footer, [{
    key: "setRect",
    value: function setRect() {
      this.svgRect = this.svgWrapper.getBoundingClientRect();
      this.svg.style.setProperty('--left', Math.round(this.svgRect.left * -1) + 'px');
      this.svg.style.setProperty('--top', Math.round(this.svgRect.top * -1) + 'px');
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;
      this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
      this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));
      window.lenis.on('scroll', function (e) {
        _this.e_scroll(e);
      });
      // window.addEventListener('scroll', (e)=>{ this.e_scroll(e)});
      window.addEventListener('resize', function (e) {
        _this.e_resize(e);
      });
      this.links.forEach(function (link) {
        link.addEventListener('mouseenter', _this.e_mousenterLink.bind(_this));
        link.addEventListener('mouseleave', _this.e_mouseleaveLink.bind(_this));
      });
      if (this.isFirefox) {
        //quickfix firefox
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set('#footerSvg_circle', {
          autoAlpha: 0,
          scale: 0.001
        });
        this.el.addEventListener('mouseenter', this.e_mousenterEl.bind(this));
        this.el.addEventListener('mouseleave', this.e_mouseleaveEl.bind(this));
        window.addEventListener('mousemove', this.e_mousemove.bind(this));
      }
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mousemove",
    value: function e_mousemove(e) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        x: e.clientX - this.svgRect.left,
        y: e.clientY - this.svgRect.top,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  }, {
    key: "e_mousenterEl",
    value: function e_mousenterEl(e) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        autoAlpha: 1,
        scale: 1,
        duration: 0
      });
    }
  }, {
    key: "e_mouseleaveEl",
    value: function e_mouseleaveEl(e) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        autoAlpha: 0,
        scale: 0.001,
        duration: 0
      });
    }
  }, {
    key: "e_mousenter",
    value: function e_mousenter() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        scale: 266 / 36,
        duration: 0.3,
        ease: "power4.out",
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_mouseleave",
    value: function e_mouseleave() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        scale: 1,
        duration: 0.3,
        ease: "power4.out",
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_mousenterLink",
    value: function e_mousenterLink() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        scale: 72 / 36,
        duration: 0.3,
        ease: "power4.out",
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_mouseleaveLink",
    value: function e_mouseleaveLink() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        scale: 1,
        duration: 0.3,
        ease: "power4.out",
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_scroll",
    value: function e_scroll(e) {
      this.setRect();
    }
  }, {
    key: "e_resize",
    value: function e_resize(e) {
      this.setRect();
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Header.js":
/*!************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Header.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Header = /*#__PURE__*/function () {
  function Header(el) {
    _classCallCheck(this, Header);
    this.el = document.querySelector('.header');
    if (!this.el) return;
    this.setEvents();
    if (!document.body.classList.contains('home')) _classes_InView__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(this.el);
  }
  return _createClass(Header, [{
    key: "setEvents",
    value: function setEvents() {
      this.el.addEventListener('inView', this.e_inview.bind(this));
    }

    /**
     * Handlers
     */
  }, {
    key: "e_inview",
    value: function e_inview(e) {
      this.el.classList.add('header--inview');
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/InView.js":
/*!************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/InView.js ***!
  \************************************************************/
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
var InView = /*#__PURE__*/function () {
  function InView() {
    var _this = this;
    _classCallCheck(this, InView);
    this.defaultElements = document.querySelectorAll('.js-in-view');
    if ('IntersectionObserver' in window) {
      var options = {
        rootMargin: '0px',
        threshold: [0.0, 0.1]
      };
      this.hasSupport = true;
      this.observer = new IntersectionObserver(this.callback.bind(this), options);
    } else {
      this.hasSupport = false;
    }
    this.defaultElements.forEach(function (element) {
      _this.addElement(element);
    });
  }
  return _createClass(InView, [{
    key: "addView",
    value: function addView(view) {
      var _this2 = this;
      var defaultElements = view.querySelectorAll('.js-in-view');
      defaultElements.forEach(function (element) {
        _this2.addElement(element);
      });
    }
  }, {
    key: "callback",
    value: function callback(elements) {
      var _this3 = this;
      elements.forEach(function (element) {
        if (element.intersectionRatio > 0) {
          var event = new CustomEvent('inView', {
            'detail': elements
          });
          element.target.dispatchEvent(event);
          _this3.observer.unobserve(element.target);
          if (element.target.classList.contains('js-in-view')) {
            element.target.classList.add('in-view');
          }
        }
      });
    }
  }, {
    key: "addElement",
    value: function addElement(el) {
      if (this.hasSupport) this.observer.observe(el);else el.classList.add('in-view');
    }
  }]);
}();
var instance = new InView();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/IsCentered.js":
/*!****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/IsCentered.js ***!
  \****************************************************************/
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
var IsCentered = /*#__PURE__*/function () {
  function IsCentered() {
    _classCallCheck(this, IsCentered);
    if ('IntersectionObserver' in window) {
      this.hasSupport = true;
      this.initialize();
      this.addView(document);
    } else {
      this.hasSupport = false;
    }
  }
  return _createClass(IsCentered, [{
    key: "initialize",
    value: function initialize() {
      var options = {
        rootMargin: '-50% 0% -50% 0%',
        threshold: 0
      };
      this.observer = new IntersectionObserver(this.callback.bind(this), options);
    }
  }, {
    key: "addView",
    value: function addView(view) {
      var _this = this;
      var defaultElements = view.querySelectorAll('.js-is-center');
      defaultElements.forEach(function (element) {
        _this.addElement(element);
      });
    }
  }, {
    key: "addElement",
    value: function addElement(el) {
      if (this.hasSupport) this.observer.observe(el);else el.classList.add('in-center');
    }
  }, {
    key: "callback",
    value: function callback(elements) {
      elements.forEach(function (element) {
        if (element.isIntersecting) {
          var event = new CustomEvent('inCenter', {
            'detail': element
          });
          element.target.dispatchEvent(event);
          if (element.target.classList.contains('js-is-center')) {
            element.target.classList.add('in-center');
          }
        } else {
          var _event = new CustomEvent('outCenter', {
            'detail': element
          });
          element.target.dispatchEvent(_event);
          if (element.target.classList.contains('js-is-center')) {
            element.target.classList.remove('in-center');
          }
        }
      });
    }
  }]);
}();
var instance = new IsCentered();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/IsTop.js":
/*!***********************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/IsTop.js ***!
  \***********************************************************/
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
var IsTop = /*#__PURE__*/function () {
  function IsTop() {
    _classCallCheck(this, IsTop);
    if ('IntersectionObserver' in window) {
      this.hasSupport = true;
      this.initialize();
      this.addView(document);
    } else {
      this.hasSupport = false;
    }
  }
  return _createClass(IsTop, [{
    key: "initialize",
    value: function initialize() {
      var options = {
        rootMargin: '50% 0% -70% 0%',
        threshold: 0
      };
      this.observer = new IntersectionObserver(this.callback.bind(this), options);
    }
  }, {
    key: "addView",
    value: function addView(view) {
      var _this = this;
      var defaultElements = view.querySelectorAll('.js-is-top');
      defaultElements.forEach(function (element) {
        _this.addElement(element);
      });
    }
  }, {
    key: "addElement",
    value: function addElement(el) {
      if (this.hasSupport) this.observer.observe(el);else el.classList.add('in-top');
    }
  }, {
    key: "callback",
    value: function callback(elements) {
      elements.forEach(function (element) {
        if (element.isIntersecting) {
          var event = new CustomEvent('inTop', {
            'detail': element
          });
          element.target.dispatchEvent(event);
          if (element.target.classList.contains('js-is-top')) {
            element.target.classList.add('in-top');
          }
        } else {
          var _event = new CustomEvent('outTop', {
            'detail': element
          });
          element.target.dispatchEvent(_event);
          if (element.target.classList.contains('js-is-top')) {
            element.target.classList.remove('in-top');
          }
        }
      });
    }
  }]);
}();
var instance = new IsTop();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Menu.js":
/*!**********************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Menu.js ***!
  \**********************************************************/
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
var MenuClass = /*#__PURE__*/function () {
  function MenuClass() {
    _classCallCheck(this, MenuClass);
  }
  return _createClass(MenuClass, [{
    key: "initialize",
    value: function initialize() {
      this.menu = document.querySelector('.menu');
      this.links = this.menu.querySelectorAll('.menu__mainItem');
      this.openMenu = document.querySelectorAll('.openMenu');
      this.closeMenu = document.querySelector('.closeMenu');
      this.isOpen = false;
      this.setEvents();
      return this;
    }
  }, {
    key: "update",
    value: function update(data) {
      var _this = this;
      this.links.forEach(function (link) {
        if (link.getAttribute('href') === data.next.url.href) {
          link.classList.add('menu__mainItem--current');
        } else {
          link.classList.remove('menu__mainItem--current');
        }
      });
      var otherOpen = data.next.container.querySelectorAll('.openMenu');
      otherOpen.forEach(function (link) {
        link.addEventListener('click', function (e) {
          _this.e_clickopenMenu(e);
        }, false);
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this.isOpen) this.open();else this.close();
    }
  }, {
    key: "open",
    value: function open() {
      if (this.isOpen) return;
      document.body.classList.add('menuOpen');
      this.isOpen = true;
      window.lenis.stop();
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.isOpen) return;
      document.body.classList.remove('menuOpen');
      this.isOpen = false;
      window.lenis.start();
    }
  }, {
    key: "closeQuick",
    value: function closeQuick() {
      if (!this.isOpen) return;
      document.body.classList.add('menuNoTransition');
      setTimeout(function () {
        document.body.classList.remove('menuOpen');
      }, 50);
      setTimeout(function () {
        document.body.classList.remove('menuNoTransition');
      }, 200);
      this.isOpen = false;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;
      this.openMenu.forEach(function (link) {
        link.addEventListener('click', function (e) {
          _this2.e_clickopenMenu(e);
        }, false);
      });
      this.closeMenu.addEventListener('click', function (e) {
        _this2.e_clickClose(e);
      }, false);
    }
  }, {
    key: "e_clickopenMenu",
    value: function e_clickopenMenu(e) {
      e.preventDefault();
      this.toggle();
    }
  }, {
    key: "e_clickClose",
    value: function e_clickClose(e) {
      e.preventDefault();
      this.close();
    }
  }, {
    key: "e_clickItem",
    value: function e_clickItem(e) {
      this.close();
      this.items.forEach(function (item) {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  }]);
}();
var Menu = new MenuClass();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Pluton.js":
/*!************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Pluton.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var components = {
  'ContactForm': {
    selector: '.contact',
    load: function load() {
      return __webpack_require__.e(/*! import() | contact-form */ "contact-form").then(__webpack_require__.bind(__webpack_require__, /*! ../components/ContactForm */ "./wp-content/themes/mojo-v2/src/js/components/ContactForm.js"));
    }
  },
  'Globe': {
    selector: '.globe',
    load: function load() {
      return __webpack_require__.e(/*! import() | globe */ "globe").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Globe */ "./wp-content/themes/mojo-v2/src/js/components/Globe.js"));
    }
  },
  'archiveStoriesFilters': {
    selector: '.archiveStories',
    load: function load() {
      return __webpack_require__.e(/*! import() | archive-stories */ "archive-stories").then(__webpack_require__.bind(__webpack_require__, /*! ../components/archiveStoriesFilters */ "./wp-content/themes/mojo-v2/src/js/components/archiveStoriesFilters.js"));
    }
  },
  'caseAccordion': {
    selector: '.caseAccordion',
    load: function load() {
      return __webpack_require__.e(/*! import() | case-accordion */ "case-accordion").then(__webpack_require__.bind(__webpack_require__, /*! ../components/caseAccordion */ "./wp-content/themes/mojo-v2/src/js/components/caseAccordion.js"));
    }
  },
  'caseCard': {
    selector: '.caseCard',
    load: function load() {
      return __webpack_require__.e(/*! import() | case-card */ "case-card").then(__webpack_require__.bind(__webpack_require__, /*! ../components/caseCard */ "./wp-content/themes/mojo-v2/src/js/components/caseCard.js"));
    }
  },
  'casesGrid': {
    selector: '.casesGrid',
    load: function load() {
      return __webpack_require__.e(/*! import() | cases-grid */ "cases-grid").then(__webpack_require__.bind(__webpack_require__, /*! ../components/casesGrid */ "./wp-content/themes/mojo-v2/src/js/components/casesGrid.js"));
    }
  },
  'casesServices': {
    selector: '.casesServices',
    load: function load() {
      return __webpack_require__.e(/*! import() | cases-services */ "cases-services").then(__webpack_require__.bind(__webpack_require__, /*! ../components/casesServices */ "./wp-content/themes/mojo-v2/src/js/components/casesServices.js"));
    }
  },
  'clientHover': {
    selector: '.clientHover',
    load: function load() {
      return __webpack_require__.e(/*! import() | client-hover */ "client-hover").then(__webpack_require__.bind(__webpack_require__, /*! ../components/clientHover */ "./wp-content/themes/mojo-v2/src/js/components/clientHover.js"));
    }
  },
  'clientIntro': {
    selector: '.clientIntro',
    load: function load() {
      return __webpack_require__.e(/*! import() | client-intro */ "client-intro").then(__webpack_require__.bind(__webpack_require__, /*! ../components/clientIntro */ "./wp-content/themes/mojo-v2/src/js/components/clientIntro.js"));
    }
  },
  'clientNumbers': {
    selector: '.clientNumbers',
    load: function load() {
      return __webpack_require__.e(/*! import() | client-numbers */ "client-numbers").then(__webpack_require__.bind(__webpack_require__, /*! ../components/clientNumbers */ "./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js"));
    }
  },
  'clientTypology': {
    selector: '.clientTypology',
    load: function load() {
      return __webpack_require__.e(/*! import() | client-typology */ "client-typology").then(__webpack_require__.bind(__webpack_require__, /*! ../components/clientTypology */ "./wp-content/themes/mojo-v2/src/js/components/clientTypology.js"));
    }
  },
  'commitmentsEarth': {
    selector: '.commitmentsEarth',
    load: function load() {
      return __webpack_require__.e(/*! import() | commitments-earth */ "commitments-earth").then(__webpack_require__.bind(__webpack_require__, /*! ../components/commitmentsEarth */ "./wp-content/themes/mojo-v2/src/js/components/commitmentsEarth.js"));
    }
  },
  'commitmentsFaq': {
    selector: '.commitmentsFaq',
    load: function load() {
      return __webpack_require__.e(/*! import() | commitments-faq */ "commitments-faq").then(__webpack_require__.bind(__webpack_require__, /*! ../components/commitmentsFaq */ "./wp-content/themes/mojo-v2/src/js/components/commitmentsFaq.js"));
    }
  },
  'commitmentsIntro': {
    selector: '.commitmentsIntro',
    load: function load() {
      return __webpack_require__.e(/*! import() | commitments-intro */ "commitments-intro").then(__webpack_require__.bind(__webpack_require__, /*! ../components/commitmentsIntro */ "./wp-content/themes/mojo-v2/src/js/components/commitmentsIntro.js"));
    }
  },
  'cta': {
    selector: '.cta',
    load: function load() {
      return __webpack_require__.e(/*! import() | cta */ "cta").then(__webpack_require__.bind(__webpack_require__, /*! ../components/cta */ "./wp-content/themes/mojo-v2/src/js/components/cta.js"));
    }
  },
  'faq': {
    selector: '.faq',
    load: function load() {
      return __webpack_require__.e(/*! import() | faq */ "faq").then(__webpack_require__.bind(__webpack_require__, /*! ../components/faq */ "./wp-content/themes/mojo-v2/src/js/components/faq.js"));
    }
  },
  'featuredCases': {
    selector: '.featuredCases',
    load: function load() {
      return __webpack_require__.e(/*! import() | featured-cases */ "featured-cases").then(__webpack_require__.bind(__webpack_require__, /*! ../components/featuredCases */ "./wp-content/themes/mojo-v2/src/js/components/featuredCases.js"));
    }
  },
  'homeIntro': {
    selector: '.homeIntro',
    load: function load() {
      return __webpack_require__.e(/*! import() | home-intro */ "home-intro").then(__webpack_require__.bind(__webpack_require__, /*! ../components/homeIntro */ "./wp-content/themes/mojo-v2/src/js/components/homeIntro.js"));
    }
  },
  'homePurpose': {
    selector: '.homePurpose',
    load: function load() {
      return __webpack_require__.e(/*! import() | home-purpose */ "home-purpose").then(__webpack_require__.bind(__webpack_require__, /*! ../components/homePurpose */ "./wp-content/themes/mojo-v2/src/js/components/homePurpose.js"));
    }
  },
  'homeService': {
    selector: '.homeService',
    load: function load() {
      return __webpack_require__.e(/*! import() | home-service */ "home-service").then(__webpack_require__.bind(__webpack_require__, /*! ../components/homeService */ "./wp-content/themes/mojo-v2/src/js/components/homeService.js"));
    }
  },
  'homeTransformation': {
    selector: '.homeTransformation',
    load: function load() {
      return Promise.all(/*! import() | home-transformation */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home-transformation")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/homeTransformation */ "./wp-content/themes/mojo-v2/src/js/components/homeTransformation.js"));
    }
  },
  'homeVideo': {
    selector: '.homeVideo',
    load: function load() {
      return __webpack_require__.e(/*! import() | home-video */ "home-video").then(__webpack_require__.bind(__webpack_require__, /*! ../components/homeVideo */ "./wp-content/themes/mojo-v2/src/js/components/homeVideo.js"));
    }
  },
  'imagesslider': {
    selector: '.imagesslider',
    load: function load() {
      return __webpack_require__.e(/*! import() | images-slider */ "images-slider").then(__webpack_require__.bind(__webpack_require__, /*! ../components/imagesslider */ "./wp-content/themes/mojo-v2/src/js/components/imagesslider.js"));
    }
  },
  'leadDescription': {
    selector: '.leadDescription',
    load: function load() {
      return __webpack_require__.e(/*! import() | lead-description */ "lead-description").then(__webpack_require__.bind(__webpack_require__, /*! ../components/leadDescription */ "./wp-content/themes/mojo-v2/src/js/components/leadDescription.js"));
    }
  },
  'leadLogoCarrousel': {
    selector: '.leadLogoCarrousel',
    load: function load() {
      return __webpack_require__.e(/*! import() | lead-logo */ "lead-logo").then(__webpack_require__.bind(__webpack_require__, /*! ../components/leadLogoCarrousel */ "./wp-content/themes/mojo-v2/src/js/components/leadLogoCarrousel.js"));
    }
  },
  'leadTeam': {
    selector: '.leadTeam',
    load: function load() {
      return __webpack_require__.e(/*! import() | lead-team */ "lead-team").then(__webpack_require__.bind(__webpack_require__, /*! ../components/leadTeam */ "./wp-content/themes/mojo-v2/src/js/components/leadTeam.js"));
    }
  },
  'ourClients': {
    selector: '.ourClients',
    load: function load() {
      return __webpack_require__.e(/*! import() | our-clients */ "our-clients").then(__webpack_require__.bind(__webpack_require__, /*! ../components/ourClients */ "./wp-content/themes/mojo-v2/src/js/components/ourClients.js"));
    }
  },
  'pageClient': {
    selector: '.pageClient',
    load: function load() {
      return __webpack_require__.e(/*! import() | page-client */ "page-client").then(__webpack_require__.bind(__webpack_require__, /*! ../components/pageClient */ "./wp-content/themes/mojo-v2/src/js/components/pageClient.js"));
    }
  },
  'sCaseRandom': {
    selector: '.sCaseRandom',
    load: function load() {
      return __webpack_require__.e(/*! import() | scase-random */ "scase-random").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sCaseRandom */ "./wp-content/themes/mojo-v2/src/js/components/sCaseRandom.js"));
    }
  },
  'serviceCard': {
    selector: '.serviceCard',
    load: function load() {
      return __webpack_require__.e(/*! import() | service-card */ "service-card").then(__webpack_require__.bind(__webpack_require__, /*! ../components/serviceCard */ "./wp-content/themes/mojo-v2/src/js/components/serviceCard.js"));
    }
  },
  'serviceGrid': {
    selector: '.serviceGrid',
    load: function load() {
      return __webpack_require__.e(/*! import() | service-grid */ "service-grid").then(__webpack_require__.bind(__webpack_require__, /*! ../components/serviceGrid */ "./wp-content/themes/mojo-v2/src/js/components/serviceGrid.js"));
    }
  },
  'serviceHeader': {
    selector: '.serviceHeader',
    load: function load() {
      return __webpack_require__.e(/*! import() | service-header */ "service-header").then(__webpack_require__.bind(__webpack_require__, /*! ../components/serviceHeader */ "./wp-content/themes/mojo-v2/src/js/components/serviceHeader.js"));
    }
  },
  'teamGrid': {
    selector: '.teamGrid',
    load: function load() {
      return __webpack_require__.e(/*! import() | team-grid */ "team-grid").then(__webpack_require__.bind(__webpack_require__, /*! ../components/teamGrid */ "./wp-content/themes/mojo-v2/src/js/components/teamGrid.js"));
    }
  },
  'wpBlockDetails': {
    selector: '.wp-block-details',
    load: function load() {
      return __webpack_require__.e(/*! import() | wp-block-details */ "wp-block-details").then(__webpack_require__.bind(__webpack_require__, /*! ../components/wp-block-details */ "./wp-content/themes/mojo-v2/src/js/components/wp-block-details.js"));
    }
  }
};
var PlutonClass = /*#__PURE__*/function () {
  function PlutonClass() {
    _classCallCheck(this, PlutonClass);
    this.loaded = {};
    this.instances = {};
  }
  return _createClass(PlutonClass, [{
    key: "clear",
    value: function clear() {
      this.instances = {};
    }
  }, {
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(root) {
        var promises, _i, _Object$entries, _Object$entries$_i, name, def, elements;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              promises = [];
              _i = 0, _Object$entries = Object.entries(components);
            case 1:
              if (!(_i < _Object$entries.length)) {
                _context.n = 4;
                break;
              }
              _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), name = _Object$entries$_i[0], def = _Object$entries$_i[1];
              elements = (root || document).querySelectorAll(def.selector);
              if (!(elements.length === 0)) {
                _context.n = 2;
                break;
              }
              return _context.a(3, 3);
            case 2:
              promises.push(this._loadAndSetup(name, def, elements));
            case 3:
              _i++;
              _context.n = 1;
              break;
            case 4:
              _context.n = 5;
              return Promise.all(promises);
            case 5:
              return _context.a(2, this);
          }
        }, _callee, this);
      }));
      function setup(_x) {
        return _setup.apply(this, arguments);
      }
      return setup;
    }()
  }, {
    key: "_loadAndSetup",
    value: function () {
      var _loadAndSetup2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(name, def, elements) {
        var _this = this;
        var module, Component;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (this.loaded[name]) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return def.load();
            case 1:
              module = _context2.v;
              this.loaded[name] = module["default"];
            case 2:
              Component = this.loaded[name];
              elements.forEach(function (el) {
                if (!_this.instances[name]) _this.instances[name] = [];
                _this.instances[name].push(new Component(el));
              });
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function _loadAndSetup(_x2, _x3, _x4) {
        return _loadAndSetup2.apply(this, arguments);
      }
      return _loadAndSetup;
    }()
  }, {
    key: "destroy",
    value: function destroy() {
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.instances); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        value.forEach(function (component) {
          if (typeof component.destroy === 'function') {
            component.destroy();
          }
        });
      }
    }
  }, {
    key: "setupComponent",
    value: function setupComponent(name, root) {
      var def = components[name];
      if (!def) return;
      var elements = (root || document).querySelectorAll(def.selector);
      if (elements.length === 0) return;
      this._loadAndSetup(name, def, elements);
    }
  }, {
    key: "call",
    value: function call(className, fn, parameters) {
      if (!this.instances[className]) return;
      for (var i = this.instances[className].length - 1; i >= 0; i--) {
        this.instances[className][i][fn](parameters);
      }
    }
  }]);
}();
var Pluton = new PlutonClass();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pluton);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Router/index.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Router/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _InView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
/* harmony import */ var _IsCentered__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../IsCentered */ "./wp-content/themes/mojo-v2/src/js/classes/IsCentered.js");
/* harmony import */ var _IsTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IsTop */ "./wp-content/themes/mojo-v2/src/js/classes/IsTop.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Menu */ "./wp-content/themes/mojo-v2/src/js/classes/Menu.js");
/* harmony import */ var _lazyVideos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lazyVideos */ "./wp-content/themes/mojo-v2/src/js/classes/lazyVideos.js");
/* harmony import */ var _utils_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/video */ "./wp-content/themes/mojo-v2/src/js/classes/Router/utils/video.js");
/* harmony import */ var _transitions_curtain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transitions/curtain */ "./wp-content/themes/mojo-v2/src/js/classes/Router/transitions/curtain.js");
/* harmony import */ var _transitions_curtainFade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transitions/curtainFade */ "./wp-content/themes/mojo-v2/src/js/classes/Router/transitions/curtainFade.js");
/* harmony import */ var _transitions_fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions/fade */ "./wp-content/themes/mojo-v2/src/js/classes/Router/transitions/fade.js");
/* harmony import */ var _views_contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/contact */ "./wp-content/themes/mojo-v2/src/js/classes/Router/views/contact.js");
/* harmony import */ var _views_singlelead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/singlelead */ "./wp-content/themes/mojo-v2/src/js/classes/Router/views/singlelead.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

//import barbaPrefetch     from '@barba/prefetch';








// utils


// transitions




// views


//import singlecase           from './views/singlecase';
//import singleservicechild   from './views/singleservicechild';
//import pageTemplate         from './views/pageTemplate';
var Router = /*#__PURE__*/function () {
  function Router() {
    var _this = this;
    _classCallCheck(this, Router);
    //barba.use(barbaPrefetch);

    this.lazyVideos = new _lazyVideos__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.header = document.querySelector('.header');
    this.languageSelector = document.querySelector('.header__language');
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().init({
      timeout: 5000,
      // default is 2000ms
      logLevel: 'error',
      transitions: [
      //curtainFade,
      _transitions_curtain__WEBPACK_IMPORTED_MODULE_8__["default"], _transitions_fade__WEBPACK_IMPORTED_MODULE_10__["default"]],
      views: [_views_contact__WEBPACK_IMPORTED_MODULE_11__["default"], _views_singlelead__WEBPACK_IMPORTED_MODULE_12__["default"]
      //singlecase,
      //singleservicechild,
      //pageTemplate
      ]
      //cacheIgnore: ['/contact/']
    });
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().hooks.once(function () {
      _this.lazyVideos.refresh(document);
    });
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().hooks.leave(function () {
      window.MJ.parts.destroy();
      window.MJ.parts.clear();
    });
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().hooks.afterLeave(function () {
      _Menu__WEBPACK_IMPORTED_MODULE_5__["default"].closeQuick();
    });
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().hooks.before(function () {
      document.documentElement.classList.add('loading');
      window.lenis.stop();
    });
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().hooks.beforeEnter(function (data) {
      //this.updateHeader(data);
      _this.updatePage(data);
      _this.updateBlockCSS(data);
      _Menu__WEBPACK_IMPORTED_MODULE_5__["default"].update(data);
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.killAll();
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.refresh();
    });
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().hooks.enter(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              data.current.container.remove();
              window.lenis.start();
              window.MJ.cursor.reset();
              window.lenis.resize();
              _context.n = 1;
              return window.MJ.parts.setup(data.next.container);
            case 1:
              _InView__WEBPACK_IMPORTED_MODULE_2__["default"].addView(data.next.container);
              _IsTop__WEBPACK_IMPORTED_MODULE_4__["default"].addView(data.next.container);
              _IsCentered__WEBPACK_IMPORTED_MODULE_3__["default"].addView(data.next.container);
              document.documentElement.classList.remove('loading');
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().hooks.afterEnter(function (data) {
      (0,_utils_video__WEBPACK_IMPORTED_MODULE_7__.forceAutoplay)(data);
      setTimeout(function () {
        window.lenis.resize();
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.refresh();
      }, 200);
      _this.lazyVideos.refresh(data.next.container);
    });
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().hooks.after(function () {
      _this.lazyVideos.loadAllVisible();
      gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': location.href,
        'page_path': location.pathname
      });
    });
  }
  return _createClass(Router, [{
    key: "updateBlockCSS",
    value: function updateBlockCSS(data) {
      var needsBlocks = data.next.container.dataset.blocks === 'true';
      var cssId = 'wp-block-library-css';
      var alreadyLoaded = document.getElementById(cssId);
      if (needsBlocks && !alreadyLoaded) {
        var _window$MojoConfig;
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = cssId;
        link.href = ((_window$MojoConfig = window.MojoConfig) === null || _window$MojoConfig === void 0 ? void 0 : _window$MojoConfig.blockLibraryCssUrl) || '';
        if (link.href) document.head.appendChild(link);
      }
    }
  }, {
    key: "updatePage",
    value: function updatePage(data) {
      var _this2 = this;
      var parser = new DOMParser();
      var doc = parser.parseFromString(data.next.html, 'text/html');

      // header className
      var newHeader = doc.querySelector('.header');
      var classes = ['header--hidden', 'header--dark', 'header--light', 'header--withoutLogo'];
      classes.forEach(function (className) {
        if (newHeader.classList.contains(className)) _this2.header.classList.add(className);else _this2.header.classList.remove(className);
      });

      // header language
      var newLanguageSelector = doc.querySelector('.header__language');
      this.languageSelector.setAttribute('href', newLanguageSelector.getAttribute('href'));
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Router/transitions/curtain.js":
/*!********************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Router/transitions/curtain.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var curtain = document.querySelector('.curtain');
var curtainTransition = {
  name: 'curtain-transition',
  sync: false,
  leave: function leave(data) {
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(curtain, {
      y: 0,
      ease: "power1.out",
      duration: 0.5
    });
  },
  beforeEnter: function beforeEnter(data) {
    data.next.container.classList.add('curtainTransitionEntered');
    window.lenis.scrollTo(0, {
      duration: 0,
      force: true,
      immediate: true
    });
  },
  enter: function enter(data) {
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(curtain, {
      y: '100%',
      ease: "power1.out",
      duration: 0.5,
      delay: 0.1,
      onComplete: function onComplete() {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(curtain, {
          y: '-100%'
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curtainTransition);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Router/transitions/curtainFade.js":
/*!************************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Router/transitions/curtainFade.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var curtain = document.querySelector('.curtain');
var curtainFade = {
  name: 'curtain-fade-transition',
  sync: false,
  to: {
    namespace: ['ourclients'
    //'about'
    ]
  },
  leave: function leave(data) {
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(curtain, {
      y: 0,
      ease: "power1.out",
      duration: 0.5
    });
  },
  beforeEnter: function beforeEnter(data) {
    data.next.container.classList.add('curtainTransitionEntered');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(data.next.container, {
      autoAlpha: 0
    });
    window.lenis.scrollTo(0, {
      duration: 0,
      force: true,
      immediate: true
    });
  },
  enter: function enter(data) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(data.next.container, {
      autoAlpha: 1,
      ease: "none",
      duration: 0.5,
      delay: 0.1
    });
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(curtain, {
      y: '100vh',
      ease: "power1.out",
      duration: 0.5,
      delay: 0.1,
      onComplete: function onComplete() {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(curtain, {
          y: '-100vh'
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curtainFade);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Router/transitions/fade.js":
/*!*****************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Router/transitions/fade.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var fadeTransition = {
  name: 'fade-transition',
  sync: true,
  from: {
    namespace: ['archivecase']
  },
  to: {
    namespace: ['archivecase']
  },
  leave: function leave(data) {
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(data.current.container, {
      autoAlpha: 0,
      ease: "none",
      duration: 0.5
    });
  },
  beforeEnter: function beforeEnter(data) {
    data.next.container.classList.add('fadeTransitionEntered');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(data.next.container, {
      autoAlpha: 0
    });
  },
  enter: function enter(data) {
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(data.next.container, {
      autoAlpha: 1,
      ease: "none",
      duration: 0.5
      //delay: 1,
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeTransition);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Router/utils/video.js":
/*!************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Router/utils/video.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forceAutoplay: () => (/* binding */ forceAutoplay)
/* harmony export */ });
var forceAutoplay = function forceAutoplay(data) {
  // Play all video of the page
  var vids = data.next.container.querySelectorAll("video[autoplay]");
  vids.forEach(function (vid) {
    var playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.then(function (_) {})["catch"](function (error) {});
    }
    ;
  });
};


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Router/views/contact.js":
/*!**************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Router/views/contact.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var appendScripts = function appendScripts() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
  var script = document.createElement("script");
  script.src = window.location.origin + '/recaptcha.php';
  root.appendChild(script);
  console.log('recaptcha');
};
var contact = {
  namespace: 'contact',
  beforeEnter: function beforeEnter(data) {
    appendScripts(data.next.container);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Router/views/singlelead.js":
/*!*****************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Router/views/singlelead.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var appendScripts = function appendScripts() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
  var script = document.createElement("script");
  script.src = window.location.origin + '/recaptcha.php';
  root.appendChild(script);
  console.log('recaptcha');
};
var singlelead = {
  namespace: 'singlelead',
  beforeEnter: function beforeEnter(data) {
    appendScripts(data.next.container);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singlelead);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Scroller.js":
/*!**************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Scroller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scroller)
/* harmony export */ });
/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/lenis */ "./node_modules/@studio-freight/lenis/dist/lenis.mjs");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Scroller = /*#__PURE__*/function () {
  function Scroller() {
    _classCallCheck(this, Scroller);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    window.lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__["default"]({
      duration: 1,
      easing: function easing(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2.2
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    function raf(time) {
      window.lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);
    window.lenis.on('scroll', gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.update);
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].ticker.add(function (time) {
      window.lenis.raf(time * 1000);
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].ticker.lagSmoothing(0);
  }
  return _createClass(Scroller, [{
    key: "scrollTop",
    value: function scrollTop() {
      window.lenis.scrollTo(0, {
        duration: 0,
        force: true,
        immediate: true
      });
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursorOption.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursorOption.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var options = {
  selector: '.cursor',
  focusElements: [{
    elements: '.menu__mainItem',
    // Can be nodelist or selector
    focusClass: 'cursor--menuItem'
  }, {
    elements: '.serviceCard',
    // Can be nodelist or selector
    focusClass: 'cursor--service'
  }, 'button', 'a', {
    elements: '.header--light',
    // Can be nodelist or selector
    focusClass: 'cursor--dark'
  }, {
    elements: '#purposeSensible',
    // Can be nodelist or selector
    focusClass: 'cursor--big'
  }, {
    elements: '.darkSection',
    // Can be nodelist or selector
    focusClass: 'cursor--dark'
  }, {
    elements: '.footer',
    // Can be nodelist or selector
    focusClass: 'cursor--below'
  }, {
    elements: '.homePurpose',
    // Can be nodelist or selector
    focusClass: 'cursor--below'
  }, {
    elements: '.menu',
    // Can be nodelist or selector
    focusClass: 'cursor--menu'
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (options);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/lazyVideos.js":
/*!****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/lazyVideos.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LazyVideos = /*#__PURE__*/function () {
  function LazyVideos() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? "-100% 0% 0% 0%" : _ref$rootMargin,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold;
    _classCallCheck(this, LazyVideos);
    this.options = {
      rootMargin: rootMargin,
      threshold: threshold
    };
    this.lazyVideos = [];
    this.lazyVideoObserver = null;
    if ("IntersectionObserver" in window) {
      this.lazyVideoObserver = new IntersectionObserver(this._callback.bind(this), this.options);
    }
    this.attach(); // premier scan du document courant
  }

  // (re)scan + observe toutes les <video class="lazy"> sous root
  return _createClass(LazyVideos, [{
    key: "attach",
    value: function attach() {
      var _this = this,
        _this$lazyVideos;
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var nodes = Array.from(root.querySelectorAll("video.lazy"));
      // évite les doublons
      var newOnes = nodes.filter(function (v) {
        return !_this.lazyVideos.includes(v);
      });
      (_this$lazyVideos = this.lazyVideos).push.apply(_this$lazyVideos, _toConsumableArray(newOnes));
      newOnes.forEach(function (v) {
        return _this.observe(v);
      });
    }

    // alias pratique
  }, {
    key: "refresh",
    value: function refresh() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      this.attach(root);
      this.loadAllVisible(); // au cas où
    }
  }, {
    key: "observe",
    value: function observe(videoEl) {
      if (!this.lazyVideoObserver || !videoEl) return;
      this.lazyVideoObserver.observe(videoEl);
    }
  }, {
    key: "unobserve",
    value: function unobserve(videoEl) {
      if (!this.lazyVideoObserver || !videoEl) return;
      try {
        this.lazyVideoObserver.unobserve(videoEl);
      } catch (_unused) {}
      // retire de la liste interne
      var i = this.lazyVideos.indexOf(videoEl);
      if (i > -1) this.lazyVideos.splice(i, 1);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.lazyVideoObserver) {
        try {
          this.lazyVideoObserver.disconnect();
        } catch (_unused2) {}
      }
      this.lazyVideos = [];
    }

    // Force le chargement pour les vidéos déjà visibles (utile après une transition)
  }, {
    key: "loadAllVisible",
    value: function loadAllVisible() {
      var _this2 = this;
      this.lazyVideos.forEach(function (v) {
        var rect = v.getBoundingClientRect();
        var isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        if (isVisible) _this2._loadVideo(v);
      });
    }
  }, {
    key: "_callback",
    value: function _callback(entries) {
      var _this3 = this;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          _this3._loadVideo(entry.target);
        }
      });
    }
  }, {
    key: "_loadVideo",
    value: function _loadVideo(videoEl) {
      var _iterator = _createForOfIteratorHelper(videoEl.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var source = _step.value;
          if (source.tagName === "SOURCE" && source.dataset.src && !source.src) {
            source.src = source.dataset.src;
          }
        }
        // si <video> porte data-poster
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (videoEl.dataset.poster && !videoEl.poster) {
        videoEl.poster = videoEl.dataset.poster;
      }
      videoEl.load();
      videoEl.classList.remove("lazy");
      this.unobserve(videoEl);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LazyVideos);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/main.js":
/*!**************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Pluton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Pluton */ "./wp-content/themes/mojo-v2/src/js/classes/Pluton.js");
/* harmony import */ var _classes_Scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Scroller */ "./wp-content/themes/mojo-v2/src/js/classes/Scroller.js");
/* harmony import */ var _classes_Cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Cursor */ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/index.js");
/* harmony import */ var _classes_cursorOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/cursorOption */ "./wp-content/themes/mojo-v2/src/js/classes/cursorOption.js");
/* harmony import */ var _classes_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Menu */ "./wp-content/themes/mojo-v2/src/js/classes/Menu.js");
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
/* harmony import */ var _classes_IsCentered__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/IsCentered */ "./wp-content/themes/mojo-v2/src/js/classes/IsCentered.js");
/* harmony import */ var _classes_Router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/Router */ "./wp-content/themes/mojo-v2/src/js/classes/Router/index.js");
/* harmony import */ var _classes_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/Footer */ "./wp-content/themes/mojo-v2/src/js/classes/Footer.js");
/* harmony import */ var _classes_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/Header */ "./wp-content/themes/mojo-v2/src/js/classes/Header.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










//import LazyVideos   from './classes/lazyVideos';
var Mojo = /*#__PURE__*/function () {
  function Mojo() {
    _classCallCheck(this, Mojo);
    this.inview = _classes_InView__WEBPACK_IMPORTED_MODULE_5__["default"];
    this.setupElements();
    this.router = new _classes_Router__WEBPACK_IMPORTED_MODULE_7__["default"]();
  }
  return _createClass(Mojo, [{
    key: "setupElements",
    value: function () {
      var _setupElements = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this.currentView = document.querySelector("[data-barba='container']");
              this.cursorEl = document.querySelector('.cursor');
              this.header = new _classes_Header__WEBPACK_IMPORTED_MODULE_9__["default"]();
              this.parts = _classes_Pluton__WEBPACK_IMPORTED_MODULE_0__["default"];
              _context.n = 1;
              return this.parts.setup();
            case 1:
              this.menu = _classes_Menu__WEBPACK_IMPORTED_MODULE_4__["default"].initialize();
              this.footer = new _classes_Footer__WEBPACK_IMPORTED_MODULE_8__["default"]();
              this.cursor = new _classes_Cursor__WEBPACK_IMPORTED_MODULE_2__["default"](this.cursorEl, _classes_cursorOption__WEBPACK_IMPORTED_MODULE_3__["default"]).initialize();
              //this.LazyVideos  = new LazyVideos();
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function setupElements() {
        return _setupElements.apply(this, arguments);
      }
      return setupElements;
    }()
  }]);
}();
window.addEventListener("DOMContentLoaded", function (event) {
  window.document.documentElement.classList.add('js-active');
  this.scroller = new _classes_Scroller__WEBPACK_IMPORTED_MODULE_1__["default"]();
  window.MJ = new Mojo();
});

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/utils/detect.js":
/*!**********************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/utils/detect.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   isMouse: () => (/* binding */ isMouse),
/* harmony export */   isTouchDevice: () => (/* binding */ isTouchDevice)
/* harmony export */ });
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function isMobile() {
  var isMobile = false;
  var mq = window.matchMedia("(max-width: 600px)");
  if (mq.matches) {
    isMobile = true;
  }
  return isMobile;
}
function isFirefox() {
  return /Firefox/i.test(navigator.userAgent);
}
function isMouse() {
  var isMouse = false;
  var mq = window.matchMedia("screen and (any-pointer: fine)");
  if (mq.matches) {
    isMouse = true;
  }
  return isMouse;
}


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/fullblackimage.scss":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/fullblackimage.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/fullimage.scss":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/fullimage.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/imagesslider.scss":
/*!*********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/imagesslider.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/textimage.scss":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/textimage.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/twoimages.scss":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/twoimages.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/main.scss":
/*!******************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/main.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/blocks/textgallery/textgallery","css/blocks/textimage/textimage","css/blocks/quoteimage/quoteimage","css/blocks/twoimages/twoimages","css/main","css/blocks/imagesslider/imagesslider","css/blocks/fullimage/fullimage","css/blocks/fullblackimage/fullblackimage","/js/vendor"], () => (__webpack_exec__("./wp-content/themes/mojo-v2/src/js/main.js"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/main.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/twoimages.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/textimage.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/fullblackimage.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/fullimage.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/imagesslider.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map