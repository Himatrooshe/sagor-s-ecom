'use client';

import Image from 'next/image';
import { useState } from 'react';

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  isVideo?: boolean;
}

const articles: NewsArticle[] = [
  {
    id: 1,
    title: 'We bring you the best',
    description: 'Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue. Mauris nec ante magna.',
    date: 'AGUST 17, 09:14 AM',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'We know that buying Items',
    description: 'Using Lorem Ipsum allows designers to put together layouts and the form content',
    date: 'AGUST 17, 09:14 AM',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'We design functional Items',
    description: 'Risus non porta suscipit lobortis habitasse felis, aptent interdum pretium ut.',
    date: 'AGUST 17, 09:14 AM',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=300&fit=crop',
    isVideo: true,
  },
];

export default function LatestNews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black uppercase mb-3">
            OUR LATEST NEWS
          </h2>
          <div className="w-16 h-1 bg-[#00A7E1] mx-auto"></div>
        </div>

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                {/* Video Play Button Overlay */}
                {article.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                      <svg
                        className="w-8 h-8 text-[#00A7E1] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div className="p-5 md:p-6">
                {/* Date */}
                <p className="text-xs md:text-sm text-gray-600 mb-3">
                  {article.date}
                </p>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 mb-4 line-clamp-2">
                  {article.description}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-block text-black font-bold text-sm md:text-base hover:text-[#00A7E1] transition-colors relative group"
                >
                  READ MORE
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A7E1] group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot)}
              className={`w-3 h-3 rounded-full transition-colors ${
                dot === currentSlide ? 'bg-[#00A7E1]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

