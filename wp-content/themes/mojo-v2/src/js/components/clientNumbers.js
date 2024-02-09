import gsap from "gsap";

export default class ClientNumbers {

    static get selector() {
        //return '.clientNumbers';
    }

    constructor(el) {
        this.el = el;
        this.svg = this.el.querySelector('.clientNumbers__svg');
        this.moon = this.el.querySelector('.clientNumbers__moon');

        this.starsAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: "top-=50%",
                end: "bottom",
                scrub: true,
                id: "numbers",
                invalidateOnRefresh: true,
            }
        })
        .to(this.svg, 
            {
                y: () => '75vh',
                ease: 'none',
                duration:2
            },
            0
        )

    }


    /*
     * Events
     */

    e_resize(e) {
        this.starsAnimation.scrollTrigger.refresh();
    }
}