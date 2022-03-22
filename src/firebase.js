import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo_AL67bvA6jZ9-UHII9W24dUy9tIK1K0",
  authDomain: "disney-clone-4b66e.firebaseapp.com",
  projectId: "disney-clone-4b66e",
  storageBucket: "disney-clone-4b66e.appspot.com",
  messagingSenderId: "392997305411",
  appId: "1:392997305411:web:e36991b05e3d2478d3a8f6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth,provider };
export default db;
