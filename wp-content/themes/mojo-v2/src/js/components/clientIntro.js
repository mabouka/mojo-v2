import gsap from "gsap";

export default class ClientIntro {

    static get selector() {
        //return '.clientIntro';
    }

    constructor(el) {
        console.log('start Client Intro');

        this.el = el;
        this.circleSection = this.el.querySelector('.clientIntro__circles');
        this.circle1 = this.el.querySelector('#circle1');
        this.circle2 = this.el.querySelector('#circle2');
        this.ray     = this.el.querySelector('.clientIntro__secondBg');

        this.text    = this.el.querySelector('.clientIntro__secondText');
        this.text2   = this.el.querySelector('.clientIntro__secondText2');


        gsap.set(this.circle1, {
            x: -1440/2
        })

        gsap.set(this.circle2, {
            x: 1440/2
        })

        this.main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: 'top',
                end: '+=2000',
                scrub: true,
                pin: true,
                //markers: true,
                id: "Intro",
                //invalidateOnRefresh: true,
            }
        })

        .to(this.circle1, {
            duration: 1, 
            ease: "power1.out",
            x: 0
        }, 0)

        .to(this.circle2, {
            duration: 1, 
            ease: "power1.out",
            x: 0
        }, 0)

        .to(this.circleSection, {
            duration: 2, 
            ease: "power2.out",
            maxHeight: 0,
            overwrite: true
        }, 2)

        .from(this.ray, {
            duration: 1.8, 
            ease: "expoScale(0.5,7,none)",
            scale: 0.05
        }, 2.2)


        console.log('end Client Intro');


    }
    /*
     * Events
     */

    e_resize() {
        console.log('intro resize');
        this.main.scrollTrigger.refresh();
        this.main.scrollTrigger.update();

    }
}