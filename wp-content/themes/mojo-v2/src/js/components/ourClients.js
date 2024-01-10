import {Reeller} from 'reeller';
import gsap from 'gsap';

export default class OurClients {

    static get selector() {
        return '.ourClients';
    }

    constructor(el) {
        this.el = el;
        this.container = this.el.querySelector('.ourClients__container');
        this.clients = this.getClients();
        this.current = 0;
        this.timer = this.getTimer();

        this.startCarousel();

        this.active(this.clients[this.current]);
        this.setEvents();
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
        this.container.addEventListener('mouseenter', (e) => {
            clearInterval(this.timer);
        });
        this.container.addEventListener('mouseleave', (e) => {
            //this.timer = this.getTimer();
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