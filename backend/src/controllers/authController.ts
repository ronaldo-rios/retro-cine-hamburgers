import bcrypt from 'bcrypt'
import { RequestHandler } from 'express'
import prisma from "../config/database"

export const login: RequestHandler = async (request, response) => {
    const { email, password } = request.body
    if(!email || !password) 
        response.status(400).json({ message: 'Campo obrigatório não enviado'})
    
    const user = await prisma.user.findFirst({
        where: { 
            email: email, password: password 
        }
    })

    if (!user) response.status(404).json({ message: 'Usuário não encontrado'})

    return response.status(200).json(user)
}

export const register: RequestHandler = async (request, response) => {
    const { email, password, username } = request.body
    if (!email || !password || !username) {
        response.status(400).json({ message: 'Campo obrigatório não enviado'})
    }

    const emailExists = await prisma.user.findFirst({
        where: { email: email }
    })

    if (emailExists?.email) {
        response.status(409).json({ message: 'E-mail já está cadastrado' })
    }

    const hashed = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
        data: {
            email, password: hashed, name: username
        }
    })

    return response.status(201).json(newUser)
}

