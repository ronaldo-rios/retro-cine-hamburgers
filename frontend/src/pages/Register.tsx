import { useState } from "react"
import { Link } from "react-router"
import Button from "../components/Button"
import Input from "../components/Input"

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

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
                    placeholder="Nome" 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
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
                <Link to="/" className="w-full">
                    <Button label="Cadastrar" variant="default" />
                </Link>
                <Link to="/login" className="w-full">
                    <Button label="Já possuo uma conta" variant="outline" /> 
                </Link> 
            </div>        
        </form>
    )
}

export default Register