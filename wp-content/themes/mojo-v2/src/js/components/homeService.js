
import gsap from "gsap";

export default class HomeService {

    static get selector() {
        return '.homeService';
    }

    constructor(el) {
        this.el = el;
        this.container   = this.el.querySelector('.homeService__cardContainer');
        this.groupSlide  = this.el.querySelector('.homeService__groupSlide');
        this.realSection = this.el.querySelector('.homeService__realSize');
        
        this.allCard     = this.el.querySelectorAll('.homeService__cardSlide');
        this.card1       = this.el.querySelector('#cardSlide-0');
        this.card2       = this.el.querySelector('#cardSlide-1');
        this.card3       = this.el.querySelector('#cardSlide-2');
        this.card4       = this.el.querySelector('#cardSlide-3');
        this.card5       = this.el.querySelector('#cardSlide-4');
        this.card6       = this.el.querySelector('#cardSlide-5');
        this.card7       = this.el.querySelector('#cardSlide-6');
        this.card8       = this.el.querySelector('#cardSlide-7');

        gsap.set(this.allCard, {
          autoAlpha:0,
          x: 500
        });

        gsap.set(this.card1, {
          "y" : -20,
          rotate: '-4deg',
        });

        gsap.set(this.card2, {
          "y" : -50,
          rotate: '-2deg',
        });

        gsap.set(this.card3, {
          "y" : -80,
          rotate: '2deg',
        });

        gsap.set(this.card4, {
          "y" : -120,
          rotate: '-2deg',
        });

        gsap.set(this.card5, {
          "y" : -200,
          rotate: '2deg',
        });

        gsap.set(this.card6, {
          "y" : -250,
          rotate: '-2deg',
        });


        gsap.set(this.card7, {
          "y" : -300,
          rotate: '2deg',
        });

        gsap.set(this.card8, {
          "y" : -270,
          rotate: '-2deg',
        });




        const main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: 'top',
                end: "+=" + 660,
                scrub: true,
                pin: true,
            }
        })
        .to(this.groupSlide, {
            x: () => -1320,
            ease: 'none',
            autoAlpha:1,
            duration:2},
            1.2
        )

        .to('.homeService__cardSlide', {
          "x" : 0,
          autoAlpha:1,
        },0)

        .to(this.card1, {
          "y" : 0,
          rotate: 0,
          duration:1,
        },0.1)

        .to(this.card2, {
          "y" : 0,
          rotate: 0,
          duration:1,
        },0.6)

        .to(this.card3, {
          "y" : 0,
          rotate: 0,
          duration:1,
        },0.8)

        .to(this.card4, {
          "y" : 0,
          rotate: 0,
          duration:1,
        },1.3)

        .to(this.card5, {
          "y" : 0,
          rotate: 0,
          duration:1,
        },1.7)

        .to(this.card6, {
          "y" : 0,
          rotate: 0,
          duration:1,
        },
        1.8)

        .to(this.card7, {
          "y" : 0,
          rotate: 0,
          duration:1,
        },1.9)

        .to(this.card8, {
          "y" : 0,
          rotate: 0,
          duration:1,
        },2.1)


    }



    setEvents() {

    }


    /**
     * Handlers
     */

    e_error(e) {

    }
}