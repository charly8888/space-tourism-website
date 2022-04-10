import React, { FC, useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navbarContext } from '../../context/navbar/navbarContext'
import css from './navbar.module.sass'

const Navbar:FC = () => {
  const {navbar, setNavbar} = useContext(navbarContext)
  console.log(navbar)
  
  
  const openOrNot = navbar ? 'open' : 'close'

  const handleClickStopPropagation =(e:React.MouseEvent) => {
    e.stopPropagation();
  }
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setNavbar(!navbar);
  }

  return (<>
    <header className={css.header} onClick={()=>setNavbar(navbar?!navbar:navbar)}>
      <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
      <nav className={`${css.nav} ${css[openOrNot]}`}>
        <span className={css.span} onClick={handleClickStopPropagation }></span>
          <NavLink  to="/" className="navlink" onClick={handleClickStopPropagation } ><span>00</span> Home</NavLink>
          <NavLink  to="/destination"  className="navlink" onClick={handleClickStopPropagation }><span>01</span> Destination</NavLink>
          <NavLink  to="/crew" className="navlink" onClick={handleClickStopPropagation }><span>02</span>  Crew</NavLink>
          <NavLink  to="/tech" className="navlink" onClick={handleClickStopPropagation }><span>03</span> Technology</NavLink>
        <span className={css.span} onClick={handleClickStopPropagation }></span>
      </nav>
    <button className={`${css.button} ${css[navbar ? "cruz" : ""]}`} onClick={handleClick}></button>
    </header>
  </>
  )
}

export default Navbar