'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const bangladeshCities = [
  'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal', 'Rangpur', 'Mymensingh',
  'Comilla', 'Narayanganj', 'Gazipur', 'Tongi', 'Narsingdi', 'Brahmanbaria', 'Chandpur',
  'Feni', 'Lakshmipur', 'Noakhali', 'Cox\'s Bazar', 'Bandarban', 'Khagrachhari', 'Rangamati',
  'Jessore', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira', 'Bogra', 'Joypurhat',
  'Naogaon', 'Natore', 'Chapai Nawabganj', 'Pabna', 'Sirajganj', 'Dinajpur', 'Gaibandha',
  'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Thakurgaon', 'Habiganj', 'Moulvibazar',
  'Sunamganj', 'Barguna', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur', 'Jamalpur',
  'Netrokona', 'Sherpur', 'Kishoreganj', 'Tangail', 'Manikganj', 'Munshiganj', 'Rajbari',
  'Shariatpur', 'Gopalganj', 'Madaripur', 'Faridpur', 'Chuadanga', 'Jhenaidah', 'Bagerhat'
].sort();

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'cod',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCitySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCitySearch(value);
    setShowCityDropdown(true);
  };

  const selectCity = (city: string) => {
    setFormData({ ...formData, city });
    setCitySearch(city);
    setShowCityDropdown(false);
  };

  const filteredCities = bangladeshCities.filter(city =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  ).sort((a, b) => {
    // Prioritize cities that start with the search term
    const aStarts = a.toLowerCase().startsWith(citySearch.toLowerCase());
    const bStarts = b.toLowerCase().startsWith(citySearch.toLowerCase());
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    return 0;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate city is selected
    if (!formData.city || !bangladeshCities.includes(formData.city)) {
      alert('Please select a valid city from the dropdown');
      return;
    }
    
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      router.push('/order-success');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Your cart is empty</h1>
          <button
            onClick={() => router.push('/shop')}
            className="bg-[#54b3e3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a9bd1] transition-colors"
          >
            Continue Shopping
          </button>
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
          <h1 className="text-3xl md:text-4xl font-bold text-black text-center">Checkout</h1>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Billing Details */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-black mb-6">Billing Details</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#54b3e3] transition-colors placeholder:text-gray-400 text-black"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="01XXXXXXXXX"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#54b3e3] transition-colors placeholder:text-gray-400 text-black"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-2">
                  Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#54b3e3] transition-colors placeholder:text-gray-400 text-black"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-2">
                  Full Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="House/Flat, Road, Area"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#54b3e3] transition-colors placeholder:text-gray-400 text-black"
                />
              </div>

              <div className="mb-4 relative">
                <label className="block text-sm font-semibold text-black mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={citySearch}
                  onChange={handleCitySearch}
                  onFocus={() => setShowCityDropdown(true)}
                  placeholder="Search or select city"
                  autoComplete="off"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#54b3e3] transition-colors placeholder:text-gray-500 text-black"
                />
                
                {showCityDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowCityDropdown(false)}
                    ></div>
                    <div className="absolute z-20 w-full mt-1 bg-white border-2 border-[#54b3e3] rounded-lg shadow-xl max-h-64 overflow-y-auto">
                      {filteredCities.length > 0 ? (
                        filteredCities.map((city) => (
                          <button
                            key={city}
                            type="button"
                            onClick={() => selectCity(city)}
                            className="w-full text-left px-4 py-3 text-black font-medium hover:bg-[#54b3e3] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                          >
                            {city}
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-gray-500 text-center">
                          No cities found
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-6">Payment Method</h2>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#54b3e3] transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#54b3e3]"
                  />
                  <div className="flex-1">
                    <span className="font-semibold text-black">Cash on Delivery</span>
                    <p className="text-sm text-gray-600">Pay when you receive the product</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-not-allowed hover:border-gray-200 transition-colors opacity-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    disabled
                    className="w-4 h-4 text-[#54b3e3]"
                  />
                  <div className="flex-1">
                    <span className="font-semibold text-black">Online Payment</span>
                    <p className="text-sm text-gray-600">Coming Soon</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.cartItemId || `${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-3 pb-3 border-b border-gray-200">
                    <div className="relative w-16 h-16 bg-white rounded">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-black truncate">{item.name}</h4>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm font-bold text-[#54b3e3]">৳{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

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
                  <span className="text-[#54b3e3]">৳{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#54b3e3] hover:bg-[#3a9bd1] disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                By placing your order, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </form>
      </div>
      
      <Footer />
    </div>
  );
}
