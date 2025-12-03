import { useEffect, useState, type ReactNode } from "react"
import type { User } from "../@types/user"
import { AuthContext } from "./AuthContext"

const STORAGE_KEY = 'authContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [auth, setAuth] = useState<User | null>(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : null
    })

    useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(auth)), [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}