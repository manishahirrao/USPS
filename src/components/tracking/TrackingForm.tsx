'use client'

import { useState } from 'react'
import { Search, Package, ExternalLink, AlertCircle } from 'lucide-react'

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Open USPS tracking in new tab with the tracking number
      const uspsTrackingUrl = `https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=${encodeURIComponent(trackingNumber.trim())}`
      
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Open in new tab
      window.open(uspsTrackingUrl, '_blank', 'noopener,noreferrer')
      
      // Clear the form after successful redirect
      setTrackingNumber('')
      
    } catch (err) {
      setError('Unable to open tracking page. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter USPS tracking number"
          className="flex w-full bg-background py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#2E5288] focus:border-[#2E5288]"
          disabled={isLoading}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            {error}
          </p>
        )}
      </div>
      
      {/* Third-party disclaimer */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <ExternalLink className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-700">
            This is a third-party service. You will be redirected to the official USPS tracking website for accurate results.
          </p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-[#2E5288] text-white font-semibold py-3 rounded-lg hover:bg-[#1e3a6f] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Opening USPS...
            </>
          ) : (
            <>
              <Search className="h-5 w-5" />
              Track on USPS
            </>
          )}
        </button>
        
        <button
          type="button"
          onClick={() => {
            setTrackingNumber('')
            setError('')
          }}
          className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Additional info */}
      <div className="text-center text-sm text-gray-600">
        <p>Track your package directly on the official USPS website</p>
        <p className="mt-1">Supports all USPS tracking numbers</p>
      </div>
    </form>
  )
}
