import ZoneObserver from './ZoneObserver';

// Ligne du milieu de l'écran (.js-is-center → .in-center, événements inCenter / outCenter).
export default new ZoneObserver({
    selector: '.js-is-center',
    className: 'in-center',
    inEvent: 'inCenter',
    outEvent: 'outCenter',
    rootMargin: '-50% 0% -50% 0%',
});
