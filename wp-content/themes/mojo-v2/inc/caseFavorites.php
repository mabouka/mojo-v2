<?php
// Cas favoris : liste choisie dans Options → « Favourite cases ». Les blocs « Want to
// see more ? » des études de cas piochent dedans, au lieu de toutes les études
// de cas. Champ déclaré ici (et pas en base) pour qu'il suive le code sur chaque
// site.

add_action('acf/init', function () {
    acf_add_local_field_group([
        'key' => 'group_mojo_favorite_cases',
        'title' => 'Favourite cases',
        'fields' => [[
            'key' => 'field_mojo_favorite_cases',
            'label' => 'Favourite cases',
            'name' => 'favorite_cases',
            'type' => 'relationship',
            'instructions' => 'Cases suggested at the bottom of each case study ("Want to see more?"): 2 picked at random from this list. Fill it in English, the French pages use the translations. Fewer than 2 cases: picked from all case studies.',
            'post_type' => ['case'],
            'post_status' => ['publish'],
            'filters' => ['search'],
            'return_format' => 'id',
        ]],
        'location' => [[[
            'param' => 'options_page',
            'operator' => '==',
            'value' => 'options',
        ]]],
        'menu_order' => 10,
    ]);
});

// IDs des cas favoris dans la langue affichée. Les options ACF sont enregistrées
// par langue (options_fr_…) : sans liste propre au français, on reprend celle de
// la langue par défaut et ses traductions.
function mojoFavoriteCaseIds()
{
    if (!function_exists('get_field')) return [];

    $ids = get_field('favorite_cases', 'option', false) ?: get_option('options_favorite_cases');
    $ids = array_map(fn($id) => (int) apply_filters('wpml_object_id', (int) $id, 'case', false), (array) $ids);

    return array_values(array_unique(array_filter($ids)));
}
