import gsap from "gsap";

export default class Contactform {

    static get selector() {
        return '.contact';
    }

    constructor(el) {
        this.el = el;
        this.svg = this.el.querySelector('.contact__svg');
        
        const main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: "top top",
                end: "bottom",
                scrub: true,

            }
        })
        .to(this.svg, 
            {
                y: () => 700,
                ease: 'none',
                duration:2
            },
            0
        )
    }
}