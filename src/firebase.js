import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA-Wof8RFtnF0Jo-7V8ikmcDPVrpepCPUg",
  authDomain: "todo-app-2d71e.firebaseapp.com",
  projectId: "todo-app-2d71e",
  storageBucket: "todo-app-2d71e.appspot.com",
  messagingSenderId: "263273179217",
  appId: "1:263273179217:web:7759295bc4edccaf83b070",
  measurementId: "G-C9Y3843JN1"
});

const db = firebaseApp.firestore();

export default db;
