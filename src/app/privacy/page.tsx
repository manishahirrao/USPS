import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Shield, Lock, Eye, Database, Cookie, Users, AlertCircle, CheckCircle, Target } from 'lucide-react'

export default function PrivacyPage() {
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
                  Privacy Policy
                </h1>
                <p className="text-base md:text-lg text-[#a8d8e8] mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                  Learn how we protect your privacy and handle your data when using our USPS tracking portal.
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
            {/* Information We Collect */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Information We Collect
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When you use our USPS tracking service, we collect minimal information necessary to provide the best experience:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tracking Information</h3>
                  <p className="text-gray-600 text-sm">Tracking numbers and related package data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Data</h3>
                  <p className="text-gray-600 text-sm">IP address, browser type, and device information</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Usage Analytics</h3>
                  <p className="text-gray-600 text-sm">Pages visited and interaction patterns</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Data</h3>
                  <p className="text-gray-600 text-sm">Information provided in support forms</p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  How We Use Your Information
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use your information responsibly to enhance your experience and improve our services:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Delivery</h3>
                    <p className="text-gray-600 text-sm">To provide accurate package tracking services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">User Experience</h3>
                    <p className="text-gray-600 text-sm">To improve website functionality and performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customer Support</h3>
                    <p className="text-gray-600 text-sm">To respond to inquiries and provide assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Security</h3>
                    <p className="text-gray-600 text-sm">To protect against fraud and ensure service integrity</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Data Protection & Security
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We implement industry-leading security measures to protect your information:
              </p>
              <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Lock className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">256-bit Encryption</h3>
                    <p className="text-gray-600 text-sm">All data encrypted in transit and at rest</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Shield className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Secure Servers</h3>
                    <p className="text-gray-600 text-sm">Enterprise-grade hosting with regular backups</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <AlertCircle className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Access Control</h3>
                    <p className="text-gray-600 text-sm">Strict authentication and authorization protocols</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Cookies & Tracking Technologies
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use minimal cookies essential for service functionality and user experience:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                    <p className="text-gray-600 text-sm">Required for basic website functionality</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Required</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                    <p className="text-gray-600 text-sm">Help us improve service quality</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Optional</span>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Rights & Choices
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You have complete control over your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Access & Correction</h3>
                  <p className="text-gray-600 text-sm">Request access to or correction of your data</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Data Portability</h3>
                  <p className="text-gray-600 text-sm">Export your data in a machine-readable format</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Deletion</h3>
                  <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Opt-Out</h3>
                  <p className="text-gray-600 text-sm">Control how we use your information</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] p-6 rounded-xl text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Privacy Questions?</h2>
              <p className="text-[#a8d8e8] mb-4">
                If you have questions about this privacy policy or need to exercise your rights, we're here to help.
              </p>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">Email:</span>
                    <span>privacy@uspstracking.us</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">Phone:</span>
                    <span>1-800-TRACK-US</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">Response Time:</span>
                    <span>Within 24 hours</span>
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
