'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dp0la6xmd/video/upload/v1767873687/4154241-uhd_4096_2160_25fps_lptzg0.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase shadow-2xl">
              <span className="w-2 h-2 bg-[#10192E] rounded-full animate-pulse"></span>
              Exclusive Collection
            </div>

            {/* Main Heading - Montserrat for premium feel */}
            <h1 className="font-[var(--font-montserrat)] font-bold text-white leading-[1.1] tracking-tight">
              <span className="block text-3xl md:text-5xl lg:text-7xl xl:text-8xl mb-2 md:mb-4">
                Elevate Your
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-white via-[#10192E] to-white bg-clip-text text-transparent animate-gradient">
                Style
              </span>
            </h1>

            {/* Premium Subtitle - Inter for readability */}
            <p className="font-[var(--font-inter)] text-base md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Curated fragrances and accessories crafted for those who appreciate
              <span className="block mt-2 font-medium text-[#10192E]">
                exceptional quality and timeless elegance
              </span>
            </p>

            {/* Premium Features */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/80 text-xs md:text-sm font-[var(--font-inter)] font-light tracking-wider uppercase">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#10192E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Authentic Products</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#10192E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#10192E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Easy Returns</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
              <Link
                href="/shop"
                className="group relative overflow-hidden bg-white text-black font-[var(--font-montserrat)] font-semibold px-10 md:px-14 py-4 md:py-5 rounded-full text-sm md:text-base lg:text-lg uppercase tracking-[0.15em] transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(0,167,225,0.5)]"
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#10192E] to-[#1a2744] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-20 font-semibold">
                  Explore Collection
                </span>
              </Link>
              
              <Link
                href="/about"
                className="font-[var(--font-inter)] bg-transparent hover:bg-white/10 text-white font-medium px-10 md:px-14 py-4 md:py-5 rounded-full text-sm md:text-base lg:text-lg uppercase tracking-[0.15em] transition-all duration-300 border-2 border-white/40 hover:border-white backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - More Premium */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs font-[var(--font-inter)] tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-white/10 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-white/10 rounded-full blur-sm"></div>
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
