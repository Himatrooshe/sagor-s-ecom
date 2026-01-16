'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen overflow-hidden">
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
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="container mx-auto text-center w-full">
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 rounded-full font-medium text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase shadow-2xl">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
              Exclusive Collection
            </div>

            {/* Main Heading - Montserrat for premium feel */}
            <h1 className="font-montserrat font-bold text-white leading-[1.1] tracking-tight px-2">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                Elevate Your
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-linear-to-r from-white via-[#54b3e3] to-white bg-clip-text text-transparent animate-gradient">
                Style
              </span>
            </h1>

            {/* Premium Subtitle - Inter for readability */}
            <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Curated fragrances and accessories crafted for those who appreciate
              <span className="block mt-1 sm:mt-2 font-medium text-[#54b3e3]">
                exceptional quality and timeless elegance
              </span>
            </p>

            {/* Premium Features */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white/80 text-[10px] sm:text-xs md:text-sm font-inter font-light tracking-wider uppercase px-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#54b3e3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Authentic Products</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#54b3e3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#54b3e3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Easy Returns</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-3 md:pt-4 px-4">
              <Link
                href="/shop"
                className="group relative overflow-hidden bg-white text-black font-montserrat font-semibold w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-14 py-3 sm:py-3.5 md:py-4 lg:py-5 rounded-full text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest sm:tracking-[0.15em] transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(84,179,227,0.5)] text-center"
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-linear-to-r from-[#54b3e3] to-[#3a9bd1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-20 font-semibold">
                  Explore Collection
                </span>
              </Link>
              
              <Link
                href="/about"
                className="font-inter bg-transparent hover:bg-white/10 text-white font-medium w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-14 py-3 sm:py-3.5 md:py-4 lg:py-5 rounded-full text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest sm:tracking-[0.15em] transition-all duration-300 border-2 border-white/40 hover:border-white backdrop-blur-sm text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - More Premium */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 sm:gap-2 animate-bounce">
        <span className="text-white/60 text-[10px] sm:text-xs font-inter tracking-widest uppercase hidden sm:block">Scroll</span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-1.5 sm:h-2 bg-white/60 rounded-full"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-4 sm:left-6 md:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border border-white/10 rounded-full blur-sm hidden sm:block"></div>
      <div className="absolute bottom-1/4 right-4 sm:right-6 md:right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-white/10 rounded-full blur-sm hidden sm:block"></div>
      
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
