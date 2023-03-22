/*
https://subscription.tapbots.net/subscription/1/verify
hostname=*.tapbots.net
*/

let obj = JSON.parse($response.body);
obj={"transactions":[{"product_id":"com.tapbots.Ivory.yearly1","expires_at":4098009658, "valid_until":4098009658, "auto_renew_status": true}]};
$done({body: JSON.stringify(obj)});
