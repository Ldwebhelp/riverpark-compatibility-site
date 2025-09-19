'use client'

import { useRouter } from 'next/navigation'
import ProductCard from '@/components/products/ProductCard'
import { Product } from '@/types/species'

export default function ProductsPage() {
  const router = useRouter()

  const handleProductSelect = (product: Product) => {
    router.push(`/products/${product.id}`)
  }

  // Sample products with different stock levels
  const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Premium Tropical Fish Food',
      category: 'Fish Food',
      price: 24.99,
      description: 'High-quality nutritional pellets for tropical freshwater fish',
      imageUrl: '/api/placeholder/300/300',
      compatibility: ['tropical-fish'],
      stock: 45,
      metadata: {
        compatible_with: ['Guppy', 'Tetra', 'Angel Fish'],
        temp_range: '72-82',
        care_level: 'beginner',
        tags: ['premium', 'nutritious']
      }
    },
    {
      id: '2',
      name: 'Aquarium Heater 100W',
      category: 'Heaters',
      price: 49.99,
      description: 'Reliable submersible heater for 20-30 gallon tanks',
      imageUrl: '/api/placeholder/300/300',
      compatibility: ['all-tropical'],
      stock: 3,
      metadata: {
        tank_size_min: 20,
        temp_range: '68-84',
        care_level: 'beginner',
        tags: ['reliable', 'adjustable']
      }
    },
    {
      id: '3',
      name: 'LED Aquarium Light Strip',
      category: 'Lighting',
      price: 89.99,
      description: 'Full spectrum LED lighting for planted aquariums',
      imageUrl: '/api/placeholder/300/300',
      compatibility: ['planted-tank'],
      stock: 0,
      metadata: {
        compatible_with: ['Live Plants', 'All Fish'],
        care_level: 'intermediate',
        tags: ['full-spectrum', 'energy-efficient']
      }
    },
    {
      id: '4',
      name: 'Bio Filter Media',
      category: 'Filters',
      price: 19.99,
      description: 'Biological filtration media for healthy aquarium bacteria',
      imageUrl: '/api/placeholder/300/300',
      compatibility: ['all-tanks'],
      stock: 127,
      metadata: {
        bioload: 'high',
        care_level: 'beginner',
        tags: ['biological', 'long-lasting']
      }
    },
    {
      id: '5',
      name: 'Driftwood Centerpiece',
      category: 'Decorations',
      price: 34.99,
      description: 'Natural Malaysian driftwood for aquascaping',
      imageUrl: '/api/placeholder/300/300',
      compatibility: ['soft-water'],
      stock: 2,
      metadata: {
        compatible_with: ['Soft Water Fish', 'Natural Setup'],
        ph_range: '6.0-7.0',
        care_level: 'intermediate',
        tags: ['natural', 'aquascaping']
      }
    },
    {
      id: '6',
      name: 'Water Test Kit',
      category: 'Test Kits',
      price: 15.99,
      description: 'Complete water parameter testing kit',
      imageUrl: '/api/placeholder/300/300',
      compatibility: ['all-tanks'],
      stock: 18,
      metadata: {
        compatible_with: ['All Freshwater Fish'],
        care_level: 'beginner',
        tags: ['essential', 'accurate']
      }
    }
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Aquarium Products
        </h1>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Professional-grade equipment and supplies for your freshwater aquarium
        </p>
      </header>

      {/* Products Grid */}
      <section aria-labelledby="products-grid" className="py-8">
        <h2 id="products-grid" className="sr-only">Product catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <article key={product.id}>
              <ProductCard
                product={product}
                onViewDetails={handleProductSelect}
              />
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}