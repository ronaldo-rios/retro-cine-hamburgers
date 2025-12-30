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

    const clearAuth = async () => {
        try {
            await fetch(`${BASE_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            })
        } catch(error) {
            console.log(error)
            return
        }finally {
            setAuth(null)
        }
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, clearAuth }}>
            {children}
        </AuthContext.Provider>
    )
}