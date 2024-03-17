class LazyVideos{

    constructor() {
        this.lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

        
        if ("IntersectionObserver" in window) {

            let options = {
                rootMargin: '-100% 0% 0% 0%',
                threshold: 0
            };

            this.lazyVideoObserver = new IntersectionObserver(this.callback.bind(this), options);

            this.lazyVideos.forEach((lazyVideo) => {
                this.lazyVideoObserver.observe(lazyVideo);
            });
        }

    }
    callback(entries, observer) {
        entries.forEach((video) => {
            if (video.isIntersecting) {
                this.loadVideo(video);
            }
        });
    }

    loadVideo(video) {
        console.log('load', video);
        for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
            }
        }

        video.target.load();
        video.target.classList.remove("lazy");
        this.lazyVideoObserver.unobserve(video.target);
    }
}

export default LazyVideos;