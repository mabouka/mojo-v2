import Swiper from 'swiper';

export default class ImagesSlider {

    static get selector() {
        return '.imagesslider';
    }

    constructor(el) {
        this.el         = el;
        this.wrapper    = el.querySelector('.imagesslider__wrapper');
        this.items      = el.querySelectorAll('.imagesslider__item');
        this.initialize();    
    }

    initialize() {
        this.swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            autoHeight: true,
            slidesPerView: 'auto',
            grabCursor: true,
            centeredSlides: true,

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