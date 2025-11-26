import { useState } from "react"
import Input from "./components/Input"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
    }

    return (
        <form 
            className="bg-(--primary-color) flex justify-center h-screen items-center px-4"
            onSubmit={handleOnSubmit} >
            <div className="flex flex-col items-center">
                <img src="./public/logo.svg" alt="logotipo" />
                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button 
                    className="bg-red-800 w-full rounded-md py-2 text-white font-bold cursor-pointer"
                    type="submit"
                >Login</button>  
            </div>        
        </form>
    )
}

export default Login