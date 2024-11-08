import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isFirefox } from "../utils/detect";

export default class homeTransformation {

    static get selector() {
        return '.homeTransformation';
    }

    constructor(el) {
        if(isFirefox()) return; 
        gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

        this.el      = el;
        this.circle  = this.el.querySelector('#tr_circle');
        this.path    = this.el.querySelector('#tr_path');

        this.setPos();
        this.initScroller();
    }

    setPos() {
        gsap.set(this.circle, {
            scale: 0.2
        });

        gsap.set(this.circle, {
            autoAlpha: 0
        });
    }

    initScroller(){
        this.main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: 'top-=400',
                end: '+=100%',
                scrub: true,
                //id:"homeTransformation",
                //markers: true                
            }
        })
        .to(this.circle, {
            duration: 2, 
            ease: "linear",
            motionPath:{
              path:  "#tr_path",
              align: "#tr_path",
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
              start: -0.40,
              end: 0.33,
            }
        }, 0)
        .to(this.circle,{
            duration: 0.1,
            autoAlpha: 1 
        }, 0)
        .to(this.circle,{
            duration: 2,
            scale: 1 
        }, 0);
    }

    destroy() {
        this.main.kill(true);
    }
}