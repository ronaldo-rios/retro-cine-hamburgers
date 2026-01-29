import { useState } from "react";
import { CategoryLabels, getAllCategories, ProductCategory } from "../@types/category";
import Button from "../components/Button";
import Product from "../components/Product";
import productsData from "./../../public/products/products.json";

const Home = () => {

    const [activeCategory, setActiveCategory] = useState<ProductCategory>(ProductCategory.BURGERS);

    const filteredProducts = productsData.products.filter(
        product => product.category === activeCategory
    );

    return (
        <>
            <div className="flex gap-2 justify-center md:justify-start">
                {getAllCategories().map((category) => (
                    <div className="w-24 h-7 md:w-32 md:h-9 flex justify-center items-center text-sm">
                        <Button 
                            label={CategoryLabels[category]} 
                            variant={activeCategory === category ? 'default' : 'categories'} 
                            onClick={() => setActiveCategory(category)}
                        />
                    </div>
                ))}
            </div>

            <div>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                        />
                    ))
                ) : (
                    <div className="text-center py-10 text-gray-400">
                        Nenhum produto encontrado nesta categoria.
                    </div>
                )}
            </div>
        </>
    )
}

export default Home