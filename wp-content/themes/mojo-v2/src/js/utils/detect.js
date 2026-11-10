function isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
}

function isMobile() {
    let isMobile = false;
    const mq = window.matchMedia( "(max-width: 600px)" );
    if(mq.matches){
        isMobile = true;
    } 

    return isMobile;
}

function isFirefox() {
    return /Firefox/i.test(navigator.userAgent);
}

function isMouse() {
    let isMouse = false;
    const mq = window.matchMedia( "screen and (any-pointer: fine)" );
    if(mq.matches){
        isMouse = true;
    } 
    return isMouse;
}
// Survol possible (souris, trackpad) : décide des effets au survol plutôt que
// la largeur d'écran (un iPad fait plus de 600 px mais n'a pas de survol).
function canHover() {
    return window.matchMedia('(hover: hover)').matches;
}
export { isTouchDevice, isMobile, isFirefox, isMouse, canHover};