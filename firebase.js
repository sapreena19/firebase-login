 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwSz2R0tlY_LBXecbB-ZaxYbxnePWqi7Q",
  authDomain: "fir-project-c3f52.firebaseapp.com",
  projectId: "fir-project-c3f52",
  storageBucket: "fir-project-c3f52.firebasestorage.app",
  messagingSenderId: "998166664636",
  appId: "1:998166664636:web:1968c7d5a2599b37dac7b9",
  measurementId: "G-3J3VGWTNF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;