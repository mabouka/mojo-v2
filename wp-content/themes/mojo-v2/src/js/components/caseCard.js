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
        this.setEvents();
    }

    /**
     * Events
     */

    setEvents() {
        if(this.isVideo) {
            this.link.addEventListener('mouseenter', this.e_enter.bind(this));
            this.link.addEventListener('mouseleave', this.e_leave.bind(this));

            this.el.addEventListener('inCenter', this.e_enter.bind(this));
            this.el.addEventListener('outCenter', this.e_leave.bind(this));
        }
        this.el.addEventListener('inView', this.e_inview.bind(this))
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

    e_inview(e) {
        this.el.classList.add('caseCard--inview')
    }

}