import { ShoppingCart, Trash2 } from "lucide-react";
import type { ProductType } from "../@types/product";
import { useAuth } from "../hooks/useAuth";
import { formatPrice } from "../utils/formatters";

interface ProductProps extends ProductType {
    onDelete?: (id: string) => void;
}

const Product = ({ id, name, description, price, image, onDelete }: ProductProps) => {
    const { auth } = useAuth();

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
                        {auth?.admin && (
                            <button
                                type="button"
                                onClick={() => onDelete?.(id)}
                                aria-label={`Excluir produto ${name}`}
                                className="bg-red-500 text-white rounded-md w-17 h-5 cursor-pointer flex items-center justify-center hover:bg-red-600 transition-colors"
                            >
                                <Trash2 size={14} />
                            </button>
                        )}
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Product