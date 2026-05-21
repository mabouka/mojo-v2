"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_homeTransformation_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/homeTransformation.js":
/*!***************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/homeTransformation.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_homeTransformation_js.js.map