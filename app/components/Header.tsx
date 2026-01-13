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
    }
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Header Bar - Premium Gradient */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 py-2.5">
            {/* Contact Info */}
            <div className="flex items-center gap-6 text-xs font-inter">
              <a
                href="tel:01335550839"
                className="flex items-center gap-2 hover:text-[#10192E] transition-colors group"
              >
                <svg className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="tracking-wide">01335550839</span>
              </a>
              
              <div className="h-4 w-px bg-white/20"></div>
              
              <a
                href="mailto:inbdstore1@gmail.com"
                className="hidden md:flex items-center gap-2 hover:text-[#10192E] transition-colors group"
              >
                <svg className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="tracking-wide">inbdstore1@gmail.com</span>
              </a>
            </div>

            {/* Right Side Info */}
            <div className="flex items-center gap-4 text-xs font-inter">
              <div className="hidden sm:flex items-center gap-2 text-white/70">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="tracking-wide">Secure Shopping</span>
              </div>
              
              <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
              
              <button className="font-medium hover:text-[#10192E] transition-colors tracking-wide">
                Login / Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/dp0la6xmd/image/upload/v1767873510/logo_-removebg-preview_obslin.png"
                alt="Store Logo"
                width={160}
                height={50}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Search Bar - Premium Design */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl">
              <div className="w-full flex items-center bg-slate-50 rounded-full border-2 border-slate-200 focus-within:border-[#10192E] transition-all duration-300 overflow-hidden">
                <svg className="w-5 h-5 text-slate-400 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for premium products..."
                  className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-sm font-inter text-slate-700 placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <button 
                  type="submit"
                  className="bg-[#10192E] hover:bg-[#1a2744] text-white px-6 py-3 transition-colors flex items-center gap-2 font-inter font-medium text-sm"
                >
                  <span className="hidden lg:inline">Search</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </form>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              {/* Wishlist */}
              <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors group">
                <svg className="w-5 h-5 text-slate-600 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Cart */}
              <Link href="/cart" className="relative group">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-[#10192E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#10192E] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
              </Link>

              {/* User Account */}
              <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors group">
                <svg className="w-5 h-5 text-slate-600 group-hover:text-[#10192E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="md:hidden mt-4">
            <div className="flex items-center bg-slate-50 rounded-full border-2 border-slate-200 focus-within:border-[#10192E] transition-all overflow-hidden">
              <svg className="w-4 h-4 text-slate-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-3 py-2.5 bg-transparent focus:outline-none text-sm font-inter text-slate-700 placeholder:text-slate-400"
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
              <button type="submit" className="bg-[#10192E] text-white px-4 py-2.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </form>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-fadeIn">
              <nav className="flex flex-col space-y-2 pt-4">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-700 hover:text-[#10192E] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  HOME
                </Link>
                <Link 
                  href="/shop" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-700 hover:text-[#10192E] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  SHOP
                </Link>
                <Link 
                  href="/pages" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-700 hover:text-[#10192E] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  PAGES
                </Link>
                <Link 
                  href="/blogs" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-700 hover:text-[#10192E] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  BLOGS
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-700 hover:text-[#10192E] hover:bg-slate-50 font-inter font-medium text-sm transition-colors rounded-lg"
                >
                  ABOUT
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
                        className="flex items-center gap-2 p-2 text-slate-600 hover:text-[#10192E] hover:bg-slate-50 rounded-lg transition-colors"
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

      {/* Navigation Bar - Premium */}
      <div className="bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-1">
            {/* Categories Dropdown - Hidden on Mobile */}
            <div className="relative hidden md:block" ref={categoriesRef}>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-[#10192E] hover:bg-[#1a2744] text-white font-montserrat font-semibold text-sm rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="hidden lg:inline tracking-wide">ALL CATEGORIES</span>
                <span className="lg:hidden">MENU</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Categories Dropdown Menu */}
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl z-50 overflow-hidden animate-fadeIn border border-slate-100">
                  <div className="p-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        onClick={() => setIsCategoriesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-all duration-200 group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                        <div className="flex-1">
                          <div className="text-slate-800 font-inter font-medium group-hover:text-[#10192E] transition-colors text-sm">
                            {category.name}
                          </div>
                          <div className="text-xs text-slate-500 font-inter">
                            {category.productCount} items
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-[#10192E] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              <Link href="/" className="px-4 py-3 text-slate-700 hover:text-[#10192E] font-inter font-medium text-sm transition-colors relative group">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10192E] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/shop" className="px-4 py-3 text-slate-700 hover:text-[#10192E] font-inter font-medium text-sm transition-colors relative group">
                SHOP
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10192E] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/pages" className="px-4 py-3 text-slate-700 hover:text-[#10192E] font-inter font-medium text-sm transition-colors relative group">
                PAGES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10192E] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/blogs" className="px-4 py-3 text-slate-700 hover:text-[#10192E] font-inter font-medium text-sm transition-colors relative group">
                BLOGS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10192E] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="px-4 py-3 text-slate-700 hover:text-[#10192E] font-inter font-medium text-sm transition-colors relative group">
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10192E] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Special Offers Badge */}
            {/* <div className="hidden xl:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-inter font-semibold text-slate-700">Special Offers</span>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
