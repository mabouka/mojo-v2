
import inview from "../classes/InView";

export default class Header {

    constructor(el) {
        this.el = document.querySelector('.header');
        if(!this.el) return;
        this.setEvents();
        if(! document.body.classList.contains('home')) inview.addElement(this.el);
    }

    setEvents() {
        this.el.addEventListener('inView', this.e_inview.bind(this))
    }

    /**
     * Handlers
     */

    e_inview(e) {
        this.el.classList.add('header--inview')
    }

}