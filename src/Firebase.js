// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}  from "firebase/firestore"
import { getStorage } from 'firebase/storage';  // This line needs to be changed

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRcfFgwIY7YvvS_SRTpCn-QkAmmrs4OOw",
  authDomain: "nike-85a2a.firebaseapp.com",
  projectId: "nike-85a2a",
  storageBucket: "nike-85a2a.appspot.com",
  messagingSenderId: "880481913682",
  appId: "1:880481913682:web:edb8a11d803ca3c328488b",
  measurementId: "G-ZEM6ZTMKNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);  // Corrected line
const TxtDB = getFirestore(app)
const analytics = getAnalytics(app);
export {app, analytics, storage,TxtDB };