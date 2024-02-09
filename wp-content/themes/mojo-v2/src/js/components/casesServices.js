import Swiper from "swiper";
export default class casesServices {

    static get selector() {
        return '.casesServices';
    }

    constructor(el) {
        this.el = el;
   
        const mq = window.matchMedia( "(max-width: 600px)" );
        if(mq.matches){

            this.container = this.el.querySelector('.casesServices__gridContainer');
            this.grid = this.el.querySelector('.casesServices__grid');
            this.allCard = this.el.querySelectorAll('.serviceCard');

            this.container.classList.add('swiper');
            this.grid.classList.add('swiper-wrapper');
            this.allCard.forEach(card => {
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
        }


    }

}
