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
export { isTouchDevice, isMobile };