import { Link, NavLink, Outlet } from 'react-router-dom';
import { DestinationLayouts } from '../components/layouts';
import Navbar from "../components/Navbar"
import css from "./destinations.module.sass"
import globalcss from "./globalPagesStyles.module.sass"

export const Destination = () => {
  return (<main className={css.main}>
    <Navbar/>
    <h5 className={globalcss.h5}><span>01</span> pick your destination</h5>
    <nav className={css.nav}>
      <NavLink className="navLinkPlanets" to="/destination" end >MOON</NavLink>
      <NavLink className="navLinkPlanets" to="mars">MARS</NavLink>
      <NavLink className="navLinkPlanets" to="europa">EUROPA</NavLink>
      <NavLink className="navLinkPlanets" to="titan">TITAN</NavLink>
    </nav>
    <Outlet />  
  </main>
  )
}
