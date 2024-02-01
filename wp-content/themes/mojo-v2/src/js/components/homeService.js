
import gsap from "gsap";
import Observer from "gsap/Observer";
import { isTouchDevice } from "../utils/detect";
import Swiper from "swiper";

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

        const mq = window.matchMedia( "(max-width: 600px)" );

        if(!mq.matches){
            this.initIntro();
            this.initScroller();
        }
        else{
            this.groupSlide.classList.add('swiper');
            this.realSection.classList.add('swiper-wrapper');
            this.allCard.forEach(card => {
                card.classList.add('swiper-slide');
            });

            this.slider = new Swiper(this.groupSlide, {
                direction: 'horizontal',
                loop: true,
                autoHeight: true,
                slidesPerView: 'auto',
                spaceBetween: 35,
                grabCursor: true,
            });
        }
    }

    initIntro() {
        gsap.set(this.allCard, {
            "y" : 300,
            "x" : 100,
            rotate: '35deg',
            autoAlpha: 0
        });
        
        this.intro = gsap.timeline({
            duration: 1,
            scrollTrigger: {
                trigger: this.el,
                endTrigger: '.homeService__triggerStart',
                start: '-400px',
                //markers: true,
                scrub: true,         
                id:'appearing',
            }
        });

        for (let index = 0; index < this.allCard.length; index++) {
            let rotate = '2deg';
            if(index %2)  rotate = '-2deg';
            if(index === 1 ) rotate = '-1deg';
            let y = -25 * index * index / 3.5;
            if(index === 0 ) rotate = 0;

            this.intro.to(this.allCard[index], {
                autoAlpha: 1,
                duration: 0.2,
            },0.50 * index);

            this.intro.to(this.allCard[index], {
                "y" :y,
                "x" : 0,
                rotate: rotate,
                duration: 2,
                ease: "power3.out",
            },0.50 * index);
        }
    }


    initScroller() {

        this.main = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeService__triggerStart',
                endTrigger: '.homeService__triggerEnd',

                type: "pointer,touch",
                start: 'top',
                end: "100vh",
                scrub: true,
                pin: '.homeService__pin',
                //id:'animation',
                //markers: true
            }
        })
        this.main.to(this.groupSlide, 
            {
                x: () => {
                   return -(this.realSection.offsetWidth - this.container.offsetWidth)
                },
                ease: 'none',
                autoAlpha:1,
                duration:2
            },
        0
        );
        for (let index = 0; index < this.allCard.length; index++) {
            this.main.to(this.allCard[index], 
                {
                    "y" : 0,
                    duration:0.8,
                },
                0.15 * index 
            )
            this.main.to(this.allCard[index], 
                {
                    rotate: 0,
                    duration:0.8,
                    ease: "power2.out",
                },
                0.15 * index 
            )
        }
        this.addSwipeMovement();
    }

    addSwipeMovement() {
        if(!isTouchDevice()){
            this.el.addEventListener('dragstart', event => {
                event.preventDefault();
            });

            this.el.addEventListener('drop', event => {
                event.preventDefault();
            });

            Observer.create({
                axis: 'x',
                lockAxis: true,
                target: this.el,
                type: "wheel,pointer",
                id: "homeService",

                onDragStart	: (self) => {
                    self.startScroll = this.main.scrollTrigger.scroll();
                },

                onDrag: (self) => {
                    gsap.to(this.main.scrollTrigger, {
                        duration: 0.4,
                        ease: "power1.out",
                        scroll: self.startScroll + (self.startX - self.x) * 2
                    })
                }
            });
        }
    }
}