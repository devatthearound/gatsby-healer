import React, { useEffect, useState } from "react"
import FBSMSService from '../service/FBSMSService';
import PhoneNumberInputForm from "../container/PhoneNumberInputForm";
import PhoneNumberAuthForm from "../container/PhoneNumberAuthForm";
import { useAuth } from "../hooks/SMSProvider";
import { navigate } from "gatsby"
import AuthMiddleware from "../middleware/auth.middleware";
import NameInputForm from "../container/NameInputForm";

type FormDTO = {
    phoneNumber: string
    code: string
    name: string
}

const SignIn = () => {
    const authMiddleware = new AuthMiddleware();
    const { SignInWithPhoneNumber, ConfirmationResult, LoginOut } = useAuth();
    const { user } = useAuth();
    const [userId, setUserId] = useState<string>('');

    // useEffect(() => {
    //     if (user) {
    //         navigate(`/`)
    //     }
    // })

    const [form, setForm] = useState<FormDTO>({
        phoneNumber: '',
        code: '',
        name: ''
    });

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value });
    }

    const sendAuthCode = async () => {
        const res = await SignInWithPhoneNumber(form.phoneNumber);
    };

    const verifiAuthCode = async () => {
        const res = await ConfirmationResult(form.code);
        setUserId(res);
    };

    const signOut = async () => {
        const res = await LoginOut();
    }

    const hanlderOnSubmit = async () => {
       // const res = await authMiddleware.createUser(userId, form.phoneNumber, form.name);
        //if (res) navigate('/home');
    }

    return (
        // 전화번호 입력
        // 인증코드 전송
        // 에러 처리 1.재전송 2.전화번호 잘못 입력
        // 인증코드 입력
        // 인증코드 검증 -> 다시 입력
        // 회원정보가 없다면 회원가입
        // name 필드 받고 userCollection create 하기
        // home 화면으로 이동
        <>
            <PhoneNumberInputForm value={form.phoneNumber} onChange={handlerOnChange} sendAuthCode={sendAuthCode} />
            <PhoneNumberAuthForm value={form.code} onChange={handlerOnChange} verifiAuthCode={verifiAuthCode} />
            <NameInputForm value={form.name} onChange={handlerOnChange} onSubmit={hanlderOnSubmit} />
            <button onClick={signOut}>로그아웃</button>
        </>
    )
}

export default SignIn