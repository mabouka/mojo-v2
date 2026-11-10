import Pluton       from './classes/Pluton';
import Scroller     from './classes/Scroller';
import Cursor       from './classes/Cursor';
import cursorOption from './classes/cursorOption';
import Menu         from './classes/Menu';

import Router       from './classes/Router';
import Footer       from './classes/Footer';
import Header       from './classes/Header';
import initYoutubeFacade from './utils/youtubeFacade';
import initAnchorScroll from './utils/anchorScroll';

class Mojo {
    constructor() {
        this.setupElements();
        this.router      = new Router();
    }

    setupElements() {
        this.currentView = document.querySelector("[data-barba='container']");
        this.cursorEl    = document.querySelector('.cursor');
        this.header      = new Header();
        this.parts       = Pluton;
        this.parts.setup(); // premier chargement (Barba n'appelle pas enter)
        this.menu        = Menu.initialize();
        this.footer      = new Footer();
        this.cursor      = new Cursor(this.cursorEl, cursorOption).initialize();
    }
}

function boot() {
    initYoutubeFacade();
    initAnchorScroll();
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
