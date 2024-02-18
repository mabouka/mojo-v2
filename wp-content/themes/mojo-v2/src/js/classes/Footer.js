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
        this.isFirefox = /Firefox/i.test(navigator.userAgent);

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

        if(this.isFirefox){ //quickfix firefox
            gsap.set('#footerSvg_circle', {
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
        gsap.to('#footerSvg_circle', {
            x: e.clientX - this.svgRect.left,
            y: e.clientY - this.svgRect.top,
            duration: 0.4,
            ease: "power2.out"
        });
    }

    e_mousenterEl(e) {
        console.log(e);

        gsap.to('#footerSvg_circle', {
            autoAlpha: 1,
            scale: 1,
            duration: 0
        });
    }

    e_mouseleaveEl(e) {
        console.log(e);
        gsap.to('#footerSvg_circle', {
            autoAlpha: 0,
            scale: 0.001,
            duration: 0,
        });
    }
 




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