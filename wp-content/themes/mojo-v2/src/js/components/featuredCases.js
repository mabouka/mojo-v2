
export default class featuredCases {

    static get selector() {
        return '.featuredCases';
    }

    constructor(el) {
        this.el = el;
        this.gallery = this.el.querySelector('.featuredCases__gallery');
        this.videos = this.getVideos();
        this.setEvents();

    }

    getVideos() {
        let videos = [];
        let links = this.el.querySelectorAll('.featuredCases__caseLink, .featuredCases__galleryItem');
        Array.from(links).forEach(link => {
            let el = {};
                el.link = link;             
                el.target = link.dataset.hoverTarget;
                el.videoContainer = this.el.querySelector(el.target);
                el.video = el.videoContainer.querySelector("video");
            videos.push(el);
        });

        return videos;
    }

    setEvents() {
        this.videos.forEach((video) => {
            video.link.addEventListener('mouseover', (e) => {
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
        if(video.video) video.video.play();
    }

    e_mouseLeave(e, video) {
        video.videoContainer.classList.remove('featuredCases__video--active');
        video.link.classList.remove('featuredCases__caseLink--active');
        this.gallery.classList.remove('featuredCases__gallery--hovered');
        if(video.video) video.video.pause();
    }
}