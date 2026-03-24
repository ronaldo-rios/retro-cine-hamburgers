import { ShoppingCart } from "lucide-react";
import type { ProductType } from "../@types/product";
import { formatPrice } from "../utils/formatters";

const Product = ({ name, description, price, image }: ProductType) => {
    return (
        <>
            <div className="my-10 bg-gray-700 flex rounded-md">
                <div className="shrink-0 w-32 md:w-48">
                    <img 
                        src={`./public/products/${image}`} 
                        alt={name} 
                        className="w-full h-full object-cover rounded-l-md"
                    />
                </div>
                <div className="p-3 flex-1">
                    <h3 className="text-(--tertiary-color)">{name}</h3>
                    <p className="text-xs md:text-lg">
                        {description}
                    </p>
                    <div className="flex items-center gap-2 justify-start py-2">
                        <span className="text-(--tertiary-color)">
                            {formatPrice(price)}
                        </span>
                        <ShoppingCart 
                            size={18} 
                            className="bg-(--tertiary-color) text-black rounded-md w-17 h-5 cursor-pointer"
                        />
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Product