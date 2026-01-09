'use client';

export default function PromotionalBar() {
  return (
    <section className="bg-[#00A7E1] text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* EU FREE DELIVERY */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg uppercase mb-1">
                EU FREE DELIVERY
              </h3>
              <p className="text-sm md:text-base mb-1">
                Free Delivery on all order from EU
              </p>
              <p className="text-sm md:text-base opacity-90">
                with price more than $90.00
              </p>
            </div>
          </div>

          {/* MONEY GUARANTEE */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg uppercase mb-1">
                MONEY GUARANTEE
              </h3>
              <p className="text-sm md:text-base mb-1">
                30 Days money back guarantee
              </p>
              <p className="text-sm md:text-base opacity-90">
                no question asked!
              </p>
            </div>
          </div>

          {/* ONLINE SUPPORT 24/7 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg uppercase mb-1">
                ONLINE SUPPORT 24/7
              </h3>
              <p className="text-sm md:text-base mb-1">
                We&apos;re here to support to you.
              </p>
              <p className="text-sm md:text-base opacity-90">
                Let&apos;s shopping now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

