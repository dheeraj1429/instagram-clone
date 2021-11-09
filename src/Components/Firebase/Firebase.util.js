import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const App = {
  apiKey: "AIzaSyBz7HxUYo1gogIskxyZjv6Wsy-aaMlts20",
  authDomain: "instagram-clone-d71be.firebaseapp.com",
  projectId: "instagram-clone-d71be",
  storageBucket: "instagram-clone-d71be.appspot.com",
  messagingSenderId: "249101541457",
  appId: "1:249101541457:web:20520c0f3c10808104d870",
};

firebase.initializeApp(App);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
