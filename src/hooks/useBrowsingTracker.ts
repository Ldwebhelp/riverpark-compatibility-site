'use client'

import { useState, useEffect } from 'react'
import { BrowsingEvent } from '@/types/species'

export function useBrowsingTracker() {
  const [events, setEvents] = useState<BrowsingEvent[]>([])

  useEffect(() => {
    const savedEvents = localStorage.getItem('browsing-events')
    if (savedEvents) {
      try {
        const parsed = JSON.parse(savedEvents)
        setEvents(parsed.map((event: any) => ({
          ...event,
          timestamp: new Date(event.timestamp)
        })))
      } catch (error) {
        console.error('Failed to load browsing events:', error)
      }
    }
  }, [])

  useEffect(() => {
    if (events.length > 0) {
      const recentEvents = events
        .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
        .slice(0, 1000)

      localStorage.setItem('browsing-events', JSON.stringify(recentEvents))
    }
  }, [events])

  const trackEvent = (event: BrowsingEvent) => {
    setEvents(currentEvents => [event, ...currentEvents])

    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event.type, {
        product_id: event.productId,
        species_id: event.speciesId,
        ...event.metadata
      })
    }
  }

  const getRecentProducts = (limit: number = 10): string[] => {
    return events
      .filter(event => event.type === 'product_view' && event.productId)
      .map(event => event.productId!)
      .filter((id, index, array) => array.indexOf(id) === index)
      .slice(0, limit)
  }

  const getRecentSpecies = (limit: number = 10): string[] => {
    return events
      .filter(event => event.type === 'species_view' && event.speciesId)
      .map(event => event.speciesId!)
      .filter((id, index, array) => array.indexOf(id) === index)
      .slice(0, limit)
  }

  const getCartAddEvents = (): BrowsingEvent[] => {
    return events.filter(event => event.type === 'cart_add')
  }

  const getUserIntent = (): 'browsing' | 'researching' | 'shopping' | 'planning' => {
    const recentEvents = events.slice(0, 20)
    const cartAdds = recentEvents.filter(e => e.type === 'cart_add').length
    const productViews = recentEvents.filter(e => e.type === 'product_view').length
    const speciesViews = recentEvents.filter(e => e.type === 'species_view').length

    if (cartAdds > 2) return 'shopping'
    if (speciesViews > productViews * 2) return 'researching'
    if (productViews > 5 && cartAdds > 0) return 'planning'
    return 'browsing'
  }

  const clearEvents = () => {
    setEvents([])
    localStorage.removeItem('browsing-events')
  }

  return {
    events,
    trackEvent,
    getRecentProducts,
    getRecentSpecies,
    getCartAddEvents,
    getUserIntent,
    clearEvents
  }
}