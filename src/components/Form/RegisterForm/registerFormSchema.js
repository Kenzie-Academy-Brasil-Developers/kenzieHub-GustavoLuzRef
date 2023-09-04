import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z.string().nonempty("O e-mail e obrigatório").email("Forneça um e-mail válido"),
    password: z
        .string()
        .nonempty("Senha é obrigatria")
        .min(8, "É necessário pelo menos oito caracteres")
        .regex(/(?=.*?[A-Z])/, "É necessario pelo menos uma letra Maiuscula")
        .regex(/(?=.*?[a-z])/, "É necessario pelo menos uma letra Minuscula")
        .regex(/(?=.*?[0-9])/, "É necessario pelo menos uma letra um número")
        .regex(/(?=.*?[#?!@$ %^&*-])/, "É necessário pelo menos um caractere especial"),
    confirm_password: z.string().nonempty("É obrigatório confirmar a senha"),
    bio: z.string().nonempty("Bio é obrigatória"),
    contact: z.string().nonempty("O numero de contato é obrigatório"),
    course_module: z.string().nonempty("O módulo obrigatório"),
})
.refine((registerFormSchema) => registerFormSchema.password === registerFormSchema.confirm_password, {
    message: "As senhas não são iguais",
    path: ["confirm_password"],
  });