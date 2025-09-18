'use client'

import { useState, useMemo } from 'react'
import { Species } from '@/types/species'
import { CompatibilityEngine } from '@/lib/compatibility'
import { getSpeciesById } from '@/data/species'
import SpeciesCard from './SpeciesCard'

interface TankMateRecommendationsProps {
  selectedSpecies: string[]
  maxRecommendations?: number
  showCautionary?: boolean
}

export default function TankMateRecommendations({
  selectedSpecies,
  maxRecommendations = 8,
  showCautionary = true
}: TankMateRecommendationsProps) {
  const [activeTab, setActiveTab] = useState<'compatible' | 'caution'>('compatible')

  const recommendations = useMemo(() => {
    if (selectedSpecies.length === 0) return { compatible: [], caution: [] }

    // Get species that are compatible with ALL selected species
    const compatibleSpecies = CompatibilityEngine.filterByCompatibility(selectedSpecies, 'Y')
    const cautionSpecies = CompatibilityEngine.filterByCompatibility(selectedSpecies, 'C')
      .filter(species => !compatibleSpecies.find(c => c.id === species.id))

    return {
      compatible: compatibleSpecies.slice(0, maxRecommendations),
      caution: cautionSpecies.slice(0, maxRecommendations)
    }
  }, [selectedSpecies, maxRecommendations])

  const getRecommendationScore = (speciesId: string): number => {
    if (selectedSpecies.length === 0) return 0
    
    const ratings: number[] = selectedSpecies.map(selectedId => {
      const check = CompatibilityEngine.checkPairCompatibility(selectedId, speciesId)
      switch (check.rating) {
        case 'Y': return 1
        case 'C': return 0.5
        case 'N': return 0
        default: return 0
      }
    })

    const total = ratings.reduce((sum, rating) => sum + rating, 0)
    return Math.round((total / ratings.length) * 100)
  }

  if (selectedSpecies.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Tank Mate Recommendations
        </h3>
        <div className="text-center py-8 text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p>Select fish species to get tank mate recommendations</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Tank Mate Recommendations
        </h3>
        <div className="text-sm text-gray-500">
          Based on {selectedSpecies.length} selected species
        </div>
      </div>

      {/* Tab Navigation */}
      {showCautionary && (
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('compatible')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'compatible'
                ? 'bg-white text-green-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Compatible ({recommendations.compatible.length})</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('caution')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'caution'
                ? 'bg-white text-yellow-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span>Caution ({recommendations.caution.length})</span>
            </div>
          </button>
        </div>
      )}

      {/* Selected Species Summary */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-gray-900 mb-2">Current Selection:</h4>
        <div className="flex flex-wrap gap-2">
          {selectedSpecies.map(speciesId => {
            const species = getSpeciesById(speciesId)
            return species ? (
              <span
                key={speciesId}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-aqua-100 text-aqua-800 border border-aqua-200"
              >
                {species.name}
              </span>
            ) : null
          })}
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="space-y-4">
        {activeTab === 'compatible' && (
          <>
            {recommendations.compatible.length > 0 ? (
              <>
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-green-800">
                    Fully Compatible Species
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendations.compatible.map(species => (
                    <div key={species.id} className="relative">
                      <SpeciesCard
                        species={species}
                        showCompatibility={true}
                        compatibilityRating="Y"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {getRecommendationScore(species.id)}%
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-4.146-.832-5.657-2.343" />
                </svg>
                <p>No fully compatible species found for this combination</p>
                <p className="text-sm mt-1">Try the Caution tab for species that might work with careful planning</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'caution' && showCautionary && (
          <>
            {recommendations.caution.length > 0 ? (
              <>
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-yellow-800">
                    Compatible with Caution
                  </span>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Caution Required:</strong> These species may be compatible depending on tank size, 
                    individual temperament, and careful setup. Research thoroughly before mixing.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendations.caution.map(species => (
                    <div key={species.id} className="relative">
                      <SpeciesCard
                        species={species}
                        showCompatibility={true}
                        compatibilityRating="C"
                      />
                      <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {getRecommendationScore(species.id)}%
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <p>No cautionary species found for this combination</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Tips Section */}
      {recommendations.compatible.length > 0 || recommendations.caution.length > 0 ? (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">💡 Tank Mate Tips</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Consider adult size when planning tank space</p>
            <p>• Research specific water parameter requirements</p>
            <p>• Introduce new fish gradually to reduce stress</p>
            <p>• Monitor behavior closely during the first weeks</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}