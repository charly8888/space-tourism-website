
import { Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import TextHome from "./components/TextHome"
import css from "./homepage.module.sass"

const HomePage = () => {
  return <main className={css.main}>
    <Navbar />
    <TextHome />
    <Link to="/" className="explore">EXPLORE</Link>
  </main>
  
}

export default HomePage