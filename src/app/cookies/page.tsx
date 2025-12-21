import { Cookie, Shield, Eye, Settings, Lock, CheckCircle, AlertCircle } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div className="py-16">
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
                  Cookie Policy
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
                  Our third-party USPS tracking service uses minimal cookies to enhance your experience while respecting your privacy.
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
            {/* What Are Cookies */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  What Are Cookies?
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cookies are small text files stored on your device when you visit websites. As a third-party tracking service, we use minimal cookies to provide the best experience:
              </p>
              <div className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Cookie className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Essential Only</h3>
                    <p className="text-gray-600 text-sm">We use only necessary cookies for basic functionality</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Shield className="h-8 w-8 text-[#2E5288]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Privacy First</h3>
                    <p className="text-gray-600 text-sm">No tracking cookies or third-party advertising</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Cookies We Use */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Cookies We Use
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our third-party service uses only essential cookies for functionality:
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                      <p className="text-gray-600 text-sm">Required for website functionality and security</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Required</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Preference Cookies</h3>
                      <p className="text-gray-600 text-sm">Remember your settings and preferences</p>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Optional</span>
                </div>
              </div>
            </section>

            {/* Cookies We Don't Use */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Cookies We Don't Use
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a privacy-focused third-party service, we do NOT use:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">No Advertising Cookies</h3>
                    <p className="text-gray-600 text-sm">We don't track you for advertising purposes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">No Third-Party Tracking</h3>
                    <p className="text-gray-600 text-sm">We don't share your data with advertisers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">No Cross-Site Tracking</h3>
                    <p className="text-gray-600 text-sm">We don't track you across other websites</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Managing Your Cookies
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You have full control over cookies on our third-party service:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Browser Settings</h3>
                  <p className="text-gray-600 text-sm">Control cookies through your browser preferences</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Cookie Banner</h3>
                  <p className="text-gray-600 text-sm">Manage preferences through our cookie consent banner</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Clear Cookies</h3>
                  <p className="text-gray-600 text-sm">Remove all cookies at any time from your browser</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-[#2E5288] transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Opt-Out</h3>
                  <p className="text-gray-600 text-sm">Disable non-essential cookies while maintaining functionality</p>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff] p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E5288] w-12 h-12 rounded-xl flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Third-Party Services
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                As a third-party USPS tracking service, we redirect you to official USPS pages. Those pages may use their own cookies:
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>USPS Official Pages:</strong> When we redirect you to USPS.com, they may use their own cookies for tracking and functionality
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Separate Policies:</strong> USPS has its own privacy and cookie policies that apply when you visit their site
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
