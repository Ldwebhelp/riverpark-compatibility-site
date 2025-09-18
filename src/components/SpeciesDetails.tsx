import { Species } from '@/types/species'

interface SpeciesDetailsProps {
  species: Species
}

export default function SpeciesDetails({ species }: SpeciesDetailsProps) {
  if (!species.detailedInfo) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500 text-center">
          Detailed information not available for this species.
        </p>
      </div>
    )
  }

  const { detailedInfo } = species

  const getCareColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Advanced':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <svg className="w-6 h-6 text-coral-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H6a1 1 0 110-2V4zm2 0v10h8V4H6z" clipRule="evenodd" />
        </svg>
        <h3 className="text-2xl font-semibold text-gray-900">
          Species Details
        </h3>
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          {detailedInfo.description}
        </p>
      </div>

      {/* Care Level Badge */}
      <div className="mb-6">
        <span className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium border ${getCareColor(detailedInfo.careLevel)}`}>
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
          </svg>
          {detailedInfo.careLevel} Care Level
        </span>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
            Basic Information
          </h4>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600">Size</span>
              <span className="text-gray-900">{detailedInfo.size}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600">Temperament</span>
              <span className="text-gray-900">{detailedInfo.temperament}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600">Diet</span>
              <span className="text-gray-900">{detailedInfo.diet}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600">Lifespan</span>
              <span className="text-gray-900">{detailedInfo.lifespan}</span>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-gray-600">Tank Size</span>
              <span className="text-gray-900">{detailedInfo.tankSize}</span>
            </div>
          </div>
        </div>

        {/* Water Parameters */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
            Water Parameters
          </h4>
          
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-blue-800">Temperature</span>
              </div>
              <span className="text-blue-900 text-lg font-semibold">
                {detailedInfo.waterParams.temperature}
              </span>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-purple-800">pH Level</span>
              </div>
              <span className="text-purple-900 text-lg font-semibold">
                {detailedInfo.waterParams.ph}
              </span>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-gray-700">Hardness</span>
              </div>
              <span className="text-gray-900 text-lg font-semibold">
                {detailedInfo.waterParams.hardness}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}