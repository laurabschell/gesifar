import React from 'react'
import style from './Header.module.scss'
import UserDefault from '../../assets/user-default.png'

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Bienvenido</div>
      <div className={style.userBadge}>
        <img src={UserDefault} alt="user img" />
        <div className={style.userBadge_text}>
          <h4>Javier Medina</h4>
          <p>Supervisor</p>
        </div>
      </div>
    </div>
  )
}

export default Header