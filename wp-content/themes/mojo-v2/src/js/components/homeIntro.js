import {gsap} from "gsap";
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

        this.setEvents();
        if(window.homeAnimationDone === undefined) {
            this.preparePage();
        }
        else{
            this.launchScroll();
            inview.addElement(this.homeVideo);
            inview.addElement(this.header);
            this.el.classList.add('homeIntro--inview')

            gsap.to(this.moon, { 
                autoAlpha: 1,
                scale: 1,
                x: 0,
                rotate: 0,
                duration: 1,
                ease: "power3.out",
            }, 0);
    
    
            gsap.to(this.poly, {
                x: 0,
                rotate: 0,
                duration: 1.2,
                ease: "power3.out",
            }, 0);
        }
    }

    preparePage() {
        window.lenis.stop(); 
        this.body.classList.add('loading');

        gsap.set(this.moon, {
            scale : 0,
            x: '120vw',
            autoAlpha: 0,
            transformOrigin: '50% 50%'
        });

        // Les étoiles restent visibles (pas d'autoAlpha) : c'est l'élément LCP
        // de la home. Les masquer ici faisait dépendre le LCP de ce chunk JS
        // (course avec la première peinture), puis de leur fondu.
        gsap.set(this.stars, {
            scale : 0.8,
            transformOrigin: '50% 0%'
        });

        gsap.set(this.poly, {
            x: '120vw',
            transformOrigin: '60% 60%'
        });
        inview.addElement(this.el); // call Appearing animation
    }

    doAnimation() {
        const main = this.animation = gsap.timeline({})

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
        window.homeAnimationDone = true;
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
        this.e_inview = this.e_inview.bind(this);
        this.el.addEventListener('inView', this.e_inview)
    }

    // Page quittée pendant l'intro (~2,3 s) : sans ça, son onComplete relançait
    // Lenis en pleine transition et créait un ScrollTrigger sur l'ancienne page.
    // Lenis est relancé par le Router à l'arrivée sur la page suivante.
    destroy() {
        this.destroyed = true;
        this.el.removeEventListener('inView', this.e_inview);
        if (this.animation) this.animation.kill();
        if (this.main) this.main.kill();
        this.body.classList.remove('loading');
        // Le header (hors de la page, il reste) n'apparaît qu'à la fin de
        // l'intro : intro coupée, on l'affiche quand même.
        if (this.header) inview.addElement(this.header);
    }

    /**
     * Handlers
     */

    e_inview(e) {
        if (this.destroyed) return;
        this.doAnimation();
    }

}