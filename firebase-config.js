// firebase-config.js
// REPLACE THIS with your actual Firebase config from Step 2.2
const firebaseConfig = {
  apiKey: "AIzaSyCBl_FnVG8kHfIjuIBqSAd5krN1K_i-i00",
  authDomain: "lingwahero.firebaseapp.com",
  projectId: "lingwahero",
  storageBucket: "lingwahero.firebasestorage.app",
  messagingSenderId: "863528945284",
  appId: "1:863528945284:web:b1b068793d1b03666624d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();