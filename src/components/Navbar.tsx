import { Link, NavLink } from 'react-router-dom'
import css from './navbar.module.sass'
const Navbar = () => {
  return (
    <header className={css.header} >
      <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
      <nav className={css.nav}>
        
        <NavLink style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "",
              };
            }} to="/" className={css.navlink}><span>00</span> Home</NavLink>
        <NavLink to="/destination/moon"><span>01</span> Destination</NavLink>
        <NavLink to="/crew/douglas"><span>02</span>  Crew</NavLink>
        <NavLink to="/tech/vehicle"><span>03</span> Technology</NavLink>


      </nav>
    </header>
  )
}

export default Navbar