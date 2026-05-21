"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_caseAccordion_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/caseAccordion.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/caseAccordion.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_caseAccordion_js.js.map