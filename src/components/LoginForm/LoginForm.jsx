import React, { useState, useEffect } from 'react'
import style from "./LoginForm.module.scss"
import axios from 'axios';
import Gestiones from '../../pages/Gestiones/Gestiones';
import { Link } from 'react-router-dom';

const LoginForm = ({ setUser }) => {
    const [usuarios, setUsuarios] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     setIsLoading(true);
    //     try {
    //         const response = await axios.get("http://gesifar-api/usuarios");
    //         setUsuarios(response.data);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setError(error);
    //         setIsLoading(false);
    //     }
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (email === "" || password === "") {
    //         setError(true)
    //         return
    //     } else {

    //         setError(false)

    //     }

    //     setUser([email]);
    // };

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    return (
        <div className={style.container}>
            <div className={style.title}>Ingreso</div>
            <form className={style.form} >
                <input
                    style={{ width: '100%' }}
                    className={style.input}
                    placeholder="Email"
                    type="email"
                    name="username"
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
                    placeholder="Contrasena"
                    required
                />
                <Link style={{ textDecoration: 'none' }} to="/gestiones">
                    <button >Ingresar</button>
                </Link>
            </form>
            {/* {error &&
                <div>Completa los campos para ingresar</div>
            } */}
        </div >
    )
}

export default LoginForm
