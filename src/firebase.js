import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDmFm6ZQ7bwa-T0l_sHGaCuOn4SdfIMTak",
  authDomain: "lets-chat-fe169.firebaseapp.com",
  projectId: "lets-chat-fe169",
  storageBucket: "lets-chat-fe169.appspot.com",
  messagingSenderId: "710694412844",
  appId: "1:710694412844:web:15d55adda8da394dd1a789",
  measurementId: "G-9JEDK5967R"
}); 

const db = firebaseApp.firestore();

export default db;