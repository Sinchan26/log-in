// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBepmQ-fv5_KrUQaeBtq2riBSa6XjCSLqI",
  authDomain: "log-in-77c19.firebaseapp.com",
  projectId: "log-in-77c19",
  storageBucket: "log-in-77c19.appspot.com",
  messagingSenderId: "374765272423",
  appId: "1:374765272423:web:06513d6fd1646c757c03c2",
  measurementId: "G-HTVG3GWFP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const store=getFirestore();
export {app,auth,store};