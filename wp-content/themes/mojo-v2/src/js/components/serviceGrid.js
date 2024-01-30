
import inview from "../classes/InView";
import wait   from "../utils/wait";

export default class ServiceGrid {

    static get selector() {
        return '.serviceGrid';
    }
    
    constructor(el) {
        this.el = el;
        this.items = el.querySelectorAll('.serviceGrid__item');
        this.intro = document.querySelector('.serviceIntro');

        if(this.intro){
            wait(600).then(() => {
                inview.addElement(this.el);
            });
        }
        else{
            inview.addElement(this.el);
        }


        this.setEvents();
    }

    


    setEvents() {
        this.el.addEventListener('inView',this.e_inview.bind(this));

    }

    e_inview() {
        this.el.classList.add('serviceGrid--inview');
    }
 }