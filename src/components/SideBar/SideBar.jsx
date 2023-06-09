import React from 'react'
import style from './SideBar.module.scss'
import Logo from '../../assets/logo.png';
// import {
//   Link
// } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={style.container}>
      <div className={style.imageBox}>
        <img className={style.imageBox_img} src={Logo} alt="Logo" />
      </div>
      {/* <nav className={style.menu}>
        <ul>
          <li className={style.menuButton}><Link to="/delivery">Registrar egreso</Link></li>
          <li className={style.menuButton}><Link to="/income" >Registrar ingreso de stock</Link></li>
          <li className={style.menuButton}><Link to="/consultaRegistro" >Consultar registros</Link></li>
          <li className={style.menuButton}><Link to="/consultaStock" >Consultar stock</Link></li>
        </ul>
      </nav> */}
    </div>
  )
}

export default SideBar