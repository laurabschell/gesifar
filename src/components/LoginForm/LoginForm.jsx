import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import style from "./LoginForm.module.scss"

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = () => {
        //console.log('email:' + email);
        axios.post('http://localhost:4000/api/login', { email, password })
            .then(({ data }) => {
                console.log(data);
                localStorage.setItem('user', JSON.stringify(data));
                console.log('navigate /gestiones');
                navigate('/gestiones');
            })
            .catch(({ response }) => { 
                console.log(response.data);
            })
    }

    return (
        <div className={style.container}>
            <div className={style.title}>Ingreso</div>
            <form className={style.form} >
                <input
                    style={{ width: '100%' }}
                    className={style.input}
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{ width: '100%' }}
                    className={style.input}
                    placeholder="Password"
                    required
                />             
                <button
                    type="button"
                    onClick={onSubmit}
                    >
                        Ingresar
                    </button>             
            </form>
        </div >
    )
}

export default LoginForm
