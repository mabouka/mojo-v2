export default class OurClients {

    static get selector() {
        return '.clientHover';
    }

    constructor(el) {
        this.el = el;
        this.container = this.el.querySelector('.clientHover__clients');
        this.clients = this.getClients();
        this.current = 0;
        this.timer = this.getTimer();

        this.active(this.clients[this.current]);
        this.setEvents();
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
                client.key = el.dataset.key;
                client.image = this.el.querySelector('.clientHover__image[data-key="'+ client.key + '"]')
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
        client.image.classList.add('clientHover__image--active');
        client.el.classList.add('client--active');
    }

    desactive(client) {
        if(!client.isActive) return;
        client.isActive = false;
        client.image.classList.remove('clientHover__image--active');
        client.el.classList.remove('client--active');
    }

    desactiveAll() {
        this.clients.forEach(client => {
            this.desactive(client);
        });
    }

    setEvents() {
        this.container.addEventListener('mouseenter', (e) => {
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