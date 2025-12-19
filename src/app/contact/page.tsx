'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions or feedback about our USPS tracking service? We're here to help you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Methods
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#2E5288] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
                      <p className="text-[#2E5288] font-semibold mb-2">support@uspstracking.us</p>
                      <p className="text-gray-600 text-sm">
                        We'll respond within 24 hours with detailed assistance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#2E5288] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone Support</h3>
                      <p className="text-[#2E5288] font-semibold mb-2">1-800-TRACK-US</p>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday, 9AM - 6PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#2E5288] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Office Location</h3>
                      <p className="text-gray-600 text-sm">
                        123 Tracking Lane<br />
                        Package City, PC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Questions
                </h3>
                <div className="space-y-3">
                  <details className="bg-gray-50 rounded-lg p-4 group">
                    <summary className="font-semibold text-gray-900 cursor-pointer hover:text-[#2E5288] transition-colors">
                      Is this service affiliated with USPS?
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">
                      We're a third-party tracking service providing access to USPS tracking data through publicly available information.
                    </p>
                  </details>

                  <details className="bg-gray-50 rounded-lg p-4 group">
                    <summary className="font-semibold text-gray-900 cursor-pointer hover:text-[#2E5288] transition-colors">
                      How accurate is the tracking?
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">
                      We provide real-time data directly from USPS systems for the most accurate and up-to-date information.
                    </p>
                  </details>

                  <details className="bg-gray-50 rounded-lg p-4 group">
                    <summary className="font-semibold text-gray-900 cursor-pointer hover:text-[#2E5288] transition-colors">
                      Is the service really free?
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">
                      Yes, completely free with no hidden fees or subscription requirements.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5" />
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5288] focus:border-[#2E5288] transition-colors resize-none"
                      placeholder="Tell us more about your question or feedback..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2E5288] text-white font-bold py-4 rounded-lg hover:bg-[#1e3a6f] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Support Hours */}
          <section className="mt-12 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-2xl p-6 md:p-8 text-white">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Support Hours & Response Times
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div>
                  <Clock className="h-6 w-6 mx-auto mb-2" />
                  <h3 className="font-bold text-base mb-1">Phone Support</h3>
                  <p className="text-[#a8d8e8] text-sm">Mon-Fri, 9AM-6PM EST</p>
                  <p className="text-white text-sm">Immediate response</p>
                </div>
                <div>
                  <Mail className="h-6 w-6 mx-auto mb-2" />
                  <h3 className="font-bold text-base mb-1">Email Support</h3>
                  <p className="text-[#a8d8e8] text-sm">24/7 Available</p>
                  <p className="text-white text-sm">Within 24 hours</p>
                </div>
                <div>
                  <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                  <h3 className="font-bold text-base mb-1">Live Chat</h3>
                  <p className="text-[#a8d8e8] text-sm">24/7 Available</p>
                  <p className="text-white text-sm">Under 2 minutes</p>
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
