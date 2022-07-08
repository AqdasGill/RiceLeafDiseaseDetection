// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfuJEwKNmFZvekeaG9yO4MnmaziyuA8IE",
  authDomain: "ricedetection-auth.firebaseapp.com",
  projectId: "ricedetection-auth",
  storageBucket: "ricedetection-auth.appspot.com",
  messagingSenderId: "1069873146888",
  appId: "1:1069873146888:web:ce5d86e02da3c498c6b5bd"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth()

export {auth};