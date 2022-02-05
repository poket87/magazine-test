import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7XsAKr9eVVkbWVIKZmjzOO03KlBMkhnU",
  authDomain: "image-community-12c80.firebaseapp.com",
  projectId: "image-community-12c80",
  storageBucket: "image-community-12c80.appspot.com",
  messagingSenderId: "402731633230",
  appId: "1:402731633230:web:e2d6f0c4296502e624511f",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
