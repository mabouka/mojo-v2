import {gsap} from "gsap";
//import SplitText from "../classes/splitText";

export default class HomeIntro {

    static get selector() {
        //return '.homeIntro';
    }

    constructor(el) {
        this.el = el;
        this.body= document.querySelector('body');

        

        //shapes
        this.poly = this.el.querySelector('#poly');
        this.moon = this.el.querySelector('#moon');


        //stars 
        this.point = this.el.querySelector('.point');
        this.bubble = this.el.querySelector('.bublle');
        this.crushDisc = this.el.querySelector('.crushDisc');
        this.discStar = this.el.querySelector('.discStar');
        this.squareStar = this.el.querySelector('.squareStar');

        this.rect =this.body.getBoundingClientRect();
        this.mouse = {x: 0, y: 0, moved: false};

        // Ticker event will be called on every frame
        gsap.ticker.add(this.doOneFrame.bind(this));

        this.setEvents();

    }

    doOneFrame() {
        if (!this.mouse.moved) return;
        this.parallaxIt(this.moon, 150, 0.2, "power4.out");
        this.parallaxIt(this.poly, 40, 0.2,"power4.out");

        this.parallaxIt('.squareStar', -5, 0.2, "power4.out");
        this.parallaxIt('.bubble', 10, 0.2,"power4.out");
        this.parallaxIt('.crushDisc', 23, 0.2, "power4.out");
        this.parallaxIt('.discStar', -7, 0.2,"power4.out");
        this.parallaxIt('.point', 5, 0.2,"power4.out");
    }

    parallaxIt(target, movement, duration, ease) {
        gsap.to(target, {
            duration: duration,
            ease: ease,
            x: (this.mouse.x - this.rect.width / 2) / this.rect.width * movement,
            y: (this.mouse.y - this.rect.height / 2) / this.rect.height * movement
        });
    }

    setEvents() {
        this.body.addEventListener('mousemove', this.e_mousemove.bind(this));
        this.body.addEventListener('resize', this.e_resize.bind(this));
    }


    /**
     * Handlers
     */

    e_mousemove(e) {
        this.mouse.moved = true;
        this.mouse.x = e.clientX - this.rect.left;
        this.mouse.y = e.clientY - this.rect.top;
    }

    e_resize(e) {
        this.rect =this.body.getBoundingClientRect();
    }
}