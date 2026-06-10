import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// 🔥 Firebase config (replace with your real values)
const firebaseConfig = {
  apiKey: "AIzaSyDrzNtiEBbWpbdzecXpyrGuQCqbstGA8ZM",
  authDomain: "inffynks.firebaseapp.com",
  projectId: "inffynks",
  storageBucket: "inffynks.firebasestorage.app",
  messagingSenderId: "1025747784881",
  appId: "1:1025747784881:web:c0106b21bab98380b7fe90",
};

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 📦 Services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);