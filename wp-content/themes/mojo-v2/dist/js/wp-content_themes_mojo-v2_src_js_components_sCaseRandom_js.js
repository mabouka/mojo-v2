"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_sCaseRandom_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/sCaseRandom.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/sCaseRandom.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_sCaseRandom_js.js.map