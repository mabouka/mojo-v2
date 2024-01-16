
import inview from "../classes/InView";

export default class Header {

    static get selector() {
        return '.header';
    }

    constructor(el) {
        this.el = el;
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