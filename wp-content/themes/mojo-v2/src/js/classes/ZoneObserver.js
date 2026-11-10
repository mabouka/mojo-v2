// Observe des éléments par rapport à une zone de l'écran (IntersectionObserver) et
// leur envoie un événement quand ils y entrent et en sortent. Une instance par
// zone : InView (apparition, une seule fois), IsTop, IsCentered, IsTopMedium.
// Les éléments portant `selector` sont pris automatiquement (au chargement, puis
// à chaque page par le Router) et reçoivent `className` dans la zone ; un
// composant peut aussi en ajouter avec addElement().
export default class ZoneObserver {

    constructor({ selector, className, inEvent, outEvent = null, rootMargin = '0px', threshold = 0, once = false }) {
        this.selector  = selector;
        this.className = className;
        this.inEvent   = inEvent;
        this.outEvent  = outEvent;
        this.once      = once;
        this.elements  = new Set();
        this.observer  = 'IntersectionObserver' in window
            ? new IntersectionObserver(this.callback.bind(this), { rootMargin, threshold })
            : null;
        this.addView(document);
    }

    addView(view) {
        view.querySelectorAll(this.selector).forEach(el => this.addElement(el));
    }

    addElement(el) {
        if (!el) return;
        // Sans IntersectionObserver : tout est considéré comme dans la zone.
        if (!this.observer) {
            if (el.matches(this.selector)) el.classList.add(this.className);
            el.dispatchEvent(new CustomEvent(this.inEvent));
            return;
        }
        this.elements.add(el);
        this.observer.observe(el);
    }

    removeElement(el) {
        if (this.elements.delete(el) && this.observer) this.observer.unobserve(el);
    }

    // Page quittée (Router) : ses éléments ne sont plus observés. Avant, ceux qui
    // n'étaient jamais apparus restaient observés, page après page.
    removeView(view) {
        this.elements.forEach(el => { if (view.contains(el)) this.removeElement(el); });
    }

    callback(entries) {
        entries.forEach(entry => {
            const el = entry.target;
            const automatic = el.matches(this.selector);
            // Apparition (once) : dès qu'un pixel est visible, comme l'ancien InView.
            const inside = this.once ? entry.intersectionRatio > 0 : entry.isIntersecting;

            if (inside) {
                el.dispatchEvent(new CustomEvent(this.inEvent, { detail: entry }));
                if (automatic) el.classList.add(this.className);
                if (this.once) this.removeElement(el);
            } else if (this.outEvent) {
                el.dispatchEvent(new CustomEvent(this.outEvent, { detail: entry }));
                if (automatic) el.classList.remove(this.className);
            }
        });
    }
}
