//import MobileMenu from './classes/MobileMenu';
import Pluton from '@whitecube/pluton';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import Cursor from './classes/cursor/index';
import MobileMenu from './classes/MobileMenu';
import InView from './classes/InView';
class Mojo {
    
    constructor() {
        this.inview = InView;
        
        const options = {
            focusElements: [
                {
                    elements: '.serviceCard', // Can be nodelist or selector
                    focusClass: 'cursor--service',
                    mouseenter: () => {
                        // Run in addition to adding the focusClass
                        console.log('Hi!! I entered <a id="#special-focus">')
                    },
                    mouseleave: () => {
                        // Run in addition to removing the focusClass
                        console.log(`Cya!! I'm leaving <a id="#special-focus">`)
                    },
                },
                'button',
                'a',
                
                {
                    elements: '.darkSection', // Can be nodelist or selector
                    focusClass: 'cursor--dark'
                },
                {
                    elements: '.footer', // Can be nodelist or selector
                    focusClass: 'cursor--hidden',
                },
            ],
            
        };
        this.cursor = new Cursor('.cursor', options).initialize();
        
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
