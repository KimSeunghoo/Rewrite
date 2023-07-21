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
    "expires_date": "2100-01-01T00:00:00Z",
    "product_identifier": "tech.miidii.offscreen.pro",
    "purchase_date": "2023-01-01T00:00:01Z"
  }
};
offScreen.subscriber.original_purchase_date = "2023-01-01T00:00:01Z";
offScreen.subscriber.subscriptions = {
  "tech.miidii.offscreen.pro": {
    "expires_date": "2100-01-01T00:00:00Z",
    "original_purchase_date": "2023-01-01T00:00:01Z",
    "purchase_date": "2023-01-01T00:00:01Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};

$done({ body: JSON.stringify(offScreen) });
