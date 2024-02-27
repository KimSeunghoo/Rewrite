let obj = JSON.parse($response.body);
obj =
{
 "status": 200,
  "license": "OK"
}
$done({body: JSON.stringify(obj)});
