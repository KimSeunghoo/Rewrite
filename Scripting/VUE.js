var body = $response.body;
var obj = JSON.parse(body);

obj.content.isCustomize = true;

obj.content.isPremium = true;

obj.content.active = true;


body = JSON.stringify(obj);
$done(body);

