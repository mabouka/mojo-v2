import gsap from "gsap";

export default class Footer {
    constructor(el) {
        this.el = document.querySelector('.footer');
        if(!this.el) return;

        gsap.ticker.fps(60);
        this.body= document.querySelector('body');
        this.svg = this.el.querySelector('#footerSvg');
        this.svgWrapper = this.el.querySelector('.footer__svgWrapper');
        this.circle = this.el.querySelector('#footerSvg_circle');
        this.sensible = this.el.querySelector('#footer_sensible')
        this.links = this.el.querySelectorAll('a');

        this.setRect();
        this.setEvents();
    }

    setRect() {
        this.svgRect = this.svgWrapper.getBoundingClientRect();
        this.svg.style.setProperty('--left', Math.round(this.svgRect.left * -1) +'px');
        this.svg.style.setProperty('--top', Math.round(this.svgRect.top * -1) +'px');
    }

    setEvents() {
        this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
        this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));
        window.lenis.on('scroll', (e) => { this.e_scroll(e)})
       // window.addEventListener('scroll', (e)=>{ this.e_scroll(e)});
        window.addEventListener('resize', (e)=>{ this.e_resize(e)});
        this.links.forEach((link) => {
            link.addEventListener('mouseenter', this.e_mousenterLink.bind(this));
            link.addEventListener('mouseleave', this.e_mouseleaveLink.bind(this));
        })
    }

    /**
     * Handlers
     */
    e_mousenter() {
        gsap.to('#footerSvg_circle', {
            scale: 266/36,
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

    e_mousenterLink() {
        gsap.to('#footerSvg_circle', {
            scale: 72/36,
            duration: 0.3,
            ease: "expoScale(0.5,7,none)"
        });
    }

    e_mouseleaveLink() {
        gsap.to('#footerSvg_circle', {
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