import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class Scroller {

    constructor() {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

    
        window.lenis = new Lenis({
            duration: 1,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2.2
        });
        
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
        
        function raf(time) {
            window.lenis.raf(time)
            requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf);
        gsap.registerPlugin(ScrollTrigger);
        window.lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time)=>{
            window.lenis.raf(time * 1000);
        })
        gsap.ticker.lagSmoothing(0);
    }

    scrollTop() {

        window.lenis.scrollTo(0,{duration:0, force: true, immediate: true});
    }
}
