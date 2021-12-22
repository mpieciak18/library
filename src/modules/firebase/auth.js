// Create user with email / password function
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

// Register, and then sign in, user
const createUser = async (auth, email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}

const signinUser = async (auth, email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        console.log(user)
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}

export { createUser, signinUser }