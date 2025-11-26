import { Link } from "react-router"
import Button from "./Button"

const Header = () => {
    return (
        <div className="bg-(--primary-color)">
            <div className="text-(--secondary-color) mx-auto w-full container flex items-center justify-between p-3" >
                <img src="/logo.png" alt="logo" width={100} height={100} />
                <Link to="/login" className="w-25">
                    <Button label="Entrar" variant="default" />
                </Link>
            </div>
        </div>
    )
}

export default Header