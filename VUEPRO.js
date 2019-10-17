Source: var obj = JSON.parse($response.body);

obj.isCustomized = true;
obj.isPremium = true;
obj.active = true;

$done({body: JSON.stringify(obj)});
