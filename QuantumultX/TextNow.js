body = $response.body.replace(/\"show_ads\":true/, "\"show_ads\":false").replace(/\"premium_calling\":false/, "\"premium_calling\":true")
$done({body});
