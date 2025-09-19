'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  position?: 'center' | 'top' | 'bottom'
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale'
  className?: string
  overlayClassName?: string
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

export default function Modal({
  isOpen,
  onClose,
  children,
  size = 'md',
  position = 'center',
  animation = 'fade',
  className = '',
  overlayClassName = '',
  closeOnOverlayClick = true,
  closeOnEscape = true
}: ModalProps) {
  useEffect(() => {
    if (!closeOnEscape) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose, closeOnEscape])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || typeof window === 'undefined') return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  }

  const positionClasses = {
    center: 'items-center justify-center',
    top: 'items-start justify-center pt-16',
    bottom: 'items-end justify-center pb-16'
  }

  const animationClasses = {
    fade: isOpen ? 'animate-fade-in' : '',
    'slide-up': isOpen ? 'animate-slide-in-up' : '',
    'slide-down': isOpen ? 'animate-slide-in-down' : '',
    'slide-left': isOpen ? 'animate-slide-in-left' : '',
    'slide-right': isOpen ? 'animate-slide-in-right' : '',
    scale: isOpen ? 'animate-scale-in' : ''
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex ${positionClasses[position]} ${overlayClassName}`}
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        className={`
          relative w-full ${sizeClasses[size]} bg-white rounded-2xl shadow-hard
          ${animationClasses[animation]} ${className}
        `}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

export function ModalHeader({ children, onClose, className = '' }: {
  children: ReactNode
  onClose?: () => void
  className?: string
}) {
  return (
    <header className={`flex items-center justify-between p-6 border-b border-secondary-200 ${className}`}>
      <div className="flex-1">
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 p-2 text-secondary-400 hover:text-secondary-600 transition-colors rounded-lg hover:bg-secondary-100"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </header>
  )
}

export function ModalBody({ children, className = '' }: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

export function ModalFooter({ children, className = '' }: {
  children: ReactNode
  className?: string
}) {
  return (
    <footer className={`flex items-center justify-end gap-3 p-6 border-t border-secondary-200 ${className}`}>
      {children}
    </footer>
  )
}