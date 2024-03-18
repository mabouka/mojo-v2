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
export { isTouchDevice, isMobile, isFirefox, isMouse};