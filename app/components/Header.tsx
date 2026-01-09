'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import categoriesData from '../../data/categories.json';

export default function Header() {
  const router = useRouter();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const categories = categoriesData.categories;

  return (
    <header className="w-full">
      {/* Top Header Bar - Gold Background */}
      <div className="bg-[#00A7E1] text-white text-sm py-3 md:py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <a
              href="tel:01335550839"
              className="flex items-center gap-1.5 hover:underline"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>01335550839</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href="mailto:mdsagorhossine2001@gmail.com"
              className="flex items-center gap-1.5 hover:underline"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="hidden md:inline">mdsagorhossine2001@gmail.com</span>
              <span className="md:hidden">Email</span>
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-white/30 hidden sm:inline">|</span>
            <button className="text-white font-bold hover:underline text-xs sm:text-sm whitespace-nowrap">Login or Register</button>
          </div>
        </div>
      </div>

      {/* Main Header Section - White Background */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="order-1 md:order-1">
              <Image
                src="https://res.cloudinary.com/dp0la6xmd/image/upload/v1767873510/logo_-removebg-preview_obslin.png"
                alt="Store Logo"
                width={180}
                height={60}
                className="h-12 md:h-16 w-auto"
                priority
              />
            </Link>

            {/* Search Bar - Center */}
            <div className="flex-1 max-w-2xl w-full flex gap-0 md:gap-2 order-3 md:order-2">
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-l md:rounded-l focus:outline-none focus:border-[#00A7E1] text-sm md:text-base"
              />
              <select 
                className="hidden md:block px-3 md:px-4 py-2 border border-gray-300 border-l-0 bg-white text-gray-700 focus:outline-none text-sm"
                onChange={(e) => {
                  if (e.target.value) {
                    router.push(`/category/${e.target.value}`);
                  }
                }}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button className="bg-[#00A7E1] text-white px-4 md:px-6 py-2 rounded-r hover:bg-[#8F7455] transition-colors">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
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
            </div>

            {/* User Icons */}
            <div className="flex items-center gap-3 md:gap-4 order-2 md:order-3">
              <button className="relative">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-[#00A7E1] text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-[10px] md:text-xs">
                  0
                </span>
              </button>
              <button>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4 py-3">
            {/* All Categories Button - Gold with Dropdown */}
            <div className="relative w-full lg:w-auto" ref={categoriesRef}>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="bg-[#00A7E1] text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded flex items-center gap-2 hover:bg-[#0095C9] hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base w-full lg:w-auto justify-center lg:justify-start"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                ALL CATEGORIES
                <svg
                  className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Categories Dropdown */}
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-2xl z-50 overflow-hidden animate-fadeIn">
                  <div className="py-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        onClick={() => setIsCategoriesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#00A7E1]/5 transition-all duration-200 group border-l-4 border-transparent hover:border-[#00A7E1] relative overflow-hidden"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{category.icon}</span>
                        <div className="flex-1">
                          <div className="text-black font-semibold group-hover:text-[#00A7E1] transition-colors duration-200">
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-600 mt-0.5 transition-colors duration-200">
                            {category.productCount} products
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-[#00A7E1] group-hover:translate-x-1 transition-all duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main Menu */}
            <nav className="flex flex-wrap items-center gap-3 md:gap-6 text-sm md:text-base w-full lg:w-auto justify-center lg:justify-start">
              <Link
                href="/"
                className="text-black font-semibold hover:text-[#00A7E1] transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/shop"
                className="text-black font-semibold hover:text-[#00A7E1] transition-colors"
              >
                SHOP
              </Link>
              <Link
                href="/pages"
                className="text-black font-semibold hover:text-[#00A7E1] transition-colors"
              >
                PAGES
              </Link>
              <Link
                href="/blogs"
                className="text-black font-semibold hover:text-[#00A7E1] transition-colors"
              >
                BLOGS
              </Link>
              <Link
                href="/about"
                className="text-black font-semibold hover:text-[#00A7E1] transition-colors"
              >
                ABOUT
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

