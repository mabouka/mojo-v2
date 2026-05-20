import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile } from '../utils/detect';

// Stub used on mobile to keep callers (Menu.stop/start, Router scrollTo, etc.)
// working without loading Lenis or running smooth-scroll.
function createLenisStub() {
    const noop = () => {};
    return {
        raf: noop,
        stop: noop,
        start: noop,
        resize: noop,
        on: noop,
        off: noop,
        scrollTo(target, opts = {}) {
            const y = typeof target === 'number'
                ? target
                : (target && typeof target.getBoundingClientRect === 'function'
                    ? window.scrollY + target.getBoundingClientRect().top
                    : 0);
            window.scrollTo({ top: y, behavior: opts.immediate ? 'auto' : 'smooth' });
        }
    };
}

export default class Scroller {

    constructor() {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        // Mobile: skip Lenis + ScrollTrigger entirely. Use native scroll and a
        // lightweight stub so existing window.lenis.* callsites keep working.
        if (isMobile()) {
            window.lenis = createLenisStub();
            return;
        }

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
            window.lenis.raf(time);
            requestAnimationFrame(raf);
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
