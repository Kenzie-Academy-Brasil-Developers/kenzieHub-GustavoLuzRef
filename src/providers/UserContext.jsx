import { createContext, useEffect } from "react";
import {  useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../services/service";

export const UserContext = createContext({})

export const UserProvider = ({children}) =>{

    const [user, setUser] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        const autoLogin = async () =>{
            const token = localStorage.getItem("@Token")

            if (token) {
                try {
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    setUser(data);
                    navigate("/dashBoard")
                } catch (error) {
                    console.log(error)
                }
            } else (
                navigate("/")
            )
        }
        autoLogin()    
    },[])

    const userLogout = () => {
        setUser(null);
        localStorage.removeItem("@Token");
        navigate("/");
     }

    return(
        <UserContext.Provider value={{user, setUser, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}