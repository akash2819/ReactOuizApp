// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdekeFmBRi0JWH9F6JRZYlWL6TzKjFp-s",
  authDomain: "quizapp-819fc.firebaseapp.com",
  projectId: "quizapp-819fc",
  storageBucket: "quizapp-819fc.appspot.com",
  messagingSenderId: "1043853238093",
  appId: "1:1043853238093:web:8c6ffcf9a32b61f784a104",
  measurementId: "G-CREQ2VTYL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};