"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_teamGrid_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/teamGrid.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/teamGrid.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./wp-content/themes/mojo-v2/src/js/utils/wait.js":
/*!********************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/utils/wait.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_teamGrid_js.js.map