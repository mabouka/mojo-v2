import inview from "../classes/InView";

export default class HomeVideo {

    static get selector() {
        return '.homeVideo';
    }

    constructor(el) {
        this.el = el;
        this.video = el.querySelector('.homeVideo__video');

        this.setEvents();
    }

    destroy() {
        this.removeEvents();        
    }

    setEvents() {
        this.el.addEventListener('inView', this.e_inview.bind(this))
        this.video.addEventListener('playing', this.e_playing.bind(this))
    }

    removeEvents() {
        this.el.removeEventListener('inView', this.e_inview.bind(this))
        this.video.removeEventListener('playing', this.e_playing.bind(this))
    }


    /**
     * Handlers
     */

    e_inview(e) {
        this.el.classList.add('homeVideo--inview')
    }

    e_playing(e) {
        this.el.classList.add('homeVideo--playing')
    }

}