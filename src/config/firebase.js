// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZUjfIUwTJQC53k5DtHWSXZoVAVrdNySY",
  authDomain: "realtor-1c82c.firebaseapp.com",
  projectId: "realtor-1c82c",
  storageBucket: "realtor-1c82c.appspot.com",
  messagingSenderId: "446111274190",
  appId: "1:446111274190:web:b55ff0dc38354bc2b32c9f",
  measurementId: "G-J4JV5WQJQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
