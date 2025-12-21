import { FileText, CheckCircle, AlertCircle, Shield, Users, Gavel, Target } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - White Background */}
          <section className="relative bg-white text-gray-900 border-b border-gray-200">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
              <div className="text-center animate-fade-in-up">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in-up-delay-1">
                  Terms of Service
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                  Our third-party service helps you track USPS packages by navigating to official USPS pages. Read our terms for using this service.
                </p>
              </div>
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
                USPS Tracking Portal is a free third-party service that helps you track packages by redirecting to official USPS tracking pages:
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

            </div>
        </div>
    </div>
  )
}
