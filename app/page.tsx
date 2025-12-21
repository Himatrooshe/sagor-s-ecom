import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DealOfTheDay from './components/DealOfTheDay';
import ProductListing from './components/ProductListing';
import PromotionalBar from './components/PromotionalBar';
import LatestNews from './components/LatestNews';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DealOfTheDay />
      <ProductListing />
      <PromotionalBar />
      <LatestNews />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
