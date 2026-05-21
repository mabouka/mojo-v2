"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_clientNumbers_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_clientNumbers_js.js.map