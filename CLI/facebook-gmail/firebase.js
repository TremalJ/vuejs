import { initializeApp, firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyC-alLcE4MJlQd9vKb67MDUYw_KoD8L_00",
    authDomain: "facebook-14290.firebaseapp.com",
    projectId: "facebook-14290",
    storageBucket: "facebook-14290.appspot.com",
    messagingSenderId: "373706373583",
    appId: "1:373706373583:web:305f0815d81665f9e6faba"
  };
  // Initialize Firebase
  initializeApp(firebaseConfig);


const db = firestore();
const auth = firestore.auth();
const storage = firestore.storage();

export {firebaseConfig, db, auth, storage}