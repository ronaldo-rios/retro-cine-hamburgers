import { useState } from "react"
import { Link } from "react-router"
import Button from "../components/Button"
import Input from "../components/Input"

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
                <Link to="/" className="w-full">
                    <Button label="Login" variant="default" />
                </Link>
                <Link to="/register" className="w-full">
                    <Button label="Ainda não possuo uma conta" variant="outline" />
                </Link>
            </div>        
        </form>
    )
}

export default Login