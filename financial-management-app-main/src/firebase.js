import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  
 
  authDomain: "saferoute-407318.firebaseapp.com",
  databaseURL: "https://saferoute-407318-default-rtdb.firebaseio.com",
  projectId: "saferoute-407318",
  storageBucket: "saferoute-407318.appspot.com",
  messagingSenderId: "167829110927",
  appId: "1:167829110927:web:f2d860dbb885bf6d0bb0fa",
  measurementId: "G-TSZ3X00PWY"
});

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
