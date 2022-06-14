import React from 'react'
import Layout from '../../components/Layout/Layout'
import style from './ConsultaRegistro.module.scss'

const ConsultaRegistro = () => {
    return (
        <Layout>
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
        </Layout>
    )
}

export default ConsultaRegistro