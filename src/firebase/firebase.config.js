// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4M61Os3Xl4cGqlzpVyclpr8DT0Fq7cjw",
  authDomain: "travel-guru-auth-bf53b.firebaseapp.com",
  projectId: "travel-guru-auth-bf53b",
  storageBucket: "travel-guru-auth-bf53b.appspot.com",
  messagingSenderId: "1030248047862",
  appId: "1:1030248047862:web:07f478ff592718258438d7",
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
