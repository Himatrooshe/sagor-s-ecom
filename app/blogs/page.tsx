import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Fragrance Trends for 2024",
      excerpt: "Discover the latest fragrance trends that are taking the world by storm this year.",
      date: "January 15, 2024",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop",
      category: "Trends"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Perfume",
      excerpt: "A comprehensive guide to finding a fragrance that matches your personality and style.",
      date: "January 10, 2024",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=400&fit=crop",
      category: "Guide"
    },
    {
      id: 3,
      title: "The Art of Layering Fragrances",
      excerpt: "Learn the secrets of combining different scents to create your unique signature fragrance.",
      date: "January 5, 2024",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=400&fit=crop",
      category: "Tips"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-black text-center mb-4">Our Blog</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Tips, trends, and stories from the world of premium products
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00A7E1] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-black mb-3 hover:text-[#00A7E1] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blogs/${post.id}`}
                  className="text-[#00A7E1] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest updates on new products, special offers, and blog posts delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00A7E1]"
            />
            <button className="bg-[#00A7E1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0095C9] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
