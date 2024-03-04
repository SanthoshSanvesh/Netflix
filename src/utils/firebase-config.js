
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuHFWc_YZAgsQO42ygbR06etaTe-I03l4",
  authDomain: "react-netflix-clone-5f500.firebaseapp.com",
  projectId: "react-netflix-clone-5f500",
  storageBucket: "react-netflix-clone-5f500.appspot.com",
  messagingSenderId: "93305806055",
  appId: "1:93305806055:web:620b8518d12b6d3e699642",
  measurementId: "G-GL99ES00SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth =  getAuth(app);