import prisma from "../config/database"

export const findByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({
        where: { email: email }
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
        email, password: hashed, username
    }
  })

  return newUser
}