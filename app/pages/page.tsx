import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function PagesDirectory() {
  const pages = [
    {
      title: "Shop",
      description: "Browse our complete collection of products",
      link: "/shop",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "About Us",
      description: "Learn more about our story and mission",
      link: "/about",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Blog",
      description: "Read our latest articles and updates",
      link: "/blogs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Contact",
      description: "Get in touch with our team",
      link: "/about#contact",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Privacy Policy",
      description: "Read our privacy and data protection policies",
      link: "/pages/privacy",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Terms & Conditions",
      description: "Review our terms of service",
      link: "/pages/terms",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-black text-center mb-4">Site Pages</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Quick access to all important pages on our website
          </p>
        </div>
      </div>

      {/* Pages Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.link}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-[#00A7E1] hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-600 group-hover:bg-[#00A7E1] group-hover:text-white transition-colors">
                {page.icon}
              </div>
              <h2 className="text-xl font-bold text-black mb-2 group-hover:text-[#00A7E1] transition-colors">
                {page.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{page.description}</p>
              <div className="flex items-center gap-2 text-[#00A7E1] font-semibold">
                Visit Page
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
