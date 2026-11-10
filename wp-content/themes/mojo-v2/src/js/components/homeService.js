
import gsap from "gsap";
import Observer from "gsap/Observer";
import { isTouchDevice } from "../utils/detect";
import Swiper from "swiper";
import Listeners from "../utils/listeners";

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

        this.listeners = new Listeners();
        if (!isTouchDevice()) {
            this.listeners.on(this.el, 'dragstart', (e) => e.preventDefault());
            this.listeners.on(this.el, 'drop', (e) => e.preventDefault());
        }

        // Défilement horizontal au-dessus de 600 px, carrousel en dessous. Avec
        // matchMedia, le bon mode s'installe aussi après une rotation ou un
        // redimensionnement (avant, il était choisi une fois au chargement), et
        // tout ce qui a été créé dans un mode est défait en le quittant.
        this.mm = gsap.matchMedia();
        this.mm.add('(min-width: 601px)', () => {
            this.initIntro();
            this.initScroller();
            return () => {
                if (this.observer) this.observer.kill();
                this.observer = null;
            };
        });
        this.mm.add('(max-width: 600px)', () => {
            this.initSwiper();
            return () => this.destroySwiper();
        });
    }

    destroySwiper() {
        if (!this.slider) return;
        this.slider.destroy(true, true);
        this.slider = null;
        this.groupSlide.classList.remove('swiper');
        this.realSection.classList.remove('swiper-wrapper');
        this.allCard.forEach(card => card.classList.remove('swiper-slide'));
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
            this.observer = Observer.create({
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
                        overwrite: true,
                        ease: "power1.out",
                        scroll: self.startScroll + (self.startX - self.x) * 2
                    })
                }
            });
        }
    }

    // Ni l'Observer ni Swiper ne sont nettoyés par le ScrollTrigger.killAll()
    // du Router : le matchMedia défait le mode en cours (Observer, carrousel).
    destroy() {
        if (this.mm) this.mm.revert();
        if (this.listeners) this.listeners.removeAll();
    }
}
