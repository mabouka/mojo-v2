// Écouteurs d'un composant, retirés d'un coup dans son destroy().
export default class Listeners {

    constructor() {
        this.items = [];
    }

    on(target, type, fn, options) {
        if (!target) return;
        target.addEventListener(type, fn, options);
        this.items.push([target, type, fn, options]);
    }

    removeAll() {
        this.items.forEach(([target, type, fn, options]) => target.removeEventListener(type, fn, options));
        this.items = [];
    }
}
