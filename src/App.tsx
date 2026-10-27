import { Routes, Route } from "react-router"

//Pages
import HomePage from "./pages/HomePage"
import AboutMePage from "./pages/AboutMePage"
import NotFoundPage from "./pages/NotFoundPage"

export function App() {
  return (
    <Routes>

       <Route path="/" element={<HomePage />} />
       <Route path="/about-me" element={<AboutMePage />} />
      

      {/* 404 Route */}
      <Route path="*" element={<NotFoundPage />} />


    </Routes>
  )
}

export default App
