import barba             from '@barba/core';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import InView            from '../InView';
import Menu              from '../Menu';

// utils
import {forceAutoplay}   from './utils/video';

// transitions
import curtainTransition from './transitions/curtain';

export default class Router {
    constructor() {

        barba.init({
                logLevel: 'error',
                transitions: [
                    curtainTransition,
                ],
                cacheIgnore: ['/contact/']

        });


        barba.hooks.leave(() => {
            window.MJ.parts.destroy();
            window.MJ.parts.clear();

        });

        barba.hooks.before(() => {
            document.documentElement.classList.add('loading');
            window.lenis.stop();    
        });
        
        barba.hooks.beforeEnter((data) => {
            this.updateHeader(data);
            Menu.update(data);
            Menu.closeQuick();
            ScrollTrigger.killAll();
            ScrollTrigger.refresh();
        });

        barba.hooks.enter((data) => {
            data.current.container.remove();
            window.lenis.start();
            window.lenis.scrollTo(0,{duration:0, force: true, immediate: true});
        });

        barba.hooks.afterEnter((data) => {
            window.lenis.resize();
            forceAutoplay(data)
            window.MJ.cursor.reset();
            InView.addView(data.next.container);
            document.documentElement.classList.remove('loading');
            window.MJ.parts.setup(data.next.container);
            setTimeout(() => {
                window.lenis.resize();
                ScrollTrigger.refresh();
            }, 200)
        });
    }
    
    
    updateHeader(data) {
        let header = document.querySelector('.header');
        
        if(data.next.html.includes('header--dark')) {
            header.classList.add('header--dark');
            header.classList.remove('header--light');
            header.classList.remove('header--hidden');
            header.classList.remove('header--withoutLogo');
        }

        if(data.next.html.includes('header--light')) {
            header.classList.add('header--light');
            header.classList.remove('header--dark');
            header.classList.remove('header--hidden');
            header.classList.remove('header--withoutLogo');

        }
        if(data.next.html.includes('header--hidden')) {
            header.classList.add('header--hidden');
            header.classList.remove('header--dark');
            header.classList.remove('header--light');
            header.classList.remove('header--withoutLogo');
        }

        if(data.next.html.includes('header--withoutLogo')) {
            header.classList.add('header--withoutLogo');
            header.classList.remove('header--hidden');
            header.classList.remove('header--dark');
            header.classList.remove('header--light');
        }
    }
}