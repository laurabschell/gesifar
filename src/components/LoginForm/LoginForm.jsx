import React from 'react'
import style from "./LoginForm.module.scss"

const LoginForm = () => {
    return (
        <form className={style.loginForm}>
            <div className={style.loginForm_title}>Ingreso</div>
            <div className={style.loginForm_container}>
                <div className={style.loginForm_fieldContainer}>
                    <p>Usuario*</p>
                    <input type="text" className={style.loginForm_input}/>
                </div>
                <div className={style.loginForm_fieldContainer}>
                    <p>Contraseña*</p>
                    <input type="password" className={style.loginForm_input}/>
                </div>
                <a href="/#" className={style.loginForm_link__terms}>Renovar contraeña</a>
            </div>
            <button type="submit">Ingresar</button>
            <a href="/#"className={style.loginForm_link__terms}>Políticas y condiciones</a>
        </form>
    )
}

export default LoginForm
