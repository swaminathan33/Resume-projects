import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP1IDA6BlcHuTCT6ts5pC2AzUlZU_6Ea0",
  authDomain: "todo-app-32fc2.firebaseapp.com",
  projectId: "todo-app-32fc2",
  storageBucket: "todo-app-32fc2.appspot.com",
  messagingSenderId: "957385214978",
  appId: "1:957385214978:web:6d473b564951ef200aeb1b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)