import React from 'react'
import style from './SideBar.module.scss'
import Logo from '../../assets/sidebar-logo.png';

const SideBar = () => {
  return (
    <div className={style.container}>
      <div className={style.imageBox}>
        <img className={style.imageBox_img} src={Logo} alt="Logo" />
      </div>
      <nav className={style.menu}>
        <ul>
          <li className={style.menuButton}>Registrar egreso</li>
          <li className={style.menuButton}>Registrar ingreso de stock</li>
          <li className={style.menuButton}>Consultar registros</li>
          <li className={style.menuButton}>Consultar stock</li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar