// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChDN3XN_TfygZCL9lkVGM__zhXO_W-yy0',
  authDomain: 'react-cursos-e12c4.firebaseapp.com',
  projectId: 'react-cursos-e12c4',
  storageBucket: 'react-cursos-e12c4.appspot.com',
  messagingSenderId: '523969421414',
  appId: '1:523969421414:web:f3707659ee85d448fb8da7',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
