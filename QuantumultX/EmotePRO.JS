/******************************


[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/CareServer.JS
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/CareServer.JS
^https?:\/\/app-measurement\.com\/config\/app url reject
^https?:\/\/firestore\.googleapis\.com url reject


[mitm] 

hostname = api.revenuecat.com

*******************************/

const Apple = {};
const AppStore = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Apple.headers = $request.headers;
} else if (AppStore && AppStore.subscriber) {
  AppStore.subscriber.subscriptions = AppStore.subscriber.subscriptions || {};
  AppStore.subscriber.entitlements = AppStore.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = 'App';
  const UAMappings = {
    'ShellBoxKit':{ name: 'LifetimePro', id: 'LifetimeMembership'},
  };
  const data = {
    "expires_date":"2100-01-01T01:01:01Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      AppStore.subscriber.subscriptions = {};
      AppStore.subscriber.subscriptions[id] = data;
      AppStore.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      AppStore.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  Apple.body = JSON.stringify(AppStore);
}
$done(Apple);