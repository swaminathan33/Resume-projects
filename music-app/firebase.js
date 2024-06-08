import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDkmOaZ8MZkzRN2OAj7FPEcXfxijAQ-9Ro",
  authDomain: "music-app-234ca.firebaseapp.com",
  projectId: "music-app-234ca",
  storageBucket: "music-app-234ca.appspot.com",
  messagingSenderId: "292971423733",
  appId: "1:292971423733:web:3f8f7aaf1d477e941b62bc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
