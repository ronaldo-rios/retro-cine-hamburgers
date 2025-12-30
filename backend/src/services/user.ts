import prisma from "../config/database"

const normalizeEmail = (email: string) => email.trim().toLowerCase()
const normalizeUsername = (username: string) => username.trim().toLowerCase()

export const findByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({
        where: { email: normalizeEmail(email) }
    })

    return user
}

export const findById = async (id: string) => {
    const user = await prisma.user.findFirst({
        where: { id: id }
    })

    return user
}

export const createUser = async (email: string, hashed: string, username: string) => {
  const newUser = await prisma.user.create({
    data: {
        email: normalizeEmail(email), 
        username: normalizeUsername(username),
        password: hashed, 
    }
  })

  return newUser
}