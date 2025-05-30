// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcUjEkUwSiUE2eIayhXXxMV83uJTOjOfU",
  authDomain: "gamevault-379e6.firebaseapp.com",
  projectId: "gamevault-379e6",
  storageBucket: "gamevault-379e6.firebasestorage.app",
  messagingSenderId: "373335074265",
  appId: "1:373335074265:web:89f8d8dbeabc0af66ee5c8",
  measurementId: "G-2Q519PFJKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);