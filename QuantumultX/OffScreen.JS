/*

OffScreen：https://apps.apple.com/app/id1474340105

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/OffScreen.JS
[MITM]
hostname = api.revenuecat.com

*/
var offScreen = JSON.parse($response.body);
offScreen.subscriber.entitlements = {
  "Entitlement.pro": {
    "expires_date": "2100-01-01T06:06:06Z",
    "product_identifier": "tech.miidii.offscreen.pro.e",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
offScreen.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";
offScreen.subscriber.subscriptions = {
  "tech.miidii.offscreen.pro.e": {
    "expires_date": "2100-01-01T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(offScreen) });
