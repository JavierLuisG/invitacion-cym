import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { Home } from "./routes/Home";
import NotFound from "./routes/NotFound";

function App() {
  
  return (
    <>
      <Routes>
        <Route path={`${routes.home}/:name`} element={<Home />} />
        <Route path={`${routes.notFound}`} element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
