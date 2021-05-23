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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const{displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch();
  objectsToAdd.forEach(obj =>{
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const convertCollectionSnapshotToMap = (collections) =>{
  const transformedCollection = collections.docs.map( doc => {
    const {title, items} = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) =>{
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  },{})
}

export default firebase;