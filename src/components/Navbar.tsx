import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import css from './navbar.module.sass'
const Navbar = () => {
  const [state, setState] = useState(false)
  const openOrNot = state ? 'open' : 'close'
  console.log(state) 
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
console.log(width)

if (width < 375) {
  return (<>
      <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
      <nav className={`${css.nav} ${css[openOrNot]}`}>
          <NavLink  to="/" className="navlink" ><span>00</span> Home</NavLink>
          <NavLink  to="/destination"  className="navlink" ><span>01</span> Destination</NavLink>
          <NavLink  to="/crew" className="navlink"><span>02</span>  Crew</NavLink>
          <NavLink  to="/tech" className="navlink"><span>03</span> Technology</NavLink>
      </nav>
    <button className={`${css.button} ${css[state ? "cruz" : ""]}`} onClick={() => setState(!state)}></button>
  </>
  )
}
  return (<>
    <header className={css.header} >
      <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
      <nav className={css.nav}>
          <NavLink  to="/" className="navlink" ><span>00</span> Home</NavLink>
          <NavLink  to="/destination"  className="navlink" ><span>01</span> Destination</NavLink>
          <NavLink  to="/crew" className="navlink"><span>02</span>  Crew</NavLink>
          <NavLink  to="/tech" className="navlink"><span>03</span> Technology</NavLink>
      </nav>
    </header>
  </>
  )
}

export default Navbar