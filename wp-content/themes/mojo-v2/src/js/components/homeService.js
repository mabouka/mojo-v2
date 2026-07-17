
import gsap from "gsap";
import Observer from "gsap/Observer";
import { isTouchDevice, isMobile } from "../utils/detect";
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
        this.triggerStart = this.el.querySelector('.homeService__triggerStart');
        this.triggerEnd = this.el.querySelector('.homeService__triggerEnd');
        this.pin = this.el.closest('.homeService__pin');

        if (!this.container || !this.groupSlide || !this.realSection || !this.allCard.length) {
            return;
        }

        if(!isMobile()){
            this.initIntro();
            this.initScroller();
        }
        else{
            this.initSwiper();
        }
    }

    initSwiper() {
        // Add Swiper Classes
        this.groupSlide.classList.add('swiper');
        this.realSection.classList.add('swiper-wrapper');
        this.allCard.forEach(card => {
            card.classList.add('swiper-slide');
        });

        // Init Slider
        this.slider = new Swiper(this.groupSlide, {
            direction: 'horizontal',
            loop: true,
            autoHeight: true,
            slidesPerView: 'auto',
            spaceBetween: 35,
            grabCursor: true,
        });
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
                endTrigger: this.triggerStart,
                start: '-400px',
                markers: false,
                scrub: true,         
                id:'appearing',
            }
        });

        for (let index = 0; index < this.allCard.length; index++) {
            let timing = 0.50 * index;

            this.intro.to(this.allCard[index], {
                autoAlpha: 1,
                duration: 0.2,
            }, timing);

            this.intro.to(this.allCard[index], {
                "y" : 0,
                "x" : 0,
                rotate: 0,
                duration: 2,
                ease: "power3.out",
            }, timing);
        }
    }


    initScroller() {
        const getScrollDistance = () => Math.max(this.realSection.offsetWidth - this.container.offsetWidth, 0);
        const scrollDistance = getScrollDistance();

        if (!scrollDistance) {
            return;
        }

        this.main = gsap.timeline({
            scrollTrigger: {
                trigger: this.triggerStart,
                type: "pointer,touch",
                start: 'top',
                end: () => `+=${getScrollDistance()}`,
                scrub: true,
                pin: this.pin,
                invalidateOnRefresh: true,
                //id:'animation',
                //markers: true
            }
        })
        this.main.to(this.groupSlide, 
            {
                x: () => {
                   return -getScrollDistance()
                },
                ease: 'none',
                autoAlpha:1,
                duration:2
            },
        0
        );
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
