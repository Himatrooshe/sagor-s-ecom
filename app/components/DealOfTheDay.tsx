'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import productsData from '../../data/products.json';

interface Product {
  id: number;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  image: string;
  slug: string;
  rating: number;
}

export default function DealOfTheDay() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  // Get featured products with deals (products with discount > 0)
  const products: Product[] = productsData.products
    .filter(product => product.discount > 0)
    .slice(0, 4)
    .map(product => ({
      id: product.id,
      name: product.name,
      originalPrice: `৳${product.originalPrice}`,
      discountedPrice: `৳${product.discountedPrice}`,
      image: product.image,
      slug: product.slug,
      rating: product.rating,
    }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black uppercase mb-3">
            DEAL OF THE DAY
          </h2>
          <div className="w-16 h-1 bg-[#10192E] mx-auto"></div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {products.map((product) => {
            return (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group border border-[#10192E] bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative block"
              >
              {/* New Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-[#10192E] text-black text-xs font-semibold px-3 py-1 rounded">
                  New
                </span>
              </div>

              {/* Image Container */}
              <div className="relative bg-gray-100 h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />

                {/* Hover Overlay with Icons */}
                <div className="absolute inset-0 bg-[#10192E]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
                  <button className="bg-white/90 hover:bg-white rounded-full p-3 transition-colors">
                    <svg
                      className="w-5 h-5 text-[#10192E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button className="bg-white/90 hover:bg-white rounded-full p-3 transition-colors">
                    <svg
                      className="w-5 h-5 text-[#10192E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                  <button className="bg-white/90 hover:bg-white rounded-full p-3 transition-colors">
                    <svg
                      className="w-5 h-5 text-[#10192E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                {/* Countdown Timer */}
                <div className="flex justify-center gap-2 mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center mb-1">
                      <span className="text-black font-bold text-sm md:text-base">
                        {formatTime(timeLeft.days)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 uppercase">Days</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center mb-1">
                      <span className="text-black font-bold text-sm md:text-base">
                        {formatTime(timeLeft.hours)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 uppercase">Hrs</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center mb-1">
                      <span className="text-black font-bold text-sm md:text-base">
                        {formatTime(timeLeft.minutes)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 uppercase">Mins</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center mb-1">
                      <span className="text-black font-bold text-sm md:text-base">
                        {formatTime(timeLeft.seconds)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 uppercase">Secs</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-black font-semibold text-center mb-2">
                  {product.name}
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const fullStars = Math.floor(product.rating);
                    return (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${
                          star <= fullStars
                            ? 'text-[#10192E] fill-current'
                            : 'text-gray-300'
                        }`}
                        fill={star <= fullStars ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    );
                  })}
                </div>

                {/* Price */}
                <div className="text-center">
                  <span className="text-gray-400 line-through mr-2">
                    {product.originalPrice}
                  </span>
                  <span className="text-[#10192E] font-bold text-lg">
                    {product.discountedPrice}
                  </span>
                </div>
              </div>
            </Link>
          );
          })}
        </div>

        {/* Pagination Dots */}
        {products.length > 4 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: Math.ceil(products.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#10192E]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

