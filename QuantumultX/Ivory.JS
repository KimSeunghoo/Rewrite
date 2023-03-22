/*
https://subscription.tapbots.net/subscription/1/verify
hostname=*.tapbots.net
*/

let obj = JSON.parse($response.body);
obj["product_id"]= "com.tapbots.Ivory.monthly1",
obj["expires_at"]= 4098009658,
obj["valid_until"]= 4098009658,
obj["auto_renew_status"]= true,
$done({body: JSON.stringify(obj)});
