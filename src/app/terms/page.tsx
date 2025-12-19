import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { FileText, CheckCircle, AlertCircle, Shield, Users, Gavel, Target } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Terms of Service
                </h1>
                <p className="text-base md:text-lg text-[#a8d8e8] mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                  Read our terms of service for using our USPS tracking portal and understand your rights and responsibilities.
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

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12 border border-gray-100">
            {/* Acceptance of Terms */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Acceptance of Terms
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using our USPS tracking service, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            {/* Service Description */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Service Description
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                USPS Tracking is a free third-party service that provides comprehensive package tracking capabilities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Core Features</h3>
                  <p className="text-gray-600 text-sm">Real-time package tracking and delivery updates</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tracking History</h3>
                  <p className="text-gray-600 text-sm">Complete event timeline and status information</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Delivery Estimates</h3>
                  <p className="text-gray-600 text-sm">AI-powered delivery date predictions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Multi-tracking</h3>
                  <p className="text-gray-600 text-sm">Track up to 35 packages simultaneously</p>
                </div>
              </div>
            </section>

            {/* Service Limitations */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Service Limitations
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Please note the following important limitations:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Third-Party Service</h3>
                    <p className="text-gray-600 text-sm">We are not affiliated with USPS or the United States Postal Service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Data Dependency</h3>
                    <p className="text-gray-600 text-sm">Tracking information depends on USPS data availability and accuracy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Availability</h3>
                    <p className="text-gray-600 text-sm">Service may be subject to technical issues or maintenance</p>
                  </div>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  User Responsibilities
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a user of our service, you agree to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Accurate Information</h3>
                  <p className="text-gray-600 text-sm">Provide valid tracking numbers and information</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Legitimate Use</h3>
                  <p className="text-gray-600 text-sm">Use service only for legitimate tracking purposes</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">No Abuse</h3>
                  <p className="text-gray-600 text-sm">Avoid automated scripts or excessive requests</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance</h3>
                  <p className="text-gray-600 text-sm">Comply with all applicable laws and regulations</p>
                </div>
              </div>
            </section>

            {/* Privacy & Data */}
            <section className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Privacy and Data Protection
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
              <p className="text-gray-600">
                By using our service, you consent to the collection and use of information as described in our Privacy Policy, including tracking numbers, usage data, and technical information necessary for service delivery.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Disclaimers & Liability
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our service is provided "as is" without warranties of any kind:
              </p>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>No Guarantee:</strong> We cannot guarantee 100% accuracy or reliability of tracking information
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>No Liability:</strong> We are not liable for lost, damaged, or delayed packages
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Service Availability:</strong> Service may be interrupted for maintenance or technical issues
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] p-6 rounded-xl text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Legal Questions?</h2>
              <p className="text-[#a8d8e8] mb-4">
                If you have questions about these Terms of Service, our legal team is here to help.
              </p>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">Email:</span>
                    <span>legal@uspstracking.us</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">Phone:</span>
                    <span>1-800-TRACK-US</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">Response Time:</span>
                    <span>Within 48 hours</span>
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t pt-8 text-center">
              <p className="text-gray-500">
                Last Updated: December 18, 2024 • Effective Date: December 18, 2024
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
