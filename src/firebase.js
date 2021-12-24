// Import firebase modules
import { initializeApp } from 'firebase/app'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD27BaorWNp_7HTAcFpfcQJEU2k6O75HpU",
    authDomain: "library-92910.firebaseapp.com",
    projectId: "library-92910",
    storageBucket: "library-92910.appspot.com",
    messagingSenderId: "778596230620",
    appId: "1:778596230620:web:031ba101402eb1b8185b19"
  };
  
// Initialize Firebase app
const app = initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore()
let users = collection(db, "users")
console.log(users)
let user = doc(users, "Z11Xd55BGBWfx39dLEzKqmDmS483")
console.log(user)
let books = collection(user, "books")
console.log(books)

// Register, and then sign in, user
const createUser = async (auth, email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        const uid = user.uid
        await setDoc(doc(db, 'users', uid), {email: `${email}`})
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}

// Sign in user
const signinUser = async (auth, email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}

export { app, createUser, signinUser }