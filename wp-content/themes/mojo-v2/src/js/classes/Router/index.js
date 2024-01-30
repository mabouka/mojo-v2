import barba             from '@barba/core';
//import barbaPrefetch     from '@barba/prefetch';

import { ScrollTrigger }    from "gsap/ScrollTrigger";

import InView               from '../InView';
import Menu                 from '../Menu';

// utils
import {forceAutoplay}      from './utils/video';

// transitions
import curtainTransition    from './transitions/curtain';
import curtainFade          from './transitions/curtainFade';
import fadeTransition       from './transitions/fade';

// views
import contact              from './views/contact';
import singlecase           from './views/singlecase';
import singleservicechild   from './views/singleservicechild';
import pageTemplate         from './views/pageTemplate';


export default class Router {
    constructor() {
        //barba.use(barbaPrefetch);

        this.header = document.querySelector('.header');
        this.languageSelector = document.querySelector('.header__language');

        barba.init({
                logLevel: 'error',
                transitions: [
                    //curtainFade,
                    curtainTransition,
                    fadeTransition
                ],
                views: [
                    contact,
                    singlecase,
                    singleservicechild,
                    pageTemplate
                ],
                //cacheIgnore: ['/contact/']
        });

        barba.hooks.leave(() => {
            window.MJ.parts.destroy();
            window.MJ.parts.clear();
        });

        barba.hooks.afterLeave(() => {
            Menu.closeQuick();
        })

        barba.hooks.before(() => {
            document.documentElement.classList.add('loading');
            window.lenis.stop();    
        });
        
        barba.hooks.beforeEnter((data) => {
            //this.updateHeader(data);
            this.updatePage(data);
            Menu.update(data);
            ScrollTrigger.killAll();
            ScrollTrigger.refresh();
        });

        barba.hooks.enter((data) => {
            data.current.container.remove();
            window.lenis.start();
            window.MJ.cursor.reset();

            window.lenis.resize();
            window.MJ.parts.setup(data.next.container);
            InView.addView(data.next.container);

        });

        barba.hooks.afterEnter((data) => {
            forceAutoplay(data)
            document.documentElement.classList.remove('loading');
            setTimeout(() => {
                window.lenis.resize();
                ScrollTrigger.refresh();
            }, 200)
        });

        barba.hooks.after(() => {
            gtag('event', 'page_view', {
              'page_title': document.title,
              'page_location': location.href,
              'page_path': location.pathname,
            });
        });
    }
    updatePage(data){
        let parser = new DOMParser();
        const doc = parser.parseFromString(data.next.html, 'text/html');

        // header className
        let newHeader = doc.querySelector('.header');
        let classes = [
            'header--hidden',
            'header--dark',
            'header--light',
            'header--withoutLogo'
        ];
        classes.forEach( (className) => {
            if(newHeader.classList.contains(className)) this.header.classList.add(className);
            else this.header.classList.remove(className);
        });

        // header language
        let newLanguageSelector = doc.querySelector('.header__language');
        this.languageSelector.setAttribute('href', newLanguageSelector.getAttribute('href'));

    }    
}