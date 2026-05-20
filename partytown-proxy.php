<?php
/**
 * Partytown reverse proxy
 *
 * Allows the Partytown Web Worker to fetch cross-origin analytics/tag-manager
 * scripts that don't send Access-Control-Allow-Origin headers.
 *
 * Usage: /partytown-proxy.php?url=https://www.googletagmanager.com/gtm.js?id=XXX
 *
 * Security: only whitelisted domains are proxied to prevent open-redirect abuse.
 */

$ALLOWED_HOSTS = [
    'www.googletagmanager.com',
    'www.google-analytics.com',
    'analytics.google.com',
    'ssl.google-analytics.com',
    'www.googleadservices.com',
    'www.google.com',
    'snap.licdn.com',
    'px.ads.linkedin.com',
    'connect.facebook.net',
    'www.facebook.com',
    'sc-static.net',
    'static.hotjar.com',
    'script.hotjar.com',
];

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    header('Access-Control-Max-Age: 3600');
    http_response_code(204);
    exit;
}

$url = isset($_GET['url']) ? trim($_GET['url']) : '';

if (empty($url)) {
    http_response_code(400);
    exit('Missing url parameter');
}

$parsed = parse_url($url);
if (!$parsed || empty($parsed['host']) || empty($parsed['scheme'])) {
    http_response_code(400);
    exit('Invalid URL');
}

if (!in_array($parsed['host'], $ALLOWED_HOSTS, true)) {
    http_response_code(403);
    exit('Domain not allowed: ' . htmlspecialchars($parsed['host']));
}

if (!in_array($parsed['scheme'], ['http', 'https'], true)) {
    http_response_code(400);
    exit('Invalid scheme');
}

// Fetch the remote resource
$context = stream_context_create([
    'http' => [
        'method'          => 'GET',
        'header'          => implode("\r\n", [
            'User-Agent: Mozilla/5.0 (compatible; PartyProxy/1.0)',
            'Accept: */*',
            'Accept-Encoding: identity',
        ]),
        'follow_location' => 1,
        'max_redirects'   => 3,
        'ignore_errors'   => true,
        'timeout'         => 10,
    ],
    'ssl' => [
        'verify_peer'      => true,
        'verify_peer_name' => true,
    ],
]);

$body = @file_get_contents($url, false, $context);

// Parse response headers
$statusCode  = 200;
$contentType = 'application/javascript';

if (!empty($http_response_header)) {
    foreach ($http_response_header as $h) {
        if (preg_match('#^HTTP/\S+\s+(\d+)#i', $h, $m)) {
            $statusCode = (int) $m[1];
        }
        if (stripos($h, 'content-type:') === 0) {
            $contentType = trim(substr($h, strlen('content-type:')));
        }
    }
}

http_response_code($statusCode);
header('Content-Type: '          . $contentType);
header('Access-Control-Allow-Origin: *');
header('Cache-Control: public, max-age=3600');
header('X-Proxied-By: partytown-proxy');

if ($body !== false) {
    echo $body;
}
