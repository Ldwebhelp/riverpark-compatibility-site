'use client'

import { useState } from 'react'
import { CompatibilityEngine } from '@/lib/compatibility'
import SpeciesSelector from '@/components/SpeciesSelector'
import Link from 'next/link'

export default function CompatibilityPage() {
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])

  const tankScore = selectedSpecies.length > 1 
    ? CompatibilityEngine.calculateTankScore(selectedSpecies)
    : null

  const compatibilityChecks = selectedSpecies.length > 1
    ? CompatibilityEngine.checkTankCompatibility(selectedSpecies)
    : []

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'bg-green-100 border-green-200'
    if (score >= 60) return 'bg-yellow-100 border-yellow-200'
    return 'bg-red-100 border-red-200'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
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
                <span className="ml-1 text-gray-500 md:ml-2">Compatibility Checker</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
          Species Compatibility Checker
        </h1>
        <p className="text-gray-600">
          Select fish species to check their compatibility and get tank recommendations
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Species Selection */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Select Species</h2>
            <SpeciesSelector
              selectedSpecies={selectedSpecies}
              onSelectionChange={setSelectedSpecies}
              maxSelection={8}
              showCompatibilityFilter={true}
            />
          </div>
        </div>

        {/* Compatibility Results */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Compatibility Results</h2>
            
            {selectedSpecies.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p>Select fish species to see compatibility analysis</p>
              </div>
            )}

            {selectedSpecies.length === 1 && (
              <div className="text-center text-gray-500 py-8">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p>Select at least 2 species to check compatibility</p>
              </div>
            )}

            {tankScore && (
              <div className="space-y-4">
                {/* Overall Score */}
                <div className={`rounded-lg border-2 p-4 ${getScoreBackground(tankScore.score)}`}>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${getScoreColor(tankScore.score)}`}>
                      {tankScore.score}%
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      Tank Compatibility Score
                    </div>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Compatible Pairs</span>
                    <span className="text-sm font-medium text-green-600">
                      {tankScore.compatible}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Caution Required</span>
                    <span className="text-sm font-medium text-yellow-600">
                      {tankScore.cautions}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Conflicts</span>
                    <span className="text-sm font-medium text-red-600">
                      {tankScore.conflicts}
                    </span>
                  </div>
                </div>

                {/* Detailed Compatibility */}
                {compatibilityChecks.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-medium text-gray-900 mb-3">Species Pairs</h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {compatibilityChecks.map((check, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg text-sm border ${
                            check.rating === 'Y' ? 'bg-green-50 border-green-200' :
                            check.rating === 'C' ? 'bg-yellow-50 border-yellow-200' :
                            'bg-red-50 border-red-200'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="font-medium text-gray-900 text-xs">
                              {check.species1.replace('-', ' ')} + {check.species2.replace('-', ' ')}
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              check.rating === 'Y' ? 'bg-green-100 text-green-800' :
                              check.rating === 'C' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {check.rating === 'Y' ? 'Compatible' :
                               check.rating === 'C' ? 'Caution' : 'Conflict'}
                            </span>
                          </div>
                          {check.reason && (
                            <p className="text-gray-600 text-xs">{check.reason}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 space-y-2">
                  {tankScore.score >= 70 && (
                    <Link 
                      href={`/tank-builder?species=${selectedSpecies.join(',')}`}
                      className="w-full bg-aqua-600 text-white py-2 px-4 rounded-lg hover:bg-aqua-700 transition-colors text-center block"
                    >
                      Build Tank Setup
                    </Link>
                  )}
                  <Link 
                    href={`/products?species=${selectedSpecies.join(',')}`}
                    className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center block"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}