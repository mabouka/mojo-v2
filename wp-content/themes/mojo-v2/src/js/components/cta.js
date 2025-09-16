export default class LeadDescription {

    static get selector() {
        return '.homeService--lead';
    }

    constructor(el) {
        this.el         = el;
        this.link       = this.el.querySelector('.homeService__link');

        this.addEvents();
    }

    addEvents() {
        if( this.link ) {
            this.link.addEventListener('click', (e) => { this.e_click(e) });
        }
    }

    e_click(e) {
        e.preventDefault();
        const contactForm = document.getElementById('contactForm');
        if(contactForm) {
            window.lenis.scrollTo(contactForm, { duration: 3 }  );
        }
    }
}