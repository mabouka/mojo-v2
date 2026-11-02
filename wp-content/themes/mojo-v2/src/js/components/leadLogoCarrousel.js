import Marquee from '../utils/marquee';

export default class leadLogoCarrousel {

    static get selector() {
        return '.leadLogoCarrousel';
    }

    constructor(el) {
        this.marquee = new Marquee(el);
    }

    destroy() {
        if (this.marquee) this.marquee.destroy();
    }
}
