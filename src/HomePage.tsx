
import { Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import TextHome from "./components/TextHome"


const HomePage = () => {
  return <>
    <Navbar />
    <TextHome />
    <Link to="/" className="explore">EXPLORE</Link>
  </>
  
}

export default HomePage