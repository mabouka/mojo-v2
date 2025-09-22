class LazyVideos {
    constructor({ rootMargin = "-100% 0% 0% 0%", threshold = 0 } = {}) {
        this.options = { rootMargin, threshold };
        this.lazyVideos = [];
        this.lazyVideoObserver = null;

        if ("IntersectionObserver" in window) {
            this.lazyVideoObserver = new IntersectionObserver(
                this._callback.bind(this),
                this.options
            );
        }

        this.attach(); // premier scan du document courant
    }

    // (re)scan + observe toutes les <video class="lazy"> sous root
    attach(root = document) {
        const nodes = Array.from(root.querySelectorAll("video.lazy"));
        // évite les doublons
        const newOnes = nodes.filter(v => !this.lazyVideos.includes(v));
        this.lazyVideos.push(...newOnes);
        newOnes.forEach(v => this.observe(v));
    }

    // alias pratique
    refresh(root = document) {
        this.attach(root);
        this.loadAllVisible(); // au cas où
    }

    observe(videoEl) {
        if (!this.lazyVideoObserver || !videoEl) return;
        this.lazyVideoObserver.observe(videoEl);
    }

    unobserve(videoEl) {
        if (!this.lazyVideoObserver || !videoEl) return;
        try { this.lazyVideoObserver.unobserve(videoEl); } catch {}
        // retire de la liste interne
        const i = this.lazyVideos.indexOf(videoEl);
        if (i > -1) this.lazyVideos.splice(i, 1);
    }

    destroy() {
        if (this.lazyVideoObserver) {
            try { this.lazyVideoObserver.disconnect(); } catch {}
        }
        this.lazyVideos = [];
    }

    // Force le chargement pour les vidéos déjà visibles (utile après une transition)
    loadAllVisible() {
        this.lazyVideos.forEach(v => {
            const rect = v.getBoundingClientRect();
            const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
            if (isVisible) this._loadVideo(v);
        });
    }

    _callback(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this._loadVideo(entry.target);
            }
        });
    }

    _loadVideo(videoEl) {
        for (let source of videoEl.children) {
            if (source.tagName === "SOURCE" && source.dataset.src && !source.src) {
                source.src = source.dataset.src;
            }
        }
        // si <video> porte data-poster
        if (videoEl.dataset.poster && !videoEl.poster) {
            videoEl.poster = videoEl.dataset.poster;
        }

        videoEl.load();
        videoEl.classList.remove("lazy");
        this.unobserve(videoEl);
    }
}

export default LazyVideos;
