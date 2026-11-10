import ZoneObserver from './ZoneObserver';

// Quart supérieur de l'écran (.js-is-top-medium → .in-top-medium, événements
// inTopMedium / outTopMedium) : lecture des vidéos des cartes de cas sans souris.
export default new ZoneObserver({
    selector: '.js-is-top-medium',
    className: 'in-top-medium',
    inEvent: 'inTopMedium',
    outEvent: 'outTopMedium',
    rootMargin: '-25% 0% -75% 0%',
});
