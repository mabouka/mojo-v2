//import MobileMenu from './classes/MobileMenu';
import Pluton from '@whitecube/pluton';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import Cursor from './classes/cursor/index';
import MobileMenu from './classes/MobileMenu';
import InView from './classes/InView';
class Mojo {
    initCursor() {
        const options = {
            focusElements: [
                {
                    elements: '.menu__mainItem', // Can be nodelist or selector
                    focusClass: 'cursor--menuItem',
                },

                {
                    elements: '.serviceCard', // Can be nodelist or selector
                    focusClass: 'cursor--service',
                },
                'button',
                'a',
                {
                    elements: '.header--light', // Can be nodelist or selector
                    focusClass: 'cursor--dark'
                },
                {
                    elements: '#purposeSensible', // Can be nodelist or selector
                    focusClass: 'cursor--big'
                },
                {
                    elements: '.darkSection', // Can be nodelist or selector
                    focusClass: 'cursor--dark'
                },
                {
                    elements: '.footer', // Can be nodelist or selector
                    focusClass: 'cursor--hidden',
                },
                {
                    elements: '.homePurpose', // Can be nodelist or selector
                    focusClass: 'cursor--hidden',
                },

                {
                    elements: '.menu', // Can be nodelist or selector
                    focusClass: 'cursor--menu',
                }
            ]
        };

        this.cursor = new Cursor('.cursor', options).initialize();
    }
    
    constructor() {
        
        this.initCursor();
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
    window.document.documentElement.classList.add('js-active');
    
});
