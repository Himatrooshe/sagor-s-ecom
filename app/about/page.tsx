import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-8 md:py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black text-center mb-3 md:mb-4">About Us</h1>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto">
            Learn more about our story and mission
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Company Story */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">Our Story</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              Welcome to our store! We are passionate about bringing you the finest selection of products 
              that combine quality, style, and affordability. Our journey began with a simple mission: 
              to create a shopping experience that our customers love and trust.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Every product in our collection is carefully curated to ensure it meets our high standards. 
              We believe in providing exceptional customer service and making your shopping experience as 
              seamless as possible.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#54b3e3] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">Quality</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                We ensure every product meets the highest quality standards
              </p>
            </div>

            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#54b3e3] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Quick and reliable shipping to your doorstep
              </p>
            </div>

            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#54b3e3] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">Support</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Dedicated customer support team always ready to help
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[#54b3e3] text-white rounded-lg p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Get in Touch</h3>
            <p className="text-sm md:text-base mb-4 md:mb-6">Have questions? We'd love to hear from you!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <a href="tel:01335550839" className="flex items-center justify-center gap-2 bg-white text-[#54b3e3] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a href="mailto:inbdstore1@gmail.com" className="flex items-center justify-center gap-2 bg-white text-[#54b3e3] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
