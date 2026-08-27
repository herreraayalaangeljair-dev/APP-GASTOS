// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSMUT1TlbAUJrdpZ0OUl-DHm2GSTHbsdM",
    authDomain: "herreritaxdd.firebaseapp.com",
    databaseURL: "https://herreritaxdd-default-rtdb.firebaseio.com",
    projectId: "herreritaxdd",
    storageBucket: "herreritaxdd.firebasestorage.app",
    messagingSenderId: "835892303245",
    appId: "1:835892303245:web:aab58df54850828dd759c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;