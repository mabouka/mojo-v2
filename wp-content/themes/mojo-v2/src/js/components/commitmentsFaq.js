import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class CommitmentsFaq {

    static get selector() {
        return '.commitmentsFaq';
    }

    constructor(el) {
        this.el = el;
        this.e_resized = this.e_resized.bind(this);
        this.items = this.getItems();
        this.setEvents();
        if (this.items[0]) this.active(this.items[0]);
    }

    getItems() {
        let items = [];
        let els = this.el.querySelectorAll('.commitmentsFaq__item');
        
        Array.from(els).forEach(element => {
            let item = {};
                item.el = element;
                item.title = element.querySelector('.commitmentsFaq__itemTitle');
                item.text = element.querySelector('.commitmentsFaq__itemText');
                item.wrapper = element.querySelector('.commitmentsFaq__itemWrapper');
                item.isActive = false;
                items.push(item);
        });

        return items;
    }

    toggle(item) {
        if(item.isActive)   this.desactive(item);
        else                this.active(item);
    }

    active(item) {
        if(item.isActive) return;
        this.desactiveAll();
        item.el.classList.add('commitmentsFaq__item--active');
        let textHeight = item.text.offsetHeight;
        item.wrapper.style.maxHeight = textHeight + 'px';

        item.isActive = true;
    }

    desactive(item) {
        if(!item.isActive) return;
        item.el.classList.remove('commitmentsFaq__item--active');
        item.wrapper.style.maxHeight = '';
        item.isActive = false;
    }

    desactiveAll() {
        this.items.forEach(item => {
            this.desactive(item);
        });
    }

    // Clic sur le titre seulement : écouté sur tout l'item (réponse comprise),
    // un lien dans une réponse ouverte ne marchait pas et sélectionner du texte
    // refermait la question.
    setEvents() {
        this.items.forEach((item, index) =>{
            (item.title || item.el).addEventListener('click', (e) => { this.e_click(e, item, index)});
            // La page change de hauteur : les ScrollTrigger plus bas (équipe de
            // la page Lead…) doivent recalculer leurs positions.
            if (item.wrapper) item.wrapper.addEventListener('transitionend', this.e_resized);
        });
    }

    destroy() {
        this.items.forEach(item => {
            if (item.wrapper) item.wrapper.removeEventListener('transitionend', this.e_resized);
        });
        cancelAnimationFrame(this.frame);
    }

    /**
     * Handlers
     */

    e_click(e, item, index) {
        e.preventDefault();
        this.toggle(item);
    }

    // Ouvrir une question en ferme une autre : deux transitions finissent
    // ensemble, un seul recalcul.
    e_resized(e) {
        if (e.propertyName !== 'max-height' || e.target !== e.currentTarget) return;
        cancelAnimationFrame(this.frame);
        this.frame = requestAnimationFrame(() => {
            window.lenis.resize();
            ScrollTrigger.refresh();
        });
    }
}