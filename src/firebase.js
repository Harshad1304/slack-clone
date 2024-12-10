// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABH0fmEpkKUejBAiCpInJCbhUNBvqjqWs",
  authDomain: "slack-clone-35bf8.firebaseapp.com",
  projectId: "slack-clone-35bf8",
  storageBucket: "slack-clone-35bf8.firebasestorage.app",
  messagingSenderId: "28212993807",
  appId: "1:28212993807:web:495df75aaa19a6e7ad687a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

const provider = new GoogleAuthProvider();

export {db, auth, provider}