"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_commitmentsFaq_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/commitmentsFaq.js":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/commitmentsFaq.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommitmentsFaq)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CommitmentsFaq = /*#__PURE__*/function () {
  function CommitmentsFaq(el) {
    _classCallCheck(this, CommitmentsFaq);
    this.el = el;
    this.items = this.getItems();
    this.setEvents();
    this.active(this.items[0]);
  }
  return _createClass(CommitmentsFaq, [{
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
}();


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_commitmentsFaq_js.js.map