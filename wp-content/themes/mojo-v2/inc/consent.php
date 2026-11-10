<?php
/*
 * Consentement recueilli par tarteaucitron, lu côté serveur.
 *
 * Le cookie « tarteaucitron » liste les choix du visiteur sous la forme
 * « !service=true!autre=false ». Le service « mojoga4 » (déclaré dans
 * footer.php) porte l'accord « mesure d'audience » (Google Analytics).
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
// Si une mise à jour du plugin renomme sa fonction ou change de priorité, le
// retrait échouerait en silence (envoi sans consentement) : la priorité réelle
// est lue, et une alerte va au journal PHP si le plugin est actif sans crochet.
add_action('wpcf7_mail_sent', function () {
    if (mojoHasConsent('mojoga4')) return;
    $priority = has_action('wpcf7_mail_sent', 'cf7_ga4_send_event');
    if ($priority !== false) {
        remove_action('wpcf7_mail_sent', 'cf7_ga4_send_event', $priority);
    } elseif (in_array('cf7-ga4-tracking/cf7-ga4-tracking.php', (array) get_option('active_plugins', []), true)) {
        error_log('MOJO consentement : cf7_ga4_send_event introuvable sur wpcf7_mail_sent, le plugin CF7 GA4 envoie peut-être sans consentement (inc/consent.php).');
    }
}, 1);
