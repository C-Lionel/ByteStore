import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAS-jFqJBXka9izXlymeiWsb934LQ6r5Jo",
  authDomain: "bytestore-db.firebaseapp.com",
  projectId: "bytestore-db",
  storageBucket: "bytestore-db.firebasestorage.app",
  messagingSenderId: "582213051696",
  appId: "1:582213051696:web:cbc6f813568d43c1e794f5"
};

export const app = initializeApp(firebaseConfig);