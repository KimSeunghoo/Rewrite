/*************************************

[rewrite_local]
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/GoodNotes.JS
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/KimSeunghoo/Rewrite/main/QuantumultX/GoodNotes.JS

[mitm]
hostname = isi.csan.goodnotes.com

*************************************/


const goodnotes6 = {};
 const goodnotes = JSON['parse'](typeof $response != 'undefined' && $response['body'] || null);
 const namea = 'apple_access';
 const nameb = 'crossplatform_access';
 const jsid = 'com.goodnotes.gn6_one_time_unlock_3999';
 if (typeof $response == 'undefined') {
     delete $request['headers']['x-revenuecat-etag'];
     delete $request['headers']['X-RevenueCat-ETag'];
     goodnotes6['headers'] = $request['headers'];
 } else if (goodnotes && goodnotes['subscriber']) {
     var _0x3a5506 = '4|3|0|5|2|6|1' ['split']('|'),
         _0x352986 = 0x0;
     while (!![]) {
         switch (_0x3a5506[_0x352986++]) {
             case '0':
              goodnotes['subscriber']['entitlements'][namea] = JSON['parse'](JSON['stringify'](data));
                 continue;
             case '1':
              goodnotes6['body'] = JSON['stringify'](goodnotes);
                 continue;
             case '2':
              goodnotes['subscriber']['entitlements'][namea]['product_identifier'] = jsid;
                 continue;
             case '3':
              goodnotes['subscriber']['subscriptions'][jsid] = {
                     'original_purchase_date': '2022-09-09T09:09:09Z',
                     'purchase_date': '2022-09-09T09:09:09Z',
                     'store': 'app_store',
                     'ownership_type': 'PURCHASED'
                 };
                 continue;
             case '4':
                 data = {
                     'purchase_date': '2022-09-09T09:09:09Z'
                 };
                 continue;
             case '5':
              goodnotes['subscriber']['entitlements'][nameb] = JSON['parse'](JSON['stringify'](data));
                 continue;
             case '6':
              goodnotes['subscriber']['entitlements'][nameb]['product_identifier'] = jsid;
                 continue;
         }
         break;
     }
 }
 $done(goodnotes6);;
