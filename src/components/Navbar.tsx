import { NavLink } from 'react-router-dom'
import css from './navbar.module.sass'
import { CustomLink } from '../../helpers/CustomLink';
const Navbar = () => {
 
  return (
    <header className={css.header} >
      <img src="../../assets/shared/logo.svg" alt="logo" className={css.img}/>
      <nav className={css.nav}>
          <NavLink  to="/" className="navlink" ><span>00</span> Home</NavLink>
          <NavLink  to="/destination"  className="navlink" ><span>01</span> Destination</NavLink>
          <NavLink  to="/crew" className="navlink"><span>02</span>  Crew</NavLink>
          <NavLink  to="/tech" className="navlink"><span>03</span> Technology</NavLink>
      </nav>
    </header>
  )
}

export default Navbar