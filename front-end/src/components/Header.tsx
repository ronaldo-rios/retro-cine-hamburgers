const Header = () => {
    return (
        <div className="bg-(--primary-color)">
            <div className="text-(--secondary-color) mx-auto w-full md:w-[737px] flex items-center justify-between p-3" >
                <img src="./public/logo.svg" alt="logo" />
                <button className="bg-(--tertiary-color) text-black flex items-center justify-center rounded-sm cursor-pointer">
                    Entrar
                </button>
            </div>
        </div>
    )
}

export default Header