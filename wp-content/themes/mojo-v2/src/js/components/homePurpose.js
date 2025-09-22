import gsap from "gsap";
import { isMouse, isFirefox } from "../utils/detect";

export default class HomePurpose {

    static get selector() {
        return '.homePurpose';
    }

    constructor(el) {
        this.el = el;
        this.body = document.querySelector('body');
        this.svg = this.el.querySelector('#purposeSvg');
        this.svgWrapper = this.el.querySelector('.homePurpose__svgWrapper');
        this.circle = this.el.querySelector('#purposeSvg_circle');
        this.sensible = this.el.querySelector('#purposeSensible');
        this.links = Array.from(this.el.querySelectorAll('a'));

        this.mousePos = { x: 0, y: 0 };
        this.svgRect = { left: 0, top: 0 }; // position du wrapper dans le viewport

        // BOUND handlers stockés pour pouvoir les removeEventListener correctement
        this._boundFrame = this.frame.bind(this);
        this._boundResize = this.e_resize.bind(this);
        this._boundMouseMove = this.e_mousemove.bind(this);
        this._boundMouseEnter = this.e_mousenter.bind(this);
        this._boundMouseLeave = this.e_mouseleave.bind(this);
        this._boundMouseEnterLink = this.e_mousenterLink.bind(this);
        this._boundMouseLeaveLink = this.e_mouseleaveLink.bind(this);
        this._boundMouseEnterEl = this.e_mousenterEl.bind(this);
        this._boundMouseLeaveEl = this.e_mouseleaveEl.bind(this);

        // ajout du ticker (on utilise la référence stockée pour remove après)
        gsap.ticker.add(this._boundFrame);

        this.setRect();
        this.setEvents();
    }

    destroy() {
        // retire le ticker
        gsap.ticker.remove(this._boundFrame);

        // retire les listeners globaux
        window.removeEventListener('resize', this._boundResize);

        // retire lenis scroll si présent
        if (window.lenis && typeof window.lenis.off === 'function') {
            // supposer qu'off existe ; sinon il faudra une API adaptée
            window.lenis.off('scroll', this._lenisScrollHandler);
        } else if (window.lenis && typeof window.lenis.on === 'function') {
            // fallback si pas d'off : on peut essayer de nuller le handler interne
        }

        // listeners souris généraux
        if (isMouse()) {
            this.sensible.removeEventListener('mouseenter', this._boundMouseEnter);
            this.sensible.removeEventListener('mouseleave', this._boundMouseLeave);

            this.links.forEach((link) => {
                link.removeEventListener('mouseenter', this._boundMouseEnterLink);
                link.removeEventListener('mouseleave', this._boundMouseLeaveLink);
            });
        }

        if (isFirefox()) {
            this.el.removeEventListener('mouseenter', this._boundMouseEnterEl);
            this.el.removeEventListener('mouseleave', this._boundMouseLeaveEl);
            window.removeEventListener('mousemove', this._boundMouseMove);
        }

        // nuller références si besoin
        this.circle = null;
        this.svg = null;
        this.svgWrapper = null;
        this.sensible = null;
        this.links = null;
        this.el = null;
    }

    frame() {
        // On anime l'élément déjà sélectionné (pas de lookup DOM à chaque tick)
        gsap.to(this.circle, {
            x: this.mousePos.x - this.svgRect.left,
            y: this.mousePos.y - this.svgRect.top,
            duration: 0.4,
            ease: "power2.out",
            transformOrigin: "center center"
        });
    }

    setRect() {
        if (!this.svgWrapper) return;
        const r = this.svgWrapper.getBoundingClientRect();
        this.svgRect.left = r.left;
        this.svgRect.top = r.top;
    }

    setEvents() {
        // guard pour lenis
        if (window.lenis && typeof window.lenis.on === 'function') {
            // on stocke la ref pour pouvoir l'enlever plus tard
            this._lenisScrollHandler = (e) => { this.e_scroll(e); };
            window.lenis.on('scroll', this._lenisScrollHandler);
        } else {
            // fallback: si pas lenis, on peut écouter scroll natif
            this._boundNativeScroll = this.e_scroll.bind(this);
            window.addEventListener('scroll', this._boundNativeScroll, { passive: true });
        }

        window.addEventListener('resize', this._boundResize);

        if (isMouse()) {
            if (this.sensible) {
                this.sensible.addEventListener('mouseenter', this._boundMouseEnter);
                this.sensible.addEventListener('mouseleave', this._boundMouseLeave);
            }

            this.links.forEach((link) => {
                link.addEventListener('mouseenter', this._boundMouseEnterLink);
                link.addEventListener('mouseleave', this._boundMouseLeaveLink);
            });
        }

        if (isFirefox()) { // quickfix firefox
            gsap.set(this.circle, {
                autoAlpha: 0,
                scale: 0.001
            });

            this.el.addEventListener('mouseenter', this._boundMouseEnterEl);
            this.el.addEventListener('mouseleave', this._boundMouseLeaveEl);

            window.addEventListener('mousemove', this._boundMouseMove);
        }
    }

    /**
     * Handlers
     */
    e_mousemove(e) {
        this.mousePos.x = e.clientX;
        this.mousePos.y = e.clientY;
    }

    e_mousenterEl(e) {
        gsap.to(this.circle, {
            autoAlpha: 1,
            scale: 1,
            duration: 0,
            transformOrigin: "center center"
        });
    }

    e_mouseleaveEl(e) {
        gsap.to(this.circle, {
            autoAlpha: 0,
            scale: 0.001,
            duration: 0,
            transformOrigin: "center center"
        });
    }

    e_mousenter() {
        gsap.to(this.circle, {
            scale: 148 / 36,
            duration: 0.3,
            ease: "power4.out",
            transformOrigin: "center center"
        });
    }

    e_mouseleave() {
        gsap.to(this.circle, {
            scale: 1,
            duration: 0.3,
            ease: "power4.out",
            transformOrigin: "center center"
        });
    }

    e_mousenterLink() {
        gsap.to(this.circle, {
            scale: 72 / 36,
            duration: 0.3,
            ease: "power4.out",
            transformOrigin: "center center"
        });
    }

    e_mouseleaveLink() {
        gsap.to(this.circle, {
            scale: 1,
            duration: 0.3,
            ease: "power4.out",
            transformOrigin: "center center"
        });
    }

    e_scroll(e) {
        // mettre à jour la position du wrapper (utile si le wrapper bouge)
        this.setRect();
    }

    e_resize(e) {
        this.setRect();
    }
}
