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

  export const createUserProfileDocument = async (userAuth, additonalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    console.log(snapshot)

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additonalData
          })
        }
        catch(error){
          console.log('error creating user', error.message)
        }
        
    }

    return userRef;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( {prompt:'select_account'} );

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;