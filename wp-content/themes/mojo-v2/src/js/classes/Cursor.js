import gsap from "gsap";
import { isMouse } from "../utils/detect";

// Curseur du site (partials/cursor.php, styles dans parts/_cursor.scss).
//
// - Une seule boucle d'animation (ticker GSAP), arrêtée dès que le curseur est
//   immobile. Elle lisse la position (amortissement indépendant de la
//   fréquence d'écran) et calcule la vitesse, qui étire légèrement le disque.
// - La position est écrite sur .cursor seulement (variables --cx/--cy, lues par
//   la propriété `translate` des calques) : l'ancienne version réécrivait des
//   variables sur <html> à chaque mouvement (style de toute la page recalculé)
//   et relançait une transition CSS à chaque pixel (mouvement saccadé).
// - Les états (cursorOption.js) sont trouvés par délégation (closest) au survol :
//   rien à rebrancher après une navigation Barba, et les éléments ajoutés plus
//   tard sont pris en compte.
// - D'autres effets peuvent suivre la même position lissée : Cursor.subscribe()
//   (disque qui révèle le logo, classes/LogoCursor.js).
const subscribers = new Set();

export default class Cursor {

    static subscribe(fn) {
        subscribers.add(fn);
        if (Cursor.instance) Cursor.instance.wake();
        return () => subscribers.delete(fn);
    }

    constructor(element, options = {}) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.focusElements = (options.focusElements || ['a', 'button']).map((item) => (
            typeof item === 'string'
                ? { elements: item, focusClass: 'cursor--focused' }
                : { focusClass: 'cursor--focused', ...item }
        ));
        this.focusClasses = [...new Set(this.focusElements.map((item) => item.focusClass))];

        this.target = { x: 0, y: 0 };
        this.state = { x: 0, y: 0, vx: 0, vy: 0, speed: 0 };
        this.running = false;
        this.initialized = false;
        this.hovered = null;
        // États imposés par un effet abonné (LogoCursor), quel que soit
        // l'élément survolé.
        this.forced = new Set();

        this.tick = this.tick.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onOver = this.onOver.bind(this);
        this.onLeaveWindow = () => this.element.classList.add('cursor--offScreen');
        this.onEnterWindow = () => this.element.classList.remove('cursor--offScreen');
        this.onDown = () => this.element.classList.add('cursor--clicking');
        this.onUp = () => this.element.classList.remove('cursor--clicking');

        Cursor.instance = this;
    }

    initialize() {
        if (this.initialized || !this.element || !isMouse()) return this;

        document.addEventListener('pointermove', this.onMove, { passive: true });
        document.addEventListener('pointerover', this.onOver, { passive: true });
        document.documentElement.addEventListener('mouseleave', this.onLeaveWindow);
        document.documentElement.addEventListener('mouseenter', this.onEnterWindow);
        document.addEventListener('pointerdown', this.onDown, { passive: true });
        document.addEventListener('pointerup', this.onUp, { passive: true });

        // Défilement sans bouger la souris : la page glisse sous un curseur
        // immobile. Le navigateur n'envoie alors aucun événement de survol ;
        // on relit l'élément sous la souris et on recale tout de suite les
        // effets abonnés, dans la même frame que Lenis (avant : à la frame
        // suivante, d'où un disque en retard sur la page).
        if (window.lenis && typeof window.lenis.on === 'function') {
            this.offScroll = window.lenis.on('scroll', () => this.onScroll());
        }

        this.initialized = true;
        return this;
    }

    // Après une navigation Barba : l'élément sous la souris a changé.
    reset() {
        if (!this.initialized || !this.active) return;
        this.setHovered(document.elementFromPoint(this.target.x, this.target.y));
    }

    onMove(e) {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        this.target.x = e.clientX;
        this.target.y = e.clientY;

        if (!this.active) {
            // Premier mouvement : le curseur apparaît sous la souris, sans glisser.
            this.active = true;
            Object.assign(this.state, this.target);
            this.element.classList.add('cursor--active');
        }
        this.wake();
    }

    onScroll() {
        if (!this.active) return;
        this.setHovered(document.elementFromPoint(this.target.x, this.target.y));
        subscribers.forEach((fn) => fn(this.state));
    }

    onOver(e) {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        this.setHovered(e.target);
    }

    setHovered(el) {
        if (!el || el === this.hovered) return;
        this.hovered = el;

        const wanted = new Set();
        if (el.closest) {
            this.focusElements.forEach(({ elements, focusClass }) => {
                if (el.closest(elements)) wanted.add(focusClass);
            });
        }
        this.focusClasses.forEach((focusClass) => {
            this.element.classList.toggle(focusClass, wanted.has(focusClass) || this.forced.has(focusClass));
        });
    }

    // Impose (ou retire) un état, en plus de ceux donnés par l'élément survolé.
    force(focusClass, on) {
        if (on === this.forced.has(focusClass)) return;
        if (on) this.forced.add(focusClass);
        else this.forced.delete(focusClass);
        const wanted = !!(this.hovered && this.hovered.closest && this.focusElements.some(
            (item) => item.focusClass === focusClass && this.hovered.closest(item.elements)
        ));
        this.element.classList.toggle(focusClass, on || wanted);
    }

    wake() {
        if (this.running || !this.initialized) return;
        this.running = true;
        gsap.ticker.add(this.tick);
    }

    tick(time, deltaTime) {
        const s = this.state;
        // Même amortissement à 60, 120 ou 144 Hz.
        const frames = Math.min(deltaTime, 64) / (1000 / 60);
        const k = 1 - Math.pow(1 - 0.24, frames);

        const px = s.x;
        const py = s.y;
        s.x += (this.target.x - s.x) * k;
        s.y += (this.target.y - s.y) * k;
        s.vx = (s.x - px) / (frames || 1);
        s.vy = (s.y - py) / (frames || 1);
        s.speed = Math.hypot(s.vx, s.vy);

        this.render();
        subscribers.forEach((fn) => fn(s));

        // Immobile : on arrête la boucle (elle repart au prochain mouvement).
        if (Math.abs(this.target.x - s.x) < 0.1 && Math.abs(this.target.y - s.y) < 0.1 && s.speed < 0.05) {
            s.x = this.target.x;
            s.y = this.target.y;
            s.vx = s.vy = s.speed = 0;
            this.render();
            subscribers.forEach((fn) => fn(s));
            this.running = false;
            gsap.ticker.remove(this.tick);
        }
    }

    render() {
        const s = this.state;
        const style = this.element.style;
        style.setProperty('--cx', s.x.toFixed(2) + 'px');
        style.setProperty('--cy', s.y.toFixed(2) + 'px');
        // Étirement dans le sens du mouvement (au plus 16 %), surface conservée.
        const stretch = Math.min(s.speed / 90, 0.16);
        style.setProperty('--cr', (Math.atan2(s.vy, s.vx) * 180 / Math.PI).toFixed(1) + 'deg');
        style.setProperty('--csx', (1 + stretch).toFixed(3));
        style.setProperty('--csy', (1 / (1 + stretch)).toFixed(3));
    }

    destroy() {
        if (!this.initialized) return this;
        document.removeEventListener('pointermove', this.onMove);
        document.removeEventListener('pointerover', this.onOver);
        document.documentElement.removeEventListener('mouseleave', this.onLeaveWindow);
        document.documentElement.removeEventListener('mouseenter', this.onEnterWindow);
        document.removeEventListener('pointerdown', this.onDown);
        document.removeEventListener('pointerup', this.onUp);
        if (typeof this.offScroll === 'function') this.offScroll();
        gsap.ticker.remove(this.tick);
        this.running = false;
        this.initialized = false;
        return this;
    }
}
