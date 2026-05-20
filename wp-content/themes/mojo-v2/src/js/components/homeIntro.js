import {gsap} from "gsap";
import inview from "../classes/InView";
export default class HomeIntro {

    static get selector() {
        return '.homeIntro';
    }

    constructor(el) {
        this.el = el;

        this.body= document.querySelector('body');
        
        this.header = document.querySelector('.header');
        this.homeVideo = document.querySelector('.homeVideo');

        inview.addElement(this.homeVideo);
        inview.addElement(this.header);
        this.el.classList.add('homeIntro--inview')
    }
}