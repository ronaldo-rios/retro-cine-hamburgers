import prisma from "../config/database"

export const findAllProducts = async () => {
    const products = await prisma.product.findMany()
    return products
}