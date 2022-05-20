import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCO2t6WeBL0VfG_-m9uYnw--3Ctfc4mtY",
  authDomain: "km-crwn-clothing-db.firebaseapp.com",
  projectId: "km-crwn-clothing-db",
  storageBucket: "km-crwn-clothing-db.appspot.com",
  messagingSenderId: "54951271592",
  appId: "1:54951271592:web:2f4436384a4989326f369d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.error("Error creating user", err.message);
    }
  }

  return userDocRef;
};
