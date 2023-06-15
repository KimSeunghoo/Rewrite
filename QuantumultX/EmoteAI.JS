
var emote ={
  "request_date_ms" : 1665976535050,
  "request_date" : "2022-10-17T03:15:35Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-10-16T15:11:27Z",
    "original_application_version" : "2",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "Monthly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "normal",
        "expires_date" : "2100-08-17T12:22:48Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-10-16T17:21:23Z",
        "original_purchase_date" : "2022-10-16T17:12:55Z",
        "purchase_date" : "2022-10-16T17:12:52Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-10-16T17:12:52Z",
        "product_identifier" : "LifetimeMembership",
        "expires_date" : "2100-08-17T12:22:48Z"
      },
      "testPro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-10-16T17:12:52Z",
        "product_identifier" : "LifetimeMembership",
        "expires_date" : "2100-08-17T12:22:48Z"
      }
    },
    "original_purchase_date" : "2022-10-16T15:11:00Z",
    "original_app_user_id" : "$RCAnonymousID:bfe8143dbd7e4f6fb72c66b0807da731",
    "last_seen" : "2022-10-16T15:11:27Z"
  }
}


$done({
        body: JSON.stringify(emote)
    })
