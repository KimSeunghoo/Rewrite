/*

OffScreen：https://apps.apple.com/app/id1474340105

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/OffScreen.JS
[MITM]
hostname = api.revenuecat.com

*/
var OffScreen = JSON.parse($response.body);
OffScreen.subscriber.entitlements = {
  "Entitlement.Pro": {
    "expires_date": "2100-01-01T00:00:00Z",
    "product_identifier": "tech.miidii.offscreen.subscription.pro",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
OffScreen.subscriber.original_purchase_date = "2023-01-01T00:00:00Z";
OffScreen.subscriber.subscriptions = {
  "tech.miidii.offscreen.subscription.pro": {
    "expires_date": "2100-01-01T00:00:00Z",
    "original_purchase_date": "2023-01-01T00:00:00Z,
    "purchase_date": "2023-01-01T00:00:00Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(OffScreen) });
