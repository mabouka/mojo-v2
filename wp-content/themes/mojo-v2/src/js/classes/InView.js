import ZoneObserver from './ZoneObserver';

// Apparition à l'écran (.js-in-view → .in-view, événement inView), une seule fois.
export default new ZoneObserver({
    selector: '.js-in-view',
    className: 'in-view',
    inEvent: 'inView',
    threshold: [0, 0.1],
    once: true,
});
