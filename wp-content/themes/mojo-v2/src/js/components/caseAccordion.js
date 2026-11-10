import {gsap} from "gsap";
import { isMouse } from "../utils/detect";
import { playFromStart, stopVideo } from "../utils/hoverVideo";
import Listeners from "../utils/listeners";

// Liste de cas (pages de service, Engagements) : au survol d'une ligne, son
// image ou sa vidéo apparaît et suit la souris verticalement. Réservé aux
// écrans avec souris : .caseAccordion__image est en display: none ailleurs.
export default class CaseAccordion {

    static get selector() {
        return '.caseAccordion';
    }

    constructor(el) {
        this.el = el;
        this.listeners = new Listeners();
        if (!isMouse()) return;

        this.images = this.el.querySelectorAll('.caseAccordion__image');
        this.videos = [...this.el.querySelectorAll('.caseAccordion__item--video')].map(item => ({
            el: item,
            video: item.querySelector('video'),
        }));
        // L'aperçu des vidéos n'est posé qu'ici : en attribut poster, le
        // navigateur le téléchargeait aussi sur mobile, où il n'est jamais vu.
        this.videos.forEach(({video}) => {
            if (video && video.dataset.poster) video.poster = video.dataset.poster;
        });
        this.setEvents();
    }

    // Appelé par Pluton en quittant la page (Barba).
    destroy() {
        this.listeners.removeAll();
        if (this.images) gsap.killTweensOf(this.images);
        (this.videos || []).forEach(({video}) => video && video.pause());
    }

    setEvents() {
        const on = this.listeners.on.bind(this.listeners);
        // Avant : une boucle sur le ticker GSAP créait un tween par image à
        // chaque frame, pour toujours. quickTo réutilise un seul tween, relancé
        // seulement quand la souris bouge.
        if (this.images.length) {
            const followY = gsap.quickTo(this.images, "y", { duration: 1, ease: "power1.out" });
            on(this.el, 'mousemove', (e) => followY(e.clientY - window.innerHeight / 2));
        }

        // Les vidéos sont en preload="none" : elles commencent à se charger
        // quand la souris entre dans la liste, avant le survol d'une ligne.
        on(this.el, 'mouseenter', () => {
            this.videos.forEach(({video}) => { if (video && video.preload !== 'auto') video.preload = 'auto'; });
        });

        this.videos.forEach(item => {
            if (!item.video) return;
            on(item.el, 'mouseenter', () => playFromStart(item.video));
            on(item.el, 'mouseleave', () => stopVideo(item.video));
        });
    }
}
