var grow = {
  "request_date": "2022-10-05T12:37:19Z",
  "request_date_ms": 1664973439062,
  "subscriber": {
    "entitlements": {
      "premium": {
        "expires_date": "2099-12-31T12:40:12Z",
        "grace_period_expires_date": null,
        "product_identifier": "spark_b_4199_1y",
        "purchase_date": "2022-10-05T12:37:12Z"
      },
      "spark2": {
        "expires_date": "2222-06-19T16:48:55Z",
        "grace_period_expires_date": null,
        "product_identifier": "rc_promo_spark2_lifetime",
        "purchase_date": "2022-08-06T16:48:55Z"
      }
    },
    "first_seen": "2022-08-06T16:48:55Z",
    "last_seen": "2022-10-05T12:36:05Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "vrvJOi0QJJ0ycs",
    "original_application_version": "1.0",
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "other_purchases": {},
    "subscriptions": {
      "rc_promo_spark2_lifetime": {
        "billing_issues_detected_at": null,
        "expires_date": "2222-06-19T16:48:55Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-08-06T16:48:55Z",
        "period_type": "normal",
        "purchase_date": "2022-08-06T16:48:55Z",
        "store": "promotional",
        "unsubscribe_detected_at": null
      },
      "spark_b_4199_1y": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-31T12:40:12Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-10-05T12:37:14Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-10-05T12:37:12Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({
        body: JSON.stringify(grow)
    })
