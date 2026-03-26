import { RequestHandler } from "express"
import { deleteProductById, findAllProducts, findProductById } from "../services/product"
import { findById } from "../services/user"

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

export const deleteProduct: RequestHandler = async (request, response) => {
    try {
        if (!request.userId) {
            return response.status(401).json({ message: 'Usuário não autorizado!' })
        }

        const user = await findById(request.userId)
        if (!user?.admin) {
            return response.status(403).json({ message: 'Apenas administradores podem excluir produtos.' })
        }

        const productId = request.params.id
        if (!productId) {
            return response.status(400).json({ message: 'ID do produto não informado.' })
        }

        const product = await findProductById(productId)
        if (!product) return response.status(404).json({ message: 'Produto não encontrado.' })
        await deleteProductById(productId)

        return response.status(200).json({ message: 'Produto excluído com sucesso.' })
    } catch {
        return response.status(500).json({ message: 'Houve um erro no servidor' })
    }
}