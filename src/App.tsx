import { Route, Routes } from "react-router-dom";
import { CrewLayouts, DestinationLayouts, TechLayouts } from "./components/layouts";
import HomePage from "./HomePage";
import  {Technology, Crew, Destination}  from "./pages";
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/destination" element={<Destination/>} >
        <Route index element={<DestinationLayouts number={0}/>} />
        <Route path="mars" element={<DestinationLayouts number={1}/>} />
        <Route path="europa" element={<DestinationLayouts number={2}/>} />
        <Route path="titan" element={<DestinationLayouts number={3}/>} />
      </Route>
      <Route path="/crew" element={<Crew/>} >
        <Route index element={<CrewLayouts number={0}/>} />
        <Route path="mark" element={<CrewLayouts number={1}/>} />
        <Route path="victor" element={<CrewLayouts number={2}/>} />
        <Route path="anousheh" element={<CrewLayouts number={3}/>} />
      </Route>
      <Route path="/tech" element={<Technology/>} >
        <Route index element={<TechLayouts number={0}/>} />
        <Route path="capsule" element={<TechLayouts number={1}/>} />
        <Route path="spaceport" element={<TechLayouts number={2}/>} />
      </Route>
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
