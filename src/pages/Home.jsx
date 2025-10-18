"use client"

// (Home page - yahi main landing page hai )
export default function Home({ setCurrentPage }) {
  return (
    <main className="min-h-screen pt-20">
      {/* ye Hero section hai */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">Jarurat Care Hospital</h1>
          
          <p className="text-lg text-gray-400 mb-12">Your Health is Our Priority</p>

          {/* here are some Main features listed 👇 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/*  (Feature 1 - Patient Records) */}
            <div className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-3">Patient Records</h3>
              <p className="text-gray-300">You can find the Records of any patient here</p>
            </div>

            {/* Feature 2 - Fast Search) */}
            <div className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Quick Search</h3>
              <p className="text-gray-300">Quick Search For any Patient</p>
            </div>

            {/* Feature 3 - Secure Data */}
            <div className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Data</h3>
              <p className="text-gray-300">Dont panic your Data is our responsibility</p>
            </div>
          </div>

          {/* CTA Btn (Call to action button) */}
          <button
            onClick={() => setCurrentPage("patients")}
            className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            View Patients List
          </button>
        </div>
      </section>
    </main>
  )
}
