// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration pasted from Firebase console online
const firebaseConfig = {
  apiKey: "AIzaSyB7n7FrrVReLqJmI0bucVj_G4IC_CW4HH4",
  authDomain: "notes-webapp-4000.firebaseapp.com",
  projectId: "notes-webapp-4000",
  storageBucket: "notes-webapp-4000.firebasestorage.app",
  messagingSenderId: "765905666817",
  appId: "1:765905666817:web:f0b63565484d1a2ce85100"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
