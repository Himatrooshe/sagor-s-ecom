'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import productDetailsData from '../../data/product-details.json';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
  slug: string;
}

export default function ProductDetails({ slug }: ProductDetailsProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('descriptions');
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProductsIndex, setRelatedProductsIndex] = useState(0);
  
  // Scroll to top when component loads or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);
  
  // Find the product by slug
  const product = productDetailsData.productDetails.find(p => p.slug === slug);
  
  // If no product found, show error
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Product Not Found</h1>
          <Link href="/" className="text-[#54b3e3] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }


  // Get related products based on the relatedProducts array from product data
  const relatedProducts = product.relatedProducts
    .map(id => productDetailsData.productDetails.find(p => p.id === id))
    .filter(Boolean)
    .map(p => ({
      id: p!.id,
      name: p!.name,
      originalPrice: `৳${p!.originalPrice}`,
      discountedPrice: `৳${p!.discountedPrice}`,
      image: p!.images[0],
      rating: p!.rating,
    }));

  const productImages = product.images;

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

  const youMayAlsoLike = productDetailsData.productDetails
    .filter(p => p.id !== product.id)
    .map(p => ({
      id: p.id,
      name: p.name,
      originalPrice: `৳${p.originalPrice}`,
      discountedPrice: `৳${p.discountedPrice}`,
      image: p.images[0],
      rating: p.rating,
    }));

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Handle related products navigation
  const nextRelatedProduct = () => {
    setRelatedProductsIndex(prev => 
      prev < relatedProducts.length - 1 ? prev + 1 : 0
    );
  };

  const prevRelatedProduct = () => {
    setRelatedProductsIndex(prev => 
      prev > 0 ? prev - 1 : relatedProducts.length - 1
    );
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discountedPrice,
      quantity: quantity,
      image: product.images[0],
      slug: product.slug,
      selectedSize: product.sizes && product.sizes.length > 0 ? product.sizes[selectedSize]?.size : undefined,
      selectedColor: product.colors && product.colors.length > 0 ? product.colors[selectedColor]?.name : undefined,
    });

    // Navigate to checkout
    router.push('/checkout');
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#54b3e3] transition-colors">
              Home
            </Link>
            <span className="mx-2">»</span>
            <Link href="/" className="hover:text-[#54b3e3] transition-colors">
              Accents
            </Link>
            <span className="mx-2">»</span>
            <span className="text-black">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            {/* RELATED PRODUCTS Section */}
            <div>
              <div className="border-t border-gray-300 pt-4 mb-4">
                <h3 className="text-lg font-bold uppercase text-black">RELATED PRODUCTS</h3>
              </div>
              <div className="relative">
                <div className="space-y-4">
                  {relatedProducts.slice(relatedProductsIndex, relatedProductsIndex + 3).map((product) => {
                    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${productSlug}`}
                        className="block group"
                      >
                        <div className="flex gap-3 border border-gray-200 rounded-lg p-2 hover:border-[#54b3e3] hover:shadow-md transition-all">
                          {/* Product Image */}
                          <div className="relative w-20 h-20 bg-gray-50 rounded overflow-hidden">
                            <div className="absolute top-1 left-1 z-10">
                              <span className="bg-[#54b3e3] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
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
                            <h4 className="text-sm font-semibold text-black mb-1 truncate group-hover:text-[#54b3e3] transition-colors">
                              {product.name}
                            </h4>
                            {/* Star Rating */}
                            <div className="flex items-center gap-0.5 mb-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`w-3 h-3 ${
                                    star <= product.rating
                                      ? 'text-[#54b3e3] fill-current'
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
                              <span className="text-sm font-bold text-[#54b3e3]">
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
                {relatedProducts.length > 3 && (
                  <div className="flex justify-between mt-4">
                    <button 
                      onClick={prevRelatedProduct}
                      className="w-8 h-8 bg-gray-100 border border-gray-300 rounded flex items-center justify-center hover:bg-[#54b3e3] hover:text-white hover:border-[#54b3e3] transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
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
                    <button 
                      onClick={nextRelatedProduct}
                      className="w-8 h-8 bg-gray-100 border border-gray-300 rounded flex items-center justify-center hover:bg-[#54b3e3] hover:text-white hover:border-[#54b3e3] transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
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
                )}
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
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                  />
                  {/* Zoom Icon */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-[#54b3e3] rounded-full flex items-center justify-center transition-colors shadow-md z-10">
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
                        className={` w-20 h-20 border-2 rounded overflow-hidden transition-all ${
                          selectedImage === index
                            ? 'border-[#54b3e3] ring-2 ring-[#54b3e3] ring-offset-1'
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
                  <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-[#54b3e3] hover:text-white hover:border-[#54b3e3] transition-colors">
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
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-[#54b3e3] hover:text-white hover:border-[#54b3e3] transition-colors">
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
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star <= product.rating ? 'text-[#54b3e3] fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
                </div>

                {/* Availability */}
                <p className="text-sm text-gray-600 mb-4">
                  Availability: <span className={product.inStock ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </p>

                {/* Price */}
                <div className="mb-6">
                  {product.originalPrice !== product.discountedPrice && (
                    <span className="text-2xl text-gray-400 line-through mr-3">৳{product.originalPrice}</span>
                  )}
                  <span className="text-4xl font-bold text-black">৳{product.discountedPrice}</span>
                  {product.discount > 0 && (
                    <span className="ml-3 text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                {/* Description/Features */}
                <div className="mb-6">
                  <p className="text-sm text-gray-700 mb-3">{product.shortDescription}</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Color Selection */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-black mb-3">
                      Color:
                    </label>
                    <div className="flex gap-3">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(index)}
                          className={`w-10 h-10 rounded border-2 transition-all ${
                            selectedColor === index
                              ? 'border-[#54b3e3] ring-2 ring-[#54b3e3] ring-offset-2'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                          style={{ backgroundColor: color.value }}
                          aria-label={`Select ${color.name} color`}
                        >
                          {selectedColor === index && (
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
                )}

                {/* Size Selection */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-black mb-3">
                      Size:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedSize(index)}
                          disabled={!size.available}
                          className={`px-4 py-2 border-2 rounded transition-all text-sm font-semibold ${
                            selectedSize === index
                              ? 'bg-[#54b3e3] text-white border-[#54b3e3]'
                              : size.available
                              ? 'bg-white text-black border-gray-300 hover:border-[#54b3e3]'
                              : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                          }`}
                        >
                          {size.size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Links */}
                <div className="flex gap-6 mb-6">
                  <button className="flex items-center gap-2 text-black hover:text-[#54b3e3] transition-colors">
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
                  <button className="flex items-center gap-2 text-black hover:text-[#54b3e3] transition-colors">
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
                  <div className="flex items-center border-2 border-[#54b3e3] rounded-lg overflow-hidden">
                    <button
                      onClick={decreaseQuantity}
                      className="px-4 py-2 bg-white hover:bg-[#54b3e3] hover:text-white text-[#54b3e3] transition-colors"
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
                    <span className="px-4 py-2 font-bold text-[#54b3e3] min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="px-4 py-2 bg-white hover:bg-[#54b3e3] hover:text-white text-[#54b3e3] transition-colors"
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
                  <button 
                    onClick={handleBuyNow}
                    disabled={!product.inStock}
                    className="flex-1 bg-[#54b3e3] hover:bg-[#3a9bd1] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    BUY NOW
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
                      ? 'text-[#54b3e3]'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  DESCRIPTIONS
                  {activeTab === 'descriptions' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#54b3e3]"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('information')}
                  className={`px-6 py-3 font-semibold text-sm uppercase transition-colors relative ${
                    activeTab === 'information'
                      ? 'text-[#54b3e3]'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  INFORMATION
                  {activeTab === 'information' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#54b3e3]"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`px-6 py-3 font-semibold text-sm uppercase transition-colors relative ${
                    activeTab === 'reviews'
                      ? 'text-[#54b3e3]'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  REVIEWS
                  {activeTab === 'reviews' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#54b3e3]"></span>
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="text-gray-700 leading-relaxed">
                {activeTab === 'descriptions' && (
                  <div>
                    <p className="mb-4">{product.fullDescription}</p>
                    {product.howToUse && (
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">How to Use:</h4>
                        <p>{product.howToUse}</p>
                      </div>
                    )}
                  </div>
                )}
                {activeTab === 'information' && (
                  <div className="space-y-4">
                    <p><strong>Product Information:</strong></p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Brand: {product.brand}</li>
                      <li>SKU: {product.sku}</li>
                      <li>Category: {product.category}</li>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <li key={key}>{key}: {value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {product.reviewsData && product.reviewsData.length > 0 ? (
                      product.reviewsData.map(review => (
                        <div key={review.id} className="border-b border-gray-200 pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`w-4 h-4 ${star <= review.rating ? 'text-[#54b3e3] fill-current' : 'text-gray-300'}`}
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              ))}
                            </div>
                            <span className="font-semibold">{review.author}</span>
                            {review.verified && <span className="text-xs text-green-600">(Verified)</span>}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{review.date}</p>
                          <p>{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p>No reviews yet. Be the first to review this product!</p>
                    )}
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
                <div className="w-16 h-0.5 bg-[#54b3e3] mx-auto"></div>
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
                            <span className="bg-[#54b3e3] text-white text-xs font-semibold px-3 py-1 rounded-full">
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
                          <h3 className="text-lg font-bold text-black mb-2 text-center group-hover:text-[#54b3e3] transition-colors">
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
                                      ? 'text-[#54b3e3] fill-current'
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
                            <span className="text-[#54b3e3] font-bold text-lg">
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
