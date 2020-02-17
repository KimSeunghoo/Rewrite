let obj=JSON.parse($response.body);
let url=$request.url;

obj["subscriber"]["entitlements"]={
			"Airmail Premium": {
				"expires_date": "2099-12-01T00:00:00Z",
				"product_identifier": "Airmail_iOS_Yearly",
				"purchase_date": "2019-12-01T00:00:00Z"
			}
		};
		obj["subscriber"]["subscriptions"]={
			"Airmail_iOS_Yearly": {
				"is_sandbox": false,
				"period_type": "active",
				"billing_issues_detected_at": null,
				"unsubscribe_detected_at": null,
				"expires_date": "2099-12-01T00:00:00Z",
				"original_purchase_date": "2019-10-31T00:00:00Z",
				"purchase_date": "2019-10-31T00:00:00Z",
				"store": "app_store"
      }
    };

$done({body:JSON.stringify(obj)});
