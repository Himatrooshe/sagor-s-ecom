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
  category: string;
  slug: string;
  discount: number;
}

interface BannerSlide {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
  link?: string;
}

export default function HeroSection() {
  const [currentBannerSlide, setCurrentBannerSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Banner slides data - you can replace these with your actual banner images
  const bannerSlides: BannerSlide[] = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dp0la6xmd/image/upload/v1767873198/2025_12_22_09_09_IMG_2288_t3eyhk.png',
      title: 'Premium Fragrances',
      subtitle: 'Discover our exclusive collection',
      link: '/shop?category=perfume'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dp0la6xmd/image/upload/v1767873197/2025_12_23_21_45_IMG_2324_rw1hzh.png',
      title: 'New Arrivals',
      subtitle: 'Shop the latest products',
      link: '/shop?filter=new'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
      title: 'Special Offers',
      subtitle: 'Up to 50% off on selected items',
      link: '/shop?filter=discount'
    }
  ];

  // Auto-play banner carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentBannerSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, bannerSlides.length]);

  const goToBannerSlide = (index: number) => {
    setCurrentBannerSlide(index);
    setIsAutoPlaying(false);
  };

  // Get featured products for the products section
  const products: Product[] = productsData.products
    .filter(product => product.isFeatured || product.discount > 0)
    .slice(0, 6)
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

  return (
    <section className="w-full bg-white">
      {/* Banner Carousel */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
        {/* Banner Slides */}
        <div className="relative w-full h-full">
          {bannerSlides.map((slide, index) => (
            <Link
              key={slide.id}
              href={slide.link || '#'}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentBannerSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title || `Banner ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
                
                {/* Banner Content */}
                {(slide.title || slide.subtitle) && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
                      {slide.title && (
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight tracking-tight">
                          <span className="bg-gradient-to-r from-white via-white to-[#54b3e3] bg-clip-text text-transparent">
                            {slide.title}
                          </span>
                        </h2>
                      )}
                      {slide.subtitle && (
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold drop-shadow-xl">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Dots */}
        {bannerSlides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToBannerSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentBannerSlide
                    ? 'w-8 h-3 bg-white'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Products Section */}
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 md:mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black uppercase mb-1">
                Flash Sale
              </h2>
              <p className="text-gray-600 text-sm md:text-base">On Sale Now</p>
            </div>
            <Link
              href="/shop"
              className="mt-4 sm:mt-0 bg-[#54b3e3] hover:bg-[#3a9bd1] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              SHOP ALL PRODUCTS
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-[#54b3e3] transition-all duration-300 flex flex-col h-full"
              >
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}%
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <Link href={`/product/${product.slug}`} className="block shrink-0">
                  <div className="relative bg-gray-50 h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>

                {/* Product Details */}
                <div className="p-3 sm:p-4 flex flex-col grow">
                  {/* Product Name */}
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-black font-medium text-xs sm:text-sm mb-2 group-hover:text-[#54b3e3] transition-colors line-clamp-2 min-h-[2.5rem]">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="mt-auto">
                    {product.discount > 0 && (
                      <span className="text-gray-400 line-through mr-2 text-xs">
                        {product.originalPrice}
                      </span>
                    )}
                    <div className="text-[#54b3e3] font-bold text-base sm:text-lg">
                      {product.discountedPrice}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
