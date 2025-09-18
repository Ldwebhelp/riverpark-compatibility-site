import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Riverpark Aquarium
          <span className="block text-aqua-600">Compatibility Guide</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find the perfect tank mates for your freshwater aquarium with our comprehensive species compatibility tool
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Link href="/compatibility" className="group">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-aqua-600 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-aqua-600 transition-colors">
              Check Compatibility
            </h2>
            <p className="text-gray-600">
              Select your fish species and instantly see which tank mates are compatible
            </p>
          </div>
        </Link>

        <Link href="/species" className="group">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-coral-600 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-coral-600 transition-colors">
              Species Guide
            </h2>
            <p className="text-gray-600">
              Explore detailed information about freshwater fish species and their care requirements
            </p>
          </div>
        </Link>

        <Link href="/tank-builder" className="group">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              Tank Builder
            </h2>
            <p className="text-gray-600">
              Plan your aquarium setup and get product recommendations for your tank
            </p>
          </div>
        </Link>
      </div>
    </main>
  )
}