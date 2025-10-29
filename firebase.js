// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHWkj1ifNcyu4kVqrpZiMQC8lhmmpw_Ik",
  authDomain: "banco-3856a.firebaseapp.com",
  projectId: "banco-3856a",
  storageBucket: "banco-3856a.firebasestorage.app",
  messagingSenderId: "763701287991",
  appId: "1:763701287991:web:51336d1bc7128b25f273b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};