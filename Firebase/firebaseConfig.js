import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCClqjWVFBBCokA8KWlGom17TYMiblBUtk",
  authDomain: "firebrandtest-36c9c.firebaseapp.com",
  projectId: "firebrandtest-36c9c",
  storageBucket: "firebrandtest-36c9c.appspot.com",
  messagingSenderId: "320914218222",
  appId: "1:320914218222:web:805fa517858d7d43b267ff",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
