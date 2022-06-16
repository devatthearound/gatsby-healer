import React from 'react'

type Props = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    verifiAuthCode: () => Promise<void>
}

const PhoneNumberAuthForm: React.FC<Props> = ({ value, onChange, verifiAuthCode }) => {
    return (
        <>
            <div>
                <label htmlFor="code">인증번호 입력</label>
                <input type="text" name="code" value={value} onChange={onChange} />
            </div>
            <button onClick={verifiAuthCode}>확인</button>
        </>
    )
}

export default PhoneNumberAuthForm;