import { forwardRef } from "react";
import style from "./style.module.scss"

export const Input = forwardRef(({ label, error, ...rest }, ref) => {

    return (
        <div className={style.flexBox}>
            <label>{label}</label>
            <input ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})