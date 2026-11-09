import inview from "../classes/InView";

export default class HomeVideo {

    static get selector() {
        return '.homeVideo';
    }

    constructor(el) {
        this.el = el;
        this.video = el.querySelector('.homeVideo__video');
        this.e_inview = this.e_inview.bind(this);
        this.e_playing = this.e_playing.bind(this);

        this.setEvents();
        this.setSource();
    }

    // Une seule source, choisie selon l'écran (même seuil que l'ancien
    // <source media="(max-width: 600px)">) et le format : MP4 si le navigateur
    // lit le HEVC, sinon WebM (VP9). Si le fichier choisi échoue quand même,
    // on passe à l'autre. L'autoplay démarre dès que la source est posée.
    setSource() {
        const d = this.video.dataset;
        const mobile = window.matchMedia('(max-width: 600px)').matches;
        const mp4 = (mobile && d.srcMobile) || d.src;
        const webm = (mobile && d.srcMobileWebm) || d.srcWebm;
        const hevc = this.video.canPlayType('video/mp4; codecs="hvc1.1.6.L93.B0"') !== '';
        this.sources = (hevc ? [mp4, webm] : [webm, mp4]).filter(Boolean);

        this._onError = () => this.nextSource();
        this.video.addEventListener('error', this._onError);
        this.nextSource();
    }

    nextSource() {
        const url = this.sources.shift();
        if (!url) return;
        this.video.src = url;
        const play = this.video.play();
        if (play) play.catch(() => {});
    }

    destroy() {
        this.removeEvents();
        if (this._onError) this.video.removeEventListener('error', this._onError);
        this.video.pause();
    }

    setEvents() {
        this.el.addEventListener('inView', this.e_inview)
        this.video.addEventListener('playing', this.e_playing)
    }

    removeEvents() {
        this.el.removeEventListener('inView', this.e_inview)
        this.video.removeEventListener('playing', this.e_playing)
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