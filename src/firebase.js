// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*import  firebase from "firebase";
import initializeApp from 'firebase/app';
import 'firebase/app'   purana trika hai 
import 'firebase/installations'*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4ByV9RCH4u6LKOdWe63a3QrpOdkY1DHg",
    authDomain: "slack-261aa.firebaseapp.com",
    projectId: "slack-261aa",
    storageBucket: "slack-261aa.appspot.com",
    messagingSenderId: "600719595318",
    appId: "1:600719595318:web:a11ddcad699e61b27e8597",
    measurementId: "G-R25CEP4TTM"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;