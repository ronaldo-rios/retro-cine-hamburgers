import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router"
import Button from "../components/Button"
import Input from "../components/Input"
import { useAuth } from "../hooks/useAuth"
import { toastError, toastSuccess } from "../lib/toast"
import { loginSchema, type LoginFormData } from "../schemas/auth"
import { loginService } from "../services/api/auth-service"
import { getErrorMessage } from "../utils/getErrorMessage"

const Login = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur'
    })

    const onSubmit = async (data: LoginFormData) => {
        try {
            const result = await loginService(data)
            setAuth(result.data)
            toastSuccess("Login realizado com sucesso!")
            navigate("/")
        } catch (error) {
            toastError(getErrorMessage(error))
        }
    }

    return (
        <form 
            className="bg-(--primary-color) flex justify-center h-screen items-center px-4"
            onSubmit={handleSubmit(onSubmit)} >
            <div className="flex flex-col items-center">
                <Link to="/">
                    <img src="/logo.png" alt="logotipo" width={300} height={300} />
                </Link>
                <Input 
                    placeholder="E-mail" 
                    type="email" 
                    {...register("email")}
                    error={errors.email?.message}
                />
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    {...register("password")}
                    error={errors.password?.message}
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