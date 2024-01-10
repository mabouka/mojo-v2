import gsap from "gsap";

export default class commitmentsIntro {

    static get selector() {
        return '.commitmentsIntro';
    }

    constructor(el) {
        this.el = el;
        this.svg = this.el.querySelector('.commitmentsIntro__svg');
        this.path = this.svg.querySelector('#path');



        const main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: 'top top',
                end: "+=" + 800,
                scrub: true,
            }
        })
        .to(this.path, 
            {
                y: () => -130,
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