'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-black mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#10192E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a2744] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-8 md:py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black text-center mb-3 md:mb-4">Shopping Cart</h1>
          <p className="text-sm md:text-base text-gray-600 text-center">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.cartItemId || `${item.id}-${item.selectedSize}-${item.selectedColor}`} className="bg-white border border-gray-200 rounded-lg p-3 md:p-4">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* Product Image */}
                    <Link href={`/product/${item.slug}`} className="relative w-full sm:w-24 h-24 flex-shrink-0 bg-gray-50 rounded overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <Link href={`/product/${item.slug}`} className="flex-1">
                          <h3 className="font-bold text-black text-sm md:text-base mb-1 hover:text-[#10192E] transition-colors line-clamp-2">
                            {item.name}
                          </h3>
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.cartItemId || `${item.id}-${item.selectedSize}-${item.selectedColor}`)}
                          className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="text-xs md:text-sm text-gray-600 space-y-1 mb-2">
                        {item.selectedColor && (
                          <p>Color: <span className="font-semibold">{item.selectedColor}</span></p>
                        )}
                        {item.selectedSize && (
                          <p>Size: <span className="font-semibold">{item.selectedSize}</span></p>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-[#10192E] font-bold text-base md:text-lg">৳{item.price}</p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border-2 border-[#10192E] rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.cartItemId || `${item.id}-${item.selectedSize}-${item.selectedColor}`, item.quantity - 1)}
                              className="px-2 md:px-3 py-1 bg-white hover:bg-[#10192E] hover:text-white text-[#10192E] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="px-2 md:px-3 py-1 font-bold text-[#10192E] min-w-[2rem] text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.cartItemId || `${item.id}-${item.selectedSize}-${item.selectedColor}`, item.quantity + 1)}
                              className="px-2 md:px-3 py-1 bg-white hover:bg-[#10192E] hover:text-white text-[#10192E] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>
                          
                          <p className="text-xs md:text-sm text-gray-600 whitespace-nowrap">
                            Total: <span className="font-bold text-black">৳{(item.price * item.quantity).toFixed(2)}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">৳{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold text-black">
                  <span>Total</span>
                  <span className="text-[#10192E]">৳{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-[#10192E] hover:bg-[#1a2744] text-white text-center font-bold py-3 px-6 rounded-lg transition-colors mb-4"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="block w-full bg-white hover:bg-gray-100 text-[#10192E] text-center font-semibold py-3 px-6 rounded-lg border-2 border-[#10192E] transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Features */}
              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
