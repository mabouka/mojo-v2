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

        this.setRect();
        this.setEvents();
    }


    setRect() {
        this.svgRect = this.svgWrapper.getBoundingClientRect();
        this.svg.style.setProperty('--left', Math.round(this.svgRect.left) +'px');
        this.svg.style.setProperty('--top', Math.round(this.svgRect.top) +'px');
    }

    setEvents() {
        this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
        this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));
        window.addEventListener('scroll', (e)=>{ this.e_scroll(e)});
        window.addEventListener('resize', (e)=>{ this.e_resize(e)});
    }

    /**
     * Handlers
     */
 

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

    e_scroll(e){
        this.setRect();
    }

    e_resize(e){
        this.setRect();
    }
}