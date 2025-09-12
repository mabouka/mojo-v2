import {Reeller} from 'reeller';
import gsap from 'gsap';

export default class leadLogoCarrousel {

    static get selector() {
        return '.leadLogoCarrousel';
    }

    constructor(el) {
        this.startCarousel();
    }

    startCarousel() {
        Reeller.registerGSAP(gsap);

        const reeller = new Reeller({
            container: '.ourClients__carousel',
            wrapper: '.ourClients__carouselWrapper',
            itemSelector: '.ourClients__carouselWrapper',
            speed: 50,
            reversed: true
        });
    }
}