import { Outlet, Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import css from "./crew.module.css"
export const Crew = () => {
  return (<>
    <Navbar/>
    <h1>EARTH</h1>
    <nav>
      <Link to="/crew/a">a</Link>
      <Link to="/crew/d">d</Link>
      <Link to="/crew/s">s</Link>
    </nav>
    <Outlet/>
  </>
  )
}
