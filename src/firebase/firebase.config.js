// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNrf2473XjRPAmsP2SIiV5fs2H5ZVVc48",
  authDomain: "assign-nine-firebase.firebaseapp.com",
  projectId: "assign-nine-firebase",
  storageBucket: "assign-nine-firebase.firebasestorage.app",
  messagingSenderId: "830065196014",
  appId: "1:830065196014:web:00fda2c183a443a6466cff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;