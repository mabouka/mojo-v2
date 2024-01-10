import gsap from "gsap";

export default class CommitmentsEarth {

    static get selector() {
        return '.commitmentsEarth';
    }

    constructor(el) {
        this.el = el;
        this.svg = this.el.querySelector('.commitmentsEarth__svg');
        
        const main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: 'top-=600',
                end: "bottom",
                scrub: true,
            }
        })
        .to(this.svg, 
            {
                y: 450,
                ease: 'none',
                duration:2
            },
            0
        )
    }

    setEvents() {

    }


    /**
     * Handlers
     */

    e_error(e) {

    }
}