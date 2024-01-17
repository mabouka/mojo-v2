import {gsap} from "gsap";
//import SplitText from "../classes/splitText";
import inview from "../classes/InView";

export default class HomeIntro {

    static get selector() {
        return '.homeIntro';
    }

    constructor(el) {
        this.el = el;
        this.body= document.querySelector('body');
        
        this.header = document.querySelector('.header');
        this.homeVideo = document.querySelector('.homeVideo');
        this.stars = document.querySelector('.homeIntro__stars');

        //shapes
        this.poly = this.el.querySelector('#poly');
        this.moon = this.el.querySelector('#moon');

        // title
        this.lines = this.getLines();


        //gsap.ticker.add(this.doOneFrame.bind(this));

        this.setEvents();
        this.lockPage();

        inview.addElement(this.el);
    }

    lockPage() {
        window.scrollTo(0,0);
        window.lenis.stop(); 

        gsap.set(this.moon, {
            scale : 0,
            x: '70vw',
            autoAlpha: 0,
            transformOrigin: '50% 50%'
        });

        gsap.set(this.stars, {
            autoAlpha: 0,
            scale : 0.8,
            transformOrigin: '50% 0%'
        });
  

        gsap.set(this.poly, {
            x: '70vw',
            transformOrigin: '60% 60%'
        });
        
    }

    doAnimation() {
        //

        const main = gsap.timeline({
        })

        main.to(this.moon, { 
            autoAlpha: 1,
            scale: 1,
            x: 0,
            rotate: 0,
            duration: 1,
            ease: "power3.out",
        }, 0);

        main.add( () => {
            this.el.classList.add('homeIntro--inview')
        }, 1.2)

        main.to(this.poly, {
            x: 0,
            rotate: 0,
            duration: 1.2,
            ease: "power3.out",
        }, 0.1);

        main.to(this.stars, {
            autoAlpha: 1,
            scale: 1,
            duration: 2.5,
            ease: "power3.out",
        }, 0)

        main.eventCallback("onComplete",() => {

            window.lenis.start();
            inview.addElement(this.homeVideo);
            inview.addElement(this.header);
        })
    }

    getLines() {
        let lines = [];
        let elements = this.el.querySelectorAll('.homeIntro__titleLine');
        Array.from(elements).forEach((element) => {
            let line = {};
                line.el = element;
                line.span = element.querySelector('span');
                line.isShow = false;

            lines.push(line);
        })
    }

    raf() {

    }


    setEvents() {
        this.el.addEventListener('inView', this.e_inview.bind(this))
    }


    /**
     * Handlers
     */

    e_inview(e) {
        console.log('inview');
        setTimeout(() => {
            this.doAnimation();
        }, 200);
    }

    e_resize(e) {
        this.rect =this.body.getBoundingClientRect();
    }
}