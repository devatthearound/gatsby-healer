import React from "react"
import type { GatsbyBrowser } from "gatsby"
import { SMSAuthProvider } from "./src/hooks/SMSProvider"
import AuthSateChanged from "./src/hooks/AuthStateChanged"

import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
    element,
}) => {
    return (
        <>
            <SMSAuthProvider>
                <AuthSateChanged>
                    {element}
                </AuthSateChanged>
            </SMSAuthProvider>
        </>
    )
}