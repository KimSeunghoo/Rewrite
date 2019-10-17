Source: var obj = JSON.parse($response.body);

obj.data.isCustomized = true;
obj.data.isPremium = true;
obj.data.active = true;

$done({body: JSON.stringify(obj)});
