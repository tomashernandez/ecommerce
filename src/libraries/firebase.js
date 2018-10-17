import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const configFirebase = {
  apiKey: "AIzaSyARqsYu6RFDR0bBg1dqhOy2RLorlzlOzQM",
  authDomain: "ecommerce-b580f.firebaseapp.com",
  databaseURL: "https://ecommerce-b580f.firebaseio.com",
  projectId: "ecommerce-b580f",
  storageBucket: "ecommerce-b580f.appspot.com",
  messagingSenderId: "423443025637"
};

firebase.initializeApp(configFirebase);
