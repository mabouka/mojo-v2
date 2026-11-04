import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default class ClientIntro {

    static get selector() {
        //return '.clientIntro';
    }

    constructor(el) {

        this.el = el;
        //part 1
        this.circleSection = this.el.querySelector('.clientIntro__circles');
        this.circle1 = this.el.querySelector('#circle1');
        this.circle2 = this.el.querySelector('#circle2');
        this.introText = this.el.querySelectorAll('.clientIntro__svgTitle');

        // part 2
        this.ray     = this.el.querySelector('.clientIntro__secondBg');
        this.text    = this.el.querySelector('.clientIntro__secondText');
        this.text2   = this.el.querySelector('.clientIntro__secondText2');

        this.launchScroll();

        /*
        this.promise = new Promise((resolve, reject) => {

            this.prepare().then(() => {
                this.doIntro().then(()=>{
                    this.launchScroll().then(() => {
                        resolve(this);                   
                    })
                })
            })
        });*/


    }

    async prepare() {
        window.lenis.stop();    

        gsap.set(this.circle1, {
            x: -(1440+550)/2
        })

        gsap.set(this.circle2, {
            x: (1440+550)/2
        })

        gsap.set(this.introText, {
            autoAlpha: 0
        })
    }


    doIntro() {
        this.intro = gsap.timeline({
            onComplete: () => {
                window.lenis.start();    
            }
        });

        Array.from(this.introText).forEach(text => {
            this.intro.to(text, {
                autoAlpha: 1,
                //ease: "expoScale(0.5,7,none)",
                duration: 0.5
            },0);
        })


        this.intro.to(this.circle1, {
            x: -(1440)/2,
            //ease: "expoScale(0.5,7,none)",
            duration: 0.5
        },0.5)

        this.intro.to(this.circle2, {
            x: (1440)/2,
            //ease: "expoScale(0.5,7,none)",
            duration: 0.5
        },0.5)

        return this.intro;
    }

    async launchScroll() {

        this.main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: 'top',
                // Recalculé à chaque refresh (redimensionnement, navigation).
                end: () => '+=' + (window.innerWidth <= 600 ? window.innerHeight : window.innerHeight * 2),
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                id: "Intro",
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

        // Le bloc des cercles se referme par le bas. Avant : max-height animé,
        // donc une mise en page complète à chaque image du défilement ; la
        // découpe (clip-path) ne fait que redessiner.
        .fromTo(this.circleSection, {
            clipPath: 'inset(0% 0% 0% 0%)',
        }, {
            duration: 2,
            ease: "power2.out",
            clipPath: 'inset(0% 0% 100% 0%)',
        }, 2)

        .from(this.ray, {
            duration: 1.8, 
            ease: "expoScale(0.5,7,none)",
            scale: 0.05
        }, 2.2)

          
    }
    /*
     * Events
     */

}