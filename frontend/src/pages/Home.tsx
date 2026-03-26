import { useEffect, useState } from "react";
import { CategoryLabels, getAllCategories, ProductCategory } from "../@types/category";
import type { ProductType } from "../@types/product";
import Button from "../components/Button";
import Product from "../components/Product";
import { toastError, toastSuccess } from "../lib/toast";
import { deleteProduct, getAllProducts } from "../services/api/product-service";
import { getErrorMessage } from "../utils/getErrorMessage";

const Home = () => {

    const [activeCategory, setActiveCategory] = useState<ProductCategory>(ProductCategory.BURGERS);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                setProducts(response.data || []);
            } catch (error) {
                console.error("Erro ao carregar produtos:", error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(
        product => product.category === activeCategory
    );

    const handleDeleteProduct = async (productId: string) => {
        try {
            const productName = products.find((p) => p.id === productId)?.name
            const confirmed = window.confirm(`Tem certeza que deseja excluir ${productName}?`)
            if (!confirmed) return

            await deleteProduct(productId);
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== productId)
            );
            toastSuccess("Produto excluído com sucesso!");
        } catch (error) {
            toastError(getErrorMessage(error));
        }
    };

    return (
        <>
            <div className="flex gap-2 justify-center md:justify-start">
                {getAllCategories().map((category) => (
                    <div 
                        key={category} 
                        className="w-24 h-7 md:w-32 md:h-9 flex justify-center items-center text-sm"
                    >
                        <Button 
                            label={CategoryLabels[category]} 
                            variant={activeCategory === category ? 'default' : 'categories'} 
                            onClick={() => setActiveCategory(category)}
                        />
                    </div>
                ))}
            </div>

            <div>
                {loading ? (
                    <div className="text-center py-10 text-gray-400">
                        Carregando produtos...
                    </div>
                ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            onDelete={handleDeleteProduct}
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