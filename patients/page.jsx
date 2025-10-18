// Patients page - main task jo assignment mein diya gaya hai
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, Plus, ArrowLeft } from "lucide-react"
import PatientCard from "@/components/patient-card"
import PatientModal from "@/components/patient-modal"
import AddPatientForm from "@/components/add-patient-form"

export default function PatientsPage() {
  // State management - patients data store karne ke liye
  const [patients, setPatients] = useState([])
  const [filteredPatients, setFilteredPatients] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // API se data fetch karne ke liye - Mock data use kar rahe hain
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true)
        // Mock data - real API ke jagah
        const mockPatients = [
          {
            id: 1,
            name: "Rajesh Kumar",
            age: 45,
            contact: "9876543210",
            email: "rajesh@example.com",
            disease: "Diabetes",
            lastVisit: "2025-10-10",
          },
          {
            id: 2,
            name: "Priya Singh",
            age: 32,
            contact: "9876543211",
            email: "priya@example.com",
            disease: "Hypertension",
            lastVisit: "2025-10-12",
          },
          {
            id: 3,
            name: "Amit Patel",
            age: 58,
            contact: "9876543212",
            email: "amit@example.com",
            disease: "Heart Disease",
            lastVisit: "2025-10-08",
          },
          {
            id: 4,
            name: "Neha Sharma",
            age: 28,
            contact: "9876543213",
            email: "neha@example.com",
            disease: "Asthma",
            lastVisit: "2025-10-14",
          },
          {
            id: 5,
            name: "Vikram Desai",
            age: 52,
            contact: "9876543214",
            email: "vikram@example.com",
            disease: "Thyroid",
            lastVisit: "2025-10-11",
          },
        ]
        setPatients(mockPatients)
        setFilteredPatients(mockPatients)
        setError("")
      } catch (err) {
        // Error handling - agar data fetch nahi ho
        setError("Failed to load patient data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPatients()
  }, [])

  // Search functionality - patient ko name se filter karne ke liye
  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setFilteredPatients(patients)
    } else {
      // Filter patients by name - case insensitive search
      const filtered = patients.filter((patient) => patient.name.toLowerCase().includes(query.toLowerCase()))
      setFilteredPatients(filtered)
    }
  }

  // Modal open karne ke liye - patient details dekhne ke liye
  const handleViewDetails = (patient) => {
    setSelectedPatient(patient)
    setShowModal(true)
  }

  // Naya patient add karne ke liye
  const handleAddPatient = (newPatient) => {
    // New patient ko list mein add karo
    const patient = {
      ...newPatient,
      id: Math.max(...patients.map((p) => p.id), 0) + 1,
    }
    setPatients([...patients, patient])
    setFilteredPatients([...patients, patient])
    setShowAddForm(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header - navigation aur title */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">Patients</h1>
                <p className="text-sm text-slate-400">Manage patient records</p>
              </div>
            </div>
            <Button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Patient
            </Button>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search bar - patient ko dhundne ke liye */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search patients by name..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Error message - agar kuch galat ho */}
        {error && (
          <Card className="bg-red-900/20 border-red-700 p-4 mb-8">
            <p className="text-red-400">{error}</p>
          </Card>
        )}

        {/* Loading state - data load ho rahe hain */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-slate-400">Loading patient data...</p>
          </div>
        )}

        {/* Patients grid - responsive layout */}
        {!loading && (
          <>
            {filteredPatients.length === 0 ? (
              <Card className="bg-slate-800 border-slate-700 p-12 text-center">
                <p className="text-slate-400 text-lg">
                  {searchQuery ? "No patients found matching your search" : "No patients available"}
                </p>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPatients.map((patient) => (
                  <PatientCard key={patient.id} patient={patient} onViewDetails={handleViewDetails} />
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Patient details modal - details dekhne ke liye */}
      {showModal && selectedPatient && <PatientModal patient={selectedPatient} onClose={() => setShowModal(false)} />}

      {/* Add patient form modal - naya patient add karne ke liye */}
      {showAddForm && <AddPatientForm onAdd={handleAddPatient} onClose={() => setShowAddForm(false)} />}
    </main>
  )
}
