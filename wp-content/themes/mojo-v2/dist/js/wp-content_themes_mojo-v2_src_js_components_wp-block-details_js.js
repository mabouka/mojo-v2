"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_wp-block-details_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/wp-block-details.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/wp-block-details.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_wp-block-details_js.js.map