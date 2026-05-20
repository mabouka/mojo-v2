import gsap         from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile } from './utils/detect';
// Register ScrollTrigger globally at module evaluation time so async-loaded
// chunks (clientIntro, clientNumbers, Globe, etc.) find the plugin without
// each having to register it themselves. Skipped on mobile where scroll
// animations are turned off — chunks will just emit a benign warning.
if (!isMobile()) {
    gsap.registerPlugin(ScrollTrigger);
}

import Pluton       from './classes/Pluton';
import Scroller     from './classes/Scroller';
import Cursor       from './classes/Cursor';
import cursorOption from './classes/cursorOption';
import Menu         from './classes/Menu';
import InView       from './classes/InView';
import InViewCenter       from './classes/IsCentered';

import Router       from './classes/Router';
import Footer       from './classes/Footer';
import Header       from './classes/Header';
//import LazyVideos   from './classes/lazyVideos';

class Mojo {
    constructor() {
        this.inview      = InView;

        this.setupElements();
        this.router      = new Router();
    }

    async setupElements() {
        this.currentView = document.querySelector("[data-barba='container']");
        this.cursorEl    = document.querySelector('.cursor');
        this.header      = new Header();
        this.parts       = Pluton;
        await this.parts.setup();
        this.menu        = Menu.initialize();
        this.footer      = new Footer();
        this.cursor      = new Cursor(this.cursorEl, cursorOption).initialize();
        //this.LazyVideos  = new LazyVideos();
    }
}

function boot() {
    window.document.documentElement.classList.add('js-active');

    // Defer heavy init until after LCP is registered. The browser paints the
    // LCP image first, then we kick off GSAP/Lenis/Barba setup which would
    // otherwise mutate DOM and delay the LCP measurement.
    let started = false;
    const startApp = () => {
        if (started) return;
        started = true;
        window.scroller = new Scroller();
        window.MJ = new Mojo();
    };

    if ('PerformanceObserver' in window) {
        try {
            const obs = new PerformanceObserver(() => {
                obs.disconnect();
                startApp();
            });
            obs.observe({ type: 'largest-contentful-paint', buffered: true });
            setTimeout(startApp, 2000); // safety fallback
        } catch (e) {
            requestAnimationFrame(() => requestAnimationFrame(startApp));
        }
    } else {
        requestAnimationFrame(() => requestAnimationFrame(startApp));
    }
}

// Polyfill: fire immediately if DOMContentLoaded already fired (can happen when
// scripts are deferred or webpack's O() defers the entry callback past the event).
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}
