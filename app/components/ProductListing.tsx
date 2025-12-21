'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  image: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Blanche Parfum',
    originalPrice: '$65',
    discountedPrice: '$45',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=400&fit=crop',
    rating: 3.5,
  },
  {
    id: 2,
    name: 'Tuscan Creations',
    originalPrice: '$65',
    discountedPrice: '$45',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop',
    rating: 3.5,
  },
  {
    id: 3,
    name: 'Terra Rossa',
    originalPrice: '$65',
    discountedPrice: '$45',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&h=400&fit=crop',
    rating: 3.5,
  },
  {
    id: 4,
    name: 'Glorious Eau',
    originalPrice: '$65',
    discountedPrice: '$45',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=400&fit=crop',
    rating: 3.5,
  },
  {
    id: 5,
    name: 'Poison Parfum',
    originalPrice: '$65',
    discountedPrice: '$45',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop',
    rating: 3.5,
  },
  {
    id: 6,
    name: 'Elegant Essence',
    originalPrice: '$65',
    discountedPrice: '$45',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&h=400&fit=crop',
    rating: 3.5,
  },
  {
    id: 7,
    name: 'Poison Girl Unexpected',
    originalPrice: '$65',
    discountedPrice: '$45',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=400&fit=crop',
    rating: 3.5,
  },
  {
    id: 8,
    name: 'Golden Aura',
    originalPrice: '$65',
    discountedPrice: '$45',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop',
    rating: 3.5,
  },
];

type TabType = 'bestseller' | 'newarrivals' | 'toprated';

export default function ProductListing() {
  const [activeTab, setActiveTab] = useState<TabType>('bestseller');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center justify-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            className="w-4 h-4 text-[#AB8E66] fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
        {hasHalfStar && (
          <div className="relative w-4 h-4">
            <svg
              className="absolute inset-0 w-4 h-4 text-gray-300 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              className="absolute inset-0 w-4 h-4 text-[#AB8E66] fill-current"
              viewBox="0 0 24 24"
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            className="w-4 h-4 text-gray-300"
            fill="none"
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
    );
  };

  return (
    <section className="bg-white py-12 relative">
      <div className="container mx-auto px-4">
        {/* Tabs Navigation */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          <button
            onClick={() => setActiveTab('bestseller')}
            className={`px-6 py-3 font-semibold text-sm md:text-base transition-all rounded-t ${
              activeTab === 'bestseller'
                ? 'bg-[#AB8E66] text-white'
                : 'text-black hover:text-[#AB8E66]'
            }`}
          >
            Bestseller
          </button>
          <button
            onClick={() => setActiveTab('newarrivals')}
            className={`px-6 py-3 font-semibold text-sm md:text-base transition-all rounded-t ${
              activeTab === 'newarrivals'
                ? 'bg-[#AB8E66] text-white'
                : 'text-black hover:text-[#AB8E66]'
            }`}
          >
            New Arrivals
          </button>
          <button
            onClick={() => setActiveTab('toprated')}
            className={`px-6 py-3 font-semibold text-sm md:text-base transition-all rounded-t ${
              activeTab === 'toprated'
                ? 'bg-[#AB8E66] text-white'
                : 'text-black hover:text-[#AB8E66]'
            }`}
          >
            Top Rated
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => {
            const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link
                key={product.id}
                href={`/product/${productSlug}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all relative block"
              >
                {/* New Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#AB8E66] text-white text-xs font-semibold px-3 py-1 rounded">
                    New
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative bg-gray-50 h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4">
                  {/* Product Name */}
                  <h3 className="text-black font-bold text-center mb-2 text-lg">
                    {product.name}
                  </h3>

                  {/* Star Rating */}
                  <div className="flex justify-center mb-3">
                    {renderStars(product.rating)}
                  </div>

                  {/* Price */}
                  <div className="text-center">
                    <span className="text-gray-400 line-through mr-2">
                      {product.originalPrice}
                    </span>
                    <span className="text-[#AB8E66] font-bold text-lg">
                      {product.discountedPrice}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </section>
  );
}

