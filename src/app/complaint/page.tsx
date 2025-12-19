'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { AlertTriangle, CheckCircle, Clock, Mail, Phone, FileText, ArrowRight, Shield, Users, Target } from 'lucide-react'
import { useState } from 'react'

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trackingNumber: '',
    complaintType: '',
    subject: '',
    description: '',
    priority: 'normal'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Portal Complaint Form
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Thank you for your feedback about our USPS tracking portal. We will review your complaint within 24–48 hours.
                  You will receive a confirmation email with your complaint reference number and details.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 shadow-xl"
                  >
                    Submit Another Complaint
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => window.location.href = '/support'}
                    className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                  >
                    Contact Support
                    <Users className="h-5 w-5" />
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
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in-up-delay-1">
                File a Complaint
              </h1>
              <p className="text-base md:text-lg text-[#a8d8e8] mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                Report issues with USPS tracking, package delivery, or service quality through our official complaint portal for prompt resolution.
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Complaint Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden animate-scale-in">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-16 h-16 rounded-full flex items-center justify-center animate-rotate-slow">
                    <FileText className="h-8 w-8 text-[#2E5288]" />
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
                  Complaint Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                        placeholder="john@example.com"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Complaint Information */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Tracking Number
                    </label>
                    <input
                      type="text"
                      name="trackingNumber"
                      value={formData.trackingNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                      placeholder="9400111101234567890"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Complaint Type *
                      </label>
                      <select
                        name="complaintType"
                        value={formData.complaintType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                      >
                        <option value="">Select complaint type</option>
                        <option value="delivery">Delivery Issue</option>
                        <option value="service">Service Quality</option>
                        <option value="tracking">Tracking Problem</option>
                        <option value="staff">Staff Behavior</option>
                        <option value="billing">Billing Issue</option>
                        <option value="website">Website/Technical Issue</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Priority Level
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                      >
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300"
                      placeholder="Brief description of your complaint"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Detailed Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-all duration-300 resize-none"
                      placeholder="Please provide detailed information about your complaint..."
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="acknowledge"
                      required
                      className="w-4 h-4 text-[#2E5288] border-gray-300 rounded focus:ring-[#2E5288]"
                    />
                    <label htmlFor="acknowledge" className="text-sm text-gray-600">
                      I confirm that information provided is accurate to the best of my knowledge
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white py-4 rounded-xl font-bold hover:from-[#1e3a6f] hover:to-[#15223e] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Complaint
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => window.location.href = '/support'}
                      className="px-8 py-4 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-all duration-300 hover:scale-105"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="bg-[#2E5288] w-10 h-10 rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  Need Immediate Help?
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone Support</p>
                    <p className="font-bold text-[#2E5288] text-lg">1-800-TRACK-US</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email Support</p>
                    <p className="font-bold text-[#2E5288] text-lg">support@uspstracking.us</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Support Hours</p>
                    <p className="font-bold text-gray-700">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Important Notice */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-red-800 mb-4 flex items-center gap-3">
                  <div className="bg-red-100 w-10 h-10 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  Important Notice
                </h3>
                <ul className="space-y-3 text-sm text-red-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Complaints are reviewed within 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Provide accurate tracking numbers when available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Include specific dates and times of incidents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>False complaints may result in account suspension</span>
                  </li>
                </ul>
              </div>

              {/* Enhanced Quick Links */}
              <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="bg-[#2E5288] w-10 h-10 rounded-xl flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a 
                    href="/terms" 
                    className="block text-[#2E5288] hover:text-[#1e3a6f] transition-colors text-sm font-medium hover:translate-x-1 transform duration-200"
                  >
                    → Terms of Service
                  </a>
                  <a 
                    href="/privacy" 
                    className="block text-[#2E5288] hover:text-[#1e3a6f] transition-colors text-sm font-medium hover:translate-x-1 transform duration-200"
                  >
                    → Privacy Policy
                  </a>
                  <a 
                    href="/support" 
                    className="block text-[#2E5288] hover:text-[#1e3a6f] transition-colors text-sm font-medium hover:translate-x-1 transform duration-200"
                  >
                    → Support Center
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
