import Link from 'next/link'
import { Package, Mail, Phone, MapPin, ExternalLink, Shield, Clock, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0f0f1e] text-white pt-12 md:pt-16 pb-8 md:pb-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-40 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2E5288] to-[#1e3a6f] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Package className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl md:text-2xl font-bold group-hover:text-[#a8d8e8] transition-colors">USPS Portal</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
              Your convenient gateway to official USPS tracking with instant access and streamlined user experience.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                <Mail className="h-4 w-4 text-gray-300" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                <Phone className="h-4 w-4 text-gray-300" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                <MapPin className="h-4 w-4 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg md:text-xl flex items-center gap-2">
              <div className="w-2 h-2 bg-[#2E5288] rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">About Portal</span>
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Support</span>
                </Link>
              </li>
              <li>
                <Link href="/complaint" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">File Complaint</span>
                </Link>
              </li>
              <li>
                <Link href="/donation" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Support Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6 text-lg md:text-xl flex items-center gap-2">
              <div className="w-2 h-2 bg-[#2E5288] rounded-full"></div>
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Articles & Guides</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://tools.usps.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group"
                >
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Official USPS</span>
                </a>
              </li>
              <li>
                <Link href="/tracking-api" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <Shield className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">API Access</span>
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <Package className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Business Solutions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="font-bold mb-6 text-lg md:text-xl flex items-center gap-2">
              <div className="w-2 h-2 bg-[#2E5288] rounded-full"></div>
              Legal & Info
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <Shield className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <Clock className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <Shield className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">GDPR Compliance</span>
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2 group">
                  <Package className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Sitemap</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 backdrop-blur-sm pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 USPS Portal. All rights reserved.
              </p>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-300">Third-Party Service</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-gray-400 text-xs mb-1">Powered by</p>
                <p className="text-gray-300 text-sm font-semibold">Advanced Tracking Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
