import { BASE_URL } from "../routes/api"
import type { LoginFormData } from "../schemas/auth-schema"

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