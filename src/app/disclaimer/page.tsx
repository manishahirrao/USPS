import { AlertTriangle, Shield, ExternalLink, Info, CheckCircle, AlertCircle } from 'lucide-react'

export default function DisclaimerPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - White Background */}
          <section className="relative bg-white text-gray-900 border-b border-gray-200">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
              <div className="text-center animate-fade-in-up">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in-up-delay-1">
                  Disclaimer
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                  Important information about our third-party USPS tracking service and its limitations.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12 border border-gray-100">
            {/* Third-Party Service Disclaimer */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Third-Party Service
                </h2>
              </div>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Not Affiliated with USPS:</strong> We are an independent third-party service and are not affiliated with, endorsed by, or connected to the United States Postal Service (USPS).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Redirection Service:</strong> Our service helps users navigate to official USPS tracking pages. We do not provide tracking services directly.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>No Official Status:</strong> We are not an official USPS website or service. Always verify information directly with USPS.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Limitations */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Service Limitations
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Please understand the following limitations of our service:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Data Accuracy</h3>
                    <p className="text-gray-600 text-sm">We cannot guarantee the accuracy or completeness of tracking information provided by USPS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Availability</h3>
                    <p className="text-gray-600 text-sm">Our service may be interrupted for maintenance, technical issues, or other reasons</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Updates</h3>
                    <p className="text-gray-600 text-sm">Tracking information may have delays and is not always real-time</p>
                  </div>
                </div>
              </div>
            </section>

            {/* No Warranty Disclaimer */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  No Warranty
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our service is provided "as is" without any warranties:
              </p>
              <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <AlertTriangle className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">No Guarantee</h3>
                    <p className="text-gray-600 text-sm">No guarantees about service reliability or accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Info className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Use at Your Risk</h3>
                    <p className="text-gray-600 text-sm">You use our service at your own risk and discretion</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Liability Limitation */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are not liable for any damages arising from your use of our service:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Package Issues</h3>
                    <p className="text-gray-600 text-sm">Not liable for lost, damaged, delayed, or misdelivered packages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Financial Losses</h3>
                    <p className="text-gray-600 text-sm">Not responsible for any financial losses or damages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Interruptions</h3>
                    <p className="text-gray-600 text-sm">Not liable for service downtime or technical issues</p>
                  </div>
                </div>
              </div>
            </section>

            {/* User Responsibility */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  User Responsibility
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a user of our service, you are responsible for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Verification</h3>
                  <p className="text-gray-600 text-sm">Verifying all tracking information with USPS directly</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Legitimate Use</h3>
                  <p className="text-gray-600 text-sm">Using our service only for legitimate tracking purposes</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                  <p className="text-gray-600 text-sm">Protecting your tracking numbers and personal information</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Compliance</h3>
                  <p className="text-gray-600 text-sm">Complying with all applicable laws and USPS policies</p>
                </div>
              </div>
            </section>

            {/* Official USPS Resources */}
            <section className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Official USPS Resources
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                For official USPS services and information, visit these authoritative sources:
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>USPS Official Website:</strong> <a href="https://www.usps.com" target="_blank" rel="noopener noreferrer" className="text-[#2E5288] hover:underline">www.usps.com</a>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>USPS Tracking:</strong> <a href="https://tools.usps.com" target="_blank" rel="noopener noreferrer" className="text-[#2E5288] hover:underline">tools.usps.com</a>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>USPS Customer Service:</strong> 1-800-ASK-USPS (1-800-275-8777)
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
