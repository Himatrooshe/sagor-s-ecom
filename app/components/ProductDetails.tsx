'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('descriptions');
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProductIndex, setRelatedProductIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const categories = [
    'New Arrivals',
    'Dining',
    'Desks',
    'Accents',
    'Accessories',
    'Tables',
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const colors = [
    { name: 'white', value: '#FFFFFF', checked: false },
    { name: 'black', value: '#000000', checked: false },
    { name: 'blue', value: '#4A5568', checked: true },
    { name: 'brown', value: '#8B4513', checked: false },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: 'Toilette',
      originalPrice: '$65',
      discountedPrice: '$45',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop',
      rating: 3,
    },
    {
      id: 2,
      name: 'Bibliotheque',
      originalPrice: '$65',
      discountedPrice: '$45',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop',
      rating: 4,
    },
    {
      id: 3,
      name: 'Tuscan Creations',
      originalPrice: '$65',
      discountedPrice: '$45',
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=200&h=200&fit=crop',
      rating: 3.5,
    },
  ];

  const productImages = [
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=600&fit=crop',
  ];

  const testimonials = [
    {
      id: 1,
      text: 'Donec ligula mauris, posuere sed tincidunt a, facilisis id enim. Class aptent taciti sociosqu ad litora torquent per conubia.',
      author: 'Tom Milikin',
      role: 'CFO/Founder Apple',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 2,
      text: 'Excellent product quality and fast shipping. Highly recommended!',
      author: 'Sarah Johnson',
      role: 'Marketing Director',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 3,
      text: 'Amazing customer service and beautiful products. Will definitely shop again!',
      author: 'Michael Chen',
      role: 'Business Owner',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
  ];

  const youMayAlsoLike = [
    {
      id: 1,
      name: 'Toilette',
      originalPrice: '$65',
      discountedPrice: '$45',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop',
      rating: 3,
    },
    {
      id: 2,
      name: 'Bibliotheque',
      originalPrice: '$65',
      discountedPrice: '$45',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=400&fit=crop',
      rating: 4,
    },
    {
      id: 3,
      name: 'Hypnotic Poison',
      originalPrice: '$65',
      discountedPrice: '$45',
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&h=400&fit=crop',
      rating: 4.5,
    },
  ];

  const nextRelatedProduct = () => {
    setRelatedProductIndex((prev) => (prev + 1) % relatedProducts.length);
  };

  const prevRelatedProduct = () => {
    setRelatedProductIndex((prev) => (prev - 1 + relatedProducts.length) % relatedProducts.length);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#AB8E66] transition-colors">
              Home
            </Link>
            <span className="mx-2">»</span>
            <Link href="/" className="hover:text-[#AB8E66] transition-colors">
              Accents
            </Link>
            <span className="mx-2">»</span>
            <span className="text-black">Glorious Eau</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            {/* CATEGORIES Section */}
            <div className="mb-8">
              <div className="border-t border-gray-300 pt-4 mb-4">
                <h3 className="text-lg font-bold uppercase text-black">CATEGORIES</h3>
              </div>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category}>
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#AB8E66] border-gray-300 rounded focus:ring-[#AB8E66] focus:ring-2"
                      />
                      <span className="ml-3 text-sm text-black group-hover:text-[#AB8E66] transition-colors">
                        {category}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* RELATED PRODUCTS Section */}
            <div>
              <div className="border-t border-gray-300 pt-4 mb-4">
                <h3 className="text-lg font-bold uppercase text-black">RELATED PRODUCTS</h3>
              </div>
              <div className="relative">
                <div className="space-y-4">
                  {relatedProducts.map((product) => {
                    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${productSlug}`}
                        className="block group"
                      >
                        <div className="flex gap-3 border border-gray-200 rounded-lg p-2 hover:border-[#AB8E66] hover:shadow-md transition-all">
                          {/* Product Image */}
                          <div className="relative w-20 h-20 flex-shrink-0 bg-gray-50 rounded overflow-hidden">
                            <div className="absolute top-1 left-1 z-10">
                              <span className="bg-[#AB8E66] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                                New
                              </span>
                            </div>
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-black mb-1 truncate group-hover:text-[#AB8E66] transition-colors">
                              {product.name}
                            </h4>
                            {/* Star Rating */}
                            <div className="flex items-center gap-0.5 mb-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`w-3 h-3 ${
                                    star <= product.rating
                                      ? 'text-[#AB8E66] fill-current'
                                      : 'text-gray-300'
                                  }`}
                                  viewBox="0 0 24 24"
                                  fill={star <= product.rating ? 'currentColor' : 'none'}
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>
                              ))}
                            </div>
                            {/* Price */}
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-400 line-through">
                                {product.originalPrice}
                              </span>
                              <span className="text-sm font-bold text-[#AB8E66]">
                                {product.discountedPrice}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                {/* Navigation Arrows */}
                <div className="flex justify-between mt-4">
                  <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-[#AB8E66] hover:text-white hover:border-[#AB8E66] transition-colors">
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-[#AB8E66] hover:text-white hover:border-[#AB8E66] transition-colors">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Product Display */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Product Image Gallery */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-square bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={productImages[selectedImage]}
                    alt="Glorious Eau Perfume"
                    fill
                    className="object-contain p-8"
                  />
                  {/* Zoom Icon */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-[#AB8E66] rounded-full flex items-center justify-center transition-colors shadow-md z-10">
                    <svg
                      className="w-5 h-5 text-gray-700 hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Thumbnail Gallery */}
                <div className="relative">
                  <div className="flex gap-2 overflow-x-auto">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 border-2 rounded overflow-hidden transition-all ${
                          selectedImage === index
                            ? 'border-[#AB8E66] ring-2 ring-[#AB8E66] ring-offset-1'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                  {/* Navigation Arrows for Thumbnails */}
                  <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-[#AB8E66] hover:text-white hover:border-[#AB8E66] transition-colors">
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-[#AB8E66] hover:text-white hover:border-[#AB8E66] transition-colors">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Glorious Eau
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-[#AB8E66] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Availability */}
                <p className="text-sm text-gray-600 mb-4">
                  Availability: <span className="text-green-600 font-semibold">In Stock</span>
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">$45</span>
                </div>

                {/* Description/Features */}
                <div className="mb-6">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Vestibulum tortor quam</li>
                    <li>• Imported</li>
                    <li>• Art.No. 06-7680</li>
                  </ul>
                </div>

                {/* Color Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-black mb-3">
                    Color:
                  </label>
                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 rounded border-2 transition-all ${
                          selectedColor === color.name
                            ? 'border-[#AB8E66] ring-2 ring-[#AB8E66] ring-offset-2'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: color.value }}
                        aria-label={`Select ${color.name} color`}
                      >
                        {selectedColor === color.name && (
                          <svg
                            className="w-6 h-6 text-white mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-black mb-3">
                    Pots Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border-2 rounded transition-all text-sm font-semibold ${
                          selectedSize === size
                            ? 'bg-[#AB8E66] text-white border-[#AB8E66]'
                            : 'bg-white text-black border-gray-300 hover:border-[#AB8E66]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-6 mb-6">
                  <button className="flex items-center gap-2 text-black hover:text-[#AB8E66] transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="text-sm">Add to Wishlist</span>
                  </button>
                  <button className="flex items-center gap-2 text-black hover:text-[#AB8E66] transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span className="text-sm">View Size Chart</span>
                  </button>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex gap-4 mb-8">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={decreaseQuantity}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
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
                          d="M20 12H4"
                        />
                      </svg>
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
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
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="flex-1 bg-[#AB8E66] hover:bg-[#8F7455] text-white font-bold py-3 px-6 rounded transition-colors">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>

            {/* Product Information Tabs */}
            <div className="border-t border-gray-200 pt-8">
              {/* Tab Navigation */}
              <div className="flex gap-1 border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab('descriptions')}
                  className={`px-6 py-3 font-semibold text-sm uppercase transition-colors relative ${
                    activeTab === 'descriptions'
                      ? 'text-[#AB8E66]'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  DESCRIPTIONS
                  {activeTab === 'descriptions' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AB8E66]"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('information')}
                  className={`px-6 py-3 font-semibold text-sm uppercase transition-colors relative ${
                    activeTab === 'information'
                      ? 'text-[#AB8E66]'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  INFORMATION
                  {activeTab === 'information' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AB8E66]"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`px-6 py-3 font-semibold text-sm uppercase transition-colors relative ${
                    activeTab === 'reviews'
                      ? 'text-[#AB8E66]'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  REVIEWS
                  {activeTab === 'reviews' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AB8E66]"></span>
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="text-gray-700 leading-relaxed">
                {activeTab === 'descriptions' && (
                  <p>
                    Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus. Duis et turpis mauris, vitae cursus leo. Suspendisse pretium gravida lectus, ut malesuada odio venenatis vel. Nam sed malesuada elit, quis luctus eros. Cras id elit in lorem malesuada imperdiet vestibulum vitae ipsum. Quisque ut tortor rhoncus, imperdiet felis non, viverra risus.
                  </p>
                )}
                {activeTab === 'information' && (
                  <div className="space-y-4">
                    <p><strong>Product Information:</strong></p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Material: Premium Glass and Gold</li>
                      <li>Size: Available in multiple sizes</li>
                      <li>Origin: Imported</li>
                      <li>Art.No: 06-7680</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    <p>No reviews yet. Be the first to review this product!</p>
                  </div>
                )}
              </div>
            </div>



            {/* You May Also Like Section */}
            <div className="mt-16 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-black uppercase mb-3">
                  YOU MAY ALSO LIKE
                </h2>
                <div className="w-16 h-0.5 bg-[#AB8E66] mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {youMayAlsoLike.map((product) => {
                  const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link
                      key={product.id}
                      href={`/product/${productSlug}`}
                      className="group block"
                    >
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                        {/* Product Image */}
                        <div className="relative h-64 bg-gray-50">
                          <div className="absolute top-3 left-3 z-10">
                            <span className="bg-[#AB8E66] text-white text-xs font-semibold px-3 py-1 rounded-full">
                              New
                            </span>
                          </div>
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-black mb-2 text-center group-hover:text-[#AB8E66] transition-colors">
                            {product.name}
                          </h3>
                          {/* Star Rating */}
                          <div className="flex justify-center gap-0.5 mb-3">
                            {[1, 2, 3, 4, 5].map((star) => {
                              const fullStars = Math.floor(product.rating);
                              const hasHalfStar = product.rating % 1 >= 0.5;
                              let fillType = 'none';
                              if (star <= fullStars) {
                                fillType = 'currentColor';
                              } else if (star === fullStars + 1 && hasHalfStar) {
                                fillType = 'half';
                              }
                              
                              return (
                                <svg
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= product.rating
                                      ? 'text-[#AB8E66] fill-current'
                                      : 'text-gray-300'
                                  }`}
                                  viewBox="0 0 24 24"
                                  fill={star <= fullStars ? 'currentColor' : 'none'}
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>
                              );
                            })}
                          </div>
                          {/* Price */}
                          <div className="text-center">
                            <span className="text-gray-400 line-through mr-2">
                              {product.originalPrice}
                            </span>
                            <span className="text-[#AB8E66] font-bold text-lg">
                              {product.discountedPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
