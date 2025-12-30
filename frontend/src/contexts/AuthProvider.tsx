import { useEffect, useState, type ReactNode } from "react"
import type { User } from "../@types/user"
import { authUserService, logoutService } from "../services/auth-service"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [auth, setAuth] = useState<User | null>(null)

    useEffect(() => {
        const fetchUser = async () => { 
            try {
                const data = await authUserService()
                setAuth(data.user)
            } catch {
                setAuth(null)
            }
        }   
        fetchUser()
    }, [])

    const clearAuth = async () => {
        try {
            await logoutService()
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