"use client"

import { useState, useEffect } from "react"
import PatientCard from "../components/PatientCard"
import PatientModal from "../components/PatientModal"
import AddPatientForm from "../components/AddPatientForm"

export default function Patients() {
  // state TO Store all patients data)
  const [patients, setPatients] = useState([])

  // Search query state
  const [searchQuery, setSearchQuery] = useState("")

  // State TO Selected patient details
  const [selectedPatient, setSelectedPatient] = useState(null)

  //  state Modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(false)

  //  state to Show add patient form
  const [showAddForm, setShowAddForm] = useState(false)

  // Loading state
  const [isLoading, setIsLoading] = useState(true)

  // Load data whenever component mount
  useEffect(() => {
    // Mock Data - original project me API se aayega (Mock data - will come from API in real project)
    const mockPatients = [
      {
        id: 1,
        name: "Aastha",
        age: 45,
        contact: "9876543210",
        email: "Aasths@example.com",
        disease: "Diabetes",
        lastVisit: "2025-10-15",
        bloodType: "O+",
        address: "Delhi India",
      },
      {
        id: 2,
        name: " Priya Sharma ",
        age: 32,
        contact: "9876543211",
        email: "priya@example.com",
        disease: " High Blood Pressure",
        lastVisit: "2025-10-14",
        bloodType: "A+",
        address: "Mumbai, India",
      },
      {
        id: 3,
        name: " Salman Shah",
        age: 58,
        contact: "9876543212",
        email: "Salman@example.com",
        disease: "Thyroid",
        lastVisit: "2025-10-13",
        bloodType: "B+",
        address: "Pune, India",
      },
      {
        id: 4,
        name: "Saif Malik",
        age: 28,
        contact: "9876543213",
        email: "SaifMalik@example.com",
        disease: "Hip Joint Pain",
        lastVisit: "2025-10-12",
        bloodType: "AB+",
        address: " Surat, India",
      },
      {
        id: 5,
        name: " Vijay Singh",
        age: 52,
        contact: "9876543214",
        email: "vijay@example.com",
        disease: "Asthma",
        lastVisit: "2025-10-11",
        bloodType: "O-",
        address: "Culcutta,India",
      },
    ]

    // ye mock data tha to Set the data
    setPatients(mockPatients)
    setIsLoading(false)
  }, [])

  // Filter patients based on search
  const filteredPatients = patients.filter((patient) => patient.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // here is the Function to add new patient 👇
  const handleAddPatient = (newPatient) => {
    const patientWithId = {
      ...newPatient,
      id: patients.length + 1,
      lastVisit: new Date().toISOString().split("T")[0],
    }
    setPatients([...patients, patientWithId])
    setShowAddForm(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-white text-2xl"> It's Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Patient Records</h1>
          <p className="text-gray-400">
            All Patients: {filteredPatients.length} (Total Patients: {filteredPatients.length})
          </p>
        </div>

        {/* Search bar and buttons */}

        <div className="flex flex-col md:flex-row gap-4 mb-8">

          {/* this will be our Search input */}
          <input
            type="text"
            placeholder="Search the patient name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Add new patient button */}
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            {showAddForm ? "To Cancel" : "+ To Add Patient"}
          </button>
        </div>

        {/* Add patient form */}
        {showAddForm && (
          <div className="mb-8 bg-slate-700 p-6 rounded-lg">
            <AddPatientForm onAddPatient={handleAddPatient} onCancel={() => setShowAddForm(false)} />
          </div>
        )}

        {/* Patients grid */}
        {filteredPatients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onViewDetails={() => {
                  setSelectedPatient(patient)
                  setIsModalOpen(true)
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No patients found</p>
          </div>
        )}

        {/* Patient details modal */}
        {isModalOpen && selectedPatient && (
          <PatientModal patient={selectedPatient} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </main>
  )
}
