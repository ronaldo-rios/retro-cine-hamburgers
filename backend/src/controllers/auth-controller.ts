import bcrypt from 'bcrypt'
import { RequestHandler } from 'express'
import { generateJWT, verifyJWT } from '../config/jwt'
import { createUser, findByEmail, findById } from '../services/user'

export const login: RequestHandler = async (request, response) => {
    const { email, password } = request.body
    if(!email || !password) 
        return response.status(400).json({ message: 'Campo obrigatório não enviado'})
    
    const user = await findByEmail(email)

    if (!user) 
        return response.status(404).json({ message: 'Usuário não encontrado com credenciais enviadas.' })

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) 
        response.status(404).json({ message: 'Usuário não encontrado com credenciais enviadas.'})

    const token = generateJWT(user.id)
  
    response.cookie('user', token, { 
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    })

    return response.status(200).json({ data: {
            id: user.id,
            username: user.username,
            email: user.email
        }
    })
}

export const logout: RequestHandler = async (request, response) => {
  const { user } = request.cookies

  if (user) {
    response.clearCookie('user', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/', 
    })
    response.json({ message: 'Usuário deslogado.' })
  }
}

export const register: RequestHandler = async (request, response) => {
    const { email, password, username } = request.body
    if (!email || !password || !username) {
        return response.status(400).json({ message: 'Campo obrigatório não enviado'})
    }

    const emailExists = await findByEmail(email)

    if (emailExists?.email) {
        return response.status(409).json({ message: 'E-mail já está cadastrado' })
    }

    const hashed = await bcrypt.hash(password, 10)
    const newUser = await createUser(email, hashed, username)

    return response.status(201).json({ data: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
    }})
}

export const auth: RequestHandler = async (request, response) => {
  const token = request.cookies.user
  
  if (!token) 
    return response.status(401).json({ message: 'Usuário não autorizado!' })

  try {
    const decoded = verifyJWT(token)
    const user = await findById(decoded.id)
    
    return response.status(200).json({
      user: {
        id: user?.id,
        email: user?.email,
        username: user?.username
      },
    })
  } catch {
    return response.status(401).json({ message: 'Token expirado ou inválido!' })
  }
}

