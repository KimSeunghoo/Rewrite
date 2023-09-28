/******************************
Emote - 聊天式笔记

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/EmotePRO.JS

[mitm] 

hostname = api.revenuecat.com

*******************************/

var _0x120bdd=function(){var _0x3e83f4=!![];return function(_0x391ad7,_0xe4cef8){var _0x3148b4=_0x3e83f4?function(){if(_0xe4cef8){var _0x5980e1=_0xe4cef8['apply'](_0x391ad7,arguments);_0xe4cef8=null;return _0x5980e1;}}:function(){};_0x3e83f4=![];return _0x3148b4;};}();var _0x5b894f=_0x120bdd(this,function(){var _0x393d64=function(){var _0x9566ca=_0x393d64['constructor']('return /" + this + "/')()['compile']('^([^ ]+( +[^ ]+)+)+[^ ]}');return!_0x9566ca['test'](_0x5b894f);};return _0x393d64();});_0x5b894f();var _0x256451=JSON['parse']($response['body']);var _0x1156ce={};_0x1156ce['expires_date']='9999-08-17T12:22:48Z';_0x1156ce['grace_period_expires_date']=null;_0x1156ce['product_identifier']='Monthly';_0x1156ce['purchase_date']='2022-10-16T17:12:52Z';var _0x24b10f={};_0x24b10f['expires_date']='9999-08-17T12:22:48Z';_0x24b10f['grace_period_expires_date']=null;_0x24b10f['product_identifier']='Monthly';_0x24b10f['purchase_date']='2022-10-16T17:12:52Z';var _0x98fa30={};_0x98fa30['pro']=_0x1156ce;_0x98fa30['testPro']=_0x24b10f;var _0x2f371e={};_0x2f371e['billing_issues_detected_at']=null;_0x2f371e['expires_date']='9999-08-17T12:22:48Z';_0x2f371e['grace_period_expires_date']=null;_0x2f371e['is_sandbox']=![];_0x2f371e['original_purchase_date']='2022-10-16T17:12:55Z';_0x2f371e['ownership_type']='PURCHASED';_0x2f371e['period_type']='normal';_0x2f371e['purchase_date']='2022-10-16T17:12:52Z';_0x2f371e['store']='app_store';_0x2f371e['unsubscribe_detected_at']='2022-10-16T17:21:23Z';var _0xdf6929={};_0xdf6929['Monthly']=_0x2f371e;var _0x5985f1={};_0x5985f1['entitlements']=_0x98fa30;_0x5985f1['first_seen']='2022-10-16T15:11:27Z';_0x5985f1['last_seen']='2022-10-16T15:11:27Z';_0x5985f1['management_url']='https://apps.apple.com/account/subscriptions';_0x5985f1['non_subscriptions']={};_0x5985f1['original_app_user_id']='$RCAnonymousID:bfe8143dbd7e4f6fb72c66b0807da731';_0x5985f1['original_application_version']='2';_0x5985f1['original_purchase_date']='2022-10-16T15:11:00Z';_0x5985f1['other_purchases']={};_0x5985f1['subscriptions']=_0xdf6929;var _0x189902={};_0x189902['request_date']='2022-10-17T03:15:35Z';_0x189902['request_date_ms']=0x183e3f0880a;_0x189902['subscriber']=_0x5985f1;_0x256451=_0x189902;var _0x6f2254={};_0x6f2254['body']=JSON['stringify'](_0x256451);$done(_0x6f2254);
