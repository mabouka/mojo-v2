import Swiper from 'swiper';

export default class LeadTeam {

    static get selector() {
        return '.leadTeam';
    }

    constructor(el) {
        this.el         = el;
        this.initialize();    
    }

    initialize() {
        this.swiper = new Swiper('.swiper', {
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