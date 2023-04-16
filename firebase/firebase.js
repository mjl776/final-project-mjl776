// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8x2AXKbqHCn15LkdIN_67vkTLUkNITqM",
  authDomain: "final-project-mjl776-auth.firebaseapp.com",
  projectId: "final-project-mjl776-auth",
  storageBucket: "final-project-mjl776-auth.appspot.com",
  messagingSenderId: "600338221231",
  appId: "1:600338221231:web:9fec79eb8928fb09ff2c5a",
  measurementId: "G-Y3V0T3LLYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

export default authentication;