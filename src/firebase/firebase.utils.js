import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXZp5MlQo1xQw5lM8qbqdd_nlR5EKquPg",
    authDomain: "usman-clothing.firebaseapp.com",
    databaseURL: "https://usman-clothing.firebaseio.com",
    projectId: "usman-clothing",
    storageBucket: "usman-clothing.appspot.com",
    messagingSenderId: "782990594932",
    appId: "1:782990594932:web:318fa535607b509fecd221",
    measurementId: "G-QSDKC2L90R"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( {prompt:'select_account'} );

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;