// Liens vers une ancre de la page (#contactForm, sommaire de la FAQ…) : défilement
// doux par Lenis. Un seul écouteur pour tout le site, à la place des composants
// cta, faq et leadDescription. Le bouton du bloc services des pages Lead pointe
// vers la page elle-même : il mène au formulaire de contact.
export default function initAnchorScroll() {
    document.addEventListener('click', (e) => {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const link = e.target.closest && e.target.closest('a[href]');
        if (!link) return;

        let target = null;
        if (link.matches('.homeService--lead .homeService__link')) {
            target = document.getElementById('contactForm');
        } else {
            const url = new URL(link.href, window.location.href);
            if (!url.hash || url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
            target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        }
        // Cible absente (lien vers une autre page, ancre inconnue) : lien normal.
        if (!target || !window.lenis) return;

        e.preventDefault();
        // Durée selon la distance (1 à 3 s), comme les anciens 1 / 1,5 / 3 s.
        const distance = Math.abs(target.getBoundingClientRect().top);
        window.lenis.scrollTo(target, { duration: Math.min(3, Math.max(1, distance / 1500)) });
    }, true);
}
