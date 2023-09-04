import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../input"
import { api } from "../../../services/service"
import style from "./style.module.scss"
import { loginFormSchema } from "./loginFormSchema"
import { useContext, useState } from "react"
import { UserContext } from "../../../providers/UserContext"


export const LoginForm = () => {

    const {setUser} = useContext(UserContext)

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)


    const { register, handleSubmit, formState: { errors }, reset} = useForm({resolver: zodResolver(loginFormSchema)})

    const userLogin = async (formData) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", formData)
            setUser(data.user)
            localStorage.setItem("@Token", data.token)
            reset()
            navigate("/dashBoard")

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const submit = (formData) => {
        userLogin(formData)

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input type="email" label="E-mail" placeholder="Digite aqui o seu email" {...register("email")} error={errors.email} disabled={loading} />
            <Input type="password" label="Senha" placeholder="Digite aqui a sua senha" {...register("password")} error={errors.password} disabled={loading} />
            <div className={style.flexBox}>
                <button className={style.btnPink} >Entrar</button>
                <span>Ainda não possui uma conta?</span>
                <Link className={style.btnGrey} to="/register">Cadastre-se</Link>
            </div>
        </form>
    )
}