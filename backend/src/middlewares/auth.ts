import type { NextFunction, Request, Response } from 'express';
import { verifyJWT } from "../config/jwt";

export const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    
    const token = request.cookies.user

    if (!token) 
        return response.status(401).json({ message: 'Usuário não autorizado!' })

    try {
        const decoded = verifyJWT(token)
        request.userId = decoded.id
        next()
    } catch {
        return response.status(401).json({ message: 'Token expirado ou inválido' })
    }
}
