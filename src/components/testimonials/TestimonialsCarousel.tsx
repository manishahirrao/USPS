'use client'

import { Star } from 'lucide-react'

export default function TestimonialsCarousel() {
  const handlePrevious = () => {
    const carousel = document.querySelector('.testimonial-carousel-container')
    if (carousel) {
      carousel.scrollBy({ left: -370, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    const carousel = document.querySelector('.testimonial-carousel-container')
    if (carousel) {
      carousel.scrollBy({ left: 370, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-[#e8f4fd] to-[#d1e9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See why users choose our USPS tracking portal to reach official USPS tracking information faster and with less effort.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <svg className="w-6 h-6 text-[#2E5288] group-hover:text-[#1e3a6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <svg className="w-6 h-6 text-[#2E5288] group-hover:text-[#1e3a6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative overflow-hidden testimonial-carousel-container">
            <div className="flex animate-scroll-horizontal" style={{ width: '200%' }}>
              {/* First set of cards */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 testimonial-card relative overflow-hidden min-w-[350px] mx-4">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#2E5288]" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">John Davis</h3>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "This portal makes tracking so convenient! I love how it takes me straight to the official USPS page with my tracking number already filled in."
                </p>
                <div className="text-sm text-gray-500 font-medium">
                  Small Business Owner • California
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 testimonial-card relative overflow-hidden min-w-[350px] mx-4">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#2E5288]" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SM
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">Sarah Miller</h3>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Such a time-saver! Instead of navigating through the USPS website, I just enter my number here and get straight to the tracking results."
                </p>
                <div className="text-sm text-gray-500 font-medium">
                  E-commerce Manager • New York
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 testimonial-card relative overflow-hidden min-w-[350px] mx-4">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#2E5288]" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    RJ
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">Robert Johnson</h3>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Simple and effective! I appreciate that it's transparent about being a third-party service and gets me to the official USPS tracking page quickly."
                </p>
                <div className="text-sm text-gray-500 font-medium">
                  Freelancer • Texas
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 testimonial-card relative overflow-hidden min-w-[350px] mx-4">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#2E5288]" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    EC
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">Emily Chen</h3>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Perfect for online shopping! I track multiple packages daily and this portal saves me so much time. One click and I'm exactly where I need to be on USPS."
                </p>
                <div className="text-sm text-gray-500 font-medium">
                  Online Shopper • Florida
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 testimonial-card relative overflow-hidden min-w-[350px] mx-4">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#2E5288]" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MW
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">Michael Wilson</h3>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "As a small business owner, I ship dozens of packages weekly. This portal has become my go-to tool for quick tracking without the hassle of navigating USPS directly."
                </p>
                <div className="text-sm text-gray-500 font-medium">
                  Business Owner • Illinois
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 testimonial-card relative overflow-hidden min-w-[350px] mx-4">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#2E5288]" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    AL
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">Amanda Lee</h3>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Clean, simple, and effective! I use this portal for all my personal package tracking. It's bookmarked as my first stop whenever I need to check on a delivery."
                </p>
                <div className="text-sm text-gray-500 font-medium">
                  Remote Worker • Washington
                </div>
              </div>

              {/* Duplicate set for seamless scrolling */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 testimonial-card relative overflow-hidden min-w-[350px] mx-4">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#2E5288]" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">John Davis</h3>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "This portal makes tracking so convenient! I love how it takes me straight to the official USPS page with my tracking number already filled in."
                </p>
                <div className="text-sm text-gray-500 font-medium">
                  Small Business Owner • California
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 testimonial-card relative overflow-hidden min-w-[350px] mx-4">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#2E5288]" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SM
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">Sarah Miller</h3>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Such a time-saver! Instead of navigating through the USPS website, I just enter my number here and get straight to the tracking results."
                </p>
                <div className="text-sm text-gray-500 font-medium">
                  E-commerce Manager • New York
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 testimonial-card relative overflow-hidden min-w-[350px] mx-4">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2E5288]/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#2E5288]" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    RJ
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">Robert Johnson</h3>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Simple and effective! I appreciate that it's transparent about being a third-party service and gets me to the official USPS tracking page quickly."
                </p>
                <div className="text-sm text-gray-500 font-medium">
                  Freelancer • Texas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
