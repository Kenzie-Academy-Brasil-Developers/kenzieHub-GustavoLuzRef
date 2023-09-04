import Logo from "../../../assets/Logo.svg"
import { LoginForm } from "../../components/Form/LoginForm"
import style from "./style.module.scss"


export const LoginPage = () => {

    return (
        <div className="container">
            <div>
                <div className={style.imgContainer}>
                    <img src={Logo} alt="Kenzie Hub" />
                </div>
                <div className={style.formContainer}>
                    <h1>Login</h1>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}