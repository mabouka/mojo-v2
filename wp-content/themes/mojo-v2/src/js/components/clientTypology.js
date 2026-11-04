import {gsap} from "gsap";
import isCentered from "../classes/IsCentered";
import { isMouse } from "../utils/detect";

export default class ClientTypology {

    static get selector() {
        return '.clientTypology';
    }

    constructor(el) {
        this.el = el;
        this.items = this.getItems();
        this.images = this.el.querySelectorAll('.clientTypology__image');
        this.listeners = [];
        this.setEvents();
    }

    // Appelé par Pluton en quittant la page (Barba).
    destroy() {
        this.listeners.forEach(([target, type, fn]) => target.removeEventListener(type, fn));
        this.listeners = [];
        gsap.killTweensOf(this.images);
        this.items.forEach((item) => item.video && item.video.pause());
    }

    on(target, type, fn) {
        target.addEventListener(type, fn);
        this.listeners.push([target, type, fn]);
    }

    getItems() {
        let elements = this.el.querySelectorAll('.clientTypology__item');
        let items = []
        Array.from(elements).forEach(element => {
            let item = {};
                item.el = element;
                item.isVideo = element.classList.contains('clientTypology__item--video');
                if(item.isVideo) item.video = item.el.querySelector('video');

                isCentered.addElement(item.el);
            items.push(item);
        });

        return items;
    }

    setEvents() {
        // Les images suivent la souris verticalement. Avant : une boucle sur le
        // ticker GSAP créait un tween par image, 60 fois par seconde, pour
        // toujours (y compris après avoir quitté la page). quickTo réutilise
        // un seul tween, relancé seulement quand la souris bouge.
        if (isMouse() && !window.matchMedia("(max-width: 600px)").matches && this.images.length) {
            const followY = gsap.quickTo(this.images, "y", { duration: 1, ease: "power1.out" });
            this.on(this.el, 'mousemove', (e) => followY(e.clientY - window.innerHeight / 2));
        }

        this.items.forEach(item => {
            this.on(item.el, 'inCenter', () => this.e_inCenter(item));
            this.on(item.el, 'outCenter', () => this.e_outCenter(item));

            if(item.isVideo) {
                this.on(item.el, 'mouseenter', () => this.play(item));
                this.on(item.el, 'mouseleave', () => this.stop(item));
            }
        })
    }

    play(item) {
        item.video.currentTime = 0;
        // play() renvoie une promesse rejetée si la lecture est interrompue
        // (survol très bref) : sans catch, erreur dans la console.
        const playing = item.video.play();
        if (playing && playing.catch) playing.catch(() => {});
    }

    stop(item) {
        item.video.pause();
        item.video.currentTime = 0;
    }

    /**
     * Handlers
     */

    e_inCenter(item) {
        if(item.isVideo) this.play(item);
        item.el.classList.add('clientTypology__item--active');
    }

    e_outCenter(item) {
        if(item.isVideo) this.stop(item);
        item.el.classList.remove('clientTypology__item--active');
    }

}
