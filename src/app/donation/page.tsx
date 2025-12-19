'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Heart, Users, Target, Shield, CheckCircle, CreditCard, RefreshCw, ArrowRight, Star, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export default function DonationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    donationType: 'onetime',
    frequency: 'monthly',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    isAnonymous: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Enhanced Success Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-700 text-white">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Thank You for Your Donation!
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Your generous support helps us continue providing free access to USPS tracking services for millions of users worldwide.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-md mx-auto">
                  <div className="text-left space-y-4">
                    <div className="flex justify-between">
                      <span className="text-green-100">Donation Amount:</span>
                      <span className="font-bold text-white text-lg">${formData.amount || '0.00'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-100">Type:</span>
                      <span className="font-bold text-white">{formData.donationType === 'onetime' ? 'One-Time' : 'Monthly'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-100">Transaction ID:</span>
                      <span className="font-bold text-white">DON-{Date.now()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 shadow-xl"
                  >
                    Make Another Donation
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  >
                    Return Home
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Wave separator */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg className="w-full h-16" viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 32L48 37.3C96 43 192 53 288 53.3C384 53 480 43 576 42.7C672 43 768 53 864 58.7C960 64 1056 64 1152 58.7C1248 53 1344 43 1392 37.3L1440 32V64H1392C1344 64 1248 64 1152 64C1056 64 960 64 864 64C768 64 672 64 576 64C480 64 384 64 288 64C192 64 96 64 48 64H0V32Z" fill="currentColor" className="text-gray-50"/>
              </svg>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    )
  }

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
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
                <Heart className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Support Our Portal
              </h1>
              <p className="text-lg md:text-xl text-[#a8d8e8] mb-12 max-w-3xl mx-auto leading-relaxed">
                Help us continue providing free access to USPS tracking services for millions of users worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Tax Deductible</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">Secure Payment</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3">
                  <Target className="h-5 w-5" />
                  <span className="font-semibold">Transparent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16" viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 32L48 37.3C96 43 192 53 288 53.3C384 53 480 43 576 42.7C672 43 768 53 864 58.7C960 64 1056 64 1152 58.7C1248 53 1344 43 1392 37.3L1440 32V64H1392C1344 64 1248 64 1152 64C1056 64 960 64 864 64C768 64 672 64 576 64C480 64 384 64 288 64C192 64 96 64 48 64H0V32Z" fill="currentColor" className="text-gray-50"/>
            </svg>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Donation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-[#2E5288]" />
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
                  Make a Donation
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4">
                      Donation Type
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="relative">
                        <input
                          type="radio"
                          name="donationType"
                          value="onetime"
                          checked={formData.donationType === 'onetime'}
                          onChange={handleChange}
                          className="peer sr-only"
                        />
                        <div className="cursor-pointer border-2 border-gray-200 rounded-xl p-6 text-center peer-checked:border-[#2E5288] peer-checked:bg-[#e8f4fd] transition-all hover:border-[#2E5288] hover:shadow-lg">
                          <Heart className="h-8 w-8 text-[#2E5288] mx-auto mb-3" />
                          <span className="font-bold text-lg">One-Time</span>
                        </div>
                      </label>
                      
                      <label className="relative">
                        <input
                          type="radio"
                          name="donationType"
                          value="monthly"
                          checked={formData.donationType === 'monthly'}
                          onChange={handleChange}
                          className="peer sr-only"
                        />
                        <div className="cursor-pointer border-2 border-gray-200 rounded-xl p-6 text-center peer-checked:border-[#2E5288] peer-checked:bg-[#e8f4fd] transition-all hover:border-[#2E5288] hover:shadow-lg">
                          <RefreshCw className="h-8 w-8 text-[#2E5288] mx-auto mb-3" />
                          <span className="font-bold text-lg">Monthly</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {['5', '10', '25', '50', '100', '250', '500', '1000'].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, amount }))}
                          className={`py-3 rounded-xl font-bold transition-all hover:scale-105 ${
                            formData.amount === amount
                              ? 'bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 font-bold">$</span>
                      </div>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter custom amount"
                        min="1"
                        step="0.01"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="isAnonymous"
                        id="anonymous"
                        checked={formData.isAnonymous}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#2E5288] border-gray-300 rounded focus:ring-[#2E5288]"
                      />
                      <label htmlFor="anonymous" className="text-sm text-gray-600">
                        Make this donation anonymous
                      </label>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="space-y-4">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">Payment Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="w-4 h-4 text-[#2E5288] border-gray-300 rounded focus:ring-[#2E5288]"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to <a href="/terms" className="text-[#2E5288] hover:underline">Terms of Service</a> and <a href="/privacy" className="text-[#2E5288] hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white py-4 rounded-xl font-bold text-lg hover:from-[#1e3a6f] hover:to-[#15223e] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Complete Donation
                        <Heart className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-6">
              {/* Impact */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="bg-[#2E5288] w-10 h-10 rounded-xl flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  Your Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">$5</p>
                      <p className="text-sm text-gray-600">Helps 10 users access portal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">$25</p>
                      <p className="text-sm text-gray-600">Supports 50 portal users monthly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">$100</p>
                      <p className="text-sm text-gray-600">Keeps portal free for 200 users</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="bg-[#2E5288] w-10 h-10 rounded-xl flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  Secure & Trusted
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>256-bit SSL encryption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>PCI-DSS compliant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Tax-deductible receipts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Cancel anytime</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="bg-[#2E5288] w-10 h-10 rounded-xl flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  Questions?
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email Support</p>
                    <p className="font-bold text-[#2E5288] text-lg">donations@uspstracking.us</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone Support</p>
                    <p className="font-bold text-[#2E5288] text-lg">1-800-DONATE-US</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Statistics */}
          <section className="py-20 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Your Support Makes a Difference
                </h2>
                <p className="text-xl text-[#a8d8e8] max-w-3xl mx-auto">
                  Together we can keep USPS tracking free for everyone
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold mb-2">10M+</div>
                  <p className="text-[#a8d8e8]">Packages Tracked Monthly</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                  <p className="text-[#a8d8e8]">Free Service Maintained</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                  <p className="text-[#a8d8e8]">Service Availability</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                  <p className="text-[#a8d8e8]">Countries Supported</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
