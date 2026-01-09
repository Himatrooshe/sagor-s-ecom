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

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-block bg-[#00A7E1] text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-base lg:text-lg uppercase tracking-wide">
              SALE UP TO 40% OFF!
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Spring Summer
              <br />
              <span className="text-[#00A7E1]">Collection</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
              Discover our exquisite collection of premium products
            </p>

            {/* Price */}
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <span className="text-white/70 line-through text-xl md:text-2xl lg:text-3xl">
                $450.00
              </span>
              <span className="text-[#00A7E1] font-bold text-3xl md:text-4xl lg:text-5xl">
                $270.00
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
              <Link
                href="/shop"
                className="bg-[#00A7E1] hover:bg-[#8F7455] text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-lg text-base md:text-lg lg:text-xl uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-lg text-base md:text-lg lg:text-xl uppercase tracking-wide transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

