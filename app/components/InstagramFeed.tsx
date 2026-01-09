'use client';

import Image from 'next/image';

const instagramImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop',
    alt: 'Perfume bottle with pink liquid',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
    alt: 'Daisy Dream perfume bottle',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&h=300&fit=crop',
    alt: 'Amber perfume bottle',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop',
    alt: 'Gold perfume bottle with flowers',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
    alt: 'Perfume bottle with ribbon',
  },
];

export default function InstagramFeed() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header with Instagram Icon */}
        <div className="text-center mb-8 md:mb-12">
          {/* Instagram Icon */}
          <div className="flex justify-center mb-4">
            <svg
              className="w-12 h-12 md:w-16 md:h-16"
              fill="none"
              stroke="#00A7E1"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" fill="#00A7E1" />
            </svg>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-black uppercase mb-3">
            INSTAGRAM FEED
          </h2>
          
          {/* Underline */}
          <div className="w-16 h-1 bg-[#00A7E1] mx-auto"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
          {instagramImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

