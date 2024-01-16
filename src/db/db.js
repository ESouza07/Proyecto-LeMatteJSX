import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhpW05--GvSO_cmuomsMYJgw1anHSNQ1s",
  authDomain: "lematte-40e10.firebaseapp.com",
  projectId: "lematte-40e10",
  storageBucket: "lematte-40e10.appspot.com",
  messagingSenderId: "301877775845",
  appId: "1:301877775845:web:b3a464e02ced6abd52f30c"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db