import React from "react";
import { ScrollReveal, PerspectiveCard, CutoutReveal } from "../../../components/animations";

export interface HeroSectionProps {
  /** Transparent PNG cutout of the Betta fish & water splash */
  fishImageSrc?: string;
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  fishImageSrc = "/images/betta-cutout.png",
  onExploreClick,
}) => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[680px] lg:min-h-[760px] bg-[#F7F7F5] text-[#141414] overflow-hidden select-none font-sans"
    >
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-14 pt-12 sm:pt-16 pb-24">
        {/* Dark Editorial Hero Card (Overlaps the fish image via z-20) */}
        <PerspectiveCard
          className="relative z-20 w-full max-w-[760px]"
          revealDistance={12}
          delay={0.05}
          maxTilt={2.2}
          interactive={true}
          once={false}
        >
          <div className="w-full bg-[#141414] text-white px-7 py-9 sm:px-12 sm:py-12 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
            {/* Top Metadata Eyebrow Row */}
            <ScrollReveal delay={0.08} distance={8} depth={false} once={false}>
              <div className="flex flex-wrap items-center gap-3 mb-7 font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase">
                <span className="inline-block bg-[#1E8E5A] text-[#0A1F14] font-bold px-2.5 py-1 leading-none">
                  EST. 2024 // ORNAMENTAL AQUACULTURE
                </span>
                <span className="text-[#A3A3A3] font-medium">KERALA EDITORIAL EDITION</span>
              </div>
            </ScrollReveal>

            {/* Display Headline */}
            <ScrollReveal delay={0.15} distance={10} depth={true} once={false}>
              <h1 className="font-display text-[54px] sm:text-[76px] md:text-[84px] leading-[0.94] tracking-[0.01em] uppercase text-white mb-6">
                DISCOVER A
                <br />
                WORLD BELOW.
              </h1>
            </ScrollReveal>

            {/* Supporting Description */}
            <ScrollReveal delay={0.22} distance={10} depth={false} once={false}>
              <p className="text-[#B8B8B8] text-[14px] sm:text-[16px] leading-[1.6] max-w-[400px] mb-9 font-normal">
                Show-grade Halfmoon Bettas, rare freshwater lineages, and architectural aquascapes bred
                for collectors.
              </p>
            </ScrollReveal>

            {/* CTA Button & Secondary Micro-Copy */}
            <ScrollReveal delay={0.28} distance={10} depth={false} once={false}>
              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={onExploreClick}
                  className="group inline-flex items-center gap-3 bg-[#C81D77] hover:bg-[#b01768] active:scale-[0.99] transition-all text-white font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase px-6 py-4 cursor-pointer"
                >
                  <span>EXPLORE SPECIES</span>
                  {/* Diagonal Down-Right Arrow matching reference */}
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 2.5L11.5 11.5M11.5 11.5V4.5M11.5 11.5H4.5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>

                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#8E8E8E]">
                  08 CURATED LINEAGES
                </span>
              </div>
            </ScrollReveal>
          </div>
        </PerspectiveCard>
      </div>

      {/* Bottom-Right Betta Fish & Splash Cutout (Sits underneath card at z-10) */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-10 w-[85%] sm:w-[62%] md:w-[54%] max-w-[740px] flex justify-end items-end">
        <CutoutReveal
          delay={0.16}
          duration={0.8}
          floatDistance={6}
          once={false}
          className="w-full flex justify-end items-end"
        >
          <img
            src={fishImageSrc}
            alt="Halfmoon Betta fish with water splash"
            className="w-full h-auto object-contain object-bottom drop-shadow-[-12px_16px_28px_rgba(0,0,0,0.12)]"
          />
        </CutoutReveal>
      </div>

      {/* Bottom-Left Coordinates Badge */}
      <div className="absolute bottom-5 left-6 sm:left-14 z-30">
        <ScrollReveal delay={0.32} distance={8} depth={false} once={false}>
          <div className="inline-flex items-center gap-2.5 bg-[#F7F7F5]/90 backdrop-blur-xs border border-[#9E9E9A] px-3 py-1.5 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase text-[#2A2A2A]">
            <span className="w-2 h-2 rounded-full bg-[#C81D77] shrink-0" />
            <span>KERALA_FARM_01 // 10.8505° N, 76.2711° E</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
