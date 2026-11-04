import gsap from "gsap";
import { isMouse } from "../utils/detect";

// Disque qui suit la souris et révèle le logo en jaune (.homePurpose, footer).
// Le curseur du site passe sous ces sections (cursor--below, cursorOption.js) :
// ce disque le remplace.
//
// Le cercle est déplacé par ses attributs cx/cy/r, en unités du SVG
// (getScreenCTM) : juste à toutes les tailles d'écran et dans tous les
// navigateurs, y compris dans le <mask> (Firefox n'y appliquait pas les
// transform CSS de l'ancienne version, et les autres navigateurs ne recevaient
// plus la position de la souris).
export default class LogoCursor {
    // svg, circle, sensible : sélecteurs dans `el` ; sensible = zone du logo où
    // le disque grossit ; touch = disque fixe {x, y, r} sur écran tactile.
    constructor(el, { svg, circle, sensible, radius = 18, linkRadius = 36, sensibleRadius, touch }) {
        this.el = el;
        this.svg = el.querySelector(svg);
        this.circle = el.querySelector(circle);
        this.sensible = sensible && el.querySelector(sensible);
        if (!this.svg || !this.circle) return;

        this.radius = radius;
        this.linkRadius = linkRadius;
        this.sensibleRadius = sensibleRadius;
        this.state = { x: 0, y: 0, r: 0 };
        this.pointer = null;
        this.listeners = [];

        const render = () => {
            this.circle.setAttribute('cx', this.state.x.toFixed(1));
            this.circle.setAttribute('cy', this.state.y.toFixed(1));
            this.circle.setAttribute('r', Math.max(0, this.state.r).toFixed(1));
        };

        // Écran tactile : pas de souris à suivre, disque fixe sur le logo.
        if (!isMouse()) {
            Object.assign(this.state, touch);
            render();
            return;
        }

        render(); // caché (r = 0) jusqu'à l'entrée de la souris
        const ease = { ease: "power2.out", onUpdate: render };
        this.moveX = gsap.quickTo(this.state, "x", { duration: 0.4, ...ease });
        this.moveY = gsap.quickTo(this.state, "y", { duration: 0.4, ...ease });
        this.resize = gsap.quickTo(this.state, "r", { duration: 0.3, ease: "power4.out", onUpdate: render });

        this.on(el, 'pointerenter', (e) => {
            this.pointer = e;
            this.follow(true);
            this.resize(this.radius);
        });
        this.on(el, 'pointermove', (e) => {
            this.pointer = e;
            this.follow();
        });
        this.on(el, 'pointerleave', () => {
            this.pointer = null;
            this.resize(0);
        });

        if (this.sensible && this.sensibleRadius) {
            this.on(this.sensible, 'pointerenter', () => this.resize(this.sensibleRadius));
            this.on(this.sensible, 'pointerleave', () => this.pointer && this.resize(this.radius));
        }
        el.querySelectorAll('a, button').forEach((link) => {
            this.on(link, 'pointerenter', () => this.resize(this.linkRadius));
            this.on(link, 'pointerleave', () => this.pointer && this.resize(this.radius));
        });

        // Au défilement, la souris ne bouge pas mais le SVG si : on recale.
        this._onScroll = () => this.follow();
        if (window.lenis && typeof window.lenis.on === 'function') window.lenis.on('scroll', this._onScroll);
        else this.on(window, 'scroll', this._onScroll, { passive: true });
    }

    on(target, type, fn, options) {
        target.addEventListener(type, fn, options);
        this.listeners.push([target, type, fn, options]);
    }

    // Position de la souris convertie en coordonnées du SVG.
    follow(immediate = false) {
        if (!this.pointer) return;
        const ctm = this.svg.getScreenCTM();
        if (!ctm) return;
        const point = new DOMPoint(this.pointer.clientX, this.pointer.clientY).matrixTransform(ctm.inverse());
        // À l'entrée, le disque apparaît sous la souris au lieu d'y glisser.
        this.moveX(point.x, immediate ? point.x : undefined);
        this.moveY(point.y, immediate ? point.y : undefined);
    }

    destroy() {
        if (!this.listeners) return;
        this.listeners.forEach(([target, type, fn, options]) => target.removeEventListener(type, fn, options));
        if (window.lenis && typeof window.lenis.off === 'function') window.lenis.off('scroll', this._onScroll);
        gsap.killTweensOf(this.state);
        this.listeners = null;
    }
}
