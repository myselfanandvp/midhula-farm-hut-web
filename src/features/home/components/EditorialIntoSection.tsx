import React from "react";
import { ScrollReveal, PerspectiveCard } from "../../../components/animations";

export interface EditorialIntroSectionProps {
  /** Optional image or video source to display inside the right editorial frame */
  mediaSrc?: string;
  mediaAlt?: string;
  onViewCollectionClick?: () => void;
}

export const EditorialIntroSection: React.FC<EditorialIntroSectionProps> = ({
  mediaSrc,
  mediaAlt = "Ornamental freshwater fish showcase",
  onViewCollectionClick,
}) => {
  return (
    <section
      id="editorial-intro"
      className="relative w-full bg-[#F7F7F5] text-[#141414] overflow-hidden select-none font-sans"
    >
      {/* Main Content Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-14 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Copy & Brutalist CTA */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Green Eyebrow Badge */}
            <ScrollReveal delay={0.06} distance={8} depth={false} once={false}>
              <div className="mb-7">
                <span className="inline-block bg-[#1E8E5A] text-[#0A1F14] font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 leading-none shadow-[2px_2px_0px_rgba(20,20,20,0.2)]">
                  01 // EDITORIAL INTRODUCTION
                </span>
              </div>
            </ScrollReveal>

            {/* Display Headline */}
            <ScrollReveal delay={0.12} distance={10} depth={true} once={false}>
              <h2 className="font-display text-[52px] sm:text-[68px] xl:text-[76px] leading-[0.94] tracking-[0.01em] uppercase text-[#141414] mb-6">
                NOT JUST FISH.
                <br />
                LIVING ART.
              </h2>
            </ScrollReveal>

            {/* Supporting Paragraph */}
            <ScrollReveal delay={0.2} distance={10} depth={false} once={false}>
              <p className="text-[#525250] text-[14px] sm:text-[15px] leading-[1.65] max-w-[390px] mb-9 font-normal">
                Discover an extraordinary world of ornamental aquatic life. From vibrant guppies to
                elegant bettas, explore the beauty, diversity and character of freshwater fish.
              </p>
            </ScrollReveal>

            {/* Outlined Brutalist CTA Button with Magenta Offset Shadow */}
            <ScrollReveal delay={0.26} distance={10} depth={false} once={false}>
              <button
                type="button"
                onClick={onViewCollectionClick}
                className="group inline-flex items-center gap-3 bg-[#F7F7F5] hover:bg-white text-[#141414] border border-[#141414] shadow-[3px_3px_0px_#C81D77] hover:shadow-[4px_4px_0px_#C81D77] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#C81D77] transition-all font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase px-6 py-3.5 cursor-pointer"
              >
                <span>VIEW FISH COLLECTION</span>
                {/* Right Arrow matching reference */}
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7H12M12 7L8 3M12 7L8 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            </ScrollReveal>
          </div>

          {/* Right Column: L-Shaped Framed Media Viewport */}
          <div className="lg:col-span-7 w-full">
            <PerspectiveCard
              className="w-full"
              revealDistance={12}
              delay={0.14}
              maxTilt={2.0}
              interactive={true}
              once={false}
            >
              <div className="relative w-full bg-[#141414] pr-6 sm:pr-8 shadow-[3px_3px_0px_#1E8E5A]">
                {/* Inner Media Box (Top-Left Flush, Thin Top & Left Border) */}
                <div className="relative w-full aspect-[16/10] bg-[#F7F7F5] border-t border-l border-[#9E9E9A] overflow-hidden">
                  {mediaSrc ? (
                    <img src={mediaSrc} alt={mediaAlt} className="w-full h-full object-cover" />
                  ) : (
                    /* Empty canvas matching the clean placeholder in the reference */
                    <div className="w-full h-full bg-[#F7F7F5]" />
                  )}
                </div>

                {/* Bottom Dark Caption Bar */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 bg-[#141414]">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-[#9E9E9A]">
                    ORNAMENTAL AQUACULTURE // KERALA
                  </span>
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#1E8E5A] shrink-0" />
                </div>
              </div>
            </PerspectiveCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialIntroSection;
