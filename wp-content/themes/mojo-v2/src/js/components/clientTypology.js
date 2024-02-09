import {gsap} from "gsap";
import isCentered from "../classes/IsCentered";

export default class ClientTypology {

    static get selector() {
        return '.clientTypology';
    }

    constructor(el) {
        this.el = el;
        this.items = this.getItems();
        this.images = this.el.querySelectorAll('.clientTypology__image');
        this.mouse = {x: 0, y: 0, moved: false};
        this.setEvents();

        let mq = window.matchMedia( "(max-width: 600px)" );

        if(!mq.matches){
            gsap.ticker.add(this.doOneFrame.bind(this));
        }
    }

    getItems() {
        let elements = this.el.querySelectorAll('.clientTypology__item');
        let items = []
        Array.from(elements).forEach(element => {
            let item = {};
                item.el = element;
                item.isVideo = element.classList.contains('clientTypology__item--video');
                if(item.isVideo) item.video = item.el.querySelector('video');

                if(1) {
                    isCentered.addElement(item.el);
                }
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
        let mq = window.matchMedia( "(max-width: 600px)" );
        if(!mq.matches){
            this.el.addEventListener('mousemove', this.e_mousemove.bind(this));
        }
        this.items.forEach(item => {

            item.el.addEventListener('inCenter',  (e) => { this.e_inCenter(e, item)} );
            item.el.addEventListener('outCenter',(e) => { this.e_outCenter(e, item)} );

            if(item.isVideo) {
                item.el.addEventListener('mouseenter', (e) => { this.e_mouseenter(e, item)} );
                item.el.addEventListener('mouseleave', (e) => { this.e_mouseleave(e, item)} );
            }

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

    e_inCenter(e, item) {
        if(item.isVideo) {
            item.video.currentTime = 0;
            item.video.play();
        }
        item.el.classList.add('clientTypology__item--active');
    }

    e_outCenter(e, item) {
        if(item.isVideo) {
            item.video.pause();
            item.video.currentTime = 0;
        }
        item.el.classList.remove('clientTypology__item--active');
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