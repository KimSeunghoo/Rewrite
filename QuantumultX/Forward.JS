var Forward = {
  "request_date_ms": 1728305971429,
  "request_date": "2024-10-07T12:59:31Z",
  "subscriber": {
    "non_subscriptions": {
      "forward.vip.forever": [
        {
          "id": "725241fbf0",
          "is_sandbox": false,
          "purchase_date": "2024-09-26T16:34:57Z",
          "original_purchase_date": "2024-09-26T16:34:57Z",
          "store": "app_store",
          "store_transaction_id": "2000000726501356"
        }
      ],
      "forward.vip.forever.discount": [
        {
          "id": "8695a045fb",
          "is_sandbox": false,
          "purchase_date": "2024-09-26T16:35:40Z",
          "original_purchase_date": "2024-09-26T16:35:40Z",
          "store": "app_store",
          "store_transaction_id": "2000000726501662"
        }
      ]
    },
    "first_seen": "2024-10-07T12:57:10Z",
    "original_application_version": "1.0",
    "other_purchases": {
      "forward.vip.forever": {
        "purchase_date": "2024-09-26T16:34:57Z"
      },
      "forward.vip.forever.discount": {
        "purchase_date": "2024-09-26T16:35:40Z"
      }
    },
    "management_url": null,
    "subscriptions": {
    },
    "entitlements": {
      "pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-09-26T16:35:40Z",
        "product_identifier": "forward.vip.forever.discount",
        "expires_date": null
      }
    },
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "original_app_user_id": "fa33c7fb0aeb4087b03a38c1e697c9ce",
    "last_seen": "2024-10-07T12:57:10Z"
  }
};

$done({
        body: JSON.stringify(Forward)
    })