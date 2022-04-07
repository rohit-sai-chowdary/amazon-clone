import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCmHDUvaE9LykCFBV_nDQKjQVwWuvrmnUM',
  authDomain: 'clone-61c47.firebaseapp.com',
  projectId: 'clone-61c47',
  storageBucket: 'clone-61c47.appspot.com',
  messagingSenderId: '720230242889',
  appId: '1:720230242889:web:6bf9638b12a2ac8c997d98',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
