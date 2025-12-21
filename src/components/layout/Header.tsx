'use client'

import Link from 'next/link'
import { Menu, X, Package } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-[#2E5288] transition-colors">USPS</span>
              <span className="text-sm md:text-base font-semibold text-gray-600 group-hover:text-[#1e3a6f] transition-colors">Tracking Number</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center bg-gray-50 rounded-full px-2 py-1 shadow-inner">
            <Link 
              href="/" 
              className={`px-4 xl:px-5 py-2 font-medium transition-all duration-200 text-sm xl:text-base rounded-full ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white hover:from-[#1e3a6f] hover:to-[#15223e] hover:shadow-lg' 
                  : 'text-gray-700 hover:text-[#2E5288] hover:bg-blue-50'
              }`}
            >
              Quick Tools
            </Link>
            <Link 
              href="/about" 
              className={`px-4 xl:px-5 py-2 font-medium transition-all duration-200 text-sm xl:text-base rounded-full ${
                isActive('/about') 
                  ? 'bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white hover:from-[#1e3a6f] hover:to-[#15223e] hover:shadow-lg' 
                  : 'text-gray-700 hover:text-[#2E5288] hover:bg-blue-50'
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/articles" 
              className={`px-4 xl:px-5 py-2 font-medium transition-all duration-200 text-sm xl:text-base rounded-full ${
                isActive('/articles') 
                  ? 'bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white hover:from-[#1e3a6f] hover:to-[#15223e] hover:shadow-lg' 
                  : 'text-gray-700 hover:text-[#2E5288] hover:bg-blue-50'
              }`}
            >
              Articles
            </Link>
          </nav>

          <button
            className="lg:hidden p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 group-hover:text-[#2E5288] transition-colors" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 group-hover:text-[#2E5288] transition-colors" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border border-gray-100 rounded-b-2xl z-50 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-6 space-y-3">
              <Link
                href="/"
                className={`px-4 py-3 font-medium text-sm transition-all duration-200 flex items-center gap-3 rounded-xl ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white hover:from-[#1e3a6f] hover:to-[#15223e]' 
                    : 'hover:bg-blue-50 text-gray-700 hover:text-[#2E5288]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Package className="h-4 w-4" />
                Quick Tools
              </Link>
              <Link
                href="/about"
                className={`px-4 py-3 font-medium text-sm transition-all duration-200 rounded-xl ${
                  isActive('/about') 
                    ? 'bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white hover:from-[#1e3a6f] hover:to-[#15223e]' 
                    : 'hover:bg-blue-50 text-gray-700 hover:text-[#2E5288]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/articles"
                className={`px-4 py-3 font-medium text-sm transition-all duration-200 rounded-xl ${
                  isActive('/articles') 
                    ? 'bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] text-white hover:from-[#1e3a6f] hover:to-[#15223e]' 
                    : 'hover:bg-blue-50 text-gray-700 hover:text-[#2E5288]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
