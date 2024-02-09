let appendScripts = (scripts, root = document.documentElement ) => {
    scripts.forEach(scriptSrc => {
        let script = document.createElement("script");
            script.setAttribute('crossorigin', 'anonymous')
            script.setAttribute("src", scriptSrc);
        root.appendChild(script);
    })
}


let contact = {
    namespace: 'contact',
    beforeEnter(data) {
        let pageScriptSrcs = [
            'https://www.google.com/recaptcha/api.js?render=' + window.recaptchaKey +  '&amp;ver=3.0'
        ];

        appendScripts(pageScriptSrcs, data.next.container);
    }
}

export default contact;