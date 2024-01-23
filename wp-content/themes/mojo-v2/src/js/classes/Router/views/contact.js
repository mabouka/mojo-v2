import appendScripts from "../utils/scripts";

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