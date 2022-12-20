/*
Unlock Photoshop for iPad

http-response ^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile\/nul\/v1$ requires-body=1,max-size=0,script-path=scripts/PhotoShop.js

Mitm = lcs-mobile-cops.adobe.io

*/

const bodyJson = JSON.parse($response.body)

bodyJson.mobileProfile.profileStatus = 'PROFILE_AVAILABLE'

bodyJson.mobileProfile.legacyProfile = '{}'
bodyJson.mobileProfile.relationshipProfile = '{}'

$done({body: JSON.stringify(bodyJson)})
