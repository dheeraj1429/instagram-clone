import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const App = {
  apiKey: "AIzaSyBz7HxUYo1gogIskxyZjv6Wsy-aaMlts20",
  authDomain: "instagram-clone-d71be.firebaseapp.com",
  projectId: "instagram-clone-d71be",
  storageBucket: "instagram-clone-d71be.appspot.com",
  messagingSenderId: "249101541457",
  appId: "1:249101541457:web:20520c0f3c10808104d870",
};

// CREATE USER PROFILE DOCUMENT
export const CreateUserProfileDocument = async (userAuth, ohterData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const entryDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        entryDate,
        ...ohterData,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

firebase.initializeApp(App);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// Google promt
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
