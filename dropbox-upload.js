const dropboxV2Api = require('dropbox-v2-api');
const dotenv = require('dotenv');
const fs = require('fs');
const getBranch = require('git-branch');

dotenv.config();

async function uploadApkToDropbox() {
  const timeAndDate = new Date();

  const dropbox = dropboxV2Api.authenticate({
    token: process.env.DROPBOX_TOKEN,
  });
  const branch = getBranch.sync();
  console.log(`Branch, ${branch}`);
  const dropboxUploadStream = dropbox(
    {
      resource: 'files/upload',
      parameters: {
        path: `/app-release.${branch ? `.${branch}.` : ''}${timeAndDate}.apk`,
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
    './android/app/build/outputs/apk/release/app-release.apk',
  ).pipe(dropboxUploadStream);
}
uploadApkToDropbox();
// if (process.env.NODE_ENV === 'staging') {
//   uploadApkToDropbox();
// } else {
//   console.log('Task completed: Cannot only upload to Dropbox in staging');
// }
