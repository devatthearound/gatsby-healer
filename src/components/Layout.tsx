import React from "react"
import { useAuth } from "../hooks/SMSProvider"
import { Link } from "gatsby"

type Props = {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return (
            <>
                <div>
                    <Link to="/signin">로그인을 해주세요</Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                {children}
            </div>
        </>
    )

}

export default Layout;