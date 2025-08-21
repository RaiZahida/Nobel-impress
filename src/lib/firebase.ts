
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  "projectId": "bag-bliss-9s6yv",
  "appId": "1:12743827261:web:bee6c4aa6ff0d6f5272f54",
  "storageBucket": "bag-bliss-9s6yv.firebasestorage.app",
  "apiKey": "AIzaSyBsiAFVApP7tIFNxqs0-YY7KYA_8SCargY",
  "authDomain": "bag-bliss-9s6yv.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "12743827261"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

export { firestore };
