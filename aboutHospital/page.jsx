// About page - company ke baare mein information
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">About Jarurat Care</h1>

        <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-slate-300 leading-relaxed">
            Jarurat Care is dedicated to providing efficient and secure patient record management solutions. We believe
            in leveraging technology to improve healthcare delivery and patient care outcomes.
          </p>
        </Card>

        <Card className="bg-slate-800 border-slate-700 p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
          <ul className="text-slate-300 space-y-3">
            <li>✓ Comprehensive patient record management</li>
            <li>✓ Advanced search and filtering capabilities</li>
            <li>✓ Secure data storage and management</li>
            <li>✓ Responsive design for all devices</li>
            <li>✓ Easy-to-use interface</li>
          </ul>
        </Card>
      </section>
    </main>
  )
}
