import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwWockk_QmT96Dthmv7f3xvqumL7HmRWg",
  authDomain: "twitter-clone-31573.firebaseapp.com",
  projectId: "twitter-clone-31573",
  storageBucket: "twitter-clone-31573.appspot.com",
  messagingSenderId: "91538054476",
  appId: "1:91538054476:web:eba24ba261c2c85dd443e9",
  measurementId: "G-3R6K7PPX7B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;