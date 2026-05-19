
import inview from "../classes/InView";
import wait   from "../utils/wait";
import isTop  from "../classes/IsTop";
import Swiper from "swiper";

export default class ServiceGrid {

    static get selector() {
        return '.serviceGrid';
    }
    
    constructor(el) {
        this.el = el;
        this.isService = this.el.classList.contains('serviceGrid--service');

        this.items = el.querySelectorAll('.serviceGrid__item');
        this.intro = document.querySelector('.serviceIntro');


        if(this.intro){
            // Measure delay from when the Barba enter hook started (rideau début),
            // not from when this JS chunk finished loading.
            // On first Barba nav the chunk fetch eats into the 600ms budget;
            // on direct load __barbaEnterStart is undefined so full 600ms applies.
            const elapsed  = window.__barbaEnterStart ? Date.now() - window.__barbaEnterStart : 0;
            const remaining = Math.max(0, 600 - elapsed);
            wait(remaining).then(() => {
                inview.addElement(this.el);
            });
        }
        else{
            inview.addElement(this.el);
        }

        const mq = window.matchMedia( "(max-width: 600px) and (any-pointer: coarse)" );
        if(mq.matches){
            if(this.isService){
                this.container = this.el.querySelector('.serviceGrid__gridWrapper');
                this.grid = this.el.querySelector('.serviceGrid__grid');
                this.allCard = this.el.querySelectorAll('.serviceGrid__item');
    
                this.container.classList.add('swiper');
                this.grid.classList.add('swiper-wrapper');
                this.items.forEach(card => {
                    card.classList.add('swiper-slide');
                });
    
                this.slider = new Swiper(this.container, {
                    direction: 'horizontal',
                    loop: true,
                    autoHeight: false,
                    slidesPerView: 'auto',
                    spaceBetween: 35,
                    grabCursor: true,
                });
            }else{
                this.items.forEach(item => {
                    isTop.addElement(item);
                });
            }
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