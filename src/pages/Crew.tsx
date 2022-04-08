import { Outlet, Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import css from "./crew.module.sass"
import globalcss from "./globalPagesStyles.module.sass"
export const Crew = () => {
  return (<>
    <Navbar/>
    <h5 className={globalcss.h5}><span>02</span> Meet your crew</h5>
    <nav className={css.nav}>
      <Link to="douglas"></Link>
      <Link to="mark"></Link>
      <Link to="victor"></Link>
      <Link to="anousheh"></Link>
    </nav>
    <Outlet/>
  </>
  )
}
