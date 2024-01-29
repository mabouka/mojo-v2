import {gsap} from "gsap";

export default class ClientTypology {

    static get selector() {
        return '.clientTypology';
    }

    constructor(el) {
        this.el = el;
        this.videoItems = this.getVideoItems();
        this.images = this.el.querySelectorAll('.clientTypology__image');
        this.mouse = {x: 0, y: 0, moved: false};
        this.setEvents();
        gsap.ticker.add(this.doOneFrame.bind(this));
    }

    getVideoItems() {
        let elements = this.el.querySelectorAll('.clientTypology__item--video');
        let items = []
        Array.from(elements).forEach(element => {
            let item = {};
                item.el = element;
                item.video = item.el.querySelector('video');
            items.push(item);
        });

        return items;
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
        this.videoItems.forEach(item => {
            item.el.addEventListener('mouseenter', (e) => { this.e_mouseenter(e, item)} );
            item.el.addEventListener('mouseleave', (e) => { this.e_mouseleave(e, item)} );
        })
    }


    /**
     * Handlers
     */

    e_mousemove(e) {
        this.mouse.moved = true;
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }

    e_mouseenter(e, item) {
        item.video.currentTime = 0;
        item.video.play();
    }

    e_mouseleave(e, item) {
        item.video.pause();
        item.video.currentTime = 0;
    }

}