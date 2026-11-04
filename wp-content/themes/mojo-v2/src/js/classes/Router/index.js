import barba             from '@barba/core';
//import barbaPrefetch     from '@barba/prefetch';

import { ScrollTrigger }    from "gsap/ScrollTrigger";

import InView               from '../InView';
import IsCentered           from '../IsCentered';
import IsTop                from '../IsTop';

import Menu                 from '../Menu';
import LazyVideos           from '../lazyVideos';
import Pluton               from '../Pluton';


// utils
import {forceAutoplay}      from './utils/video';
import decodeCloudflareEmails from '../../utils/cloudflareEmails';

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

        barba.init({
                timeout: 5000, // default is 2000ms
                logLevel: 'error',
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
            // Barba ne remplace pas le <head> : charger le CSS de la page
            // suivante AVANT de l'afficher (sinon flash sans style).
            const nextDoc = new DOMParser().parseFromString(data.next.html, 'text/html');
            this.nextPageCss = this.pageCssHrefFrom(nextDoc);
            this.pageCssPending = true; // une vraie transition est en cours
            // En parallèle : les chunks JS des composants de la page suivante.
            await Promise.all([
                this.loadPageCss(this.nextPageCss),
                window.MJ.parts.load(data.next.container),
            ]);

            //this.updateHeader(data);
            this.updatePage(nextDoc);
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
            IsTop.addView(data.next.container);
            IsCentered.addView(data.next.container);

            document.documentElement.classList.remove('loading');
        });

        barba.hooks.afterEnter((data) => {
            // L'ancien conteneur est retiré : on coupe les CSS des autres pages
            // pour retrouver exactement la cascade d'un premier chargement.
            // Barba appelle aussi afterEnter au premier chargement (sans
            // beforeEnter) : ne couper les CSS qu'après une vraie transition.
            if (this.pageCssPending) {
                this.pageCssPending = false;
                this.disableOtherPageCss(this.nextPageCss);
            }

            forceAutoplay(data)
            // Les composants sont instanciés de façon asynchrone. Pluton est
            // importé directement : au premier chargement, window.MJ n'existe
            // peut-être pas encore.
            Pluton.ready.then(() => setTimeout(() => {
                window.lenis.resize();
                ScrollTrigger.refresh();
            }, 200));

            this.lazyVideos.refresh(data.next.container);
            decodeCloudflareEmails(data.next.container);
        });

        barba.hooks.after(() => {
            this.lazyVideos.loadAllVisible();

            // gtag() peut ne pas exister (tags chargés seulement après
            // consentement, ou retirés) : ne pas casser la navigation.
            if (typeof window.gtag !== 'function') return;
            window.gtag('event', 'page_view', {
              'page_title': document.title,
              'page_location': location.href,
              'page_path': location.pathname,
            });
            
        });
    }
    // --- CSS découpé par page (voir inc/pageCss.php) -----------------------
    // Le <head> de la page suivante (récupéré par Barba) contient son
    // <link data-page-css> : aucune déclaration à maintenir dans les templates.

    pageCssHrefFrom(doc) {
        const link = doc.querySelector('link[rel="stylesheet"][data-page-css]');
        return link ? link.getAttribute('href') : null;
    }

    pageCssLinks() {
        return [...document.querySelectorAll('link[rel="stylesheet"][data-page-css]')];
    }

    loadPageCss(href, timeout = 3000) {
        if (!href) return Promise.resolve();

        let link = this.pageCssLinks().find((l) => l.getAttribute('href') === href);
        if (!link) {
            link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.setAttribute('data-page-css', '');
            link.mojoLoaded = new Promise((resolve) => {
                link.onload = () => {
                    // Feuille arrivée après le délai : appliquer l'état voulu entre-temps.
                    link.sheet.disabled = link.mojoEnabled === false;
                    resolve();
                };
                link.onerror = () => {
                    link.remove(); // pas de lien cassé réutilisé : on retentera à la prochaine visite
                    resolve();
                };
            });
            document.head.appendChild(link);
        }
        this.setSheetEnabled(link, true);

        // Ne jamais bloquer la transition : au pire on affiche après `timeout`.
        // Un lien encore en cours de chargement (visite précédente) est attendu aussi.
        return Promise.race([
            link.mojoLoaded || Promise.resolve(),
            new Promise((resolve) => setTimeout(resolve, timeout)),
        ]);
    }

    // Après l'entrée (ancien conteneur retiré) : seuls base.css et le CSS de la
    // page courante restent actifs. Les autres restent chargés, mais inactifs.
    // href null = page sans bundle (base.css seul) : tous les CSS de page sont coupés.
    disableOtherPageCss(href) {
        this.pageCssLinks().forEach((l) => {
            this.setSheetEnabled(l, l.getAttribute('href') === href);
        });
    }

    // On bascule la feuille (CSSOM), PAS l'attribut `disabled` du <link> :
    // celui-ci fait décharger puis retélécharger le fichier par le navigateur.
    setSheetEnabled(link, enabled) {
        if (link.disabled) link.disabled = false; // héritage : ne jamais décharger le <link>
        link.mojoEnabled = enabled; // appliqué au onload si la feuille n'est pas encore là
        if (link.sheet) link.sheet.disabled = !enabled;
    }

    updatePage(doc){

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

        // Liens de langue : le header ET le menu sont hors du conteneur Barba,
        // il faut leur donner l'URL traduite de la page suivante.
        // Absent (WPML en échec, voir mojoLanguages) : on laisse tel quel.
        const nextLanguage = doc.querySelector('.header__language');
        if (nextLanguage) {
            document.querySelectorAll('.header__language, .menu__headerLanguage').forEach((link) => {
                link.setAttribute('href', nextLanguage.getAttribute('href'));
            });
        }

    }    
}