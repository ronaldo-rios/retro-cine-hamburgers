import { createContext, type Dispatch } from "react"
import type { User } from "../@types/user"

type AuthContextType = {
    auth: User | null
    setAuth: Dispatch<React.SetStateAction<User | null>>
}

export const AuthContext = createContext<AuthContextType | null>(null)




