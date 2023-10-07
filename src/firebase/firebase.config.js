// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNEC7auQJW3wHDUQVW6JwZXxsERoLmJhI",
  authDomain: "educational-event-manage-d65dc.firebaseapp.com",
  projectId: "educational-event-manage-d65dc",
  storageBucket: "educational-event-manage-d65dc.appspot.com",
  messagingSenderId: "898293604143",
  appId: "1:898293604143:web:d95c58beb55eaf6117cbda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
