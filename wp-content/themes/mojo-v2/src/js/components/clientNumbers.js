import gsap from "gsap";

export default class ClientNumbers {

    static get selector() {
        //return '.clientNumbers';
    }

    constructor(el) {
        console.log('start Client Number');

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
        console.log('end Client Number');

    }


    /*
     * Events
     */

    e_resize(e) {
        console.log('number resize');
        this.starsAnimation.scrollTrigger.refresh();
    }
}