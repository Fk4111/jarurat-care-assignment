"use client"

// Navigation bar - for all pages
export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* (Logo and header) */}
        <div className="flex items-center gap-2">
          <div className="text-3xl">🏥</div>
          <h1 className="text-2xl font-bold text-white">JaruratCare</h1>
        </div>

        {/* (Navigation links) */}
        <div className="flex gap-6">
          {/* (Home link) */}
          <button
            onClick={() => setCurrentPage("home")}
            className={`font-semibold transition ${
              currentPage === "home" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-300 hover:text-white"
            }`}
          >
            🏠Home
          </button>

          {/* Patients link */}
          <button
            onClick={() => setCurrentPage("patients")}
            className={`font-semibold transition ${
              currentPage === "patients" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-300 hover:text-white"
            }`}
          >
            Patients
          </button>

          {/* (About link) */}
          <button
            onClick={() => setCurrentPage("about")}
            className={`font-semibold transition ${
              currentPage === "about" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-300 hover:text-white"
            }`}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  )
}
