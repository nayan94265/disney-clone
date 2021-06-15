import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyBOH0Ochry_879mu7UA7bMF0ZHF7M3zd6Q",
    authDomain: "disney-clone-23905.firebaseapp.com",
    projectId: "disney-clone-23905",
    storageBucket: "disney-clone-23905.appspot.com",
    messagingSenderId: "1014371727971",
    appId: "1:1014371727971:web:98edf84758f90bd9801656",
    measurementId: "G-WM8F7NTXD7"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

  