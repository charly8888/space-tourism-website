import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import css from './navbar.module.sass'
const Navbar = () => {
  const [state, setState] = useState(false)
  const openOrNot = state ? 'open' : 'close'
  console.log(state)
const handleClickSpan= (e) => {
  e.stopPropagation();
}
const handleClick = (e) => {
  e.stopPropagation();
  setState(!state);
}
  return (<>
    <header className={css.header} onClick={()=>setState(state?!state:state)}>
      <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
      <nav className={`${css.nav} ${css[openOrNot]}`}>
        <span className={css.span} onClick={handleClickSpan}></span>
          <NavLink  to="/" className="navlink" ><span>00</span> Home</NavLink>
          <NavLink  to="/destination"  className="navlink" ><span>01</span> Destination</NavLink>
          <NavLink  to="/crew" className="navlink"><span>02</span>  Crew</NavLink>
          <NavLink  to="/tech" className="navlink"><span>03</span> Technology</NavLink>
        <span className={css.span} onClick={handleClickSpan}></span>
      </nav>
    <button className={`${css.button} ${css[state ? "cruz" : ""]}`} onClick={handleClick}></button>
    </header>
  </>
  )
}

export default Navbar