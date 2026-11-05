<?php
// Données structurées Yoast : l'organisation n'avait ni adresse ni contact.
// L'agence devient aussi un ProfessionalService (agence à Bruxelles).

function mojoSchemaOrganization($data)
{
    $data['@type'] = ['Organization', 'ProfessionalService'];
    $data['address'] = [
        '@type'           => 'PostalAddress',
        'streetAddress'   => 'Avenue Van Volxem 407',
        'postalCode'      => '1190',
        'addressLocality' => 'Forest',
        'addressRegion'   => 'Bruxelles',
        'addressCountry'  => 'BE',
    ];
    $data['email'] = 'hello@mojo-agency.org';

    return $data;
}
add_filter('wpseo_schema_organization', 'mojoSchemaOrganization');
