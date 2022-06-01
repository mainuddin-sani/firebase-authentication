// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJSCD_jCqPgmYhm6av-JCOUq5C_jHnKzc",
  authDomain: "fir-authentication-f92e2.firebaseapp.com",
  projectId: "fir-authentication-f92e2",
  storageBucket: "fir-authentication-f92e2.appspot.com",
  messagingSenderId: "204437194301",
  appId: "1:204437194301:web:e1eede611e4b2dd599cc54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app