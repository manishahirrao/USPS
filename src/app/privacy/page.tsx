import { Shield, Lock, Eye, Database, Cookie, Users, AlertCircle, CheckCircle, Target } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy | USPS Tracking Number",
  description: "Privacy policy for USPS Tracking Number. Learn how our third-party USPS tracking service protects your privacy while helping you track packages.",
  keywords: "privacy policy, USPS tracking privacy, data protection, third-party service, user privacy, tracking information",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - White Background */}
          <section className="relative bg-white text-gray-900 border-b border-gray-200">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
              <div className="text-center animate-fade-in-up">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in-up-delay-1">
                  Privacy Policy
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                  Our third-party USPS tracking service helps you track packages by navigating to official USPS pages. Learn how we protect your privacy.
                </p>
              </div>
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
                As a third-party service, we help you track USPS packages by redirecting to official USPS tracking pages. We collect minimal information:
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

            </div>
        </div>
    </div>
  )
}
