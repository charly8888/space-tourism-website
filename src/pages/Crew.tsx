import { Outlet, Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar"
import css from "./crew.module.sass"
import globalcss from "./globalPagesStyles.module.sass"
export const Crew = () => {
  return (<>
    <Navbar/>
    <h5 className={globalcss.h5}><span>02</span> Meet your crew</h5>
    <nav className={css.nav}>
      <NavLink className="linkcrew" to="douglas"></NavLink>
      <NavLink className="linkcrew" to="mark"></NavLink>
      <NavLink className="linkcrew" to="victor"></NavLink>
      <NavLink className="linkcrew" to="anousheh"></NavLink>
    </nav>
    <Outlet/>
  </>
  )
}
