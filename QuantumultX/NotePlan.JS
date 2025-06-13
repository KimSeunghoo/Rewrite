/*************************************

[rewrite_local]
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Reheji.js
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/Reheji.js

[mitm]
hostname = api.revenuecat.com, api.rc-backup.com

*************************************/

let obj = JSON.parse($response.body);
obj["subscriber"]["subscriptions"]= {
      "co.noteplan.subscription.personal.annual2": {
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "2000000939712351",
        "billing_issues_detected_at": null,
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "expires_date": "2099-12-01T03:51:32Z",
        "original_purchase_date": "2019-10-31T02:51:33Z",
        "purchase_date": 2025-06-13T06:35:57Z",
        "display_name": null,
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    };
obj["subscriber"]["entitlements"]= {
      "Personal Annual": {
        "grace_period_expires_date": null,
        "expires_date": "2099-12-01T03:51:32Z",
        "product_identifier": "co.noteplan.subscription.personal.annual2",
        "purchase_date": "2025-06-13T06:35:57Z"
      }
    };
$done({body: JSON.stringify(obj)});
