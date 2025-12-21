import { Shield, Users, Lock, Eye, FileText, CheckCircle, AlertCircle, Globe, Mail } from 'lucide-react'

export default function GDPRPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - White Background */}
          <section className="relative bg-white text-gray-900 border-b border-gray-200">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
              <div className="text-center animate-fade-in-up">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in-up-delay-1">
                  GDPR Compliance
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                  Our third-party USPS tracking service is committed to GDPR compliance and protecting your personal data.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12 border border-gray-100">
            {/* GDPR Overview */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  GDPR Overview
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The General Data Protection Regulation (GDPR) protects EU citizens' personal data. As a third-party USPS tracking service, we comply with GDPR requirements:
              </p>
              <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Shield className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Data Protection</h3>
                    <p className="text-gray-600 text-sm">Strong security measures for your data</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Users className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">User Rights</h3>
                    <p className="text-gray-600 text-sm">Full control over your personal information</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Eye className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Transparency</h3>
                    <p className="text-gray-600 text-sm">Clear information about data processing</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data We Process */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Data We Process
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a third-party tracking service, we process minimal personal data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tracking Numbers</h3>
                  <p className="text-gray-600 text-sm">Package tracking information you provide</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Data</h3>
                  <p className="text-gray-600 text-sm">IP address, browser, device information</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Usage Data</h3>
                  <p className="text-gray-600 text-sm">How you interact with our service</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Info</h3>
                  <p className="text-gray-600 text-sm">Only if you contact us for support</p>
                </div>
              </div>
            </section>

            {/* Legal Basis */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Legal Basis for Processing
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We process your data based on these legal grounds:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Legitimate Interest</h3>
                    <p className="text-gray-600 text-sm">To provide our third-party tracking service and improve user experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Consent</h3>
                    <p className="text-gray-600 text-sm">When you voluntarily provide information for tracking purposes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Legal Obligation</h3>
                    <p className="text-gray-600 text-sm">To comply with applicable laws and regulations</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Your GDPR Rights */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your GDPR Rights
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Under GDPR, you have the following rights regarding your personal data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Access</h3>
                  <p className="text-gray-600 text-sm">Request a copy of your personal data</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Rectification</h3>
                  <p className="text-gray-600 text-sm">Correct inaccurate personal data</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Erasure</h3>
                  <p className="text-gray-600 text-sm">Request deletion of your personal data</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Portability</h3>
                  <p className="text-gray-600 text-sm">Receive your data in a machine-readable format</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Object</h3>
                  <p className="text-gray-600 text-sm">Object to processing of your personal data</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Restrict</h3>
                  <p className="text-gray-600 text-sm">Limit how we process your personal data</p>
                </div>
              </div>
            </section>

            {/* Data Protection Measures */}
            <section className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Data Protection Measures
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                We implement comprehensive security measures to protect your personal data:
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Access Control:</strong> Strict authentication and authorization systems
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Regular Audits:</strong> Ongoing security assessments and compliance checks
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* International Data Transfers */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  International Data Transfers
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a third-party service, we may transfer data outside the EU under these safeguards:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">US Privacy Shield</h3>
                    <p className="text-gray-600 text-sm">Compliance with international data transfer frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E5288] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Standard Contractual Clauses</h3>
                    <p className="text-gray-600 text-sm">Legal agreements ensuring adequate protection</p>
                  </div>
                </div>
              </div>
            </section>

            </div>
        </div>
    </div>
  )
}
