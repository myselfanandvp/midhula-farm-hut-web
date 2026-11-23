import React from "react";

interface ConnectCtaSectionProps {
  /** Transparent PNG cutout of the Betta fish (facing down-right) */
  fishImageSrc?: string;
  instagramUrl?: string;
  onLetsTalkClick?: () => void;
}

export const ConnectCtaSection: React.FC<ConnectCtaSectionProps> = ({
  fishImageSrc = "/images/betta-cutout.png",
  instagramUrl = "https://instagram.com/mithula_farm_hut",
  onLetsTalkClick,
}) => {
  return (
    <section className="relative w-full bg-[#F7F7F5] text-[#141414] overflow-hidden select-none font-sans border-t border-[#DCDCD8]">
      {/* Faint Diagonal Dashed Arc Sweeping Behind Layout */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1440 520"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 760 120 Q 480 340 160 540"
          stroke="#1E8E5A"
          strokeOpacity="0.22"
          strokeWidth="1.25"
          strokeDasharray="6 6"
        />
      </svg>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-14 py-16 sm:py-24">
        {/* Dark Brutalist CTA Banner Card */}
        <div className="relative w-full bg-[#141414] text-white px-7 py-11 sm:px-14 sm:py-16 shadow-[3px_3px_0px_#C81D77]">
          {/* Faint Dashed Arc Continuation Inside Dark Card */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full z-0 overflow-hidden"
            viewBox="0 0 1280 380"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 680 60 Q 440 240 160 400"
              stroke="#1E8E5A"
              strokeOpacity="0.18"
              strokeWidth="1.25"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Left Typography & Dual Buttons */}
          <div className="relative z-10 max-w-[540px]">
            {/* Green Mono Eyebrow */}
            <div className="mb-4">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#1E8E5A]">
                05 // CONNECT WITH US
              </span>
            </div>

            {/* Two-Line Condensed Headline */}
            <h2 className="font-display text-[48px] sm:text-[64px] xl:text-[74px] leading-[0.94] tracking-[0.01em] uppercase text-white mb-8">
              YOUR AQUATIC
              <br />
              WORLD STARTS HERE.
            </h2>

            {/* CTA Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Solid Off-White Button */}
              <button
                type="button"
                onClick={onLetsTalkClick}
                className="inline-flex items-center justify-center bg-[#F7F7F5] hover:bg-white active:scale-[0.99] transition-all text-[#141414] font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase px-7 py-3.5 cursor-pointer"
              >
                LET'S TALK
              </button>

              {/* Secondary Dark Outlined Instagram Button */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-transparent hover:bg-[#1E1E1E] border border-[#4A4A4A] hover:border-[#7A7A7A] transition-colors text-[#E6E6E3] font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase px-6 py-3.5"
              >
                <svg
                  className="w-3 h-3 text-[#A3A3A3] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L9 3M9 3H4M9 3V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
                <span>FOLLOW ON INSTAGRAM</span>
              </a>
            </div>
          </div>

          {/* Right Overflowing Betta Fish Cutout (Breaks top & bottom edges of card) */}
          <div className="pointer-events-none hidden md:block absolute -top-16 lg:-top-20 -bottom-8 lg:-bottom-10 -right-4 lg:-right-6 w-[48%] lg:w-[46%] max-w-[560px] z-20">
            <img
              src={fishImageSrc}
              alt="Halfmoon Betta fish"
              className="w-full h-full object-contain object-right drop-shadow-[-10px_18px_28px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectCtaSection;
