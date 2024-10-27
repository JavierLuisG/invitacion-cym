import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { Home } from "./components/Home";

function App() {
  
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </>
  )
}

export default App
