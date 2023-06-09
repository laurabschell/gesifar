import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import style from "./LoginForm.module.scss"
import { Button, TextField } from '@mui/material';
import axios from 'axios';

const LoginForm = () => {
    const [body, setBody] = useState({ username: '', password: '' })

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        axios.post('http://localhost:3100/api/login', body)
            .then(({ data }) => {
                console.log(data);
            })
            .catch(({ response }) => {
                console.log(response)
            })
    }

    return (
        <div className={style.container}>
            <div className={style.title}>Ingreso</div>
            <form className={style.form}>
                <TextField name='username' onChange={inputChange} fullWidth size="medium" style={{ width: '100%' }} margin="normal" className={style.input} label="Email" value={body.username} />
                <TextField name='password' onChange={inputChange} fullWidth size="medium" style={{ width: '100%' }} margin="normal" className={style.input} label="Contrasena" type="password" value={body.password} />
                <Link to="/gestiones">
                    <Button onClick={onSubmit} sx={{ marginTop: '3rem', textDecoration: 'none' }} color="warning" size="large" fullWidth variant="contained">Ingresar</Button>
                </Link>
            </form>
        </div >
    )
}

export default LoginForm
