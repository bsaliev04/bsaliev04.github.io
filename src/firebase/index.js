import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCw_U2YARC5DjqxrQtg1gm28lwGR_0K9YE",
  authDomain: "react-chat-app-e529e.firebaseapp.com",
  databaseURL:
    "https://react-chat-app-e529e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-chat-app-e529e",
  storageBucket: "react-chat-app-e529e.appspot.com",
  messagingSenderId: "62797120294",
  appId: "1:62797120294:web:eccf4d51ea21f1445977e7",
  measurementId: "G-2G1K8YZ64H",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
