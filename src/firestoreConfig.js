// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPa8Z68cNRjkKqnbpr1bZbtnR-Hz2L4FA",
  authDomain: "firestore-db-c505c.firebaseapp.com",
  projectId: "firestore-db-c505c",
  storageBucket: "firestore-db-c505c.appspot.com",
  messagingSenderId: "518492764095",
  appId: "1:518492764095:web:bd537fef61cf2eb539530a",
  measurementId: "G-5CTQ9KPKQE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();