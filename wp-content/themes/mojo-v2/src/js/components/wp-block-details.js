import { ScrollTrigger } from "gsap/ScrollTrigger";
import wait      from "../utils/wait";
export default class wpBlockDetails {

    static get selector() {
        return '.wp-block-details';
    }

    constructor(el) {
        this.el = el;
        var observer = new MutationObserver(function(mutations) {
                            mutations.forEach(function(mutation) {
                                if (mutation.type === "attributes") {
                                    console.log("attributes changed");
                                    window.lenis.resize();
                                    ScrollTrigger.refresh();
                                }
                            });
                        });
        observer.observe(this.el, {attributes: true});

    }

}