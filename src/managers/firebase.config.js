// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
     apiKey: "AIzaSyDH-_JwoyiplQSRegUlpqlx73DlEkctqPM",
     authDomain: "xipper-f43b7.firebaseapp.com",
     projectId: "xipper-f43b7",
     storageBucket: "xipper-f43b7.appspot.com",
     messagingSenderId: "89713830439",
     appId: "1:89713830439:web:e2af2b328f2be5a5a5fc02",
     measurementId: "G-TYZG6EFZWT",
   };

   const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);