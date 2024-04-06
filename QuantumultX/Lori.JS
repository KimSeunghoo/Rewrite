/******************************


[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/Lori.JS

[mitm] 

hostname = api.revenuecat.com

*******************************/

var emote = {
  "request_date_ms": 1712421476244,
  "request_date": "2024-04-06T16:37:56Z",
  "subscriber": {
    "experiment": {
      "id": "prexp7dce9bc3d5",
      "variant": "b"
    },
    "first_seen": "2024-04-06T16:35:02Z",
    "non_subscriptions": {
    },
    "original_application_version": "96",
    "other_purchases": {
    },
"subscriptions": {
      "lifetime-pro": {
        "original_purchase_date": "2023-09-27T16:23:44Z",
        "expires_date": "2100-01-01T12:00:13Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "470001663439451",
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2023-09-27T16:23:43Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "lifetime-pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-09-27T16:23:43Z",
        "product_identifier": "lifetime-pro",
        "expires_date": "2100-01-01T12:00:13Z"
      },
      "lori_pro_onetime": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-09-27T16:23:43Z",
        "product_identifier": "lifetime-pro",
        "expires_date": "2100-01-01T12:00:13Z"
      }
    },
    "original_purchase_date": "2023-09-27T16:21:48Z",
    "original_app_user_id": "$RCAnonymousID:b16f94b12cb340b4a54fa5d04e194f83",
    "last_seen": "2023-09-27T16:22:51Z"
  }
};

$done({
        body: JSON.stringify(emote)
    })
