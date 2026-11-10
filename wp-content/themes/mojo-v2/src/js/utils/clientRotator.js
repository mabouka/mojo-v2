import Listeners from './listeners';

// Liste de clients mise en avant à tour de rôle (accueil, page Clients) : un client
// toutes les 2 s, seulement quand la liste est à l'écran. Survol de la liste :
// rotation en pause et client survolé mis en avant ; reprise à la sortie.
// onChange(client, previous) : classes en plus (images de la page Clients…).
export default class ClientRotator {

    constructor(root, container, onChange) {
        this.clients   = [...root.querySelectorAll('.client')];
        this.onChange  = onChange || (() => {});
        this.current   = -1;
        this.timer     = null;
        this.hovering  = false;
        this.visible   = false;
        this.listeners = new Listeners();
        // Champ des clients vide : rien à faire tourner.
        if (!this.clients.length) return;

        this.activate(0);

        this.observer = new IntersectionObserver(([entry]) => {
            this.visible = entry.isIntersecting;
            this.visible ? this.start() : this.stop();
        });
        this.observer.observe(root);

        const hoverZone = container || root;
        this.listeners.on(hoverZone, 'mouseenter', () => { this.hovering = true; this.stop(); });
        this.listeners.on(hoverZone, 'mouseleave', () => { this.hovering = false; this.start(); });
        this.clients.forEach((el, index) => this.listeners.on(el, 'mouseenter', () => this.activate(index)));
    }

    activate(index) {
        if (index === this.current) return;
        const previous = this.clients[this.current];
        if (previous) previous.classList.remove('client--active');
        this.clients[index].classList.add('client--active');
        this.onChange(this.clients[index], previous);
        this.current = index;
    }

    start() {
        if (this.timer || this.hovering || !this.visible) return;
        this.timer = setInterval(() => this.activate((this.current + 1) % this.clients.length), 2000);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

    destroy() {
        this.stop();
        if (this.observer) this.observer.disconnect();
        this.listeners.removeAll();
    }
}
