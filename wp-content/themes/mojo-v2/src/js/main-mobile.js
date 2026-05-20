// Mobile-only entry point — does NOT import gsap, lenis, barba, ScrollTrigger.
// Loaded instead of main.js + vendor.js when window.matchMedia('(max-width:600px)').matches
//
// Trade-offs intentionnels:
//  - pas de smooth-scroll Lenis (scroll natif)
//  - pas de transitions Barba entre pages (full reload)
//  - pas d'animations gsap scroll-driven
//  - pas de Footer.js (animations hover gsap — pas de mouse sur mobile)
//  - pas de Cursor.js (cursor custom — pas de mouse)
//
// Les interactions essentielles restent: menu, header, formulaires, lazy images.

import Pluton from './classes/Pluton';
import Menu from './classes/Menu';
import Header from './classes/Header';
import InView from './classes/InView';

// Lenis stub — d'autres modules font window.lenis.stop/start/scrollTo. On garde
// l'API sans charger Lenis. scrollTo bascule vers le scroll natif.
function installLenisStub() {
    const noop = () => {};
    window.lenis = {
        raf: noop,
        stop: noop,
        start: noop,
        resize: noop,
        on: noop,
        off: noop,
        scrollTo(target, opts = {}) {
            const y = typeof target === 'number'
                ? target
                : (target && typeof target.getBoundingClientRect === 'function'
                    ? window.scrollY + target.getBoundingClientRect().top
                    : 0);
            window.scrollTo({ top: y, behavior: opts.immediate ? 'auto' : 'smooth' });
        }
    };
}

class MojoMobile {
    constructor() {
        this.inview = InView;
        this.setupElements();
    }

    async setupElements() {
        this.currentView = document.querySelector("[data-barba='container']");
        this.header = new Header();
        this.parts = Pluton;
        await this.parts.setup();
        this.menu = Menu.initialize();
    }
}

function boot() {
    window.document.documentElement.classList.add('js-active');
    installLenisStub();
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
    window.MJ = new MojoMobile();
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}
