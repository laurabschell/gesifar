import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import style from "./LoginForm.module.scss"
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
        axios.get('http://localhost:3001/usuarios', { params: { username: body.username, password: md5(body.password) } })
            .then(({ data }) => {
                console.log(data);
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: "/" });
                    cookies.set('npmbre', respuesta.nombre, { path: "/" });
                    cookies.set('apellido', respuesta.apellido, { path: "/" });
                    cookies.set('username', respuesta.username, { path: "/" });
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
                    window.location.href = "./gestiones";
                } else {
                    alert('El usuario o la contrasena son incorrectos')
                }
            }
            )
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className={style.container}>
            <div className={style.title}>Ingreso</div>
            <form className={style.form}>
                <input name='username' onChange={inputChange} style={{ width: '100%' }} className={style.input} placeholder="Email" value={body.username} />
                <input name='password' onChange={inputChange} style={{ width: '100%' }} className={style.input} placeholder="Contrasena" type="password" value={body.password} />
                {/* <TextField name='username' onChange={inputChange} fullWidth size="medium" style={{ width: '100%' }} margin="normal" className={style.input} label="Email" value={body.username} />
                <TextField name='password' onChange={inputChange} fullWidth size="medium" style={{ width: '100%' }} margin="normal" className={style.input} label="Contrasena" type="password" value={body.password} /> */}
                <button onClick={onSubmit}>Ingresar</button>
            </form>
        </div >
    )
}

export default LoginForm
