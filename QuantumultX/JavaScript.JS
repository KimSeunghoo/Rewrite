hostname = vsco.co,  api.picsart.com, api.calm.com, www.calm.com, photos.adobe.io, license.pdfexpert.com ,dayone.me, backend.getdrafts.com,api.textnow.me

//VSCO
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/VSCO.js

//PicsArt
^https:\/\/api\.picsart\.com\/users\/show\/me\.json$ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/PicsArt.js

//Calm
^https:\/\/api\.calm\.com\/me$ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/Calm.js
^https:\/\/www\.calm\.com\/mobile\/manage-subscription\?token=*  url reject-img

//PDFExpert
//^https:\/\/license\.pdfexpert\.com\/api\/1\.0\/pdfexpert6\/subscription\/(refresh$|check$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/Documents.js


//Documents
//^https:\/\/license\.pdfexpert\.com\/api\/.*\/documents\/subscription\/(refresh$|check$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/Documents.js

//DayOne
^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/DayOne.js
^https:\/\/dayone\.me\/api\/users$ url script-response-body DayOne-Pre.js

//Documents&PDFExpert
^https:\/\/license\.pdfexpert\.com\/api\/.*\/(documents|pdfexpert6)\/subscription\/(refresh$|check$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/Documents%26PDFExpert.js

//Drafts
^https:\/\/backend\.getdrafts\.com\/api\/.*\/verification* url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/Drafts.js

//TextNow
^https:\/\/api\.textnow\.me\/api2.0\/users\/* url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/TextNow.js
