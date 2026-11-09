export default class Cta {

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

    // Lien bloqué seulement si le formulaire est dans la page : sinon (lien vers
    // une autre page saisi dans l'ACF), le bouton ne faisait plus rien.
    e_click(e) {
        const contactForm = document.getElementById('contactForm');
        if(contactForm) {
            e.preventDefault();
            window.lenis.scrollTo(contactForm, { duration: 1.5 }  );
        }
    }
}