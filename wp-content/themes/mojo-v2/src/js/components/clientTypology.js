import {gsap} from "gsap";
import isCentered from "../classes/IsCentered";
import { isMouse } from "../utils/detect";
import { playFromStart, stopVideo } from "../utils/hoverVideo";
import Listeners from "../utils/listeners";

export default class ClientTypology {

    static get selector() {
        return '.clientTypology';
    }

    constructor(el) {
        this.el = el;
        this.items = this.getItems();
        this.images = this.el.querySelectorAll('.clientTypology__image');
        this.listeners = new Listeners();
        this.setEvents();
    }

    // Appelé par Pluton en quittant la page (Barba).
    destroy() {
        this.listeners.removeAll();
        this.items.forEach((item) => isCentered.removeElement(item.el));
        gsap.killTweensOf(this.images);
        this.items.forEach((item) => item.video && item.video.pause());
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
        const on = this.listeners.on.bind(this.listeners);
        // Les images suivent la souris verticalement. Avant : une boucle sur le
        // ticker GSAP créait un tween par image, 60 fois par seconde, pour
        // toujours (y compris après avoir quitté la page). quickTo réutilise
        // un seul tween, relancé seulement quand la souris bouge.
        if (isMouse() && !window.matchMedia("(max-width: 600px)").matches && this.images.length) {
            const followY = gsap.quickTo(this.images, "y", { duration: 1, ease: "power1.out" });
            on(this.el, 'mousemove', (e) => followY(e.clientY - window.innerHeight / 2));
        }

        this.items.forEach(item => {
            on(item.el, 'inCenter', () => this.e_inCenter(item));
            on(item.el, 'outCenter', () => this.e_outCenter(item));

            if(item.isVideo) {
                on(item.el, 'mouseenter', () => playFromStart(item.video));
                on(item.el, 'mouseleave', () => stopVideo(item.video));
            }
        })
    }

    /**
     * Handlers
     */

    e_inCenter(item) {
        if(item.isVideo) playFromStart(item.video);
        item.el.classList.add('clientTypology__item--active');
    }

    e_outCenter(item) {
        if(item.isVideo) stopVideo(item.video);
        item.el.classList.remove('clientTypology__item--active');
    }

}
