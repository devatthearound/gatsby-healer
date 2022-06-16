import firebase from '../service/FBConfig';
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useAuth } from './SMSProvider';
import React, { useEffect, useState } from 'react';
import SignIn from '../pages/signin';

interface LayoutProps {
    children: React.ReactNode;
}

const AuthStateChanged = ({ children }: LayoutProps) => {
    const { setUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const firebaseAuth = getAuth(firebase);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if (user) setIsUser(true)
            setUser(user);
            setLoading(true);
        });
    }, []);

    if (!loading) {
        return <div>로딩중</div>
    }

    if (!isUser) {
        return <SignIn />
    }

    return (
        <>
            {children}
        </>
    );
};

export default AuthStateChanged;