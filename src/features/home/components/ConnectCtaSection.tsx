import React from "react";
import { ScrollReveal, PerspectiveCard, CutoutReveal } from "../../../components/animations";

export interface ConnectCtaSectionProps {
  /** Betta photograph displayed in the contact panel */
  fishImageSrc?: string;
  instagramUrl?: string;
  onLetsTalkClick?: () => void;
}

export const ConnectCtaSection: React.FC<ConnectCtaSectionProps> = ({
  fishImageSrc = "/images/instagram/gallery-tank-2.jpg",
  instagramUrl = "https://instagram.com/mithula_farm_hut",
  onLetsTalkClick,
}) => {
  return (
    <section
      id="connect-cta"
      className="relative w-full bg-[#F7F7F5] text-[#141414] overflow-hidden select-none font-sans border-t border-[#DCDCD8]"
    >
      {/* Faint Diagonal Dashed Arc Sweeping Behind Layout */}
      <ScrollReveal
        delay={0.02}
        distance={0}
        depth={false}
        once={true}
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
      >
        <svg
          aria-hidden="true"
          className="w-full h-full"
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
      </ScrollReveal>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-14 py-16 sm:py-24">
        {/* Dark Brutalist CTA Banner Card */}
        <PerspectiveCard
          className="relative w-full"
          revealDistance={12}
          delay={0.06}
          maxTilt={1.8}
          interactive={false}
          once={true}
        >
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

            <div className="relative z-10 grid items-center gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(380px,0.85fr)]">
              {/* Typography & Dual Buttons */}
              <div className="w-full max-w-[540px]">
                {/* Green Mono Eyebrow */}
                <ScrollReveal delay={0.1} distance={8} depth={false} once={true}>
                  <div className="mb-4">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#1E8E5A]">
                      05 // CONNECT WITH US
                    </span>
                  </div>
                </ScrollReveal>

                {/* Two-Line Condensed Headline */}
                <ScrollReveal delay={0.16} distance={10} depth={true} once={true}>
                  <h2 className="font-display text-[48px] sm:text-[64px] xl:text-[74px] leading-[0.94] tracking-[0.01em] uppercase text-white mb-8">
                    YOUR AQUATIC
                    <br />
                    WORLD STARTS HERE.
                  </h2>
                </ScrollReveal>

                {/* CTA Action Row */}
                <ScrollReveal delay={0.24} distance={10} depth={false} once={true}>
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
                </ScrollReveal>
              </div>

              {/* Responsive Betta photo stays in its own grid column */}
              <div className="relative w-full max-w-[520px] aspect-[1.55/1] justify-self-center overflow-hidden bg-[#202020]">
                <CutoutReveal
                  delay={0.18}
                  duration={0.8}
                  floatDistance={6}
                  once={true}
                  className="w-full h-full"
                >
                  <img
                    src={fishImageSrc}
                    alt="Blue and red Halfmoon Betta"
                    className="w-full h-full object-cover object-center"
                  />
                </CutoutReveal>
              </div>
            </div>
          </div>
        </PerspectiveCard>
      </div>
    </section>
  );
};

export default ConnectCtaSection;
