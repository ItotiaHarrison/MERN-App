// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d45b0.firebaseapp.com",
  projectId: "mern-auth-d45b0",
  storageBucket: "mern-auth-d45b0.appspot.com",
  messagingSenderId: "542691390547",
  appId: "1:542691390547:web:de366f37213b579be4c2a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);