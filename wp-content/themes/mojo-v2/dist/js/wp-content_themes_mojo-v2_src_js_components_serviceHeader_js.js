"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_serviceHeader_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/serviceHeader.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/serviceHeader.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServiceHeader)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ServiceHeader = /*#__PURE__*/function () {
  function ServiceHeader(el) {
    _classCallCheck(this, ServiceHeader);
    this.el = el;
    this.links = this.el.querySelectorAll('.serviceHeader__navItem');
    this.addEvents();
  }
  return _createClass(ServiceHeader, [{
    key: "addEvents",
    value: function addEvents() {
      var _this = this;
      this.links.forEach(function (link) {
        link.addEventListener('click', function (e) {
          return _this.e_click(e, link);
        });
      });
    }
  }, {
    key: "e_click",
    value: function e_click(e, link) {
      e.preventDefault();
      var targetId = link.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        window.lenis.scrollTo(target, {
          duration: 1.2
        });
      }
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.serviceHeader';
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_serviceHeader_js.js.map