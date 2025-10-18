"use client"

// (Patient card component - displays patient info)
export default function PatientCard({ patient, onViewDetails }) {
  return (
    <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition cursor-pointer border border-slate-600">
      {/* (Patient name) */}
      <h3 className="text-xl font-bold text-white mb-3">{patient.name}</h3>

      {/* (Patient information) */}
      <div className="space-y-2 mb-4 text-gray-300">
        {/*  (Age) */}
        <p className="flex justify-between">
          <span className="font-semibold"> Age:</span>
          <span>{patient.age} Age</span>
        </p>

        {/* Contact */}
        <p className="flex justify-between">
          <span className="font-semibold"> Contact:</span>
          <span>{patient.contact}</span>
        </p>

        {/* Email */}
        <p className="flex justify-between">
          <span className="font-semibold"> Email:</span>
          <span className="text-blue-400">{patient.email}</span>
        </p>

        {/*  (Disease) */}
        <p className="flex justify-between">
          <span className="font-semibold"> Disease:</span>
          <span className="text-red-400">{patient.disease}</span>
        </p>

        {/*  (Last visit) */}
        <p className="flex justify-between">
          <span className="font-semibold">Last Visit:</span>
          <span>{patient.lastVisit}</span>
        </p>
      </div>

      {/* View details button */}
      <button
        onClick={onViewDetails}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
      >
        View Details
      </button>
    </div>
  )
}
