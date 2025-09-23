let appendScripts = (root = document.documentElement ) => {
    let script = document.createElement("script");
        script.src = window.location.origin + '/recaptcha.php';
        root.appendChild(script);
        console.log('recaptcha')
}


let singlelead = {
    namespace: 'singlelead',
    beforeEnter(data) {
        appendScripts( data.next.container);
    }
}

export default singlelead;