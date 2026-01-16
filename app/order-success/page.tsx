import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4">Order Placed Successfully!</h1>
          <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
            Thank you for your order. We'll contact you shortly to confirm your order details.
          </p>

          {/* Order Info */}
          <div className="bg-gray-50 rounded-lg p-4 md:p-6 mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">What's Next?</h2>
            <div className="space-y-2 md:space-y-3 text-left">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#54b3e3] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs md:text-sm font-bold">1</span>
                </div>
                <p className="text-sm md:text-base text-gray-700">We'll call you to confirm your order and delivery address</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#54b3e3] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs md:text-sm font-bold">2</span>
                </div>
                <p className="text-sm md:text-base text-gray-700">Your order will be carefully packaged</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#54b3e3] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs md:text-sm font-bold">3</span>
                </div>
                <p className="text-sm md:text-base text-gray-700">Delivery within 3-5 business days</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#54b3e3] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs md:text-sm font-bold">4</span>
                </div>
                <p className="text-sm md:text-base text-gray-700">Pay cash on delivery when you receive your order</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[#54b3e3] text-white rounded-lg p-4 md:p-6 mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Need Help?</h3>
            <p className="text-sm md:text-base mb-3 md:mb-4">Contact us anytime for assistance with your order</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:01335550839"
                className="flex items-center justify-center gap-2 bg-white text-[#54b3e3] px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a 
                href="mailto:inbdstore1@gmail.com"
                className="flex items-center justify-center gap-2 bg-white text-[#54b3e3] px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link
              href="/shop"
              className="bg-[#54b3e3] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#3a9bd1] transition-colors text-sm md:text-base text-center"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="bg-white text-[#54b3e3] px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold border-2 border-[#54b3e3] hover:bg-gray-50 transition-colors text-sm md:text-base text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
