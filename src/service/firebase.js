// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7lg_UwiNJw-48z3RSJn3SjtWtTCrIzdk",
  authDomain: "redux-app-b7b8c.firebaseapp.com",
  dataBaseUrl: "https://redux-app-b7b8c-default-rtdb.firebaseio.com/",
  projectId: "redux-app-b7b8c",
  storageBucket: "redux-app-b7b8c.appspot.com",
  messagingSenderId: "810962605472",
  appId: "1:810962605472:web:87af782b8a05f952b8c0c5",
  measurementId: "G-T3X8W91RQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export default app