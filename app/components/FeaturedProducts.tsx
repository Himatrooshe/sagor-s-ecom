'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import productsData from '../../data/products.json';
import { useCart } from '../context/CartContext';
import AddToCartButton from './AddToCartButton';

interface Product {
  id: number;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  image: string;
  rating: number;
  category: string;
  slug: string;
  discount: number;
}

export default function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter featured products and map to component format
  const products: Product[] = productsData.products
    .filter(product => product.isFeatured)
    .map(product => ({
      id: product.id,
      name: product.name,
      originalPrice: `৳${product.originalPrice}`,
      discountedPrice: `৳${product.discountedPrice}`,
      image: product.image,
      rating: product.rating,
      category: product.category,
      slug: product.slug,
      discount: product.discount,
    }));

  // Carousel settings
  const productsPerSlide = 3;
  const totalSlides = Math.ceil(products.length / productsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Get products for current slide
  const getCurrentProducts = () => {
    const startIndex = currentSlide * productsPerSlide;
    const endIndex = startIndex + productsPerSlide;
    return products.slice(startIndex, endIndex);
  };
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black uppercase mb-3">
            Featured Products
          </h2>
          <div className="w-16 h-1 bg-[#54b3e3] mx-auto mb-2"></div>
          <p className="text-gray-600 mt-3">
            Discover our handpicked selection of premium products
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white hover:bg-[#54b3e3] text-black hover:text-white border-2 border-gray-200 hover:border-[#54b3e3] rounded-full p-3 shadow-lg transition-all duration-300"
                aria-label="Previous products"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white hover:bg-[#54b3e3] text-black hover:text-white border-2 border-gray-200 hover:border-[#54b3e3] rounded-full p-3 shadow-lg transition-all duration-300"
                aria-label="Next products"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {getCurrentProducts().map((product) => {
            return (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-[#54b3e3] transition-all duration-300 flex flex-col h-full"
              >
                {/* Category Badge */}
                {/* <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#54b3e3] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {product.category}
                  </span>
                </div> */}

                {/* Image Container */}
                <div className="relative bg-white h-72 overflow-hidden shrink-0">
                  <Link href={`/product/${product.slug}`} className="block h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>

                  {/* Hover Overlay with Icons */}
                  <div className="absolute inset-0 bg-[#54b3e3]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20 pointer-events-none">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="bg-white hover:bg-gray-100 rounded-full p-3 transition-colors shadow-lg transform hover:scale-110 duration-200 pointer-events-auto"
                    >
                      <svg
                        className="w-5 h-5 text-[#54b3e3]"
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
                    <Link 
                      href={`/product/${product.slug}`}
                      className="bg-white hover:bg-gray-100 rounded-full p-3 transition-colors shadow-lg transform hover:scale-110 duration-200 pointer-events-auto"
                    >
                      <svg
                        className="w-5 h-5 text-[#54b3e3]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </Link>
                    <div className="pointer-events-auto" onClick={(e) => { e.stopPropagation(); }}>
                      <AddToCartButton productId={product.id} variant="icon" />
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col grow">
                  {/* Product Name */}
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-black font-bold text-lg mb-3 text-center group-hover:text-[#54b3e3] transition-colors cursor-pointer line-clamp-2 min-h-14">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-4 shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${
                          star <= product.rating
                            ? 'text-[#54b3e3] fill-current'
                            : 'text-gray-300'
                        }`}
                        fill={star <= product.rating ? 'currentColor' : 'none'}
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
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4 shrink-0">
                    {product.discount > 0 && (
                      <span className="text-gray-400 line-through mr-2 text-sm">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-[#54b3e3] font-bold text-xl">
                      {product.discountedPrice}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto shrink-0">
                    <AddToCartButton 
                      productId={product.id} 
                      variant="button"
                      className="flex-1"
                    />
                    <Link
                      href={`/product/${product.slug}`}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-[#54b3e3]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Products
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
