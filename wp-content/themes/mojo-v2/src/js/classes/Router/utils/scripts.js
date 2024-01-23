let appendScripts = (scripts, root = document.documentElement ) => {
    scripts.forEach(scriptSrc => {
        let script = document.createElement("script");
            script.setAttribute("src", scriptSrc);
        root.appendChild(script);
    })
}

export default appendScripts;