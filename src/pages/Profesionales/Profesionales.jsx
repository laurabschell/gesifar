import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Button } from '@mui/material'
import style from "./Profesionales.module.scss"
import { Link } from 'react-router-dom'

const Profesionales = () => {
    return (
        <Layout>
            <div className={style.title}>Gestion de Profesionales Solicitantes</div>
            <div className={style.subtext}>Por favor, selecciona la accion a realizar:</div>
            <div className={style.buttons}>
                <Link to="/registrar-profesional"><button>Registrar Profesional Solicitante</button></Link>
                <Link to="/consultar-profesional"><button>Consultar, Modificar y Eliminar Datos</button></Link>
            </div>
        </Layout>
    )
}

export default Profesionales