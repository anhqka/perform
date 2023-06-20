import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2g-2fufym0rG-avZtr8Qxtb2gBpgS4Cc",
  authDomain: "base-perform.firebaseapp.com",
  projectId: "base-perform",
  storageBucket: "base-perform.appspot.com",
  messagingSenderId: "1030784155004",
  appId: "1:1030784155004:web:b7a31b09c8e3aa0430f8f9",
  measurementId: "G-KXX2PWV0VR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
