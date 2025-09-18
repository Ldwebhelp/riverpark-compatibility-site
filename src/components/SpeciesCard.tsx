import { Species } from '@/types/species'

interface SpeciesCardProps {
  species: Species
  isSelected?: boolean
  onSelect?: (speciesId: string) => void
  showCompatibility?: boolean
  compatibilityRating?: 'Y' | 'N' | 'C'
}

export default function SpeciesCard({ 
  species, 
  isSelected = false, 
  onSelect,
  showCompatibility = false,
  compatibilityRating
}: SpeciesCardProps) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(species.id)
    }
  }

  const getCompatibilityColor = (rating: 'Y' | 'N' | 'C') => {
    switch (rating) {
      case 'Y':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'C':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'N':
        return 'bg-red-100 text-red-800 border-red-200'
    }
  }

  const getCompatibilityText = (rating: 'Y' | 'N' | 'C') => {
    switch (rating) {
      case 'Y':
        return 'Compatible'
      case 'C':
        return 'Caution'
      case 'N':
        return 'Not Compatible'
    }
  }

  return (
    <div
      className={`
        relative bg-white rounded-lg shadow-md border-2 transition-all duration-200 
        ${isSelected ? 'border-aqua-500 shadow-lg' : 'border-gray-200 hover:border-aqua-300'} 
        ${onSelect ? 'cursor-pointer hover:shadow-lg' : ''}
      `}
      onClick={handleClick}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(e) => {
        if (onSelect && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      {showCompatibility && compatibilityRating && (
        <div className="absolute top-2 right-2 z-10">
          <span className={`
            inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border
            ${getCompatibilityColor(compatibilityRating)}
          `}>
            {getCompatibilityText(compatibilityRating)}
          </span>
        </div>
      )}

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              {species.name}
            </h3>
            {species.scientificName && (
              <p className="text-sm text-gray-500 italic mb-2">
                {species.scientificName}
              </p>
            )}
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {species.category}
            </span>
          </div>
        </div>

        {species.detailedInfo && (
          <div className="mt-3 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Size:</span>
              {species.detailedInfo.size}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Care Level:</span>
              <span className={`
                px-2 py-1 rounded text-xs font-medium
                ${species.detailedInfo.careLevel === 'Beginner' ? 'bg-green-100 text-green-800' : 
                  species.detailedInfo.careLevel === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'}
              `}>
                {species.detailedInfo.careLevel}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Temperament:</span>
              {species.detailedInfo.temperament}
            </div>
          </div>
        )}

        {isSelected && (
          <div className="absolute top-2 left-2">
            <div className="w-6 h-6 bg-aqua-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}