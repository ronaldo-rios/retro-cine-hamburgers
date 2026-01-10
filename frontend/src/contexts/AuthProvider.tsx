import { useEffect, useState, type ReactNode } from "react"
import type { User } from "../@types/user"
import { authUserService, logoutService } from "../services/api/auth-service"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => { 
            try {
                const user = await authUserService()
                setAuth(user.data)
            } catch {
                setAuth((prevAuth) => prevAuth || null)
            } finally {
                setLoading(false)
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
        <AuthContext.Provider value={{ auth, setAuth, clearAuth, loading }}>
            {children}
        </AuthContext.Provider>
    )
}