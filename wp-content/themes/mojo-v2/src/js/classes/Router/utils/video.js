let forceAutoplay = (data) => {
    // Play all video of the page
    var vids = data.next.container.querySelectorAll("video[autoplay]");
    vids.forEach(vid => { 
        var playPromise = vid.play(); 
        if (playPromise !== undefined) {
                playPromise.then(_ => {}).catch(error => {}); 
        }; 
    });
}

export {forceAutoplay};