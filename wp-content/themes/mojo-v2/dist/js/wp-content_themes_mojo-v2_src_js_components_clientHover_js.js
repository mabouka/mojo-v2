"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_clientHover_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/clientHover.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/clientHover.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OurClients)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OurClients = /*#__PURE__*/function () {
  function OurClients(el) {
    _classCallCheck(this, OurClients);
    this.el = el;
    this.container = this.el.querySelector('.clientHover__clients');
    this.clients = this.getClients();
    this.current = 0;
    this.timer = this.getTimer();
    this.active(this.clients[this.current]);
    this.setEvents();
  }
  return _createClass(OurClients, [{
    key: "getTimer",
    value: function getTimer() {
      var _this = this;
      return setInterval(function () {
        _this.current++;
        if (_this.current >= _this.clients.length) {
          _this.current = 0;
        }
        _this.active(_this.clients[_this.current]);
      }, 2000);
    }
  }, {
    key: "getClients",
    value: function getClients() {
      var _this2 = this;
      var els = this.el.querySelectorAll('.client');
      var clients = [];
      els.forEach(function (el, index) {
        var client = {};
        client.index = index;
        client.isActive = false;
        client.key = el.dataset.key;
        client.image = _this2.el.querySelector('.clientHover__image[data-key="' + client.key + '"]');
        client.el = el;
        clients.push(client);
      });
      return clients;
    }
  }, {
    key: "active",
    value: function active(client) {
      if (client.isActive) return;
      this.desactiveAll();
      this.current = client.index;
      client.isActive = true;
      client.image.classList.add('clientHover__image--active');
      client.el.classList.add('client--active');
    }
  }, {
    key: "desactive",
    value: function desactive(client) {
      if (!client.isActive) return;
      client.isActive = false;
      client.image.classList.remove('clientHover__image--active');
      client.el.classList.remove('client--active');
    }
  }, {
    key: "desactiveAll",
    value: function desactiveAll() {
      var _this3 = this;
      this.clients.forEach(function (client) {
        _this3.desactive(client);
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this4 = this;
      this.container.addEventListener('mouseenter', function (e) {
        clearInterval(_this4.timer);
      });
      this.clients.forEach(function (client) {
        client.el.addEventListener('mouseenter', function (e) {
          clearInterval(_this4.timer);
          _this4.e_enter(e, client);
        });
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_enter",
    value: function e_enter(e, client) {
      this.active(client);
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.clientHover';
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_clientHover_js.js.map