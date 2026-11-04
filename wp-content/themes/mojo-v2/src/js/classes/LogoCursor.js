import gsap from "gsap";
import Cursor from "./Cursor";
import { isMouse } from "../utils/detect";

// Disque qui révèle le logo en jaune (.homePurpose, footer). Le curseur du site
// passe sous ces sections (cursor--below, cursorOption.js) : ce disque le
// remplace.
//
// Il suit la position lissée du curseur (Cursor.subscribe) : une seule boucle,
// le disque et le curseur ne se décalent jamais, et le même étirement dans le
// sens du mouvement. La position est convertie en unités du SVG
// (getScreenCTM), juste à toutes les tailles d'écran ; le cercle est déplacé
// par son attribut transform, ce que tous les navigateurs appliquent aussi
// dans le clipPath du logo jaune.
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
        this.size = { r: 0 };
        this.inside = false;
        this.listeners = [];

        // Écran tactile : pas de souris à suivre, disque fixe sur le logo.
        if (!isMouse()) {
            this.circle.setAttribute('r', touch.r);
            this.circle.setAttribute('transform', `translate(${touch.x} ${touch.y})`);
            return;
        }

        this.circle.setAttribute('r', 0);
        this.last = null;
        this.frame = this.frame.bind(this);
        this.unsubscribe = Cursor.subscribe(this.frame);

        this.on(el, 'pointerenter', () => {
            this.inside = true;
            this.ctm = null;
            this.grow(this.radius, true);
        });
        this.on(el, 'pointerleave', () => {
            this.inside = false;
            this.grow(0);
        });

        if (this.sensible && this.sensibleRadius) {
            this.on(this.sensible, 'pointerenter', () => this.grow(this.sensibleRadius));
            this.on(this.sensible, 'pointerleave', () => this.inside && this.grow(this.radius));
        }
        el.querySelectorAll('a, button').forEach((link) => {
            this.on(link, 'pointerenter', () => this.grow(this.linkRadius));
            this.on(link, 'pointerleave', () => this.inside && this.grow(this.radius));
        });
    }

    on(target, type, fn) {
        target.addEventListener(type, fn);
        this.listeners.push([target, type, fn]);
    }

    // Grossit avec un léger rebond, rétrécit sans.
    grow(r, appear = false) {
        gsap.to(this.size, {
            r,
            duration: r > this.size.r ? 0.55 : 0.35,
            ease: r > this.size.r && !appear ? "back.out(2.2)" : "power3.out",
            overwrite: true,
            onUpdate: () => this.draw(),
        });
    }

    frame(state) {
        this.last = state;
        if (this.size.r > 0 || this.inside) this.draw();
    }

    draw() {
        const s = this.last;
        if (!s) return;
        // Recalculée à chaque image : le SVG défile avec la page.
        const ctm = this.svg.getScreenCTM();
        if (!ctm) return;
        const p = new DOMPoint(s.x, s.y).matrixTransform(ctm.inverse());
        const stretch = Math.min(s.speed / 90, 0.16);
        const angle = Math.atan2(s.vy, s.vx) * 180 / Math.PI;
        this.circle.setAttribute('r', Math.max(0, this.size.r).toFixed(1));
        this.circle.setAttribute('transform',
            `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${angle.toFixed(1)}) scale(${(1 + stretch).toFixed(3)} ${(1 / (1 + stretch)).toFixed(3)})`);
    }

    destroy() {
        if (!this.listeners) return;
        this.listeners.forEach(([target, type, fn]) => target.removeEventListener(type, fn));
        if (this.unsubscribe) this.unsubscribe();
        gsap.killTweensOf(this.size);
        this.listeners = null;
    }
}
