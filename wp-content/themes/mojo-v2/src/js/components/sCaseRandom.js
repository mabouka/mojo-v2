import inview from "../classes/InView";

export default class sCaseRandom {

    static get selector() {
        return '.sCaseRandom';
    }

    constructor(el) {
        this.el     = el;
        this.items  = el.querySelectorAll('.caseCard');  
        this.items.forEach(item => {
            inview.addElement(item);
        });

        this.setEvents();
    }

    setEvents() {
        this.items.forEach(item => {
            item.addEventListener('inView',(e) => { this.e_inview(e,item); });
        });
    }


    e_inview(e,item) {
        item.classList.add('caseCard--inview');
    }
}