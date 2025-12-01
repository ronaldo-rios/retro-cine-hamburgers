import { useState } from "react"
import { Link, useNavigate } from "react-router"
import Button from "../components/Button"
import Input from "../components/Input"
import { BASE_URL } from "../routes/api"

const Register = () => {
    const [username, setUserame] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const response = await fetch(`${BASE_URL}/auth/register`, { 
            headers: { "Content-Type":"application/json" },
            method: 'POST',
            body: JSON.stringify({ username, email, password })
        })

        try {
            if (response.status === 201) {
                const data = await response.json()
                navigate('/login')
            }
        } catch(error) {
           console.log(error) 
           return
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
                    placeholder="Nome" 
                    type="text" 
                    value={username}
                    onChange={(e) => setUserame(e.target.value)} 
                />
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
                <Input 
                    placeholder="Confirme sua Senha" 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <div className="mt-3 w-full">
                    <Button label="Cadastrar" variant="default" type="submit" />
                    <Link to="/login" className="w-full">
                        <Button label="Já possuo uma conta" variant="outline" /> 
                    </Link> 
                </div>
            </div>        
        </form>
    )
}

export default Register