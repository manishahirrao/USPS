import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Package, Users, Target, Shield, Award, Clock, CheckCircle, TrendingUp, Globe, Zap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Our Free USPS Tracking Portal | USPS Tracking',
  description:
    'Learn about our free USPS tracking portal and how it helps you quickly check any USPS tracking number. See why millions of users rely on our tool to open official USPS tracking results and view accurate package updates.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2E5288] via-[#1e3a6f] to-[#15223e] text-white">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in-up-delay-1">
                About Our USPS Tracking Portal
              </h1>
              <p className="text-base md:text-lg text-[#a8d8e8] mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                Learn how our USPS tracking portal helps you quickly check any USPS tracking number and open official USPS tracking results with a simple, streamlined experience.
              </p>
            </div>
          </div>

          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 right-0 animate-wave">
            <svg className="w-full h-16" viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 32L48 37.3C96 43 192 53 288 53.3C384 53 480 43 576 42.7C672 43 768 53 864 58.7C960 64 1056 64 1152 58.7C1248 53 1344 43 1392 37.3L1440 32V64H1392C1344 64 1248 64 1152 64C1056 64 960 64 864 64C768 64 672 64 576 64C480 64 384 64 288 64C192 64 96 64 48 64H0V32Z" fill="currentColor" className="text-gray-50"/>
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Trusted by Millions for Package Tracking
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join thousands of users who rely on our free tracking portal daily
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

        {/* Enhanced Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Our mission is to make USPS tracking simple by giving you a clean, reliable portal to enter any USPS tracking number and reach official USPS tracking results quickly and transparently.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-[#2E5288]/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#2E5288]" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2E5288] mb-6">
                    Simplicity First
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                    We believe tracking should be effortless. Our platform is designed 
                    with clean interfaces and intuitive workflows that make finding your 
                    package information as simple as entering a tracking number.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#e8f4fd] w-12 h-12 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-[#2E5288]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base md:text-lg">Lightning Fast</h4>
                      <p className="text-gray-600">Get results in seconds</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] p-8 rounded-2xl">
                  <div className="text-center">
                    <Award className="h-16 w-16 text-[#2E5288] mx-auto mb-6" />
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      Trusted by Millions
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Join thousands of satisfied users who rely on our service daily for their package tracking needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Values Section */}
        <section className="py-20 bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide how we build and improve our USPS tracking portal for every user.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="h-10 w-10 text-[#2E5288]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Reliability
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Accurate and up-to-date USPS tracking information you can trust completely.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-[#2E5288]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Customer Focus
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Designed with users in mind for the best USPS tracking experience possible.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-[#2E5288]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Efficiency
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Fast and simple USPS tracking with instant results when you need them.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-[#2E5288]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Security
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Your USPS tracking information is safe and protected with enterprise-grade security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive USPS tracking features designed for your convenience and peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] w-14 h-14 rounded-xl flex items-center justify-center">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Real-Time Tracking
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                  Get live updates on your USPS package location and status as it moves through the USPS network.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Instant location updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Delivery notifications</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Status changes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] w-14 h-14 rounded-xl flex items-center justify-center">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Smart Estimates
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                  Receive accurate delivery date predictions and time windows for your shipments
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">AI-powered predictions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Time-sensitive updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Historical accuracy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] w-14 h-14 rounded-xl flex items-center justify-center">
                    <Package className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Complete History
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                  View detailed tracking history from pickup to final delivery
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Event timestamps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Location details</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Delivery confirmations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] w-14 h-14 rounded-xl flex items-center justify-center">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Free Service
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                  All tracking features are available at no cost with no hidden fees
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Unlimited tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">No registration required</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">24/7 availability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-12 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Track Your Package?
              </h2>
              <p className="text-base md:text-lg text-[#a8d8e8] mb-6 max-w-2xl mx-auto">
                Join thousands of users who trust our reliable tracking portal
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-1">
              <button className="bg-white text-[#2E5288] px-8 py-3 rounded-xl font-bold text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                Start Tracking Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-white hover:text-[#2E5288] transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
