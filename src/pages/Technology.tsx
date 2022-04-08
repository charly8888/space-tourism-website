import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import css from "./technology.module.sass"
export const Technology = () => {
  return (<>
    <Navbar />
    <h5 className={css.h5}><span>03</span> SPACE LAUNCH 101</h5>
    <nav className={css.nav}>
      <NavLink to="vehicle">1</NavLink>
      <NavLink to="capsule">2</NavLink>
      <NavLink to="spaceport">3</NavLink>
    </nav>
    <Outlet/>
  </>
  )
}

