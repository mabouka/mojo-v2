<?php
/*
 * Consentement recueilli par tarteaucitron, lu côté serveur.
 *
 * Le cookie « tarteaucitron » liste les choix du visiteur sous la forme
 * « !service=true!autre=false ». Les services Google Consent Mode sont réglés
 * sur tarteaucitron.io (« Demander tous les signaux Google Consent mode ») :
 * gcmanalyticsstorage porte l'accord « mesure d'audience ».
 */

function mojoHasConsent($service)
{
    $cookie = isset($_COOKIE['tarteaucitron']) ? wp_unslash($_COOKIE['tarteaucitron']) : '';
    return (bool) preg_match('/!' . preg_quote($service, '/') . '=true(!|$)/', $cookie);
}

// Le plugin « CF7 GA4 Server-Side Tracking » (non versionné, présent sur les
// serveurs) envoie un événement GA4 depuis le serveur à chaque formulaire
// envoyé, sans regarder le consentement. On retire son action avant qu'elle
// ne s'exécute quand le visiteur n'a pas accepté la mesure d'audience.
add_action('wpcf7_mail_sent', function () {
    if (!mojoHasConsent('gcmanalyticsstorage')) {
        remove_action('wpcf7_mail_sent', 'cf7_ga4_send_event');
    }
}, 1);
