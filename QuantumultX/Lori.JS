/******************************


[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/Lori.JS
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/Lori.JS
^https?:\/\/app-measurement\.com\/config\/app url reject
^https?:\/\/firestore\.googleapis\.com url reject


[mitm] 

hostname = api.revenuecat.com

*******************************/

var Lori = {
  "request_date_ms" : 1712428415216,
  "request_date" : "2024-04-06T18:33:35Z",
  "subscriber" : {
    "experiment" : {
      "id" : "prexp7dce9bc3d5",
      "variant" : "a"
    },
    "first_seen" : "2024-04-06T18:26:14Z",
    "non_subscriptions" : {

    },
    "original_application_version" : "96",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "lori_pro_onetime" : {
        "store" : "app_store",
        "purchase_date" : "2023-02-23T02:33:33Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-02-23T02:33:33Z",
        "expires_date" : "2100-01-01T01:01:01Z"
      }
    },
    "entitlements" : {
      "pro" : {
        "store" : "app_store",
        "purchase_date" : "2023-02-23T02:33:33Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-02-23T02:33:33Z",
        "product_identifier" : "lori_pro_onetime",
        "expires_date" : "2100-01-01T01:01:01Z"
      }
    },
    "original_purchase_date" : "2024-03-14T00:48:51Z",
    "original_app_user_id" : "$RCAnonymousID:ceed58fa231442ea8b6b71261e958e0c",
    "last_seen" : "2024-04-06T18:26:14Z"
  }
};
$done({
        body: JSON.stringify(Lori)
    })
