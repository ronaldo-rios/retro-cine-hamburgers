import { useState } from "react"
import { Link, useNavigate } from "react-router"
import Button from "../components/Button"
import Input from "../components/Input"
import { useAuth } from "../hooks/useAuth"
import { BASE_URL } from '../routes/api'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setAuth } = useAuth()
    const navigate = useNavigate()

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch(`${BASE_URL}/auth/login`, { 
            headers: { "Content-Type":"application/json" },
            method: 'POST',
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        })

        if (response.status === 400)
            console.log("Obrigatorio")

        if (response.status === 404)
            console.log("Não encontrado")

        try {
            if (response.status === 200) {
                const data = await response.json()
                navigate('/')
                setAuth(data)
            }
        } catch(error) {
           throw Error()
        }
        
    }

    return (
        <form 
            className="bg-(--primary-color) flex justify-center h-screen items-center px-4"
            onSubmit={handleOnSubmit} >
            <div className="flex flex-col items-center">
                <Link to="/">
                    <img src="/logo.png" alt="logotipo" width={300} height={300} />
                </Link>
                <Input 
                    placeholder="E-mail" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <div className="mt-3 w-full">
                    <Button label="Login" variant="default" type="submit" />
                    <Link to="/register" className="w-full">
                        <Button label="Ainda não possuo uma conta" variant="outline" />
                    </Link>
                </div>
            </div>        
        </form>
    )
}

export default Login