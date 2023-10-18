import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxn-rEjGkqvvlfvksY-SXiwxYh2aIjde0",
  authDomain: "cart-project-d26fe.firebaseapp.com",
  projectId: "cart-project-d26fe",
  storageBucket: "cart-project-d26fe.appspot.com",
  messagingSenderId: "964842683741",
  appId: "1:964842683741:web:8e78a7d40df023e12fbcb4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);