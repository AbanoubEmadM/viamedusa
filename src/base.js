// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdAW6JKcUkgphglFa3Sm80G6oMyih0GQw",
  authDomain: "medusajewellery-f1bb6.firebaseapp.com",
  databaseURL: "https://medusajewellery-f1bb6-default-rtdb.firebaseio.com",
  projectId: "medusajewellery-f1bb6",
  storageBucket: "medusajewellery-f1bb6.appspot.com",
  messagingSenderId: "145103467585",
  appId: "1:145103467585:web:f39eb9bf6cd550bf4842c0",
  measurementId: "G-C8TNWMELSF"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);

