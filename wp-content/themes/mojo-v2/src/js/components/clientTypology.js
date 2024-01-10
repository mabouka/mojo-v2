import {gsap} from "gsap";

export default class ClientTypology {

    static get selector() {
        return '.clientTypology';
    }

    constructor(el) {
        this.el = el;
        this.images = this.el.querySelectorAll('.clientTypology__image');
        this.mouse = {x: 0, y: 0, moved: false};
        this.setEvents();
        gsap.ticker.add(this.doOneFrame.bind(this));
    }

    doOneFrame() {
        if (!this.mouse.moved) return;

        gsap.to(this.images, {
            duration: "1",
            ease: "power1.out",
            y: (this.mouse.y - window.innerHeight / 2)
        });
    }

    setEvents() {
        this.el.addEventListener('mousemove', this.e_mousemove.bind(this));
        //this.body.addEventListener('resize', this.e_resize.bind(this));
    }


    /**
     * Handlers
     */

    e_mousemove(e) {
        this.mouse.moved = true;
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }
    e_resize(e) {
        this.rect =this.body.getBoundingClientRect();
    }
}