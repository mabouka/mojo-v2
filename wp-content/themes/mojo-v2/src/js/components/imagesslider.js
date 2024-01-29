//import Swiper from 'swiper';
// import Swiper styles
//import 'swiper/css';


export default class ImagesSlider {

    static get selector() {
        return '.imagesslider';
    }

    constructor(el) {
        this.el         = el;
        this.wrapper    = el.querySelector('.imagesslider__wrapper');
        this.items      = el.querySelectorAll('.imagesslider__item');
        setTimeout(() => {
            this.initialize();
        }, 200);
    }

    initialize() {
        this.swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            autoHeight: true,
            slidesPerView: 'auto',
            spaceBetween: 35,
            grabCursor: true,
          });
    }
    
    destroy() {
        if(this.swiper) this.swiper.destroy();
    }

}