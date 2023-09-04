import { useForm } from "react-hook-form"
import { Input } from "../../input"
import { Select } from "../../Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerFormSchema"
import { useState } from "react"
import { api } from "../../../services/service"
import style from "./style.module.scss"


export const RegisterForm = () => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const sendRegistration = async (formData) => {
        try {
            setLoading(true)
            await api.post("/users", formData)
            reset()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const submit = (formData) => {
        sendRegistration(formData)

    }

    return (
        <form onSubmit={handleSubmit(submit)} >
            <Input type="text" label="Nome" placeholder="Digite aqui o seu nome" {...register("name")} error={errors.name} disabled={loading} />
            <Input type="email" label="E-mail" placeholder="Digite aqui o seu email" {...register("email")} error={errors.email} disabled={loading} />
            <Input type="password" label="Senha" placeholder="Digite aqui a sua senha" {...register("password")} error={errors.password} disabled={loading} />
            <Input type="password" label="Confirmar Senha" placeholder="Digite novamente a sua senha" {...register("confirm_password")} error={errors.confirm_password} disabled={loading} />
            <Input type="text" label="Bio" placeholder="Fale sobre você" {...register("bio")} error={errors.bio} disabled={loading} />
            <Input type="text" label="Contato" placeholder="Opção de contato" {...register("contact")} error={errors.contact} disabled={loading} />
            <Select label="Selecionar Módulo " {...register("course_module")} error={errors.course_module} disabled={loading}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </Select>
            <button className={style.btn} type="submit" disabled={loading}>
                {loading ? "Cadastrando" : "Cadastrar"}
            </button>
        </form>

    )
}