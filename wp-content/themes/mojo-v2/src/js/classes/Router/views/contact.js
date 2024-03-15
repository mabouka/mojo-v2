let appendScripts = (scripts, root = document.documentElement ) => {
    let script = document.createElement("script");
        script.src = window.location.origin + '/recaptcha.ph';
        root.appendChild(script);

}


let contact = {
    namespace: 'contact',
    beforeEnter(data) {
        appendScripts( data.next.container);
    }
}

export default contact;