import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4KlzPFiO84s4hvLK8fyOiFTqT-ds9Cho",
    authDomain: "netflix-clone-c889a.firebaseapp.com",
    projectId: "netflix-clone-c889a",
    storageBucket: "netflix-clone-c889a.appspot.com",
    messagingSenderId: "1068121586105",
    appId: "1:1068121586105:web:f01cacca0009a1433c5e68"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };