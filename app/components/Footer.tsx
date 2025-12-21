'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* QUICK MENU */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">QUICK MENU</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  New arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  Life style
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  Accents
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  Tables
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  Dining
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">NEWSLETTER</h3>
            <p className="text-black text-sm mb-4 text-center">
              Sign up for our free video course and urban garden inspiration
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email letter"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#AB8E66] text-black placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-[#AB8E66] hover:bg-[#8F7455] text-white font-bold uppercase py-2 px-4 rounded-lg transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">INFORMATION</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#AB8E66] transition-colors text-sm">
                  Return
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons - Centered */}
        <div className="flex justify-center gap-6 mt-12 mb-6">
          <a
            href="#"
            className="text-black hover:text-[#AB8E66] transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-black hover:text-[#AB8E66] transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-black hover:text-[#AB8E66] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={2} />
              <circle cx="12" cy="12" r="4" strokeWidth={2} />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </a>
        </div>

        {/* Copyright Notice - Centered */}
        <div className="text-center text-gray-600 text-sm">
          Copyright © {new Date().getFullYear()} Demo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
