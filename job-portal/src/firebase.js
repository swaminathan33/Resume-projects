import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDuG6Cdbk1JK0zRV57Kieg1O5iOQw-Npxo",
  authDomain: "job-portal-45c60.firebaseapp.com",
  projectId: "job-portal-45c60",
  storageBucket: "job-portal-45c60.appspot.com",
  messagingSenderId: "368375011551",
  appId: "1:368375011551:web:d08847513863513444f16a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
