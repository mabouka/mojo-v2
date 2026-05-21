"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_featuredCases_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/featuredCases.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/featuredCases.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ featuredCases)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var featuredCases = /*#__PURE__*/function () {
  function featuredCases(el) {
    _classCallCheck(this, featuredCases);
    this.el = el;
    this.gallery = this.el.querySelector('.featuredCases__gallery');
    this.videos = this.getVideos();
    this.setEvents();
  }
  return _createClass(featuredCases, [{
    key: "getVideos",
    value: function getVideos() {
      var _this = this;
      var videos = [];
      var links = this.el.querySelectorAll('.featuredCases__caseLink, .featuredCases__galleryItem');
      Array.from(links).forEach(function (link) {
        var el = {};
        el.link = link;
        el.target = link.dataset.hoverTarget;
        el.videoContainer = _this.el.querySelector(el.target);
        el.video = el.videoContainer.querySelector("video");
        videos.push(el);
      });
      return videos;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;
      this.videos.forEach(function (video) {
        video.link.addEventListener('mouseover', function (e) {
          _this2.e_mouseEnter(e, video);
        });
        video.link.addEventListener('mouseleave', function (e) {
          _this2.e_mouseLeave(e, video);
        });
      });
    }

    /**
     * Handlers
     */
  }, {
    key: "e_mouseEnter",
    value: function e_mouseEnter(e, video) {
      if (video.video) video.video.currentTime = 0;
      video.videoContainer.classList.add('featuredCases__video--active');
      video.link.classList.add('featuredCases__caseLink--active');
      this.gallery.classList.add('featuredCases__gallery--hovered');
      if (video.video) video.video.play();
    }
  }, {
    key: "e_mouseLeave",
    value: function e_mouseLeave(e, video) {
      video.videoContainer.classList.remove('featuredCases__video--active');
      video.link.classList.remove('featuredCases__caseLink--active');
      this.gallery.classList.remove('featuredCases__gallery--hovered');
      if (video.video) video.video.pause();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.featuredCases';
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_featuredCases_js.js.map