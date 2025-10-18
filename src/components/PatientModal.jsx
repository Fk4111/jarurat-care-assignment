"use client"

// Modal component - shows complete patient details
export default function PatientModal({ patient, onClose }) {
  if (!patient) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Modal container */}
      <div className="bg-slate-800 rounded-lg p-8 max-w-2xl w-full max-h-96 overflow-y-auto">
        {/* Close button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Patient Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">
            ✕
          </button>
        </div>

        {/* Complete patient information */}
        <div className="space-y-4 text-gray-300">
          {/* Name */}
          <div className="flex justify-between border-b border-slate-600 pb-2">
            <span className="font-bold text-white">Name:</span>
            <span>{patient.name}</span>
          </div>

          {/* Age */}
          <div className="flex justify-between border-b border-slate-600 pb-2">
            <span className="font-bold text-white">Age:</span>
            <span>{patient.age} years</span>
          </div>

          {/* Contact */}
          <div className="flex justify-between border-b border-slate-600 pb-2">
            <span className="font-bold text-white">Contact:</span>
            <span>{patient.contact}</span>
          </div>

          {/* Email */}
          <div className="flex justify-between border-b border-slate-600 pb-2">
            <span className="font-bold text-white">Email:</span>
            <span>{patient.email}</span>
          </div>

          {/* Disease */}
          <div className="flex justify-between border-b border-slate-600 pb-2">
            <span className="font-bold text-white">Disease:</span>
            <span className="text-red-400">{patient.disease}</span>
          </div>

          {/* Blood type */}
          <div className="flex justify-between border-b border-slate-600 pb-2">
            <span className="font-bold text-white">Blood Type:</span>
            <span>{patient.bloodType}</span>
          </div>

          {/* Address */}
          <div className="flex justify-between border-b border-slate-600 pb-2">
            <span className="font-bold text-white">Address:</span>
            <span>{patient.address}</span>
          </div>

          {/* Last visit */}
          <div className="flex justify-between">
            <span className="font-bold text-white">Last Visit:</span>
            <span>{patient.lastVisit}</span>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Close
        </button>
      </div>
    </div>
  )
}
