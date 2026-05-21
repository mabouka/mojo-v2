"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_ourClients_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/ourClients.js":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/ourClients.js ***!
  \*******************************************************************/
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
    this.container = this.el.querySelector('.ourClients__container');
    this.clients = this.getClients();
    this.current = 0;
    this.timer = this.getTimer();
    this.startCarousel();
    this.active(this.clients[this.current]);
    this.setEvents();
  }
  return _createClass(OurClients, [{
    key: "startCarousel",
    value: function startCarousel() {
      // Marquee CSS-only : on duplique les enfants en JS pour que
      // l'animation @keyframes translateX(-50%) boucle sans saut.
      var wrapper = this.el.querySelector('.ourClients__carouselWrapper');
      if (!wrapper) return;
      var items = Array.from(wrapper.children);
      items.forEach(function (item) {
        var clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        wrapper.appendChild(clone);
      });

      // Active l'animation (gérée par CSS @keyframes)
      wrapper.classList.add('ourClients__carouselWrapper--marquee');
    }
  }, {
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
      var els = this.el.querySelectorAll('.client');
      var clients = [];
      els.forEach(function (el, index) {
        var client = {};
        client.index = index;
        client.isActive = false;
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
      client.el.classList.add('client--active');
    }
  }, {
    key: "desactive",
    value: function desactive(client) {
      if (!client.isActive) return;
      client.isActive = false;
      client.el.classList.remove('client--active');
    }
  }, {
    key: "desactiveAll",
    value: function desactiveAll() {
      var _this2 = this;
      this.clients.forEach(function (client) {
        _this2.desactive(client);
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this3 = this;
      this.container.addEventListener('mouseenter', function (e) {
        clearInterval(_this3.timer);
      });
      this.clients.forEach(function (client) {
        client.el.addEventListener('mouseenter', function (e) {
          clearInterval(_this3.timer);
          _this3.e_enter(e, client);
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
      return '.ourClients';
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_ourClients_js.js.map