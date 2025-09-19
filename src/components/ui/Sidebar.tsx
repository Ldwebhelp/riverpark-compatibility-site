'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  side?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  overlay?: boolean
  className?: string
  overlayClassName?: string
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

export default function Sidebar({
  isOpen,
  onClose,
  children,
  side = 'right',
  size = 'md',
  overlay = true,
  className = '',
  overlayClassName = '',
  closeOnOverlayClick = true,
  closeOnEscape = true
}: SidebarProps) {
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
    if (isOpen && overlay) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, overlay])

  const sizeClasses = {
    sm: 'w-80',
    md: 'w-96',
    lg: 'w-[32rem]',
    xl: 'w-[40rem]'
  }

  const slideAnimation = {
    left: isOpen ? 'animate-slide-in-left' : '',
    right: isOpen ? 'animate-slide-in-right' : ''
  }

  const positionClasses = {
    left: 'left-0',
    right: 'right-0'
  }

  const content = (
    <>
      {overlay && (
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${overlayClassName}`}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}

      <aside
        className={`
          fixed top-0 ${positionClasses[side]} h-full ${sizeClasses[size]}
          bg-white shadow-hard transform transition-transform duration-300 ease-out z-50
          ${isOpen ? 'translate-x-0' : side === 'left' ? '-translate-x-full' : 'translate-x-full'}
          ${slideAnimation[side]} ${className}
        `}
        role="complementary"
        aria-hidden={!isOpen}
        aria-label={side === 'left' ? 'Filter options' : 'Shopping cart'}
      >
        {children}
      </aside>
    </>
  )

  if (typeof window === 'undefined') {
    return null
  }

  return overlay ? createPortal(content, document.body) : content
}

export function SidebarHeader({ children, onClose, className = '' }: {
  children: ReactNode
  onClose?: () => void
  className?: string
}) {
  return (
    <header className={`flex items-center justify-between p-6 border-b border-secondary-200 bg-secondary-50 ${className}`}>
      <div className="flex-1">
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 p-2 text-secondary-400 hover:text-secondary-600 transition-colors rounded-lg hover:bg-white"
          aria-label="Close sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </header>
  )
}

export function SidebarBody({ children, className = '' }: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`flex-1 overflow-y-auto p-6 ${className}`}>
      {children}
    </div>
  )
}

export function SidebarFooter({ children, className = '' }: {
  children: ReactNode
  className?: string
}) {
  return (
    <footer className={`p-6 border-t border-secondary-200 bg-secondary-50 ${className}`}>
      {children}
    </footer>
  )
}