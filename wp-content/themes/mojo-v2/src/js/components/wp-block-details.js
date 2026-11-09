import { ScrollTrigger } from "gsap/ScrollTrigger";

// Bloc « Détails » de Gutenberg : à l'ouverture ou à la fermeture, la page
// change de hauteur, Lenis et ScrollTrigger doivent recalculer.
// Événement natif toggle, plutôt qu'un MutationObserver sur tous les
// attributs : celui-ci se déclenchait aussi au montage (data-mounted posé par
// Pluton) et faisait un refresh complet par bloc au chargement.
export default class wpBlockDetails {

    static get selector() {
        return '.wp-block-details';
    }

    constructor(el) {
        this.el = el;
        this.e_toggle = this.e_toggle.bind(this);
        this.el.addEventListener('toggle', this.e_toggle);
    }

    destroy() {
        this.el.removeEventListener('toggle', this.e_toggle);
        cancelAnimationFrame(this.frame);
    }

    e_toggle() {
        cancelAnimationFrame(this.frame);
        this.frame = requestAnimationFrame(() => {
            window.lenis.resize();
            ScrollTrigger.refresh();
        });
    }

}
