import LogoCursor from "./LogoCursor";

// Footer hors du conteneur Barba : créé une seule fois (main.js).
export default class Footer {
    constructor() {
        this.el = document.querySelector('.footer');
        if (!this.el) return;

        // Rayons en unités du SVG (viewBox 5000 × 1500, 1 unité ≈ 1 px de la maquette).
        this.logoCursor = new LogoCursor(this.el, {
            svg: '#footerSvg',
            circle: '#footerSvg_circle',
            sensible: '#footer_sensible',
            sensibleRadius: 133,
            touch: { x: 2550, y: 1300, r: 90 },
        });
    }
}
