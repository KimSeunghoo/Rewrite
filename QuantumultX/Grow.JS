
var grow = {
    request_date_ms: 1642659888888,
    request_date: "2022-01-10T06:13:40Z",
    subscriber: {
        non_subscriptions: {},
        first_seen: "2022-01-10T04:16:35Z",
        original_application_version: "631",
        other_purchases: {},
        management_url: "itms-apps://apps.apple.com/account/subscriptions",
        subscriptions: {
            grow_lifetime: {
                is_sandbox: false,
                ownership_type: "PURCHASED",
                billing_issues_detected_at: null,
                period_type: "active",
                expires_date: "2090-01-01T00:00:00Z",
                grace_period_expires_date: null,
                unsubscribe_detected_at: null,
                original_purchase_date: "2022-01-10T06:12:56Z",
                purchase_date: "2022-01-10T06:12:55Z",
                store: "app_store"
            }
        },
        entitlements: {
            "grow.pro": {
                grace_period_expires_date: null,
                purchase_date: "2022-01-10T06:12:55Z",
                product_identifier: "grow_lifetime",
                expires_date: "9999-99-99T00:00:00Z"
            }
        },
        original_purchase_date: "2022-01-10T01:08:16Z",
        original_app_user_id: "$RCAnonymousID:64de6719695a4fc2a06afa24898888e3",
        last_seen: "2022-01-10T04:16:35Z"
    }
};

$done({
        body: JSON.stringify(grow)
    })
