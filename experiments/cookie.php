<?php
// Set the cookies with the last visited page and timestamp
$lastPage = $_SERVER['REQUEST_URI']; // Current page URL
$timestamp = time(); // Current timestamp

setcookie('lastPage', $lastPage, time() + 3600, '/'); // Cookie valid for 1 hour
setcookie('timestamp', $timestamp, time() + 3600, '/'); // Cookie valid for 1 hour
?>
