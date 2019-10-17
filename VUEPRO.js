var body = $response.body;
var obj = JSON.parse(body);

obj.content["isCustomized"] = "true";

obj.content["isPremium"] = "true";

obj.content["active"] = "true";


body = JSON.stringify(obj);
$done(body);

