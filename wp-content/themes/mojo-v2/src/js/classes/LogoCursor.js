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

        // Écran tactile : pas de souris à suivre, disque fixe sur le logo.
        if (!isMouse()) {
            this.circle.setAttribute('r', touch.r);
            this.circle.setAttribute('transform', `translate(${touch.x} ${touch.y})`);
            return;
        }

        this.circle.setAttribute('r', 0);
        this.last = null;
        this.wanted = 0;
        this.frame = this.frame.bind(this);
        this.unsubscribe = Cursor.subscribe(this.frame);

        // Le disque prend le relais dès que le cercle du curseur touche la
        // section, pas seulement quand la pointe de la souris y entre : en
        // mélange darken, le curseur jaune disparaissait sur le fond sombre et
        // semblait coupé en deux au bord. Calculé seulement section à l'écran.
        this.near = false;
        this.visible = false;
        this.scale = 0;
        this.observer = new IntersectionObserver(([entry]) => {
            this.visible = entry.isIntersecting;
            if (!this.visible) this.setNear(false);
        });
        this.observer.observe(el);
    }

    // Grossit avec un léger rebond, rétrécit sans.
    grow(r) {
        gsap.to(this.size, {
            r,
            duration: r > this.size.r ? 0.55 : 0.35,
            ease: r > this.size.r ? "back.out(2.2)" : "power3.out",
            overwrite: true,
            onUpdate: () => this.draw(),
        });
    }

    frame(state) {
        this.last = state;
        // Recalculé à chaque image (aussi pendant un défilement sans mouvement
        // de souris, où aucun événement de survol n'arrive).
        if (this.visible) this.setNear(this.distance(state) < this.radius * this.scale);
        this.update();
        if (this.size.r > 0 || this.inside || this.near) this.draw();
    }

    // Taille voulue, d'après la vraie position de la souris (pas la position
    // lissée, en retard) : dans la section, dans la zone du logo, sur un lien.
    // Une seule règle, quel que soit le côté par lequel on entre ou sort ; avec
    // pointerenter / pointerleave et la position lissée mélangés, le disque
    // pouvait garder la taille de la zone du logo en la quittant, ou prendre une
    // autre taille en entrant par le bas.
    update() {
        const cursor = Cursor.instance;
        if (!cursor) return;
        const { x, y } = cursor.target;
        const within = (node) => {
            const r = node.getBoundingClientRect();
            return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
        };
        const inside = this.visible && within(this.el);
        const link = inside && cursor.hovered && cursor.hovered.closest && cursor.hovered.closest('a, button');

        let r = this.near ? this.radius : 0;
        if (inside) {
            if (link && this.el.contains(link)) r = this.linkRadius;
            else if (this.sensible && this.sensibleRadius && within(this.sensible)) r = this.sensibleRadius;
            else r = this.radius;
        }

        // Entrée dans la section : tout de suite à la taille du curseur du site,
        // qui vient de passer sous la section (grossir depuis 0 laissait un trou
        // au passage du bord).
        if ((inside || this.near) && this.size.r < this.radius) {
            gsap.killTweensOf(this.size);
            this.size.r = this.radius;
            if (r === this.radius) this.wanted = r;
        }
        this.inside = inside;

        if (r !== this.wanted) {
            this.wanted = r;
            this.grow(r);
        }
    }

    // Distance entre le centre du curseur et la section (0 dedans).
    distance(state) {
        const ctm = this.svg.getScreenCTM();
        if (ctm) this.scale = ctm.a;
        const rect = this.el.getBoundingClientRect();
        const dx = Math.max(rect.left - state.x, 0, state.x - rect.right);
        const dy = Math.max(rect.top - state.y, 0, state.y - rect.bottom);
        return Math.hypot(dx, dy);
    }

    setNear(near) {
        if (near === this.near) return;
        this.near = near;
        if (Cursor.instance) Cursor.instance.force('cursor--below', near);
    }

    draw() {
        // Le rayon d'abord : même si le SVG n'est pas affiché à cet instant
        // (transition Barba), le disque ne reste pas à mi-taille.
        this.circle.setAttribute('r', Math.max(0, this.size.r).toFixed(1));
        const s = this.last;
        if (!s) return;
        // Recalculée à chaque image : le SVG défile avec la page.
        const ctm = this.svg.getScreenCTM();
        if (!ctm) return;
        if (this.inside || this.near) this.shareSize(ctm);
        const p = new DOMPoint(s.x, s.y).matrixTransform(ctm.inverse());
        const stretch = Math.min(s.speed / 90, 0.16);
        const angle = Math.atan2(s.vy, s.vx) * 180 / Math.PI;
        this.circle.setAttribute('transform',
            `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${angle.toFixed(1)}) scale(${(1 + stretch).toFixed(3)} ${(1 / (1 + stretch)).toFixed(3)})`);
    }

    // Taille du disque à l'écran donnée au curseur du site (--cbs, échelle de
    // .cursor__bg en état cursor--below) : au bord de la section, il prolonge
    // le disque à l'identique.
    shareSize(ctm) {
        const cursor = Cursor.instance && Cursor.instance.element;
        if (!cursor) return;
        // offsetWidth ignore scale et transform : taille de base du calque.
        if (!this.bgSize) this.bgSize = cursor.firstElementChild && cursor.firstElementChild.offsetWidth;
        if (!this.bgSize) return;
        cursor.style.setProperty('--cbs', (2 * this.size.r * ctm.a / this.bgSize).toFixed(4));
    }

    destroy() {
        if (this.destroyed || !this.svg || !this.circle) return;
        this.destroyed = true;
        if (this.unsubscribe) this.unsubscribe();
        if (this.observer) {
            this.observer.disconnect();
            this.setNear(false);
        }
        gsap.killTweensOf(this.size);
    }
}
