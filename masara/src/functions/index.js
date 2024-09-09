// src/functions/index.js

const functions = require('firebase-functions');
const admin = require('../src/firebase/admin');

exports.setCustomClaims = functions.https.onCall(async (data, context) => {
  if (context.auth.token.role !== 'admin') {
    throw new functions.https.HttpsError('permission-denied', 'Only admins can set custom claims.');
  }

  try {
    await admin.auth().setCustomUserClaims(data.uid, { role: data.role });
    return { message: `Custom claims set successfully for UID: ${data.uid}` };
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Error setting custom claims.', error);
  }
});
