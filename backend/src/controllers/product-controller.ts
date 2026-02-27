import { RequestHandler } from "express"
import { findAllProducts } from "../services/product"

export const getProducts: RequestHandler = async (request, response) => {

    try {
        const products = await findAllProducts()

        if (products.length === 0)
            return response.status(404).json({ message: 'Nenhum produto encontrado!' })

        return response.status(200).json({ 
            data: products 
        })
    } catch {
        response.status(500).json({ message: 'Houve um erro no servidor' })
        return
    }
    
}