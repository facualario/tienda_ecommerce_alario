// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPdRrZS95Nseozg1-Stpl_LJUCBt0mfpU",
  authDomain: "coderhouse-ecommerce-rea-ef615.firebaseapp.com",
  projectId: "coderhouse-ecommerce-rea-ef615",
  storageBucket: "coderhouse-ecommerce-rea-ef615.appspot.com",
  messagingSenderId: "786225179772",
  appId: "1:786225179772:web:cc7c303555070be3e0edf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)