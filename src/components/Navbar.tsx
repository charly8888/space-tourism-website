import React, { FC, useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navbarContext } from '../../context/navbar/navbarContext'
import css from './navbar.module.sass'
import { useWidth } from '../../hooks/useWidth';

const Navbar:FC = () => {
  const {navbar, setNavbar} = useContext(navbarContext)
  const openOrNot = navbar ? 'open' : 'close'

  const handleClickStopPropagation =(e:React.MouseEvent) => {
    e.stopPropagation();
  }
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setNavbar(!navbar);
  }
  const colorForMozilla =  () => navigator.userAgent.search("Firefox") && "rgba(0, 0, 0, 0.8)" 
  if (useWidth() <= 376) {
    return<>
        <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
        { navbar ? (
        <header className={css.header} onClick={()=>setNavbar(navbar?!navbar:navbar)}>
          <nav style={{backgroundColor:`${colorForMozilla()}` }} className={`${css.nav} ${css[openOrNot]}` }>
            <span className={css.span} onClick={handleClickStopPropagation }></span>
              <NavLink  to="/" className="navlink" onClick={handleClickStopPropagation } ><span>00</span> Home</NavLink>
              <NavLink  to="/destination"  className="navlink" onClick={handleClickStopPropagation }><span>01</span> Destination</NavLink>
              <NavLink  to="/crew" className="navlink" onClick={handleClickStopPropagation }><span>02</span>  Crew</NavLink>
              <NavLink  to="/tech" className="navlink" onClick={handleClickStopPropagation }><span>03</span> Technology</NavLink>
            <span className={css.span} onClick={handleClickStopPropagation }></span>
          </nav>
        </header>) : ""}
      <button className={`${css.button} ${css[navbar ? "cruz" : ""]}`} onClick={handleClick}></button>
      </>
  }else{
    return<>
      <header className={css.header}  onClick={()=>setNavbar(navbar?!navbar:navbar) }>
          <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
          <nav className={`${css.nav} ${css[openOrNot]}`}>
            <span className={css.span} onClick={handleClickStopPropagation }></span>
              <NavLink  to="/" className="navlink" onClick={handleClickStopPropagation } ><span>00</span> Home</NavLink>
              <NavLink  to="/destination"  className="navlink" onClick={handleClickStopPropagation }><span>01</span> Destination</NavLink>
              <NavLink  to="/crew" className="navlink" onClick={handleClickStopPropagation }><span>02</span>  Crew</NavLink>
              <NavLink  to="/tech" className="navlink" onClick={handleClickStopPropagation }><span>03</span> Technology</NavLink>
            <span className={css.span} onClick={handleClickStopPropagation }></span>
          </nav>
        </header> 
        <button className={`${css.button} ${css[navbar ? "cruz" : ""]}`} onClick={handleClick}></button>
      </>
  }
}

export default Navbar