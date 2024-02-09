import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default class ClientIntro {

    static get selector() {
        //return '.clientIntro';
    }

    constructor(el) {
        console.log('start Client Intro');

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
                        console.log('end Client Intro');
                   

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

        let height = window.innerHeight * 2;

        if(window.innerWidth <= 600)  {
            height = window.innerHeight;
        }
        
        this.main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: 'top',
                end: '+=' + height, // +=600
                scrub: true,
                pin: true,
                //markers: true,
                id: "Intro",
                onUpdate: () => {
                   // this.circleSection.style.maxHeight = window.innerHeight + 'px';
                }
                //normalizeScroll: true
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

          
    }
    /*
     * Events
     */

    e_resize() {
        console.log('intro resize', this);
        if(this.main) {
            this.main.scrollTrigger.refresh();
            this.main.scrollTrigger.update();
        }
    }
}