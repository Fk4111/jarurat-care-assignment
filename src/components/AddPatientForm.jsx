"use client"

import { useState } from "react"

// (Form to add new patient)
export default function AddPatientForm({ onAddPatient, onCancel }) {
  // (Form data state)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    email: "",
    disease: "",
    bloodType: "",
    address: "",
  })

  // (Input change handler)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // (Form submit handler)
  const handleSubmit = (e) => {
    e.preventDefault()

    // form validation check krne ke liye ke sare fields bhare hain ya nhi(Validation - check if all fields are filled)
    if (!formData.name || !formData.age || !formData.contact || !formData.email || !formData.disease) {
      alert("Please fill all required fields")
      return
    }

    //  (Add new patient)
    onAddPatient(formData)

    // (Reset form)
    setFormData({
      name: "",
      age: "",
      contact: "",
      email: "",
      disease: "",
      bloodType: "",
      address: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6">Add New Patient</h3>

      {/*  (Grid layout - 2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* (Name input) */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* (Age input) */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/*  (Contact input) */}
        <input
          type="tel"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* (Email input) */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* (Disease input) */}
        <input
          type="text"
          name="disease"
          placeholder="Disease"
          value={formData.disease}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* (Blood type input) */}
        <input
          type="text"
          name="bloodType"
          placeholder="Blood Type"
          value={formData.bloodType}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* (Address input - full width) */}
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/*  (Button group) */}
      <div className="flex gap-4 pt-4">
        {/* ye submit button hai (Submit button) */}
        <button
          type="submit"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Add
        </button>

        {/* (Cancel button) */}
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
