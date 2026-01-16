import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '../../../data/products.json';
import categoriesData from '../../../data/categories.json';
import ScrollToTop from '../../components/ScrollToTop';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find the category
  const category = categoriesData.categories.find(cat => cat.slug === slug);
  
  // Filter products by category
  const categoryProducts = productsData.products.filter(
    product => product.category === category?.name
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Category Not Found</h1>
          <Link href="/" className="text-[#54b3e3] hover:underline">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      
      {/* Category Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <h1 className="text-4xl font-bold text-black">{category.name}</h1>
          </div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4">
            {category.description}
          </p>
          <p className="text-center text-sm text-gray-500">
            {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} available
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#54b3e3] transition-colors">
              Home
            </Link>
            <span className="mx-2">»</span>
            <span className="text-black">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gray-50">
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-[#54b3e3] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#54b3e3] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const fullStars = Math.floor(product.rating);
                      return (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${
                            star <= fullStars
                              ? 'text-[#54b3e3] fill-current'
                              : 'text-gray-300'
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      );
                    })}
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {product.discount > 0 && (
                      <span className="text-sm text-gray-400 line-through">
                        ৳{product.originalPrice}
                      </span>
                    )}
                    <span className="text-xl font-bold text-[#54b3e3]">
                      ৳{product.discountedPrice}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="mt-3">
                    {product.inStock ? (
                      <span className="text-xs text-green-600 font-semibold">
                        ✓ In Stock
                      </span>
                    ) : (
                      <span className="text-xs text-red-600 font-semibold">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">No Products Found</h3>
            <p className="text-gray-600 mb-6">
              There are currently no products in this category.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#54b3e3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a9bd1] transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>

      {/* Related Categories */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-black text-center mb-8">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoriesData.categories
              .filter(cat => cat.slug !== slug)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="group bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#54b3e3] hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <h3 className="text-sm font-semibold text-black group-hover:text-[#54b3e3] transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {cat.productCount} items
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
