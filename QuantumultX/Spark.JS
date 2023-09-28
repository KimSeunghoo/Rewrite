/* 

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/Spark.JS


[MITM]
hostname = api.revenuecat.com


*/

const Spark = {};
const SparkPremium = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Spark.headers = $request.headers;
} else if (SparkPremium && SparkPremium.subscriber) {
  SparkPremium.subscriber.subscriptions = SparkPremium.subscriber.subscriptions || {};
  SparkPremium.subscriber.entitlements = SparkPremium.subscriber.entitlements || {};

  const data = {
    "expires_date": "2100-01-01T00:00:00Z",
    "original_purchase_date": "2022-11-18T03:57:16Z",
    "purchase_date": "2022-11-18T04:00:12Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  SparkPremium.subscriber.subscriptions["spark_5999_1y_1w0"] = data;
  SparkPremium.subscriber.entitlements["premium"] = JSON.parse(JSON.stringify(data));
  SparkPremium.subscriber.entitlements["premium"].product_identifier = "spark_5999_1y_1w0";

  Spark.body = JSON.stringify(SparkPremium);
}

$done(Spark);
