
import inview from "../classes/InView";
import wait   from "../utils/wait";
import isTop  from "../classes/IsTop";

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

        
        const mq = window.matchMedia( "(max-width: 600px) and (any-pointer: coarse)" );

        if(mq.matches){
            this.items.forEach(item => {
                isTop.addElement(item);
            });
        }


        this.setEvents();
    }

    


    setEvents() {
        this.el.addEventListener('inView',this.e_inview.bind(this));
        this.items.forEach(item => {
            item.addEventListener('inTop', (e) => {item.querySelector('.serviceCard').classList.add('swiper-slide-active')});
            item.addEventListener('outTop', (e) => {item.querySelector('.serviceCard').classList.remove('swiper-slide-active')})

        });
    }

    e_inview() {
        this.el.classList.add('serviceGrid--inview');
    }
 }