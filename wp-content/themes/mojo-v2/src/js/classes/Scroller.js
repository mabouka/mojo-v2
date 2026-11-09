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
            touchMultiplier: 2.2
        });

        // Une seule boucle : le ticker de GSAP (méthode recommandée par Lenis).
        // Il y en avait trois (deux requestAnimationFrame en plus) avec deux
        // horloges différentes : Lenis recevait à chaque frame des écarts de
        // temps qui changeaient de signe, d'où un défilement irrégulier.
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
