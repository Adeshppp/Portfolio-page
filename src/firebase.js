
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCYHWja2l7tGA2igKG8nMA336LgS1NKGfA",
//   authDomain: "project-e8569.firebaseapp.com",
//   projectId: "project-e8569",
//   storageBucket: "project-e8569.appspot.com",
//   messagingSenderId: "496595345229",
//   appId: "1:496595345229:web:b7df50465c1d810dbc6104"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCgZlVyRkcbL-kbWJyatFa6gfY6uEpzCig",
  authDomain: "react-portfolio-36a06.firebaseapp.com",
  projectId: "react-portfolio-36a06",
  storageBucket: "react-portfolio-36a06.appspot.com",
  messagingSenderId: "978821282223",
  appId: "1:978821282223:web:b9749bf8cedbbdd9de575a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);