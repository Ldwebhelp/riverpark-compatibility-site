'use client'

import { useState } from 'react'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ProductModal from '@/components/products/ProductModal'
import SmartRecommendationEngine from '@/components/recommendations/SmartRecommendationEngine'
import { Product, Species } from '@/types/species'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  const sampleProducts: Product[] = []
  const sampleSpecies: Species[] = []

  const features = [
    {
      href: "/compatibility",
      title: "Smart Compatibility Checker",
      description: "AI-powered species matching with real-time compatibility analysis",
      icon: "🔄",
      color: "primary",
      gradient: "from-primary-500 to-water-500"
    },
    {
      href: "/products",
      title: "Intelligent Product Catalog",
      description: "Curated products with automatic species compatibility matching",
      icon: "🛍️",
      color: "success",
      gradient: "from-success-500 to-plant-500"
    },
    {
      href: "/species",
      title: "Comprehensive Species Guide",
      description: "Detailed care guides with personalized recommendations",
      icon: "🐠",
      color: "water",
      gradient: "from-water-500 to-primary-500"
    },
    {
      href: "/tank-builder",
      title: "Advanced Tank Builder",
      description: "Design your perfect aquarium with smart equipment suggestions",
      icon: "🏗️",
      color: "accent",
      gradient: "from-accent-500 to-stone-600"
    }
  ]

  const stats = [
    { label: "Species Profiles", value: "150+", icon: "🐟" },
    { label: "Product Categories", value: "12", icon: "📦" },
    { label: "Happy Aquarists", value: "10K+", icon: "😊" },
    { label: "Compatibility Checks", value: "1M+", icon: "✅" }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-water-600 to-plant-600 bg-clip-text text-transparent">
              Riverpark Aquarium
            </span>
            <br />
            <span className="text-secondary-900">Compatibility Guide</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover perfect tank mates with our AI-powered compatibility engine.
            Get personalized product recommendations for your aquarium setup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="min-w-[200px]">
              Start Building Your Tank
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Explore Species Guide
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
                <div className="text-sm text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="text-center mb-12">
          <Badge variant="primary" size="lg" className="mb-4">
            Smart Aquarium Planning
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Everything You Need for Perfect Aquarium Setup
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            From species compatibility to equipment recommendations, our intelligent platform guides you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Link key={index} href={feature.href} className="group">
              <Card
                variant="elevated"
                hover
                className="h-full p-8 group-hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`
                    w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient}
                    flex items-center justify-center text-white text-2xl
                    shadow-lg group-hover:scale-110 transition-transform duration-300
                  `}>
                    {feature.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-primary-600 font-medium group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Smart Recommendations Preview */}
      <section>
        <SmartRecommendationEngine
          products={sampleProducts}
          species={sampleSpecies}
          onProductSelect={handleProductSelect}
        />
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <Card variant="glass" className="max-w-4xl mx-auto p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Ready to Create Your Perfect Aquarium?
          </h2>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Join thousands of aquarists who trust our compatibility guide for building healthy, thriving aquariums.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="min-w-[200px]">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Success Stories
            </Button>
          </div>
        </Card>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false)
          setSelectedProduct(null)
        }}
      />
    </div>
  )
}