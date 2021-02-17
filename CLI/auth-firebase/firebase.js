import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAH-OPXiGikhJwC29q6n0a__k-fBFOubCM",
    authDomain: "auth-firebase-e4619.firebaseapp.com",
    projectId: "auth-firebase-e4619",
    storageBucket: "auth-firebase-e4619.appspot.com",
    messagingSenderId: "430266775550",
    appId: "1:430266775550:web:f8cb19f20126a5f77332af"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export { db, auth }