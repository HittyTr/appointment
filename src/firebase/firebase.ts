
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDrPyvkgmSSZDHWSzHMMP6krtOCn0plWBw",
  authDomain: "appointment-dev-f066f.firebaseapp.com",
  projectId: "appointment-dev-f066f",
  storageBucket: "appointment-dev-f066f.appspot.com",
  messagingSenderId: "489213295265",
  appId: "1:489213295265:web:0455bb2f012c9b19e14ee0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);