console.log("✅ auth.js loaded!");

window.addEventListener("load", () => {
  console.log("🌐 Page fully loaded!");
});

import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Get elements from the HTML
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupButton = document.getElementById("signup-button");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");

const statusMessage = document.getElementById("status-message");

// Handle sign up
signupButton.addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value);
    statusMessage.textContent = "✅ Account created successfully!";
    statusMessage.style.color = "green";
  } catch (error) {
    statusMessage.textContent = `❌ Sign-up error: ${error.message}`;
    statusMessage.style.color = "red";
  }
});

// Handle login
loginButton.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
    statusMessage.textContent = "✅ Logged in successfully!";
    statusMessage.style.color = "green";
  } catch (error) {
    statusMessage.textContent = `❌ Login error: ${error.message}`;
    statusMessage.style.color = "red";
  }
});
