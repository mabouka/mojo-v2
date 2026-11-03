import inview from "../classes/InView";

export default class HomeVideo {

    static get selector() {
        return '.homeVideo';
    }

    constructor(el) {
        this.el = el;
        this.video = el.querySelector('.homeVideo__video');

        this.setEvents();
        this.setSource();
    }

    // Une seule source, choisie selon l'écran (même seuil que l'ancien
    // <source media="(max-width: 600px)">). L'autoplay démarre dès qu'elle est posée.
    setSource() {
        const { src, srcMobile } = this.video.dataset;
        const mobile = srcMobile && window.matchMedia('(max-width: 600px)').matches;
        const url = mobile ? srcMobile : src;
        if (!url || this.video.getAttribute('src') === url) return;
        this.video.src = url;
        const play = this.video.play();
        if (play) play.catch(() => {});
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