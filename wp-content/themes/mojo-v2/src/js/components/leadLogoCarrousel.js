// Marquee CSS-only des logos partenaires.
// Réutilise la même mécanique que ourClients : duplication des enfants
// + animation @keyframes translateX(-50%) qui boucle sans saut.

export default class leadLogoCarrousel {

    static get selector() {
        return '.leadLogoCarrousel';
    }

    constructor(el) {
        this.el = el;
        this.startCarousel();
    }

    startCarousel() {
        const wrapper = this.el.querySelector('.ourClients__carouselWrapper');
        if (!wrapper) return;

        const items = Array.from(wrapper.children);
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            wrapper.appendChild(clone);
        });

        // Direction inverse vs ourClients (le `reversed: true` du Reeller original)
        wrapper.classList.add('ourClients__carouselWrapper--marquee');
        wrapper.classList.add('ourClients__carouselWrapper--marquee-reversed');
    }
}
