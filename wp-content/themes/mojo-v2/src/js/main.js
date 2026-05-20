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
    try {
        window.scroller = new Scroller();
    } catch(e) {
        console.error('[mojo] Scroller init failed:', e);
    }
    try {
        window.MJ = new Mojo();
    } catch(e) {
        console.error('[mojo] Mojo init failed:', e);
    }
}

// Polyfill: fire immediately if DOMContentLoaded already fired (can happen when
// scripts are deferred or webpack's O() defers the entry callback past the event).
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}
