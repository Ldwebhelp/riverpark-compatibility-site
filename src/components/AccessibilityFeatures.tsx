'use client'

import { useEffect, useState } from 'react'

interface AccessibilityFeaturesProps {
  children: React.ReactNode
}

export default function AccessibilityFeatures({ children }: AccessibilityFeaturesProps) {
  const [highContrast, setHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState('normal')
  const [reducedMotion, setReducedMotion] = useState(false)
  const [screenReader, setScreenReader] = useState(false)

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    
    setReducedMotion(prefersReducedMotion)
    setHighContrast(prefersHighContrast)

    // Load saved preferences
    const savedFontSize = localStorage.getItem('accessibility-font-size')
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast')
    const savedReducedMotion = localStorage.getItem('accessibility-reduced-motion')

    if (savedFontSize) setFontSize(savedFontSize)
    if (savedHighContrast) setHighContrast(savedHighContrast === 'true')
    if (savedReducedMotion) setReducedMotion(savedReducedMotion === 'true')

    // Detect screen reader
    const hasScreenReader = window.navigator.userAgent.includes('NVDA') || 
                            window.navigator.userAgent.includes('JAWS') || 
                            window.speechSynthesis !== undefined
    setScreenReader(hasScreenReader)
  }, [])

  useEffect(() => {
    // Apply accessibility classes to body
    const body = document.body
    
    // High contrast mode
    if (highContrast) {
      body.classList.add('accessibility-high-contrast')
    } else {
      body.classList.remove('accessibility-high-contrast')
    }

    // Font size
    body.classList.remove('accessibility-font-small', 'accessibility-font-normal', 'accessibility-font-large')
    body.classList.add(`accessibility-font-${fontSize}`)

    // Reduced motion
    if (reducedMotion) {
      body.classList.add('accessibility-reduced-motion')
    } else {
      body.classList.remove('accessibility-reduced-motion')
    }

    // Save preferences
    localStorage.setItem('accessibility-font-size', fontSize)
    localStorage.setItem('accessibility-high-contrast', highContrast.toString())
    localStorage.setItem('accessibility-reduced-motion', reducedMotion.toString())
  }, [highContrast, fontSize, reducedMotion])

  return (
    <div className="accessibility-wrapper">
      {/* Skip to main content link */}
      <a 
        href="#main-content"
        className="skip-to-main sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-aqua-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-aqua-500"
      >
        Skip to main content
      </a>

      {/* Accessibility Toolbar */}
      <div className="accessibility-toolbar fixed top-0 right-0 z-50 bg-white border-l border-b border-gray-200 shadow-lg p-2 transform translate-x-full focus-within:translate-x-0 hover:translate-x-0 transition-transform duration-300">
        <button
          className="accessibility-toggle p-2 text-gray-600 hover:text-gray-900 absolute -left-10 top-2 bg-white border border-gray-200 rounded-l"
          aria-label="Open accessibility options"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        <div className="w-64 space-y-4">
          <h3 className="font-semibold text-gray-900 text-sm">Accessibility Options</h3>
          
          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Font Size
            </label>
            <div className="flex space-x-2">
              {['small', 'normal', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-3 py-1 text-sm rounded border transition-colors ${
                    fontSize === size
                      ? 'bg-aqua-600 text-white border-aqua-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-aqua-300'
                  }`}
                  aria-pressed={fontSize === size}
                >
                  {size === 'small' ? 'A' : size === 'normal' ? 'A' : 'A'}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast */}
          <div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={highContrast}
                onChange={(e) => setHighContrast(e.target.checked)}
                className="rounded border-gray-300 text-aqua-600 focus:ring-aqua-500"
              />
              <span className="text-sm font-medium text-gray-700">
                High Contrast
              </span>
            </label>
          </div>

          {/* Reduced Motion */}
          <div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={(e) => setReducedMotion(e.target.checked)}
                className="rounded border-gray-300 text-aqua-600 focus:ring-aqua-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Reduce Motion
              </span>
            </label>
          </div>

          {/* Screen Reader Info */}
          {screenReader && (
            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <p className="text-sm text-blue-800">
                Screen reader detected. Enhanced navigation available.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div id="main-content">
        {children}
      </div>

      {/* Accessibility Styles */}
      <style jsx global>{`
        /* High Contrast Mode */
        .accessibility-high-contrast {
          filter: contrast(150%);
        }
        
        .accessibility-high-contrast .bg-gray-50 {
          background-color: #ffffff !important;
        }
        
        .accessibility-high-contrast .bg-gray-100 {
          background-color: #f3f4f6 !important;
        }
        
        .accessibility-high-contrast .text-gray-600 {
          color: #000000 !important;
        }

        /* Font Size Adjustments */
        .accessibility-font-small {
          font-size: 87.5%;
        }
        
        .accessibility-font-large {
          font-size: 112.5%;
        }
        
        .accessibility-font-large h1 {
          font-size: 2.5rem !important;
        }
        
        .accessibility-font-large h2 {
          font-size: 2rem !important;
        }
        
        .accessibility-font-large h3 {
          font-size: 1.5rem !important;
        }

        /* Reduced Motion */
        .accessibility-reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Focus Indicators */
        .focus-visible {
          outline: 2px solid #06a9db !important;
          outline-offset: 2px !important;
        }

        /* Screen Reader Only */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .sr-only.focus:not(.sr-only) {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        /* Keyboard Navigation */
        [tabindex="-1"]:focus {
          outline: none !important;
        }

        /* Button and Link Focus */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
          outline: 2px solid #06a9db;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}

// Accessibility Hook for components
export function useAccessibility() {
  const [isScreenReader, setIsScreenReader] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for screen reader
    const hasScreenReader = window.navigator.userAgent.includes('NVDA') || 
                            window.navigator.userAgent.includes('JAWS') || 
                            window.speechSynthesis !== undefined
    setIsScreenReader(hasScreenReader)

    // Check for reduced motion preference
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPrefersReducedMotion(reducedMotion)
  }, [])

  const announceToScreenReader = (message: string) => {
    if (isScreenReader) {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.textContent = message
      
      document.body.appendChild(announcement)
      
      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    }
  }

  return {
    isScreenReader,
    prefersReducedMotion,
    announceToScreenReader
  }
}

// Accessible Modal Component
interface AccessibleModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function AccessibleModal({ isOpen, onClose, title, children }: AccessibleModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Trap focus within modal
      const modal = document.getElementById('accessible-modal')
      const focusableElements = modal?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      const firstElement = focusableElements?.[0] as HTMLElement
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
        
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault()
              lastElement?.focus()
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault()
              firstElement?.focus()
            }
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      firstElement?.focus()

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        id="accessible-modal"
        className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}