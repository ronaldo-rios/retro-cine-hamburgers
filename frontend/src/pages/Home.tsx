import { useState } from "react"
import Button from "../components/Button"

const Home = () => {

    const categories = ['Burgers', 'Bebidas', 'Porções']
    const [activeCategory, setActiveCategory] = useState(categories[0])

    return (
        <div className="flex gap-2 justify-center md:justify-start">
            {categories.map((category) => (
                <div className="w-24 h-7 md:w-32 md:h-9 flex justify-center items-center text-sm">
                    <Button 
                        label={category} 
                        variant={activeCategory === category ? 'default' : 'categories'} 
                        onClick={() => setActiveCategory(category)}
                    />
                </div>
            ))}
        </div>
    )
}

export default Home