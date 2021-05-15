import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB-29tXef0ROsb2jAT2Z4SnL2aEhtTdREM",
    authDomain: "crwn-db-a3ec0.firebaseapp.com",
    projectId: "crwn-db-a3ec0",
    storageBucket: "crwn-db-a3ec0.appspot.com",
    messagingSenderId: "603822292360",
    appId: "1:603822292360:web:1fc048617dec6f8bf5ce3d"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;