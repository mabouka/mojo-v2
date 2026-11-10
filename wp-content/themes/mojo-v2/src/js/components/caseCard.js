import IsTopMedium from "../classes/IsTopMedium";
import { isMouse } from "../utils/detect";
import { playFromStart, stopVideo } from "../utils/hoverVideo";
import Listeners from "../utils/listeners";

export default class caseCard {

    static get selector() {
        return '.caseCard';
    }

    constructor(el) {
        this.el = el;
        this.listeners = new Listeners();
        this.isVideo = el.classList.contains('caseCard--video');
        // Vidéo au survol avec une souris, au défilement sinon. Décidé par le
        // pointeur et non par la largeur : sur iPad (plus de 600 px, tactile),
        // seul le survol était branché et la vidéo ne jouait jamais.
        this.hover = isMouse();

        if(this.isVideo) {
            this.link = this.el.querySelector('.caseCard__link');
            this.video = this.el.querySelector('.caseCard__video');
            if (!this.video) this.isVideo = false;
        }

        if(this.isVideo && !this.hover) {
            IsTopMedium.addElement(this.el);
        }
        this.setEvents();
    }

    destroy() {
        this.listeners.removeAll();
        IsTopMedium.removeElement(this.el);
        if (this.isVideo) this.video.pause();
    }

    /**
     * Events
     */

    setEvents() {
        const on = this.listeners.on.bind(this.listeners);
        if(this.isVideo) {
            if(!this.hover) {
                on(this.el, 'inTopMedium', () => playFromStart(this.video));
                on(this.el, 'outTopMedium', () => stopVideo(this.video));
            } else {
                on(this.link, 'mouseenter', () => playFromStart(this.video));
                on(this.link, 'mouseleave', () => stopVideo(this.video));
            }

            on(this.video, 'playing', () => this.el.classList.add('caseCard--playing'));
            on(this.video, 'pause', () => this.el.classList.remove('caseCard--playing'));
        }

        on(this.el, 'inView', () => this.el.classList.add('caseCard--inview'));
    }

}
