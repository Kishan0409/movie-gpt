// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY5ERO7Vd4AmH2a7POmqLJK-IN-_wDg6E",
  authDomain: "movie-gpt-b531c.firebaseapp.com",
  projectId: "movie-gpt-b531c",
  storageBucket: "movie-gpt-b531c.appspot.com",
  messagingSenderId: "550426858783",
  appId: "1:550426858783:web:dcb874a19dc54cbebc8c2a",
  measurementId: "G-DFY0DELHL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();