// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwOedeDk4fq49A75V83k2ScprwCuZx9J8",
  authDomain: "seo-tools-a07c5.firebaseapp.com",
  projectId: "seo-tools-a07c5",
  storageBucket: "seo-tools-a07c5.appspot.com",
  messagingSenderId: "18739710665",
  appId: "1:18739710665:web:f83319ecb932d56a735b18",
  measurementId: "G-TJQBMX07W0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
