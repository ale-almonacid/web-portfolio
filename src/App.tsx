import { Routes, Route } from "react-router"

//Pages
import HomePage from "./pages/HomePage"
import AboutMePage from "./pages/AboutMePage"
import NotFoundPage from "./pages/NotFoundPage"

//Projects pages
import DevSecToolPage from "./pages/projects/DevSecToolPage"
import BetterLifePage from "./pages/projects/BetterLifePage"
import ItinotePage from "./pages/projects/ItinotePage"

export function App() {
  return (
    <Routes>

       <Route path="/" element={<HomePage />} />
       <Route path="/about-me" element={<AboutMePage />} />

        {/* projects */}
        <Route path="/projects/devsectool" element={<DevSecToolPage />} />
        <Route path="/projects/better-life" element={<BetterLifePage />} />
        <Route path="/projects/itinote" element={<ItinotePage />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFoundPage />} />


    </Routes>
  )
}

export default App
