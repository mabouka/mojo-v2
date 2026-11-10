// Vidéos lues au survol ou au défilement (cartes de cas, listes de cas, clients).

// play() renvoie une promesse rejetée si la lecture est interrompue par pause()
// (survol bref, défilement rapide) : ce n'est pas une erreur, rien en console.
export function playFromStart(video) {
    if (!video) return;
    video.currentTime = 0;
    const playing = video.play();
    if (playing && playing.catch) playing.catch(() => {});
}

export function stopVideo(video) {
    if (!video) return;
    video.pause();
    video.currentTime = 0;
}
