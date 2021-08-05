import firebase from "firebase/app";

import "firebase/firestore";

// step1
import "firebase/auth";


// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDJ4VRzDPHl18gUB0jKVdSMWC4M60QfQzk",
    authDomain: "reels-e08fe.firebaseapp.com",
    projectId: "reels-e08fe",
    storageBucket: "reels-e08fe.appspot.com",
    messagingSenderId: "1082545881711",
    appId: "1:1082545881711:web:ec9e62697a11a8f9f5c39a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();

// Step2
export const auth = firebase.auth();

// step3 => firebase console; enable google login in auth panel
// step4 =>

let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;