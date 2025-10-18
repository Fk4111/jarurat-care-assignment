"use client"

import { useState } from "react"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Patients from "./pages/Patients"
import About from "./pages/About"
import "./App.css"

function App() {
  // Track current page
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "patients" && <Patients />}
      {currentPage === "about" && <About />}
    </div>
  )
}

export default App
