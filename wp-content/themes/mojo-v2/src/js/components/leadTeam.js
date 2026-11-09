import Swiper from 'swiper';

export default class LeadTeam {

    static get selector() {
        return '.leadTeam';
    }

    constructor(el) {
        this.el         = el;
        this.initialize();    
    }

    // Le .swiper de ce bloc seulement (voir imagesslider.js).
    initialize() {
        const container = this.el.querySelector('.swiper');
        if (!container) return;
        this.swiper = new Swiper(container, {
            direction: 'horizontal',
            autoHeight: true,
            slidesPerView: 'auto',
            grabCursor: true,

            breakpoints: {
                320: { // when window width is >= 320px
                    spaceBetween: 5, 
                },
                601: {
                    spaceBetween: 35,
                    centeredSlides: false,
                }
            }
        });
    }
    
    destroy() {
        if(this.swiper) this.swiper.destroy();
    }

}