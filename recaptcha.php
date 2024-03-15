<?php 
// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api.js?render=6LcvNYIpAAAAAHDhptddiTg7Ym3Q8ucy6UZJdr4Y");
curl_setopt($ch, CURLOPT_HEADER, 0);

// grab URL and pass it to the browser
curl_exec($ch);

// close cURL resource, and free up system resources
curl_close($ch);

?>