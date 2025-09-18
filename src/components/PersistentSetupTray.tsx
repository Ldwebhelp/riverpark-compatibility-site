'use client'

import { useState } from 'react'
import { useStealthAssistant } from './StealthAssistant'
import { getSpeciesById } from '@/data/species'

export default function PersistentSetupTray() {
  const { state, updateState } = useStealthAssistant()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const progress = {
    species: state.selectedSpecies.length,
    tankSize: state.tankSize,
    equipment: state.cartItems.length
  }

  const hasAnyProgress = progress.species > 0 || progress.tankSize || progress.equipment > 0

  if (!hasAnyProgress || isMinimized) {
    return (
      <>
        {isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            className="fixed bottom-6 left-6 bg-aqua-600 text-white p-3 rounded-full shadow-lg hover:bg-aqua-700 transition-colors z-40"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 shadow-lg">
      {/* Compact View */}
      {!isExpanded && (
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-aqua-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-aqua-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Your Setup</span>
              </div>

              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  {progress.species} species
                </span>
                {progress.tankSize && (
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                    {progress.tankSize} gal tank
                  </span>
                )}
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-1"></span>
                  {progress.equipment} items
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsExpanded(true)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Expanded View */}
      {isExpanded && (
        <div className="px-4 py-4 max-h-60 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Your Aquarium Setup</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Selected Species */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <h4 className="font-medium text-green-800 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                Fish Species ({progress.species})
              </h4>
              {state.selectedSpecies.length > 0 ? (
                <div className="space-y-1">
                  {state.selectedSpecies.slice(0, 3).map(speciesId => {
                    const species = getSpeciesById(speciesId)
                    return species ? (
                      <div key={speciesId} className="text-sm text-green-700">
                        {species.name}
                      </div>
                    ) : null
                  })}
                  {state.selectedSpecies.length > 3 && (
                    <div className="text-xs text-green-600">
                      +{state.selectedSpecies.length - 3} more
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => window.location.href = '/species'}
                  className="text-sm text-green-600 hover:text-green-800"
                >
                  Choose species →
                </button>
              )}
            </div>

            {/* Tank Size */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 9a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Tank Size
              </h4>
              {progress.tankSize ? (
                <div className="text-sm text-blue-700 font-semibold">
                  {progress.tankSize} Gallon Tank
                </div>
              ) : (
                <button
                  onClick={() => window.location.href = '/tank-builder'}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Set tank size →
                </button>
              )}
            </div>

            {/* Equipment */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <h4 className="font-medium text-purple-800 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 9a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Equipment ({progress.equipment})
              </h4>
              {state.cartItems.length > 0 ? (
                <div className="space-y-1">
                  {state.cartItems.slice(0, 2).map((item, index) => (
                    <div key={index} className="text-sm text-purple-700">
                      {item}
                    </div>
                  ))}
                  {state.cartItems.length > 2 && (
                    <div className="text-xs text-purple-600">
                      +{state.cartItems.length - 2} more items
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => window.location.href = '/products'}
                  className="text-sm text-purple-600 hover:text-purple-800"
                >
                  Browse products →
                </button>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={() => window.location.href = '/compatibility'}
                className="flex-1 bg-aqua-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-aqua-700 transition-colors"
              >
                Check Compatibility
              </button>
              <button
                onClick={() => window.location.href = '/tank-builder'}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Complete Setup
              </button>
              <button
                onClick={() => {
                  updateState({
                    selectedSpecies: [],
                    tankSize: undefined,
                    cartItems: []
                  })
                }}
                className="text-gray-400 hover:text-gray-600 px-2"
                title="Clear setup"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}