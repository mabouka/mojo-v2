import {gsap} from "gsap";
import inview from "../classes/InView";
import cookies from "../utils/cookies";
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

        this.setEvents();
        this.preparePage();
        inview.addElement(this.el); // call Appearing animation
    }

    preparePage() {
        window.lenis.stop(); 
        this.body.classList.add('loading');

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
        const main = gsap.timeline({})

        main.to(this.moon, { 
            autoAlpha: 1,
            scale: 1,
            x: 0,
            rotate: 0,
            duration: 1,
            ease: "power3.out",
        }, 1);

        main.add( () => {
            this.el.classList.add('homeIntro--inview')
        }, 0.2)

        main.to(this.poly, {
            x: 0,
            rotate: 0,
            duration: 1.2,
            ease: "power3.out",
        }, 1.1);

        main.to(this.stars, {
            autoAlpha: 1,
            scale: 1,
            duration: 2,
            ease: "power3.out",
        }, 0)

        main.eventCallback("onComplete",() => {
            this.body.classList.remove('loading');
            window.lenis.start();
            inview.addElement(this.homeVideo);
            inview.addElement(this.header);
            this.launchScroll();
        })

        cookies.set('mojo-animation', 'done', 1);
    }

    launchScroll() {
        this.main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: '+=1',
                scrub: true,
                //markers: true,
                id: "scroll",
            }
        })

        .to(this.poly, {
            duration: 1, 
            y: -250
        }, 0)

        .to(this.moon, {
            duration: 1, 
            y: -165
        }, 0)

        .to(this.stars, {
            duration: 1, 
            y: -75
        },0);
    }
 
    setEvents() {
        this.el.addEventListener('inView', this.e_inview.bind(this))
    }

    /**
     * Handlers
     */

    e_inview(e) {
        this.doAnimation();
    }

}