// Globe — canvas frame-scrubbing animation piloté par scroll.
//
// Génération des frames :
//   ffmpeg -i mojo_globe_01.mov -qscale:v 1 -vf "fps=25,scale=1285:-1" \
//     images/globe-1285-%04d.jpg
//   for f in images/*; do cwebp -q 50 "$f" -o "${f%.*}.webp"; done

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default class Globe {

    static get selector() {
        // sélecteur géré via SELECTOR_OVERRIDES dans Pluton.js (.globe)
    }

    constructor(el) {
        this.el      = el;
        this.baseUrl = el.dataset.baseUrl;
        this.inside  = el.querySelector('.globe__inside');
        this.right   = el.querySelector('.globe__right');
        this.canvas  = el.querySelector('.globe__anim');
        if (!this.canvas) return;

        this.context       = this.canvas.getContext('2d');
        this.canvas.width  = 1285;
        this.canvas.height = 952;

        this.currentFrame = -1;
        this.firstFrame   = 53;
        this.frameCount   = 250;
        // WebP supporté universellement depuis 2020 (iOS 14+ inclus).
        // L'ancien check via Image data-URL était asynchrone — son onload
        // fire APRÈS le retour du constructor, donc Pluton.setup résolvait
        // avant que les ScrollTriggers n'existent → race avec
        // ScrollTrigger.refresh() de barba.afterEnter, animation cassée
        // ~1 fois sur 2 en transition Barba.
        this.fileType = 'webp';
        this.anim     = { frame: 0 };

        this.initialize();
    }

    initialize() {
        this.images = this.getImages();
        this.images[this.anim.frame].image.onload = this.render.bind(this); // render first image

        this.mm = gsap.matchMedia();

        this.mm.add("(min-width: 601px)", () => {
            this.animation = gsap.to(this.anim, {
                frame: this.images.length - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: this.el,
                    start: "top-=" + (window.innerHeight / 2),
                    end: "bottom-=" + (window.innerHeight / 8 * 5),
                    scrub: true,
                    id: "globe-canvas",
                },
                onUpdate: () => this.render(),
            });
        });

        this.mm.add("(max-width: 600px)", () => {
            this.animation = gsap.to(this.anim, {
                frame: this.images.length - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: this.el,
                    start: "top+=" + 200,
                    end: "top+=" + window.innerHeight,
                    scrub: true,
                    id: "globe-canvas",
                },
                onUpdate: () => this.render(),
            });
        });

        this.mm.add("(min-width: 601px)", () => {
            let height = this.inside.offsetHeight - this.right.offsetHeight;

            this.main = gsap.timeline({
                scrollTrigger: {
                    trigger: this.el,
                    start: "top-=200",
                    end: "bottom-=850",
                    scrub: true,
                    id: "globe",
                    ease: "none",
                },
            })
            .to(this.right, {
                y: height,
                ease: "none",
                duration: 1,
            }, 0);
        });
    }

    getImages() {
        let images = [];
        for (let i = this.firstFrame; i <= this.frameCount; i++) {
            let item = {};
            item.frameIndex = i;
            item.src        = this.getImageUrl(i);
            item.loaded     = false;
            item.image      = this.preloadImage(item.src);
            item.image.onload = () => { item.loaded = true; };

            // retry preload si l'image n'a pas répondu (réseau capricieux)
            setTimeout(() => { item.loaded ? null : this.preloadImage(item.src); }, 1000);
            setTimeout(() => { item.loaded ? null : this.preloadImage(item.src); }, 1500);

            images.push(item);
        }
        return images;
    }

    getImageUrl(index) {
        const paddedIndex = index.toString().padStart(4, '0');
        return `${this.baseUrl}globe-1285-${paddedIndex}.${this.fileType}`;
    }

    preloadImage(src) {
        const img = new Image();
        img.src   = src;
        return img;
    }

    render() {
        try {
            if (this.anim.frame !== this.currentFrame) {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.drawImage(this.images[this.anim.frame].image, 0, 0);
                this.currentFrame = this.anim.frame;
            }
        } catch (error) {
            console.error('[Globe] render error', error, 'frame:', this.anim.frame);
        }
    }

    /*
     * Events
     */

    e_resize() {
        if (this.main) {
            this.main.scrollTrigger.refresh();
        }
    }

    /*
     * Cleanup — appelé par Pluton.destroy() lors d'une transition Barba.
     * Sans ça, les contextes matchMedia s'accumulent et les ScrollTrigger
     * tués par ScrollTrigger.killAll() laissaient leurs revert handlers
     * orphelins dans gsap, polluant les transitions suivantes.
     */
    destroy() {
        if (this.mm)        this.mm.revert();
        if (this.animation) this.animation.kill();
        if (this.main)      this.main.kill();
    }
}
