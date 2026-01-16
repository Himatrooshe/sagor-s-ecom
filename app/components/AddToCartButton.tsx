'use client';

import { useCart } from '../context/CartContext';
import { useState } from 'react';
import productsData from '../../data/products.json';

interface AddToCartButtonProps {
  productId: number;
  variant?: 'icon' | 'button' | 'full-width';
  className?: string;
  onAdded?: () => void;
}

export default function AddToCartButton({ 
  productId, 
  variant = 'button',
  className = '',
  onAdded 
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const productData = productsData.products.find(p => p.id === productId);
    if (!productData) return;

    addToCart({
      id: productData.id,
      sku: productData.sku,
      name: productData.name,
      price: productData.discountedPrice,
      originalPrice: productData.originalPrice,
      quantity: 1,
      image: productData.image,
      slug: productData.slug,
    });

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Call optional callback
    if (onAdded) {
      onAdded();
    }
  };

  // Icon variant (for hover overlays)
  if (variant === 'icon') {
    return (
      <button
        onClick={handleAddToCart}
        className={`bg-white hover:bg-gray-100 rounded-full p-3 transition-colors shadow-lg transform hover:scale-110 duration-200 ${className}`}
        aria-label="Add to cart"
        title="Add to cart"
      >
        {showSuccess ? (
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-[#54b3e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        )}
      </button>
    );
  }

  // Button variant (for product cards)
  if (variant === 'button') {
    return (
      <button
        onClick={handleAddToCart}
        className={`bg-[#54b3e3] hover:bg-[#3a9bd1] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${className}`}
      >
        {showSuccess ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Added!
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to Cart
          </>
        )}
      </button>
    );
  }

  // Full width variant (for product cards bottom)
  return (
    <button
      onClick={handleAddToCart}
      className={`w-full bg-[#54b3e3] hover:bg-[#3a9bd1] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${className}`}
    >
      {showSuccess ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Added to Cart!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Add to Cart
        </>
      )}
    </button>
  );
}
