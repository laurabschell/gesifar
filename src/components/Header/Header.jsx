import React from 'react'
import style from './Header.module.scss'
import UserDefault from '../../assets/user-image.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user', '');
    navigate('/login');
  }
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className={style.container}>
      <div className={style.title}>Bienvenido!</div>
      <div className={style.userBadge}>
        <img src={UserDefault} alt="user img" />
        <div className={style.userBadge_text}>
          <h4>{user.name} {user.lastname}</h4>
          <p>{user.email}</p>
        </div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Header