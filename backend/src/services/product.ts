import prisma from "../config/database"

export const findAllProducts = async () => {
    const products = await prisma.product.findMany()
    return products
}

export const findProductById = async (id: string) => {
    const product = await prisma.product.findUnique({
        where: { id }
    })
    return product
}

export const deleteProductById = async (id: string) => {
    const deletedProduct = await prisma.product.delete({
        where: { id }
    })
    return deletedProduct
}