import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoghhpYqgKIKlOgS96icQDtkgb6wDflSM",
  authDomain: "react-portfolio-amir.firebaseapp.com",
  projectId: "react-portfolio-amir",
  storageBucket: "react-portfolio-amir.appspot.com",
  messagingSenderId: "657944615386",
  appId: "1:657944615386:web:1991fc3e45ca42065548e3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
