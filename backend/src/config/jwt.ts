import jwt from 'jsonwebtoken'

type JwtPayload = {
  id: string
}

const SECRET = process.env.JWT_SECRET as string

export const generateJWT = (id: string) => {
  return jwt.sign({ id }, SECRET, {
    expiresIn: '24h',
  })
}

export const verifyJWT = (token: string): JwtPayload => {
  const decoded = jwt.verify(token, SECRET)
  
  if (typeof decoded !== 'object' || !decoded || !('id' in decoded)) {
    throw new Error('JWT inválido')
  }

  return decoded as JwtPayload
}