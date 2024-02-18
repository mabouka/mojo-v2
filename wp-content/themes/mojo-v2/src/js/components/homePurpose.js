import gsap from "gsap";

export default class HomePurpose {

    static get selector() {
        return '.homePurpose';
    }

    constructor(el) {
        gsap.ticker.fps(60);
        this.el = el;
        this.body= document.querySelector('body');
        this.svg = this.el.querySelector('#purposeSvg');
        this.svgWrapper = this.el.querySelector('.homePurpose__svgWrapper');
        this.circle = this.el.querySelector('#purposeSvg_circle');
        this.sensible = this.el.querySelector('#purposeSensible')
        this.links = this.el.querySelectorAll('a');
        this.isFirefox = /Firefox/i.test(navigator.userAgent);
        this.isMouse = window.matchMedia("screen and (any-pointer: fine)")

        this.setRect();
        this.setEvents();
    }


    setRect() {
        this.svgRect = this.svgWrapper.getBoundingClientRect();
        this.svg.style.setProperty('--left', Math.round(this.svgRect.left * -1) +'px');
        this.svg.style.setProperty('--top', Math.round(this.svgRect.top * -1) +'px');
    }

    setEvents() {
        window.lenis.on('scroll', (e) => { this.e_scroll(e)})
        window.addEventListener('resize', (e)=>{ this.e_resize(e)});

        if(this.isMouse.matches){
            this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
            this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));

            this.links.forEach((link) => {
                link.addEventListener('mouseenter', this.e_mousenterLink.bind(this));
                link.addEventListener('mouseleave', this.e_mouseleaveLink.bind(this));
            })
        }

        if(this.isFirefox){ //quickfix firefox
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
        gsap.to('#purposeSvg_circle', {
            x: e.clientX - this.svgRect.left,
            y: e.clientY - this.svgRect.top,
            duration: 0.4,
            ease: "power2.out"
        });
    }

    e_mousenterEl(e) {

        gsap.to('#purposeSvg_circle', {
            autoAlpha: 1,
            scale: 1,
            duration: 0
        });
    }

    e_mouseleaveEl(e) {
        console.log(e);
        gsap.to('#purposeSvg_circle', {
            autoAlpha: 0,
            scale: 0.001,
            duration: 0,
        });
    }
 

    e_mousenter() {
        gsap.to('#purposeSvg_circle', {
            scale: 148/36,
            duration: 0.3,
            ease: "expoScale(0.5,7,none)"
        });
    }

    e_mouseleave() {
        gsap.to('#purposeSvg_circle', {
            scale: 1,  
            duration: 0.3,
            ease: "expoScale(0.5,7,none)"
        });
    }

    e_mousenterLink() {
        gsap.to('#purposeSvg_circle', {
            scale: 72/36,
            duration: 0.3,
            ease: "expoScale(0.5,7,none)"
        });
    }

    e_mouseleaveLink() {
        gsap.to('#purposeSvg_circle', {
            scale: 1,  
            duration: 0.3,
            ease: "expoScale(0.5,7,none)"
        });
    }

    e_scroll(e){
        this.setRect();
    }

    e_resize(e){
        this.setRect();
    }
}