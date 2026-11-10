// FIRST APPLE-LIKE EFFECT:
// Sync video with scroll

// ffmpeg -i mojo_globe_01.mov -qscale:v 1  -vf "fps=25,scale=1285:-1" images/globe-1285-%04d.jpg
// `for file in images/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ordre de chargement des images : une sur 16, puis une sur 8, 4, 2, 1.
// L'animation est jouable dès les premières (image chargée la plus proche),
// puis s'affine.
function loadOrder(count) {
    const order = [];
    const seen = new Set();
    for (let step = 16; step >= 1; step /= 2) {
        for (let i = 0; i < count; i += step) {
            if (!seen.has(i)) { seen.add(i); order.push(i); }
        }
    }
    if (!seen.has(count - 1)) order.push(count - 1);
    return order;
}

export default class Globe {

    static get selector() {
        //return '.globe';
    }

    constructor(el) {
        this.el              = el;
        this.baseUrl         = el.dataset.baseUrl;
        this.inside          = el.querySelector('.globe__inside');
        this.right           = el.querySelector('.globe__right');

        this.canvas          = el.querySelector('.globe__anim');
        this.context         = this.canvas.getContext('2d');
        this.canvas.width    = 1285;
        this.canvas.height   = 952;

        this.drawn           = -1; // index de l'image affichée
        this.firstFrame      = 53;
        this.frameCount      = 250;
        // WebP est lu par tous les navigateurs depuis 2020. L'ancien test était
        // asynchrone : les ScrollTriggers étaient créés après le refresh() de
        // Barba, avec des positions fausses (~1 transition sur 2).
        this.fileType        = 'webp';

        this.anim = {
            frame: 0
        }

        this.initialize();
    }

    // Annule les animations, leurs ScrollTriggers, l'écoute des media queries
    // et les chargements en attente.
    destroy() {
        if (this.mm) this.mm.revert();
        if (this.observer) this.observer.disconnect();
        this.destroyed = true;
    }

    initialize() {
        this.frames = [];
        for (let i = this.firstFrame; i <= this.frameCount; i++) {
            this.frames.push({ src: this.getImageUrl(i), image: null, ready: false });
        }

        // Avant : les ~200 images (5,7 Mo) partaient à l'ouverture de la page,
        // tout en bas. Elles partent maintenant quand le globe approche.
        this.loadFrame(0);
        this.observer = new IntersectionObserver((entries) => {
            if (!entries.some((e) => e.isIntersecting)) return;
            this.observer.disconnect();
            this.loadAll();
        }, { rootMargin: '150% 0px 150% 0px' });
        this.observer.observe(this.el);

        this.mm = gsap.matchMedia();

        // Positions en fonctions + invalidateOnRefresh : recalculées à chaque
        // refresh (redimensionnement, navigation), au lieu d'être figées à la
        // hauteur de fenêtre du chargement.
        this.mm.add("(min-width: 601px)", () => {
            this.scrubFrames({
                start: () => "top-=" + (window.innerHeight / 2),
                end: () => "bottom-=" + (window.innerHeight / 8 * 5),
            });

            gsap.to(this.right, {
                y: () => this.inside.offsetHeight - this.right.offsetHeight,
                ease: "none",
                scrollTrigger: {
                    trigger: this.el,
                    start: "top-=200",
                    end: "bottom-=850",
                    scrub: true,
                    invalidateOnRefresh: true,
                    id: "globe",
                },
            });
        });

        this.mm.add("(max-width: 600px)", () => {
            this.scrubFrames({
                start: "top+=200",
                end: () => "top+=" + window.innerHeight,
            });
        });
    }

    scrubFrames({ start, end }) {
        gsap.to(this.anim, {
            frame: this.frames.length - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: this.el,
                start,
                end,
                scrub: true,
                invalidateOnRefresh: true,
                id: "globe-canvas",
            },
            onUpdate: () => this.render(),
        });
    }

    // Six chargements en parallèle, dans l'ordre grossier → fin.
    loadAll() {
        const queue = loadOrder(this.frames.length);
        const next = () => {
            if (this.destroyed) return;
            const index = queue.shift();
            if (index === undefined) return;
            this.loadFrame(index).then(next);
        };
        for (let i = 0; i < 6; i++) next();
    }

    loadFrame(index) {
        const frame = this.frames[index];
        if (frame.promise) return frame.promise;
        const img = new Image();
        img.src = frame.src;
        frame.image = img;
        // decode() : l'image est décodée hors du fil principal avant d'être
        // dessinée, pas pendant le défilement.
        // Échec de decode() : l'image est déjà chargée ou en erreur (load/error
        // passés), attendre ces événements bloquerait ce chargeur pour de bon.
        frame.promise = img.decode()
            .catch(() => {})
            .then(() => {
                frame.ready = img.naturalWidth > 0;
                // Image attendue qui arrive : on l'affiche.
                if (frame.ready) this.render(true);
            });
        return frame.promise;
    }

    // Image chargée la plus proche de celle demandée : jamais de canevas vide.
    nearestReady(index) {
        for (let d = 0; d < this.frames.length; d++) {
            if (this.frames[index - d] && this.frames[index - d].ready) return index - d;
            if (this.frames[index + d] && this.frames[index + d].ready) return index + d;
        }
        return -1;
    }

    getImageUrl(index) {
        let paddedIndex = index.toString().padStart(4, '0');
        return `${this.baseUrl}globe-1285-${paddedIndex}.${this.fileType}`;
    }

    render(force = false) {
        const index = this.nearestReady(Math.round(this.anim.frame));
        if (index < 0 || (index === this.drawn && !force)) return;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.frames[index].image, 0, 0);
        this.drawn = index;
    }
}
