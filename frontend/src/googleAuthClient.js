
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzmueeZ904TL56zkdAuSmfCHD1RAmPuuc",
    authDomain: "paacreations-280bf.firebaseapp.com",
    projectId: "paacreations-280bf",
    storageBucket: "paacreations-280bf.appspot.com",
    messagingSenderId: "599971555181",
    appId: "1:599971555181:web:4ec9977595715d31bf5c64",
    measurementId: "G-FDZSZF94LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };




