import React, { useRef } from 'react';
import { RecaptchaVerifier, getAuth } from "firebase/auth";
import { useEffect } from 'react';
import firebase from "../service/FBConfig";

type Props = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => Promise<void>
}

const NameInputForm: React.FC<Props> = ({ value, onChange, onSubmit }) => {

    return (
        <>
            <div>
                <label htmlFor="name">이름 입력</label>
                <input type="text" name="name" value={value} onChange={onChange} />
            </div>
            <button id="recaptcha-container" onClick={onSubmit}>완료</button>
        </>
    )
}

export default NameInputForm;