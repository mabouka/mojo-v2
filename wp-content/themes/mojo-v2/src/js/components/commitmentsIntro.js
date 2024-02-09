import gsap from "gsap";

export default class commitmentsIntro {

    static get selector() {
        return '.commitmentsIntro';
    }

    constructor(el) {
        this.el         = el;
        this.svg        = this.el.querySelector('.commitmentsIntro__svg');
        this.path       = this.svg.querySelector('#path');
        this.circle     = this.svg.querySelector('#circle');
        this.content    = this.el.querySelector('.commitmentsIntro__content');
        
        this.mm = gsap.matchMedia();

        this.prepare();
        this.launchIntro();

    }

    prepare() {
        gsap.set(this.path, {
            y: '60%',
            autoAlpha: 0
        })

        gsap.set(this.circle, {
            y: '60%',
            autoAlpha: 0
        })
    }

    launchIntro() {
        this.intro = gsap.timeline({
            onComplete: () => {
                this.launchScroll();
            }
        });

        this.intro.to(this.circle, {
            y: 0,
            duration: 0.9,
            autoAlpha: 1,
            ease: "power3.out",
        },.5)

        this.intro.to(this.path, {
            y: 0,
            duration: 1.2,
            autoAlpha: 1,
            ease: "power3.out",
        },.5)
    }

    launchScroll() {

        

        this.scroll = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: 'top top',
                end: "+=" + 800,
                scrub: true,
            }
        });

        this.scroll.to(this.path, 
            {
                y: -130,
                duration:2
            },
            0
        )

        this.mm.add("(max-width: 600px)", () => {
            this.scrollShape = gsap.timeline({
                scrollTrigger: {
                    trigger: this.el,
                    start: 'top top',
                    end: "+=" + 500,
                    scrub: true,
                }
            });
    
            this.scrollShape.to(this.svg, 
                {
                    y: -300,
                    duration:2
                },
                0
            );


        });
        }
}