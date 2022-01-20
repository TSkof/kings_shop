import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBQIg4tGcjuGu3qR5Pa2GfHGm3j1wZgiAU",
  authDomain: "kingsdb-bef41.firebaseapp.com",
  projectId: "kingsdb-bef41",
  storageBucket: "kingsdb-bef41.appspot.com",
  messagingSenderId: "903113507961",
  appId: "1:903113507961:web:fde83acb8c4492998e40a8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


