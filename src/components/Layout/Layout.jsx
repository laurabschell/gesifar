import React from 'react'
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar'
import style from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={style.main}>
            <SideBar />
            <div className={style.box}>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout