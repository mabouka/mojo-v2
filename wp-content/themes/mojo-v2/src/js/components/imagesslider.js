import Swiper from 'swiper';

export default class ImagesSlider {

    static get selector() {
        return '.imagesslider';
    }

    constructor(el) {
        this.el         = el;
        this.initialize();
    }

    // Le .swiper de ce bloc seulement : avec le sélecteur seul, Swiper prenait
    // tous les sliders de la page (et renvoyait un tableau dès qu'il y en a deux).
    initialize() {
        const container = this.el.querySelector('.swiper');
        if (!container) return;
        this.swiper = new Swiper(container, {
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