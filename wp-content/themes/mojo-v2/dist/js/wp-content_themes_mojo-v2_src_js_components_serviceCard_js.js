"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_serviceCard_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/serviceCard.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/serviceCard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_serviceCard_js.js.map