import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGrXPGfiJISS6lgSoLQBf8rLld3Hl1xsk",
  authDomain: "cowculate-unifesp.firebaseapp.com",
  projectId: "cowculate-unifesp",
  storageBucket: "cowculate-unifesp.appspot.com",
  messagingSenderId: "980475804914",
  appId: "1:980475804914:web:910831e26a377aef3d646b",
  measurementId: "G-1LTW48W7GC"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();

export {storage, db};