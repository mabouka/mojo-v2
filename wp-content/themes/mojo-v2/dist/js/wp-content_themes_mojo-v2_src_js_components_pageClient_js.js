"use strict";
(self["webpackChunkmojo_agency"] = self["webpackChunkmojo_agency"] || []).push([["wp-content_themes_mojo-v2_src_js_components_pageClient_js"],{

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


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/clientIntro.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/clientIntro.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIntro)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ClientIntro = /*#__PURE__*/function () {
  function ClientIntro(el) {
    _classCallCheck(this, ClientIntro);
    this.el = el;
    //part 1
    this.circleSection = this.el.querySelector('.clientIntro__circles');
    this.circle1 = this.el.querySelector('#circle1');
    this.circle2 = this.el.querySelector('#circle2');
    this.introText = this.el.querySelectorAll('.clientIntro__svgTitle');

    // part 2
    this.ray = this.el.querySelector('.clientIntro__secondBg');
    this.text = this.el.querySelector('.clientIntro__secondText');
    this.text2 = this.el.querySelector('.clientIntro__secondText2');
    this.launchScroll();

    /*
    this.promise = new Promise((resolve, reject) => {
         this.prepare().then(() => {
            this.doIntro().then(()=>{
                this.launchScroll().then(() => {
                    resolve(this);                   
                })
            })
        })
    });*/
  }
  return _createClass(ClientIntro, [{
    key: "prepare",
    value: function () {
      var _prepare = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              window.lenis.stop();
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle1, {
                x: -(1440 + 550) / 2
              });
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.circle2, {
                x: (1440 + 550) / 2
              });
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.introText, {
                autoAlpha: 0
              });
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function prepare() {
        return _prepare.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "doIntro",
    value: function doIntro() {
      var _this = this;
      this.intro = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
        onComplete: function onComplete() {
          window.lenis.start();
        }
      });
      Array.from(this.introText).forEach(function (text) {
        _this.intro.to(text, {
          autoAlpha: 1,
          //ease: "expoScale(0.5,7,none)",
          duration: 0.5
        }, 0);
      });
      this.intro.to(this.circle1, {
        x: -1440 / 2,
        //ease: "expoScale(0.5,7,none)",
        duration: 0.5
      }, 0.5);
      this.intro.to(this.circle2, {
        x: 1440 / 2,
        //ease: "expoScale(0.5,7,none)",
        duration: 0.5
      }, 0.5);
      return this.intro;
    }
  }, {
    key: "launchScroll",
    value: function () {
      var _launchScroll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var height;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              height = window.innerHeight * 2;
              if (window.innerWidth <= 600) {
                height = window.innerHeight;
              }
              this.main = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
                scrollTrigger: {
                  trigger: this.el,
                  start: 'top',
                  end: '+=' + height,
                  // +=600
                  scrub: true,
                  pin: true,
                  //markers: true,
                  id: "Intro",
                  onUpdate: function onUpdate() {
                    // this.circleSection.style.maxHeight = window.innerHeight + 'px';
                  }
                  //normalizeScroll: true
                  //invalidateOnRefresh: true,
                }
              }).to(this.circle1, {
                duration: 1,
                ease: "power1.out",
                x: 0
              }, 0).to(this.circle2, {
                duration: 1,
                ease: "power1.out",
                x: 0
              }, 0).to(this.circleSection, {
                duration: 2,
                ease: "power2.out",
                maxHeight: 0,
                overwrite: true
              }, 2).from(this.ray, {
                duration: 1.8,
                ease: "expoScale(0.5,7,none)",
                scale: 0.05
              }, 2.2);
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function launchScroll() {
        return _launchScroll.apply(this, arguments);
      }
      return launchScroll;
    }()
    /*
     * Events
     */
  }, {
    key: "e_resize",
    value: function e_resize() {
      if (this.main) {
        this.main.scrollTrigger.refresh();
        this.main.scrollTrigger.update();
      }
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.clientIntro';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientNumbers)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ClientNumbers = /*#__PURE__*/function () {
  function ClientNumbers(el) {
    _classCallCheck(this, ClientNumbers);
    this.el = el;
    this.svg = this.el.querySelector('.clientNumbers__svg');
    this.moon = this.el.querySelector('.clientNumbers__moon');
    this.starsAnimation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      scrollTrigger: {
        trigger: this.el,
        start: "top-=50%",
        end: "bottom",
        scrub: true,
        id: "numbers",
        invalidateOnRefresh: true
      }
    }).to(this.svg, {
      y: function y() {
        return '75vh';
      },
      ease: 'none',
      duration: 2
    }, 0);
  }

  /*
   * Events
   */
  return _createClass(ClientNumbers, [{
    key: "e_resize",
    value: function e_resize(e) {
      this.starsAnimation.scrollTrigger.refresh();
    }
  }], [{
    key: "selector",
    get: function get() {
      //return '.clientNumbers';
    }
  }]);
}();


/***/ }),

/***/ "./wp-content/themes/mojo-v2/src/js/components/pageClient.js":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/mojo-v2/src/js/components/pageClient.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageClient)
/* harmony export */ });
/* harmony import */ var _Globe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globe */ "./wp-content/themes/mojo-v2/src/js/components/Globe.js");
/* harmony import */ var _clientIntro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientIntro */ "./wp-content/themes/mojo-v2/src/js/components/clientIntro.js");
/* harmony import */ var _clientNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientNumbers */ "./wp-content/themes/mojo-v2/src/js/components/clientNumbers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var PageClient = /*#__PURE__*/function () {
  function PageClient(el) {
    _classCallCheck(this, PageClient);
    this.el = el;
    this.intro = new _clientIntro__WEBPACK_IMPORTED_MODULE_1__["default"](this.el.querySelector('.clientIntro'));
    //this.number = new ClientNumbers(this.el.querySelector('.clientNumbers'))
    this.globe = new _Globe__WEBPACK_IMPORTED_MODULE_0__["default"](this.el.querySelector('.globe'));
    /*
    this.intro.promise.then(() => {
        setTimeout(() =>{
            window.lenis.resize();
         },)
     })
    */
    this.setEvents();
  }
  return _createClass(PageClient, [{
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "setEvents",
    value: function setEvents() {
      window.addEventListener("resize", this.e_resize.bind(this));
    }
  }, {
    key: "e_resize",
    value: function e_resize(e) {
      this.intro.e_resize();
      //this.number.e_resize();
      this.globe.e_resize();
    }
  }], [{
    key: "selector",
    get: function get() {
      return '.pageclient';
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=wp-content_themes_mojo-v2_src_js_components_pageClient_js.js.map