'use client'

import { useState } from 'react'
import Sidebar, { SidebarHeader, SidebarBody, SidebarFooter } from '../ui/Sidebar'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

interface FilterOptions {
  categories: string[]
  priceRange: [number, number]
  careLevel: string[]
  tempRange: string[]
  compatibility: string[]
  inStock: boolean
}

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
  onClearFilters: () => void
}

export default function FilterSidebar({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
  onClearFilters
}: FilterSidebarProps) {
  const [tempFilters, setTempFilters] = useState<FilterOptions>(filters)

  const categories = [
    'Fish Food', 'Water Conditioners', 'Filters', 'Heaters',
    'Lighting', 'Decorations', 'Plants', 'Substrate', 'Test Kits', 'Medications'
  ]

  const careLevels = ['beginner', 'intermediate', 'advanced']
  const tempRanges = ['68-72°F', '72-78°F', '78-82°F', '82-86°F']

  const handleCategoryToggle = (category: string) => {
    const newCategories = tempFilters.categories.includes(category)
      ? tempFilters.categories.filter(c => c !== category)
      : [...tempFilters.categories, category]

    setTempFilters(prev => ({ ...prev, categories: newCategories }))
  }

  const handleCareLevelToggle = (level: string) => {
    const newLevels = tempFilters.careLevel.includes(level)
      ? tempFilters.careLevel.filter(l => l !== level)
      : [...tempFilters.careLevel, level]

    setTempFilters(prev => ({ ...prev, careLevel: newLevels }))
  }

  const handleTempRangeToggle = (range: string) => {
    const newRanges = tempFilters.tempRange.includes(range)
      ? tempFilters.tempRange.filter(r => r !== range)
      : [...tempFilters.tempRange, range]

    setTempFilters(prev => ({ ...prev, tempRange: newRanges }))
  }

  const handlePriceChange = (index: number, value: number) => {
    const newRange: [number, number] = [...tempFilters.priceRange]
    newRange[index] = value
    setTempFilters(prev => ({ ...prev, priceRange: newRange }))
  }

  const applyFilters = () => {
    onFiltersChange(tempFilters)
    onClose()
  }

  const resetFilters = () => {
    setTempFilters({
      categories: [],
      priceRange: [0, 500],
      careLevel: [],
      tempRange: [],
      compatibility: [],
      inStock: false
    })
  }

  const hasActiveFilters =
    tempFilters.categories.length > 0 ||
    tempFilters.careLevel.length > 0 ||
    tempFilters.tempRange.length > 0 ||
    tempFilters.inStock ||
    tempFilters.priceRange[0] > 0 ||
    tempFilters.priceRange[1] < 500

  return (
    <Sidebar isOpen={isOpen} onClose={onClose} side="left" size="lg">
      <SidebarHeader onClose={onClose}>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-bold text-secondary-900">Filters</h2>
          {hasActiveFilters && (
            <Badge variant="primary" size="sm">
              {[
                ...tempFilters.categories,
                ...tempFilters.careLevel,
                ...tempFilters.tempRange
              ].length + (tempFilters.inStock ? 1 : 0)}
            </Badge>
          )}
        </div>
      </SidebarHeader>

      <SidebarBody>
        <div className="space-y-8">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary-50 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={tempFilters.categories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-secondary-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Price Range</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <label className="block text-sm text-secondary-600 mb-1">Min</label>
                  <input
                    type="number"
                    value={tempFilters.priceRange[0]}
                    onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    min="0"
                    max="500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-secondary-600 mb-1">Max</label>
                  <input
                    type="number"
                    value={tempFilters.priceRange[1]}
                    onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    min="0"
                    max="500"
                  />
                </div>
              </div>
              <div className="px-1">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={tempFilters.priceRange[1]}
                  onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                  className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Care Level */}
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Care Level</h3>
            <div className="flex flex-wrap gap-2">
              {careLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => handleCareLevelToggle(level)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    tempFilters.careLevel.includes(level)
                      ? 'bg-primary-100 text-primary-800 border-2 border-primary-300'
                      : 'bg-secondary-100 text-secondary-700 border-2 border-transparent hover:border-secondary-300'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Temperature Range */}
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Temperature Range</h3>
            <div className="grid grid-cols-2 gap-2">
              {tempRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => handleTempRangeToggle(range)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    tempFilters.tempRange.includes(range)
                      ? 'bg-aqua-100 text-aqua-800 border-2 border-aqua-300'
                      : 'bg-secondary-100 text-secondary-700 border-2 border-transparent hover:border-secondary-300'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* In Stock Only */}
          <div>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-secondary-200 hover:bg-secondary-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={tempFilters.inStock}
                onChange={(e) => setTempFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              />
              <div>
                <span className="font-medium text-secondary-900">In Stock Only</span>
                <p className="text-sm text-secondary-600">Show only available products</p>
              </div>
            </label>
          </div>
        </div>
      </SidebarBody>

      <SidebarFooter>
        <div className="flex gap-3 w-full">
          <Button
            variant="outline"
            onClick={resetFilters}
            className="flex-1"
          >
            Reset
          </Button>
          <Button
            onClick={applyFilters}
            className="flex-1"
          >
            Apply Filters
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}