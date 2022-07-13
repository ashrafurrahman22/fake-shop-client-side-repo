// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDygeN8x6qC4-ITfuDBo4Xjzt6h7CyLdIE",
  authDomain: "fake-shop-38f2a.firebaseapp.com",
  projectId: "fake-shop-38f2a",
  storageBucket: "fake-shop-38f2a.appspot.com",
  messagingSenderId: "117056051641",
  appId: "1:117056051641:web:c56e725b0e6fee34ae3e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;