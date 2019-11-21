hostname = vsco.co,  api.picsart.com, api.calm.com, www.calm.com, photos.adobe.io, license.pdfexpert.com ,dayone.me

//VSCO
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/VSCO.js

//PicsArt
^https:\/\/api\.picsart\.com\/users\/show\/me\.json$ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/PicsArt.js

//Calm
^https:\/\/api\.calm\.com\/me$ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/Calm.js


//PDFExpert
^https:\/\/license\.pdfexpert\.com\/api\/1\.0\/pdfexpert6\/subscription\/(refresh$|check$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/Documents.js


//Documents
^https:\/\/license\.pdfexpert\.com\/api\/.*\/documents\/subscription\/(refresh$|check$) url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/Documents.js

//DayOne
^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ url script-response-body https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/DayOne.js
^https:\/\/dayone\.me\/api\/users$ url script-response-body DayOne-Pre.js
