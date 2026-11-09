
export default class featuredCases {

    static get selector() {
        return '.featuredCases';
    }

    constructor(el) {
        this.el = el;
        this.gallery = this.el.querySelector('.featuredCases__gallery');
        this.videos = this.getVideos();
        this.setEvents();
        this.preloadVideosNearby();

    }

    // Les vidéos ne jouent qu'au survol : rien à charger sur écran tactile. Avec
    // une souris, on lance le préchargement quand la section approche de l'écran
    // (elles étaient sinon toutes téléchargées dès l'ouverture de la page).
    preloadVideosNearby() {
        if (!window.matchMedia('(hover: hover)').matches || !('IntersectionObserver' in window)) return;
        this.preloadObserver = new IntersectionObserver((entries) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            this.videos.forEach(({ video }) => { if (video) video.preload = 'auto'; });
            this.preloadObserver.disconnect();
        }, { rootMargin: '400px 0px' });
        this.preloadObserver.observe(this.el);
    }

    destroy() {
        if (this.preloadObserver) this.preloadObserver.disconnect();
        this.videos.forEach(({ video }) => { if (video) video.pause(); });
    }

    getVideos() {
        let videos = [];
        let links = this.el.querySelectorAll('.featuredCases__caseLink, .featuredCases__galleryItem');
        Array.from(links).forEach(link => {
            let el = {};
                el.link = link;
                el.target = link.dataset.hoverTarget;
                el.videoContainer = el.target ? this.el.querySelector(el.target) : null;
            // Lien sans visuel associé : ignoré (sinon erreur dans le constructeur).
            if (!el.videoContainer) return;
                el.video = el.videoContainer.querySelector("video");
            videos.push(el);
        });

        return videos;
    }

    // Survol seulement avec une souris : sur écran tactile, un tapotement
    // lançait une vidéo qui n'était pas préchargée.
    // mouseenter et pas mouseover : mouseover se redéclenche en passant sur
    // l'image ou le titre du lien, et la vidéo repartait de zéro.
    setEvents() {
        if (!window.matchMedia('(hover: hover)').matches) return;
        this.videos.forEach((video) => {
            video.link.addEventListener('mouseenter', (e) => {
                this.e_mouseEnter(e, video);
            });

            video.link.addEventListener('mouseleave', (e) => {
                this.e_mouseLeave(e, video);
            });
        })
    }

    /**
     * Handlers
     */

    e_mouseEnter(e, video) {
        if(video.video) video.video.currentTime = 0;
        video.videoContainer.classList.add('featuredCases__video--active');
        video.link.classList.add('featuredCases__caseLink--active');
        this.gallery.classList.add('featuredCases__gallery--hovered');
        // Survol bref : la lecture est interrompue par pause(), ce n'est pas une erreur.
        if(video.video) video.video.play().catch(() => {});
    }

    e_mouseLeave(e, video) {
        video.videoContainer.classList.remove('featuredCases__video--active');
        video.link.classList.remove('featuredCases__caseLink--active');
        this.gallery.classList.remove('featuredCases__gallery--hovered');
        if(video.video) video.video.pause();
    }
}