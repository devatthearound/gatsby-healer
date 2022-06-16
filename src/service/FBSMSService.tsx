import { getAuth, signOut, signInWithPhoneNumber, ConfirmationResult, RecaptchaVerifier, ApplicationVerifier, User } from 'firebase/auth';
import exceptionDTO from '../dto/exception.dto';
import firebase from './FBConfig';
import FBStoreService from './FBStoreService';

const firebaseAuth = getAuth(firebase);
firebaseAuth.languageCode = 'ko';

const SMSService = {
    SignInWithPhoneNumber: async (phoneNumber: string): Promise<string> => {
        try {
            const confirmationResult = await signInWithPhoneNumber(firebaseAuth, phoneNumber, window.recaptchaVerifier)
            window.confirmationResult = confirmationResult;
            return "success"
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    },
    ConfirmationResult: async (code: string): Promise<User> => {
        try {
            const userCred = await window.confirmationResult.confirm(code);
            return userCred.user
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    },
    LoginOut: async (): Promise<string> => {
        try {
            await signOut(firebaseAuth);
            
            return "success"
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    }
};

export default SMSService;