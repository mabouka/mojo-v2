export default class OurClients {

    static get selector() {
        return '.clientHover';
    }

    constructor(el) {
        this.el = el;
        this.container = this.el.querySelector('.clientHover__clients');
        this.clients = this.getClients();
        this.current = 0;
        this.timer = null;
        this.hovering = false;
        this.visible = false;

        this.active(this.clients[this.current]);
        this.setEvents();
    }

    // Appelé par Pluton en quittant la page (Barba) : l'ancien setInterval
    // continuait de tourner sur la page quittée, et s'additionnait à chaque visite.
    destroy() {
        this.stop();
        if (this.observer) this.observer.disconnect();
        if (this.onLeave) this.container.removeEventListener('mouseleave', this.onLeave);
    }

    // Défilement automatique seulement quand la section est à l'écran et
    // que la souris n'est pas sur la liste ; il reprend quand elle la quitte.
    start() {
        if (this.timer || this.hovering || !this.visible) return;
        this.timer = setInterval(() => {
            this.current = (this.current + 1) % this.clients.length;
            this.active(this.clients[this.current]);
        }, 2000);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

    getClients() {
        let els = this.el.querySelectorAll('.client');
        let clients = [];

        els.forEach((el, index) => {
            let client = {};
                client.index = index;
                client.isActive = false;
                client.key = el.dataset.key;
                client.image = this.el.querySelector('.clientHover__image[data-key="'+ client.key + '"]')
                client.el = el;
            clients.push(client);
        });
        return clients;
    }

    active(client) {
        if(!client || client.isActive) return;
        this.desactiveAll();
        this.current = client.index;
        client.isActive = true;
        if (client.image) client.image.classList.add('clientHover__image--active');
        client.el.classList.add('client--active');
    }

    desactive(client) {
        if(!client.isActive) return;
        client.isActive = false;
        if (client.image) client.image.classList.remove('clientHover__image--active');
        client.el.classList.remove('client--active');
    }

    desactiveAll() {
        this.clients.forEach(client => {
            this.desactive(client);
        });
    }

    setEvents() {
        if (!this.clients.length) return;

        this.observer = new IntersectionObserver(([entry]) => {
            this.visible = entry.isIntersecting;
            this.visible ? this.start() : this.stop();
        });
        this.observer.observe(this.el);

        this.container.addEventListener('mouseenter', () => {
            this.hovering = true;
            this.stop();
        });
        this.onLeave = () => {
            this.hovering = false;
            this.start();
        };
        this.container.addEventListener('mouseleave', this.onLeave);

        this.clients.forEach(client => {
            client.el.addEventListener('mouseenter', () => this.active(client));
        });
    }
}
