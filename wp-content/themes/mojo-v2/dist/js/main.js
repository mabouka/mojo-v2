(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["/js/main"],{

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/destroy.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Cursor/core/destroy.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./wp-content/themes/mojo-v2/src/js/classes/IsTopMedium.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/IsTopMedium.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./wp-content/themes/mojo-v2/src/js/classes/Menu.js":
/*!**********************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/Menu.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
var PlutonClass = /*#__PURE__*/function () {
  function PlutonClass() {
    _classCallCheck(this, PlutonClass);
    this.classes = this.importAll();
    this.instances = {};
  }
  return _createClass(PlutonClass, [{
    key: "clear",
    value: function clear() {
      this.instances = {};
    }
  }, {
    key: "setup",
    value: function setup(root) {
      for (var className in this.classes) {
        this.setupComponent(className, this.classes[className], root);
      }
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var _i = 0, _Object$entries = Object.entries(this.instances); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        value.forEach(function (component) {
          if (typeof component.destroy === 'function') {
            component.destroy();
          }
        });
      }
      ;
    }
  }, {
    key: "setupComponent",
    value: function setupComponent(className, component, root) {
      var _this = this;
      if (!component.selector) return;
      [].forEach.call((root || document).querySelectorAll(component.selector), function (el) {
        if (!_this.instances[className]) _this.instances[className] = [];
        _this.instances[className].push(new component(el));
      });
    }
  }, {
    key: "call",
    value: function call(className, fn, parameters) {
      if (!this.instances[className]) return;
      for (var i = this.instances[className].length - 1; i >= 0; i--) {
        this.instances[className][i][fn](parameters);
      }
    }
  }, {
    key: "importAll",
    value: function importAll() {
      var context = __webpack_require__("./wp-content/themes/mojo-v2/src/js/components sync recursive \\.js$");
      var obj = {};
      context.keys().forEach(function (key) {
        var code = context(key);
        obj[code["default"].selector] = code["default"];
      });
      return obj;
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

"use strict";
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
      _Menu__WEBPACK_IMPORTED_MODULE_5__["default"].update(data);
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.killAll();
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.refresh();
    });
    _barba_core__WEBPACK_IMPORTED_MODULE_0___default().hooks.enter(function (data) {
      data.current.container.remove();
      window.lenis.start();
      window.MJ.cursor.reset();
      window.lenis.resize();
      window.MJ.parts.setup(data.next.container);
      _InView__WEBPACK_IMPORTED_MODULE_2__["default"].addView(data.next.container);
      _IsTop__WEBPACK_IMPORTED_MODULE_4__["default"].addView(data.next.container);
      _IsCentered__WEBPACK_IMPORTED_MODULE_3__["default"].addView(data.next.container);
      document.documentElement.classList.remove('loading');
    });
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./wp-content/themes/mojo-v2/src/js/components sync recursive \\.js$":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/ sync \.js$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ContactForm.js": "./wp-content/themes/mojo-v2/src/js/components/ContactForm.js",
	"./Globe.js": "./wp-content/themes/mojo-v2/src/js/components/Globe.js",
	"./archiveStoriesFilters.js": "./wp-content/themes/mojo-v2/src/js/components/archiveStoriesFilters.js",
	"./caseAccordion.js": "./wp-content/themes/mojo-v2/src/js/components/caseAccordion.js",
	"./caseCard.js": "./wp-content/themes/mojo-v2/src/js/components/caseCard.js",
	"./casesGrid.js": "./wp-content/themes/mojo-v2/src/js/components/casesGrid.js",
	"./casesServices.js": "./wp-content/themes/mojo-v2/src/js/components/casesServices.js",
	"./clientHover.js": "./wp-content/themes/mojo-v2/src/js/components/clientHover.js",
	"./clientIntro.js": "./wp-content/themes/mojo-v2/src/js/components/clientIntro.js",
	"./clientNumbers.js": "./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js",
	"./clientTypology.js": "./wp-content/themes/mojo-v2/src/js/components/clientTypology.js",
	"./commitmentsEarth.js": "./wp-content/themes/mojo-v2/src/js/components/commitmentsEarth.js",
	"./commitmentsFaq.js": "./wp-content/themes/mojo-v2/src/js/components/commitmentsFaq.js",
	"./commitmentsIntro.js": "./wp-content/themes/mojo-v2/src/js/components/commitmentsIntro.js",
	"./cta.js": "./wp-content/themes/mojo-v2/src/js/components/cta.js",
	"./faq.js": "./wp-content/themes/mojo-v2/src/js/components/faq.js",
	"./featuredCases.js": "./wp-content/themes/mojo-v2/src/js/components/featuredCases.js",
	"./homeIntro.js": "./wp-content/themes/mojo-v2/src/js/components/homeIntro.js",
	"./homePurpose.js": "./wp-content/themes/mojo-v2/src/js/components/homePurpose.js",
	"./homeService.js": "./wp-content/themes/mojo-v2/src/js/components/homeService.js",
	"./homeTransformation.js": "./wp-content/themes/mojo-v2/src/js/components/homeTransformation.js",
	"./homeVideo.js": "./wp-content/themes/mojo-v2/src/js/components/homeVideo.js",
	"./imagesslider.js": "./wp-content/themes/mojo-v2/src/js/components/imagesslider.js",
	"./leadDescription.js": "./wp-content/themes/mojo-v2/src/js/components/leadDescription.js",
	"./leadLogoCarrousel.js": "./wp-content/themes/mojo-v2/src/js/components/leadLogoCarrousel.js",
	"./leadTeam.js": "./wp-content/themes/mojo-v2/src/js/components/leadTeam.js",
	"./ourClients.js": "./wp-content/themes/mojo-v2/src/js/components/ourClients.js",
	"./pageClient.js": "./wp-content/themes/mojo-v2/src/js/components/pageClient.js",
	"./sCaseRandom.js": "./wp-content/themes/mojo-v2/src/js/components/sCaseRandom.js",
	"./serviceCard.js": "./wp-content/themes/mojo-v2/src/js/components/serviceCard.js",
	"./serviceGrid.js": "./wp-content/themes/mojo-v2/src/js/components/serviceGrid.js",
	"./teamGrid.js": "./wp-content/themes/mojo-v2/src/js/components/teamGrid.js",
	"./wp-block-details.js": "./wp-content/themes/mojo-v2/src/js/components/wp-block-details.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./wp-content/themes/mojo-v2/src/js/components sync recursive \\.js$";

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/ContactForm.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/ContactForm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contactform)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Contactform = /*#__PURE__*/function () {
  function Contactform(el) {
    var _this = this;
    _classCallCheck(this, Contactform);
    this.el = el;
    this.isLead = this.el.classList.contains('contact--lead');
    this.svg = this.el.querySelector('.contact__svg');
    this.fields = this.el.querySelectorAll(".wpcf7-validates-as-required");
    this.radios = this.el.querySelectorAll("input[type='radio']");
    this.fileLabel = this.el.querySelector('.field--file label');
    this.fileInput = this.el.querySelector('.field--file input');
    this.form = this.el.querySelector(".wpcf7-form");
    /*
    if(this.form && this.isLead){
        let url = this.form.action;
            url = url.includes("#") ? url.substring(0, url.indexOf("#")) : url;
            url += "#contactForm";
        this.form.action = url
    }
    */

    if (this.form && this.isLead && this.form.classList.contains('sent')) {
      setTimeout(function () {
        window.lenis.scrollTo(_this.el, {
          duration: 0
        });
      }, 200);
    }
    this.captchaFields = this.el.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');
    this.form.removeAttribute("novalidate");
    var filesEl = document.createElement("div");
    filesEl.classList.add('files');
    var container = this.el.querySelector('.field--file .field__label');
    container.appendChild(filesEl);
    this.fields.forEach(function (field) {
      field.setAttribute("required", "required");
    });
    this.radios.forEach(function (radio) {
      radio.setAttribute("required", "required");
    });
    this.main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      scrollTrigger: {
        trigger: this.el,
        start: "top top",
        end: "bottom",
        scrub: true
      }
    }).to(this.svg, {
      y: function y() {
        return 700;
      },
      ease: 'none',
      duration: 2
    }, 0);
    this.setEvents();
  }
  return _createClass(Contactform, [{
    key: "showFiles",
    value: function showFiles(files) {
      var _this2 = this;
      var el = this.el.querySelector('.files');
      el.innerHTML = '';
      Array.from(files).forEach(function (file, index) {
        var item = document.createElement("div");
        item.classList.add('files__item');
        item.innerText = file.name;
        var removeLink = document.createElement("a");
        removeLink.classList.add('files__itemRemove');
        removeLink.innerText = 'Remove file';
        removeLink.setAttribute("href", "#");
        item.appendChild(removeLink);
        removeLink.addEventListener('click', function (e) {
          _this2.e_removeFile(e, index);
        });
        el.appendChild(item);
      });
    }
  }, {
    key: "removeFileFromFileList",
    value: function removeFileFromFileList(input, index) {
      var dt = new DataTransfer();
      var files = input.files;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (index !== i) dt.items.add(file); // here you exclude the file. thus removing it.
      }
      input.files = dt.files; // Assign the updates list

      this.showFiles(input.files);
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this._boundSendForm = this.e_sendForm.bind(this);
      this._boundSubmit = this.e_submit.bind(this);
      this._boundFileChange = this.e_fileChange.bind(this);
      window.removeEventListener('sendForm', this._boundSendForm);
      window.addEventListener('sendForm', this._boundSendForm);
      this.form.addEventListener('submit', this._boundSubmit);
      this.fileInput.addEventListener('change', this._boundFileChange);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('sendForm', this._boundSendForm);
      this.form.removeEventListener('submit', this._boundSubmit);
      this.fileInput.removeEventListener('change', this._boundFileChange);
    }
  }, {
    key: "e_removeFile",
    value: function e_removeFile(e, index) {
      e.preventDefault();
      this.removeFileFromFileList(this.fileInput, index);
    }
  }, {
    key: "e_fileChange",
    value: function e_fileChange(e) {
      var files = this.fileInput.files;
      this.showFiles(files);
    }
  }, {
    key: "e_sendForm",
    value: function e_sendForm(e) {
      if (this._submitting) return;
      if (e.detail.token) {
        var token = e.detail.token;
        Array.from(this.captchaFields).forEach(function (field) {
          field.setAttribute("value", token);
        });
        this.form.submit();
      }
    }
  }, {
    key: "e_submit",
    value: function e_submit(e) {
      var _this3 = this;
      e.preventDefault();
      if (this._submitting) return;
      this._submitting = true;
      var submit = this.form.querySelector('[type="submit"]');
      if (submit) submit.disabled = true;
      grecaptcha.ready(function () {
        grecaptcha.execute(window.recaptchaKey, {
          action: 'submit'
        }).then(function (token) {
          Array.from(_this3.captchaFields).forEach(function (field) {
            field.setAttribute("value", token);
          });
          _this3.form.submit();
        })["catch"](function () {
          _this3._submitting = false;
          if (submit) submit.disabled = false;
        });
      });
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.contact';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/Globe.js":
/*!**************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/Globe.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Globe)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// FIRST APPLE-LIKE EFFECT:
// Sync video with scroll

// ffmpeg -i mojo_globe_01.mov -qscale:v 1  -vf "fps=25,scale=1285:-1" images/globe-1285-%04d.jpg
// `for file in images/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`


var Globe = /*#__PURE__*/function () {
  function Globe(el) {
    var _this = this;
    _classCallCheck(this, Globe);
    this.el = el;
    this.baseUrl = el.dataset.baseUrl;
    this.inside = el.querySelector('.globe__inside');
    this.right = el.querySelector('.globe__right');
    this.canvas = el.querySelector('.globe__anim');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = 1285;
    this.canvas.height = 952;
    this.currentFrame = -1;
    this.firstFrame = 53;
    this.frameCount = 250;
    this.fileType = 'jpg';
    this.anim = {
      frame: 0
    };
    this.check_webp_feature('lossy', function (feature, isSupported) {
      if (isSupported) _this.fileType = 'webp';
      _this.initialize();
    });
  }
  return _createClass(Globe, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;
      this.images = this.getImages();
      this.images[this.anim.frame].image.onload = this.render.bind(this); // render first image

      this.mm = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].matchMedia();
      this.mm.add("(min-width: 601px)", function () {
        _this2.animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(_this2.anim, {
          frame: _this2.images.length - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: _this2.el,
            start: "top-=" + window.innerHeight / 2,
            end: "bottom-=" + window.innerHeight / 8 * 5,
            scrub: true,
            id: "globe-canvas"
            //markers: true,
          },
          onUpdate: function onUpdate(self) {
            _this2.render();
          } // use animation onUpdate instead of scrollTrigger's onUpdate
        });
      });
      this.mm.add("(max-width: 600px)", function () {
        _this2.animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(_this2.anim, {
          frame: _this2.images.length - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: _this2.el,
            start: "top+=" + 200,
            end: "top+=" + window.innerHeight,
            scrub: true,
            id: "globe-canvas"
            //markers: true,
          },
          onUpdate: function onUpdate(self) {
            _this2.render();
          } // use animation onUpdate instead of scrollTrigger's onUpdate
        });
      });
      this.mm.add("(min-width: 601px)", function () {
        var height = 660;
        height = _this2.inside.offsetHeight - _this2.right.offsetHeight;
        _this2.main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
          scrollTrigger: {
            trigger: _this2.el,
            start: "top-=200",
            end: "bottom-=850",
            scrub: true,
            //markers: true,
            id: "globe",
            ease: "none"
          }
        }).to(_this2.right, {
          y: height,
          ease: "none",
          duration: 1
        }, 0);
      });
    }
  }, {
    key: "currentFrame",
    value: function currentFrame(i) {
      i = i.toString().padStart(4, '0');
      return "".concat(this.baseUrl, "globe-1285-").concat(i, ".").concat(this.fileType);
    }
  }, {
    key: "getImages",
    value: function getImages() {
      var _this3 = this;
      var images = [];
      var _loop = function _loop() {
        var item = {};
        item.frameIndex = i, item.src = _this3.getImageUrl(i);
        item.loaded = false;
        item.image = _this3.preloadImage(item.src);
        item.image.onload = function () {
          item.loaded = true;
        };
        setTimeout(function () {
          item.loaded ? _this3.preloadImage(item.src) : null;
        }, 1000);
        setTimeout(function () {
          item.loaded ? _this3.preloadImage(item.src) : null;
        }, 1500);
        images.push(item);
      };
      for (var i = this.firstFrame; i <= this.frameCount; i++) {
        _loop();
      }
      return images;
    }
  }, {
    key: "getImageUrl",
    value: function getImageUrl(index) {
      var paddedIndex = index.toString().padStart(4, '0');
      var url = "".concat(this.baseUrl, "globe-1285-").concat(paddedIndex, ".").concat(this.fileType);
      return url;
    }
  }, {
    key: "preloadImage",
    value: function preloadImage(src) {
      var img = new Image();
      img.src = src;
      return img;
    }

    // check_webp_feature:
    //   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
    //   'callback(feature, isSupported)' will be passed back the detection result (in an asynchronous way!)
  }, {
    key: "check_webp_feature",
    value: function check_webp_feature(feature, callback) {
      var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
      };
      var img = new Image();
      img.onload = function () {
        var result = img.width > 0 && img.height > 0;
        callback(feature, result);
      };
      img.onerror = function () {
        callback(feature, false);
      };
      img.src = "data:image/webp;base64," + kTestImages[feature];
    }
  }, {
    key: "render",
    value: function render(e) {
      try {
        if (this.anim.frame !== this.currentFrame) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.context.drawImage(this.images[this.anim.frame].image, 0, 0);
          this.currentFrame = this.anim.frame;
        }
      } catch (error) {
        console.log(this.images);
        console.error(error);
        console.log('imageError', this.anim.frame);
      }
    }

    /*
     * Events
     */
  }, {
    key: "e_resize",
    value: function e_resize() {
      if (this.main) {
        this.main.scrollTrigger.refresh();
      }
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.globe';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/archiveStoriesFilters.js":
/*!******************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/archiveStoriesFilters.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ archiveStoriesFilters)
/* harmony export */ });
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var archiveStoriesFilters = /*#__PURE__*/function () {
  function archiveStoriesFilters(el) {
    _classCallCheck(this, archiveStoriesFilters);
    this.select = el.querySelector('.archiveStories__select');
    this.setEvents();
  }
  return _createClass(archiveStoriesFilters, [{
    key: "setEvents",
    value: function setEvents() {
      this.select.addEventListener('change', function (e) {
        _barba_core__WEBPACK_IMPORTED_MODULE_0___default().go(e.target.value);
      });
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.archiveStories__filtersSelect';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/caseAccordion.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/caseAccordion.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientTypology)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ClientTypology = /*#__PURE__*/function () {
  function ClientTypology(el) {
    _classCallCheck(this, ClientTypology);
    this.el = el;
    this.videoItems = this.getVideoItems();
    this.images = this.el.querySelectorAll('.caseAccordion__image');
    this.mouse = {
      x: 0,
      y: 0,
      moved: false
    };
    this.setEvents();
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.ticker.add(this.doOneFrame.bind(this));
  }
  return _createClass(ClientTypology, [{
    key: "getVideoItems",
    value: function getVideoItems() {
      var elements = this.el.querySelectorAll('.caseAccordion__item--video');
      var items = [];
      Array.from(elements).forEach(function (element) {
        var item = {};
        item.el = element;
        item.video = item.el.querySelector('video');
        items.push(item);
      });
      return items;
    }
  }, {
    key: "doOneFrame",
    value: function doOneFrame() {
      if (!this.mouse.moved) return;
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(this.images, {
        duration: "1",
        ease: "power1.out",
        y: this.mouse.y - window.innerHeight / 2
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;
      this.el.addEventListener('mousemove', this.e_mousemove.bind(this));
      this.videoItems.forEach(function (item) {
        item.el.addEventListener('mouseenter', function (e) {
          _this.e_mouseenter(e, item);
        });
        item.el.addEventListener('mouseleave', function (e) {
          _this.e_mouseleave(e, item);
        });
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mousemove",
    value: function e_mousemove(e) {
      this.mouse.moved = true;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }
  }, {
    key: "e_mouseenter",
    value: function e_mouseenter(e, item) {
      item.video.currentTime = 0;
      item.video.play();
    }
  }, {
    key: "e_mouseleave",
    value: function e_mouseleave(e, item) {
      item.video.pause();
      item.video.currentTime = 0;
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.caseAccordion';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/caseCard.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/caseCard.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/casesGrid.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/casesGrid.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ casesGrid)
/* harmony export */ });
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/wait */ "./wp-content/themes/mojo-v2/src/js/utils/wait.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var casesGrid = /*#__PURE__*/function () {
  function casesGrid(el) {
    var _this = this;
    _classCallCheck(this, casesGrid);
    this.el = el;
    this.filters = this.getFilters();
    this.form = this.el.querySelector('.casesGrid__form');
    this.cases = this.el.querySelectorAll('.caseCard');
    var fadeTransition = document.querySelector('.fadeTransitionEntered');
    if (fadeTransition) {
      Array.from(this.cases).forEach(function (item) {
        _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(item);
      });
    } else {
      (0,_utils_wait__WEBPACK_IMPORTED_MODULE_2__["default"])(400).then(function () {
        Array.from(_this.cases).forEach(function (item) {
          _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(item);
        });
      });
      (0,_utils_wait__WEBPACK_IMPORTED_MODULE_2__["default"])(800).then(function () {
        _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(_this.form);
      });
    }
    this.setEvents();
  }
  return _createClass(casesGrid, [{
    key: "getFilters",
    value: function getFilters() {
      var _this2 = this;
      var elements = this.el.querySelectorAll('.casesGrid__filter');
      var filters = [];
      Array.from(elements).forEach(function (element) {
        var filter = {};
        filter.el = element;
        filter.label = element.querySelector('.casesGrid__filterLabel');
        filter.select = element.querySelector('.casesGrid__filterSelect');
        filter.ddLinks = _this2.getDDLinks(filter);
        filter.isShow = false;
        filters.push(filter);
      });
      return filters;
    }
  }, {
    key: "getDDLinks",
    value: function getDDLinks(filter) {
      var links = [];
      var elements = filter.el.querySelectorAll('.casesGrid__dropDownLink');
      elements.forEach(function (el) {
        var link = {};
        link.isActive = false;
        link.el = el;
        link.slug = el.dataset.slug;
        link.filter = filter;
        if (link.slug === filter.select.value) {
          link.el.classList.add('casesGrid__dropDownLink--active');
        }
        links.push(link);
      });
      return links;
    }
  }, {
    key: "getFormUrl",
    value: function getFormUrl() {
      var params = new URLSearchParams(new FormData(this.form)).toString();
      var actionUrl = this.form.getAttribute('action');
      return actionUrl + '?' + params;
    }
  }, {
    key: "refreshPage",
    value: function refreshPage() {
      _barba_core__WEBPACK_IMPORTED_MODULE_0___default().go(this.getFormUrl());
    }
  }, {
    key: "toggleLink",
    value: function toggleLink(link) {
      if (link.isActive) this.desactiveLink(link);else this.activeLink(link);
      this.refreshPage();
    }
  }, {
    key: "activeLink",
    value: function activeLink(link) {
      if (link.isActive) return;
      this.desactiveAllLink(link.filter);
      link.isActive = true;
      link.el.classList.add('casesGrid__dropDownLink--active');
      link.filter.select.value = link.slug;
    }
  }, {
    key: "desactiveLink",
    value: function desactiveLink(link) {
      if (!link.isActive) return;
      link.isActive = false;
      link.el.classList.remove('casesGrid__dropDownLink--active');
      link.filter.select.value = '';
    }
  }, {
    key: "desactiveAllLink",
    value: function desactiveAllLink(filter) {
      var _this3 = this;
      filter.ddLinks.forEach(function (link) {
        if (link.isActive) _this3.desactiveLink(link, filter);
      });
    }

    /**
     * Events
     */
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this4 = this;
      this.filters.forEach(function (filter) {
        filter.label.addEventListener('click', function (e) {
          _this4.e_clickLabel(e, filter);
        });
        filter.ddLinks.forEach(function (link) {
          link.el.addEventListener('click', function (e) {
            _this4.e_clickDDLink(e, link, filter);
          });
        });
        filter.select.addEventListener('change', _this4.e_selectChange.bind(_this4));
      });
      this.form.addEventListener('submit', this.e_submit.bind(this));
      this.form.addEventListener('inView', this.e_inviewForm.bind(this));
    }
  }, {
    key: "e_clickLabel",
    value: function e_clickLabel(e, filter) {}
  }, {
    key: "e_clickDDLink",
    value: function e_clickDDLink(e, link, filter) {
      e.preventDefault();
      this.toggleLink(link, filter);
    }
  }, {
    key: "e_selectChange",
    value: function e_selectChange(e) {
      //this.form.submit();
      this.refreshPage();
    }
  }, {
    key: "e_submit",
    value: function e_submit(e) {
      e.preventDefault();
      this.refreshPage();
    }
  }, {
    key: "e_inviewForm",
    value: function e_inviewForm(e) {
      this.form.classList.add('casesGrid__form--inview');
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.casesGrid';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/casesServices.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/casesServices.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ casesServices)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var casesServices = /*#__PURE__*/function () {
  function casesServices(el) {
    _classCallCheck(this, casesServices);
    this.el = el;
    var mq = window.matchMedia("(max-width: 600px)");
    if (mq.matches) {
      this.container = this.el.querySelector('.casesServices__gridContainer');
      this.grid = this.el.querySelector('.casesServices__grid');
      this.allCard = this.el.querySelectorAll('.serviceCard');
      this.container.classList.add('swiper');
      this.grid.classList.add('swiper-wrapper');
      this.allCard.forEach(function (card) {
        card.classList.add('swiper-slide');
      });
      this.slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](this.container, {
        direction: 'horizontal',
        loop: true,
        autoHeight: false,
        slidesPerView: 'auto',
        spaceBetween: 35,
        grabCursor: true
      });
    }
  }
  return _createClass(casesServices, null, [{
    key: "selector",
    get: function get() {
      return '.casesServices';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/clientHover.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/clientHover.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OurClients)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OurClients = /*#__PURE__*/function () {
  function OurClients(el) {
    _classCallCheck(this, OurClients);
    this.el = el;
    this.container = this.el.querySelector('.clientHover__clients');
    this.clients = this.getClients();
    this.current = 0;
    this.timer = this.getTimer();
    this.active(this.clients[this.current]);
    this.setEvents();
  }
  return _createClass(OurClients, [{
    key: "getTimer",
    value: function getTimer() {
      var _this = this;
      return setInterval(function () {
        _this.current++;
        if (_this.current >= _this.clients.length) {
          _this.current = 0;
        }
        _this.active(_this.clients[_this.current]);
      }, 2000);
    }
  }, {
    key: "getClients",
    value: function getClients() {
      var _this2 = this;
      var els = this.el.querySelectorAll('.client');
      var clients = [];
      els.forEach(function (el, index) {
        var client = {};
        client.index = index;
        client.isActive = false;
        client.key = el.dataset.key;
        client.image = _this2.el.querySelector('.clientHover__image[data-key="' + client.key + '"]');
        client.el = el;
        clients.push(client);
      });
      return clients;
    }
  }, {
    key: "active",
    value: function active(client) {
      if (client.isActive) return;
      this.desactiveAll();
      this.current = client.index;
      client.isActive = true;
      client.image.classList.add('clientHover__image--active');
      client.el.classList.add('client--active');
    }
  }, {
    key: "desactive",
    value: function desactive(client) {
      if (!client.isActive) return;
      client.isActive = false;
      client.image.classList.remove('clientHover__image--active');
      client.el.classList.remove('client--active');
    }
  }, {
    key: "desactiveAll",
    value: function desactiveAll() {
      var _this3 = this;
      this.clients.forEach(function (client) {
        _this3.desactive(client);
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this4 = this;
      this.container.addEventListener('mouseenter', function (e) {
        clearInterval(_this4.timer);
      });
      this.clients.forEach(function (client) {
        client.el.addEventListener('mouseenter', function (e) {
          clearInterval(_this4.timer);
          _this4.e_enter(e, client);
        });
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_enter",
    value: function e_enter(e, client) {
      this.active(client);
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.clientHover';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/clientIntro.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/clientIntro.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIntro)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
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


var ClientIntro = /*#__PURE__*/function () {
  function ClientIntro(el) {
    _classCallCheck(this, ClientIntro);
    this.el = el;
    //part 1
    this.circleSection = this.el.querySelector('.clientIntro__circles');
    this.circle1 = this.el.querySelector('#circle1');
    this.circle2 = this.el.querySelector('#circle2');
    this.introText = this.el.querySelectorAll('.clientIntro__svgTitle');

    // part 2
    this.ray = this.el.querySelector('.clientIntro__secondBg');
    this.text = this.el.querySelector('.clientIntro__secondText');
    this.text2 = this.el.querySelector('.clientIntro__secondText2');
    this.launchScroll();

    /*
    this.promise = new Promise((resolve, reject) => {
         this.prepare().then(() => {
            this.doIntro().then(()=>{
                this.launchScroll().then(() => {
                    resolve(this);                   
                })
            })
        })
    });*/
  }
  return _createClass(ClientIntro, [{
    key: "prepare",
    value: function () {
      var _prepare = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              window.lenis.stop();
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle1, {
                x: -(1440 + 550) / 2
              });
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle2, {
                x: (1440 + 550) / 2
              });
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.introText, {
                autoAlpha: 0
              });
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function prepare() {
        return _prepare.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "doIntro",
    value: function doIntro() {
      var _this = this;
      this.intro = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
        onComplete: function onComplete() {
          window.lenis.start();
        }
      });
      Array.from(this.introText).forEach(function (text) {
        _this.intro.to(text, {
          autoAlpha: 1,
          //ease: "expoScale(0.5,7,none)",
          duration: 0.5
        }, 0);
      });
      this.intro.to(this.circle1, {
        x: -1440 / 2,
        //ease: "expoScale(0.5,7,none)",
        duration: 0.5
      }, 0.5);
      this.intro.to(this.circle2, {
        x: 1440 / 2,
        //ease: "expoScale(0.5,7,none)",
        duration: 0.5
      }, 0.5);
      return this.intro;
    }
  }, {
    key: "launchScroll",
    value: function () {
      var _launchScroll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var height;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              height = window.innerHeight * 2;
              if (window.innerWidth <= 600) {
                height = window.innerHeight;
              }
              this.main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
                scrollTrigger: {
                  trigger: this.el,
                  start: 'top',
                  end: '+=' + height,
                  // +=600
                  scrub: true,
                  pin: true,
                  //markers: true,
                  id: "Intro",
                  onUpdate: function onUpdate() {
                    // this.circleSection.style.maxHeight = window.innerHeight + 'px';
                  }
                  //normalizeScroll: true
                  //invalidateOnRefresh: true,
                }
              }).to(this.circle1, {
                duration: 1,
                ease: "power1.out",
                x: 0
              }, 0).to(this.circle2, {
                duration: 1,
                ease: "power1.out",
                x: 0
              }, 0).to(this.circleSection, {
                duration: 2,
                ease: "power2.out",
                maxHeight: 0,
                overwrite: true
              }, 2).from(this.ray, {
                duration: 1.8,
                ease: "expoScale(0.5,7,none)",
                scale: 0.05
              }, 2.2);
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function launchScroll() {
        return _launchScroll.apply(this, arguments);
      }
      return launchScroll;
    }()
    /*
     * Events
     */
  }, {
    key: "e_resize",
    value: function e_resize() {
      if (this.main) {
        this.main.scrollTrigger.refresh();
        this.main.scrollTrigger.update();
      }
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.clientIntro';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientNumbers)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ClientNumbers = /*#__PURE__*/function () {
  function ClientNumbers(el) {
    _classCallCheck(this, ClientNumbers);
    this.el = el;
    this.svg = this.el.querySelector('.clientNumbers__svg');
    this.moon = this.el.querySelector('.clientNumbers__moon');
    this.starsAnimation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      scrollTrigger: {
        trigger: this.el,
        start: "top-=50%",
        end: "bottom",
        scrub: true,
        id: "numbers",
        invalidateOnRefresh: true
      }
    }).to(this.svg, {
      y: function y() {
        return '75vh';
      },
      ease: 'none',
      duration: 2
    }, 0);
  }

  /*
   * Events
   */
  return _createClass(ClientNumbers, [{
    key: "e_resize",
    value: function e_resize(e) {
      this.starsAnimation.scrollTrigger.refresh();
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.clientNumbers';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/clientTypology.js":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/clientTypology.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientTypology)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _classes_IsCentered__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/IsCentered */ "./wp-content/themes/mojo-v2/src/js/classes/IsCentered.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ClientTypology = /*#__PURE__*/function () {
  function ClientTypology(el) {
    _classCallCheck(this, ClientTypology);
    this.el = el;
    this.items = this.getItems();
    this.images = this.el.querySelectorAll('.clientTypology__image');
    this.mouse = {
      x: 0,
      y: 0,
      moved: false
    };
    this.setEvents();
    var mq = window.matchMedia("(max-width: 600px)");
    if (!mq.matches) {
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.ticker.add(this.doOneFrame.bind(this));
    }
  }
  return _createClass(ClientTypology, [{
    key: "getItems",
    value: function getItems() {
      var elements = this.el.querySelectorAll('.clientTypology__item');
      var items = [];
      Array.from(elements).forEach(function (element) {
        var item = {};
        item.el = element;
        item.isVideo = element.classList.contains('clientTypology__item--video');
        if (item.isVideo) item.video = item.el.querySelector('video');
        if (true) {
          _classes_IsCentered__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(item.el);
        }
        items.push(item);
      });
      return items;
    }
  }, {
    key: "doOneFrame",
    value: function doOneFrame() {
      if (!this.mouse.moved) return;
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(this.images, {
        duration: "1",
        ease: "power1.out",
        y: this.mouse.y - window.innerHeight / 2
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;
      var mq = window.matchMedia("(max-width: 600px)");
      if (!mq.matches) {
        this.el.addEventListener('mousemove', this.e_mousemove.bind(this));
      }
      this.items.forEach(function (item) {
        item.el.addEventListener('inCenter', function (e) {
          _this.e_inCenter(e, item);
        });
        item.el.addEventListener('outCenter', function (e) {
          _this.e_outCenter(e, item);
        });
        if (item.isVideo) {
          item.el.addEventListener('mouseenter', function (e) {
            _this.e_mouseenter(e, item);
          });
          item.el.addEventListener('mouseleave', function (e) {
            _this.e_mouseleave(e, item);
          });
        }
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mousemove",
    value: function e_mousemove(e) {
      this.mouse.moved = true;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }
  }, {
    key: "e_inCenter",
    value: function e_inCenter(e, item) {
      if (item.isVideo) {
        item.video.currentTime = 0;
        item.video.play();
      }
      item.el.classList.add('clientTypology__item--active');
    }
  }, {
    key: "e_outCenter",
    value: function e_outCenter(e, item) {
      if (item.isVideo) {
        item.video.pause();
        item.video.currentTime = 0;
      }
      item.el.classList.remove('clientTypology__item--active');
    }
  }, {
    key: "e_mouseenter",
    value: function e_mouseenter(e, item) {
      item.video.currentTime = 0;
      item.video.play();
    }
  }, {
    key: "e_mouseleave",
    value: function e_mouseleave(e, item) {
      item.video.pause();
      item.video.currentTime = 0;
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.clientTypology';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/commitmentsEarth.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/commitmentsEarth.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommitmentsEarth)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var CommitmentsEarth = /*#__PURE__*/function () {
  function CommitmentsEarth(el) {
    _classCallCheck(this, CommitmentsEarth);
    this.el = el;
    this.svg = this.el.querySelector('.commitmentsEarth__svg');
    var main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      scrollTrigger: {
        trigger: this.el,
        start: 'top-=600',
        end: "bottom",
        scrub: true
      }
    }).to(this.svg, {
      y: 450,
      ease: 'none',
      duration: 2
    }, 0);
  }
  return _createClass(CommitmentsEarth, null, [{
    key: "selector",
    get: function get() {
      return '.commitmentsEarth';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/commitmentsFaq.js":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/commitmentsFaq.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommitmentsFaq)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CommitmentsFaq = /*#__PURE__*/function () {
  function CommitmentsFaq(el) {
    _classCallCheck(this, CommitmentsFaq);
    this.el = el;
    this.items = this.getItems();
    this.setEvents();
    this.active(this.items[0]);
  }
  return _createClass(CommitmentsFaq, [{
    key: "getItems",
    value: function getItems() {
      var items = [];
      var els = this.el.querySelectorAll('.commitmentsFaq__item');
      Array.from(els).forEach(function (element) {
        var item = {};
        item.el = element;
        item.title = element.querySelector('.commitmentsFaq__itemTitle');
        item.text = element.querySelector('.commitmentsFaq__itemText');
        item.wrapper = element.querySelector('.commitmentsFaq__itemWrapper');
        item.isActive = false;
        items.push(item);
      });
      return items;
    }
  }, {
    key: "toggle",
    value: function toggle(item) {
      if (item.isActive) this.desactive(item);else this.active(item);
    }
  }, {
    key: "active",
    value: function active(item) {
      if (item.isActive) return;
      this.desactiveAll();
      item.el.classList.add('commitmentsFaq__item--active');
      var textHeight = item.text.offsetHeight;
      item.wrapper.style.maxHeight = textHeight + 'px';
      item.isActive = true;
    }
  }, {
    key: "desactive",
    value: function desactive(item) {
      if (!item.isActive) return;
      item.el.classList.remove('commitmentsFaq__item--active');
      item.wrapper.style.maxHeight = '';
      item.isActive = false;
    }
  }, {
    key: "desactiveAll",
    value: function desactiveAll() {
      var _this = this;
      this.items.forEach(function (item) {
        _this.desactive(item);
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;
      this.items.forEach(function (item, index) {
        item.el.addEventListener('click', function (e) {
          _this2.e_click(e, item, index);
        });
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_click",
    value: function e_click(e, item, index) {
      e.preventDefault();
      this.toggle(item);
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.commitmentsFaq';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/commitmentsIntro.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/commitmentsIntro.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ commitmentsIntro)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var commitmentsIntro = /*#__PURE__*/function () {
  function commitmentsIntro(el) {
    _classCallCheck(this, commitmentsIntro);
    this.el = el;
    this.svg = this.el.querySelector('.commitmentsIntro__svg');
    this.path = this.svg.querySelector('#path');
    this.circle = this.svg.querySelector('#circle');
    this.content = this.el.querySelector('.commitmentsIntro__content');
    this.mm = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].matchMedia();
    this.prepare();
    this.launchIntro();
  }
  return _createClass(commitmentsIntro, [{
    key: "prepare",
    value: function prepare() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.path, {
        y: '60%',
        autoAlpha: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle, {
        y: '60%',
        autoAlpha: 0
      });
    }
  }, {
    key: "launchIntro",
    value: function launchIntro() {
      var _this = this;
      this.intro = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
        onComplete: function onComplete() {
          _this.launchScroll();
        }
      });
      this.intro.to(this.circle, {
        y: 0,
        duration: 0.9,
        autoAlpha: 1,
        ease: "power3.out"
      }, .5);
      this.intro.to(this.path, {
        y: 0,
        duration: 1.2,
        autoAlpha: 1,
        ease: "power3.out"
      }, .5);
    }
  }, {
    key: "launchScroll",
    value: function launchScroll() {
      var _this2 = this;
      this.scroll = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
        scrollTrigger: {
          trigger: this.el,
          start: 'top top',
          end: "+=" + 800,
          scrub: true
        }
      });
      this.scroll.to(this.path, {
        y: -130,
        duration: 2
      }, 0);
      this.mm.add("(max-width: 600px)", function () {
        _this2.scrollShape = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
          scrollTrigger: {
            trigger: _this2.el,
            start: 'top top',
            end: "+=" + 500,
            scrub: true
          }
        });
        _this2.scrollShape.to(_this2.svg, {
          y: -300,
          duration: 2
        }, 0);
      });
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.commitmentsIntro';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/cta.js":
/*!************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/cta.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeadDescription)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LeadDescription = /*#__PURE__*/function () {
  function LeadDescription(el) {
    _classCallCheck(this, LeadDescription);
    this.el = el;
    this.link = this.el.querySelector('.homeService__link');
    this.addEvents();
  }
  return _createClass(LeadDescription, [{
    key: "addEvents",
    value: function addEvents() {
      var _this = this;
      if (this.link) {
        this.link.addEventListener('click', function (e) {
          _this.e_click(e);
        });
      }
    }
  }, {
    key: "e_click",
    value: function e_click(e) {
      e.preventDefault();
      var contactForm = document.getElementById('contactForm');
      if (contactForm) {
        window.lenis.scrollTo(contactForm, {
          duration: 1.5
        });
      }
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.homeService--lead';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/faq.js":
/*!************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/faq.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Faq)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Faq = /*#__PURE__*/function () {
  function Faq(el) {
    _classCallCheck(this, Faq);
    this.el = el;
    this.links = this.el.querySelectorAll('.faq__navLink');
    this.addEvents();
  }
  return _createClass(Faq, [{
    key: "addEvents",
    value: function addEvents() {
      var _this = this;
      this.links.forEach(function (link) {
        link.addEventListener('click', function (e) {
          _this.e_click(e, link);
        });
      });
    }
  }, {
    key: "e_click",
    value: function e_click(e, link) {
      e.preventDefault();
      var targetId = link.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.lenis.scrollTo(targetElement, {
          duration: 1
        });
      }
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.faq';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/featuredCases.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/featuredCases.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ featuredCases)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var featuredCases = /*#__PURE__*/function () {
  function featuredCases(el) {
    _classCallCheck(this, featuredCases);
    this.el = el;
    this.gallery = this.el.querySelector('.featuredCases__gallery');
    this.videos = this.getVideos();
    this.setEvents();
  }
  return _createClass(featuredCases, [{
    key: "getVideos",
    value: function getVideos() {
      var _this = this;
      var videos = [];
      var links = this.el.querySelectorAll('.featuredCases__caseLink, .featuredCases__galleryItem');
      Array.from(links).forEach(function (link) {
        var el = {};
        el.link = link;
        el.target = link.dataset.hoverTarget;
        el.videoContainer = _this.el.querySelector(el.target);
        el.video = el.videoContainer.querySelector("video");
        videos.push(el);
      });
      return videos;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;
      this.videos.forEach(function (video) {
        video.link.addEventListener('mouseover', function (e) {
          _this2.e_mouseEnter(e, video);
        });
        video.link.addEventListener('mouseleave', function (e) {
          _this2.e_mouseLeave(e, video);
        });
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mouseEnter",
    value: function e_mouseEnter(e, video) {
      if (video.video) video.video.currentTime = 0;
      video.videoContainer.classList.add('featuredCases__video--active');
      video.link.classList.add('featuredCases__caseLink--active');
      this.gallery.classList.add('featuredCases__gallery--hovered');
      if (video.video) video.video.play();
    }
  }, {
    key: "e_mouseLeave",
    value: function e_mouseLeave(e, video) {
      video.videoContainer.classList.remove('featuredCases__video--active');
      video.link.classList.remove('featuredCases__caseLink--active');
      this.gallery.classList.remove('featuredCases__gallery--hovered');
      if (video.video) video.video.pause();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.featuredCases';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/homeIntro.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/homeIntro.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeIntro)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var HomeIntro = /*#__PURE__*/function () {
  function HomeIntro(el) {
    _classCallCheck(this, HomeIntro);
    this.el = el;
    this.body = document.querySelector('body');
    this.header = document.querySelector('.header');
    this.homeVideo = document.querySelector('.homeVideo');
    this.stars = document.querySelector('.homeIntro__stars');

    //shapes
    this.poly = this.el.querySelector('#poly');
    this.moon = this.el.querySelector('#moon');
    this.setEvents();
    if (window.homeAnimationDone === undefined) {
      this.preparePage();
    } else {
      this.launchScroll();
      _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(this.homeVideo);
      _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(this.header);
      this.el.classList.add('homeIntro--inview');
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(this.moon, {
        autoAlpha: 1,
        scale: 1,
        x: 0,
        rotate: 0,
        duration: 1,
        ease: "power3.out"
      }, 0);
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(this.poly, {
        x: 0,
        rotate: 0,
        duration: 1.2,
        ease: "power3.out"
      }, 0);
    }
  }
  return _createClass(HomeIntro, [{
    key: "preparePage",
    value: function preparePage() {
      window.lenis.stop();
      this.body.classList.add('loading');
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(this.moon, {
        scale: 0,
        x: '120vw',
        autoAlpha: 0,
        transformOrigin: '50% 50%'
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(this.stars, {
        autoAlpha: 0,
        scale: 0.8,
        transformOrigin: '50% 0%'
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(this.poly, {
        x: '120vw',
        transformOrigin: '60% 60%'
      });
      _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(this.el); // call Appearing animation
    }
  }, {
    key: "doAnimation",
    value: function doAnimation() {
      var _this = this;
      var main = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({});
      main.to(this.moon, {
        autoAlpha: 1,
        scale: 1,
        x: 0,
        rotate: 0,
        duration: 1,
        ease: "power3.out"
      }, 1);
      main.add(function () {
        _this.el.classList.add('homeIntro--inview');
      }, 0.2);
      main.to(this.poly, {
        x: 0,
        rotate: 0,
        duration: 1.2,
        ease: "power3.out"
      }, 1.1);
      main.to(this.stars, {
        autoAlpha: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out"
      }, 0);
      main.eventCallback("onComplete", function () {
        _this.body.classList.remove('loading');
        window.lenis.start();
        _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(_this.homeVideo);
        _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(_this.header);
        _this.launchScroll();
      });
      window.homeAnimationDone = true;
    }
  }, {
    key: "launchScroll",
    value: function launchScroll() {
      this.main = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
        scrollTrigger: {
          trigger: this.el,
          start: '+=1',
          scrub: true,
          //markers: true,
          id: "scroll"
        }
      }).to(this.poly, {
        duration: 1,
        y: -250
      }, 0).to(this.moon, {
        duration: 1,
        y: -165
      }, 0).to(this.stars, {
        duration: 1,
        y: -75
      }, 0);
    }
  }, {
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
      this.doAnimation();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.homeIntro';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/homePurpose.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/homePurpose.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePurpose)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detect */ "./wp-content/themes/mojo-v2/src/js/utils/detect.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var HomePurpose = /*#__PURE__*/function () {
  function HomePurpose(el) {
    _classCallCheck(this, HomePurpose);
    this.el = el;
    this.body = document.querySelector('body');
    this.svg = this.el.querySelector('#purposeSvg');
    this.svgWrapper = this.el.querySelector('.homePurpose__svgWrapper');
    this.circle = this.el.querySelector('#purposeSvg_circle');
    this.sensible = this.el.querySelector('#purposeSensible');
    this.links = Array.from(this.el.querySelectorAll('a'));
    this.mousePos = {
      x: 0,
      y: 0
    };
    this.svgRect = {
      left: 0,
      top: 0
    }; // position du wrapper dans le viewport

    // BOUND handlers stockés pour pouvoir les removeEventListener correctement
    this._boundFrame = this.frame.bind(this);
    this._boundResize = this.e_resize.bind(this);
    this._boundMouseMove = this.e_mousemove.bind(this);
    this._boundMouseEnter = this.e_mousenter.bind(this);
    this._boundMouseLeave = this.e_mouseleave.bind(this);
    this._boundMouseEnterLink = this.e_mousenterLink.bind(this);
    this._boundMouseLeaveLink = this.e_mouseleaveLink.bind(this);
    this._boundMouseEnterEl = this.e_mousenterEl.bind(this);
    this._boundMouseLeaveEl = this.e_mouseleaveEl.bind(this);

    // ajout du ticker (on utilise la référence stockée pour remove après)
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.add(this._boundFrame);
    this.setRect();
    this.setEvents();
  }
  return _createClass(HomePurpose, [{
    key: "destroy",
    value: function destroy() {
      var _this = this;
      // retire le ticker
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.remove(this._boundFrame);

      // retire les listeners globaux
      window.removeEventListener('resize', this._boundResize);

      // retire lenis scroll si présent
      if (window.lenis && typeof window.lenis.off === 'function') {
        // supposer qu'off existe ; sinon il faudra une API adaptée
        window.lenis.off('scroll', this._lenisScrollHandler);
      } else if (window.lenis && typeof window.lenis.on === 'function') {
        // fallback si pas d'off : on peut essayer de nuller le handler interne
      }

      // listeners souris généraux
      if ((0,_utils_detect__WEBPACK_IMPORTED_MODULE_1__.isMouse)()) {
        this.sensible.removeEventListener('mouseenter', this._boundMouseEnter);
        this.sensible.removeEventListener('mouseleave', this._boundMouseLeave);
        this.links.forEach(function (link) {
          link.removeEventListener('mouseenter', _this._boundMouseEnterLink);
          link.removeEventListener('mouseleave', _this._boundMouseLeaveLink);
        });
      }
      if ((0,_utils_detect__WEBPACK_IMPORTED_MODULE_1__.isFirefox)()) {
        this.el.removeEventListener('mouseenter', this._boundMouseEnterEl);
        this.el.removeEventListener('mouseleave', this._boundMouseLeaveEl);
        window.removeEventListener('mousemove', this._boundMouseMove);
      }

      // nuller références si besoin
      this.circle = null;
      this.svg = null;
      this.svgWrapper = null;
      this.sensible = null;
      this.links = null;
      this.el = null;
    }
  }, {
    key: "frame",
    value: function frame() {
      // On anime l'élément déjà sélectionné (pas de lookup DOM à chaque tick)
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.circle, {
        x: this.mousePos.x - this.svgRect.left,
        y: this.mousePos.y - this.svgRect.top,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "center center"
      });
    }
  }, {
    key: "setRect",
    value: function setRect() {
      if (!this.svgWrapper) return;
      var r = this.svgWrapper.getBoundingClientRect();
      this.svgRect.left = r.left;
      this.svgRect.top = r.top;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;
      // guard pour lenis
      if (window.lenis && typeof window.lenis.on === 'function') {
        // on stocke la ref pour pouvoir l'enlever plus tard
        this._lenisScrollHandler = function (e) {
          _this2.e_scroll(e);
        };
        window.lenis.on('scroll', this._lenisScrollHandler);
      } else {
        // fallback: si pas lenis, on peut écouter scroll natif
        this._boundNativeScroll = this.e_scroll.bind(this);
        window.addEventListener('scroll', this._boundNativeScroll, {
          passive: true
        });
      }
      window.addEventListener('resize', this._boundResize);
      if ((0,_utils_detect__WEBPACK_IMPORTED_MODULE_1__.isMouse)()) {
        if (this.sensible) {
          this.sensible.addEventListener('mouseenter', this._boundMouseEnter);
          this.sensible.addEventListener('mouseleave', this._boundMouseLeave);
        }
        this.links.forEach(function (link) {
          link.addEventListener('mouseenter', _this2._boundMouseEnterLink);
          link.addEventListener('mouseleave', _this2._boundMouseLeaveLink);
        });
      }
      if ((0,_utils_detect__WEBPACK_IMPORTED_MODULE_1__.isFirefox)()) {
        // quickfix firefox
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle, {
          autoAlpha: 0,
          scale: 0.001
        });
        this.el.addEventListener('mouseenter', this._boundMouseEnterEl);
        this.el.addEventListener('mouseleave', this._boundMouseLeaveEl);
        window.addEventListener('mousemove', this._boundMouseMove);
      }
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mousemove",
    value: function e_mousemove(e) {
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY;
    }
  }, {
    key: "e_mousenterEl",
    value: function e_mousenterEl(e) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.circle, {
        autoAlpha: 1,
        scale: 1,
        duration: 0,
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_mouseleaveEl",
    value: function e_mouseleaveEl(e) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.circle, {
        autoAlpha: 0,
        scale: 0.001,
        duration: 0,
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_mousenter",
    value: function e_mousenter() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.circle, {
        scale: 148 / 36,
        duration: 0.3,
        ease: "power4.out",
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_mouseleave",
    value: function e_mouseleave() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.circle, {
        scale: 1,
        duration: 0.3,
        ease: "power4.out",
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_mousenterLink",
    value: function e_mousenterLink() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.circle, {
        scale: 72 / 36,
        duration: 0.3,
        ease: "power4.out",
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_mouseleaveLink",
    value: function e_mouseleaveLink() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.circle, {
        scale: 1,
        duration: 0.3,
        ease: "power4.out",
        transformOrigin: "center center"
      });
    }
  }, {
    key: "e_scroll",
    value: function e_scroll(e) {
      // mettre à jour la position du wrapper (utile si le wrapper bouge)
      this.setRect();
    }
  }, {
    key: "e_resize",
    value: function e_resize(e) {
      this.setRect();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.homePurpose';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/homeService.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/homeService.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/Observer */ "./node_modules/gsap/Observer.js");
/* harmony import */ var _utils_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/detect */ "./wp-content/themes/mojo-v2/src/js/utils/detect.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var HomeService = /*#__PURE__*/function () {
  function HomeService(el) {
    _classCallCheck(this, HomeService);
    this.el = el;
    this.container = this.el.querySelector('.homeService__cardContainer');
    this.groupSlide = this.el.querySelector('.homeService__groupSlide');
    this.realSection = this.el.querySelector('.homeService__realSize');
    this.allCard = this.el.querySelectorAll('.homeService__cardSlide');
    if (!(0,_utils_detect__WEBPACK_IMPORTED_MODULE_2__.isMobile)()) {
      this.initIntro();
      this.initScroller();
    } else {
      this.initSwiper();
    }
  }
  return _createClass(HomeService, [{
    key: "initSwiper",
    value: function initSwiper() {
      // Add Swiper Classes
      this.groupSlide.classList.add('swiper');
      this.realSection.classList.add('swiper-wrapper');
      this.allCard.forEach(function (card) {
        card.classList.add('swiper-slide');
      });

      // Init Slider
      this.slider = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](this.groupSlide, {
        direction: 'horizontal',
        loop: true,
        autoHeight: true,
        slidesPerView: 'auto',
        spaceBetween: 35,
        grabCursor: true
      });
    }
  }, {
    key: "initIntro",
    value: function initIntro() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.allCard, {
        "y": 300,
        "x": 100,
        rotate: '35deg',
        autoAlpha: 0
      });
      this.intro = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
        duration: 1,
        scrollTrigger: {
          trigger: this.el,
          endTrigger: '.homeService__triggerStart',
          start: '-400px',
          //markers: true,
          scrub: true,
          id: 'appearing'
        }
      });
      for (var index = 0; index < this.allCard.length; index++) {
        var rotate = '2deg';
        if (index % 2) rotate = '-2deg';
        if (index === 1) rotate = '-1deg';else if (index === 0) rotate = 0;
        var y = -25 * index * index / 3.5;
        var timing = 0.50 * index;
        this.intro.to(this.allCard[index], {
          autoAlpha: 1,
          duration: 0.2
        }, timing);
        this.intro.to(this.allCard[index], {
          "y": y,
          "x": 0,
          rotate: rotate,
          duration: 2,
          ease: "power3.out"
        }, timing);
      }
    }
  }, {
    key: "initScroller",
    value: function initScroller() {
      var _this = this;
      this.main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
        scrollTrigger: {
          trigger: '.homeService__triggerStart',
          endTrigger: '.homeService__triggerEnd',
          type: "pointer,touch",
          start: 'top',
          end: "100vh",
          scrub: true,
          pin: '.homeService__pin'
          //id:'animation',
          //markers: true
        }
      });
      this.main.to(this.groupSlide, {
        x: function x() {
          return -(_this.realSection.offsetWidth - _this.container.offsetWidth);
        },
        ease: 'none',
        autoAlpha: 1,
        duration: 2
      }, 0);
      for (var index = 0; index < this.allCard.length; index++) {
        this.main.to(this.allCard[index], {
          "y": 0,
          duration: 0.8
        }, 0.15 * index);
        this.main.to(this.allCard[index], {
          rotate: 0,
          duration: 0.8,
          ease: "power2.out"
        }, 0.15 * index);
      }
      this.addSwipeMovement();
    }
  }, {
    key: "addSwipeMovement",
    value: function addSwipeMovement() {
      var _this2 = this;
      if (!(0,_utils_detect__WEBPACK_IMPORTED_MODULE_2__.isTouchDevice)()) {
        this.el.addEventListener('dragstart', function (event) {
          event.preventDefault();
        });
        this.el.addEventListener('drop', function (event) {
          event.preventDefault();
        });
        gsap_Observer__WEBPACK_IMPORTED_MODULE_1__["default"].create({
          axis: 'x',
          lockAxis: true,
          target: this.el,
          type: "wheel,pointer",
          id: "homeService",
          onDragStart: function onDragStart(self) {
            self.startScroll = _this2.main.scrollTrigger.scroll();
          },
          onDrag: function onDrag(self) {
            gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(_this2.main.scrollTrigger, {
              duration: 0.4,
              ease: "power1.out",
              scroll: self.startScroll + (self.startX - self.x) * 2
            });
          }
        });
      }
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.homeService';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/homeTransformation.js":
/*!***************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/homeTransformation.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeTransformation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var homeTransformation = /*#__PURE__*/function () {
  function homeTransformation(el) {
    _classCallCheck(this, homeTransformation);
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_1__.MotionPathPlugin, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);
    this.el = el;
    this.circle = this.el.querySelector('#tr_circle');
    this.path = this.el.querySelector('#tr_path');
    this.setPos();
    this.initScroller();
  }
  return _createClass(homeTransformation, [{
    key: "setPos",
    value: function setPos() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle, {
        scale: 0.2
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle, {
        autoAlpha: 0
      });
    }
  }, {
    key: "initScroller",
    value: function initScroller() {
      this.main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
        scrollTrigger: {
          trigger: this.el,
          start: 'top-=400',
          end: '+=100%',
          scrub: true
          //id:"homeTransformation",
          //markers: true                
        }
      }).to(this.circle, {
        duration: 2,
        ease: "linear",
        motionPath: {
          path: "#tr_path",
          align: "#tr_path",
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
          start: -0.40,
          end: 0.33
        }
      }, 0).to(this.circle, {
        duration: 0.1,
        autoAlpha: 1
      }, 0).to(this.circle, {
        duration: 2,
        scale: 1
      }, 0);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.main.kill(true);
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.homeTransformation';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/homeVideo.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/homeVideo.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeVideo)
/* harmony export */ });
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var HomeVideo = /*#__PURE__*/function () {
  function HomeVideo(el) {
    _classCallCheck(this, HomeVideo);
    this.el = el;
    this.video = el.querySelector('.homeVideo__video');
    this.setEvents();
  }
  return _createClass(HomeVideo, [{
    key: "destroy",
    value: function destroy() {
      this.removeEvents();
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this.el.addEventListener('inView', this.e_inview.bind(this));
      this.video.addEventListener('playing', this.e_playing.bind(this));
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.el.removeEventListener('inView', this.e_inview.bind(this));
      this.video.removeEventListener('playing', this.e_playing.bind(this));
    }

    /**
     * Handlers
     */
  }, {
    key: "e_inview",
    value: function e_inview(e) {
      this.el.classList.add('homeVideo--inview');
    }
  }, {
    key: "e_playing",
    value: function e_playing(e) {
      this.el.classList.add('homeVideo--playing');
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.homeVideo';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/imagesslider.js":
/*!*********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/imagesslider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImagesSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ImagesSlider = /*#__PURE__*/function () {
  function ImagesSlider(el) {
    _classCallCheck(this, ImagesSlider);
    this.el = el;
    this.wrapper = el.querySelector('.imagesslider__wrapper');
    this.items = el.querySelectorAll('.imagesslider__item');
    this.initialize();
  }
  return _createClass(ImagesSlider, [{
    key: "initialize",
    value: function initialize() {
      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoHeight: true,
        slidesPerView: 'auto',
        grabCursor: true,
        centeredSlides: true,
        breakpoints: {
          320: {
            // when window width is >= 320px
            spaceBetween: 5
          },
          601: {
            spaceBetween: 35,
            centeredSlides: false
          }
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.swiper) this.swiper.destroy();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.imagesslider';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/leadDescription.js":
/*!************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/leadDescription.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeadDescription)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LeadDescription = /*#__PURE__*/function () {
  function LeadDescription(el) {
    _classCallCheck(this, LeadDescription);
    this.el = el;
    this.link = this.el.querySelector('.leadDescription__link');
    this.addEvents();
  }
  return _createClass(LeadDescription, [{
    key: "addEvents",
    value: function addEvents() {
      var _this = this;
      if (this.link) {
        this.link.addEventListener('click', function (e) {
          _this.e_click(e);
        });
      }
    }
  }, {
    key: "e_click",
    value: function e_click(e) {
      e.preventDefault();
      var contactForm = document.getElementById('contactForm');
      if (contactForm) {
        window.lenis.scrollTo(contactForm, {
          duration: 3
        });
      }
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.leadDescription';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/leadLogoCarrousel.js":
/*!**************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/leadLogoCarrousel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ leadLogoCarrousel)
/* harmony export */ });
/* harmony import */ var reeller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reeller */ "./node_modules/reeller/dist/index.module.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var leadLogoCarrousel = /*#__PURE__*/function () {
  function leadLogoCarrousel(el) {
    _classCallCheck(this, leadLogoCarrousel);
    this.startCarousel();
  }
  return _createClass(leadLogoCarrousel, [{
    key: "startCarousel",
    value: function startCarousel() {
      reeller__WEBPACK_IMPORTED_MODULE_0__.Reeller.registerGSAP(gsap__WEBPACK_IMPORTED_MODULE_1__["default"]);
      var reeller = new reeller__WEBPACK_IMPORTED_MODULE_0__.Reeller({
        container: '.ourClients__carousel',
        wrapper: '.ourClients__carouselWrapper',
        itemSelector: '.ourClients__carouselWrapper',
        speed: 50,
        reversed: true
      });
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.leadLogoCarrousel';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/leadTeam.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/leadTeam.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeadTeam)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var LeadTeam = /*#__PURE__*/function () {
  function LeadTeam(el) {
    _classCallCheck(this, LeadTeam);
    this.el = el;
    this.initialize();
  }
  return _createClass(LeadTeam, [{
    key: "initialize",
    value: function initialize() {
      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
        direction: 'horizontal',
        autoHeight: true,
        slidesPerView: 'auto',
        grabCursor: true,
        breakpoints: {
          320: {
            // when window width is >= 320px
            spaceBetween: 5
          },
          601: {
            spaceBetween: 35,
            centeredSlides: false
          }
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.swiper) this.swiper.destroy();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.leadTeam';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/ourClients.js":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/ourClients.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OurClients)
/* harmony export */ });
/* harmony import */ var reeller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reeller */ "./node_modules/reeller/dist/index.module.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var OurClients = /*#__PURE__*/function () {
  function OurClients(el) {
    _classCallCheck(this, OurClients);
    this.el = el;
    this.container = this.el.querySelector('.ourClients__container');
    this.clients = this.getClients();
    this.current = 0;
    this.timer = this.getTimer();
    this.startCarousel();
    this.active(this.clients[this.current]);
    this.setEvents();
  }
  return _createClass(OurClients, [{
    key: "startCarousel",
    value: function startCarousel() {
      reeller__WEBPACK_IMPORTED_MODULE_0__.Reeller.registerGSAP(gsap__WEBPACK_IMPORTED_MODULE_1__["default"]);
      var reeller = new reeller__WEBPACK_IMPORTED_MODULE_0__.Reeller({
        container: '.ourClients__carousel',
        wrapper: '.ourClients__carouselWrapper',
        itemSelector: '.ourClients__carouselWrapper',
        speed: 50,
        reversed: true
      });
    }
  }, {
    key: "getTimer",
    value: function getTimer() {
      var _this = this;
      return setInterval(function () {
        _this.current++;
        if (_this.current >= _this.clients.length) {
          _this.current = 0;
        }
        _this.active(_this.clients[_this.current]);
      }, 2000);
    }
  }, {
    key: "getClients",
    value: function getClients() {
      var els = this.el.querySelectorAll('.client');
      var clients = [];
      els.forEach(function (el, index) {
        var client = {};
        client.index = index;
        client.isActive = false;
        client.el = el;
        clients.push(client);
      });
      return clients;
    }
  }, {
    key: "active",
    value: function active(client) {
      if (client.isActive) return;
      this.desactiveAll();
      this.current = client.index;
      client.isActive = true;
      client.el.classList.add('client--active');
    }
  }, {
    key: "desactive",
    value: function desactive(client) {
      if (!client.isActive) return;
      client.isActive = false;
      client.el.classList.remove('client--active');
    }
  }, {
    key: "desactiveAll",
    value: function desactiveAll() {
      var _this2 = this;
      this.clients.forEach(function (client) {
        _this2.desactive(client);
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this3 = this;
      this.container.addEventListener('mouseenter', function (e) {
        clearInterval(_this3.timer);
      });
      this.clients.forEach(function (client) {
        client.el.addEventListener('mouseenter', function (e) {
          clearInterval(_this3.timer);
          _this3.e_enter(e, client);
        });
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_enter",
    value: function e_enter(e, client) {
      this.active(client);
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.ourClients';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/pageClient.js":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/pageClient.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageClient)
/* harmony export */ });
/* harmony import */ var _Globe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globe */ "./wp-content/themes/mojo-v2/src/js/components/Globe.js");
/* harmony import */ var _clientIntro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientIntro */ "./wp-content/themes/mojo-v2/src/js/components/clientIntro.js");
/* harmony import */ var _clientNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientNumbers */ "./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var PageClient = /*#__PURE__*/function () {
  function PageClient(el) {
    _classCallCheck(this, PageClient);
    this.el = el;
    this.intro = new _clientIntro__WEBPACK_IMPORTED_MODULE_1__["default"](this.el.querySelector('.clientIntro'));
    //this.number = new ClientNumbers(this.el.querySelector('.clientNumbers'))
    this.globe = new _Globe__WEBPACK_IMPORTED_MODULE_0__["default"](this.el.querySelector('.globe'));
    /*
    this.intro.promise.then(() => {
        setTimeout(() =>{
            window.lenis.resize();
         },)
     })
    */
    this.setEvents();
  }
  return _createClass(PageClient, [{
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "setEvents",
    value: function setEvents() {
      window.addEventListener("resize", this.e_resize.bind(this));
    }
  }, {
    key: "e_resize",
    value: function e_resize(e) {
      this.intro.e_resize();
      //this.number.e_resize();
      this.globe.e_resize();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.pageclient';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/sCaseRandom.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/sCaseRandom.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sCaseRandom)
/* harmony export */ });
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var sCaseRandom = /*#__PURE__*/function () {
  function sCaseRandom(el) {
    _classCallCheck(this, sCaseRandom);
    this.el = el;
    this.items = el.querySelectorAll('.caseCard');
    this.items.forEach(function (item) {
      _classes_InView__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(item);
    });
    this.setEvents();
  }
  return _createClass(sCaseRandom, [{
    key: "setEvents",
    value: function setEvents() {
      var _this = this;
      this.items.forEach(function (item) {
        item.addEventListener('inView', function (e) {
          _this.e_inview(e, item);
        });
      });
    }
  }, {
    key: "e_inview",
    value: function e_inview(e, item) {
      item.classList.add('caseCard--inview');
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.sCaseRandom';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/serviceCard.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/serviceCard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServiceCard)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ServiceCard = /*#__PURE__*/function () {
  function ServiceCard(el) {
    _classCallCheck(this, ServiceCard);
    var mq = window.matchMedia("any-pointer: coarse");
    if (mq.matches) return;
    this.el = el;
    this.isActive = false;
    this.bounds = this.el.getBoundingClientRect();
    this.pos = {
      x: 0,
      y: 0
    };
    this.setEvents();
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.add(this.rotateToMouse.bind(this));
  }
  return _createClass(ServiceCard, [{
    key: "rotateToMouse",
    value: function rotateToMouse() {
      if (!this.isActive) {
        this.el.style.transform = '';
        this.el.style.background = '';
        return;
      }
      var leftX = this.pos.x - this.bounds.x;
      var topY = this.pos.y - this.bounds.y;
      var center = {
        x: leftX - this.bounds.width / 2,
        y: topY - this.bounds.height / 2
      };
      var distance = Math.sqrt(Math.pow(center.x, 2) + Math.pow(center.y, 2));
      this.el.style.transform = "\n            scale3d(1.07, 1.07, 1.07)\n            rotate3d(\n            ".concat(center.y / 100, ",\n            ").concat(-center.x / 100, ",\n            0,\n            ").concat(Math.log(distance) * 2, "deg\n            )\n        ");

      /*this.el.querySelector('.glow').style.backgroundImage = `
          radial-gradient(
          circle at
          ${center.x * 2 + this.bounds.width/2}px
          ${center.y * 2 + this.bounds.height/2}px,
          #ffffff55,
          #0000000f
          )
      `;*/
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this.el.addEventListener('mousemove', this.e_mousemove.bind(this));
      this.el.addEventListener('mouseenter', this.e_mouseenter.bind(this));
      this.el.addEventListener('mouseleave', this.e_mouseleave.bind(this));
      window.addEventListener('scroll', this.e_scroll.bind(this));
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mousemove",
    value: function e_mousemove(e) {
      this.pos = {
        x: e.clientX,
        y: e.clientY
      };
      //this.rotateToMouse();
    }
  }, {
    key: "e_scroll",
    value: function e_scroll(e) {
      this.bounds = this.el.getBoundingClientRect();
    }
  }, {
    key: "e_mouseenter",
    value: function e_mouseenter(e) {
      this.bounds = this.el.getBoundingClientRect();
      this.isActive = true;
    }
  }, {
    key: "e_mouseleave",
    value: function e_mouseleave(e) {
      document.removeEventListener('mousemove', this.rotateToMouse.bind(this));
      this.isActive = false;
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.serviceCard--animated';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/serviceGrid.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/serviceGrid.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServiceGrid)
/* harmony export */ });
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/wait */ "./wp-content/themes/mojo-v2/src/js/utils/wait.js");
/* harmony import */ var _classes_IsTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/IsTop */ "./wp-content/themes/mojo-v2/src/js/classes/IsTop.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var ServiceGrid = /*#__PURE__*/function () {
  function ServiceGrid(el) {
    var _this = this;
    _classCallCheck(this, ServiceGrid);
    this.el = el;
    this.isService = this.el.classList.contains('serviceGrid--service');
    this.items = el.querySelectorAll('.serviceGrid__item');
    this.intro = document.querySelector('.serviceIntro');
    if (this.intro) {
      (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(600).then(function () {
        _classes_InView__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(_this.el);
      });
    } else {
      _classes_InView__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(this.el);
    }
    var mq = window.matchMedia("(max-width: 600px) and (any-pointer: coarse)");
    if (mq.matches) {
      if (this.isService) {
        this.container = this.el.querySelector('.serviceGrid__gridWrapper');
        this.grid = this.el.querySelector('.serviceGrid__grid');
        this.allCard = this.el.querySelectorAll('.serviceGrid__item');
        this.container.classList.add('swiper');
        this.grid.classList.add('swiper-wrapper');
        this.items.forEach(function (card) {
          card.classList.add('swiper-slide');
        });
        this.slider = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](this.container, {
          direction: 'horizontal',
          loop: true,
          autoHeight: false,
          slidesPerView: 'auto',
          spaceBetween: 35,
          grabCursor: true
        });
      } else {
        this.items.forEach(function (item) {
          _classes_IsTop__WEBPACK_IMPORTED_MODULE_2__["default"].addElement(item);
        });
      }
    }
    this.setEvents();
  }
  return _createClass(ServiceGrid, [{
    key: "setEvents",
    value: function setEvents() {
      this.el.addEventListener('inView', this.e_inview.bind(this));
      this.items.forEach(function (item) {
        item.addEventListener('inTop', function (e) {
          item.querySelector('.serviceCard').classList.add('swiper-slide-active');
        });
        item.addEventListener('outTop', function (e) {
          item.querySelector('.serviceCard').classList.remove('swiper-slide-active');
        });
      });
    }
  }, {
    key: "e_inview",
    value: function e_inview() {
      this.el.classList.add('serviceGrid--inview');
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.serviceGrid';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/teamGrid.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/teamGrid.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ teamGrid)
/* harmony export */ });
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/wait */ "./wp-content/themes/mojo-v2/src/js/utils/wait.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var teamGrid = /*#__PURE__*/function () {
  function teamGrid(el) {
    var _this = this;
    _classCallCheck(this, teamGrid);
    this.el = el;
    this.items = this.el.querySelectorAll('.teamGrid__item');
    (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(800).then(function () {
      _this.items.forEach(function (item) {
        _classes_InView__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(item);
      });
    });
    this.setEvents();
  }
  return _createClass(teamGrid, [{
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;
      this.items.forEach(function (item) {
        item.addEventListener('inView', function (e) {
          _this2.e_inview(e, item);
        });
      });
    }
  }, {
    key: "e_inview",
    value: function e_inview(e, item) {
      item.classList.add('teamGrid__item--inview');
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.teamGrid';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/wp-block-details.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/wp-block-details.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wpBlockDetails)
/* harmony export */ });
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/wait */ "./wp-content/themes/mojo-v2/src/js/utils/wait.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var wpBlockDetails = /*#__PURE__*/function () {
  function wpBlockDetails(el) {
    _classCallCheck(this, wpBlockDetails);
    this.el = el;
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes") {
          console.log("attributes changed");
          window.lenis.resize();
          gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_0__.ScrollTrigger.refresh();
        }
      });
    });
    observer.observe(this.el, {
      attributes: true
    });
  }
  return _createClass(wpBlockDetails, null, [{
    key: "selector",
    get: function get() {
      return '.wp-block-details';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/main.js":
/*!**************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    value: function setupElements() {
      this.currentView = document.querySelector("[data-barba='container']");
      this.cursorEl = document.querySelector('.cursor');
      this.header = new _classes_Header__WEBPACK_IMPORTED_MODULE_9__["default"]();
      this.parts = _classes_Pluton__WEBPACK_IMPORTED_MODULE_0__["default"];
      this.parts.setup(); //only uncomment if you swith off router
      this.menu = _classes_Menu__WEBPACK_IMPORTED_MODULE_4__["default"].initialize();
      this.footer = new _classes_Footer__WEBPACK_IMPORTED_MODULE_8__["default"]();
      this.cursor = new _classes_Cursor__WEBPACK_IMPORTED_MODULE_2__["default"](this.cursorEl, _classes_cursorOption__WEBPACK_IMPORTED_MODULE_3__["default"]).initialize();
      //this.LazyVideos  = new LazyVideos();
    }
  }]);
}();
window.addEventListener("DOMContentLoaded", function (event) {
  this.scroller = new _classes_Scroller__WEBPACK_IMPORTED_MODULE_1__["default"]();
  window.MJ = new Mojo();
  window.document.documentElement.classList.add('js-active');
});

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/utils/detect.js":
/*!**********************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/utils/detect.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./wp-content/themes/mojo-v2/src/js/utils/wait.js":
/*!********************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/utils/wait.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wait)
/* harmony export */ });
function wait(time) {
  return new Promise(function (resovle) {
    setTimeout(function () {
      resovle();
    }, time);
  });
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/fullblackimage.scss":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/fullblackimage.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/fullimage.scss":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/fullimage.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/imagesslider.scss":
/*!*********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/imagesslider.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/textimage.scss":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/textimage.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/twoimages.scss":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/twoimages.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/scss/main.scss":
/*!******************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/main.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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