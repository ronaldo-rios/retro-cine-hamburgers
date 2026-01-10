import type { LoginFormData, RegisterFormData } from "../../schemas/auth"
import { BASE_URL } from "./api"

export const loginService = async (data: LoginFormData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Erro ao realizar login")
  }

  return response.json()
}

export const registerService = async (data: RegisterFormData) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Erro ao realizar cadastro")
    }

    return response.json()
}

export const authUserService = async () => {
  const response = await fetch(`${BASE_URL}/auth/user`, {
    credentials: "include",
    headers: {
      "Cache-Control": "no-cache",
    },
  })

  if (!response.ok) {
    throw new Error("Usuário não autenticado")
  }

  return response.json()
}

export const logoutService = async () => {
    await fetch(`${BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
    })
}