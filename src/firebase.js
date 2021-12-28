// Import firebase modules
import { initializeApp } from 'firebase/app'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, getDocs, addDoc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';

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

// Query database and return array of books from user
const retrieveBooks = async (userId) => {
    const users = collection(db, "users")
    const user = doc(users, userId)
    const books = collection(user, "books")
    const booksRef = await getDocs(books)
    let booksArr = []
    booksRef.forEach((doc) => {
        console.log(doc)
        const bookObj = doc.data()
        bookObj.id = doc.id
        booksArr = [...booksArr, bookObj]
    })
    return booksArr
}

// Add new book to database & return uid
const addBookToDb = async (userId, book) => {
    const data = {
        author: book.author,
        language: book.language,
        length: book.length,
        read: book.read,
        title: book.title
    }
    const users = collection(db, "users")
    const user = doc(users, userId)
    const books = collection(user, "books")
    const newBookRef = await addDoc(books, data)
    return newBookRef.uid
}

// Delete book from database
const delBookFromDb = async (userId, bookId) => {
    const users = collection(db, "users")
    const user = doc(users, userId)
    const books = collection(user, "books")
    const book = doc(books, bookId)
    await deleteDoc(book)
}

// Change read field in book doc reference
const changeReadDbField = async (userId, bookId, boolean) => {
    const users = collection(db, "users")
    const user = doc(users, userId)
    const books = collection(user, "books")
    const book = doc(books, bookId)
    await updateDoc(book, {read: boolean})
}

// Return read field from book doc reference
const returnReadField = async (userId, bookId) => {
    const usersRef = collection(db, "users")
    const userRef = doc(usersRef, userId)
    const booksRef = collection(userRef, "books")
    const bookRef = doc(booksRef, bookId)
    const book = await getDoc(bookRef)
    const readStatus = book.data().read
    return readStatus
}

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

export { app, retrieveBooks, addBookToDb, delBookFromDb, changeReadDbField, returnReadField, createUser, signinUser }