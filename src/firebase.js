

import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCG7zv3Ap1HFl6EbkjqcmBR-nCwYjRQPPA",
    authDomain: "todo-app-cp-8ffc1.firebaseapp.com",
    projectId: "todo-app-cp-8ffc1",
    storageBucket: "todo-app-cp-8ffc1.appspot.com",
    messagingSenderId: "903522270536",
    appId: "1:903522270536:web:02fb8b8ed461702556477d",
    measurementId: "G-JMBCSDEVWV"
});

const db=firebaseApp.firestore();

export default db;