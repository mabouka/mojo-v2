import gsap from "gsap";

export default class Footer {

    static get selector() {
        return '.footer';
    }

    constructor(el) {
        gsap.ticker.fps(60);

        this.el = el;
        this.body= document.querySelector('body');
        this.svg = this.el.querySelector('#footerSvg');
        this.svgWrapper = this.el.querySelector('.footer__svgWrapper');
        this.svgRect = this.svgWrapper.getBoundingClientRect();
        this.circle = this.el.querySelector('#footerSvg_circle');
        this.sensible = this.el.querySelector('#footer_sensible')

        this.isShow = false;
        this.pos = {
            x: 0,
            y: 0
        };

        this.setEvents();
    }

    show() {
        if(this.isShow) return;
        this.svg.classList.add('show');
        this.isShow = true;
    }


    hide() {
        if(!this.isShow) return;
        this.svg.classList.remove('show');
        this.isShow = false;
    }

    showAnim() {
        this.svg.classList.add('showAnim');
    }

    hideAnim() {
        this.svg.classList.remove('showAnim');
    }


    updatePosition() {
        this.svg.style.setProperty('--x', Math.round(this.pos.x-this.svgRect.left) +'px');
        this.svg.style.setProperty('--y', Math.round(this.pos.y-this.svgRect.top) +'px');
    }


    setEvents() {
        this.el.addEventListener('mousemove', (e)=>{ this.e_mousemove(e)});
        window.addEventListener('scroll', (e)=>{ this.e_scroll(e)});
        window.addEventListener('resize', (e)=>{ this.e_resize(e)});

        this.sensible.addEventListener('mouseenter', this.e_mousenter.bind(this));
        this.sensible.addEventListener('mouseleave', this.e_mouseleave.bind(this));

        this.el.addEventListener('mouseenter', this.e_mousenterEl.bind(this));
        this.el.addEventListener('mouseleave', this.e_mouseleaveEl.bind(this));
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

    e_mousenterEl() {
        gsap.ticker.add(this.updatePosition.bind(this));
        setTimeout(() => {  
            this.showAnim();
        }, 100);

    }

    e_mouseleaveEl() {
        gsap.ticker.remove(this.updatePosition.bind(this));
        this.hide();
        this.hideAnim();
    }
    
    e_scroll(e){
        this.svgRect = this.svgWrapper.getBoundingClientRect();
    }

    e_resize(e){
        this.svgRect = this.svgWrapper.getBoundingClientRect();
    }
}