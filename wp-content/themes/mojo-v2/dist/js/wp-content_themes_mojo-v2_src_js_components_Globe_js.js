"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_Globe_js"],{

/***/ "./wp-content/themes/mojo-v2/src/js/components/Globe.js":
/*!**************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/Globe.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Globe)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// FIRST APPLE-LIKE EFFECT:
// Sync video with scroll

// ffmpeg -i mojo_globe_01.mov -qscale:v 1  -vf "fps=25,scale=1285:-1" images/globe-1285-%04d.jpg
// `for file in images/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`


var Globe = /*#__PURE__*/function () {
  function Globe(el) {
    var _this = this;
    _classCallCheck(this, Globe);
    this.el = el;
    this.baseUrl = el.dataset.baseUrl;
    this.inside = el.querySelector('.globe__inside');
    this.right = el.querySelector('.globe__right');
    this.canvas = el.querySelector('.globe__anim');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = 1285;
    this.canvas.height = 952;
    this.currentFrame = -1;
    this.firstFrame = 53;
    this.frameCount = 250;
    this.fileType = 'jpg';
    this.anim = {
      frame: 0
    };
    this.check_webp_feature('lossy', function (feature, isSupported) {
      if (isSupported) _this.fileType = 'webp';
      _this.initialize();
    });
  }
  return _createClass(Globe, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;
      this.images = this.getImages();
      this.images[this.anim.frame].image.onload = this.render.bind(this); // render first image

      this.mm = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].matchMedia();
      this.mm.add("(min-width: 601px)", function () {
        _this2.animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(_this2.anim, {
          frame: _this2.images.length - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: _this2.el,
            start: "top-=" + window.innerHeight / 2,
            end: "bottom-=" + window.innerHeight / 8 * 5,
            scrub: true,
            id: "globe-canvas"
            //markers: true,
          },
          onUpdate: function onUpdate(self) {
            _this2.render();
          } // use animation onUpdate instead of scrollTrigger's onUpdate
        });
      });
      this.mm.add("(max-width: 600px)", function () {
        _this2.animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(_this2.anim, {
          frame: _this2.images.length - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: _this2.el,
            start: "top+=" + 200,
            end: "top+=" + window.innerHeight,
            scrub: true,
            id: "globe-canvas"
            //markers: true,
          },
          onUpdate: function onUpdate(self) {
            _this2.render();
          } // use animation onUpdate instead of scrollTrigger's onUpdate
        });
      });
      this.mm.add("(min-width: 601px)", function () {
        var height = 660;
        height = _this2.inside.offsetHeight - _this2.right.offsetHeight;
        _this2.main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
          scrollTrigger: {
            trigger: _this2.el,
            start: "top-=200",
            end: "bottom-=850",
            scrub: true,
            //markers: true,
            id: "globe",
            ease: "none"
          }
        }).to(_this2.right, {
          y: height,
          ease: "none",
          duration: 1
        }, 0);
      });
    }
  }, {
    key: "currentFrame",
    value: function currentFrame(i) {
      i = i.toString().padStart(4, '0');
      return "".concat(this.baseUrl, "globe-1285-").concat(i, ".").concat(this.fileType);
    }
  }, {
    key: "getImages",
    value: function getImages() {
      var _this3 = this;
      var images = [];
      var _loop = function _loop() {
        var item = {};
        item.frameIndex = i, item.src = _this3.getImageUrl(i);
        item.loaded = false;
        item.image = _this3.preloadImage(item.src);
        item.image.onload = function () {
          item.loaded = true;
        };
        setTimeout(function () {
          item.loaded ? _this3.preloadImage(item.src) : null;
        }, 1000);
        setTimeout(function () {
          item.loaded ? _this3.preloadImage(item.src) : null;
        }, 1500);
        images.push(item);
      };
      for (var i = this.firstFrame; i <= this.frameCount; i++) {
        _loop();
      }
      return images;
    }
  }, {
    key: "getImageUrl",
    value: function getImageUrl(index) {
      var paddedIndex = index.toString().padStart(4, '0');
      var url = "".concat(this.baseUrl, "globe-1285-").concat(paddedIndex, ".").concat(this.fileType);
      return url;
    }
  }, {
    key: "preloadImage",
    value: function preloadImage(src) {
      var img = new Image();
      img.src = src;
      return img;
    }

    // check_webp_feature:
    //   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
    //   'callback(feature, isSupported)' will be passed back the detection result (in an asynchronous way!)
  }, {
    key: "check_webp_feature",
    value: function check_webp_feature(feature, callback) {
      var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
      };
      var img = new Image();
      img.onload = function () {
        var result = img.width > 0 && img.height > 0;
        callback(feature, result);
      };
      img.onerror = function () {
        callback(feature, false);
      };
      img.src = "data:image/webp;base64," + kTestImages[feature];
    }
  }, {
    key: "render",
    value: function render(e) {
      try {
        if (this.anim.frame !== this.currentFrame) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.context.drawImage(this.images[this.anim.frame].image, 0, 0);
          this.currentFrame = this.anim.frame;
        }
      } catch (error) {
        console.log(this.images);
        console.error(error);
        console.log('imageError', this.anim.frame);
      }
    }

    /*
     * Events
     */
  }, {
    key: "e_resize",
    value: function e_resize() {
      if (this.main) {
        this.main.scrollTrigger.refresh();
      }
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.globe';
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_Globe_js.js.map