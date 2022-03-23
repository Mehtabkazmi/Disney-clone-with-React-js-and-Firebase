import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBmK2ZdeyEmhapAipZK_GXceA_SQzI6vc",
  authDomain: "disney-clone-a7bf8.firebaseapp.com",
  projectId: "disney-clone-a7bf8",
  storageBucket: "disney-clone-a7bf8.appspot.com",
  messagingSenderId: "207724155211",
  appId: "1:207724155211:web:2bd4e33a80fec7c2a218ce",
  measurementId: "G-2Z6LLR28BN"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth,provider };
export default db;
