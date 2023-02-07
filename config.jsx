// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqjCUCgk0_JGeWm3__CgRE96dYw8j_ths",
  authDomain: "travel-app-04555.firebaseapp.com",
  projectId: "travel-app-04555",
  storageBucket: "travel-app-04555.appspot.com",
  messagingSenderId: "451067904770",
  appId: "1:451067904770:web:7dc15339ffd28c05dbf81b",
  measurementId: "G-E2X06DVDJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth};