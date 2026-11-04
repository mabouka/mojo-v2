<?php
// Bloc « Intégration YouTube » : une image d'aperçu et un bouton lecture au
// lieu du lecteur. Le lecteur complet (~900 Ko de scripts Google, cookies
// YouTube posés sans consentement) n'est chargé qu'au clic, en mode
// youtube-nocookie (src/js/utils/youtubeFacade.js).
function mojoYoutubeFacade($html, $block = [])
{
    if (is_admin() || wp_is_json_request()) return $html;
    if (($block['attrs']['providerNameSlug'] ?? '') !== 'youtube' && stripos($html, 'youtube.com/embed/') === false) return $html;
    if (!preg_match('~<iframe\b[^>]*\ssrc="https?://(?:www\.)?youtube(?:-nocookie)?\.com/embed/([A-Za-z0-9_-]{6,20})[^"]*"[^>]*>\s*</iframe>~i', $html, $m)) return $html;

    $id = $m[1];
    $title = preg_match('~\stitle="([^"]*)"~i', $m[0], $t) ? html_entity_decode($t[1], ENT_QUOTES) : '';
    $label = (function_exists('mojoLang') && mojoLang() === 'fr' ? 'Lire la vidéo' : 'Play the video') . ($title ? ' : ' . $title : '');

    $facade = sprintf(
        '<button type="button" class="ytFacade" data-yt-id="%1$s" data-yt-title="%2$s" aria-label="%3$s">'
        . '<img class="ytFacade__image" src="https://i.ytimg.com/vi/%1$s/hqdefault.jpg" alt="" width="480" height="360" loading="lazy" decoding="async">'
        . '<span class="ytFacade__play" aria-hidden="true"></span>'
        . '</button>',
        esc_attr($id),
        esc_attr($title),
        esc_attr($label)
    );
    return str_replace($m[0], $facade, $html);
}
add_filter('render_block_core/embed', 'mojoYoutubeFacade', 10, 2);
