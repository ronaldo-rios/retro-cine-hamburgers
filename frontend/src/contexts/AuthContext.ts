import { createContext, type Dispatch } from "react"
import type { User } from "../@types/user"

interface AuthContextInterface {
    auth: User | null
    setAuth: Dispatch<React.SetStateAction<User | null>>,
    loading: boolean,
    clearAuth: () => Promise<void>
}

export const AuthContext = createContext<AuthContextInterface | null>(null)




