import { NextRequest, NextResponse } from 'next/server'

interface TrackingEvent {
  date: string
  time: string
  location: string
  description: string
}

interface TrackingResult {
  trackingNumber: string
  status: string
  estimatedDelivery: string
  currentLocation: string
  events: TrackingEvent[]
}

// Mock database for demonstration
const mockTrackingData: Record<string, TrackingResult> = {
  '9400110208395953714499': {
    trackingNumber: '9400110208395953714499',
    status: 'In Transit',
    estimatedDelivery: 'Dec 20, 2024',
    currentLocation: 'Chicago, IL',
    events: [
      {
        date: 'Dec 18, 2024',
        time: '2:30 PM',
        location: 'Chicago, IL',
        description: 'Package arrived at USPS facility'
      },
      {
        date: 'Dec 18, 2024',
        time: '10:15 AM',
        location: 'Indianapolis, IN',
        description: 'Package departed USPS facility'
      },
      {
        date: 'Dec 17, 2024',
        time: '4:45 PM',
        location: 'Indianapolis, IN',
        description: 'Package picked up by USPS'
      }
    ]
  },
  '9405500000000000000000': {
    trackingNumber: '9405500000000000000000',
    status: 'Delivered',
    estimatedDelivery: 'Dec 17, 2024',
    currentLocation: 'New York, NY',
    events: [
      {
        date: 'Dec 17, 2024',
        time: '3:45 PM',
        location: 'New York, NY',
        description: 'Package delivered to recipient'
      },
      {
        date: 'Dec 17, 2024',
        time: '8:00 AM',
        location: 'New York, NY',
        description: 'Out for delivery'
      },
      {
        date: 'Dec 16, 2024',
        time: '11:30 PM',
        location: 'New York, NY',
        description: 'Package arrived at destination facility'
      }
    ]
  }
}

function generateMockTrackingResult(trackingNumber: string): TrackingResult {
  const statuses = ['In Transit', 'Out for Delivery', 'Delivered', 'Processing']
  const locations = ['Chicago, IL', 'New York, NY', 'Los Angeles, CA', 'Houston, TX', 'Phoenix, AZ']
  const descriptions = [
    'Package picked up by USPS',
    'Package departed USPS facility', 
    'Package arrived at USPS facility',
    'Out for delivery',
    'Package delivered to recipient'
  ]

  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
  const randomLocation = locations[Math.floor(Math.random() * locations.length)]
  
  const events: TrackingEvent[] = []
  const currentDate = new Date()
  
  for (let i = 0; i < 3; i++) {
    const eventDate = new Date(currentDate)
    eventDate.setDate(currentDate.getDate() - (2 - i))
    
    events.push({
      date: eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: `${Math.floor(Math.random() * 12) + 1}:${Math.random() > 0.5 ? '00' : '30'} ${Math.random() > 0.5 ? 'PM' : 'AM'}`,
      location: locations[Math.floor(Math.random() * locations.length)],
      description: descriptions[i]
    })
  }

  const deliveryDate = new Date(currentDate)
  deliveryDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 3) + 1)

  return {
    trackingNumber: trackingNumber.toUpperCase(),
    status: randomStatus,
    estimatedDelivery: deliveryDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    currentLocation: randomLocation,
    events: events.reverse()
  }
}

export async function POST(request: NextRequest) {
  try {
    const { trackingNumber } = await request.json()

    if (!trackingNumber || typeof trackingNumber !== 'string') {
      return NextResponse.json(
        { error: 'Invalid tracking number' },
        { status: 400 }
      )
    }

    // Check if we have mock data for this tracking number
    const normalizedTrackingNumber = trackingNumber.replace(/\s/g, '').toUpperCase()
    
    let result = mockTrackingData[normalizedTrackingNumber]
    
    // If no mock data exists, generate a random result
    if (!result) {
      result = generateMockTrackingResult(normalizedTrackingNumber)
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    return NextResponse.json(result)

  } catch (error) {
    console.error('Tracking API error:', error)
    return NextResponse.json(
      { error: 'Unable to track package. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Please use POST.' },
    { status: 405 }
  )
}
