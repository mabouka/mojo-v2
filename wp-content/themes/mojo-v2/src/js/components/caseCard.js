
export default class caseCard {

    static get selector() {
        return '.caseCard--video';
    }

    constructor(el) {
        this.el = el;
        this.link = this.el.querySelector('.caseCard__link');
        this.video = this.el.querySelector('.caseCard__video');
        this.setEvents();
    }

    /**
     * Events
     */

    setEvents() {
        this.link.addEventListener('mouseenter', this.e_enter.bind(this));
        this.link.addEventListener('mouseleave', this.e_leave.bind(this));
    }

    e_enter(e) {
        console.log('enter');
        this.video.currentTime = 0;
        this.video.play();
        this.el.classList.add('caseCard--playing');
    }

    e_leave(e) {
        this.video.pause();
        this.video.currentTime = 0;
        this.el.classList.remove('caseCard--playing');
    }

}