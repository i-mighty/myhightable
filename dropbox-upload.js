const dropboxV2Api = require('dropbox-v2-api');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

function uploadApkToDropbox() {
  const timeAndDate = new Date();

  const dropbox = dropboxV2Api.authenticate({
    token: process.env.DROPBOX_TOKEN,
  });
  const dropboxUploadStream = dropbox(
    {
      resource: 'files/upload',
      parameters: {
        path: `/app-release.${timeAndDate.toISOString()}.apk`,
      },
    },
    (err, result, response) => {
      // upload completed
      if (err) {
        console.log(`An error occurred; ${err.message}`);
      } else {
        console.log('Task completed: Uploaded to Dropbox successfully');
      }
    },
  );
  fs.createReadStream(
    './android/app/build/outputs/apk/debug/app-debug.apk',
  ).pipe(dropboxUploadStream);
}
if (process.env.NODE_ENV === 'staging') {
  uploadApkToDropbox();
} else {
  console.log('Task completed: Can only upload to Dropbox in staging');
}
