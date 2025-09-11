// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbE2wDBBeQosxLm53Vd3GkR2XYCesWVCU",
  authDomain: "netflixgpt-63875.firebaseapp.com",
  projectId: "netflixgpt-63875",
  storageBucket: "netflixgpt-63875.firebasestorage.app",
  messagingSenderId: "992969481292",
  appId: "1:992969481292:web:2020d02cc7585ce62d28e9",
  measurementId: "G-1Z25XEQXGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);