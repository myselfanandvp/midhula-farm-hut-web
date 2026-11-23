import React from "react";
import { ScrollReveal, PerspectiveCard, CutoutReveal } from "../../../components/animations";

export interface FarmStorySectionProps {
  /** Transparent PNG cutout of the Betta fish (facing down-left) */
  fishImageSrc?: string;
}

export const FarmStorySection: React.FC<FarmStorySectionProps> = ({
  fishImageSrc = "/images/betta-cutout-left.png",
}) => {
  return (
    <section
      id="farm-story"
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
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 880 -40 Q 610 380 310 840"
            stroke="#1E8E5A"
            strokeOpacity="0.24"
            strokeWidth="1.25"
            strokeDasharray="6 6"
          />
        </svg>
      </ScrollReveal>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-14 pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Left Column: Layered Dark Frame + Overflowing Fish + Overlapping Caption Card */}
          <div className="lg:col-span-6 relative pt-14 sm:pt-20 pb-10 sm:pb-12">
            {/* Base Dark Rectangle with Magenta Offset Shadow */}
            <PerspectiveCard
              className="relative w-[92%] sm:w-[88%]"
              revealDistance={12}
              delay={0.06}
              maxTilt={2.0}
              interactive={false}
              once={true}
            >
              <div className="relative w-full aspect-[1.28/1] bg-[#141414] shadow-[3px_3px_0px_#C81D77]">
                {/* Overflowing Betta Fish Cutout (Breaks out of top & right edges) */}
                <div className="pointer-events-none absolute -top-24 sm:-top-32 -left-4 sm:-left-6 w-[108%] z-20">
                  <CutoutReveal delay={0.16} duration={0.8} floatDistance={6} once={true}>
                    <img
                      src={fishImageSrc}
                      alt="Halfmoon Betta fish specimen"
                      className="w-full h-auto object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)]"
                    />
                  </CutoutReveal>
                </div>

                {/* Bottom-Right Overlapping Dark Callout Card */}
                <div className="absolute -bottom-8 -right-5 sm:-right-8 z-30 w-[250px] sm:w-[295px]">
                  <ScrollReveal delay={0.22} distance={8} depth={true} once={true}>
                    <div className="w-full bg-[#141414] text-white p-5 sm:p-6 shadow-[0_16px_32px_rgba(0,0,0,0.28)]">
                      <div className="mb-3">
                        <span className="inline-block bg-[#1E8E5A] text-[#0A1F14] font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 leading-none">
                          KERALA, INDIA
                        </span>
                      </div>
                      <p className="font-sans text-[11px] sm:text-[12px] leading-[1.55] text-[#C8C8C4]">
                        Connecting aquarium enthusiasts with healthy, thoughtfully raised ornamental fish
                        across Kerala and beyond.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </PerspectiveCard>
          </div>

          {/* Right Column: Editorial Typography */}
          <div className="lg:col-span-6 lg:pl-6 flex flex-col items-start">
            {/* Magenta Mono Eyebrow */}
            <ScrollReveal delay={0.08} distance={8} depth={false} once={true}>
              <div className="mb-5">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#C81D77]">
                  03 // THE FARM
                </span>
              </div>
            </ScrollReveal>

            {/* 4-Line Stacked Display Headline */}
            <ScrollReveal delay={0.14} distance={10} depth={true} once={true}>
              <h2 className="font-display text-[52px] sm:text-[68px] xl:text-[78px] leading-[0.93] tracking-[0.01em] uppercase text-[#141414] mb-7">
                RAISED WITH
                <br />
                PASSION.
                <br />
                DISCOVERED
                <br />
                WITH WONDER.
              </h2>
            </ScrollReveal>

            {/* Supporting Paragraph */}
            <ScrollReveal delay={0.22} distance={10} depth={false} once={true}>
              <p className="text-[#525250] text-[14px] sm:text-[15px] leading-[1.65] max-w-[400px] font-normal">
                Rooted in Kerala, Mithula Farm Hut is dedicated to the art of raising ornamental
                freshwater fish—celebrating colour, vitality, and the quiet joy of a thriving
                aquarium.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmStorySection;
