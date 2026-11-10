function isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
}

function isMobile() {
    return window.matchMedia("(max-width: 600px)").matches;
}

function isFirefox() {
    return /Firefox/i.test(navigator.userAgent);
}

// Souris ou trackpad branché : décide des effets au survol (et non la largeur
// d'écran). Même règle que le CSS du thème (any-pointer: fine) : JS et CSS
// activent les mêmes effets sur le même appareil.
function isMouse() {
    return window.matchMedia("screen and (any-pointer: fine)").matches;
}

export { isTouchDevice, isMobile, isFirefox, isMouse};
