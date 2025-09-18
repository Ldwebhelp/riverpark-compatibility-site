import { Species } from '@/types/species'

interface QuickFactsProps {
  species: Species
  compact?: boolean
}

export default function QuickFacts({ species, compact = false }: QuickFactsProps) {
  if (!species.quickFacts || species.quickFacts.length === 0) {
    return null
  }

  return (
    <div className={`bg-white rounded-lg shadow-md ${compact ? 'p-4' : 'p-6'}`}>
      <div className="flex items-center mb-4">
        <svg className="w-5 h-5 text-aqua-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <h3 className={`font-semibold text-gray-900 ${compact ? 'text-lg' : 'text-xl'}`}>
          Quick Facts
        </h3>
      </div>

      <div className="grid gap-3">
        {species.quickFacts.slice(0, compact ? 5 : 10).map((fact, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 bg-aqua-500 rounded-full"></div>
            </div>
            <p className={`text-gray-700 leading-relaxed ${compact ? 'text-sm' : 'text-base'}`}>
              {fact}
            </p>
          </div>
        ))}
      </div>

      {compact && species.quickFacts.length > 5 && (
        <div className="mt-4 text-center">
          <button className="text-aqua-600 hover:text-aqua-800 text-sm font-medium">
            View all {species.quickFacts.length} facts →
          </button>
        </div>
      )}
    </div>
  )
}