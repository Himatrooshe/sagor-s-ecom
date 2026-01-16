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
  rating: number;
  slug: string;
  discount: number;
}

type TabType = 'bestseller' | 'newarrivals' | 'toprated';

interface ProductListingProps {
  searchQuery?: string;
}

export default function ProductListing({ searchQuery = '' }: ProductListingProps) {
  const [activeTab, setActiveTab] = useState<TabType>('bestseller');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Reset to bestseller tab when search query changes
  useEffect(() => {
    if (searchQuery) {
      setActiveTab('bestseller');
    }
  }, [searchQuery]);

  // Get products from JSON data
  const getProductsByTab = (): Product[] => {
    let filteredProducts = productsData.products;
    
    // First, filter by search query if provided
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = productsData.products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.shortDescription?.toLowerCase().includes(query)
      );
    }
    
    // Then apply tab filtering/sorting
    if (!searchQuery) {
      switch (activeTab) {
        case 'bestseller':
          // Sort by reviews (most reviewed = bestseller)
          filteredProducts = [...filteredProducts].sort((a, b) => b.reviews - a.reviews);
          break;
        case 'newarrivals':
          // Filter new products
          filteredProducts = filteredProducts.filter(p => p.isNew);
          break;
        case 'toprated':
          // Sort by rating
          filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
          break;
      }
    }
    
    // Limit results if not searching
    const productsToShow = searchQuery ? filteredProducts : filteredProducts.slice(0, 8);
    
    return productsToShow.map(product => ({
      id: product.id,
      name: product.name,
      originalPrice: `৳${product.originalPrice}`,
      discountedPrice: `৳${product.discountedPrice}`,
      image: product.image,
      rating: product.rating,
      slug: product.slug,
      discount: product.discount,
    }));
  };

  const products = getProductsByTab();

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
            className="w-4 h-4 text-[#54b3e3] fill-current"
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
              className="absolute inset-0 w-4 h-4 text-[#54b3e3] fill-current"
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
        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-8 text-center">
            <p className="text-gray-600 font-inter">
              Found <span className="font-bold text-[#54b3e3]">{products.length}</span> {products.length === 1 ? 'product' : 'products'}
            </p>
          </div>
        )}

        {/* Tabs Navigation - Hide when searching */}
        {!searchQuery && (
          <div className="flex justify-center gap-2 md:gap-4 mb-8">
            <button
              onClick={() => setActiveTab('bestseller')}
              className={`px-6 py-3 font-montserrat font-semibold text-sm md:text-base transition-all rounded-lg ${
                activeTab === 'bestseller'
                  ? 'bg-[#54b3e3] text-white shadow-lg'
                  : 'text-slate-700 hover:text-[#54b3e3] hover:bg-slate-50'
              }`}
            >
              Bestseller
            </button>
            <button
              onClick={() => setActiveTab('newarrivals')}
              className={`px-6 py-3 font-montserrat font-semibold text-sm md:text-base transition-all rounded-lg ${
                activeTab === 'newarrivals'
                  ? 'bg-[#54b3e3] text-white shadow-lg'
                  : 'text-slate-700 hover:text-[#54b3e3] hover:bg-slate-50'
              }`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setActiveTab('toprated')}
              className={`px-6 py-3 font-montserrat font-semibold text-sm md:text-base transition-all rounded-lg ${
                activeTab === 'toprated'
                  ? 'bg-[#54b3e3] text-white shadow-lg'
                  : 'text-slate-700 hover:text-[#54b3e3] hover:bg-slate-50'
              }`}
            >
              Top Rated
            </button>
          </div>
        )}

        {/* No Results Message */}
        {searchQuery && products.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-2xl font-montserrat font-bold text-slate-800 mb-3">No Products Found</h3>
            <p className="text-gray-600 font-inter mb-6">
              We couldn't find any products matching "<span className="font-semibold text-[#54b3e3]">{searchQuery}</span>"
            </p>
            <a
              href="/shop"
              className="inline-block bg-[#54b3e3] hover:bg-[#3a9bd1] text-white font-montserrat font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Browse All Products
            </a>
          </div>
        )}

        {/* Product Grid */}
        {products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => {
            return (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all relative block"
              >
                {/* New Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#54b3e3] text-white text-xs font-semibold px-3 py-1 rounded">
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
                    {product.discount > 0 && (
                      <span className="text-gray-400 line-through mr-2">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-[#54b3e3] font-bold text-lg">
                      {product.discountedPrice}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
          </div>
        )}
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

