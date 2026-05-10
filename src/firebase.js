import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: Replace the placeholders below with your actual configuration from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCDrkJ68WUm2EhEqmhdntf-vU64zALzpFE",
  authDomain: "sanjana-arangetram.firebaseapp.com",
  projectId: "sanjana-arangetram",
  storageBucket: "sanjana-arangetram.firebasestorage.app",
  messagingSenderId: "972540067535",
  appId: "1:972540067535:web:d76ea3e06011f7d77181ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
