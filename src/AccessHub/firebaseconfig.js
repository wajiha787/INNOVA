// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChCy0Rl1Q8DX-ay7SwrJ7ZydcZx1hrurg",
  authDomain: "innova-oauth.firebaseapp.com",
  projectId: "innova-oauth",
  storageBucket: "innova-oauth.firebasestorage.app",
  messagingSenderId: "816331686234",
  appId: "1:816331686234:web:eb195d1af2c31b61303363",
  measurementId: "G-S5908KVQ2F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
