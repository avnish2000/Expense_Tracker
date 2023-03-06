// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,  GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

const firebaseApp = {
  apiKey: "AIzaSyB-cdwO4YLxJBBH1VnKCuHHOVxt9p5j1VA",
  authDomain: "expense-tracker-56ec3.firebaseapp.com",
  projectId: "expense-tracker-56ec3",
  storageBucket: "expense-tracker-56ec3.appspot.com",
  messagingSenderId: "949375984183",
  appId: "1:949375984183:web:257fe185d8c9dbe6de15b2",
  measurementId: "G-5B8JW4ZY70"
};


const app = initializeApp(firebaseApp);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

const analytics = getAnalytics(app);