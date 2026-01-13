import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductListing from '../components/ProductListing';
import ScrollToTop from '../components/ScrollToTop';

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const params = await searchParams;
  const searchQuery = params.search || '';

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-8 md:py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-black text-center mb-3 md:mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop'}
          </h1>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto font-inter">
            {searchQuery 
              ? 'Browse through our collection of premium products' 
              : 'Discover our collection of premium products'
            }
          </p>
        </div>
      </div>

      {/* Products Section */}
      <ProductListing searchQuery={searchQuery} />
      
      <Footer />
    </div>
  );
}
