import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
 apiKey: "AIzaSyBJRNKUb3IuwFEmZ8EK-Lj3aoOtckQ2c3M",
  authDomain: "fir-app-bac46.firebaseapp.com",
  projectId: "fir-app-bac46",
  storageBucket: "fir-app-bac46.appspot.com",
  messagingSenderId: "326420825222",
  appId: "1:326420825222:web:d09f38164c7e199992bd07",
  measurementId: "G-QKRBGTPSN8"
});
const db=firebaseApp.firestore();
export default db;
