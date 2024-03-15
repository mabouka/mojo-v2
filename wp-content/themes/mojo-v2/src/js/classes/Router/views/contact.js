let appendScripts = (scripts, root = document.documentElement ) => {
    let script = document.createElement("script");
        script.crossOrigin='anonymous';
        script.src = 'https://www.google.com/recaptcha/api.js?render=' + window.recaptchaKey;
    root.appendChild(script);
}


let contact = {
    namespace: 'contact',
    beforeEnter(data) {
        appendScripts( data.next.container);
    }
}

export default contact;