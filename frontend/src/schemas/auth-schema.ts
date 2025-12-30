import { z } from "zod"

export const loginSchema = z.object({
  email: z.email("Formato e-mail inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
})

export const registerSchema = z
  .object({
    username: z.string().min(3, "Nome muito curto"),
    email: z.email("Formato e-mail inválido"),
    password: z.string().min(6, "Senha muito curta"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
