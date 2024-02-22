import IsTopMedium from "../classes/IsTopMedium";

export default class caseCard {

    static get selector() {
        return '.caseCard';
    }

    constructor(el) {
        this.el = el;
        this.isVideo = el.classList.contains('caseCard--video');
        const mq = window.matchMedia( "(max-width: 600px)" );
        if(mq.matches){
            this.isMobile = true;
        } 
        else {
            this.isMobile = false;
        }

        if(this.isVideo) {
            this.link = this.el.querySelector('.caseCard__link');
            this.video = this.el.querySelector('.caseCard__video');
        }

        if(this.isMobile) {
            IsTopMedium.addElement(this.el);
        }
        this.setEvents();
    }

    /**
     * Events
     */

    setEvents() {
        if(this.isMobile) {
            if(this.isVideo) {
                this.el.addEventListener('inTopMedium', this.e_inTop.bind(this));
                this.el.addEventListener('outTopMedium', this.e_outTop.bind(this));
            }


        } else{
            if(this.isVideo) {
                this.link.addEventListener('mouseenter', this.e_enter.bind(this));
                this.link.addEventListener('mouseleave', this.e_leave.bind(this));
            }
        }

        this.el.addEventListener('inView', this.e_inview.bind(this))

    }

    e_inTop(e) {
        this.el.classList.add('caseCard--inTop');
        this.video.currentTime = 0;
        this.video.play();
        this.el.classList.add('caseCard--playing');
    }

    e_outTop(e) {
        this.el.classList.remove('caseCard--inTop');

        this.video.pause();
        this.video.currentTime = 0;
        this.el.classList.remove('caseCard--playing');
    }

    e_enter(e) {
        this.video.currentTime = 0;
        this.video.play();
        this.el.classList.add('caseCard--playing');
    }

    e_leave(e) {
        this.video.pause();
        this.video.currentTime = 0;
        this.el.classList.remove('caseCard--playing');
    }

    e_inview(e) {
        this.el.classList.add('caseCard--inview')
    }

}