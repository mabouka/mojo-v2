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
        // Scope au DOM de CE block — si la page contient plusieurs imagesslider,
        // le sélecteur global '.swiper' attacherait Swiper au premier seulement.
        const swiperEl = this.el.querySelector('.swiper');
        if (!swiperEl) return;

        this.swiper = new Swiper(swiperEl, {
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