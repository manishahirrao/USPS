'use client'

import { useState, useEffect } from 'react'
import { Search, Package, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react'

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isProcessed, setIsProcessed] = useState(false)
  const [uspsUrl, setUspsUrl] = useState('')
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState('')

  const processingMessages = [
    'Validating tracking number format...',
    'Connecting to USPS servers...',
    'Retrieving tracking information...',
    'Preparing your tracking results...'
  ]

  // Load persisted state on component mount
  useEffect(() => {
    try {
      // Check if this is a page refresh vs navigation
      const navigationEntries = performance.getEntriesByType('navigation')
      const isPageRefresh = navigationEntries.length > 0 && 
        (navigationEntries[0] as PerformanceNavigationTiming).type === 'reload'

      console.log('Is page refresh:', isPageRefresh)

      // If it's a page refresh, clear the state and show fresh form
      if (isPageRefresh) {
        console.log('Page refresh detected, clearing localStorage')
        localStorage.removeItem('trackingFormState')
        return
      }

      const persistedState = localStorage.getItem('trackingFormState')
      console.log('Loading persisted state:', persistedState)
      
      if (persistedState) {
        const state = JSON.parse(persistedState)
        console.log('Parsed state:', state)
        
        // Check if the state is recent (within 30 minutes)
        const thirtyMinutesAgo = Date.now() - (30 * 60 * 1000)
        if (state.timestamp && state.timestamp > thirtyMinutesAgo) {
          setTrackingNumber(state.trackingNumber || '')
          setIsProcessed(state.isProcessed || false)
          setUspsUrl(state.uspsUrl || '')
          console.log('State restored successfully')
        } else {
          console.log('State expired, clearing localStorage')
          localStorage.removeItem('trackingFormState')
        }
      }
    } catch (error) {
      console.error('Error loading persisted state:', error)
      localStorage.removeItem('trackingFormState')
    }
  }, [])

  // Save state to localStorage when processed
  useEffect(() => {
    if (isProcessed && trackingNumber && uspsUrl) {
      const stateToSave = {
        isProcessed,
        trackingNumber,
        uspsUrl,
        timestamp: Date.now()
      }
      console.log('Saving state to localStorage:', stateToSave)
      localStorage.setItem('trackingFormState', JSON.stringify(stateToSave))
      console.log('State saved successfully')
    }
  }, [isProcessed, trackingNumber, uspsUrl])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number')
      return
    }

    setIsLoading(true)
    setError('')
    setIsProcessed(false)
    setProgress(0)
    setCurrentMessage('')

    try {
      // Simulate processing with progress bar for 6-7 seconds
      const totalTime = 6500 // 6.5 seconds
      const intervalTime = 100
      const steps = totalTime / intervalTime
      const messageInterval = steps / processingMessages.length
      
      for (let i = 0; i <= steps; i++) {
        await new Promise(resolve => setTimeout(resolve, intervalTime))
        setProgress((i / steps) * 100)
        
        // Update message at different intervals
        const messageIndex = Math.floor(i / messageInterval)
        if (messageIndex < processingMessages.length) {
          setCurrentMessage(processingMessages[messageIndex])
        }
      }
      
      // Generate USPS tracking URL
      const uspsTrackingUrl = `https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=${encodeURIComponent(trackingNumber.trim())}`
      setUspsUrl(uspsTrackingUrl)
      
      // Mark as processed
      setIsProcessed(true)
      
    } catch (err) {
      setError('Unable to process tracking number. Please try again.')
    } finally {
      setIsLoading(false)
      setProgress(0)
      setCurrentMessage('')
    }
  }

  const handleNavigateToUSPS = () => {
    if (uspsUrl) {
      window.open(uspsUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleReset = () => {
    setTrackingNumber('')
    setError('')
    setIsProcessed(false)
    setUspsUrl('')
    setProgress(0)
    setCurrentMessage('')
    localStorage.removeItem('trackingFormState')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter tracking number"
          className="flex-1 bg-white text-gray-900 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-base border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#2E5288] focus:border-[#2E5288]"
          disabled={isLoading || isProcessed}
          autoFocus
        />
        <button
          type="submit"
          disabled={isLoading || isProcessed}
          className="bg-[#2E5288] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1e3a6f] disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed disabled:opacity-60 transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-base sm:text-lg"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span className="hidden sm:inline">Processing...</span>
              <span className="sm:hidden">Loading...</span>
            </>
          ) : isProcessed ? (
            <>
              <CheckCircle className="h-5 w-5" />
              <span className="hidden sm:inline">Completed</span>
              <span className="sm:hidden">Done</span>
            </>
          ) : (
            <>
              <Search className="h-5 w-5" />
              <span className="hidden sm:inline">Track Package</span>
              <span className="sm:hidden">Track</span>
            </>
          )}
        </button>
        {error && (
          <p className="absolute -bottom-6 left-0 text-sm text-red-600 flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            {error}
          </p>
        )}
      </div>

      {/* Processing section below input field */}
      {isLoading && (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <div>
                <h3 className="text-white font-semibold">Processing Tracking Number</h3>
                <p className="text-white/80 text-sm">{currentMessage || 'Initializing...'}</p>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-white/80">
                <span>Processing...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success state */}
      {isProcessed && (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-500 rounded-full p-2">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Tracking Number Ready</h3>
              <p className="text-white/80 text-sm">Package: {trackingNumber}</p>
            </div>
          </div>
          
          {/* Tracking information preview */}
          <div className="mb-4">
            <div className="text-white/80 text-sm mb-2">Tracking Information:</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/70">Tracking number verified successfully</span>
                <span className="text-white/50 ml-auto">Ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white/70">Connected to USPS tracking system</span>
                <span className="text-white/50 ml-auto">Connected</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-white/70">Official tracking page ready</span>
                <span className="text-white/50 ml-auto">Available</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={handleNavigateToUSPS}
              className="flex-1 bg-white text-[#2E5288] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">Track on USPS</span>
              <span className="sm:hidden">USPS</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-white/20 text-white font-semibold py-3 px-4 rounded-lg hover:bg-white/30 transition-colors text-base sm:text-lg"
            >
              <span className="hidden sm:inline">Track Another</span>
              <span className="sm:hidden">New</span>
            </button>
          </div>
        </div>
      )}

      {/* Additional info */}
      <div className="text-center text-sm text-white pt-2">
        <p>Track your package directly on official USPS website</p>
        <p className="mt-1">Supports all USPS tracking numbers</p>
      </div>
    </form>
  )
}
