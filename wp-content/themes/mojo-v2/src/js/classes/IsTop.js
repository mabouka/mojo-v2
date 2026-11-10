import ZoneObserver from './ZoneObserver';

// Haut de l'écran (.js-is-top → .in-top, événements inTop / outTop).
export default new ZoneObserver({
    selector: '.js-is-top',
    className: 'in-top',
    inEvent: 'inTop',
    outEvent: 'outTop',
    rootMargin: '50% 0% -70% 0%',
});
