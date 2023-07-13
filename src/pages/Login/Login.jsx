import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import style from './Login.module.scss'
import logo from "../../assets/logo.png"

export const Login = () => {
    return (
        <div className={style.page}>
            <div className={style.page_logoContainer}>
                <img className={style.logoImg} src={logo} alt="gesifar logo" />
            </div>
            <div className={style.page_formContainer}>
                <LoginForm />
            </div>
        </div>
    )
}

//export default Login
