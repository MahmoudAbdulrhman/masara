// src/firebase/index.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCB2m6BAnIYUf-WKzwZ3V4sVMW6Qxr1SGs",
  authDomain: "masra-3d542.firebaseapp.com",
  projectId: "masra-3d542",
  storageBucket: "masra-3d542.appspot.com",
  messagingSenderId: "968869652508",
  appId: "1:968869652508:web:bda0198dc17c2898ea57d9",
  measurementId: "G-Y34DBDJTBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
