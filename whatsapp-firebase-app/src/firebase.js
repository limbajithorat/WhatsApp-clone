import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCooa6R91C8QKdVwnLNAGarHIE0Jm83l7w",
  authDomain: "whatsup-firebase-app.firebaseapp.com",
  projectId: "whatsup-firebase-app",
  storageBucket: "whatsup-firebase-app.appspot.com",
  messagingSenderId: "588881455714",
  appId: "1:588881455714:web:b134170a7eeb2bcba4ff3b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
