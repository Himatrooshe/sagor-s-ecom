'use client';

export default function PromotionalBar() {
  return (
    <section className="bg-[#10192E] text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* FAST DELIVERY */}
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg uppercase mb-1">
                FAST DELIVERY
              </h3>
              <p className="text-sm md:text-base mb-1">
                Nationwide delivery across Bangladesh
              </p>
              <p className="text-sm md:text-base opacity-90">
                Delivery within 3-5 business days
              </p>
            </div>
          </div>

          {/* SECURE PAYMENT */}
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg uppercase mb-1">
                SECURE PAYMENT
              </h3>
              <p className="text-sm md:text-base mb-1">
                Cash on Delivery Available
              </p>
              <p className="text-sm md:text-base opacity-90">
                Safe and secure checkout
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

