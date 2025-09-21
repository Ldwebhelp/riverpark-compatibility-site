'use client'

import { useState, useEffect } from 'react'
import { IntelligenceEngine, CompatibilityEvaluation } from '@/lib/intelligenceEngine'

interface CompatibilityEvaluatorProps {
  speciesIds: string[]
  onEvaluationChange?: (evaluation: CompatibilityEvaluation) => void
}

export default function CompatibilityEvaluator({ 
  speciesIds, 
  onEvaluationChange 
}: CompatibilityEvaluatorProps) {
  const [evaluation, setEvaluation] = useState<CompatibilityEvaluation | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    if (speciesIds.length === 0) {
      console.warn('No species provided for compatibility evaluation.');
      setEvaluation(null);
      return;
    }

    const newEvaluation = IntelligenceEngine.evaluateCompatibility(speciesIds);
    setEvaluation(newEvaluation);
    onEvaluationChange?.(newEvaluation);
  }, [speciesIds, onEvaluationChange])

  if (!evaluation?.status) {
    console.warn('Evaluation status is missing or invalid.');
    return null
  }

  const getStatusColor = (status: string) => {
    if (status.includes('✅')) return 'text-green-700 bg-green-50 border-green-200'
    if (status.includes('⚠️')) return 'text-yellow-700 bg-yellow-50 border-yellow-200'
    if (status.includes('❌')) return 'text-red-700 bg-red-50 border-red-200'
    return 'text-gray-700 bg-gray-50 border-gray-200'
  }

  const getStatusIcon = (status: string) => {
    if (status.includes('✅')) {
      return (
        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
    if (status.includes('⚠️')) {
      return (
        <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      )
    }
    if (status.includes('❌')) {
      return (
        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L10 10.414l1.293-1.293a1 1 0 011.414 1.414L11.414 12l1.293 1.293a1 1 0 01-1.414 1.414L10 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L9.586 12 8.293 10.707a1 1 0 011.414-1.414L10 10.586l1.293-1.293z" clipRule="evenodd" />
        </svg>
      )
    }
    return null
  }

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Y': return 'bg-green-100 text-green-800'
      case 'C': return 'bg-yellow-100 text-yellow-800'
      case 'N': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRatingText = (rating: string) => {
    switch (rating) {
      case 'Y': return '✅ Compatible'
      case 'C': return '⚠️ Caution'
      case 'N': return '❌ Incompatible'
      default: return 'Unknown'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md border p-6">
      {/* Header with Overall Status */}
      <div className={`rounded-lg border p-4 mb-6 ${getStatusColor(evaluation.status)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {getStatusIcon(evaluation.status)}
            <div>
              <h3 className="text-lg font-semibold">
                {evaluation.status}
              </h3>
              <p className="text-sm opacity-80">
                Compatibility Score: {evaluation.score}%
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">
              {evaluation.score}%
            </div>
            <div className="text-xs opacity-80">
              {evaluation.summary.totalPairs} pairs evaluated
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="text-2xl font-bold text-green-600">
            {evaluation.summary.compatible}
          </div>
          <div className="text-sm text-green-700">Compatible</div>
        </div>
        <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="text-2xl font-bold text-yellow-600">
            {evaluation.summary.caution}
          </div>
          <div className="text-sm text-yellow-700">Caution</div>
        </div>
        <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
          <div className="text-2xl font-bold text-red-600">
            {evaluation.summary.incompatible}
          </div>
          <div className="text-sm text-red-700">Incompatible</div>
        </div>
      </div>

      {/* Pairwise Results Toggle */}
      {evaluation.pairwiseResults.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium text-gray-900">
              Detailed Pairwise Analysis ({evaluation.pairwiseResults.length} pairs)
            </span>
            <svg 
              className={`w-5 h-5 text-gray-600 transition-transform ${showDetails ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showDetails && (
            <div className="mt-4 space-y-2">
              {evaluation.pairwiseResults.map((result, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <span className="font-medium text-gray-900">
                      {result.displayName1 || 'Unknown'}
                    </span>
                    <span className="mx-2 text-gray-500">+</span>
                    <span className="font-medium text-gray-900">
                      {result.displayName2 || 'Unknown'}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(result.rating)}`}>
                    {getRatingText(result.rating)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Recommendations */}
      {evaluation.recommendations.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">
            🎯 Recommendations
          </h4>
          <div className="space-y-2">
            {evaluation.recommendations.map((recommendation, index) => (
              <div 
                key={index}
                className="flex items-start p-3 bg-blue-50 border border-blue-200 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-blue-800 text-sm leading-relaxed">
                  {recommendation || 'No recommendation available.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex space-x-3">
          {evaluation.status.includes('❌') && (
            <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
              Resolve Conflicts
            </button>
          )}
          {evaluation.status.includes('⚠️') && (
            <button className="flex-1 bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium">
              View Caution Guidelines
            </button>
          )}
          {evaluation.status.includes('✅') && (
            <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              Build Tank Setup
            </button>
          )}
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
            Save Evaluation
          </button>
        </div>
      </div>
    </div>
  )
}