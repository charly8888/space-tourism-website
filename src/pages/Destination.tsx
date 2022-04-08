import { Link, Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar"
import css from "./destinations.module.css"
export const Destination = () => {
  return (<>
    <Navbar/>
    <h5 className={css.h5}><span>01</span> pick your destination</h5>
    <nav className={css.nav}>
      <Link to="moon">MOON</Link>
      <Link to="mars">MARS</Link>
      <Link to="europa">EUROPA</Link>
      <Link to="titan">TITAN</Link>
    </nav>
    <Outlet/>
  </>
  )
}
