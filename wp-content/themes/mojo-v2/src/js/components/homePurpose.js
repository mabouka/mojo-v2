import gsap from "gsap";
import { isMouse, isFirefox } from "../utils/detect";

export default class HomePurpose {

    static get selector() {
        return '.homePurpose';
    }

    constructor(el) {
        this.el = el;
        this.body= document.querySelector('body');
        this.svg = this.el.querySelector('#purposeSvg');
        this.svgWrapper = this.el.querySelector('.homePurpose__svgWrapper');
        this.circle = this.el.querySelector('#purposeSvg_circle');
        this.sensible = this.el.querySelector('#purposeSensible')
        this.links = this.el.querySelectorAll('a');

        this.mousePos = {
            x: 0,
            y: 0
        };

        this.scrollPos = {
            left: 0,
            top: 0
        };

        gsap.ticker.add(this.frame.bind(this))

        this.setRect();
        this.setEvents();
    }

    frame() {
        gsap.to('#purposeSvg_circle', {
            x: this.mousePos.x - this.scrollPos.left,
            y: this.mousePos.y - this.scrollPos.top,
            duration: 0.4,
            ease: "power2.out",
            transformOrigin: "center center"
        });
    }


    setRect() {
        this.svgRect = this.svgWrapper.getBoundingClientRect();
        this.scrollPos.left = this.svgRect.left;
        this.scrollPos.top  = this.svgRect.top;

        //this.svg.style.setProperty('--left', Math.round(this.svgRect.left * -1) +'px');
        //this.svg.style.setProperty('--top', Math.round(this.svgRect.top * -1) +'px');
    }

    setEvents() {
        window.lenis.on('scroll', (e) => { this.e_scroll(e)})
        window.addEventListener('resize', (e)=>{ this.e_resize(e)});

        if(isMouse()){
            this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
            this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));

            this.links.forEach((link) => {
                link.addEventListener('mouseenter', this.e_mousenterLink.bind(this));
                link.addEventListener('mouseleave', this.e_mouseleaveLink.bind(this));
            })
        }

        if(isFirefox()){ //quickfix firefox
            gsap.set('#purposeSvg_circle', {
                autoAlpha: 0,
                scale: 0.001
            });
            this.el.addEventListener('mouseenter', this.e_mousenterEl.bind(this));
            this.el.addEventListener('mouseleave', this.e_mouseleaveEl.bind(this));

            window.addEventListener('mousemove', this.e_mousemove.bind(this));
        }
    }

    /**
     * Handlers
     */

    e_mousemove(e) {
        this.mousePos.x = e.clientX;
        this.mousePos.y = e.clientY;
    }

    e_mousenterEl(e) {
        gsap.to('#purposeSvg_circle', {
            autoAlpha: 1,
            scale: 1,
            duration: 0,
            transformOrigin: "center center"
        });
    }

    e_mouseleaveEl(e) {
        gsap.to('#purposeSvg_circle', {
            autoAlpha: 0,
            scale: 0.001,
            duration: 0,
            transformOrigin: "center center"
        });
    }

    e_mousenter() {
        gsap.to('#purposeSvg_circle', {
            scale: 148/36,
            duration: 0.3,
            ease: "power4.out",
            transformOrigin: "center center"
        });
    }

    e_mouseleave() {
        gsap.to('#purposeSvg_circle', {
            scale: 1,  
            duration: 0.3,
            ease: "power4.out",
            transformOrigin: "center center"
        });
    }

    e_mousenterLink() {
        gsap.to('#purposeSvg_circle', {
            scale: 72/36,
            duration: 0.3,
            ease: "power4.out",
            transformOrigin: "center center"
        });
    }

    e_mouseleaveLink() {
        gsap.to('#purposeSvg_circle', {
            scale: 1,  
            duration: 0.3,
            ease: "power4.out",
            transformOrigin: "center center"
        });
    }

    e_scroll(e){
        this.setRect();
    }

    e_resize(e){
        this.setRect();
    }
}