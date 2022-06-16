import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from './FBConfig';

const firebaseAuth = getAuth(firebase);

const AuthService = {
    SignInWithEmailAndPassword: async (email: string, password: string) => {
        try {
            const userCred = await signInWithEmailAndPassword(firebaseAuth, email, password);
            console.log(userCred);
            return {
                user: userCred.user
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err);
                return {
                    error: err.message,
                };
            } else {
                return { error: "error" }
            }
        }
    },
    CreateUserWithEmailAndPassword: async (email: string, password: string) => {
        try {
            const userCred = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            return {
                user: userCred.user
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err);
                return {
                    error: err.message,
                };
            } else {
                return { error: "error" }
            }
        }
    },
    LoginOut: async () => {
        await signOut(firebaseAuth);
    }
};

export default AuthService;