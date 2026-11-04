// Cloudflare (Scrape Shield › Email Obfuscation) remplace chaque adresse par
// « [email protected] » et son script ne la décode qu'au premier chargement :
// le contenu inséré par Barba garde le texte masqué. On refait le décodage.
function decode(hex) {
    const key = parseInt(hex.slice(0, 2), 16);
    let out = '';
    for (let i = 2; i < hex.length; i += 2) {
        out += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ key);
    }
    try {
        return decodeURIComponent(escape(out)); // caractères accentués (UTF-8)
    } catch (e) {
        return out;
    }
}

export default function decodeCloudflareEmails(root = document) {
    // Liens mailto: réécrits en /cdn-cgi/l/email-protection#<hex>
    root.querySelectorAll('a[href*="/cdn-cgi/l/email-protection#"]').forEach((a) => {
        a.setAttribute('href', 'mailto:' + decode(a.getAttribute('href').split('#')[1]));
    });
    // Adresses dans le texte : <a|span class="__cf_email__" data-cfemail="<hex>">
    root.querySelectorAll('[data-cfemail]').forEach((el) => {
        el.replaceWith(document.createTextNode(decode(el.getAttribute('data-cfemail'))));
    });
}
