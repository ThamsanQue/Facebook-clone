import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIF6teWsKH2QJKdAbMCu6pJUMLkJwjfEA",
  authDomain: "facebook-clone-cd13c.firebaseapp.com",
  projectId: "facebook-clone-cd13c",
  storageBucket: "facebook-clone-cd13c.appspot.com",
  messagingSenderId: "138256371076",
  appId: "1:138256371076:web:7c0462e011d325212221d1",
  measurementId: "G-HG3PJWK38M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
