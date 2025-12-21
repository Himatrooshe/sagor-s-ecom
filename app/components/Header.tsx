'use client';

export default function Header() {

  return (
    <header className="w-full">
      {/* Top Header Bar - Gold Background */}
      <div className="bg-[#AB8E66] text-white text-sm py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm font-bold">Welcome to our online store!</div>
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
            <div className="text-xl md:text-2xl font-bold order-1 md:order-1">
              <span className="text-[#AB8E66]">DEMO</span>{' '}
              {/* <span className="text-black">Perfume Store</span> */}
            </div>

            {/* Search Bar - Center */}
            <div className="flex-1 max-w-2xl w-full flex gap-0 md:gap-2 order-3 md:order-2">
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-l md:rounded-l focus:outline-none focus:border-[#AB8E66] text-sm md:text-base"
              />
              <select className="hidden md:block px-3 md:px-4 py-2 border border-gray-300 border-l-0 bg-white text-gray-700 focus:outline-none text-sm">
                <option>Accessories</option>
                <option>Perfumes</option>
                <option>Bottles</option>
              </select>
              <button className="bg-[#AB8E66] text-white px-4 md:px-6 py-2 rounded-r hover:bg-[#8F7455] transition-colors">
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
                <span className="absolute -top-2 -right-2 bg-[#AB8E66] text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-[10px] md:text-xs">
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
            {/* All Categories Button - Gold */}
            <button className="bg-[#AB8E66] text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded flex items-center gap-2 hover:bg-[#8F7455] transition-colors text-sm md:text-base w-full lg:w-auto justify-center lg:justify-start">
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
            </button>

            {/* Main Menu */}
            <nav className="flex flex-wrap items-center gap-3 md:gap-6 text-sm md:text-base w-full lg:w-auto justify-center lg:justify-start">
              <a
                href="#"
                className="text-black font-semibold hover:text-[#AB8E66] transition-colors flex items-center gap-1"
              >
                HOME
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
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
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-[#AB8E66] transition-colors flex items-center gap-1"
              >
                SHOP
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
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
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-[#AB8E66] transition-colors flex items-center gap-1"
              >
                PAGES
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
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
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-[#AB8E66] transition-colors flex items-center gap-1"
              >
                BLOGS
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
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
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-[#AB8E66] transition-colors"
              >
                ABOUT
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

