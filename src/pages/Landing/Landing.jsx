import React from 'react'
import Layout from '../../components/Layout/Layout'
import style from './Landing.module.scss'

const Landing = () => {
  return (
    <Layout>

      <div className={style.boxesContainer}>

        <div className={style.box}>
          <div className={style.boxTitle}>
            <h1>250</h1>
            <bold>productos <br /> ingresados</bold>
          </div>
          <p>en la ultima reposicion de stock </p>
        </div>

        <div className={style.box}>
          <div className={style.boxTitle}>
            <h1>300</h1>
            <bold>registros</bold>
          </div>
          <p>de egreso en el ultimo mes </p>
        </div>

        <div className={style.box}>
          <div className={style.boxTitle}>
            <h1>1350</h1>
            <bold>unidades</bold>
          </div>
          <p>de medicamentos en stock</p>
        </div>

        <div className={style.box} >
          <div className={style.boxTitle}>
            <h1>150</h1>
            <bold>unidades</bold>
          </div>
          <p>de insumos en stock</p>
        </div>

      </div>

      <div className={style.content}>

        <div className={style.contentItem}>
          <h5>ultimos movimientos de ingresos</h5>
          <ul>
            <li>29 de Mayo   |   3 Jeringas   |   Maternidad</li>
            <li>9 de Mayo   |   1 blister Ibuprofeno 400gr   |   Cardiologia</li>
            <li>2 de Mayo   |   4 aspirindas   |   Traumatologia</li>
            <li>25 de Abril   |   3 Jeringas   |   Maternidad</li>
            <li>22 de Abril   |   1 blister Ibuprofeno 400gr   |   Cardio</li>
            <li>20 de Abril   |   4 aspirindas   |   Traumatologia</li>
          </ul>
        </div>

        <hr />

        <div className={style.contentItem}>
          <h5>ingresos de stock recientes</h5>
          <ul>
            <li>29 de Mayo   |   3 Jeringas   |   Maternidad</li>
            <li>9 de Mayo   |   1 blister Ibuprofeno 400gr   |   Cardiologia</li>
            <li>2 de Mayo   |   4 aspirindas   |   Traumatologia</li>
            <li>25 de Abril   |   3 Jeringas   |   Maternidad</li>
            <li>22 de Abril   |   1 blister Ibuprofeno 400gr   |   Cardio</li>
            <li>20 de Abril   |   4 aspirindas   |   Traumatologia</li>
          </ul>
        </div>

      </div>

    </Layout >
  )
}

export default Landing