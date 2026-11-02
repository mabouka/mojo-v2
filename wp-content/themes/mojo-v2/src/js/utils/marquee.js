/**
 * Bandeau de logos défilant en CSS pur (remplace Reeller + GSAP).
 *
 * Reproduit le réglage Reeller d'origine ({ speed: 50, reversed: true }) :
 *  - `speed` Reeller = durée en secondes pour faire défiler UNE série de logos
 *    → `secondsPerSet` (vitesse identique quel que soit le nombre de logos)
 *  - `reversed: true` = défilement vers la gauche
 *  - autoStop Reeller = pause quand le bandeau est hors écran
 *
 * L'animation (@keyframes ourClientsMarquee, translateX 0 → -50%) boucle sans
 * saut si le bandeau contient deux moitiés identiques, chacune au moins aussi
 * large que le conteneur : on répète donc la série k fois par moitié.
 *
 * Markup attendu : .ourClients__carousel > .ourClients__carouselWrapper > items
 */
export default class Marquee {
    constructor(container, { secondsPerSet = 50 } = {}) {
        this.container = container;
        this.wrapper = container && container.querySelector('.ourClients__carouselWrapper');
        if (!this.wrapper) return;

        this.secondsPerSet = secondsPerSet;
        this.originals = Array.from(this.wrapper.children);
        this.setsPerHalf = 0;

        this.build();

        // Ne reconstruire que si le nombre de séries change : sur mobile, la
        // barre d'adresse déclenche des resize à chaque scroll.
        this.onResize = () => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => this.build(), 200);
        };
        window.addEventListener('resize', this.onResize);

        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(([entry]) => {
                this.wrapper.classList.toggle('is-paused', !entry.isIntersecting);
            });
            this.observer.observe(this.container);
        }
    }

    build() {
        const setWidth = this.originalsWidth();
        if (!setWidth) return;

        const setsPerHalf = Math.max(1, Math.ceil(this.container.clientWidth / setWidth));
        if (setsPerHalf === this.setsPerHalf) return;
        this.setsPerHalf = setsPerHalf;

        const clones = [];
        for (let copy = 1; copy < setsPerHalf * 2; copy++) {
            this.originals.forEach((item) => {
                const clone = item.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                clone.querySelectorAll('a').forEach((a) => a.setAttribute('tabindex', '-1'));
                if (clone.matches('a')) clone.setAttribute('tabindex', '-1');
                clones.push(clone);
            });
        }
        this.wrapper.replaceChildren(...this.originals, ...clones);

        this.wrapper.style.setProperty('--marquee-duration', `${this.secondsPerSet * setsPerHalf}s`);
        this.wrapper.classList.add('ourClients__carouselWrapper--marquee');
    }

    // Largeur d'une série de logos (marges comprises).
    originalsWidth() {
        const first = this.originals[0];
        const last = this.originals[this.originals.length - 1];
        if (!first) return 0;
        const marginLeft = parseFloat(getComputedStyle(first).marginLeft) || 0;
        const marginRight = parseFloat(getComputedStyle(last).marginRight) || 0;
        return last.getBoundingClientRect().right + marginRight
             - (first.getBoundingClientRect().left - marginLeft);
    }

    destroy() {
        if (!this.wrapper) return;
        window.removeEventListener('resize', this.onResize);
        clearTimeout(this.resizeTimer);
        if (this.observer) this.observer.disconnect();
    }
}
