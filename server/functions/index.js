const admin = require('firebase-admin');
const serviceAccount = require('./text-replacement-ff7ff-firebase-adminsdk-te33p-a07a23c65d');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require('./api'),
};
