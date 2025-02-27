// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgWSbS-FDq6EGDDVV_XuP4tR_lRxosK58",
  authDomain: "moviedatabase-ae05f.firebaseapp.com",
  projectId: "moviedatabase-ae05f",
  storageBucket: "moviedatabase-ae05f.firebasestorage.app",
  messagingSenderId: "934994393188",
  appId: "1:934994393188:web:741ba2c0b3312d21988771",
  measurementId: "G-PRCPKNFPWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);