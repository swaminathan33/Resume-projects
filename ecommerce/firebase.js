import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCAZBVMgWag1LLebMhMoaaJH33KbP1j5iU",
  authDomain: "ecommerce-34cc8.firebaseapp.com",
  projectId: "ecommerce-34cc8",
  storageBucket: "ecommerce-34cc8.appspot.com",
  messagingSenderId: "1012935742160",
  appId: "1:1012935742160:web:eb05c1ac2c78c28ba344d5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)