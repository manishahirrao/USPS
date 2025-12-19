import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Mail, Phone, MessageCircle, Clock, HelpCircle, Search, CheckCircle, Star, ArrowRight, Users, Headphones, FileText } from 'lucide-react'

export default function SupportPage() {
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
                <Headphones className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Support Portal
              </h1>
              <p className="text-lg md:text-xl text-[#a8d8e8] mb-12 max-w-3xl mx-auto leading-relaxed">
                We're here to help you with our tracking portal and USPS access services
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Portal Support</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3">
                  <Star className="h-5 w-5" />
                  <span className="font-semibold">Quick Help</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Fast Response</span>
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

        {/* Enhanced Contact Options */}
        <section className="py-20 bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How Can We Help You?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose support option for our tracking portal services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Email Support</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  Get detailed assistance via email for portal navigation and general inquiries
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Detailed documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">File attachments</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Email Address</p>
                  <p className="font-bold text-[#2E5288] text-lg">support@uspstracking.us</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Phone Support</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  Speak directly with our support team for portal assistance and urgent matters
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Immediate assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Real-time troubleshooting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Priority support</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Support Hours</p>
                  <p className="font-bold text-[#2E5288] text-lg">Mon-Fri, 9AM-6PM EST</p>
                  <p className="font-bold text-[#2E5288] text-lg">1-800-TRACK-US</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Live Chat</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  Get instant help through our live chat for portal navigation and quick questions
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">24/7 availability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Average wait &lt; 2 min</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Screen sharing</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white py-3 rounded-xl font-semibold hover:from-[#1e3a6f] hover:to-[#15223e] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2">
                    Start Live Chat
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common tracking questions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <summary className="font-semibold text-gray-900 cursor-pointer p-6 flex items-center gap-3 hover:bg-[#e8f4fd] transition-colors">
                  <HelpCircle className="h-5 w-5 text-[#2E5288] flex-shrink-0" />
                  How do I track my package?
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base">
                  Simply enter your USPS tracking number in search field on our homepage and click "Track Package" to get real-time updates. You can track up to 35 packages at once.
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <summary className="font-semibold text-gray-900 cursor-pointer p-6 flex items-center gap-3 hover:bg-[#e8f4fd] transition-colors">
                  <HelpCircle className="h-5 w-5 text-[#2E5288] flex-shrink-0" />
                  Is tracking service free?
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base">
                  Yes, our USPS tracking service is completely free to use with no hidden fees or subscription requirements. Track unlimited packages at no cost.
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <summary className="font-semibold text-gray-900 cursor-pointer p-6 flex items-center gap-3 hover:bg-[#e8f4fd] transition-colors">
                  <HelpCircle className="h-5 w-5 text-[#2E5288] flex-shrink-0" />
                  What tracking numbers are supported?
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base">
                  We support all USPS tracking numbers including Priority Mail, First-Class, Parcel Select, and international shipments.
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <summary className="font-semibold text-gray-900 cursor-pointer p-6 flex items-center gap-3 hover:bg-[#e8f4fd] transition-colors">
                  <HelpCircle className="h-5 w-5 text-[#2E5288] flex-shrink-0" />
                  How accurate is tracking information?
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base">
                  Our tracking data comes directly from USPS systems, providing most accurate and up-to-date information available.
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <summary className="font-semibold text-gray-900 cursor-pointer p-6 flex items-center gap-3 hover:bg-[#e8f4fd] transition-colors">
                  <HelpCircle className="h-5 w-5 text-[#2E5288] flex-shrink-0" />
                  Can I track international packages?
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base">
                  Yes, we support international USPS tracking numbers and provide updates for packages traveling between countries.
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <summary className="font-semibold text-gray-900 cursor-pointer p-6 flex items-center gap-3 hover:bg-[#e8f4fd] transition-colors">
                  <HelpCircle className="h-5 w-5 text-[#2E5288] flex-shrink-0" />
                  What if my package is delayed?
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base">
                  If your package is delayed, check tracking history for updates and contact our support team for assistance with filing a claim.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Enhanced Help Resources */}
        <section className="py-20 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Additional Resources
              </h2>
              <p className="text-lg md:text-xl text-[#a8d8e8] max-w-3xl mx-auto">
                Everything you need to make the most of our tracking portal
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Tracking History</h3>
                <p className="text-[#a8d8e8] leading-relaxed mb-6 text-sm md:text-base">
                  View complete package journey from pickup to delivery with detailed timestamps
                </p>
                <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                  View History
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Email Notifications</h3>
                <p className="text-[#a8d8e8] leading-relaxed mb-6 text-sm md:text-base">
                  Get automatic updates sent directly to your inbox as your package moves
                </p>
                <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                  Set Up Alerts
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Help Center</h3>
                <p className="text-[#a8d8e8] leading-relaxed mb-6 text-sm md:text-base">
                  Comprehensive guides and troubleshooting articles for common issues
                </p>
                <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                  Browse Articles
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
