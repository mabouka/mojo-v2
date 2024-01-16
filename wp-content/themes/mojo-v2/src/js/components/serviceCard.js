import gsap from "gsap";

export default class ServiceCard {

    static get selector() {
        return '.serviceCard--animated';
    }

    constructor(el) {
        this.el = el;
        this.isActive = false;
        this.bounds = this.el.getBoundingClientRect();
        this.pos = {
            x: 0,
            y: 0
        };
        this.setEvents();
        gsap.ticker.add(this.rotateToMouse.bind(this));
    }

    rotateToMouse() {
        if(!this.isActive) {
            this.el.style.transform = '';
            this.el.style.background = '';
            return;
        }
  
        const leftX = this.pos.x - this.bounds.x;
        const topY = this.pos.y - this.bounds.y;
        const center = {
            x: leftX - this.bounds.width / 2,
            y: topY - this.bounds.height / 2
        }
        const distance = Math.sqrt(center.x**2 + center.y**2);
        
        this.el.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance)* 2}deg
            )
        `;

        
        /*this.el.querySelector('.glow').style.backgroundImage = `
            radial-gradient(
            circle at
            ${center.x * 2 + this.bounds.width/2}px
            ${center.y * 2 + this.bounds.height/2}px,
            #ffffff55,
            #0000000f
            )
        `;*/
    }

    setEvents() {
        this.el.addEventListener('mousemove', this.e_mousemove.bind(this));
        this.el.addEventListener('mouseenter', this.e_mouseenter.bind(this));
        this.el.addEventListener('mouseleave', this.e_mouseleave.bind(this));
        window.addEventListener('scroll', this.e_scroll.bind(this));
    }


    /**
     * Handlers
     */

    e_mousemove(e) {
        this.pos = {
            x: e.clientX,
            y: e.clientY
        }
        //this.rotateToMouse();
    }

    e_scroll(e) {
        this.bounds = this.el.getBoundingClientRect();
    }

    e_mouseenter(e) {
        this.bounds = this.el.getBoundingClientRect();
        this.isActive = true;
    }
    e_mouseleave(e) {
        document.removeEventListener('mousemove', this.rotateToMouse.bind(this));
        this.isActive = false;
    }
}