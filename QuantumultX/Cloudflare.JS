/*
^https?:\/\/api\.cloudflareclient\.com\/v0i2207252050\/reg\/.*
hostname=*.api.cloudflareclient.com
*/

var obj = JSON.parse($response.body);
obj["account_type"]= "unlimited"
$done({body: JSON.stringify(obj)});
