import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import  {Technology, Crew, Destination, Moon, Mars, Titan, Europa }  from "./pages";
import Aaa from './pages/crew/Aaa';
import Ddd from "./pages/crew/Ddd";
import Sss from "./pages/crew/Sss";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/destination" element={<Destination/>} >
        <Route path="moon" element={<Moon />} />
        <Route path="mars" element={<Mars/>} />
        <Route path="europa" element={<Europa/>} />
        <Route path="titan" element={<Titan/>} />
      </Route>
      <Route path="/crew" element={<Crew/>} >
        <Route path="d" element={<Ddd />} />
        <Route path="a" element={<Aaa/>} />
        <Route path="s" element={<Sss/>} />
      </Route>
      <Route path="/tech" element={<Technology/>} />
      <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  )

}

export default App
