// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSF-_uUIeex4iuKmMM4PU1e_5KsK4H0hE",
    authDomain: "genius-car-services-79825.firebaseapp.com",
    projectId: "genius-car-services-79825",
    storageBucket: "genius-car-services-79825.appspot.com",
    messagingSenderId: "571830650577",
    appId: "1:571830650577:web:3bc883e23706b9eb0a27f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;