/*
https://subscription.tapbots.net/subscription/1/verify
hostname=*.tapbots.net
*/

let obj = JSON.parse($response.body);
obj["expires_at"]= 4098009658,
obj["can_trial"]= true,
$done({body: JSON.stringify(obj)});
