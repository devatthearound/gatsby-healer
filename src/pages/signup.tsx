import React, { useState } from "react"
import FBSMSService from '../service/FBSMSService';
import PhoneNumberInputForm from "../container/PhoneNumberInputForm";
import PhoneNumberAuthForm from "../container/PhoneNumberAuthForm";

type FormDTO = {
    phoneNumber: string
    code: string
}

const SignUp = () => {
    const smsService = FBSMSService;
    const [form, setForm] = useState<FormDTO>({
        phoneNumber: '',
        code: ''
    });

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value });
    }

    const sendAuthCode = async () => {
        const result = await smsService.SignInWithPhoneNumber(form.phoneNumber);
        console.log(result);
    };

    const verifiAuthCode = async () => {
        const result = await smsService.ConfirmationResult(form.code);
        console.log(result);
    };

    const hanlderOnSubmit = () => {

    }


    return (
        <>
            <PhoneNumberInputForm value={form.phoneNumber} onChange={handlerOnChange} sendAuthCode={sendAuthCode}/>
            <PhoneNumberAuthForm value={form.code} onChange={handlerOnChange} verifiAuthCode={verifiAuthCode}/>
        </>
    )
}

export default SignUp