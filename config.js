import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAj_AfAbi2LpXcAhNb4SELZCWm2ZhZ5V1Q",
  authDomain: "spectagram-7b760.firebaseapp.com",
  projectId: "spectagram-7b760",
  storageBucket: "spectagram-7b760.appspot.com",
  messagingSenderId: "396212352327",
  appId: "1:396212352327:web:9ae47c255189d92c03c862"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);