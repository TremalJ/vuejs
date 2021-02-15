import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCGfyX5l0exEFRwpDn5vul18SI9wPnCFsY",
    authDomain: "crudvuex.firebaseapp.com",
    projectId: "crudvuex",
    storageBucket: "crudvuex.appspot.com",
    messagingSenderId: "164332241141",
    appId: "1:164332241141:web:f1572c229557e58cdc45bc",
    measurementId: "G-6VHW5596VS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export {db}