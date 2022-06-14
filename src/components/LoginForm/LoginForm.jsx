import React from 'react'
import {
    Link
} from "react-router-dom";
import style from "./LoginForm.module.scss"

const LoginForm = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>Ingreso</div>
            <form className={style.form}>
                <input type="text" placeholder="Usuario" required />
                <input type="password" placeholder="Contraseña" required />
                <a className={style.form_passwordLink} href="/#">Renovar contraeña</a>
                <button className={style.form_submitButton} type="submit"><Link to="/landing">Ingresar</Link></button>
                <a className={style.form_termsLink} href="/#">Políticas y condiciones</a>
            </form>
        </div>
    )
}

export default LoginForm
