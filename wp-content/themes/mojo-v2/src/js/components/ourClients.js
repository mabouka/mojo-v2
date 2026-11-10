import Marquee from '../utils/marquee';

export default class OurClients {

    static get selector() {
        return '.ourClients';
    }

    constructor(el) {
        this.el = el;
        this.container = this.el.querySelector('.ourClients__container');
        this.clients = this.getClients();
        this.current = 0;

        this.startCarousel();

        // Sans clients (champ vide) : pas de rotation, l'active() du minuteur
        // plantait toutes les 2 s.
        if (!this.clients.length) return;
        this.timer = this.getTimer();
        this.active(this.clients[this.current]);
        this.setEvents();
    }

    startCarousel() {
        const carousel = this.el.querySelector('.ourClients__carousel');
        if (carousel) this.marquee = new Marquee(carousel);
    }

    destroy() {
        clearInterval(this.timer);
        if (this.marquee) this.marquee.destroy();
    }

    getTimer() {
        return setInterval(() => {
            this.current++;
            if (this.current >= this.clients.length) {
                this.current = 0;
            }
            this.active(this.clients[this.current]);
        }, 2000);
    }

    getClients() {
        let els = this.el.querySelectorAll('.client');
        let clients = [];

        els.forEach((el, index) => {
            let client = {};
                client.index = index;
                client.isActive = false;
                client.el = el;
            clients.push(client);
        });
        return clients;
    }

    active(client) {
        if(client.isActive) return;
        this.desactiveAll();
        this.current = client.index;
        client.isActive = true;
        client.el.classList.add('client--active');
    }

    desactive(client) {
        if(!client.isActive) return;
        client.isActive = false;
        client.el.classList.remove('client--active');
    }

    desactiveAll() {
        this.clients.forEach(client => {
            this.desactive(client);
        });
    }

    setEvents() {
        if (this.container) this.container.addEventListener('mouseenter', (e) => {
            clearInterval(this.timer);
        });
        
        this.clients.forEach(client => {
            client.el.addEventListener('mouseenter', (e) => {
                clearInterval(this.timer);
                this.e_enter(e, client);
            });
        });
    }


    /**
     * Handlers
     */

    e_enter(e, client) {
        this.active(client);
    }
}