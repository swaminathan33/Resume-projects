import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7IgEb1R9mi4JZzJbdBa8JjJ8rrngxVRo",
  authDomain: "login-da9e9.firebaseapp.com",
  projectId: "login-da9e9",
  storageBucket: "login-da9e9.appspot.com",
  messagingSenderId: "433005070881",
  appId: "1:433005070881:web:0866a2e02219423a2af160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)