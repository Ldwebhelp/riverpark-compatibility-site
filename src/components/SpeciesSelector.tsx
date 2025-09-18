'use client'

import { useState, useMemo } from 'react'
import { Species } from '@/types/species'
import { speciesData } from '@/data/species'
import { CompatibilityEngine } from '@/lib/compatibility'
import SpeciesCard from './SpeciesCard'

interface SpeciesSelectorProps {
  selectedSpecies: string[]
  onSelectionChange: (selectedIds: string[]) => void
  maxSelection?: number
  showCompatibilityFilter?: boolean
}

export default function SpeciesSelector({
  selectedSpecies,
  onSelectionChange,
  maxSelection = 10,
  showCompatibilityFilter = true
}: SpeciesSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [compatibilityFilter, setCompatibilityFilter] = useState<'all' | 'compatible' | 'caution'>('all')

  const categories = useMemo(() => {
    const cats = new Set(speciesData.map(s => s.category))
    return Array.from(cats).sort()
  }, [])

  const filteredSpecies = useMemo(() => {
    let filtered = speciesData

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(species =>
        species.name.toLowerCase().includes(query) ||
        species.category.toLowerCase().includes(query) ||
        (species.scientificName && species.scientificName.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(species => species.category === categoryFilter)
    }

    // Compatibility filter
    if (showCompatibilityFilter && selectedSpecies.length > 0 && compatibilityFilter !== 'all') {
      if (compatibilityFilter === 'compatible') {
        filtered = CompatibilityEngine.filterByCompatibility(selectedSpecies, 'Y')
      } else if (compatibilityFilter === 'caution') {
        filtered = CompatibilityEngine.filterByCompatibility(selectedSpecies, 'Y,C')
      }
    }

    return filtered
  }, [searchQuery, categoryFilter, compatibilityFilter, selectedSpecies, showCompatibilityFilter])

  const handleSpeciesSelect = (speciesId: string) => {
    if (selectedSpecies.includes(speciesId)) {
      // Remove from selection
      onSelectionChange(selectedSpecies.filter(id => id !== speciesId))
    } else if (selectedSpecies.length < maxSelection) {
      // Add to selection
      onSelectionChange([...selectedSpecies, speciesId])
    }
  }

  const getCompatibilityRating = (speciesId: string) => {
    if (selectedSpecies.length === 0) return undefined
    
    // Check compatibility with all selected species
    const ratings = selectedSpecies.map(selectedId => {
      if (selectedId === speciesId) return 'Y'
      const check = CompatibilityEngine.checkPairCompatibility(selectedId, speciesId)
      return check.rating
    })

    // Return worst rating
    if (ratings.includes('N')) return 'N'
    if (ratings.includes('C')) return 'C'
    return 'Y'
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search species..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {showCompatibilityFilter && selectedSpecies.length > 0 && (
            <div>
              <label htmlFor="compatibility" className="block text-sm font-medium text-gray-700 mb-1">
                Compatibility
              </label>
              <select
                id="compatibility"
                value={compatibilityFilter}
                onChange={(e) => setCompatibilityFilter(e.target.value as 'all' | 'compatible' | 'caution')}
                className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500"
              >
                <option value="all">All Species</option>
                <option value="compatible">Compatible Only</option>
                <option value="caution">Compatible + Caution</option>
              </select>
            </div>
          )}
        </div>

        {/* Selection Summary */}
        {selectedSpecies.length > 0 && (
          <div className="bg-aqua-50 border border-aqua-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-aqua-900">
                Selected Species ({selectedSpecies.length}/{maxSelection})
              </h3>
              <button
                onClick={() => onSelectionChange([])}
                className="text-sm text-aqua-600 hover:text-aqua-800"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedSpecies.map(id => {
                const species = speciesData.find(s => s.id === id)
                return species ? (
                  <span
                    key={id}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-aqua-100 text-aqua-800"
                  >
                    {species.name}
                    <button
                      onClick={() => handleSpeciesSelect(id)}
                      className="ml-2 hover:text-aqua-600"
                    >
                      ×
                    </button>
                  </span>
                ) : null
              })}
            </div>
          </div>
        )}
      </div>

      {/* Species Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSpecies.map(species => (
          <SpeciesCard
            key={species.id}
            species={species}
            isSelected={selectedSpecies.includes(species.id)}
            onSelect={handleSpeciesSelect}
            showCompatibility={selectedSpecies.length > 0 && !selectedSpecies.includes(species.id)}
            compatibilityRating={getCompatibilityRating(species.id)}
          />
        ))}
      </div>

      {filteredSpecies.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No species found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('')
              setCategoryFilter('all')
              setCompatibilityFilter('all')
            }}
            className="mt-2 text-aqua-600 hover:text-aqua-800"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}