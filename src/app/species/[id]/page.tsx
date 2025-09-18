import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getSpeciesById } from '@/data/species'
import { CompatibilityEngine } from '@/lib/compatibility'
import QuickFacts from '@/components/QuickFacts'
import SpeciesDetails from '@/components/SpeciesDetails'
import TankMateRecommendations from '@/components/TankMateRecommendations'

interface SpeciesPageProps {
  params: {
    id: string
  }
}

export default function SpeciesPage({ params }: SpeciesPageProps) {
  const species = getSpeciesById(params.id)

  if (!species) {
    notFound()
  }

  const compatibleSpecies = CompatibilityEngine.getRecommendedTankMates(species.id, 6)
  const cautionSpecies = CompatibilityEngine.getCautionaryTankMates(species.id).slice(0, 6)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 hover:text-aqua-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href="/species" className="ml-1 text-gray-700 hover:text-aqua-600 md:ml-2">
                Species Guide
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-1 text-gray-500 md:ml-2">{species.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {species.name}
            </h1>
            {species.scientificName && (
              <p className="text-xl text-gray-600 italic mb-4">
                {species.scientificName}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {species.category}
              </span>
              {species.detailedInfo?.careLevel && (
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  species.detailedInfo.careLevel === 'Beginner' ? 'bg-green-100 text-green-800' :
                  species.detailedInfo.careLevel === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {species.detailedInfo.careLevel}
                </span>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <Link
              href={`/compatibility?species=${species.id}`}
              className="bg-aqua-600 text-white px-4 py-2 rounded-lg hover:bg-aqua-700 transition-colors text-center"
            >
              Check Compatibility
            </Link>
            <Link
              href={`/tank-builder?species=${species.id}`}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-center"
            >
              Build Tank
            </Link>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Species Details */}
          <SpeciesDetails species={species} />

          {/* Tank Mate Recommendations */}
          <TankMateRecommendations 
            selectedSpecies={[species.id]}
            maxRecommendations={6}
            showCautionary={true}
          />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Facts */}
          <QuickFacts species={species} />

          {/* Compatibility Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Compatibility Summary
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Compatible Species</span>
                <span className="text-sm font-medium text-green-600">
                  {compatibleSpecies.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Requires Caution</span>
                <span className="text-sm font-medium text-yellow-600">
                  {cautionSpecies.length}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <Link
                  href={`/compatibility?species=${species.id}`}
                  className="text-sm text-aqua-600 hover:text-aqua-800 font-medium"
                >
                  View full compatibility analysis →
                </Link>
              </div>
            </div>
          </div>

          {/* Care Requirements Quick View */}
          {species.detailedInfo && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Care Requirements
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tank Size</span>
                  <span className="text-sm font-medium">{species.detailedInfo.tankSize}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Temperature</span>
                  <span className="text-sm font-medium">{species.detailedInfo.waterParams.temperature}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">pH</span>
                  <span className="text-sm font-medium">{species.detailedInfo.waterParams.ph}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Hardness</span>
                  <span className="text-sm font-medium">{species.detailedInfo.waterParams.hardness}</span>
                </div>
              </div>
            </div>
          )}

          {/* Related Actions */}
          <div className="bg-gradient-to-br from-aqua-50 to-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Related Actions
            </h3>
            <div className="space-y-2">
              <Link
                href="/species"
                className="block w-full text-left p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="font-medium text-gray-900">Browse All Species</div>
                <div className="text-sm text-gray-600">Explore other freshwater fish</div>
              </Link>
              <Link
                href={`/products?category=${species.category.toLowerCase()}`}
                className="block w-full text-left p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="font-medium text-gray-900">Shop Products</div>
                <div className="text-sm text-gray-600">Find supplies for this species</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  // Pre-generate pages for all species
  return [
    { id: 'malawian-cichlids' },
    { id: 'angelfish' },
    // Add more species IDs as needed
  ]
}