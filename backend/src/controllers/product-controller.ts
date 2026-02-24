import { RequestHandler } from "express"
import { findAllProducts } from "../services/product"

export const getProducts: RequestHandler = async (request, response) => {
    
    const products = await findAllProducts()
    
    return response.status(200).json({ 
        data: products 
    })
}