import Header from '../../components/Header';
import ProductDetails from '../../components/ProductDetails';
import Footer from '../../components/Footer';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductDetails slug={slug} />
      <Footer />
    </div>
  );
}

