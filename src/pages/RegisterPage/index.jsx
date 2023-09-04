import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/Form/RegisterForm"
import Logo from "../../../assets/Logo.svg"
import style from "./style.module.scss"

export const RegisterPage = () => {



    return (
        <div className="container">
            <div className={style.container}>
                <div className={style.flexBox}>
                    <img src={Logo} alt="KenzieHub" />
                    <Link to="/">Voltar</Link>
                </div>

                <div className={style.formContainer}>
                    <h1>Crie sua conta</h1>
                    <span>Rapido e grátis, vamos nessa</span>
                    <RegisterForm />
                </div>
            </div>
        </div>

    )
}