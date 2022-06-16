import React, { useEffect, useState } from "react"
import PhoneNumberInputForm from "../container/PhoneNumberInputForm";
import PhoneNumberAuthForm from "../container/PhoneNumberAuthForm";
import { useAuth } from "../hooks/SMSProvider";
import { navigate } from "gatsby"
import AuthMiddleware from "../middleware/auth.middleware";
import NameInputForm from "../container/NameInputForm";
import ImageUpload from "../container/ImageUpload";
import CreateUserDTO from "../dto/user-create.body";

type FormDTO = {
    phoneNumber: string
    code: string
    name: string
    profile: File
}

const SignIn = () => {
    const authMiddleware = new AuthMiddleware();
    const { SignInWithPhoneNumber, ConfirmationResult, LoginOut } = useAuth();
    const { user } = useAuth();
    const [code, setCode] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    // useEffect(() => {
    //     if (user) {
    //         navigate(`/`)
    //     }
    // })

    const [form, setForm] = useState<CreateUserDTO>({
        phoneNumber: '',
        name: '',
        profile: {} as File
    });

    useEffect(() => {
        console.log(form);
    }, [form])

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target
        if (files) {
            setForm({ ...form, [name]: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }

    }

    const sendAuthCode = async () => {
        const res = await SignInWithPhoneNumber(form.phoneNumber);
    };

    const verifiAuthCode = async () => {
        const res = await ConfirmationResult(code);
        setUserId(res);
    };

    const signOut = async () => {
        const res = await LoginOut();
    }

    const hanlderOnSubmit = async () => {
        const res = await authMiddleware.createUser(userId, form);
        if (res) navigate('/home');
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
            <PhoneNumberAuthForm value={code} onChange={(e) => setCode(e.target.value)} verifiAuthCode={verifiAuthCode} />
            <NameInputForm value={form.name} onChange={handlerOnChange} onSubmit={hanlderOnSubmit} />
            <ImageUpload onChange={handlerOnChange} style={{ width: "100%" }} />
            <button onClick={signOut}>로그아웃</button>
        </>
    )
}

export default SignIn