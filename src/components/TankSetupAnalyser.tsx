'use client'

import { useState } from 'react'
import { Species } from '@/types/species'
import { CompatibilityEngine } from '@/lib/compatibility'
import { getSpeciesById } from '@/data/species'
import SpeciesSelector from './SpeciesSelector'

interface TankSetupAnalyzerProps {
  onAnalysisComplete?: (analysis: TankAnalysisResult) => void
}

interface TankAnalysisResult {
  canAddSpecies: boolean
  overallScore: number
  conflicts: Array<{
    species1: string
    species2: string
    reason: string
  }>
  cautions: Array<{
    species1: string
    species2: string
    reason: string
  }>
  recommendations: Species[]
  tankCapacity: {
    currentLoad: number
    maxCapacity: number
    canAddMore: boolean
  }
}

export default function TankSetupAnalyzer({ onAnalysisComplete }: TankSetupAnalyzerProps) {
  const [currentSpecies, setCurrentSpecies] = useState<string[]>([])
  const [newSpecies, setNewSpecies] = useState<string>('')
  const [tankSize, setTankSize] = useState<number>(55)
  const [analysisResult, setAnalysisResult] = useState<TankAnalysisResult | null>(null)

  const analyzeTankSetup = () => {
    if (currentSpecies.length === 0) {
      console.warn('No species selected for analysis.')
      return
    }

    const allSpecies = newSpecies ? [...currentSpecies, newSpecies] : currentSpecies

    // Calculate compatibility
    const compatibilityChecks = CompatibilityEngine.checkTankCompatibility(allSpecies)
    const tankScore = CompatibilityEngine.calculateTankScore(allSpecies)
    
    // Separate conflicts and cautions
    const conflicts = compatibilityChecks
      .filter(check => check.rating === 'N')
      .map(check => ({
        species1: check.species1,
        species2: check.species2,
        reason: check.reason || 'Incompatible species'
      }))
    
    const cautions = compatibilityChecks
      .filter(check => check.rating === 'C')
      .map(check => ({
        species1: check.species1,
        species2: check.species2,
        reason: check.reason || 'Requires careful monitoring'
      }))

    // Calculate tank capacity (simplified bioload calculation)
    const estimatedBioload = allSpecies.length * 3 // Rough estimate: 3 inches per fish
    const maxCapacity = Math.floor(tankSize / 3) // 1 inch per gallon rule (conservative)
    
    // Get recommendations for compatible additions
    const recommendations = newSpecies
      ? []
      : CompatibilityEngine.filterByCompatibility(currentSpecies, 'Y')?.slice(0, 5) || []

    const result: TankAnalysisResult = {
      canAddSpecies: conflicts.length === 0,
      overallScore: tankScore.score,
      conflicts,
      cautions,
      recommendations,
      tankCapacity: {
        currentLoad: estimatedBioload,
        maxCapacity,
        canAddMore: estimatedBioload < maxCapacity
      }
    }

    setAnalysisResult(result)
    onAnalysisComplete?.(result)
  }

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
    <div className="space-y-6">
      {/* Tank Setup Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Analyze Your Tank Setup
        </h2>
        
        <div className="space-y-4">
          {/* Tank Size */}
          <div>
            <label htmlFor="tankSize" className="block text-sm font-medium text-gray-700 mb-1">
              Tank Size (Gallons)
            </label>
            <select
              id="tankSize"
              value={tankSize}
              onChange={(e) => setTankSize(Number(e.target.value))}
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500"
            >
              <option value={10}>10 Gallon</option>
              <option value={20}>20 Gallon</option>
              <option value={29}>29 Gallon</option>
              <option value={40}>40 Gallon</option>
              <option value={55}>55 Gallon</option>
              <option value={75}>75 Gallon</option>
              <option value={90}>90 Gallon</option>
              <option value={125}>125 Gallon</option>
              <option value={150}>150+ Gallon</option>
            </select>
          </div>

          {/* Current Species */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Fish in Tank
            </label>
            <SpeciesSelector
              selectedSpecies={currentSpecies}
              onSelectionChange={setCurrentSpecies}
              maxSelection={8}
              showCompatibilityFilter={false}
            />
          </div>

          {/* New Species to Add */}
          {currentSpecies.length > 0 && (
            <div>
              <label htmlFor="newSpecies" className="block text-sm font-medium text-gray-700 mb-1">
                New Species to Add (Optional)
              </label>
              <select
                id="newSpecies"
                value={newSpecies}
                onChange={(e) => setNewSpecies(e.target.value)}
                className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500"
              >
                <option value="">Select a species to add...</option>
                {CompatibilityEngine.filterByCompatibility(currentSpecies, 'Y,C')?.map(species => (
                  <option key={species.id} value={species.id}>
                    {species.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Analyze Button */}
          <button
            onClick={analyzeTankSetup}
            disabled={currentSpecies.length === 0}
            className="w-full bg-aqua-600 text-white py-3 px-4 rounded-lg hover:bg-aqua-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Analyze Tank Setup
          </button>
        </div>
      </div>

      {/* Analysis Results */}
      {analysisResult && (
        <div className="space-y-6">
          {/* Overall Score */}
          <div className={`rounded-lg border-2 p-6 ${getScoreBackground(analysisResult.overallScore)}`}>
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor(analysisResult.overallScore)}`}>
                {analysisResult.overallScore}%
              </div>
              <div className="text-sm font-medium text-gray-700 mt-1">
                Tank Compatibility Score
              </div>
              {analysisResult.canAddSpecies ? (
                <div className="text-green-700 font-medium mt-2">
                  ✓ {newSpecies ? 'Safe to add new species' : 'Current setup is compatible'}
                </div>
              ) : (
                <div className="text-red-700 font-medium mt-2">
                  ⚠ Compatibility issues detected
                </div>
              )}
            </div>
          </div>

          {/* Tank Capacity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tank Capacity Analysis</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Bioload</span>
                <span className="font-medium">
                  {analysisResult.tankCapacity.currentLoad}" of fish
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Recommended Capacity</span>
                <span className="font-medium">
                  {analysisResult.tankCapacity.maxCapacity}" maximum
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full ${
                    analysisResult.tankCapacity.currentLoad > analysisResult.tankCapacity.maxCapacity 
                      ? 'bg-red-500' 
                      : analysisResult.tankCapacity.currentLoad > analysisResult.tankCapacity.maxCapacity * 0.8
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                  }`}
                  style={{
                    width: `${Math.min(100, (analysisResult.tankCapacity.currentLoad / analysisResult.tankCapacity.maxCapacity) * 100)}%`
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {analysisResult.tankCapacity.canAddMore 
                  ? `You can add approximately ${analysisResult.tankCapacity.maxCapacity - analysisResult.tankCapacity.currentLoad}" more fish`
                  : 'Tank is at or near capacity'
                }
              </p>
            </div>
          </div>

          {/* Conflicts */}
          {analysisResult.conflicts.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">
                ⚠ Compatibility Conflicts
              </h3>
              <div className="space-y-3">
                {analysisResult.conflicts.map((conflict, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-medium text-red-800">
                          {getSpeciesById(conflict.species1)?.name || 'Unknown'} + {getSpeciesById(conflict.species2)?.name || 'Unknown'}
                        </div>
                        <div className="text-red-700 text-sm mt-1">
                          {conflict.reason}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cautions */}
          {analysisResult.cautions.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-yellow-700 mb-4">
                ⚠ Requires Careful Monitoring
              </h3>
              <div className="space-y-3">
                {analysisResult.cautions.map((caution, index) => (
                  <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-medium text-yellow-800">
                          {getSpeciesById(caution.species1)?.name || 'Unknown'} + {getSpeciesById(caution.species2)?.name || 'Unknown'}
                        </div>
                        <div className="text-yellow-700 text-sm mt-1">
                          {caution.reason}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {analysisResult.recommendations.length > 0 && analysisResult.conflicts.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-4">
                ✓ Recommended Additions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisResult.recommendations.map(species => (
                  <div key={species.id} className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="font-medium text-green-800 mb-1">
                      {species.name}
                    </div>
                    <div className="text-green-700 text-sm">
                      Compatible with all current fish
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}