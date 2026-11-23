import React from "react";
import { ScrollReveal, PerspectiveCard } from "../../../components/animations";

export interface GalleryMedia {
  src?: string;
  alt?: string;
}

export interface LivingGallerySectionProps {
  instagramHandle?: string;
  instagramUrl?: string;
  /** Left full-height vertical card media */
  featuredLeftMedia?: GalleryMedia;
  /** Top-middle square tile media */
  topMiddleMedia?: GalleryMedia;
  /** Top-right square tile media */
  topRightMedia?: GalleryMedia;
  /** Bottom-right wide card media */
  bottomWideMedia?: GalleryMedia;
}

export const LivingGallerySection: React.FC<LivingGallerySectionProps> = ({
  instagramHandle = "@MITHULA_FARM_HUT",
  instagramUrl = "https://instagram.com/mithula_farm_hut",
  featuredLeftMedia,
  topMiddleMedia,
  topRightMedia,
  bottomWideMedia,
}) => {
  return (
    <section
      id="living-gallery"
      className="relative w-full bg-[#141414] text-white overflow-hidden select-none font-sans border-t border-[#262626]"
    >
      {/* Main Content Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-14 py-16 sm:py-24">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            {/* Green Mono Eyebrow */}
            <ScrollReveal delay={0.06} distance={8} depth={false} once={false}>
              <div className="mb-3.5">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#1E8E5A]">
                  04 // THE LIVING GALLERY
                </span>
              </div>
            </ScrollReveal>

            {/* Display Headline */}
            <ScrollReveal delay={0.12} distance={10} depth={true} once={false}>
              <h2 className="font-display text-[44px] sm:text-[62px] xl:text-[72px] leading-[0.94] tracking-[0.01em] uppercase text-white">
                THE AQUATIC WORLD, IN MOTION.
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Off-White Instagram Handle Button with Magenta Offset Shadow */}
          <div className="shrink-0 md:pb-1">
            <ScrollReveal delay={0.18} distance={8} depth={false} once={false}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-[#F7F7F5] hover:bg-white text-[#141414] shadow-[3px_3px_0px_#C81D77] hover:shadow-[4px_4px_0px_#C81D77] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#C81D77] transition-all font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase px-5 py-3"
              >
                {/* Instagram Camera Icon */}
                <svg
                  className="w-3.5 h-3.5 text-[#141414] shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.75"
                    y="1.75"
                    width="12.5"
                    height="12.5"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="8" cy="8" r="2.9" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="11.6" cy="4.4" r="0.85" fill="currentColor" />
                </svg>
                <span>{instagramHandle}</span>
              </a>
            </ScrollReveal>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* Left Column: Tall Vertical Media Card with Bottom Caption Bar */}
          <div className="lg:col-span-4 flex flex-col">
            <PerspectiveCard
              className="w-full h-full flex flex-col"
              revealDistance={12}
              delay={0.1}
              maxTilt={2.0}
              interactive={true}
              once={false}
            >
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full h-full flex flex-col border border-[#2E2E2E] bg-[#242424] overflow-hidden"
              >
                {/* Tall Media Viewport */}
                <div className="relative flex-1 min-h-[380px] lg:min-h-[540px] bg-[#242424] overflow-hidden">
                  {featuredLeftMedia?.src ? (
                    <img
                      src={featuredLeftMedia.src}
                      alt={featuredLeftMedia.alt ?? "Farm tanks showcase"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#242424]" />
                  )}
                </div>

                {/* Bottom Caption Strip */}
                <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#1A1A1A] border-t border-[#2E2E2E]">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-[#A3A3A3]">
                    FARM TANKS // {instagramHandle}
                  </span>
                  <svg
                    className="w-3 h-3 text-[#C81D77] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                </div>
              </a>
            </PerspectiveCard>
          </div>

          {/* Right Column: 2 Top Square Tiles + 1 Bottom Wide Card */}
          <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-5">
            {/* Top Row: Two Equal Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Top-Middle Tile */}
              <PerspectiveCard
                revealDistance={10}
                delay={0.16}
                maxTilt={2.0}
                interactive={true}
                once={false}
              >
                <div className="relative aspect-[1.08/1] border border-[#2E2E2E] bg-[#242424] overflow-hidden">
                  {topMiddleMedia?.src ? (
                    <img
                      src={topMiddleMedia.src}
                      alt={topMiddleMedia.alt ?? "Aquarium detail 1"}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#242424]" />
                  )}
                </div>
              </PerspectiveCard>

              {/* Top-Right Tile */}
              <PerspectiveCard
                revealDistance={10}
                delay={0.22}
                maxTilt={2.0}
                interactive={true}
                once={false}
              >
                <div className="relative aspect-[1.08/1] border border-[#2E2E2E] bg-[#242424] overflow-hidden">
                  {topRightMedia?.src ? (
                    <img
                      src={topRightMedia.src}
                      alt={topRightMedia.alt ?? "Aquarium detail 2"}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#242424]" />
                  )}
                </div>
              </PerspectiveCard>
            </div>

            {/* Bottom Row: Wide Feature Card with Bottom Caption Bar */}
            <PerspectiveCard
              className="flex-1 flex flex-col"
              revealDistance={12}
              delay={0.28}
              maxTilt={1.8}
              interactive={true}
              once={false}
            >
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full h-full flex flex-col border border-[#2E2E2E] bg-[#242424] overflow-hidden"
              >
                {/* Wide Media Viewport */}
                <div className="relative flex-1 min-h-[240px] sm:min-h-[270px] bg-[#242424] overflow-hidden">
                  {bottomWideMedia?.src ? (
                    <img
                      src={bottomWideMedia.src}
                      alt={bottomWideMedia.alt ?? "Instagram aquatic showcase"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#242424]" />
                  )}
                </div>

                {/* Bottom Caption Strip */}
                <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#1A1A1A] border-t border-[#2E2E2E]">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-[#A3A3A3]">
                    FOLLOW {instagramHandle} ON INSTAGRAM
                  </span>
                  <svg
                    className="w-3 h-3 text-[#1E8E5A] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9L9 3H4M9 3V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </a>
            </PerspectiveCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivingGallerySection;
