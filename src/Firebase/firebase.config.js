// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ7CDpEbiLdfxyc6Z5c_kPcbGykwDyh8I",
    authDomain: "tasty-salt.firebaseapp.com",
    projectId: "tasty-salt",
    storageBucket: "tasty-salt.appspot.com",
    messagingSenderId: "859049976219",
    appId: "1:859049976219:web:bd29ef5015fcad14f7c13e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;