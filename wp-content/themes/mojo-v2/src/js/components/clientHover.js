import ClientRotator from '../utils/clientRotator';

// Page Clients : client mis en avant à tour de rôle, avec son image.
export default class ClientHover {

    static get selector() {
        return '.clientHover';
    }

    constructor(el) {
        this.el = el;
        this.rotator = new ClientRotator(this.el, this.el.querySelector('.clientHover__clients'), (client, previous) => {
            if (previous) this.toggleImage(previous, false);
            this.toggleImage(client, true);
        });
    }

    toggleImage(client, active) {
        const image = this.el.querySelector('.clientHover__image[data-key="' + client.dataset.key + '"]');
        if (image) image.classList.toggle('clientHover__image--active', active);
    }

    destroy() {
        this.rotator.destroy();
    }
}
