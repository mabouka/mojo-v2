import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

export default class ImagesSlider {

    static get selector() {
        return '.imagesslider';
    }

    constructor(el) {
        this.el         = el;
        this.wrapper    = el.querySelector('.imagesslider__wrapper');
        this.items      = el.querySelectorAll('.imagesslider__item');

        this.swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoHeight: true,
            slidesPerView: 'auto',
            spaceBetween: 35,
            //centeredSlides : true,
            //centerInsufficientSlides : true,
            grabCursor: true,
          });

        console.log(this.swiper)
          
    }

    setEvents() {

    }


    /**
     * Handlers
     */

    e_error(e) {

    }
}