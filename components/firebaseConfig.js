// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD89QOE9Cf_9SP43d7ck2wR3TPNRD5EIeg",
    authDomain: "saferental-c3dcc.firebaseapp.com",
    projectId: "saferental-c3dcc",
    storageBucket: "saferental-c3dcc.appspot.com",
    messagingSenderId: "772898368020",
    appId: "1:772898368020:web:ef329cc400a49eb741d501",
    measurementId: "G-3E9MD444B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);