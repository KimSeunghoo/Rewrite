//Support Grow

let obj = JSON.parse($response.body);
obj["subscriber"]["subscriptions"]= {
     "grow_299_1m": {
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "period_type": "active",
        "expires_date": "2090-01-01T00:00:00Z",
        "grace_period_expires_date": null,
        "unsubscribe_detected_at": null,
        "original_purchase_date": "2022-01-10T06:12:56Z",
        "purchase_date": "2022-01-10T06:12:55Z",
        "store": "app_store"
      }
    };
obj["subscriber"]["entitlements"]= {
     "grow.pro": {
        "expires_date": "2090-01-01T00:00:00Z",
        "purchase_date": "2022-01-10T06:12:55Z",
        "product_identifier": "grow_299_1m",
        "grace_period_expires_date": null
      }
    };
$done({body: JSON.stringify(obj)});
