import { Link } from "react-router"
import { useAuth } from "../hooks/useAuth"
import Button from "./Button"

const Header = () => {
    const { auth } = useAuth()

    return (
        <div className="bg-(--primary-color)">
            <div className="text-(--secondary-color) mx-auto w-full container flex items-center justify-between p-3" >
                <img src="/logo.png" alt="logo" width={100} height={100} />
              
                <Link to="/login" className="w-25">
                    {auth ? (
                        <p className="text-white">Olá, {auth?.username}!</p>
                    ) : (
                        <Button label="Entrar" variant="default" />
                    )}
                </Link>
            </div>
        </div>
    )
}

export default Header