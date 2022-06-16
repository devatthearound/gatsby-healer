import React, { createContext, useContext, useState } from 'react';
import SMSService from '../service/FBSMSService';
import { User, ApplicationVerifier, ConfirmationResult, RecaptchaVerifier } from 'firebase/auth';

interface Value {
    user: User | undefined,
    setUser: any,
    error: string,
    SignInWithPhoneNumber: (phoneNumber: string) => Promise<any>,
    ConfirmationResult: (code: string) => Promise<any>,
    LoginOut: () => Promise<any>,
}

const defaultValue: Value = {
    user: undefined,
    setUser: undefined,
    error: "",
    SignInWithPhoneNumber: (phoneNumber: string) => {
        return Promise.resolve('signInWithPhoneNumber');
    },
    ConfirmationResult: (code: string) => {
        return Promise.resolve('confirmationResult');
    },
    LoginOut: () => { return Promise.resolve('LoginOut') }
}

export const smsAuthContext = createContext<Value>(defaultValue);

export const useAuth: any = () => {
    return useContext(smsAuthContext);
}

export const SMSAuthProvider = (props: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | undefined>();
    const [error, setError] = useState('');

    const SignInWithPhoneNumber = async (phoneNumber: string) => {
        try {
            const res = await SMSService.SignInWithPhoneNumber("+82" + phoneNumber);
            console.log(res);
            return res;
        } catch (e: unknown) {
            if (e instanceof Error) {
                alert(e.message);
            } else {
                alert("알 수 없는 오류입니다");
            }
        }
    }

    const ConfirmationResult = async (verificode: string) => {
        try {
            const res = await SMSService.ConfirmationResult(verificode);
            setUser(res);

            return res.uid;
        } catch (e: unknown) {
            if (e instanceof Error) {
                alert(e.message);
            } else {
                alert("알 수 없는 오류입니다");
            }
        }
    }

    const LoginOut = async () => {
        try {
            await SMSService.LoginOut();
            setUser(undefined);
        } catch (e: unknown) {
            if (e instanceof Error) {
                alert(e.message);
            } else {
                alert("알 수 없는 오류입니다");
            }
        }
    }

    const value = { user, setUser, error, SignInWithPhoneNumber, ConfirmationResult, LoginOut };

    return <smsAuthContext.Provider value={value} {...props} />
};

export default { SMSAuthProvider, useAuth, smsAuthContext };