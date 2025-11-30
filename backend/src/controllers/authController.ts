import { RequestHandler } from 'express'
import prisma from "../config/database"

export const login: RequestHandler = async (request, response) => {
    const { email, password } = request.body
    const user = await prisma.user.findFirst({
        where: { 
            email: email, password: password 
        }
    })
    return response.status(200).json(user)
}

