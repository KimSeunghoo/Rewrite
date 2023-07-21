/*

OffScreen：https://apps.apple.com/app/id1474340105

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/OffScreen.JS
[MITM]
hostname = api.revenuecat.com

*/
var offScreen = JSON.parse($response.body);
offScreen.subscriber.entitlements = {
  "Entitlement.Pro": {
    "expires_date": null,
    "product_identifier": "tech.miidii.offscreen.subscription.year.intro.first_year_discount",
    "purchase_date": "2023-01-01T00:01:01Z"
  }
};
offScreen.subscriber.original_purchase_date = "2023-01-01T00:01:01Z";
offScreen.subscriber.subscriptions = {
  "tech.miidii.offscreen.subscription.year.intro.first_year_discount": {
    "expires_date": null,
    "original_purchase_date": "2023-01-01T00:01:01Z,
    "purchase_date": "2023-01-01T00:01:01Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(offScreen) });
