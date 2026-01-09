import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductListing from '../components/ProductListing';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-black text-center mb-4">Shop</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover our collection of premium products
          </p>
        </div>
      </div>

      {/* Products Section */}
      <ProductListing />
      
      <Footer />
    </div>
  );
}
