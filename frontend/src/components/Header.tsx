import { ListPlus, LogOut, PackageSearch, ScrollText, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Button from "./Button";


const Header = () => {
    const { auth, clearAuth } = useAuth()
    const location = useLocation()

    const getNavItemClass = (path: string) => {
        const baseStyle = `p-2 rounded-md`

        return location.pathname === path 
            ? `${baseStyle} bg-red-600 text-white` : `${baseStyle} bg-(--tertiary-color)`
    }

    return (
        <div className="bg-(--primary-color)">
            <div className="text-(--secondary-color) mx-auto w-full container flex items-center justify-between p-3" >
                <Link to="/">
                    <img src="/logo.png" alt="logo" width={100} height={100} />
                </Link>
              
                    {auth ? (
                        <div className="flex text-white items-center gap-10">
                            
                            {auth.admin && (
                                <div className="flex gap-2 text-black">
                                    <Link to="/">
                                        <div className={getNavItemClass('/')}>
                                            <PackageSearch />
                                        </div>
                                    </Link>
                                    <Link to="/orders">
                                        <div className={getNavItemClass('/orders')}>
                                            <ScrollText />
                                        </div>
                                    </Link>
                                    <div className={`p-2 rounded-md bg-(--tertiary-color)`}>
                                        <ListPlus />
                                    </div>
                                </div>
                            )}
                            
                            <div className='relative'>
                                <ShoppingCart />
                                <p className='flex absolute -top-2 -right-2 rounded-full bg-red-600 w-4 h-4 justify-center items-center'></p>
                            </div>
                            <div className="flex gap-3">
                                <p>Olá, {auth.username}!</p> 
                                <LogOut onClick={clearAuth} />
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="w-25">
                            <Button label="Entrar" variant="default" />
                        </Link>
                    )}
            </div>
        </div>
    )
}

export default Header