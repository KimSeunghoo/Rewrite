var body = $response.body;
var obj = JSON.parse(body);

obj.isCustomized = true;
obj.isPremium = true;
obj.active = true;

body = JSON.stringify(obj);
$done(body);

