import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzCh-SEjXXreVU4eem9b6PDX6ialsndq8",
  authDomain: "sanjana-arangetram-dee7e.firebaseapp.com",
  projectId: "sanjana-arangetram-dee7e",
  storageBucket: "sanjana-arangetram-dee7e.firebasestorage.app",
  messagingSenderId: "1076709877437",
  appId: "1:1076709877437:web:41023e84c754acd524f9d4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);