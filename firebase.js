import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBK-77ZXOqealIscFr8wz1wVygdQis2ho4",
    authDomain: "jamz-c7aa8.firebaseapp.com",
    databaseURL: "https://jamz-c7aa8.firebaseio.com",
    projectId: "jamz-c7aa8",
    storageBucket: "jamz-c7aa8.appspot.com",
    messagingSenderId: "919199359032",
    appId: "1:919199359032:web:c3270afe6d0ea3dd2a46cd",
    measurementId: "G-RSJCDE5L7T"
}

firebase.initializeApp(firebaseConfig);
export default firebase;