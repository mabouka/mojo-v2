import gsap from "gsap";
import { isMouse } from "../utils/detect";
import Listeners from "../utils/listeners";

// Carte de service : s'incline vers la souris pendant le survol.
// Avant : chaque carte réécrivait son style à chaque frame, même au repos, et
// relisait sa position à chaque défilement, pour toujours (aussi après avoir
// quitté la page). La boucle ne tourne plus que pendant le survol.
export default class ServiceCard {

    static get selector() {
        return '.serviceCard--animated';
    }

    constructor(el) {
        this.el = el;
        this.listeners = new Listeners();
        // Le test d'origine, matchMedia("any-pointer: coarse") sans parenthèses,
        // n'était jamais vrai : l'effet s'installait aussi sur les écrans tactiles.
        if (!isMouse()) return;

        this.pos = { x: 0, y: 0 };
        this.tick = this.tick.bind(this);
        this.listeners.on(this.el, 'mouseenter', this.e_mouseenter.bind(this));
        this.listeners.on(this.el, 'mousemove', this.e_mousemove.bind(this));
        this.listeners.on(this.el, 'mouseleave', this.e_mouseleave.bind(this));
    }

    // Appelé par Pluton en quittant la page (Barba).
    destroy() {
        this.listeners.removeAll();
        gsap.ticker.remove(this.tick);
    }

    tick() {
        // Position relue une fois par frame, seulement pendant le survol (la
        // page peut défiler sous la souris).
        const bounds = this.el.getBoundingClientRect();
        const center = {
            x: this.pos.x - bounds.x - bounds.width / 2,
            y: this.pos.y - bounds.y - bounds.height / 2
        };
        // Au moins 1 : souris pile au centre, log(0) donnait -Infinity.
        const distance = Math.max(1, Math.sqrt(center.x ** 2 + center.y ** 2));

        this.el.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance) * 2}deg
            )
        `;
    }

    /**
     * Handlers
     */

    e_mouseenter(e) {
        this.pos = { x: e.clientX, y: e.clientY };
        gsap.ticker.add(this.tick);
    }

    e_mousemove(e) {
        this.pos = { x: e.clientX, y: e.clientY };
    }

    e_mouseleave() {
        gsap.ticker.remove(this.tick);
        this.el.style.transform = '';
    }
}
