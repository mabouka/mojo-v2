// Vidéos YouTube du contenu (inc/embeds.php) : au clic sur l'aperçu, le lecteur
// remplace le bouton, en mode youtube-nocookie et en lecture automatique.
// Écoute déléguée sur document : marche aussi pour les pages chargées par Barba.
export default function initYoutubeFacade() {
    document.addEventListener('click', (e) => {
        const button = e.target.closest('.ytFacade');
        if (!button) return;
        e.preventDefault();

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(button.dataset.ytId)}?autoplay=1&rel=0`;
        iframe.title = button.dataset.ytTitle || 'YouTube';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        button.replaceWith(iframe);
        iframe.focus();
    });
}
