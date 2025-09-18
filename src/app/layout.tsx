import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import ResponsiveNavigation from '@/components/ResponsiveNavigation'
import AccessibilityFeatures from '@/components/AccessibilityFeatures'
import { StealthAssistantProvider } from '@/components/StealthAssistant'
import StealthAssistant from '@/components/StealthAssistant'
import PersistentSetupTray from '@/components/PersistentSetupTray'

const openSans = Open_Sans({ subsets: ['latin'] })

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
      <body className={openSans.className}>
        <StealthAssistantProvider>
          <AccessibilityFeatures>
            <div className="min-h-screen bg-gradient-to-br from-aqua-50 to-blue-50">
              <ResponsiveNavigation />
              <main className="pb-20">
                {children}
              </main>
              <StealthAssistant />
              <PersistentSetupTray />
            </div>
          </AccessibilityFeatures>
        </StealthAssistantProvider>
      </body>
    </html>
  )
}