import { BASE_URL } from "./api"

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/product`, {
    method: "GET",
    credentials: "include",
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Erro ao carregar produtos")
  }

  return response.json()
}