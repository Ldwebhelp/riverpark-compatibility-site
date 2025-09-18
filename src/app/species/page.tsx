'use client'

import { useState } from 'react'
import Link from 'next/link'
import { speciesData } from '@/data/species'
import SpeciesCard from '@/components/SpeciesCard'

export default function SpeciesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [careLevelFilter, setCareLevelFilter] = useState<string>('all')

  const categories = Array.from(new Set(speciesData.map(s => s.category))).sort()
  const careLevels = Array.from(new Set(
    speciesData
      .map(s => s.detailedInfo?.careLevel)
      .filter(Boolean)
  )).sort()

  const filteredSpecies = speciesData.filter(species => {
    const matchesSearch = !searchQuery || 
      species.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      species.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (species.scientificName && species.scientificName.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = categoryFilter === 'all' || species.category === categoryFilter

    const matchesCareLevel = careLevelFilter === 'all' || 
      species.detailedInfo?.careLevel === careLevelFilter

    return matchesSearch && matchesCategory && matchesCareLevel
  })

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
                <span className="ml-1 text-gray-500 md:ml-2">Species Guide</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
          Freshwater Species Guide
        </h1>
        <p className="text-gray-600">
          Explore detailed information about freshwater aquarium fish species
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search species by name, category, or scientific name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <option value="all">All Categories ({speciesData.length})</option>
                {categories.map(category => {
                  const count = speciesData.filter(s => s.category === category).length
                  return (
                    <option key={category} value={category}>
                      {category} ({count})
                    </option>
                  )
                })}
              </select>
            </div>

            <div>
              <label htmlFor="careLevel" className="block text-sm font-medium text-gray-700 mb-1">
                Care Level
              </label>
              <select
                id="careLevel"
                value={careLevelFilter}
                onChange={(e) => setCareLevelFilter(e.target.value)}
                className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500"
              >
                <option value="all">All Levels</option>
                {careLevels.map(level => {
                  const count = speciesData.filter(s => s.detailedInfo?.careLevel === level).length
                  return (
                    <option key={level} value={level}>
                      {level} ({count})
                    </option>
                  )
                })}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchQuery('')
                  setCategoryFilter('all')
                  setCareLevelFilter('all')
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Showing {filteredSpecies.length} of {speciesData.length} species
            {searchQuery && ` matching "${searchQuery}"`}
            {categoryFilter !== 'all' && ` in ${categoryFilter}`}
            {careLevelFilter !== 'all' && ` with ${careLevelFilter} care level`}
          </p>
        </div>
      </div>

      {/* Species Grid */}
      {filteredSpecies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecies.map(species => (
            <Link key={species.id} href={`/species/${species.id}`}>
              <SpeciesCard species={species} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-4.146-.832-5.657-2.343" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No species found</h3>
          <p className="text-gray-600 mb-4">
            No species match your current search criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setCategoryFilter('all')
              setCareLevelFilter('all')
            }}
            className="bg-aqua-600 text-white px-4 py-2 rounded-md hover:bg-aqua-700 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-12 bg-gradient-to-r from-aqua-50 to-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          What would you like to do next?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/compatibility"
            className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-aqua-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-aqua-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Check Compatibility</h3>
              <p className="text-sm text-gray-600">See which species work well together</p>
            </div>
          </Link>

          <Link
            href="/tank-builder"
            className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-coral-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Build Your Tank</h3>
              <p className="text-sm text-gray-600">Plan your aquarium setup</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}