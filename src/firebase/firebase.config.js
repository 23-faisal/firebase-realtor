import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL3IAcgMfh_mwT8cIFURPV1xbtTvO2KM4",
  authDomain: "firebse-realtor-clone-react.firebaseapp.com",
  projectId: "firebse-realtor-clone-react",
  storageBucket: "firebse-realtor-clone-react.appspot.com",
  messagingSenderId: "1082849646206",
  appId: "1:1082849646206:web:1003f18af87164894aaa2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
