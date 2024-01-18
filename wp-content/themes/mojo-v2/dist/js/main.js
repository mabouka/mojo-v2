(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["/js/main"],{

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  _createClass(InView, [{
    key: "callback",
    value: function callback(elements) {
      var _this2 = this;
      elements.forEach(function (element) {
        if (element.intersectionRatio > 0) {
          var event = new CustomEvent('inView', {
            'detail': elements
          });
          element.target.dispatchEvent(event);
          _this2.observer.unobserve(element.target);
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
  return InView;
}();
var instance = new InView();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/MobileMenu.js":
/*!****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/MobileMenu.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);
    this.burger = document.querySelector('.openMenu');
    this.isOpen = document.body.classList.contains('menuOpen');
    this.menu = document.querySelector('.menu');
    this.closeMenu = document.querySelector('.closeMenu');
    this.setEvents();
  }
  _createClass(MobileMenu, [{
    key: "setEvents",
    value: function setEvents() {
      var _this = this;
      this.burger.addEventListener('click', function (e) {
        _this.e_clickBurger(e);
      }, false);
      this.closeMenu.addEventListener('click', function (e) {
        _this.e_clickClose(e);
      }, false);
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
    key: "e_clickBurger",
    value: function e_clickBurger(e) {
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
  return MobileMenu;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/destroy.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/core/destroy.js ***!
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

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/clicking.js":
/*!*********************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/clicking.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clicking: () => (/* binding */ clicking)
/* harmony export */ });
function clicking(cursor) {
  cursor.element.classList.add('cursor--clicking');
  var mouseup = function mouseup() {
    cursor.element.classList.remove('cursor--clicking');
    document.removeEventListener('mouseup', mouseup);
  };
  document.addEventListener('mouseup', mouseup, {
    once: true
  });
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/enter.js":
/*!******************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/enter.js ***!
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

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/leave.js":
/*!******************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/leave.js ***!
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

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/track.js":
/*!******************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/track.js ***!
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

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/focus.js":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/core/focus.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Focus)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  _createClass(Focus, [{
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
  return Focus;
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/initialize.js":
/*!****************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/core/initialize.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/focus.js");

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
    var render = function render() {
      if (!cursor.disabled) {
        cursor.setPosition(cursor.position.X, cursor.position.Y);
      }
      requestAnimationFrame(render);
    };
    render();
    cursor.focusController = new _focus__WEBPACK_IMPORTED_MODULE_0__["default"](cursor).addFocusElements(cursor.options.focusElements);
    cursor.initialized = true;
  }
}

/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/defaults.js":
/*!*********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/defaults.js ***!
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

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/index.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomCursor)
/* harmony export */ });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/defaults.js");
/* harmony import */ var _util_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/log */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/util/log.js");
/* harmony import */ var _util_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/object */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/util/object.js");
/* harmony import */ var _util_isMobileUserAgent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isMobileUserAgent */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/util/isMobileUserAgent.js");
/* harmony import */ var _core_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/destroy */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/destroy.js");
/* harmony import */ var _core_initialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/initialize */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/initialize.js");
/* harmony import */ var _core_events_enter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/events/enter */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/enter.js");
/* harmony import */ var _core_events_leave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/events/leave */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/leave.js");
/* harmony import */ var _core_events_track__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/events/track */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/track.js");
/* harmony import */ var _core_events_clicking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/events/clicking */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/core/events/clicking.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  _createClass(CustomCursor, [{
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
          document.documentElement.style.setProperty('--x', x + 'px');
          document.documentElement.style.setProperty('--y', y + 'px');
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
  return CustomCursor;
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/util/isMobileUserAgent.js":
/*!***********************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/util/isMobileUserAgent.js ***!
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

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/util/log.js":
/*!*********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/util/log.js ***!
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

/***/ "./wp-content/themes/mojo-v2/src/js/classes/cursor/util/object.js":
/*!************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/classes/cursor/util/object.js ***!
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Contactform = /*#__PURE__*/function () {
  function Contactform(el) {
    _classCallCheck(this, Contactform);
    this.el = el;
    this.svg = this.el.querySelector('.contact__svg');
    var main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
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
  }
  _createClass(Contactform, null, [{
    key: "selector",
    get: function get() {
      return '.contact';
    }
  }]);
  return Contactform;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// FIRST APPLE-LIKE EFFECT:
// Sync video with scroll

// ffmpeg -i mojo_globe_01.mov -qscale:v 1  -vf "fps=25,scale=1285:-1" images/globe-1285-%04d.jpg
// `for file in images/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`


var Globe = /*#__PURE__*/function () {
  function Globe(el) {
    var _this = this;
    _classCallCheck(this, Globe);
    console.log('start globe');
    this.el = el;
    this.baseUrl = el.dataset.baseUrl;
    this.canvas = el.querySelector('.globe__anim');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = 1285;
    this.canvas.height = 952;
    this.frameIndex = 0;
    this.frameCount = 250;
    this.images = [];
    this.anim = {
      frame: 0
    };
    this.preloadImages();
    setTimeout(function () {
      _this.preloadImages();
    }, 200);
    this.images[0].onload = this.render.bind(this); // render first image

    this.animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.anim, {
      frame: this.frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: this.el,
        pin: true,
        start: "top",
        end: "+=2000",
        scrub: true,
        //markers: true,
        id: "globe"
      },
      onUpdate: function onUpdate(self) {
        _this.render();
      } // use animation onUpdate instead of scrollTrigger's onUpdate
    });
    console.log(' end globe');
  }
  _createClass(Globe, [{
    key: "currentFrame",
    value: function currentFrame(i) {
      i = i.toString().padStart(4, '0');
      return "".concat(this.baseUrl, "globe-1285-").concat(i, ".webp");
    }
  }, {
    key: "preloadImages",
    value: function preloadImages() {
      for (var i = 1; i <= this.frameCount; i++) {
        var img = new Image();
        img.src = this.currentFrame(i);
        this.images.push(img);
      }
    }
  }, {
    key: "render",
    value: function render(e) {
      console.log(this.anim.frame);
      //console.error(this.anim.frame >= 190, this.anim.frame);
      this.renderText();
      try {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.images[Math.ceil(this.anim.frame, 1)], 0, 0);
      } catch (error) {
        console.log(this.images);
        console.error(error);
        console.log('imageError', this.anim.frame);
      }
    }
  }, {
    key: "renderText",
    value: function renderText() {
      if (this.anim.frame >= 190) this.el.classList.add('globe--complete');else this.el.classList.remove('globe--complete');
    }

    /*
     * Events
     */
  }, {
    key: "e_resize",
    value: function e_resize() {
      console.log('globe resize');
      this.animation.scrollTrigger.refresh();
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.globe';
    }
  }]);
  return Globe;
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var caseCard = /*#__PURE__*/function () {
  function caseCard(el) {
    _classCallCheck(this, caseCard);
    this.el = el;
    this.link = this.el.querySelector('.caseCard__link');
    this.video = this.el.querySelector('.caseCard__video');
    this.setEvents();
  }

  /**
   * Events
   */
  _createClass(caseCard, [{
    key: "setEvents",
    value: function setEvents() {
      this.link.addEventListener('mouseenter', this.e_enter.bind(this));
      this.link.addEventListener('mouseleave', this.e_leave.bind(this));
    }
  }, {
    key: "e_enter",
    value: function e_enter(e) {
      console.log('enter');
      this.video.currentTime = 0;
      this.video.play();
      this.el.classList.add('caseCard--playing');
    }
  }, {
    key: "e_leave",
    value: function e_leave(e) {
      this.video.pause();
      this.video.currentTime = 0;
      this.el.classList.remove('caseCard--playing');
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.caseCard--video';
    }
  }]);
  return caseCard;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  _createClass(OurClients, [{
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
      this.container.addEventListener('mouseleave', function (e) {
        //this.timer = this.getTimer();
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
  return OurClients;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ClientIntro = /*#__PURE__*/function () {
  function ClientIntro(el) {
    _classCallCheck(this, ClientIntro);
    console.log('start Client Intro');
    this.el = el;
    this.circleSection = this.el.querySelector('.clientIntro__circles');
    this.circle1 = this.el.querySelector('#circle1');
    this.circle2 = this.el.querySelector('#circle2');
    this.ray = this.el.querySelector('.clientIntro__secondBg');
    this.text = this.el.querySelector('.clientIntro__secondText');
    this.text2 = this.el.querySelector('.clientIntro__secondText2');
    this.main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      scrollTrigger: {
        trigger: this.el,
        start: 'top',
        end: '+=2000',
        scrub: true,
        pin: true,
        //markers: true,
        id: "Intro"
        //invalidateOnRefresh: true,
      }
    }).from(this.ray, {
      duration: 1.8,
      ease: "expoScale(0.5,7,none)",
      scale: 0.05
    }, 2.2).from(this.circle1, {
      duration: 1,
      ease: "power1.out",
      x: -1440 / 2
    }, 0).from(this.circle2, {
      duration: 1,
      ease: "power1.out",
      x: 1440 / 2
    }, 0).to(this.circleSection, {
      duration: 2,
      ease: "power2.out",
      maxHeight: 0,
      overwrite: true
    }, 2);
    console.log('end Client Intro');
  }
  /*
   * Events
   */
  _createClass(ClientIntro, [{
    key: "e_resize",
    value: function e_resize() {
      console.log('intro resize');
      this.main.scrollTrigger.refresh();
      this.main.scrollTrigger.update();
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.clientIntro';
    }
  }]);
  return ClientIntro;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ClientNumbers = /*#__PURE__*/function () {
  function ClientNumbers(el) {
    _classCallCheck(this, ClientNumbers);
    console.log('start Client Number');
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
    console.log('end Client Number');
  }

  /*
   * Events
   */
  _createClass(ClientNumbers, [{
    key: "e_resize",
    value: function e_resize(e) {
      console.log('number resize');
      this.starsAnimation.scrollTrigger.refresh();
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.clientNumbers';
    }
  }]);
  return ClientNumbers;
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ClientTypology = /*#__PURE__*/function () {
  function ClientTypology(el) {
    _classCallCheck(this, ClientTypology);
    this.el = el;
    this.images = this.el.querySelectorAll('.clientTypology__image');
    this.mouse = {
      x: 0,
      y: 0,
      moved: false
    };
    this.setEvents();
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.ticker.add(this.doOneFrame.bind(this));
  }
  _createClass(ClientTypology, [{
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
      this.el.addEventListener('mousemove', this.e_mousemove.bind(this));
      //this.body.addEventListener('resize', this.e_resize.bind(this));
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
    key: "e_resize",
    value: function e_resize(e) {
      this.rect = this.body.getBoundingClientRect();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.clientTypology';
    }
  }]);
  return ClientTypology;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
  _createClass(CommitmentsEarth, [{
    key: "setEvents",
    value: function setEvents() {}

    /**
     * Handlers
     */
  }, {
    key: "e_error",
    value: function e_error(e) {}
  }], [{
    key: "selector",
    get: function get() {
      return '.commitmentsEarth';
    }
  }]);
  return CommitmentsEarth;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CommitmentsFaq = /*#__PURE__*/function () {
  function CommitmentsFaq(el) {
    _classCallCheck(this, CommitmentsFaq);
    this.el = el;
    this.items = this.getItems();
    this.setEvents();
    this.active(this.items[0]);
  }
  _createClass(CommitmentsFaq, [{
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
  return CommitmentsFaq;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var commitmentsIntro = /*#__PURE__*/function () {
  function commitmentsIntro(el) {
    _classCallCheck(this, commitmentsIntro);
    this.el = el;
    this.svg = this.el.querySelector('.commitmentsIntro__svg');
    this.path = this.svg.querySelector('#path');
    var main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      scrollTrigger: {
        trigger: this.el,
        start: 'top top',
        end: "+=" + 800,
        scrub: true
      }
    }).to(this.path, {
      y: function y() {
        return -130;
      },
      duration: 2
    }, 0);
  }
  _createClass(commitmentsIntro, [{
    key: "setEvents",
    value: function setEvents() {}

    /**
     * Handlers
     */
  }, {
    key: "e_error",
    value: function e_error(e) {}
  }], [{
    key: "selector",
    get: function get() {
      return '.commitmentsIntro';
    }
  }]);
  return commitmentsIntro;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var featuredCases = /*#__PURE__*/function () {
  function featuredCases(el) {
    _classCallCheck(this, featuredCases);
    this.el = el;
    this.videos = this.getVideos();
    this.setEvents();
  }
  _createClass(featuredCases, [{
    key: "getVideos",
    value: function getVideos() {
      var _this = this;
      var videos = [];
      var links = this.el.querySelectorAll('.featuredCases__caseLink');
      Array.from(links).forEach(function (link) {
        var el = {};
        el.target = link.dataset.hoverTarget;
        el.videoContainer = _this.el.querySelector(el.target);
        el.imageTarget = link.dataset.imageTarget;
        el.imageContainer = _this.el.querySelector(el.imageTarget);
        el.video = el.videoContainer.querySelector("video");
        el.link = link;
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
        video.imageContainer.addEventListener('mouseover', function (e) {
          _this2.e_mouseEnter(e, video);
        });
        video.link.addEventListener('mouseleave', function (e) {
          _this2.e_mouseLeave(e, video);
        });
        video.imageContainer.addEventListener('mouseleave', function (e) {
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
      video.imageContainer.classList.add('featuredCases__galleryItem--active');
      video.link.classList.add('featuredCases__caseLink--active');
      if (video.video) video.video.play();
    }
  }, {
    key: "e_mouseLeave",
    value: function e_mouseLeave(e, video) {
      video.videoContainer.classList.remove('featuredCases__video--active');
      video.imageContainer.classList.remove('featuredCases__galleryItem--active');
      video.link.classList.remove('featuredCases__caseLink--active');
      if (video.video) video.video.pause();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.featuredCases';
    }
  }]);
  return featuredCases;
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/footer.js":
/*!***************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/footer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Footer = /*#__PURE__*/function () {
  function Footer(el) {
    _classCallCheck(this, Footer);
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.fps(60);
    this.el = el;
    this.body = document.querySelector('body');
    this.svg = this.el.querySelector('#footerSvg');
    this.svgWrapper = this.el.querySelector('.footer__svgWrapper');
    this.circle = this.el.querySelector('#footerSvg_circle');
    this.sensible = this.el.querySelector('#footer_sensible');
    this.setRect();
    this.setEvents();
  }
  _createClass(Footer, [{
    key: "setRect",
    value: function setRect() {
      this.svgRect = this.svgWrapper.getBoundingClientRect();
      this.svg.style.setProperty('--left', Math.round(this.svgRect.left) + 'px');
      this.svg.style.setProperty('--top', Math.round(this.svgRect.top) + 'px');
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;
      this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
      this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));
      window.addEventListener('scroll', function (e) {
        _this.e_scroll(e);
      });
      window.addEventListener('resize', function (e) {
        _this.e_resize(e);
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mousenter",
    value: function e_mousenter() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        scale: 266 / 36,
        duration: 0.3,
        ease: "expoScale(0.5,7,none)"
      });
    }
  }, {
    key: "e_mouseleave",
    value: function e_mouseleave() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        scale: 1,
        duration: 0.3,
        ease: "expoScale(0.5,7,none)"
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
  }], [{
    key: "selector",
    get: function get() {
      return '.footer';
    }
  }]);
  return Footer;
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/footer.old.js":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/footer.old.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Footer = /*#__PURE__*/function () {
  function Footer(el) {
    _classCallCheck(this, Footer);
    this.el = el;
    this.body = document.querySelector('body');
    this.svg = this.el.querySelector('#footerSvg');
    this.svgWrapper = this.el.querySelector('.footer__svgWrapper');
    this.svgRect = this.svgWrapper.getBoundingClientRect();
    this.circle = this.el.querySelector('#footerSvg_circle');
    this.sensible = this.el.querySelector('#footer_sensible');
    this.pos = {
      x: 0,
      y: 0
    };
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.add(this.updatePosition.bind(this));
    this.setEvents();
  }
  _createClass(Footer, [{
    key: "show",
    value: function show() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        autoAlpha: 1,
        duration: 0.2,
        ease: "linear"
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        autoAlpha: 0,
        duration: 0.2,
        ease: "linear"
      });
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      this.svg.style.setProperty('--x', Math.round(this.pos.x - this.svgRect.left) + 'px');
      this.svg.style.setProperty('--y', Math.round(this.pos.y - this.svgRect.top) + 'px');
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;
      document.documentElement.addEventListener('mousemove', function (e) {
        _this.e_mousemove(e);
      });
      //this.el.addEventListener('mouseleave', (e)=>{ this.e_mouseleaveFooter(e)});
      this.cursor;
      window.addEventListener('scroll', function (e) {
        _this.e_scroll(e);
      });
      window.addEventListener('resize', function (e) {
        _this.e_resize(e);
      });
      this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
      this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mousemove",
    value: function e_mousemove(e) {
      this.show();
      this.pos = {
        x: e.clientX,
        y: e.clientY
      };
      //this.updatePosition();
    }
  }, {
    key: "e_mousenter",
    value: function e_mousenter() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        scale: 10.1666666667,
        duration: 0.3,
        ease: "expoScale(0.5,7,none)"
      });
    }
  }, {
    key: "e_mouseleave",
    value: function e_mouseleave() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#footerSvg_circle', {
        scale: 1,
        duration: 0.3,
        ease: "expoScale(0.5,7,none)"
      });
    }
  }, {
    key: "e_scroll",
    value: function e_scroll(e) {
      this.hide();
      this.svgRect = this.svgWrapper.getBoundingClientRect();
    }
  }, {
    key: "e_resize",
    value: function e_resize(e) {
      this.hide();
      this.svgRect = this.svgWrapper.getBoundingClientRect();
    }
  }, {
    key: "e_mouseleaveFooter",
    value: function e_mouseleaveFooter() {
      this.hide();
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.footer';
    }
  }]);
  return Footer;
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/header.js":
/*!***************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/header.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Header = /*#__PURE__*/function () {
  function Header(el) {
    _classCallCheck(this, Header);
    this.el = el;
    this.setEvents();
    if (!document.body.classList.contains('home')) _classes_InView__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(this.el);
  }
  _createClass(Header, [{
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
  }], [{
    key: "selector",
    get: function get() {
      return '.header';
    }
  }]);
  return Header;
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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var HomeIntro = /*#__PURE__*/function () {
  function HomeIntro(el) {
    _classCallCheck(this, HomeIntro);
    //return;
    this.el = el;
    this.body = document.querySelector('body');
    this.header = document.querySelector('.header');
    this.homeVideo = document.querySelector('.homeVideo');
    this.stars = document.querySelector('.homeIntro__stars');

    //shapes
    this.poly = this.el.querySelector('#poly');
    this.moon = this.el.querySelector('#moon');

    // title
    this.lines = this.getLines();

    //gsap.ticker.add(this.doOneFrame.bind(this));

    this.setEvents();
    this.lockPage();
    _classes_InView__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(this.el);
  }
  _createClass(HomeIntro, [{
    key: "lockPage",
    value: function lockPage() {
      document.documentElement.scrollTo(0, 0);
      console.log(window.lenis);
      window.lenis.scrollTo({
        target: 0,
        onComplete: function onComplete() {
          console.log('scrollTop');
        }
      });
      window.lenis.stop();
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(this.moon, {
        scale: 0,
        x: '70vw',
        autoAlpha: 0,
        transformOrigin: '50% 50%'
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(this.stars, {
        autoAlpha: 0,
        scale: 0.8,
        transformOrigin: '50% 0%'
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(this.poly, {
        x: '70vw',
        transformOrigin: '60% 60%'
      });
    }
  }, {
    key: "doAnimation",
    value: function doAnimation() {
      var _this = this;
      //

      var main = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({});
      main.to(this.moon, {
        autoAlpha: 1,
        scale: 1,
        x: 0,
        rotate: 0,
        duration: 1,
        ease: "power3.out"
      }, 0);
      main.add(function () {
        _this.el.classList.add('homeIntro--inview');
      }, 1.2);
      main.to(this.poly, {
        x: 0,
        rotate: 0,
        duration: 1.2,
        ease: "power3.out"
      }, 0.1);
      main.to(this.stars, {
        autoAlpha: 1,
        scale: 1,
        duration: 2.5,
        ease: "power3.out"
      }, 0);
      main.eventCallback("onComplete", function () {
        window.lenis.start();
        _classes_InView__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(_this.homeVideo);
        _classes_InView__WEBPACK_IMPORTED_MODULE_0__["default"].addElement(_this.header);
      });
    }
  }, {
    key: "getLines",
    value: function getLines() {
      var lines = [];
      var elements = this.el.querySelectorAll('.homeIntro__titleLine');
      Array.from(elements).forEach(function (element) {
        var line = {};
        line.el = element;
        line.span = element.querySelector('span');
        line.isShow = false;
        lines.push(line);
      });
    }
  }, {
    key: "raf",
    value: function raf() {}
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
      var _this2 = this;
      console.log('inview');
      setTimeout(function () {
        _this2.doAnimation();
      }, 200);
    }
  }, {
    key: "e_resize",
    value: function e_resize(e) {
      this.rect = this.body.getBoundingClientRect();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.homeIntro';
    }
  }]);
  return HomeIntro;
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/homeIntro.old.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/homeIntro.old.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeIntro)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

//import SplitText from "../classes/splitText";
var HomeIntro = /*#__PURE__*/function () {
  function HomeIntro(el) {
    _classCallCheck(this, HomeIntro);
    this.el = el;
    this.body = document.querySelector('body');

    //shapes
    this.poly = this.el.querySelector('#poly');
    this.moon = this.el.querySelector('#moon');

    //stars 
    this.point = this.el.querySelector('.point');
    this.bubble = this.el.querySelector('.bublle');
    this.crushDisc = this.el.querySelector('.crushDisc');
    this.discStar = this.el.querySelector('.discStar');
    this.squareStar = this.el.querySelector('.squareStar');
    this.rect = this.body.getBoundingClientRect();
    this.mouse = {
      x: 0,
      y: 0,
      moved: false
    };

    // Ticker event will be called on every frame
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.ticker.add(this.doOneFrame.bind(this));
    this.setEvents();
  }
  _createClass(HomeIntro, [{
    key: "doOneFrame",
    value: function doOneFrame() {
      if (!this.mouse.moved) return;
      this.parallaxIt(this.moon, 150, 0.2, "power4.out");
      this.parallaxIt(this.poly, 40, 0.2, "power4.out");
      this.parallaxIt('.squareStar', -5, 0.2, "power4.out");
      this.parallaxIt('.bubble', 10, 0.2, "power4.out");
      this.parallaxIt('.crushDisc', 23, 0.2, "power4.out");
      this.parallaxIt('.discStar', -7, 0.2, "power4.out");
      this.parallaxIt('.point', 5, 0.2, "power4.out");
    }
  }, {
    key: "parallaxIt",
    value: function parallaxIt(target, movement, duration, ease) {
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(target, {
        duration: duration,
        ease: ease,
        x: (this.mouse.x - this.rect.width / 2) / this.rect.width * movement,
        y: (this.mouse.y - this.rect.height / 2) / this.rect.height * movement
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this.body.addEventListener('mousemove', this.e_mousemove.bind(this));
      this.body.addEventListener('resize', this.e_resize.bind(this));
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mousemove",
    value: function e_mousemove(e) {
      this.mouse.moved = true;
      this.mouse.x = e.clientX - this.rect.left;
      this.mouse.y = e.clientY - this.rect.top;
    }
  }, {
    key: "e_resize",
    value: function e_resize(e) {
      this.rect = this.body.getBoundingClientRect();
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.homeIntro';
    }
  }]);
  return HomeIntro;
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var HomePurpose = /*#__PURE__*/function () {
  function HomePurpose(el) {
    _classCallCheck(this, HomePurpose);
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.fps(60);
    this.el = el;
    this.body = document.querySelector('body');
    this.svg = this.el.querySelector('#purposeSvg');
    this.svgWrapper = this.el.querySelector('.homePurpose__svgWrapper');
    this.circle = this.el.querySelector('#purposeSvg_circle');
    this.sensible = this.el.querySelector('#purposeSensible');
    this.setRect();
    this.setEvents();
  }
  _createClass(HomePurpose, [{
    key: "setRect",
    value: function setRect() {
      this.svgRect = this.svgWrapper.getBoundingClientRect();
      this.svg.style.setProperty('--left', Math.round(this.svgRect.left) + 'px');
      this.svg.style.setProperty('--top', Math.round(this.svgRect.top) + 'px');
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;
      this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
      this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));
      window.addEventListener('scroll', function (e) {
        _this.e_scroll(e);
      });
      window.addEventListener('resize', function (e) {
        _this.e_resize(e);
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mousenter",
    value: function e_mousenter() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#purposeSvg_circle', {
        scale: 148 / 36,
        duration: 0.3,
        ease: "expoScale(0.5,7,none)"
      });
    }
  }, {
    key: "e_mouseleave",
    value: function e_mouseleave() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('#purposeSvg_circle', {
        scale: 1,
        duration: 0.3,
        ease: "expoScale(0.5,7,none)"
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
  }], [{
    key: "selector",
    get: function get() {
      return '.homePurpose';
    }
  }]);
  return HomePurpose;
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var HomeService = /*#__PURE__*/function () {
  function HomeService(el) {
    var _this = this;
    _classCallCheck(this, HomeService);
    this.el = el;
    this.container = this.el.querySelector('.homeService__cardContainer');
    this.groupSlide = this.el.querySelector('.homeService__groupSlide');
    this.realSection = this.el.querySelector('.homeService__realSize');
    this.allCard = this.el.querySelectorAll('.homeService__cardSlide');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.allCard, {
      "y": 300,
      "x": 100,
      rotate: '35deg',
      autoAlpha: 0
    });
    var intro = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      duration: 1,
      scrollTrigger: {
        trigger: this.el,
        endTrigger: '.homeService__triggerStart',
        start: '-400px',
        markers: true,
        scrub: true,
        id: 'appearing'
      }
    });
    for (var index = 0; index < this.allCard.length; index++) {
      var rotate = '2deg';
      if (index % 2) rotate = '-2deg';
      if (index === 1) rotate = '-1deg';
      var y = -25 * index * index / 3.5;
      if (index === 0) rotate = 0;
      intro.to(this.allCard[index], {
        autoAlpha: 1,
        duration: 0.2
      }, 0.50 * index);
      intro.to(this.allCard[index], {
        "y": y,
        "x": 0,
        rotate: rotate,
        duration: 2,
        ease: "power3.out"
      }, 0.50 * index);
    }
    var main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      scrollTrigger: {
        trigger: '.homeService__triggerStart',
        endTrigger: '.homeService__triggerEnd',
        start: 'top',
        end: "100vh",
        scrub: true,
        pin: '.homeService__pin'
        //id:'animation',
        //markers: true
      }
    }).to(this.groupSlide, {
      x: function x() {
        return -(_this.realSection.offsetWidth - _this.container.offsetWidth);
      },
      ease: 'none',
      autoAlpha: 1,
      duration: 2
    }, 0);
    for (var _index = 0; _index < this.allCard.length; _index++) {
      main.to(this.allCard[_index], {
        "y": 0,
        duration: 0.8
      }, 0.15 * _index);
      main.to(this.allCard[_index], {
        rotate: 0,
        duration: 0.8,
        ease: "power2.out"
      }, 0.15 * _index);
    }
  }
  _createClass(HomeService, null, [{
    key: "selector",
    get: function get() {
      return '.homeService';
    }
  }]);
  return HomeService;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var homeTransformation = /*#__PURE__*/function () {
  function homeTransformation(el) {
    _classCallCheck(this, homeTransformation);
    this.el = el;
    this.circle = this.el.querySelector('#tr_circle');
    this.path = this.el.querySelector('#tr_path');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_1__.MotionPathPlugin, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle, {
      scale: 0.2
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle, {
      autoAlpha: 0
    });
    var main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      scrollTrigger: {
        trigger: this.el,
        start: 'top-=400',
        end: "+=" + "100%",
        scrub: true
        //pin: true,
      }
    }).to(this.circle, {
      duration: 2,
      ease: "linear",
      motionPath: {
        path: "#tr_path",
        align: "#tr_path",
        autoRotate: true,
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
  _createClass(homeTransformation, [{
    key: "setEvents",
    value: function setEvents() {}

    /**
     * Handlers
     */
  }, {
    key: "e_error",
    value: function e_error(e) {}
  }], [{
    key: "selector",
    get: function get() {
      return '.homeTransformation';
    }
  }]);
  return homeTransformation;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var HomeVideo = /*#__PURE__*/function () {
  function HomeVideo(el) {
    _classCallCheck(this, HomeVideo);
    this.el = el;
    this.video = el.querySelector('.homeVideo__video');
    //inview.addElement(this.el);
    this.setEvents();
  }
  _createClass(HomeVideo, [{
    key: "setEvents",
    value: function setEvents() {
      this.el.addEventListener('inView', this.e_inview.bind(this));
      this.video.addEventListener('playing', this.e_playing.bind(this));
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
  return HomeVideo;
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
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

// import Swiper styles

var ImagesSlider = /*#__PURE__*/function () {
  function ImagesSlider(el) {
    _classCallCheck(this, ImagesSlider);
    this.el = el;
    this.wrapper = el.querySelector('.imagesslider__wrapper');
    this.items = el.querySelectorAll('.imagesslider__item');
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoHeight: true,
      slidesPerView: 'auto',
      spaceBetween: 35,
      //centeredSlides : true,
      //centerInsufficientSlides : true,
      grabCursor: true
    });
    console.log(this.swiper);
  }
  _createClass(ImagesSlider, [{
    key: "setEvents",
    value: function setEvents() {}

    /**
     * Handlers
     */
  }, {
    key: "e_error",
    value: function e_error(e) {}
  }], [{
    key: "selector",
    get: function get() {
      return '.imagesslider';
    }
  }]);
  return ImagesSlider;
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/menu.js":
/*!*************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/menu.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Menu = /*#__PURE__*/function () {
  function Menu(el) {
    _classCallCheck(this, Menu);
    this.el = el;

    //this.setEvents();
  }

  /**
   * Handlers
   */
  _createClass(Menu, [{
    key: "e_error",
    value: function e_error(e) {}
  }], [{
    key: "selector",
    get: function get() {
      return '.header__menu';
    }
  }]);
  return Menu;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


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
  _createClass(OurClients, [{
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
      this.container.addEventListener('mouseleave', function (e) {
        //this.timer = this.getTimer();
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
  return OurClients;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var PageClient = /*#__PURE__*/function () {
  function PageClient(el) {
    _classCallCheck(this, PageClient);
    this.el = el;
    this.intro = new _clientIntro__WEBPACK_IMPORTED_MODULE_1__["default"](this.el.querySelector('.clientIntro'));
    this.number = new _clientNumbers__WEBPACK_IMPORTED_MODULE_2__["default"](this.el.querySelector('.clientNumbers'));
    this.globe = new _Globe__WEBPACK_IMPORTED_MODULE_0__["default"](this.el.querySelector('.globe'));
    this.setEvents();
  }
  _createClass(PageClient, [{
    key: "setEvents",
    value: function setEvents() {
      window.addEventListener("resize", this.e_resize.bind(this));
    }
  }, {
    key: "e_resize",
    value: function e_resize(e) {
      this.intro.e_resize();
      this.number.e_resize();
      this.globe.e_resize();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.pageclient';
    }
  }]);
  return PageClient;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ServiceCard = /*#__PURE__*/function () {
  function ServiceCard(el) {
    _classCallCheck(this, ServiceCard);
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
  _createClass(ServiceCard, [{
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
  return ServiceCard;
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/main.js":
/*!**************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _whitecube_pluton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @whitecube/pluton */ "./node_modules/@whitecube/pluton/pluton.min.js");
/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @studio-freight/lenis */ "./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _classes_cursor_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/cursor/index */ "./wp-content/themes/mojo-v2/src/js/classes/cursor/index.js");
/* harmony import */ var _classes_MobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/MobileMenu */ "./wp-content/themes/mojo-v2/src/js/classes/MobileMenu.js");
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//import MobileMenu from './classes/MobileMenu';







var Mojo = /*#__PURE__*/function () {
  function Mojo() {
    _classCallCheck(this, Mojo);
    this.initCursor();
    this.inview = _classes_InView__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.mobileMenu = new _classes_MobileMenu__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.parts = new _whitecube_pluton__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  _createClass(Mojo, [{
    key: "initCursor",
    value: function initCursor() {
      var options = {
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
      this.cursor = new _classes_cursor_index__WEBPACK_IMPORTED_MODULE_1__["default"]('.cursor', options).initialize();
    }
  }]);
  return Mojo;
}();
var scrollSetup = function scrollSetup() {
  window.lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_4__["default"]({
    lerp: 0.13
  });
  function raf(time) {
    window.lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  gsap__WEBPACK_IMPORTED_MODULE_5__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger);
  window.lenis.on('scroll', gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.update);
  gsap__WEBPACK_IMPORTED_MODULE_5__["default"].ticker.add(function (time) {
    window.lenis.raf(time * 1000);
  });
  gsap__WEBPACK_IMPORTED_MODULE_5__["default"].ticker.lagSmoothing(0);
};
window.addEventListener("DOMContentLoaded", function (event) {
  scrollSetup();
  window.MJ = new Mojo();
  window.document.documentElement.classList.add('js-active');
});

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

/***/ "./wp-content/themes/mojo-v2/src/scss/main.scss":
/*!******************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/main.scss ***!
  \******************************************************/
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

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss ***!
  \*******************************************************************/
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

/***/ "./wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components sync recursive \\.js$":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/ sync \.js$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ContactForm.js": "./wp-content/themes/mojo-v2/src/js/components/ContactForm.js",
	"./Globe.js": "./wp-content/themes/mojo-v2/src/js/components/Globe.js",
	"./caseCard.js": "./wp-content/themes/mojo-v2/src/js/components/caseCard.js",
	"./clientHover.js": "./wp-content/themes/mojo-v2/src/js/components/clientHover.js",
	"./clientIntro.js": "./wp-content/themes/mojo-v2/src/js/components/clientIntro.js",
	"./clientNumbers.js": "./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js",
	"./clientTypology.js": "./wp-content/themes/mojo-v2/src/js/components/clientTypology.js",
	"./commitmentsEarth.js": "./wp-content/themes/mojo-v2/src/js/components/commitmentsEarth.js",
	"./commitmentsFaq.js": "./wp-content/themes/mojo-v2/src/js/components/commitmentsFaq.js",
	"./commitmentsIntro.js": "./wp-content/themes/mojo-v2/src/js/components/commitmentsIntro.js",
	"./featuredCases.js": "./wp-content/themes/mojo-v2/src/js/components/featuredCases.js",
	"./footer.js": "./wp-content/themes/mojo-v2/src/js/components/footer.js",
	"./footer.old.js": "./wp-content/themes/mojo-v2/src/js/components/footer.old.js",
	"./header.js": "./wp-content/themes/mojo-v2/src/js/components/header.js",
	"./homeIntro.js": "./wp-content/themes/mojo-v2/src/js/components/homeIntro.js",
	"./homeIntro.old.js": "./wp-content/themes/mojo-v2/src/js/components/homeIntro.old.js",
	"./homePurpose.js": "./wp-content/themes/mojo-v2/src/js/components/homePurpose.js",
	"./homeService.js": "./wp-content/themes/mojo-v2/src/js/components/homeService.js",
	"./homeTransformation.js": "./wp-content/themes/mojo-v2/src/js/components/homeTransformation.js",
	"./homeVideo.js": "./wp-content/themes/mojo-v2/src/js/components/homeVideo.js",
	"./imagesslider.js": "./wp-content/themes/mojo-v2/src/js/components/imagesslider.js",
	"./menu.js": "./wp-content/themes/mojo-v2/src/js/components/menu.js",
	"./ourClients.js": "./wp-content/themes/mojo-v2/src/js/components/ourClients.js",
	"./pageClient.js": "./wp-content/themes/mojo-v2/src/js/components/pageClient.js",
	"./serviceCard.js": "./wp-content/themes/mojo-v2/src/js/components/serviceCard.js"
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/blocks/textgallery/textgallery","css/blocks/textimage/textimage","css/blocks/quoteimage/quoteimage","css/blocks/twoimages/twoimages","css/main","css/blocks/imagesslider/imagesslider","css/blocks/fullimage/fullimage","css/blocks/fullblackimage/fullblackimage","/js/vendor"], () => (__webpack_exec__("./wp-content/themes/mojo-v2/src/js/main.js"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/main.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/twoimages.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/textimage.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/fullblackimage.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/fullimage.scss"), __webpack_exec__("./wp-content/themes/mojo-v2/src/scss/blocks/imagesslider.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map