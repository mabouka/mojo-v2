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
import LazyVideos   from './classes/lazyVideos';

class Mojo {
    constructor() {
        this.inview      = InView;

        this.setupElements();
        this.router      = new Router();
    }

    setupElements() {
        this.currentView = document.querySelector("[data-barba='container']");
        this.cursorEl    = document.querySelector('.cursor');
        this.header      = new Header();
        this.parts       = Pluton;
        this.parts.setup(); //only uncomment if you swith off router
        this.menu        = Menu.initialize();
        this.footer      = new Footer();
        this.cursor      = new Cursor(this.cursorEl, cursorOption).initialize();
        this.LazyVideos  = new LazyVideos();
    }
}

window.addEventListener("DOMContentLoaded", function (event) {
    this.scroller = new Scroller();
    window.MJ = new Mojo();
    window.document.documentElement.classList.add('js-active');
});
