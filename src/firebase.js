import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3aCCe6WlPhuTcIYPlvMLzJlNCGqsoCnE",
  authDomain: "slack-clone-99309.firebaseapp.com",
  projectId: "slack-clone-99309",
  storageBucket: "slack-clone-99309.appspot.com",
  messagingSenderId: "368932432633",
  appId: "1:368932432633:web:cd15eaec6b7c21477e5028"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
