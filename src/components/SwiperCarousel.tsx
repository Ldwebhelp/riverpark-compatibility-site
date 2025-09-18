'use client'

import { ReactNode, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface SwiperCarouselProps {
  children: ReactNode[]
  variant?: 'species' | 'products' | 'testimonials' | 'gallery'
  autoplay?: boolean
  navigation?: boolean
  pagination?: boolean
  loop?: boolean
  effect?: 'slide' | 'fade'
  className?: string
}

export default function SwiperCarousel({
  children,
  variant = 'species',
  autoplay = false,
  navigation = true,
  pagination = true,
  loop = false,
  effect = 'slide',
  className = ''
}: SwiperCarouselProps) {
  const swiperRef = useRef<SwiperType>()

  const getVariantConfig = () => {
    switch (variant) {
      case 'species':
        return {
          slidesPerView: 1,
          spaceBetween: 20,
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 }
          }
        }
      case 'products':
        return {
          slidesPerView: 1,
          spaceBetween: 16,
          breakpoints: {
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
            1280: { slidesPerView: 5, spaceBetween: 24 }
          }
        }
      case 'testimonials':
        return {
          slidesPerView: 1,
          spaceBetween: 30,
          breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }
        }
      case 'gallery':
        return {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true
        }
      default:
        return {
          slidesPerView: 1,
          spaceBetween: 20,
          breakpoints: {
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }
        }
    }
  }

  const variantConfig = getVariantConfig()

  const modules = [
    ...(navigation ? [Navigation] : []),
    ...(pagination ? [Pagination] : []),
    ...(autoplay ? [Autoplay] : []),
    ...(effect === 'fade' ? [EffectFade] : [])
  ]

  return (
    <div className={`swiper-container ${className}`}>
      <Swiper
        modules={modules}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        {...variantConfig}
        loop={loop && children.length > variantConfig.slidesPerView}
        navigation={navigation ? {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        } : false}
        pagination={pagination ? {
          clickable: true,
          dynamicBullets: children.length > 5,
        } : false}
        autoplay={autoplay ? {
          delay: variant === 'gallery' ? 4000 : 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        } : false}
        effect={effect}
        className="w-full"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="h-full w-full">
              {child}
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        {navigation && (
          <>
            <button className="swiper-button-prev !w-10 !h-10 !mt-0 !top-1/2 !-translate-y-1/2 !left-2 !text-aqua-600 hover:!text-aqua-700 !bg-white !rounded-full !shadow-lg border border-gray-200 hover:border-aqua-300 transition-all duration-200 after:!text-sm after:!font-black">
            </button>
            <button className="swiper-button-next !w-10 !h-10 !mt-0 !top-1/2 !-translate-y-1/2 !right-2 !text-aqua-600 hover:!text-aqua-700 !bg-white !rounded-full !shadow-lg border border-gray-200 hover:border-aqua-300 transition-all duration-200 after:!text-sm after:!font-black">
            </button>
          </>
        )}
      </Swiper>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #06a9db;
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        .swiper-pagination {
          bottom: 16px !important;
        }
      `}</style>
    </div>
  )
}

interface SpeciesCarouselProps {
  species: any[]
  onSpeciesSelect?: (speciesId: string) => void
  selectedSpecies?: string[]
}

export function SpeciesCarousel({ 
  species, 
  onSpeciesSelect,
  selectedSpecies = [] 
}: SpeciesCarouselProps) {
  return (
    <SwiperCarousel
      variant="species"
      navigation={true}
      pagination={false}
      autoplay={false}
      className="pb-4"
    >
      {species.map((fish) => (
        <div
          key={fish.id}
          className={`p-4 bg-white rounded-lg shadow-md border-2 transition-all duration-200 cursor-pointer hover:shadow-lg ${
            selectedSpecies.includes(fish.id) 
              ? 'border-aqua-500 bg-aqua-50' 
              : 'border-gray-200 hover:border-aqua-300'
          }`}
          onClick={() => onSpeciesSelect?.(fish.id)}
        >
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-aqua-100 rounded-lg mb-3 flex items-center justify-center">
            <span className="text-3xl">🐠</span>
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
            {fish.name}
          </h3>
          <p className="text-xs text-gray-600 mb-2">{fish.category}</p>
          {fish.detailedInfo?.careLevel && (
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
              fish.detailedInfo.careLevel === 'Beginner' ? 'bg-green-100 text-green-800' :
              fish.detailedInfo.careLevel === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {fish.detailedInfo.careLevel}
            </span>
          )}
        </div>
      ))}
    </SwiperCarousel>
  )
}

interface ProductCarouselProps {
  products: any[]
  onProductSelect?: (productId: string) => void
  showPricing?: boolean
}

export function ProductCarousel({ 
  products, 
  onProductSelect,
  showPricing = true 
}: ProductCarouselProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <SwiperCarousel
      variant="products"
      navigation={true}
      pagination={false}
      autoplay={false}
      className="pb-4"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
          onClick={() => onProductSelect?.(product.id)}
        >
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <div className="p-3">
            <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
              {product.name}
            </h3>
            {product.brand && (
              <p className="text-xs text-gray-500 mb-2">by {product.brand}</p>
            )}
            {showPricing && (
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.inStock ? (
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                    In Stock
                  </span>
                ) : (
                  <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">
                    Out of Stock
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </SwiperCarousel>
  )
}

interface ImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  autoplay?: boolean
}

export function ImageGallery({ images, autoplay = true }: ImageGalleryProps) {
  return (
    <SwiperCarousel
      variant="gallery"
      navigation={true}
      pagination={true}
      autoplay={autoplay}
      loop={images.length > 1}
      effect="fade"
      className="rounded-lg overflow-hidden"
    >
      {images.map((image, index) => (
        <div key={index} className="relative">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </SwiperCarousel>
  )
}

interface TestimonialCarouselProps {
  testimonials: Array<{
    id: string
    name: string
    location?: string
    rating: number
    text: string
    avatar?: string
  }>
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <SwiperCarousel
      variant="testimonials"
      navigation={true}
      pagination={true}
      autoplay={true}
      loop={testimonials.length > 1}
      className="pb-12"
    >
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 h-full flex flex-col"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-aqua-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              {testimonial.location && (
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            {renderStars(testimonial.rating)}
          </div>
          
          <blockquote className="text-gray-700 italic leading-relaxed flex-1">
            "{testimonial.text}"
          </blockquote>
        </div>
      ))}
    </SwiperCarousel>
  )
}