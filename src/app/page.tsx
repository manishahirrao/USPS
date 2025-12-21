import TrackingForm from '@/components/tracking/TrackingForm'
import TestimonialsCarousel from '@/components/testimonials/TestimonialsCarousel'
import Link from 'next/link'
import { Search, Truck, Shield, Clock, Package, ArrowRight, Zap, Globe, Users, TrendingUp, Star, ExternalLink, CheckCircle, Target, Bell, MapPin } from 'lucide-react'
import '@/styles/animations.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section with Integrated Tracking */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2E5288] via-[#1e3a6f] to-[#15223e] text-white">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up-delay-1">
                Track Your USPS Package Instantly
              </h1>
              <p className="text-lg md:text-xl text-[#a8d8e8] mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                Enter your USPS tracking number to get real-time updates and delivery information from our free tracking portal
              </p>
              <div className="animate-fade-in-up-delay-3">
                <TrackingForm />
              </div>
            </div>
          </div>

          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 right-0 animate-wave">
            <svg className="w-full h-16" viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 32L48 37.3C96 43 192 53 288 53.3C384 53 480 43 576 42.7C672 43 768 53 864 58.7C960 64 1056 64 1152 58.7C1248 53 1344 43 1392 37.3L1440 32V64H1392C1344 64 1248 64 1152 64C1056 64 960 64 864 64C768 64 672 64 576 64C480 64 384 64 288 64C192 64 96 64 48 64H0V32Z" fill="currentColor" className="text-gray-50"/>
            </svg>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-16 bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Millions for USPS Tracking
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join thousands of users who rely on our free tracking portal daily for accurate package information
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center animate-scale-in">
                <div className="text-3xl md:text-4xl font-bold text-[#2E5288] mb-2">10M+</div>
                <p className="text-gray-600 text-sm md:text-base">Packages Tracked</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl md:text-4xl font-bold text-[#2E5288] mb-2">99.9%</div>
                <p className="text-gray-600 text-sm md:text-base">Uptime</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl md:text-4xl font-bold text-[#2E5288] mb-2">24/7</div>
                <p className="text-gray-600 text-sm md:text-base">Free Access</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl md:text-4xl font-bold text-[#2E5288] mb-2">50+</div>
                <p className="text-gray-600 text-sm md:text-base">Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Powerful USPS Tracking Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to track your packages with our comprehensive USPS tracking portal
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Navigation</h3>
                <p className="text-gray-600 text-sm">
                  Enter your USPS tracking number and we'll instantly navigate you to the official USPS tracking page
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Official USPS Access</h3>
                <p className="text-gray-600 text-sm">
                  Get direct access to the official USPS website with your tracking number pre-filled for convenience
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Accurate Tracking</h3>
                <p className="text-gray-600 text-sm">
                  Receive precise tracking information directly from the official USPS tracking system
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast & Free</h3>
                <p className="text-gray-600 text-sm">
                  Save time with our convenient portal that gets you to official USPS tracking instantly and for free
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How Our Portal Works
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Get to official USPS tracking in three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative animate-scale-in">
                <div className="bg-[#2E5288] text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">
                  Enter Tracking Number
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Input your USPS tracking number in our convenient tracking form
                </p>
                <div className="hidden md:block absolute top-8 left-full w-24 flex items-center justify-center z-10">
                  <svg className="w-full h-4" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8 L80 8 M70 3 L80 8 L70 13" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-[#2E5288] text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">
                  Redirect to USPS
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We instantly redirect you to the official USPS tracking page with your number pre-filled
                </p>
                <div className="hidden md:block absolute top-8 left-full w-24 flex items-center justify-center z-10">
                  <svg className="w-full h-4" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8 L80 8 M70 3 L80 8 L70 13" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#2E5288] text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">
                  View Official Results
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Get accurate tracking information directly from the official USPS website
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <TestimonialsCarousel />

        {/* Enhanced FAQ Section */}
        <section className="py-20 bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common questions about using our USPS tracking portal and checking your USPS tracking number.
              </p>
            </div>
            
            <div className="space-y-6">
              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 group faq-item hover:shadow-2xl transition-shadow duration-300">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 hover:text-[#2E5288] transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <div className="bg-[#2E5288]/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-[#2E5288] font-bold text-sm">1</span>
                    </div>
                    Is this portal affiliated with USPS?
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    No, we are an independent third-party portal that provides convenient access to the official USPS tracking website. All tracking information comes directly from USPS systems.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 group faq-item hover:shadow-2xl transition-shadow duration-300">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 hover:text-[#2E5288] transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <div className="bg-[#2E5288]/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-[#2E5288] font-bold text-sm">2</span>
                    </div>
                    Is this service really free?
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Yes! Our tracking portal is completely free with no hidden fees, no subscription requirements, and no limits on the number of packages you can track.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 group faq-item hover:shadow-2xl transition-shadow duration-300">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 hover:text-[#2E5288] transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <div className="bg-[#2E5288]/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-[#2E5288] font-bold text-sm">3</span>
                    </div>
                    How many packages can I track at once?
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Our portal provides individual tracking - you can track one package at a time for focused, accurate results. Simply enter your tracking number and get instant access to official USPS tracking.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 group faq-item hover:shadow-2xl transition-shadow duration-300">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 hover:text-[#2E5288] transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <div className="bg-[#2E5288]/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-[#2E5288] font-bold text-sm">4</span>
                    </div>
                    Does this portal support international tracking?
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Our portal redirects to official USPS tracking, which supports international packages. As long as you have a valid USPS tracking number, you'll get accurate tracking information.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 group faq-item hover:shadow-2xl transition-shadow duration-300">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 hover:text-[#2E5288] transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <div className="bg-[#2E5288]/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-[#2E5288] font-bold text-sm">5</span>
                    </div>
                    How often is tracking information updated on the official USPS site?
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    The official USPS tracking website updates information in real-time as new data becomes available. Most packages receive updates every 2-4 hours during transit.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section - Moved to Bottom */}
        <section className="py-12 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Start Tracking Your USPS Package Today
              </h2>
              <p className="text-base md:text-lg text-[#a8d8e8] mb-6 max-w-2xl mx-auto">
                Enter your USPS tracking number to use our free USPS tracking portal and get the latest official tracking updates and delivery information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-1">
              <Link href="#tracking" className="bg-white text-[#2E5288] px-8 py-3 rounded-xl font-bold text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl inline-block text-center">
                Track Package
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="h-5 w-5" />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Real-time Updates</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Package className="h-5 w-5" />
                <span className="text-sm">Free Forever</span>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
