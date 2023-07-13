import React from 'react'
import Layout from '../../components/Layout/Layout'
import style from './Gestiones.module.scss'
import { Link } from "react-router-dom";

export const Gestiones = () => {
  return (
    <Layout >

      <div className={style.boxesContainer}>

        <Link className={style.box} to="/movimientos">
          <div className={style.boxTitle}>
            <h1>Gestion de Movimientos</h1>
          </div>
        </Link>

        <Link className={style.box} to="/profesionales">
          <div className={style.boxTitle}>
            <h1>Gestion de Profesionales Solicitantes</h1>
          </div>
        </Link>

        <Link className={style.box} to="/personal">
          <div className={style.boxTitle}>
            <h1>Gestion de Personal Responsable</h1>
          </div>
        </Link>

        <Link className={style.box} to="/stock">
          <div className={style.boxTitle}>
            <h1>Gestion de Stock</h1>
          </div>
        </Link>

        <Link className={style.box} to="/ordencompra">
          <div className={style.boxTitle}>
            <h1>Gestion de Orden de Compra</h1>
          </div>

        </Link>

      </div>

    </Layout >
  )
}

//export default Gestiones