"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_casesGrid_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/casesGrid.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/casesGrid.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ casesGrid)
/* harmony export */ });
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_InView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/InView */ "./wp-content/themes/mojo-v2/src/js/classes/InView.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/wait */ "./wp-content/themes/mojo-v2/src/js/utils/wait.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var casesGrid = /*#__PURE__*/function () {
  function casesGrid(el) {
    var _this = this;
    _classCallCheck(this, casesGrid);
    this.el = el;
    this.filters = this.getFilters();
    this.form = this.el.querySelector('.casesGrid__form');
    this.cases = this.el.querySelectorAll('.caseCard');
    var fadeTransition = document.querySelector('.fadeTransitionEntered');
    if (fadeTransition) {
      Array.from(this.cases).forEach(function (item) {
        _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(item);
      });
    } else {
      (0,_utils_wait__WEBPACK_IMPORTED_MODULE_2__["default"])(400).then(function () {
        Array.from(_this.cases).forEach(function (item) {
          _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(item);
        });
      });
      (0,_utils_wait__WEBPACK_IMPORTED_MODULE_2__["default"])(800).then(function () {
        _classes_InView__WEBPACK_IMPORTED_MODULE_1__["default"].addElement(_this.form);
      });
    }
    this.setEvents();
  }
  return _createClass(casesGrid, [{
    key: "getFilters",
    value: function getFilters() {
      var _this2 = this;
      var elements = this.el.querySelectorAll('.casesGrid__filter');
      var filters = [];
      Array.from(elements).forEach(function (element) {
        var filter = {};
        filter.el = element;
        filter.label = element.querySelector('.casesGrid__filterLabel');
        filter.select = element.querySelector('.casesGrid__filterSelect');
        filter.ddLinks = _this2.getDDLinks(filter);
        filter.isShow = false;
        filters.push(filter);
      });
      return filters;
    }
  }, {
    key: "getDDLinks",
    value: function getDDLinks(filter) {
      var links = [];
      var elements = filter.el.querySelectorAll('.casesGrid__dropDownLink');
      elements.forEach(function (el) {
        var link = {};
        link.isActive = false;
        link.el = el;
        link.slug = el.dataset.slug;
        link.filter = filter;
        if (link.slug === filter.select.value) {
          link.el.classList.add('casesGrid__dropDownLink--active');
        }
        links.push(link);
      });
      return links;
    }
  }, {
    key: "getFormUrl",
    value: function getFormUrl() {
      var params = new URLSearchParams(new FormData(this.form)).toString();
      var actionUrl = this.form.getAttribute('action');
      return actionUrl + '?' + params;
    }
  }, {
    key: "refreshPage",
    value: function refreshPage() {
      _barba_core__WEBPACK_IMPORTED_MODULE_0___default().go(this.getFormUrl());
    }
  }, {
    key: "toggleLink",
    value: function toggleLink(link) {
      if (link.isActive) this.desactiveLink(link);else this.activeLink(link);
      this.refreshPage();
    }
  }, {
    key: "activeLink",
    value: function activeLink(link) {
      if (link.isActive) return;
      this.desactiveAllLink(link.filter);
      link.isActive = true;
      link.el.classList.add('casesGrid__dropDownLink--active');
      link.filter.select.value = link.slug;
    }
  }, {
    key: "desactiveLink",
    value: function desactiveLink(link) {
      if (!link.isActive) return;
      link.isActive = false;
      link.el.classList.remove('casesGrid__dropDownLink--active');
      link.filter.select.value = '';
    }
  }, {
    key: "desactiveAllLink",
    value: function desactiveAllLink(filter) {
      var _this3 = this;
      filter.ddLinks.forEach(function (link) {
        if (link.isActive) _this3.desactiveLink(link, filter);
      });
    }

    /**
     * Events
     */
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this4 = this;
      this.filters.forEach(function (filter) {
        filter.label.addEventListener('click', function (e) {
          _this4.e_clickLabel(e, filter);
        });
        filter.ddLinks.forEach(function (link) {
          link.el.addEventListener('click', function (e) {
            _this4.e_clickDDLink(e, link, filter);
          });
        });
        filter.select.addEventListener('change', _this4.e_selectChange.bind(_this4));
      });
      this.form.addEventListener('submit', this.e_submit.bind(this));
      this.form.addEventListener('inView', this.e_inviewForm.bind(this));
    }
  }, {
    key: "e_clickLabel",
    value: function e_clickLabel(e, filter) {}
  }, {
    key: "e_clickDDLink",
    value: function e_clickDDLink(e, link, filter) {
      e.preventDefault();
      this.toggleLink(link, filter);
    }
  }, {
    key: "e_selectChange",
    value: function e_selectChange(e) {
      //this.form.submit();
      this.refreshPage();
    }
  }, {
    key: "e_submit",
    value: function e_submit(e) {
      e.preventDefault();
      this.refreshPage();
    }
  }, {
    key: "e_inviewForm",
    value: function e_inviewForm(e) {
      this.form.classList.add('casesGrid__form--inview');
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.casesGrid';
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
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_casesGrid_js.js.map