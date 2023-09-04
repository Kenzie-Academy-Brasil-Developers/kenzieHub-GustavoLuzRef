import { forwardRef } from "react";
import style from "./style.module.scss"

export const Select = forwardRef(({ label,children, error, ...rest }, ref) => {

    return (
        <div className={style.flexBox}>
            <label>{label}</label>
            <select ref={ref} {...rest} >
                {children}
            </select>
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})