
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APPOINTAPP_APIKEY,
  authDomain: process.env.REACT_APP_APPOINTAPP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_APPOINTAPP_PROJECTID,
  storageBucket: process.env.REACT_APP_APPOINTAPP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_APPOINTAPP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPOINTAPP_APPID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);