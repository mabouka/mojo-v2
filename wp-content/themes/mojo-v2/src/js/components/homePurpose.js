import LogoCursor from "../classes/LogoCursor";

export default class HomePurpose {

    static get selector() {
        return '.homePurpose';
    }

    constructor(el) {
        // Rayons en unités du SVG (viewBox 5000 × 5000, 1 unité = s(1)).
        this.logoCursor = new LogoCursor(el, {
            svg: '#purposeSvg',
            circle: '#purposeSvg_circle',
            sensible: '#purposeSensible',
            sensibleRadius: 74,
            touch: { x: 600, y: 4750, r: 90 },
        });
    }

    destroy() {
        this.logoCursor.destroy();
    }
}
