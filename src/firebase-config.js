// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "thecommoner-cfcf0.firebaseapp.com",
  projectId: "thecommoner-cfcf0",
  storageBucket: "thecommoner-cfcf0.appspot.com",
  messagingSenderId: "616432615028",
  appId: "1:616432615028:web:bfc8778c5b2d38ebbc9b21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default db;
