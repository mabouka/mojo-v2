import gsap from "gsap";

export default class Footer {

    static get selector() {
        return '.footer';
    }

    constructor(el) {
        this.el = el;
        this.body= document.querySelector('body');
        this.svg = this.el.querySelector('#footerSvg');
        this.svgWrapper = this.el.querySelector('.footer__svgWrapper');
        this.svgRect = this.svgWrapper.getBoundingClientRect();
        this.circle = this.el.querySelector('#footerSvg_circle');
        this.sensible = this.el.querySelector('#footer_sensible')

        this.pos = {
            x: 0,
            y: 0
        };

        gsap.ticker.add(this.updatePosition.bind(this));


        this.setEvents();
    }

    show() {
        gsap.to('#footerSvg_circle', {
            autoAlpha: 1,
            duration: 0.2,
            ease: "linear"
        });
    }

    hide() {
        gsap.to('#footerSvg_circle', {
            autoAlpha: 0,
            duration: 0.2,
            ease: "linear"
        });
    }

    updatePosition() {
        this.svg.style.setProperty('--x', Math.round(this.pos.x-this.svgRect.left) +'px');
        this.svg.style.setProperty('--y', Math.round(this.pos.y-this.svgRect.top) +'px');
    }

    setEvents() {
        document.documentElement.addEventListener('mousemove', (e)=>{ this.e_mousemove(e)});
        //this.el.addEventListener('mouseleave', (e)=>{ this.e_mouseleaveFooter(e)});
        this.cursor
        window.addEventListener('scroll', (e)=>{ this.e_scroll(e)});
        window.addEventListener('resize', (e)=>{ this.e_resize(e)});
        this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
        this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));
    }

    /**
     * Handlers
     */
    e_mousemove(e) {
        this.show();
        this.pos = {
            x : e.clientX,
            y : e.clientY
        };
        //this.updatePosition();
    }

    e_mousenter() {
        gsap.to('#footerSvg_circle', {
            scale: 10.1666666667,
            duration: 0.3,
            ease: "expoScale(0.5,7,none)"
        });

    }

    e_mouseleave() {
        gsap.to('#footerSvg_circle', {
            scale: 1,  
            duration: 0.3,
            ease: "expoScale(0.5,7,none)"
        });
    }
    
    e_scroll(e){
        this.hide();
        this.svgRect = this.svgWrapper.getBoundingClientRect();
    }

    e_resize(e){
        this.hide();
        this.svgRect = this.svgWrapper.getBoundingClientRect();
    }

    e_mouseleaveFooter(){
        this.hide();
    }
}