// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-161fb.firebaseapp.com",
  projectId: "mern-auth-161fb",
  storageBucket: "mern-auth-161fb.appspot.com",
  messagingSenderId: "990869855518",
  appId: "1:990869855518:web:8dea8aca5260b7b672fd0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);