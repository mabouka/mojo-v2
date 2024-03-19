import IsTopMedium from "../classes/IsTopMedium";
import { isMobile } from "../utils/detect"
export default class caseCard {

    static get selector() {
        return '.caseCard';
    }

    constructor(el) {
        this.el = el;
        this.isVideo = el.classList.contains('caseCard--video');

        if(this.isVideo) {
            this.link = this.el.querySelector('.caseCard__link');
            this.video = this.el.querySelector('.caseCard__video');
        }

        if(isMobile()) {
            IsTopMedium.addElement(this.el);
        }
        this.setEvents();
    }
    
    play() {
        this.video.currentTime = 0;
        this.video.play();
    }

    pause() {
        this.video.pause();
        this.video.currentTime = 0;
    }

    /**
     * Events
     */

    setEvents() {
        if(this.isVideo) {
            if(isMobile) {
                this.el.addEventListener('inTopMedium', this.e_inTop.bind(this));
                this.el.addEventListener('outTopMedium', this.e_outTop.bind(this));
            } else{
                this.link.addEventListener('mouseenter', this.e_enter.bind(this));
                this.link.addEventListener('mouseleave', this.e_leave.bind(this));
            }

            this.video.addEventListener('playing', this.e_playing.bind(this));
            this.video.addEventListener('pause', this.e_pause.bind(this));
        }

        this.el.addEventListener('inView', this.e_inview.bind(this))
    }

    e_playing(e) {
        this.el.classList.add('caseCard--playing');
    }

    e_pause(e) {
        this.el.classList.remove('caseCard--playing');
    }

    e_inTop(e) {
        this.play();
    }

    e_outTop(e) {
        this.pause();
    }

    e_enter(e) {
        this.play();
    }

    e_leave(e) {
        this.pause();
    }

    e_inview(e) {
        this.el.classList.add('caseCard--inview')
    }

}