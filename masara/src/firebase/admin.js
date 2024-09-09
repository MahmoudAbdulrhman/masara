// src/firebase/admin.js

const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(), // Or use your service account key file
});

module.exports = admin;
