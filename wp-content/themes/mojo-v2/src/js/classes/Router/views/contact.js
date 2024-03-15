let appendScripts = (scripts, root = document.documentElement ) => {
    let script = document.createElement("script");
        script.src = 'https://www.google.com/recaptcha/api.js?render=' + window.recaptchaKey;

        async function download() {
            const reponse = await fetch(script.src);
            const films = await reponse.text();
            console.log(films);
        }
}


let contact = {
    namespace: 'contact',
    beforeEnter(data) {
        appendScripts( data.next.container);
    }
}

export default contact;