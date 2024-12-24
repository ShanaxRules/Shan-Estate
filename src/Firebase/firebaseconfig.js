// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO-8DioZPZ178ZeHg-jlnSVKRq-Y5tDRo",
  authDomain: "real-estate-34c7a.firebaseapp.com",
  projectId: "real-estate-34c7a",
  storageBucket: "real-estate-34c7a.firebasestorage.app",
  messagingSenderId: "566615296539",
  appId: "1:566615296539:web:7d79ecdf5d72f12793c6be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;