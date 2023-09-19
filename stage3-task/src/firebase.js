// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnXr7Pj_isDdcd4B8-w4votCbeMDBEFOU",
  authDomain: "galleria-immagini-7e2d4.firebaseapp.com",
  projectId: "galleria-immagini-7e2d4",
  storageBucket: "galleria-immagini-7e2d4.appspot.com",
  messagingSenderId: "471345690017",
  appId: "1:471345690017:web:800dc8c038381586d3c7e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
