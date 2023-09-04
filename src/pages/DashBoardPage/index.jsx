import { useContext } from "react"
import Logo from "../../../assets/Logo.svg"
import style from "./style.module.scss"
import { UserContext } from "../../providers/UserContext"


export const DashBoardPage = () => {
    
    const {user, userLogout} = useContext(UserContext)


    return (
        <div className="container">
            <div className={style.dashBoardFlex}>
                <div className={style.flexBox}>
                    <img src={Logo} alt="Kenzie Hub" />
                    <button onClick={() => userLogout()}>Sair</button>
                </div>
                <div className={style.flexBox}>
                    <h1>Olá {user?.name}</h1>
                    <p>{user?.course_module}</p>
                </div>
                <div>
                    <p>Que pena! Estamos em desenvolvimento :(</p>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </div>
        </div>

    )
}