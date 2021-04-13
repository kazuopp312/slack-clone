import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBgmh3EQZ5JYTxK9VituTDdVvODf9zCGCY",
  authDomain: "slack-clone-47fcc.firebaseapp.com",
  projectId: "slack-clone-47fcc",
  storageBucket: "slack-clone-47fcc.appspot.com",
  messagingSenderId: "666892784682",
  appId: "1:666892784682:web:1ca0a5a4f24499f9a39f53",
  measurementId: "G-FQYJDG4RT3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };