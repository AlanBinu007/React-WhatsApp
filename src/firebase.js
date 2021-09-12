import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyDZzOMYhLjuSZTbxpnv59DbroQ51PwbG1g",
  authDomain: "alanbinu-whatsapp.firebaseapp.com",
  projectId: "alanbinu-whatsapp",
  storageBucket: "alanbinu-whatsapp.appspot.com",
  messagingSenderId: "341745951598",
  appId: "1:341745951598:web:be9c8a90f37e7f9bf9977f",
  measurementId: "G-LSCGXMSBRC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
