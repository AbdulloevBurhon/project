import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/// chat
import { getFirestore } from "firebase/firestore";

////////
const fireBaseConfig = {
  apiKey: "AIzaSyDaOs0bJ_h41qthtYdejWpkrWtyNdbVhNI",
  authDomain: "baha-app-ee9d7.firebaseapp.com",
  projectId: "baha-app-ee9d7",
  storageBucket: "baha-app-ee9d7.firebasestorage.app",
  messagingSenderId: "207660958208",
  appId: "1:207660958208:web:6e4fbf34643785bdbfcee5",
};
const app = initializeApp(fireBaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
