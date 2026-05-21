"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_commitmentsIntro_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/commitmentsIntro.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/commitmentsIntro.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_commitmentsIntro_js.js.map