import { z } from "zod"

export const loginSchema = z.object({
  email: z.email("Formato e-mail inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
})

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(2, "Nome muito curto")
      .max(20, "Nome deve ter no máximo 20 caracteres"),
    email: z.email("Formato e-mail inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
