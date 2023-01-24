import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC79DwCvkGejwhRaUD0ppi9OKYqN4t-8KE",
  authDomain: "slack-clone-44b2c.firebaseapp.com",
  projectId: "slack-clone-44b2c",
  storageBucket: "slack-clone-44b2c.appspot.com",
  messagingSenderId: "285659490408",
  appId: "1:285659490408:web:b28ac48419d90bb432b3dd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
