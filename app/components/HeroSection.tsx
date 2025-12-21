'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Large Hero Banner */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-blue-50 to-white rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Text Content */}
              <div className="flex flex-col justify-center gap-3 md:gap-4">
                <div className="text-[#AB8E66] font-bold text-base md:text-lg lg:text-xl">
                  SALE UP TO 40% OFF!
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
                  Spring Summer Collection
                </h1>
                <div className="text-[#AB8E66] text-xl md:text-2xl lg:text-3xl font-bold">
                  New Price: $270.00
                </div>
                <button className="text-black font-semibold text-base md:text-lg underline hover:text-[#AB8E66] transition-colors self-start mt-2">
                  SHOP NOW
                </button>
              </div>

              {/* Image */}
              <div className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=800&fit=crop"
                  alt="Perfume Bottle"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentSlide(dot)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    dot === currentSlide
                      ? 'bg-[#AB8E66]'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${dot + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Two Smaller Banners */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Top Right Banner */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 md:p-6 flex flex-col md:flex-row lg:flex-col gap-4 h-full">
              <div className="flex-1 flex flex-col justify-between order-2 md:order-1 lg:order-1">
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-2">
                    Pick Your Items
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                    Adipiscing elit curabitur senectus sem
                  </p>
                  <button className="text-black font-semibold text-sm md:text-base underline hover:text-[#AB8E66] transition-colors">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="relative h-40 md:h-48 lg:h-48 flex items-center justify-center order-1 md:order-2 lg:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=600&fit=crop"
                  alt="Shoe-shaped Perfume Bottle"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom Right Banner */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 md:p-6 flex flex-col md:flex-row lg:flex-col gap-4 h-full">
              <div className="flex-1 flex flex-col justify-between order-2 md:order-1 lg:order-1">
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-2">
                    Best Of Products
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">
                    Cras pulvinar loresum dolor conse
                  </p>
                  <div className="text-[#AB8E66] text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    $379.00
                  </div>
                </div>
              </div>
              <div className="relative h-40 md:h-48 lg:h-48 flex items-center justify-center order-1 md:order-2 lg:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=600&fit=crop"
                  alt="Rectangular Perfume Bottle"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

