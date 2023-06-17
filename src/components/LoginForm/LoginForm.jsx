import React, { useState, useEffect } from 'react'
import style from "./LoginForm.module.scss"
import axios from 'axios';

const LoginForm = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        apellido: "",
        nombre: "",
        username: "",
        password: "",
    });
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("http://localhost:3001/usuarios");
            setUsuarios(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (selectedUser) {
                const response = await axios.put(
                    `http://localhost:3001/usuarios/${selectedUser.id}`,
                    formData
                );
                setUsuarios(
                    usuarios.map((user) =>
                        user.id === response.data.id ? response.data : user
                    )
                );
                setSelectedUser(null);
            } else {
                const response = await axios.post(
                    "http://localhost:3001/usuarios",
                    formData
                );
                setUsuarios([...usuarios, response.data]);
            }
            setFormData({
                apellido: "",
                nombre: "",
                username: "",
                password: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    return (
        <div className={style.container}>
            <div className={style.title}>Ingreso</div>
            <form className={style.form} onSubmit={handleSubmit} >
                <input
                    style={{ width: '100%' }}
                    className={style.input}
                    placeholder="Email"
                    type="email"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{ width: '100%' }}
                    className={style.input}
                    placeholder="Contrasena"
                />
                <button onClick={handleSubmit}>Ingresar</button>
            </form>
        </div >
    )
}

export default LoginForm
