import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ModernLayout from '@/components/layout/ModernLayout'
import AccessibilityFeatures from '@/components/AccessibilityFeatures'
import { StealthAssistantProvider } from '@/components/StealthAssistant'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Riverpark Aquarium Compatibility Guide',
  description: 'Find the perfect tank mates for your freshwater aquarium with our comprehensive species compatibility tool.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StealthAssistantProvider>
          <AccessibilityFeatures>
            <ModernLayout>
              {children}
            </ModernLayout>
          </AccessibilityFeatures>
        </StealthAssistantProvider>
      </body>
    </html>
  )
}