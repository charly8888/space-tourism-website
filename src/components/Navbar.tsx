import React, { FC, useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navbarContext } from '../../context/navbar/navbarContext'
import css from './navbar.module.sass'
import { useWidth } from '../../hooks/useWidth';

const Navbar:FC = () => {
  const {navbar, setNavbar} = useContext(navbarContext)
  const openOrNot = navbar ? 'open' : 'close'
  const [esMozilla, setEsMozilla] = useState(false)

  const StopPropagation =(e:React.MouseEvent) => {
    e.stopPropagation();
  }
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setNavbar(!navbar);
  }
  useEffect(() => {
    const mox = navigator.userAgent.search("Firefox")
    setEsMozilla( mox > 1 )
      return ()=>{
        setEsMozilla( false )
      }
  }, [])
  const colorForMozilla =  esMozilla && "rgba(0, 0, 0, 0.8)" 

  if (useWidth() <= 376) {
    return<>
        <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
        { navbar ? (
        <header className={css.header} onClick={()=>setNavbar(navbar?!navbar:navbar)}>
          <nav style={{backgroundColor:`${colorForMozilla}` }} className={`${css.nav} ${css[openOrNot]}` }>
            <span className={css.span} onClick={StopPropagation }></span>
              <NavLink  to="/" className="navlink" onClick={StopPropagation } ><span>00</span> Home</NavLink>
              <NavLink  to="/destination"  className="navlink" onClick={StopPropagation }><span>01</span> Destination</NavLink>
              <NavLink  to="/crew" className="navlink" onClick={StopPropagation }><span>02</span>  Crew</NavLink>
              <NavLink  to="/tech" className="navlink" onClick={StopPropagation }><span>03</span> Technology</NavLink>
            <span className={css.span} onClick={StopPropagation }></span>
          </nav>
        </header>) : ""}
      <button className={`${css.button} ${css[navbar ? "cruz" : ""]}`} onClick={handleClick}></button>
      </>
  }else{
    return<>
      <header className={css.header}  onClick={()=>setNavbar(navbar?!navbar:navbar) }>
          <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
          <nav className={`${css.nav} ${css[openOrNot]}`}>
            <span className={css.span} onClick={StopPropagation }></span>
              <NavLink  to="/" className="navlink" onClick={StopPropagation } ><span>00</span> Home</NavLink>
              <NavLink  to="/destination"  className="navlink" onClick={StopPropagation }><span>01</span> Destination</NavLink>
              <NavLink  to="/crew" className="navlink" onClick={StopPropagation }><span>02</span>  Crew</NavLink>
              <NavLink  to="/tech" className="navlink" onClick={StopPropagation }><span>03</span> Technology</NavLink>
            <span className={css.span} onClick={StopPropagation }></span>
          </nav>
        </header> 
        <button className={`${css.button} ${css[navbar ? "cruz" : ""]}`} onClick={handleClick}></button>
      </>
  }
}

export default Navbar