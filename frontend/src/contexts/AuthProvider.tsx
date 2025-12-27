import { useEffect, useState, type ReactNode } from "react"
import type { User } from "../@types/user"
import { BASE_URL } from "../routes/api"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [auth, setAuth] = useState<User | null>(null)

    useEffect(() => {
        const fetchUser = async () => { 
            const response = await fetch(`${BASE_URL}/auth/user`, {
                credentials: 'include',
            })

            if (response.status === 200) {
                const data = await response.json()
                setAuth(data.user)
            }
        }
        
        fetchUser()
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}