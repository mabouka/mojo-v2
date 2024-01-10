//import MobileMenu from './classes/MobileMenu';
import Pluton from '@whitecube/pluton';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
//import cursor from './classes/cursor';
import MobileMenu from './classes/MobileMenu';
import InView from './classes/InView';
class Mojo {

    constructor() {
        //this.scroll = this.launchScroll();
        this.inview = InView;

        this.mobileMenu = new MobileMenu();
        this.parts = new Pluton();
    }
}
let scrollSetup = () => {
    window.lenis = new Lenis({
        lerp: 0.13,
    });

    function raf(time) {
        window.lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    gsap.registerPlugin(ScrollTrigger);

    window.lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
        window.lenis.raf(time * 1000);
    })
    
    gsap.ticker.lagSmoothing(0);

}

window.addEventListener("DOMContentLoaded", function (event) {
        scrollSetup();
    
        window.MJ = new Mojo();
        
});
