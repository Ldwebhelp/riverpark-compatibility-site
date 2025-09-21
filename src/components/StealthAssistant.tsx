'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { Species } from '@/types/species'
import { Product, ProductCategory } from '@/types/product'
import { getSpeciesById } from '@/data/species'
import { ProductRecommendationEngine } from '@/data/products'

interface StealthAssistantState {
  selectedSpecies: string[]
  tankSize?: number
  browsedProducts: string[]
  cartItems: string[]
  currentPage: string
  interests: string[]
  setupProgress: {
    hasSpecies: boolean
    hasTankSize: boolean
    hasEssentials: boolean
  }
}

interface StealthSuggestion {
  id: string
  type: 'species' | 'product' | 'compatibility' | 'setup'
  priority: 'high' | 'medium' | 'low'
  title: string
  message: string
  action?: {
    label: string
    onClick: () => void
  }
  dismissible: boolean
  context: string
}

interface StealthAssistantContextType {
  state: StealthAssistantState
  updateState: (updates: Partial<StealthAssistantState>) => void
  getSuggestions: () => StealthSuggestion[]
  dismissSuggestion: (id: string) => void
  isVisible: boolean
  toggleVisibility: () => void
}

const StealthAssistantContext = createContext<StealthAssistantContextType | null>(null)

export function StealthAssistantProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StealthAssistantState>({
    selectedSpecies: [],
    browsedProducts: [],
    cartItems: [],
    currentPage: '/',
    interests: [],
    setupProgress: {
      hasSpecies: false,
      hasTankSize: false,
      hasEssentials: false
    }
  })

  const [dismissedSuggestions, setDismissedSuggestions] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const updateState = (updates: Partial<StealthAssistantState>) => {
    setState(prev => {
      const newState = { ...prev, ...updates }
      
      // Ensure cartItems is always defined
      newState.cartItems = newState.cartItems || [];

      // Auto-update setup progress
      newState.setupProgress = {
        hasSpecies: newState.selectedSpecies.length > 0,
        hasTankSize: !!newState.tankSize,
        hasEssentials: newState.cartItems.some(item => 
          ['tank', 'filter', 'heater'].some(essential => 
            item.toLowerCase().includes(essential)
          )
        )
      }

      return newState
    })
  }

  const getSuggestions = (): StealthSuggestion[] => {
    const suggestions: StealthSuggestion[] = []

    // Smart Product Page Suggestions
    if (state.currentPage.includes('/products/') || state.currentPage.includes('/species/')) {
      suggestions.push(...getSmartProductSuggestions())
    }

    // Setup Progress Suggestions
    suggestions.push(...getSetupProgressSuggestions())

    // Cart Review Suggestions
    if (state.cartItems.length > 0) {
      suggestions.push(...getCartReviewSuggestions())
    }

    // Species Compatibility Suggestions
    if (state.selectedSpecies.length > 0) {
      suggestions.push(...getCompatibilitySuggestions())
    }

    // Browse Enhancement Suggestions
    suggestions.push(...getBrowseEnhancementSuggestions())

    // Filter out dismissed suggestions
    return suggestions.filter(s => !dismissedSuggestions.includes(s.id))
  }

  const getSmartProductSuggestions = (): StealthSuggestion[] => {
    const suggestions: StealthSuggestion[] = []

    if (state.selectedSpecies.includes('discus')) {
      suggestions.push({
        id: 'discus-tank-planning',
        type: 'product',
        priority: 'high',
        title: 'Planning a Discus tank?',
        message: 'You may also need a larger heater, soft water conditioner, and high-quality protein food.',
        action: {
          label: 'See Discus Essentials',
          onClick: () => {
            // Navigate to discus-specific products
            console.log('Navigate to discus products')
          }
        },
        dismissible: true,
        context: 'product-page'
      })
    }

    if (state.selectedSpecies.includes('malawian-cichlids')) {
      suggestions.push({
        id: 'cichlid-tank-planning',
        type: 'product',
        priority: 'medium',
        title: 'Malawian Cichlid Setup',
        message: 'Consider aragonite substrate and cave decorations for territorial hiding spots.',
        action: {
          label: 'View Cichlid Products',
          onClick: () => console.log('Navigate to cichlid products')
        },
        dismissible: true,
        context: 'product-page'
      })
    }

    return suggestions
  }

  const getSetupProgressSuggestions = (): StealthSuggestion[] => {
    const suggestions: StealthSuggestion[] = []

    if (!state.setupProgress.hasSpecies) {
      suggestions.push({
        id: 'choose-species-first',
        type: 'setup',
        priority: 'high',
        title: 'Start Your Aquarium Journey',
        message: 'Choose your fish species first to get personalized recommendations.',
        action: {
          label: 'Browse Species',
          onClick: () => console.log('Navigate to species')
        },
        dismissible: false,
        context: 'setup-guidance'
      })
    }

    if (state.setupProgress.hasSpecies && !state.setupProgress.hasTankSize) {
      suggestions.push({
        id: 'set-tank-size',
        type: 'setup',
        priority: 'high',
        title: 'What size tank?',
        message: 'Set your tank size to see compatible equipment and accurate recommendations.',
        action: {
          label: 'Tank Builder',
          onClick: () => console.log('Navigate to tank builder')
        },
        dismissible: true,
        context: 'setup-guidance'
      })
    }

    return suggestions
  }

  const getCartReviewSuggestions = (): StealthSuggestion[] => {
    const suggestions: StealthSuggestion[] = []
    const essentialItems = ['tank', 'filter', 'heater', 'food']
    const missingEssentials = essentialItems.filter(item =>
      !state.cartItems.some(cartItem => 
        cartItem.toLowerCase().includes(item)
      )
    )

    if (missingEssentials.length > 0) {
      suggestions.push({
        id: 'cart-missing-essentials',
        type: 'product',
        priority: 'high',
        title: 'Missing Essential Items',
        message: `You're missing: ${missingEssentials.join(', ')}`,
        action: {
          label: 'Add Missing Items',
          onClick: () => console.log('Show missing essentials')
        },
        dismissible: true,
        context: 'cart-review'
      })
    }

    // Tank size compatibility check
    if (state.tankSize && state.cartItems.length > 0) {
      suggestions.push({
        id: 'cart-compatibility-check',
        type: 'compatibility',
        priority: 'medium',
        title: 'Equipment Compatibility',
        message: 'Let me verify all items are suitable for your tank size.',
        action: {
          label: 'Check Compatibility',
          onClick: () => console.log('Check cart compatibility')
        },
        dismissible: true,
        context: 'cart-review'
      })
    }

    return suggestions
  }

  const getCompatibilitySuggestions = (): StealthSuggestion[] => {
    const suggestions: StealthSuggestion[] = []

    if (state.selectedSpecies.length >= 2) {
      suggestions.push({
        id: 'compatibility-analysis',
        type: 'compatibility',
        priority: 'medium',
        title: 'Check Species Compatibility',
        message: `Verify that your ${state.selectedSpecies.length} chosen species will get along.`,
        action: {
          label: 'Run Compatibility Check',
          onClick: () => console.log('Navigate to compatibility checker')
        },
        dismissible: true,
        context: 'species-guidance'
      })
    }

    // Specific species warnings
    if (state.selectedSpecies.includes('bettas') && state.selectedSpecies.length > 1) {
      suggestions.push({
        id: 'betta-compatibility-warning',
        type: 'compatibility',
        priority: 'high',
        title: 'Betta Compatibility Alert',
        message: 'Bettas can be aggressive. Double-check tank mate compatibility.',
        action: {
          label: 'Check Betta Mates',
          onClick: () => console.log('Check betta compatibility')
        },
        dismissible: true,
        context: 'species-warning'
      })
    }

    return suggestions
  }

  const getBrowseEnhancementSuggestions = (): StealthSuggestion[] => {
    const suggestions: StealthSuggestion[] = []

    // Category filter enhancement
    if (state.selectedSpecies.length > 0 && state.currentPage.includes('/products')) {
      const primarySpecies = getSpeciesById(state.selectedSpecies[0])
      if (primarySpecies) {
        suggestions.push({
          id: 'enhanced-filtering',
          type: 'product',
          priority: 'low',
          title: 'Smart Filtering Available',
          message: `Show items suitable for: ${primarySpecies.name}`,
          action: {
            label: 'Apply Species Filter',
            onClick: () => console.log('Apply species filter')
          },
          dismissible: true,
          context: 'browse-enhancement'
        })
      }
    }

    return suggestions
  }

  const dismissSuggestion = (id: string) => {
    setDismissedSuggestions(prev => [...prev, id])
  }

  const toggleVisibility = () => {
    setIsVisible(prev => !prev)
  }

  // Auto-show assistant when there are high-priority suggestions
  useEffect(() => {
    const highPrioritySuggestions = getSuggestions().filter(s => s.priority === 'high')
    if (highPrioritySuggestions.length > 0 && !isVisible) {
      setIsVisible(true)
    }
  }, [state])

  return (
    <StealthAssistantContext.Provider value={{
      state,
      updateState,
      getSuggestions,
      dismissSuggestion,
      isVisible,
      toggleVisibility
    }}>
      {children}
    </StealthAssistantContext.Provider>
  )
}

export function useStealthAssistant() {
  const context = useContext(StealthAssistantContext)
  if (!context) {
    throw new Error('useStealthAssistant must be used within StealthAssistantProvider')
  }
  return context
}

export default function StealthAssistant() {
  const { 
    getSuggestions, 
    dismissSuggestion, 
    isVisible, 
    toggleVisibility,
    state 
  } = useStealthAssistant()

  const suggestions = getSuggestions()
  const highPrioritySuggestions = suggestions.filter(s => s.priority === 'high')
  const mediumPrioritySuggestions = suggestions.filter(s => s.priority === 'medium')

  if (!isVisible && suggestions.length === 0) {
    return null
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={toggleVisibility}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
          isVisible ? 'bg-gray-600' : 'bg-aqua-600'
        } text-white hover:scale-105`}
      >
        {isVisible ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {highPrioritySuggestions.length > 0 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </div>
        )}
      </button>

      {/* Assistant Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-6 z-40 w-80 max-h-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-aqua-600 to-blue-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Smart Assistant</span>
              </div>
              <button
                onClick={toggleVisibility}
                className="text-white hover:text-gray-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-4 max-h-80 overflow-y-auto">
            {/* Setup Progress */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Setup Progress</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${state.setupProgress.hasSpecies ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span className="text-sm text-gray-600">
                    Species Selected ({state.selectedSpecies.length})
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${state.setupProgress.hasTankSize ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span className="text-sm text-gray-600">
                    Tank Size {state.tankSize ? `(${state.tankSize} gal)` : 'Not Set'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${state.setupProgress.hasEssentials ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span className="text-sm text-gray-600">
                    Essential Equipment ({state.cartItems.length} items)
                  </span>
                </div>
              </div>
            </div>

            {/* High Priority Suggestions */}
            {highPrioritySuggestions.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-red-700 mb-2">Priority Suggestions</h4>
                <div className="space-y-2">
                  {highPrioritySuggestions.map(suggestion => (
                    <SuggestionCard 
                      key={suggestion.id} 
                      suggestion={suggestion} 
                      onDismiss={dismissSuggestion}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Medium Priority Suggestions */}
            {mediumPrioritySuggestions.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-blue-700 mb-2">Helpful Tips</h4>
                <div className="space-y-2">
                  {mediumPrioritySuggestions.slice(0, 2).map(suggestion => (
                    <SuggestionCard 
                      key={suggestion.id} 
                      suggestion={suggestion} 
                      onDismiss={dismissSuggestion}
                    />
                  ))}
                </div>
              </div>
            )}

            {suggestions.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                <svg className="w-8 h-8 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm">You're all set! 🎉</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

interface SuggestionCardProps {
  suggestion: StealthSuggestion
  onDismiss: (id: string) => void
}

function SuggestionCard({ suggestion, onDismiss }: SuggestionCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-red-200 bg-red-50'
      case 'medium':
        return 'border-blue-200 bg-blue-50'
      case 'low':
        return 'border-gray-200 bg-gray-50'
      default:
        return 'border-gray-200 bg-gray-50'
    }
  }

  return (
    <div className={`p-3 rounded-lg border ${getPriorityColor(suggestion.priority)}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h5 className="font-medium text-gray-900 text-sm mb-1">
            {suggestion.title}
          </h5>
          <p className="text-gray-600 text-xs mb-2">
            {suggestion.message}
          </p>
          {suggestion.action && (
            <button
              onClick={suggestion.action.onClick}
              className="text-aqua-600 hover:text-aqua-800 text-xs font-medium"
            >
              {suggestion.action.label} →
            </button>
          )}
        </div>
        {suggestion.dismissible && (
          <button
            onClick={() => onDismiss(suggestion.id)}
            className="text-gray-400 hover:text-gray-600 ml-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}