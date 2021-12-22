// Create user with email / password function
import { createUserWithEmailAndPassword } from 'firebase/auth';

const createUser = async (auth, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}

export { createUser }