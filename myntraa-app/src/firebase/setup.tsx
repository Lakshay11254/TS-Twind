import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD6W0ySvNqHbR4aBEZSa3a0aluPE-bYtS8",
  authDomain: "myntra-clone-12de9.firebaseapp.com",
  projectId: "myntra-clone-12de9",
  storageBucket: "myntra-clone-12de9.appspot.com",
  messagingSenderId: "446548654186",
  appId: "1:446548654186:web:772dfff11392a86720f213"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)