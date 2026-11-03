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

    setupElements() {
        this.currentView = document.querySelector("[data-barba='container']");
        this.cursorEl    = document.querySelector('.cursor');
        this.header      = new Header();
        this.parts       = Pluton;
        this.parts.setup(); //only uncomment if you swith off router
        this.menu        = Menu.initialize();
        this.footer      = new Footer();
        this.cursor      = new Cursor(this.cursorEl, cursorOption).initialize();
        //this.LazyVideos  = new LazyVideos();
    }
}

function boot() {
    window.scroller = new Scroller();
    window.MJ = new Mojo();
    window.document.documentElement.classList.add('js-active');
}

// Démarrer juste APRÈS la première peinture : lancé directement sur
// DOMContentLoaded, le navigateur n'affichait rien avant la fin de toute
// l'initialisation (Scroller, Mojo, Pluton…), ce qui retardait FCP et LCP.
// Ce qui ne doit pas apparaître avant le JS est masqué en CSS (.js, data-mounted).
window.addEventListener("DOMContentLoaded", function () {
    let started = false;
    const start = () => {
        if (started) return;
        started = true;
        boot();
    };
    // rAF puis setTimeout : exécuté une fois la frame peinte.
    requestAnimationFrame(() => setTimeout(start, 0));
    // Onglet en arrière-plan : rAF est suspendu, on démarre quand même.
    setTimeout(start, 500);
});
