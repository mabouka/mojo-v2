"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_ContactForm_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/ContactForm.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/ContactForm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contactform)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Contactform = /*#__PURE__*/function () {
  function Contactform(el) {
    var _this = this;
    _classCallCheck(this, Contactform);
    this.el = el;
    this.isLead = this.el.classList.contains('contact--lead');
    this.svg = this.el.querySelector('.contact__svg');
    this.fields = this.el.querySelectorAll(".wpcf7-validates-as-required");
    this.radios = this.el.querySelectorAll("input[type='radio']");
    this.fileLabel = this.el.querySelector('.field--file label');
    this.fileInput = this.el.querySelector('.field--file input');
    this.form = this.el.querySelector(".wpcf7-form");
    /*
    if(this.form && this.isLead){
        let url = this.form.action;
            url = url.includes("#") ? url.substring(0, url.indexOf("#")) : url;
            url += "#contactForm";
        this.form.action = url
    }
    */

    if (this.form && this.isLead && this.form.classList.contains('sent')) {
      setTimeout(function () {
        window.lenis.scrollTo(_this.el, {
          duration: 0
        });
      }, 200);
    }
    this.captchaFields = this.el.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');
    this.form.removeAttribute("novalidate");
    var filesEl = document.createElement("div");
    filesEl.classList.add('files');
    var container = this.el.querySelector('.field--file .field__label');
    container.appendChild(filesEl);
    this.fields.forEach(function (field) {
      field.setAttribute("required", "required");
    });
    this.radios.forEach(function (radio) {
      radio.setAttribute("required", "required");
    });
    this.main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      scrollTrigger: {
        trigger: this.el,
        start: "top top",
        end: "bottom",
        scrub: true
      }
    }).to(this.svg, {
      y: function y() {
        return 700;
      },
      ease: 'none',
      duration: 2
    }, 0);
    this.setEvents();
  }
  return _createClass(Contactform, [{
    key: "showFiles",
    value: function showFiles(files) {
      var _this2 = this;
      var el = this.el.querySelector('.files');
      el.innerHTML = '';
      Array.from(files).forEach(function (file, index) {
        var item = document.createElement("div");
        item.classList.add('files__item');
        item.innerText = file.name;
        var removeLink = document.createElement("a");
        removeLink.classList.add('files__itemRemove');
        removeLink.innerText = 'Remove file';
        removeLink.setAttribute("href", "#");
        item.appendChild(removeLink);
        removeLink.addEventListener('click', function (e) {
          _this2.e_removeFile(e, index);
        });
        el.appendChild(item);
      });
    }
  }, {
    key: "removeFileFromFileList",
    value: function removeFileFromFileList(input, index) {
      var dt = new DataTransfer();
      var files = input.files;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (index !== i) dt.items.add(file); // here you exclude the file. thus removing it.
      }
      input.files = dt.files; // Assign the updates list

      this.showFiles(input.files);
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this._boundSendForm = this.e_sendForm.bind(this);
      this._boundSubmit = this.e_submit.bind(this);
      this._boundFileChange = this.e_fileChange.bind(this);
      window.removeEventListener('sendForm', this._boundSendForm);
      window.addEventListener('sendForm', this._boundSendForm);
      this.form.addEventListener('submit', this._boundSubmit);
      this.fileInput.addEventListener('change', this._boundFileChange);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('sendForm', this._boundSendForm);
      this.form.removeEventListener('submit', this._boundSubmit);
      this.fileInput.removeEventListener('change', this._boundFileChange);
    }
  }, {
    key: "e_removeFile",
    value: function e_removeFile(e, index) {
      e.preventDefault();
      this.removeFileFromFileList(this.fileInput, index);
    }
  }, {
    key: "e_fileChange",
    value: function e_fileChange(e) {
      var files = this.fileInput.files;
      this.showFiles(files);
    }
  }, {
    key: "e_sendForm",
    value: function e_sendForm(e) {
      if (this._submitting) return;
      if (e.detail.token) {
        var token = e.detail.token;
        Array.from(this.captchaFields).forEach(function (field) {
          field.setAttribute("value", token);
        });
        this.form.submit();
      }
    }
  }, {
    key: "e_submit",
    value: function e_submit(e) {
      var _this3 = this;
      e.preventDefault();
      if (this._submitting) return;
      this._submitting = true;
      var submit = this.form.querySelector('[type="submit"]');
      if (submit) submit.disabled = true;
      grecaptcha.ready(function () {
        grecaptcha.execute(window.recaptchaKey, {
          action: 'submit'
        }).then(function (token) {
          Array.from(_this3.captchaFields).forEach(function (field) {
            field.setAttribute("value", token);
          });
          _this3.form.submit();
        })["catch"](function () {
          _this3._submitting = false;
          if (submit) submit.disabled = false;
        });
      });
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.contact';
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_ContactForm_js.js.map