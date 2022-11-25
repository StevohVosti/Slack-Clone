import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgOrIET2EkVMhgvX6jYYG9vEJf2aV5zco",
  authDomain: "slack-clone-ec4bd.firebaseapp.com",
  projectId: "slack-clone-ec4bd",
  storageBucket: "slack-clone-ec4bd.appspot.com",
  messagingSenderId: "244721388592",
  appId: "1:244721388592:web:27cd85724cd2eabeaff1f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);