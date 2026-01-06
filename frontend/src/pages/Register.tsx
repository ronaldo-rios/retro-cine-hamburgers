import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router"
import Button from "../components/Button"
import Input from "../components/Input"
import { toastError, toastSuccess } from "../lib/toast"
import { registerSchema, type RegisterFormData } from "../schemas/auth"
import { registerService } from "../services/api/auth-service"
import { getErrorMessage } from "../utils/getErrorMessage"

const Register = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "onBlur",
    })

    const onSubmit = async (data: RegisterFormData) => {
        try {
            await registerService(data)
            toastSuccess("Cadastro realizado com sucesso!")
            navigate("/login")
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
                    placeholder="Nome" 
                    type="text" 
                    {...register("username")}
                    error={errors.username?.message}   
                />
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
                <Input 
                    placeholder="Confirme sua Senha" 
                    type="password" 
                    {...register("confirmPassword")}
                    error={errors.confirmPassword?.message} 
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