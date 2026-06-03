import barba             from '@barba/core';
//import barbaPrefetch     from '@barba/prefetch';

import { ScrollTrigger }    from "gsap/ScrollTrigger";

import InView               from '../InView';
import IsCentered           from '../IsCentered';
import IsTop                from '../IsTop';

import Menu                 from '../Menu';
import LazyVideos           from '../lazyVideos';


// utils
import {forceAutoplay}      from './utils/video';

// transitions
import curtainTransition    from './transitions/curtain';
import curtainFade          from './transitions/curtainFade';
import fadeTransition       from './transitions/fade';

// views
import contact              from './views/contact';
import singlelead           from  './views/singlelead';
//import singlecase           from './views/singlecase';
//import singleservicechild   from './views/singleservicechild';
//import pageTemplate         from './views/pageTemplate';


export default class Router {
    constructor() {
        //barba.use(barbaPrefetch);

        this.lazyVideos = new LazyVideos();


        this.header = document.querySelector('.header');
        this.languageSelector = document.querySelector('.header__language');

        barba.init({
                timeout: 5000, // default is 2000ms
                logLevel: 'error',
                preventRunning: true,
                transitions: [
                    //curtainFade,
                    curtainTransition,
                    fadeTransition
                ],
                views: [
                    contact,
                    singlelead
                    //singlecase,
                    //singleservicechild,
                    //pageTemplate
                ],
                //cacheIgnore: ['/contact/']
        });

        barba.hooks.once(() => {
            this.lazyVideos.refresh(document);
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
        
        barba.hooks.beforeEnter(async (data) => {
            //this.updateHeader(data);
            this.updatePage(data);
            await Promise.all([
                this.updatePageCSS(data),
                this.updateMojoBlockStyles(data),
            ]);
            this.updateBlockCSS(data);
            Menu.update(data);
            ScrollTrigger.killAll();
            ScrollTrigger.refresh();
        });

        barba.hooks.enter(async (data) => {
            window.__barbaEnterStart = Date.now();
            data.current?.container?.remove();
            window.lenis.start();
            window.MJ.cursor.reset();

            window.lenis.resize();
            await window.MJ.parts.setup(data.next.container);

            InView.addView(data.next.container);
            IsTop.addView(data.next.container);
            IsCentered.addView(data.next.container);

            document.documentElement.classList.remove('loading');
        });

        barba.hooks.afterEnter((data) => {
            forceAutoplay(data)
            setTimeout(() => {
                window.lenis.resize();
                ScrollTrigger.refresh();
            }, 200)

            this.lazyVideos.refresh(data.next.container);
        });

        barba.hooks.after(() => {
            this.lazyVideos.loadAllVisible();

            // Defer the page_view forward so Partytown's worker has time to
            // re-sync its virtual DOM after the Barba container swap. Pushing
            // directly to dataLayer (instead of gtag()) avoids a second
            // round-trip through the worker forward queue, and the try/catch
            // keeps a worker hiccup from polluting the console.
            setTimeout(() => {
                try {
                    (window.dataLayer = window.dataLayer || []).push({
                        event: 'page_view',
                        page_title: document.title,
                        page_location: location.href,
                        page_path: location.pathname,
                    });
                } catch (e) {
                    /* silent — analytics best-effort */
                }
            }, 500);

        });
    }
    updatePageCSS(data) {
        const href = data.next.container.dataset.pageCss;
        if (!href) return;

        // Never remove old CSS — accumulate page stylesheets to avoid flash
        const alreadyLoaded = [...document.querySelectorAll('link[rel="stylesheet"]')]
            .some(l => l.getAttribute('href') === href);
        if (alreadyLoaded) return;

        return new Promise((resolve) => {
            const link  = document.createElement('link');
            link.rel    = 'stylesheet';
            link.href   = href;
            link.onload = resolve;
            link.onerror = resolve; // ne pas bloquer si erreur
            document.head.appendChild(link);
        });
    }

    /**
     * Injecte les CSS des blocs ACF mojo/* nécessaires à la nouvelle page.
     *
     * Côté PHP, mojo_enqueue_block_styles() ne sert ces CSS qu'aux post types
     * case/stories/services ET seulement les blocs présents (has_block).
     * Donc à la navigation Barba vers un de ces post types depuis une page
     * qui ne les avait pas dans son <head>, il faut récupérer les <link>
     * du HTML fetché et les pousser dans le head courant.
     *
     * On reconnaît les bons <link> par leur id `mojo-block-*-css` (WP append
     * `-css` au handle d'enqueue). On accumule sans jamais nettoyer (mêmes
     * raisons que updatePageCSS — éviter le flash en arrière-navigation).
     */
    updateMojoBlockStyles(data) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.next.html, 'text/html');
        const newLinks = doc.querySelectorAll('link[id^="mojo-block-"]');
        if (newLinks.length === 0) return Promise.resolve();

        const promises = [];
        newLinks.forEach((srcLink) => {
            if (document.getElementById(srcLink.id)) return; // déjà chargé
            const link = document.createElement('link');
            link.rel  = 'stylesheet';
            link.id   = srcLink.id;
            link.href = srcLink.href;
            promises.push(new Promise((resolve) => {
                link.onload  = resolve;
                link.onerror = resolve;
                document.head.appendChild(link);
            }));
        });
        return Promise.all(promises);
    }

    updateBlockCSS(data) {
        const needsBlocks = data.next.container.dataset.blocks === 'true';
        const cssId       = 'wp-block-library-css';
        const alreadyLoaded = document.getElementById(cssId);

        if (needsBlocks && !alreadyLoaded) {
            const link  = document.createElement('link');
            link.rel    = 'stylesheet';
            link.id     = cssId;
            link.href   = window.MojoConfig?.blockLibraryCssUrl || '';
            if (link.href) document.head.appendChild(link);
        }
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