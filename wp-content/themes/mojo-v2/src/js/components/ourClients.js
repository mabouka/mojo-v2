import Marquee from '../utils/marquee';
import ClientRotator from '../utils/clientRotator';

// Logos clients de l'accueil : bandeau défilant et client mis en avant à tour de
// rôle (même rotation que la page Clients : pause hors écran et au survol).
export default class OurClients {

    static get selector() {
        return '.ourClients';
    }

    constructor(el) {
        this.el = el;
        const carousel = this.el.querySelector('.ourClients__carousel');
        if (carousel) this.marquee = new Marquee(carousel);
        this.rotator = new ClientRotator(this.el, this.el.querySelector('.ourClients__container'));
    }

    destroy() {
        if (this.marquee) this.marquee.destroy();
        this.rotator.destroy();
    }
}
