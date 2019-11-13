const copyFromWindow = require('copyFromWindow');
const injectScript = require('injectScript');

const CallTrackingObject = 'mtls';

if(copyFromWindow(CallTrackingObject)) {
  // matelso sript loaded
  data.gtmOnFailure();
}

injectScript(data.LibraryURL, data.gtmOnSuccess, data.gtmOnFailure, CallTrackingObject);
