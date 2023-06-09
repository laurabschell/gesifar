import React from 'react'
import style from './Header.module.scss'
import UserDefault from '../../assets/user-image.png'

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Bienvenido</div>
      <div className={style.userBadge}>
        <img src={UserDefault} alt="user img" />
        <div className={style.userBadge_text}>
          <h4>Laura Schell</h4>
        </div>
      </div>
    </div>
  )
}

export default Header