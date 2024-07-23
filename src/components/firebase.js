// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8qMtgqmD-7atFSovCuCbY289F6Piay-c",
  authDomain: "login-auth-2a482.firebaseapp.com",
  projectId: "login-auth-2a482",
  storageBucket: "login-auth-2a482.appspot.com",
  messagingSenderId: "863947063955",
  appId: "1:863947063955:web:da549a7dba5a47e61b8366"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;