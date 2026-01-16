'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import categoriesData from '../../data/categories.json';
import { useCart } from '../context/CartContext';

export default function Header() {
  const router = useRouter();
  const { getTotalItems } = useCart();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router]);

  const categories = categoriesData.categories;

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(''); // Clear search after navigation
      setIsMobileMenuOpen(false); // Close mobile menu if open
      setIsMobileSearchOpen(false); // Close mobile search if open
    }
  };

  return (
    <header className={`w-full sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      {/* Top Banner - Contact Info with Scrolling Text */}
      <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 py-3.5">
            {/* Contact Info */}
            <div className="flex items-center gap-4 text-sm font-inter font-semibold shrink-0">
              <a
                href="tel:01335550839"
                className="flex items-center gap-2 hover:text-[#54b3e3] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>01335550839</span>
              </a>
              
              <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
              
              <a
                href="mailto:inbdstore1@gmail.com"
                className="hidden sm:flex items-center gap-2 hover:text-[#54b3e3] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>inbdstore1@gmail.com</span>
              </a>
            </div>

            {/* Scrolling Text */}
            <div className="flex-1 overflow-hidden hidden md:block mx-4 relative">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-marquee-smooth">
                <div className="flex whitespace-nowrap items-center">
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                </div>
                <div className="flex whitespace-nowrap items-center">
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                  <span className="px-6 text-sm font-inter font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#54b3e3] rounded-full animate-pulse"></span>
                    Welcome to inbd. Buy premium product.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Info - Hidden on medium screens to make room for scrolling text */}
            <div className="hidden lg:flex items-center gap-3 text-sm font-inter font-semibold shrink-0">
              <span className="text-white/70">Welcome to our store</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Compact Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 py-2.5 sm:py-3">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="https://res.cloudinary.com/dp0la6xmd/image/upload/v1767873510/logo_-removebg-preview_obslin.png"
                alt="Store Logo"
                width={140}
                height={40}
                className="h-8 sm:h-9 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation Menu - Visible from 768px */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
              <Link href="/" className="relative px-2 py-2 lg:px-3 text-slate-700 hover:text-[#54b3e3] font-inter font-medium text-xs lg:text-sm transition-all duration-300 group hover:bg-slate-50 rounded-lg">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#54b3e3] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/shop" className="relative px-2 py-2 lg:px-3 text-slate-700 hover:text-[#54b3e3] font-inter font-medium text-xs lg:text-sm transition-all duration-300 group hover:bg-slate-50 rounded-lg">
                Shop
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#54b3e3] group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Categories Dropdown */}
              <div className="relative" ref={categoriesRef}>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="relative flex items-center gap-0.5 lg:gap-1 px-2 py-2 lg:px-3 text-slate-700 hover:text-[#54b3e3] font-inter font-medium text-xs lg:text-sm transition-all duration-300 hover:bg-slate-50 rounded-lg group"
                >
                  Categories
                  <svg className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#54b3e3] group-hover:w-full transition-all duration-300"></span>
                </button>

                {/* Categories Dropdown Menu */}
                {isCategoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-slate-100 animate-fadeIn">
                    <div className="p-2 max-h-96 overflow-y-auto">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/category/${category.slug}`}
                          onClick={() => setIsCategoriesOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#54b3e3]/10 transition-all duration-200 group hover:translate-x-1"
                        >
                          <span className="text-xl group-hover:scale-110 transition-transform duration-200">{category.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-slate-800 font-inter font-medium group-hover:text-[#54b3e3] transition-colors text-sm truncate">
                              {category.name}
                            </div>
                          </div>
                          <svg className="w-4 h-4 text-slate-400 group-hover:text-[#54b3e3] opacity-0 group-hover:opacity-100 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/pages" className="relative px-2 py-2 lg:px-3 text-slate-700 hover:text-[#54b3e3] font-inter font-medium text-xs lg:text-sm transition-all duration-300 group hover:bg-slate-50 rounded-lg">
                Pages
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#54b3e3] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/blogs" className="relative px-2 py-2 lg:px-3 text-slate-700 hover:text-[#54b3e3] font-inter font-medium text-xs lg:text-sm transition-all duration-300 group hover:bg-slate-50 rounded-lg">
                Blogs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#54b3e3] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="relative px-2 py-2 lg:px-3 text-slate-700 hover:text-[#54b3e3] font-inter font-medium text-xs lg:text-sm transition-all duration-300 group hover:bg-slate-50 rounded-lg">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#54b3e3] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Search Bar - Compact */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xs lg:max-w-md xl:max-w-lg">
              <div className="w-full flex items-center bg-slate-50 rounded-full border border-slate-200 focus-within:border-[#54b3e3] transition-all overflow-hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 px-3 md:px-4 py-1.5 md:py-2 bg-transparent focus:outline-none text-xs md:text-sm font-inter text-slate-700 placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-1.5 md:px-2 text-slate-400 hover:text-slate-600"
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <button 
                  type="submit"
                  className="bg-[#54b3e3] hover:bg-[#3a9bd1] text-white px-3 md:px-4 py-1.5 md:py-2 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Action Icons */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              {/* Mobile Search Icon */}
              <button 
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-slate-50 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileSearchOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  )}
                </svg>
              </button>

              {/* Wishlist Icon */}
              <button className="hidden md:flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full hover:bg-[#54b3e3]/10 transition-all duration-300 group hover:scale-110">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600 group-hover:text-[#54b3e3] transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Cart Icon */}
              <Link href="/cart" className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full hover:bg-[#54b3e3]/10 transition-all duration-300 group hover:scale-110">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-slate-600 group-hover:text-[#54b3e3] transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-[#54b3e3] text-white text-[10px] sm:text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {/* User Account */}
              <button className="hidden md:flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full hover:bg-[#54b3e3]/10 transition-all duration-300 group hover:scale-110">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600 group-hover:text-[#54b3e3] transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-slate-50 transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search - Toggleable */}
          {isMobileSearchOpen && (
            <form onSubmit={handleSearch} className="md:hidden pb-4 pt-4 animate-fadeIn">
              <div className="flex items-center bg-slate-50 rounded-full border-2 border-[#54b3e3] focus-within:border-[#54b3e3] transition-all overflow-hidden shadow-md">
                <svg className="w-4 h-4 text-slate-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  autoFocus
                  className="flex-1 px-3 py-2 bg-transparent focus:outline-none text-sm font-inter text-slate-700 placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-2 text-slate-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <button type="submit" className="bg-[#54b3e3] hover:bg-[#3a9bd1] text-white px-4 py-2 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </form>
          )}

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 mt-4 animate-fadeIn">
              <nav className="flex flex-col space-y-1 pt-4">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-slate-700 hover:text-[#54b3e3] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  Home
                </Link>
                <Link 
                  href="/shop" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-slate-700 hover:text-[#54b3e3] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  Shop
                </Link>
                <Link 
                  href="/pages" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-slate-700 hover:text-[#54b3e3] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  Pages
                </Link>
                <Link 
                  href="/blogs" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-slate-700 hover:text-[#54b3e3] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  Blogs
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-slate-700 hover:text-[#54b3e3] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  About
                </Link>
                
                {/* Mobile Categories */}
                <div className="px-4 py-2">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Categories</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(0, 6).map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 p-2 text-slate-600 hover:text-[#54b3e3] hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-xs font-medium truncate">{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
